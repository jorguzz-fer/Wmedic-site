# Stage 1: Build
FROM oven/bun:1-alpine AS builder
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile
COPY . .
RUN bun run build

# Stage 2: Serve
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html

# SPA support: redirect all routes to index.html
# $uri/index.html serve as páginas estáticas em public/ (ex.: /apresentacao-comercial) sem redirecionar.
RUN echo 'server { \
    listen 80; \
    server_name _; \
    root /usr/share/nginx/html; \
    index index.html; \
    absolute_redirect off; \
    location / { \
        try_files $uri $uri/index.html $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

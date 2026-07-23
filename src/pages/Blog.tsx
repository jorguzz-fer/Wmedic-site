import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Clock,
  Tag,
  MagnifyingGlass,
} from "@phosphor-icons/react";
import PageLayout from "@/components/layout/PageLayout";

const categories = [
  "Todos",
  "Saúde",
  "Qualidade de Vida",
  "Educação Financeira",
  "Novidades WOW+",
];

const posts = [
  {
    slug: "telemedicina-transformando-cuidado-saude",
    title: "Como a telemedicina pode transformar o cuidado com a sua saúde",
    excerpt:
      "Descubra como consultas online 24h estão revolucionando o acesso à saúde no Brasil e como a WOW+ torna isso acessível para todas as famílias.",
    category: "Saúde",
    date: "02 Abr 2026",
    readTime: "5 min",
    image: "/images/5.webp",
    featured: true,
  },
  {
    slug: "habitos-melhorar-qualidade-vida",
    title: "5 hábitos simples para melhorar sua qualidade de vida",
    excerpt:
      "Pequenas mudanças na rotina podem trazer grandes resultados para sua saúde física e mental. Confira nossas dicas práticas.",
    category: "Qualidade de Vida",
    date: "28 Mar 2026",
    readTime: "4 min",
    image: "/images/7.jpg",
    featured: false,
  },
  {
    slug: "renda-extra-wow-mais",
    title: "Renda extra: como a WOW+ pode ajudar você a ganhar mais",
    excerpt:
      "Conheça o programa de consultores WOW+ e descubra como gerar renda recorrente ajudando outras pessoas a cuidarem da saúde.",
    category: "Educação Financeira",
    date: "25 Mar 2026",
    readTime: "6 min",
    image: "/images/4.jpg",
    featured: false,
  },
  {
    slug: "nr1-saude-mental-empresas",
    title: "NR-1 e saúde mental: o que muda para as empresas em 2026",
    excerpt:
      "Entenda as novas exigencias da NR-1 sobre saúde mental no trabalho e como a WOW+ ajuda empresas a se adequarem.",
    category: "Saúde",
    date: "20 Mar 2026",
    readTime: "7 min",
    image: "/images/12.jpg",
    featured: false,
  },
  {
    slug: "desconto-medicamentos-economizar",
    title: "Desconto em medicamentos: como economizar até 90%",
    excerpt:
      "Saiba como usar a rede de farmácias credenciadas WOW+ para pagar muito menos nos seus medicamentos do dia a dia.",
    category: "Saúde",
    date: "15 Mar 2026",
    readTime: "3 min",
    image: "/images/14.jpg",
    featured: false,
  },
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredPosts =
    activeCategory === "Todos"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  const featuredPost = posts.find((p) => p.featured);
  const regularPosts = filteredPosts.filter((p) => !p.featured);

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative bg-navy pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-orange opacity-10 rounded-l-full blur-3xl transform translate-x-1/2" />
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-primary font-sans text-sm font-semibold uppercase tracking-widest">
              Blog WOW+
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-secondary-foreground mt-4 leading-tight">
              Conteúdo que cuida de{" "}
              <span className="text-gradient">você</span>
            </h1>
            <p className="text-secondary-foreground/70 font-sans text-lg mt-6 max-w-2xl mx-auto">
              Dicas de saúde, qualidade de vida, educação financeira e tudo sobre
              o universo WOW+.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && activeCategory === "Todos" && (
        <section className="py-16">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
            <Link
              to={`/blog/${featuredPost.slug}`}
              className="group grid lg:grid-cols-2 gap-8 items-center bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 border border-border"
            >
              <div className="relative overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full font-sans text-xs font-bold uppercase tracking-wider">
                    Destaque
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-4">
                  <span className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    <Tag size={14} weight="bold" />
                    {featuredPost.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-sans text-xs text-muted-foreground">
                    <Clock size={14} />
                    {featuredPost.readTime} de leitura
                  </span>
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-muted-foreground font-sans text-base mt-4 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-2 mt-6 text-primary font-sans font-semibold text-sm group-hover:gap-3 transition-all">
                  Ler artigo completo
                  <ArrowUpRight size={18} />
                </div>
                <p className="font-sans text-xs text-muted-foreground mt-4">
                  {featuredPost.date}
                </p>
              </div>
            </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="pb-4">
        <div className="container">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full font-sans text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground shadow-orange"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
              <Link
                to={`/blog/${post.slug}`}
                className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border block"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex items-center gap-1 font-sans text-xs font-semibold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                      <Tag size={12} weight="bold" />
                      {post.category}
                    </span>
                    <span className="inline-flex items-center gap-1 font-sans text-xs text-muted-foreground">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground font-sans text-sm mt-3 leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-5">
                    <span className="font-sans text-xs text-muted-foreground">
                      {post.date}
                    </span>
                    <span className="text-primary font-sans text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                      Ler mais <ArrowUpRight size={16} />
                    </span>
                  </div>
                </div>
              </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
        </div>
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-primary text-4xl mb-6">&#10084;</div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-secondary-foreground max-w-3xl mx-auto leading-tight">
              Fique por dentro das novidades
            </h2>
            <p className="text-secondary-foreground/70 font-sans text-lg mt-6 max-w-xl mx-auto">
              Receba dicas de saúde e conteúdos exclusivos direto no seu e-mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-secondary-foreground placeholder:text-secondary-foreground/40 font-sans text-sm focus:outline-none focus:border-primary"
              />
              <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-sans font-bold text-sm hover:bg-orange-dark transition-colors shadow-orange shrink-0">
                Assinar
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Blog;

import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Clock,
  CalendarBlank,
  Tag,
  ShareNetwork,
  WhatsappLogo,
  FacebookLogo,
  LinkedinLogo,
  LinkSimple,
  ArrowUpRight,
  User,
} from "@phosphor-icons/react";
import PageLayout from "@/components/layout/PageLayout";

// Dados dos artigos (futuramente viria de um CMS/API)
const allPosts = [
  {
    slug: "gestao-assistencial",
    title: "Gestão assistencial: o que é e por que importa",
    excerpt:
      "Como a gestão da operação assistencial melhora qualidade, segurança e resultados em saúde.",
    category: "Gestão",
    date: "02 Abr 2026",
    readTime: "5 min",
    author: "Equipe WMedic",
    image: "/images/5.webp",
    content: [
      {
        type: "paragraph",
        text: "A gestão assistencial é a disciplina que organiza e coordena toda a operação de cuidado ao paciente. Ela conecta protocolos clínicos, equipes, processos e indicadores para que a assistência seja prestada com qualidade, segurança e eficiência.",
      },
      {
        type: "heading",
        text: "O que é gestão assistencial",
      },
      {
        type: "paragraph",
        text: "Trata-se de estruturar a operação médica de ponta a ponta: definir fluxos de atendimento, padronizar condutas, acompanhar a jornada do paciente e monitorar resultados clínicos. O objetivo é garantir que o cuidado certo aconteça no momento certo, com previsibilidade e consistência.",
      },
      {
        type: "heading",
        text: "Por que importa",
      },
      {
        type: "list",
        items: [
          "Padronização de protocolos e condutas clínicas",
          "Redução de variabilidade e de eventos adversos",
          "Melhoria contínua a partir de indicadores assistenciais",
          "Coordenação entre equipes e serviços de apoio",
          "Uso mais eficiente dos recursos da operação",
        ],
      },
      {
        type: "quote",
        text: "Gestão assistencial bem feita é o que transforma boas intenções clínicas em resultados consistentes para o paciente.",
      },
      {
        type: "paragraph",
        text: "A WMedic atua na gestão da operação médica e assistencial do grupo Wow+, unindo governança clínica, indicadores e melhoria contínua para elevar a qualidade e a segurança do cuidado.",
      },
    ],
  },
  {
    slug: "qualidade-seguranca-paciente",
    title: "Qualidade e segurança do paciente na prática",
    excerpt:
      "Protocolos clínicos, indicadores e melhoria contínua no cuidado ao paciente.",
    category: "Qualidade",
    date: "28 Mar 2026",
    readTime: "4 min",
    author: "Equipe WMedic",
    image: "/images/7.jpg",
    content: [
      {
        type: "paragraph",
        text: "Segurança do paciente é o compromisso de reduzir ao máximo os riscos evitáveis do cuidado. Na prática, isso se traduz em processos claros, protocolos baseados em evidência e uma cultura que aprende com cada ocorrência.",
      },
      {
        type: "heading",
        text: "Protocolos e boas práticas",
      },
      {
        type: "paragraph",
        text: "Padronizar condutas clínicas garante que pacientes em situações semelhantes recebam o mesmo cuidado de qualidade, independentemente da equipe de plantão. Protocolos bem desenhados diminuem a variabilidade e tornam a assistência mais previsível.",
      },
      {
        type: "heading",
        text: "Indicadores que orientam o cuidado",
      },
      {
        type: "list",
        items: [
          "Monitoramento de eventos adversos e incidentes",
          "Acompanhamento de desfechos clínicos",
          "Auditorias e ciclos de melhoria contínua",
          "Metas de qualidade acompanhadas por equipe",
        ],
      },
      {
        type: "quote",
        text: "Segurança do paciente não é um projeto pontual: é uma cultura sustentada por processos, dados e melhoria contínua.",
      },
      {
        type: "paragraph",
        text: "A WMedic apoia a operação assistencial com governança clínica e indicadores que sustentam a qualidade e a segurança do cuidado em cada etapa da jornada do paciente.",
      },
    ],
  },
  {
    slug: "tecnologia-dados-gestao",
    title: "Tecnologia e dados na gestão médica",
    excerpt:
      "Como indicadores e governança tornam a operação assistencial mais inteligente.",
    category: "Tecnologia",
    date: "25 Mar 2026",
    readTime: "6 min",
    author: "Equipe WMedic",
    image: "/images/4.jpg",
    content: [
      {
        type: "paragraph",
        text: "Dados são hoje um dos principais ativos da gestão médica. Quando bem organizados e analisados, eles revelam gargalos, apoiam decisões clínicas e ajudam a operação a evoluir de forma contínua.",
      },
      {
        type: "heading",
        text: "Da informação à decisão",
      },
      {
        type: "paragraph",
        text: "Reunir informações assistenciais em indicadores confiáveis permite enxergar a operação como um todo. Painéis e relatórios transformam registros do dia a dia em conhecimento útil para gestores e equipes clínicas.",
      },
      {
        type: "heading",
        text: "Governança de dados",
      },
      {
        type: "list",
        items: [
          "Indicadores assistenciais padronizados e confiáveis",
          "Governança e segurança das informações de saúde",
          "Visão integrada da jornada do paciente",
          "Suporte a decisões clínicas e gerenciais",
        ],
      },
      {
        type: "quote",
        text: "Tecnologia não substitui o cuidado humano: ela dá às equipes a informação certa para cuidar melhor.",
      },
      {
        type: "paragraph",
        text: "A WMedic usa indicadores e governança para tornar a operação assistencial mais inteligente, apoiando a tomada de decisão com dados e mantendo o cuidado ao paciente no centro.",
      },
    ],
  },
];

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = allPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <PageLayout>
        <section className="py-40 text-center">
          <div className="container">
            <h1 className="font-display text-4xl font-bold text-foreground mb-4">
              Artigo não encontrado
            </h1>
            <p className="text-muted-foreground font-sans mb-8">
              O artigo que você procura não existe ou foi removido.
            </p>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-sans font-bold text-sm hover:bg-orange-dark transition-colors"
            >
              <ArrowLeft size={18} />
              Voltar ao Blog
            </Link>
          </div>
        </section>
      </PageLayout>
    );
  }

  const relatedPosts = allPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  // TODO cliente: domínio final do site
  const shareUrl = `https://wmedic.com.br/blog/${slug}`;

  const copyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    alert("Link copiado!");
  };

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative bg-navy pt-32 pb-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-orange opacity-10 rounded-l-full blur-3xl transform translate-x-1/2" />
        <div className="container relative z-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-secondary-foreground/60 hover:text-primary font-sans text-sm font-medium mb-8 transition-colors"
            >
              <ArrowLeft size={16} />
              Voltar ao Blog
            </Link>

            <div className="flex flex-wrap items-center gap-4 mb-5">
              <span className="inline-flex items-center gap-1.5 font-sans text-xs font-bold text-primary bg-primary/15 px-3 py-1 rounded-full">
                <Tag size={14} weight="bold" />
                {post.category}
              </span>
              <span className="inline-flex items-center gap-1.5 font-sans text-xs text-secondary-foreground/50">
                <CalendarBlank size={14} />
                {post.date}
              </span>
              <span className="inline-flex items-center gap-1.5 font-sans text-xs text-secondary-foreground/50">
                <Clock size={14} />
                {post.readTime} de leitura
              </span>
            </div>

            <h1 className="font-display text-3xl md:text-5xl font-bold text-secondary-foreground leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-3 mt-6">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <User size={20} className="text-primary" />
              </div>
              <div>
                <p className="font-sans text-sm font-semibold text-secondary-foreground">
                  {post.author}
                </p>
                <p className="font-sans text-xs text-secondary-foreground/50">
                  Publicado em {post.date}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="container max-w-4xl -mt-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-2xl overflow-hidden shadow-card-hover"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full aspect-[16/9] object-cover"
          />
        </motion.div>
      </div>

      {/* Content */}
      <section className="py-16">
        <div className="container max-w-3xl">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            {post.content.map((block, i) => {
              switch (block.type) {
                case "heading":
                  return (
                    <h2
                      key={i}
                      className="font-display text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4"
                    >
                      {block.text}
                    </h2>
                  );
                case "paragraph":
                  return (
                    <p
                      key={i}
                      className="font-sans text-base md:text-lg text-foreground/80 leading-relaxed"
                    >
                      {block.text}
                    </p>
                  );
                case "list":
                  return (
                    <ul key={i} className="space-y-3 my-6 pl-2">
                      {block.items?.map((item, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-3 font-sans text-base text-foreground/80"
                        >
                          <span className="text-primary mt-1.5 shrink-0">
                            ●
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  );
                case "quote":
                  return (
                    <blockquote
                      key={i}
                      className="border-l-4 border-primary bg-primary/5 rounded-r-xl px-6 py-5 my-8"
                    >
                      <p className="font-sans text-base md:text-lg font-medium text-foreground/90 italic">
                        "{block.text}"
                      </p>
                    </blockquote>
                  );
                default:
                  return null;
              }
            })}
          </motion.article>

          {/* Share */}
          <div className="border-t border-border mt-12 pt-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <ShareNetwork size={20} className="text-muted-foreground" />
                <span className="font-sans text-sm font-semibold text-foreground">
                  Compartilhar:
                </span>
              </div>
              <div className="flex gap-2">
                <a
                  href={`https://api.whatsapp.com/send?text=${encodeURIComponent(post.title + " " + shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-600 hover:bg-green-500/20 transition-colors"
                >
                  <WhatsappLogo size={20} weight="fill" />
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-blue-600/10 flex items-center justify-center text-blue-600 hover:bg-blue-600/20 transition-colors"
                >
                  <FacebookLogo size={20} weight="fill" />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-blue-700/10 flex items-center justify-center text-blue-700 hover:bg-blue-700/20 transition-colors"
                >
                  <LinkedinLogo size={20} weight="fill" />
                </a>
                <button
                  onClick={copyLink}
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-muted/80 transition-colors"
                >
                  <LinkSimple size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* CTA inline */}
          <div className="mt-12 bg-gradient-orange rounded-2xl p-8 md:p-10 text-center">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
              Gestão médica com a WMedic
            </h3>
            <p className="font-sans text-white/80 text-base mb-6 max-w-lg mx-auto">
              Excelência, segurança e humanização na gestão da operação
              assistencial. Fale com a nossa equipe.
            </p>
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 bg-white text-orange-dark px-8 py-3.5 rounded-full font-sans font-bold text-base hover:bg-white/90 transition-colors shadow-lg"
            >
              Fale com a WMedic
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-warm-gray">
        <div className="container">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-10 text-center">
            Leia também
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {relatedPosts.map((rPost, i) => (
              <motion.div
                key={rPost.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  to={`/blog/${rPost.slug}`}
                  className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border block"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={rPost.image}
                      alt={rPost.title}
                      className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-flex items-center gap-1 font-sans text-xs font-semibold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full mb-3">
                      <Tag size={12} weight="bold" />
                      {rPost.category}
                    </span>
                    <h3 className="font-display text-lg font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
                      {rPost.title}
                    </h3>
                    <p className="font-sans text-xs text-muted-foreground mt-3">
                      {rPost.date} · {rPost.readTime}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default BlogPost;

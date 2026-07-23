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

// Dados dos artigos (futuramente viria dé um CMS/API)
const allPosts = [
  {
    slug: "telemedicina-transformando-cuidado-saude",
    title: "Como a telemedicina pode transformar o cuidado com a sua saúde",
    excerpt:
      "Descubra como consultas online 24h estão revolucionando o acesso à saúde no Brasil e como a WOW+ torna isso acessível para todas as famílias.",
    category: "Saúde",
    date: "02 Abr 2026",
    readTime: "5 min",
    author: "Equipe WOW+",
    image: "/images/5.webp",
    content: [
      {
        type: "paragraph",
        text: "A telemedicina deixou de ser uma tendência para se tornar uma realidade consolidada no Brasil. Com o avanço da tecnologia e a mudança de comportamento dos pacientes, consultar um médico pelo celular já é tão natural quanto pedir comida por aplicativo.",
      },
      {
        type: "heading",
        text: "O que é telemedicina?",
      },
      {
        type: "paragraph",
        text: "Telemedicina é a prática de oferecer serviços médicos à distância, utilizando tecnologias de comúnicação como videochamadas, chats e plataformas digitais. No Brasil, a prática foi regulamentada e ganhou força especialmente após 2020.",
      },
      {
        type: "paragraph",
        text: "Com a WOW+, você tem acesso à médicos 24 horas por dia, 7 dias por semana, diretamente do seu celular. Sem filas, sem deslocamento, sem burocracia.",
      },
      {
        type: "heading",
        text: "Benefícios da telemedicina",
      },
      {
        type: "list",
        items: [
          "Acesso imediato a profissionais de saúde qualificados",
          "Economia de tempo e dinheiro com deslocamento",
          "Atendimento disponível 24h, inclusive em feriados",
          "Receitas e atestados médicos digitais com validade legal",
          "Mais de 15 especialidades disponíveis online",
          "Ideal para acompanhamento de condições crônicas",
        ],
      },
      {
        type: "heading",
        text: "Como a WOW+ democratiza o acesso",
      },
      {
        type: "paragraph",
        text: "A WOW+ nasceu com o propósito de democratizar o acesso à saúde. Por apenas R$ 49,90/mês, você e toda sua família têm acesso à consultas médicas ilimitadas, descontos em exames e medicamentos, e muito mais.",
      },
      {
        type: "quote",
        text: "Saúde de qualidade não deveria ser privilégio. Com a WOW+, qualquer família brasileira pode ter acesso à cuidados médicos de excelência.",
      },
      {
        type: "paragraph",
        text: "Nossa plataforma conecta você a uma rede completa de médicos, especialistas, clínicas e laboratórios em todo o Brasil. Tudo isso na palma da sua mão, com a praticidade que sua rotina exige.",
      },
      {
        type: "heading",
        text: "Comece agora",
      },
      {
        type: "paragraph",
        text: "Não espere ficar doente para cuidar da saúde. Assine a WOW+ hoje e tenha a tranquilidade de saber que você e sua família estão protegidos. Consultas médicas 24h, descontos em medicamentos e muito mais — tudo em uma única assinatura acessível.",
      },
    ],
  },
  {
    slug: "habitos-melhorar-qualidade-vida",
    title: "5 hábitos simples para melhorar sua qualidade de vida",
    excerpt:
      "Pequenas mudanças na rotina podem trazer grandes resultados para sua saúde física e mental. Confira nossas dicas práticas.",
    category: "Qualidade de Vida",
    date: "28 Mar 2026",
    readTime: "4 min",
    author: "Equipe WOW+",
    image: "/images/7.jpg",
    content: [
      {
        type: "paragraph",
        text: "Melhorar a qualidade de vida não exige mudanças radicais. Muitas vezes, são os pequenos hábitos diários que fazem a maior diferença na nossa saúde física e mental.",
      },
      {
        type: "heading",
        text: "1. Hidrate-se adequadamente",
      },
      {
        type: "paragraph",
        text: "Beber pelo menos 2 litros de água por dia é fundamental para o funcionamento do corpo. A hidratação adequada melhora a disposição, a pele, a digestão e até o humor.",
      },
      {
        type: "heading",
        text: "2. Durma bem",
      },
      {
        type: "paragraph",
        text: "O sono de qualidade é um dos pilares da saúde. Procure dormir de 7 a 8 horas por noite, mantenha horários regulares e evite telas antes de dormir.",
      },
      {
        type: "heading",
        text: "3. Movimente-se",
      },
      {
        type: "paragraph",
        text: "Não precisa ser atleta. Caminhadas de 30 minutos, alongamentos e exercícios leves já trazem benefícios enormês para o corpo e a mente.",
      },
      {
        type: "heading",
        text: "4. Cuide da saúde mental",
      },
      {
        type: "paragraph",
        text: "Reserve momentos para atividades que te fazem bem. Meditar, ler, conversar com amigos — tudo isso contribui para o equilíbrio emocional.",
      },
      {
        type: "heading",
        text: "5. Faça check-ups regulares",
      },
      {
        type: "paragraph",
        text: "Prevenir é sempre melhor que remediar. Com a WOW+, você tem acesso à consultas médicas e exames com descontos, facilitando o acompanhamento regular da sua saúde.",
      },
      {
        type: "quote",
        text: "Cuidar da saúde é um investimento diário. Comece hoje com pequenos passos e colha grandes resultados.",
      },
    ],
  },
  {
    slug: "renda-extra-wow-mais",
    title: "Renda extra: como a WOW+ pode ajudar você a ganhar mais",
    excerpt:
      "Conheça o programa de consultores WOW+ e descubra como gerar renda recorrente ajudando outras pessoas.",
    category: "Educação Financeira",
    date: "25 Mar 2026",
    readTime: "6 min",
    author: "Equipe WOW+",
    image: "/images/4.jpg",
    content: [
      {
        type: "paragraph",
        text: "Buscar uma renda extra é uma realidade de milhões de brasileiros. E se você pudesse ganhar dinheiro ajudando pessoas a terem acesso à saúde de qualidade?",
      },
      {
        type: "heading",
        text: "O programa de consultores WOW+",
      },
      {
        type: "paragraph",
        text: "A WOW+ oferecé um programa de consultores onde você pode gerar renda recorrente a cada assinatura ativa que indicar. Sem investimento inicial, sem estoque, sem complicação.",
      },
      {
        type: "list",
        items: [
          "Comissões recorrentes mensais",
          "Plano de carreira estruturado",
          "Treinamentos exclusivos gratuitos",
          "Materiais de marketing prontos",
          "Suporte dedicado da equipe",
        ],
      },
      {
        type: "heading",
        text: "Como funciona a renda recorrente",
      },
      {
        type: "paragraph",
        text: "Diferente de vendas tradicionais, na WOW+ sua renda é recorrente. Isso significa que você ganha todos os meses enquanto seus clientes permanecerem ativos. Quanto mais clientes, maior sua renda — e ela não para de crescer.",
      },
      {
        type: "quote",
        text: "Imagine ganhar uma renda que cresce mês a mês, mesmo enquanto você dorme. Essa é a proposta do programa de consultores WOW+.",
      },
      {
        type: "heading",
        text: "Comece agora",
      },
      {
        type: "paragraph",
        text: "Cadastre-se como consultor, acesse nossos treinamentos e comece a construir sua rede. O primeiro passo para a sua independência financeira está a um clique de distância.",
      },
    ],
  },
  {
    slug: "nr1-saude-mental-empresas",
    title: "NR-1 e saúde mental: o que muda para as empresas em 2026",
    excerpt:
      "Entenda as novas exigências da NR-1 sobre saúde mental no trabalho e como a WOW+ ajuda empresas a se adequarem.",
    category: "Saúde",
    date: "20 Mar 2026",
    readTime: "7 min",
    author: "Equipe WOW+",
    image: "/images/12.jpg",
    content: [
      {
        type: "paragraph",
        text: "A atualização da NR-1 trouxe mudanças significativas para empresas de todos os portes. Agora, a gestão de riscos psicossociais — como estrêsse, assédio e burnout — é obrigatória no Programa de Gerenciamento de Riscos (PGR).",
      },
      {
        type: "heading",
        text: "O que mudou na NR-1",
      },
      {
        type: "list",
        items: [
          "Inclusão obrigatória de riscos psicossociais no PGR",
          "Responsabilidade do empregador pela saúde mental dos colaboradores",
          "Necessidade de documentação e evidências de ações preventivas",
          "Fiscalização intensificada pelo MTE a partir de 2026",
        ],
      },
      {
        type: "heading",
        text: "Impacto para as empresas",
      },
      {
        type: "paragraph",
        text: "Empresas que não se adequarem às novas exigências estão sujeitas a autuações, multas e até interdições. Além dos riscos legais, a falta de cuidado com a saúde mental dos colaboradores impacta diretamente na produtividade, no turnover e no clima organizacional.",
      },
      {
        type: "quote",
        text: "Cuidar da saúde mental dos colaboradores não é mais opcional — é uma exigência legal é uma responsabilidade corporativa.",
      },
      {
        type: "heading",
        text: "Como a WOW+ pode ajudar",
      },
      {
        type: "paragraph",
        text: "A WOW+ oferece soluções completas para empresas se adequarem à NR-1: telemedicina com suporte psicológico 24h, programas de bem-estar, relatórios para RH e documentação de conformidade. Tudo integrado em uma plataforma digital acessível.",
      },
    ],
  },
  {
    slug: "desconto-medicamentos-economizar",
    title: "Desconto em medicamentos: como economizar até 90%",
    excerpt:
      "Saiba como usar a rede de farmácias credenciadas WOW+ para pagar muito menos nos seus medicamentos.",
    category: "Saúde",
    date: "15 Mar 2026",
    readTime: "3 min",
    author: "Equipe WOW+",
    image: "/images/14.jpg",
    content: [
      {
        type: "paragraph",
        text: "O gasto com medicamentos é uma das maiores preocupações das famílias brasileiras. Mas e se você pudesse economizar até 90% nos seus remédios do dia a dia?",
      },
      {
        type: "heading",
        text: "A rede de farmácias WOW+",
      },
      {
        type: "paragraph",
        text: "Com mais de 19 mil farmácias credenciadas em todo o Brasil, a WOW+ oferece descontos exclusivos em medicamentos genéricos e de marca. E o melhor: a economia é imediata, direto no caixa da farmácia.",
      },
      {
        type: "heading",
        text: "Como funciona",
      },
      {
        type: "list",
        items: [
          "Acesse o app WOW+ e localize a farmácia mais próxima",
          "Apresente seu cartão digital no caixa",
          "O desconto é aplicado automaticamente",
          "Economia de até 90% em medicamentos selecionados",
        ],
      },
      {
        type: "quote",
        text: "Mais de 80 mil farmácias parceiras em todo o Brasil. Onde você estiver, tem uma farmácia WOW+ por perto.",
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

  const shareUrl = `https://wow.tudomudou.com.br/blog/${slug}`;

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
              Cuide da sua saúde com a WOW+
            </h3>
            <p className="font-sans text-white/80 text-base mb-6 max-w-lg mx-auto">
              Médicos 24h, descontos em medicamentos e muito mais por apenas
              R$ 49,90/mês.
            </p>
            <a
              href="https://app.wowmais.com.br/consumer?ref=negócioswowbrasil"
              className="inline-flex items-center gap-2 bg-white text-orange-dark px-8 py-3.5 rounded-full font-sans font-bold text-base hover:bg-white/90 transition-colors shadow-lg"
            >
              Assinar Agora
              <ArrowUpRight size={18} />
            </a>
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

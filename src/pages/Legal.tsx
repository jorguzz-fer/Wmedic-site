import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  FileText,
  Lock,
  UserCircle,
  HandshakeIcon,
  Medal,
  Database,
} from "@phosphor-icons/react";
import PageLayout from "@/components/layout/PageLayout";

const sections = [
  {
    id: "termos",
    Icon: FileText,
    title: "Termos de Uso",
    summary: "Condições de acesso e uso da plataforma WOW+.",
    content: [
      {
        heading: "1. Aceitação dos Termos",
        text: "Ao acessar e utilizar a plataforma WOW+, você concorda com os presentes Termos de Uso. Caso não concorde com alguma das condições aqui estabelecidas, recomendamos que não utilize nossos serviços.",
      },
      {
        heading: "2. Descrição dos Serviços",
        text: "A WOW+ é uma plataforma de serviços e benefícios em saúde que oferece acesso à telemedicina, descontos em consultas, exames e medicamentos por meio de parceiros e rede credenciada. A WOW+ não é plano de saúde e não substitui a contratação de um.",
      },
      {
        heading: "3. Cadastro e Conta",
        text: "Para utilizar nossos serviços, é necessário realizar cadastro fornecendo informações verdadeiras e atualizadas. Você é responsável pela confidencialidade de suas credenciais de acesso e por todas as atividades realizadas em sua conta.",
      },
      {
        heading: "4. Pagamento e Assinatura",
        text: "Os planos são cobrados mensalmente conforme os valores vigentes no momento da contratação. O cancelamento pode ser realizado a qualquer momento pela plataforma, sem multa ou fidelidade.",
      },
      {
        heading: "5. Limitação de Responsabilidade",
        text: "A WOW+ atua como intermediadora entre os usuários e os profissionais/estabelecimentos parceiros. Não nos responsabilizamos diretamente pelos serviços prestados por terceiros, embora trabalhemos para garantir a qualidade de nossa rede credenciada.",
      },
      {
        heading: "6. Alterações nos Termos",
        text: "Reservamo-nos o direito de alterar estes Termos de Uso a qualquer momento. As alterações serão comúnicadas através da plataforma e entrarão em vigor na data de sua publicação.",
      },
    ],
  },
  {
    id: "privacidade",
    Icon: Lock,
    title: "Política de Privacidade",
    summary: "Como coletamos, usamos e protegemos seus dados (LGPD).",
    content: [
      {
        heading: "1. Dados Coletados",
        text: "Coletamos dados pessoais necessários para a prestação dos serviços, incluindo: nome completo, CPF, data de nascimento, endereço, e-mail, telefone e dados de saúde quando aplicável ao atendimento médico.",
      },
      {
        heading: "2. Finalidade do Tratamento",
        text: "Seus dados são utilizados para: prestação dos serviços contratados, comúnicação sobre a plataforma, melhoria da experiência do usuário, cumprimento de obrigações legais e, quando autorizado, envio de ofertas e novidades.",
      },
      {
        heading: "3. Base Legal",
        text: "O tratamento de dados pessoais pela WOW+ está fundamentado nas bases legais previstas na Lei Geral de Proteção de Dados (Lei 13.709/2018), incluindo consentimento, execução de contrato e legítimo interesse.",
      },
      {
        heading: "4. Compartilhamento de Dados",
        text: "Seus dados podem ser compartilhados com parceiros e profissionais de saúde exclusivamente para a prestação dos serviços contratados. Não vendemos ou comercializamos dados pessoais de nossos usuários.",
      },
      {
        heading: "5. Segurança",
        text: "Empregamos medidas técnicas e administrativas de segurança para proteger seus dados pessoais contra acesso não autorizado, destruição, perda ou alteração. Utilizamos criptografia, controle de acesso e monitoramento contínuo.",
      },
      {
        heading: "6. Direitos do Titular",
        text: "Você tem direito a: acessar seus dados, corrigir informações incompletas ou desatualizadas, solicitar a exclusão de dados, revogar o consentimento e solicitar a portabilidade dos dados. Para exercer esses direitos, entre em contato pelo nosso canal de atendimento.",
      },
    ],
  },
  {
    id: "contrato-cliente",
    Icon: UserCircle,
    title: "Contrato do Cliente",
    summary: "Direitos e obrigações do assinante WOW+.",
    content: [
      {
        heading: "1. Objeto",
        text: "O presente contrato tem por objeto a prestação de serviços de acesso à plataforma WOW+ e seus benefícios, conforme o plano contratado pelo cliente.",
      },
      {
        heading: "2. Vigência",
        text: "O contrato tem vigência mensal, renovando-se automaticamente a cada período de cobrança. Não há fidelidade mínima e o cancelamento pode ser solicitado a qualquer momento.",
      },
      {
        heading: "3. Obrigações do Cliente",
        text: "O cliente se compromete a fornecer informações verdadeiras no cadastro, utilizar os serviços de forma adequada e manter seus dados de pagamento atualizados na plataforma.",
      },
      {
        heading: "4. Obrigações da WOW+",
        text: "A WOW+ se compromete a disponibilizar os serviços contratados, manter a plataforma em funcionamento, prestar suporte ao cliente e garantir a segurança dos dados conforme a LGPD.",
      },
      {
        heading: "5. Cancelamento",
        text: "O cancelamento pode ser realizado diretamente pela plataforma ou pelo canal de atendimento. Após o cancelamento, o acesso àos serviços será mantido até o final do período já pago.",
      },
    ],
  },
  {
    id: "contrato-consultor",
    Icon: HandshakeIcon,
    title: "Contrato do Consultor",
    summary: "Relação entre a WOW+ e consultores independentes.",
    content: [
      {
        heading: "1. Objeto",
        text: "Este contrato regula a relação entre a WOW+ e seus consultores independentes, que atuam na divulgação e venda dos planos da plataforma.",
      },
      {
        heading: "2. Natureza da Relação",
        text: "O consultor atua de forma autônoma e independente, sem vínculo empregatício com a WOW+. A remuneração é baseada em comissões sobre as vendas realizadas e a recorrência da carteira de clientes.",
      },
      {
        heading: "3. Obrigações do Consultor",
        text: "O consultor deve seguir o código de conduta da WOW+, utilizar apenas materiais oficiais de divulgação e prestar informações verdadeiras aos potenciais clientes sobre os serviços oferecidos.",
      },
      {
        heading: "4. Remuneração",
        text: "A remuneração do consultor é composta por comissões diretas sobre vendas, bônus por metas atingidas e renda recorrente sobre a manutenção da carteira de clientes ativos.",
      },
    ],
  },
  {
    id: "conduta",
    Icon: Medal,
    title: "Código de Conduta",
    summary: "Princípios éticos que guiam todos na WOW+.",
    content: [
      {
        heading: "1. Princípios Gerais",
        text: "Todos os colaboradores, consultores e parceiros da WOW+ devem pautar suas ações pela ética, transparência, respeito e compromisso com o bem-estar dos clientes e da comunidade.",
      },
      {
        heading: "2. Relacionamento com Clientes",
        text: "Prezamos pelo atendimento humanizado, com informações claras e verdadeiras. É proibida qualquer prática de venda enganosa, pressão indevida ou promessas que não condizem com os serviços oferecidos.",
      },
      {
        heading: "3. Confidencialidade",
        text: "Todas as informações de clientes, parceiros e da empresa devem ser tratadas com sigilo. O compartilhamento não autorizado de dados é considerado falta grave.",
      },
      {
        heading: "4. Canais de Denúncia",
        text: "A WOW+ disponibiliza canais de denúncia para relatar condutas inadequadas. Todas as denúncias são tratadas com sigilo e seriedade, garantindo a proteção do denunciante.",
      },
    ],
  },
  {
    id: "seguranca",
    Icon: Database,
    title: "Segurança de Dados",
    summary: "Como protegemos sua informação com tecnologia de ponta.",
    content: [
      {
        heading: "1. Infraestrutura",
        text: "Utilizamos servidores seguros com criptografia de ponta a ponta para proteger todas as informações trafegadas em nossa plataforma. Nossa infraestrutura é monitorada 24 horas por dia.",
      },
      {
        heading: "2. Controle de Acesso",
        text: "O acesso àos dados dos usuários é restrito a profissionais autorizados e necessários para a prestação dos serviços. Implementamos autenticação em múltiplos fatores e políticas rígidas de senha.",
      },
      {
        heading: "3. Backup e Recuperação",
        text: "Realizamos backups periódicos de todas as informações para garantir a recuperação em caso de incidentes. Os backups são armazenados de forma criptografada em locais seguros.",
      },
      {
        heading: "4. Resposta a Incidentes",
        text: "Possuímos um plano de resposta a incidentes de segurança que inclui identificação, contenção, erradicação e recuperação. Em caso de violação de dados, os titulares e a ANPD serão notificados conforme determina a LGPD.",
      },
      {
        heading: "5. Conformidade",
        text: "A WOW+ está em conformidade com a Lei Geral de Proteção de Dados (LGPD) e adota as melhores práticas de segurança da informação para proteger os dados de nossos usuários.",
      },
    ],
  },
];

const Legal = () => {
  const [activeTab, setActiveTab] = useState("termos");
  const activeSection = sections.find((s) => s.id === activeTab)!;

  return (
    <PageLayout>
      {/* ── Hero ── */}
      <section className="relative bg-navy pt-32 pb-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-orange opacity-10 rounded-l-full blur-3xl transform translate-x-1/2" />
        <div className="container relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <ShieldCheck size={32} weight="duotone" className="text-primary" />
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-secondary-foreground leading-tight">
              Legal &{" "}
              <span className="text-gradient">Segurança</span>
            </h1>
            <p className="text-secondary-foreground/70 font-sans text-lg mt-6 max-w-2xl mx-auto">
              Transparência e segurança são pilares fundamentais da WOW+.
              Consulte nossos documentos legais e saiba como protegemos seus dados.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Cards de Navegação ── */}
      <section className="py-12 bg-warm-gray border-b border-border">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {sections.map((section) => {
              const active = activeTab === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveTab(section.id)}
                  className={`group flex flex-col items-center gap-2 p-4 rounded-2xl border text-center transition-all duration-200 ${
                    active
                      ? "bg-primary border-primary text-primary-foreground shadow-orange"
                      : "bg-card border-border text-foreground hover:border-primary/40 hover:shadow-card"
                  }`}
                >
                  <section.Icon
                    size={28}
                    weight={active ? "fill" : "duotone"}
                    className={active ? "text-white" : "text-primary"}
                  />
                  <span className="font-sans text-xs font-semibold leading-tight">
                    {section.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Conteúdo ── */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                {/* Section header */}
                <div className="flex items-start gap-5 mb-10 pb-8 border-b border-border">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <activeSection.Icon size={28} weight="duotone" className="text-primary" />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                      {activeSection.title}
                    </h2>
                    <p className="font-sans text-muted-foreground text-base mt-1">
                      {activeSection.summary}
                    </p>
                  </div>
                </div>

                {/* Content blocks */}
                <div className="space-y-8">
                  {activeSection.content.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex gap-5"
                    >
                      <div className="flex-shrink-0 w-px bg-primary/30 mx-2 mt-1.5" />
                      <div>
                        <h3 className="font-display text-lg font-bold text-foreground mb-2">
                          {item.heading}
                        </h3>
                        <p className="font-sans text-muted-foreground leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Footer info */}
            <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="font-sans text-sm text-muted-foreground">
                Última atualização: Maio de 2026
              </p>
              <a
                href="https://api.whatsapp.com/send/?phone=5511978369030"
                className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-primary hover:text-orange-dark transition-colors"
              >
                Dúvidas? Fale conosco →
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Legal;

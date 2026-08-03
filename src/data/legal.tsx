import {
  FileText,
  Lock,
  UserCircle,
  Medal,
  Database,
} from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";

export interface LegalBlock {
  heading: string;
  text: string;
}

export interface LegalDoc {
  id: string;
  slug: string;
  Icon: Icon;
  title: string;
  summary: string;
  content: LegalBlock[];
}

/** Data da última revisão exibida nas páginas legais. */
export const LEGAL_LAST_UPDATED = "Agosto de 2026";

/**
 * Conteúdo legal da WMedic — base adaptada do grupo Wow+.
 * Seções específicas do modelo de vendas do Wow+ (ex.: contrato de
 * consultor) foram removidas por não se aplicarem à WMedic.
 * TODO cliente: revisar com o jurídico e preencher dados da empresa
 * (razão social, CNPJ, encarregado/DPO).
 */
export const legalDocs: LegalDoc[] = [
  {
    id: "termos",
    slug: "termos-de-uso",
    Icon: FileText,
    title: "Termos de Uso",
    summary: "Condições de acesso e uso dos serviços da WMedic.",
    content: [
      {
        heading: "1. Aceitação dos Termos",
        text: "Ao acessar e utilizar os serviços da WMedic, você concorda com os presentes Termos de Uso. Caso não concorde com alguma das condições aqui estabelecidas, recomendamos que não utilize nossos serviços.",
      },
      {
        heading: "2. Descrição dos Serviços",
        text: "A WMedic é responsável pela gestão da operação assistencial do grupo Wow+, oferecendo acesso ao cuidado médico por meio de corpo clínico, telemedicina e rede credenciada qualificada. A WMedic não é plano de saúde e não substitui a contratação de um.",
      },
      {
        heading: "3. Cadastro e Conta",
        text: "Para utilizar serviços que exijam identificação, é necessário realizar cadastro fornecendo informações verdadeiras e atualizadas. Você é responsável pela confidencialidade de suas credenciais de acesso e por todas as atividades realizadas em sua conta.",
      },
      {
        heading: "4. Contratação e Pagamento",
        text: "Os serviços contratados seguem as condições comerciais definidas no momento da contratação. Eventuais cobranças, prazos e formas de cancelamento são informados de forma clara antes da confirmação da contratação.",
      },
      {
        heading: "5. Limitação de Responsabilidade",
        text: "A WMedic atua na coordenação da operação assistencial e como intermediadora entre os usuários e os profissionais e estabelecimentos da rede credenciada. Não nos responsabilizamos diretamente pelos serviços prestados por terceiros, embora trabalhemos continuamente para garantir a qualidade da nossa rede.",
      },
      {
        heading: "6. Alterações nos Termos",
        text: "Reservamo-nos o direito de alterar estes Termos de Uso a qualquer momento. As alterações serão comunicadas através dos nossos canais oficiais e entrarão em vigor na data de sua publicação.",
      },
    ],
  },
  {
    id: "privacidade",
    slug: "politica-de-privacidade",
    Icon: Lock,
    title: "Política de Privacidade",
    summary: "Como coletamos, usamos e protegemos seus dados (LGPD).",
    content: [
      {
        heading: "1. Dados Coletados",
        text: "Coletamos os dados pessoais necessários para a prestação dos serviços, incluindo: nome completo, CPF, data de nascimento, endereço, e-mail, telefone e dados de saúde quando aplicável ao atendimento médico.",
      },
      {
        heading: "2. Finalidade do Tratamento",
        text: "Seus dados são utilizados para: prestação dos serviços de cuidado e gestão assistencial, comunicação com o usuário, melhoria da experiência, cumprimento de obrigações legais e regulatórias e, quando autorizado, envio de informações e novidades.",
      },
      {
        heading: "3. Base Legal",
        text: "O tratamento de dados pessoais pela WMedic está fundamentado nas bases legais previstas na Lei Geral de Proteção de Dados (Lei 13.709/2018), incluindo consentimento, execução de contrato, cumprimento de obrigação legal e legítimo interesse.",
      },
      {
        heading: "4. Compartilhamento de Dados",
        text: "Seus dados podem ser compartilhados com profissionais de saúde e parceiros da rede credenciada exclusivamente para a prestação dos serviços. Não vendemos nem comercializamos dados pessoais dos usuários.",
      },
      {
        heading: "5. Segurança",
        text: "Empregamos medidas técnicas e administrativas para proteger seus dados pessoais contra acesso não autorizado, destruição, perda ou alteração, incluindo criptografia, controle de acesso e monitoramento contínuo.",
      },
      {
        heading: "6. Direitos do Titular",
        text: "Você tem direito a acessar seus dados, corrigir informações incompletas ou desatualizadas, solicitar a exclusão de dados, revogar o consentimento e solicitar a portabilidade. Para exercer esses direitos, entre em contato pelo nosso canal de atendimento.",
      },
    ],
  },
  {
    id: "contrato-cliente",
    slug: "contrato-do-cliente",
    Icon: UserCircle,
    title: "Contrato do Cliente",
    summary: "Direitos e obrigações na relação com a WMedic.",
    content: [
      {
        heading: "1. Objeto",
        text: "Este contrato tem por objeto a prestação dos serviços de gestão assistencial e de cuidado à saúde disponibilizados pela WMedic, conforme as condições contratadas.",
      },
      {
        heading: "2. Vigência",
        text: "A vigência e as condições de renovação seguem o que for definido na contratação. As condições de cancelamento são informadas de forma clara ao cliente.",
      },
      {
        heading: "3. Obrigações do Cliente",
        text: "O cliente se compromete a fornecer informações verdadeiras, utilizar os serviços de forma adequada e manter seus dados cadastrais atualizados.",
      },
      {
        heading: "4. Obrigações da WMedic",
        text: "A WMedic se compromete a disponibilizar os serviços contratados, prestar suporte ao cliente e garantir a segurança dos dados em conformidade com a LGPD.",
      },
      {
        heading: "5. Cancelamento",
        text: "O cancelamento pode ser solicitado pelos canais de atendimento. Após o cancelamento, o acesso aos serviços é mantido até o final do período já contratado.",
      },
    ],
  },
  {
    id: "conduta",
    slug: "codigo-de-conduta",
    Icon: Medal,
    title: "Código de Conduta",
    summary: "Princípios éticos que guiam todos na WMedic.",
    content: [
      {
        heading: "1. Princípios Gerais",
        text: "Todos os colaboradores e parceiros da WMedic devem pautar suas ações pela ética, transparência, respeito e compromisso com o bem-estar dos pacientes, clientes e da comunidade.",
      },
      {
        heading: "2. Relacionamento com Clientes e Pacientes",
        text: "Prezamos pelo atendimento humanizado, com informações claras e verdadeiras. É proibida qualquer prática de comunicação enganosa, pressão indevida ou promessas que não condizem com os serviços oferecidos.",
      },
      {
        heading: "3. Confidencialidade",
        text: "Todas as informações de pacientes, clientes, parceiros e da empresa devem ser tratadas com sigilo. O compartilhamento não autorizado de dados é considerado falta grave.",
      },
      {
        heading: "4. Canais de Denúncia",
        text: "A WMedic disponibiliza canais para relatar condutas inadequadas. Todas as denúncias são tratadas com sigilo e seriedade, garantindo a proteção do denunciante.",
      },
    ],
  },
  {
    id: "seguranca",
    slug: "seguranca-de-dados",
    Icon: Database,
    title: "Segurança de Dados",
    summary: "Como protegemos suas informações.",
    content: [
      {
        heading: "1. Infraestrutura",
        text: "Utilizamos servidores seguros e criptografia para proteger as informações trafegadas em nossos sistemas, com monitoramento contínuo da infraestrutura.",
      },
      {
        heading: "2. Controle de Acesso",
        text: "O acesso aos dados dos usuários é restrito a profissionais autorizados e necessários para a prestação dos serviços, com autenticação e políticas rígidas de senha.",
      },
      {
        heading: "3. Backup e Recuperação",
        text: "Realizamos backups periódicos das informações para garantir a recuperação em caso de incidentes. Os backups são armazenados de forma criptografada em locais seguros.",
      },
      {
        heading: "4. Resposta a Incidentes",
        text: "Mantemos um plano de resposta a incidentes de segurança. Em caso de violação de dados, os titulares e a ANPD serão notificados conforme determina a LGPD.",
      },
      {
        heading: "5. Conformidade",
        text: "A WMedic adota as melhores práticas de segurança da informação e atua em conformidade com a Lei Geral de Proteção de Dados (LGPD).",
      },
    ],
  },
];

export const getLegalDoc = (slug: string) =>
  legalDocs.find((doc) => doc.slug === slug);

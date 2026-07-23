import { useState } from "react";
import { motion } from "framer-motion";
import {
  EnvelopeSimple,
  MapPin,
  WhatsappLogo,
  Headset,
  Clock,
  PaperPlaneRight,
} from "@phosphor-icons/react";
import { toast } from "sonner";
import PageLayout from "@/components/layout/PageLayout";

// TODO cliente: dados de contato reais (telefone/WhatsApp)
const contactCards = [
  {
    icon: WhatsappLogo,
    title: "WhatsApp",
    info: "Fale agora",
    description: "Atendimento rápido e direto",
    link: "https://api.whatsapp.com/send/?phone=5500000000000", // TODO cliente
    cta: "Iniciar conversa",
  },
  {
    icon: WhatsappLogo,
    title: "WhatsApp",
    info: "+55 00 00000-0000", // TODO cliente
    description: "Seg a Sex, horário comercial",
    link: "https://api.whatsapp.com/send/?phone=5500000000000", // TODO cliente
    cta: "Chamar no WhatsApp",
  },
  {
    icon: Headset,
    title: "Central de atendimento",
    info: "Suporte técnico",
    description: "Atendimento à operação assistencial",
    link: "#",
    cta: "Acessar suporte",
  },
  {
    icon: EnvelopeSimple,
    title: "E-mail",
    info: "contato@wmedic.com.br",
    description: "Resposta em até 24h",
    link: "mailto:contato@wmedic.com.br",
    cta: "Enviar e-mail",
  },
];

const Contato = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Dúvida geral",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO cliente: integrar backend
    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "Dúvida geral",
      message: "",
    });
  };

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
              Contato
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-secondary-foreground mt-4 leading-tight">
              Fale com a{" "}
              <span className="text-gradient">WMedic</span>
            </h1>
            <p className="text-secondary-foreground/70 font-sans text-lg mt-6 max-w-2xl mx-auto">
              Gestão médica com excelência, segurança e humanização. Conte pra
              gente como podemos ajudar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactCards.map((card, i) => (
              <motion.a
                key={card.title}
                href={card.link}
                target={card.link.startsWith("http") ? "_blank" : undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-orange/10 flex items-center justify-center mb-5 mx-auto group-hover:bg-primary transition-colors">
                  <card.icon
                    size={28}
                    weight="duotone"
                    className="text-primary group-hover:text-primary-foreground transition-colors"
                  />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-1">
                  {card.title}
                </h3>
                <p className="font-sans text-base font-semibold text-primary mb-1">
                  {card.info}
                </p>
                <p className="font-sans text-sm text-muted-foreground mb-4">
                  {card.description}
                </p>
                <span className="inline-block text-primary font-sans text-sm font-semibold group-hover:translate-x-1 transition-transform">
                  {card.cta} &rarr;
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-16 bg-warm-gray">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-sans text-sm font-semibold uppercase tracking-widest">
                Envie sua mensagem
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-8">
                Como podemos <span className="text-gradient">ajudar?</span>
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-sans text-sm font-medium text-foreground mb-2">
                      Nome completo
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-border bg-card font-sans text-sm text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-sm font-medium text-foreground mb-2">
                      E-mail
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-border bg-card font-sans text-sm text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-sans text-sm font-medium text-foreground mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-border bg-card font-sans text-sm text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-sm font-medium text-foreground mb-2">
                      Assunto
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-border bg-card font-sans text-sm text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    >
                      <option>Dúvida geral</option>
                      <option>Gestão assistencial</option>
                      <option>Suporte técnico</option>
                      <option>Parceria institucional</option>
                      <option>Outros</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-sans text-sm font-medium text-foreground mb-2">
                    Mensagem
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card font-sans text-sm text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                    placeholder="Escreva sua mensagem aqui..."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-sans font-bold text-base hover:bg-orange-dark transition-colors shadow-orange"
                >
                  Enviar mensagem
                  <PaperPlaneRight size={20} weight="bold" />
                </button>
              </form>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-8"
            >
              <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
                <h3 className="font-display text-xl font-bold text-foreground mb-6">
                  Informações de contato
                </h3>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-orange/10 flex items-center justify-center shrink-0">
                      <MapPin size={20} weight="duotone" className="text-primary" />
                    </div>
                    <div>
                      <p className="font-sans text-sm font-semibold text-foreground">
                        Endereço
                      </p>
                      {/* TODO cliente */}
                      <p className="font-sans text-sm text-muted-foreground">
                        Brasil
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-orange/10 flex items-center justify-center shrink-0">
                      <WhatsappLogo size={20} weight="duotone" className="text-primary" />
                    </div>
                    <div>
                      <p className="font-sans text-sm font-semibold text-foreground">
                        WhatsApp
                      </p>
                      {/* TODO cliente */}
                      <a
                        href="https://api.whatsapp.com/send/?phone=5500000000000"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        +55 00 00000-0000
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-orange/10 flex items-center justify-center shrink-0">
                      <EnvelopeSimple size={20} weight="duotone" className="text-primary" />
                    </div>
                    <div>
                      <p className="font-sans text-sm font-semibold text-foreground">
                        E-mail
                      </p>
                      {/* TODO cliente */}
                      <p className="font-sans text-sm text-muted-foreground">
                        contato@wmedic.com.br
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-orange/10 flex items-center justify-center shrink-0">
                      <Clock size={20} weight="duotone" className="text-primary" />
                    </div>
                    <div>
                      <p className="font-sans text-sm font-semibold text-foreground">
                        Horário de atendimento
                      </p>
                      {/* TODO cliente */}
                      <p className="font-sans text-sm text-muted-foreground">
                        Seg a Sex: horário comercial
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Map placeholder */}
              <div className="bg-card rounded-2xl overflow-hidden shadow-card border border-border flex-1 min-h-[250px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58430.37068029752!2d-46.8!3d-23.53!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ceff40e6b09b83%3A0x7c2dbf60e16ef7c1!2sOsasco%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "250px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização WMedic"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
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
              Prefere resolver agora?
            </h2>
            <p className="text-secondary-foreground/70 font-sans text-lg mt-6 max-w-xl mx-auto">
              Fale diretamente com nossa equipe pelo WhatsApp.
            </p>
            {/* TODO cliente */}
            <a
              href="https://api.whatsapp.com/send/?phone=5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 bg-primary text-primary-foreground px-10 py-4 rounded-full font-sans font-bold text-lg hover:bg-orange-dark transition-colors shadow-orange"
            >
              <WhatsappLogo size={24} weight="fill" />
              Chamar no WhatsApp
            </a>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contato;

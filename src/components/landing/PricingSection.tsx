import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Plus",
    desc: "Para começar com eficiência",
    price: "R$ 37/mês",
    features: ["1 usuário", "20 contratos por mês", "Modelos básicos", "Exportação PDF e Word"],
    highlight: false,
    btnText: "Começar teste grátis",
    btnHref: "#testar",
    showTrialNote: true,
  },
  {
    name: "Pro",
    desc: "Para advogados autônomos",
    price: "R$ 47/mês",
    features: ["1 usuário", "50 contratos por mês", "Todos os modelos", "Exportação PDF e Word"],
    highlight: false,
    btnText: "Começar teste grátis",
    btnHref: "#testar",
    showTrialNote: true,
  },
  {
    name: "Escritório",
    desc: "Para pequenos e médios escritórios",
    price: "R$ 297/mês",
    features: [
      "5 usuários inclusos",
      "300 contratos por mês",
      "Todos os modelos",
      "Acesso antecipado a novidades",
      "R$ 35 por usuário adicional",
    ],
    highlight: true,
    btnText: "Começar teste grátis",
    btnHref: "#testar",
    showTrialNote: true,
  },
  {
    name: "Corporativo",
    desc: "Para times jurídicos maiores",
    price: "Sob consulta",
    features: ["Usuários ilimitados", "Integrações sob demanda", "Atendimento dedicado"],
    highlight: false,
    btnText: "Falar com especialista",
    btnHref: "#contato",
    showTrialNote: false,
  },
];

const PricingSection = () => {
  return (
    <section id="planos" className="bg-background py-20 md:py-28 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-2xl md:text-4xl font-bold text-foreground text-center mb-4"
        >
          Planos simples para qualquer tamanho de escritório
        </motion.h2>
        <p className="font-body text-muted-foreground text-center mb-14 text-sm">
          Escale conforme sua necessidade.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-lg p-6 md:p-8 flex flex-col ${
                plan.highlight
                  ? "bg-card border-2 border-cta shadow-xl relative"
                  : "bg-card border border-border shadow-lg"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cta text-cta-foreground font-body text-xs font-semibold px-4 py-1 rounded-full">
                  Mais popular
                </span>
              )}
              <h3 className="font-display text-xl font-bold text-foreground mb-1">{plan.name}</h3>
              <p className="font-body text-sm text-muted-foreground mb-4">{plan.desc}</p>
              <p className="font-display text-2xl font-bold text-foreground mb-6">{plan.price}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 font-body text-sm text-foreground/80">
                    <Check className="text-gold shrink-0 mt-0.5" size={16} />
                    {f}
                  </li>
                ))}
              </ul>
              {plan.showTrialNote && (
                <p className="font-body text-xs text-muted-foreground text-center mb-2">
                  7 dias grátis, sem cartão de crédito.
                </p>
              )}
              <a
                href={plan.btnHref}
                className={`w-full text-center py-3 rounded-md font-body font-semibold text-sm transition-opacity hover:opacity-90 block mt-auto ${
                  plan.highlight
                    ? "bg-cta text-cta-foreground"
                    : "bg-navy text-navy-foreground"
                }`}
              >
                {plan.btnText}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

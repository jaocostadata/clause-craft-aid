import { motion } from "framer-motion";

const steps = [
  {
    num: "1",
    title: "Escolha o tipo de contrato",
    desc: "Selecione o modelo que você já conhece (prestação de serviços, honorários, locação, sociedade, etc.).",
  },
  {
    num: "2",
    title: "Responda a perguntas rápidas",
    desc: "O app guia você com perguntas simples para personalizar cláusulas, prazos, valores e penalidades.",
  },
  {
    num: "3",
    title: "Revise, edite e exporte",
    desc: "Revise o contrato, ajuste o que quiser e exporte em PDF ou Word com seu padrão visual.",
  },
];

const marqueeVariants = {
  animate: {
    x: ["0%", "-50%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop" as const,
        duration: 25,
        ease: "linear",
      },
    },
  },
};

const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="bg-background py-20 md:py-28 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-2xl md:text-4xl font-bold text-foreground text-center mb-16"
        >
          Como gerar um contrato completo com a Contract.fy
        </motion.h2>
      </div>

      {/* Clean marquee without boxes */}
      <div className="overflow-hidden py-4">
        <motion.div
          variants={marqueeVariants}
          animate="animate"
          className="flex gap-16 w-max items-start"
        >
          {[...steps, ...steps].map((step, i) => (
            <div
              key={i}
              className="text-center min-w-[260px] max-w-[300px] flex-shrink-0 px-4"
            >
              <div className="w-12 h-12 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center mx-auto mb-4">
                <span className="font-display text-lg font-bold text-gold">{step.num}</span>
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="text-center mt-12">
        <a href="#testar" className="font-body text-sm text-cta font-semibold hover:underline">
          Veja um exemplo de contrato gerado em menos de 3 minutos →
        </a>
      </div>
    </section>
  );
};

export default HowItWorksSection;

import { motion } from "framer-motion";

const FinalCTASection = () => {
  return (
    <section id="testar" className="bg-navy py-20 md:py-28 px-6 relative overflow-hidden">
      {/* Decorative gold circle */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-64 h-64 md:w-96 md:h-96 rounded-full border-2 border-gold/20 opacity-40" />

      <div className="container mx-auto max-w-3xl text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-2xl md:text-4xl font-bold text-navy-foreground leading-tight mb-6"
        >
          Comece hoje a gerar contratos no mesmo tempo que leva para abrir um processo.
        </motion.h2>
        <p className="font-body text-navy-foreground/70 mb-10 text-base md:text-lg">
          Leve a automação para dentro do seu escritório sem perder o controle jurídico de cada cláusula.
        </p>
        <a
          href="#testar"
          className="inline-flex items-center justify-center px-10 py-4 rounded-md bg-cta text-cta-foreground font-body font-bold text-lg hover:opacity-90 transition-opacity"
        >
          Quero testar a Contract.fy agora
        </a>
        <p className="font-body text-navy-foreground/50 text-xs mt-4">
          Teste gratuito, sem compromisso.
        </p>
      </div>
    </section>
  );
};

export default FinalCTASection;

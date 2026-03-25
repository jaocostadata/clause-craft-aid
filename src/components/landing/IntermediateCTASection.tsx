import { motion } from "framer-motion";

const IntermediateCTASection = () => {
  return (
    <section className="bg-navy py-16 md:py-20 px-6">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-2xl md:text-3xl font-bold text-navy-foreground mb-6"
        >
          Pronto para economizar tempo no seu escritório?
        </motion.h2>
        <motion.a
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          href="#testar"
          className="inline-flex items-center justify-center px-10 py-4 rounded-md bg-cta text-cta-foreground font-body font-semibold text-base hover:opacity-90 transition-opacity"
        >
          Testar grátis — 7 dias grátis
        </motion.a>
      </div>
    </section>
  );
};

export default IntermediateCTASection;

import { motion } from "framer-motion";
import contractSeal from "@/assets/contract-seal.png";

const FinalCTASection = () => {
  return (
    <section id="testar" className="bg-navy py-20 md:py-28 px-6 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-64 h-64 md:w-96 md:h-96 rounded-full border-2 border-gold/20 opacity-40" />
      <div className="absolute right-0 bottom-0 translate-x-1/3 translate-y-1/3 w-48 h-48 md:w-72 md:h-72 rounded-full border-2 border-gold/10 opacity-30" />
      <div className="absolute top-10 right-10 w-20 h-20 border border-gold/15 rotate-45 opacity-30" />

      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="container mx-auto max-w-3xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-20 h-20 mx-auto mb-8 flex items-center justify-center"
        >
          <img src={contractSeal} alt="Contract.fy selo" className="w-20 h-20 object-contain" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-2xl md:text-4xl font-bold text-navy-foreground leading-tight mb-6"
        >
          Advogado, a ferramenta que você sempre quis agora está no seu bolso e a dois cliques de distância.
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

      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
    </section>
  );
};

export default FinalCTASection;

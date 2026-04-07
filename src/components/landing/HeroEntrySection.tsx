import { motion } from "framer-motion";
import heroEntryBg from "@/assets/hero-entry-bg.jpg";

const HeroEntrySection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        src={heroEntryBg}
        alt="Escritório corporativo sofisticado ao entardecer"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-navy/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy-foreground mb-3">
            Contract<span className="text-cta">.</span>fy
          </h2>
          <div className="w-16 h-[2px] bg-gold mx-auto mb-8" />
          <p className="font-display text-xl md:text-2xl lg:text-3xl text-navy-foreground/90 leading-relaxed mb-10">
            O futuro dos contratos jurídicos começa aqui.
          </p>
          <a
            href="#testar"
            className="inline-flex items-center justify-center px-10 py-4 rounded-md bg-cta text-cta-foreground font-body font-semibold text-base md:text-lg hover:opacity-90 transition-opacity"
          >
            Testar grátis por 7 dias
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-navy-foreground/40 flex items-start justify-center pt-2">
          <div className="w-1.5 h-1.5 rounded-full bg-gold" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroEntrySection;

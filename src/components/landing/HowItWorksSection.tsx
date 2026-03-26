import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  paused: {
    x: "0%",
  },
};

const HowItWorksSection = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);

  const goTo = useCallback((dir: number) => {
    if (!hasInteracted) {
      // First interaction always shows step 1
      setIsPaused(true);
      setActiveStep(0);
      setHasInteracted(true);
      return;
    }
    setIsPaused(true);
    setActiveStep((prev) => (prev + dir + steps.length) % steps.length);
  }, [hasInteracted]);

  // Auto-resume after pause
  useEffect(() => {
    if (!isPaused) return;
    const timer = setTimeout(() => setIsPaused(false), 5000);
    return () => clearTimeout(timer);
  }, [isPaused, activeStep]);

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

      {/* Marquee / Manual mode */}
      <div className="relative overflow-hidden py-4">
        {!isPaused ? (
          <motion.div
            variants={marqueeVariants}
            animate="animate"
            className="flex gap-16 w-max items-start"
          >
            {[...steps, ...steps].map((step, i) => (
              <div key={i} className="text-center min-w-[260px] max-w-[300px] flex-shrink-0 px-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center mx-auto mb-4">
                  <span className="font-display text-lg font-bold text-gold">{step.num}</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-md mx-auto text-center px-4"
          >
            <div className="w-14 h-14 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center mx-auto mb-4">
              <span className="font-display text-xl font-bold text-gold">{steps[activeStep].num}</span>
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">{steps[activeStep].title}</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">{steps[activeStep].desc}</p>
          </motion.div>
        )}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-6 mt-8">
        <button
          onClick={() => goTo(-1)}
          className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-gold transition-colors"
          aria-label="Passo anterior"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="flex gap-2">
          {steps.map((_, i) => (
            <button
              key={i}
              onClick={() => { setIsPaused(true); setActiveStep(i); }}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                isPaused && activeStep === i ? "bg-gold" : "bg-border hover:bg-gold/50"
              }`}
              aria-label={`Passo ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => goTo(1)}
          className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-gold transition-colors"
          aria-label="Próximo passo"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="text-center mt-10">
        <a href="#testar" className="font-body text-sm text-cta font-semibold hover:underline">
          Veja um exemplo de contrato gerado em menos de 3 minutos →
        </a>
      </div>
    </section>
  );
};

export default HowItWorksSection;

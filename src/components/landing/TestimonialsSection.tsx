import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Dra. Camila Rezende",
    role: "Advogada trabalhista",
    city: "São Paulo, SP",
    text: "Passei de 40 minutos para 10 minutos por contrato padrão de honorários. A Contract.fy mudou minha rotina.",
  },
  {
    name: "Dr. Fernando Alves",
    role: "Sócio de escritório cível",
    city: "Belo Horizonte, MG",
    text: "Padronizamos todos os contratos do escritório. Os associados não precisam mais pedir modelos, tudo está pronto na plataforma.",
  },
  {
    name: "Dra. Juliana Martins",
    role: "Jurídico corporativo",
    city: "Curitiba, PR",
    text: "A redução de erros em cláusulas foi imediata. Os contratos agora saem revisados e consistentes em todas as áreas.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-light-gray py-20 md:py-28 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-2xl md:text-4xl font-bold text-foreground text-center mb-14"
        >
          O que outros advogados dizem
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-lg p-6 shadow-sm border border-gold/10"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="text-gold fill-gold" size={16} />
                ))}
              </div>
              <p className="font-body text-sm text-foreground/80 mb-6 leading-relaxed italic">"{t.text}"</p>
              <div className="border-t border-border pt-4">
                <p className="font-body text-sm font-semibold text-foreground">{t.name}</p>
                <p className="font-body text-xs text-muted-foreground">{t.role} · {t.city}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

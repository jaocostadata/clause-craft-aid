import { motion } from "framer-motion";
import { Clock, ShieldCheck, Palette } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Produtividade real",
    desc: "Reduza drasticamente o tempo gasto em contratos recorrentes.",
  },
  {
    icon: ShieldCheck,
    title: "Redução de erros",
    desc: "Minimize esquecimentos de cláusulas importantes com checklists embutidos.",
  },
  {
    icon: Palette,
    title: "Padrão profissional",
    desc: "Todos os contratos com mesma estrutura, linguagem e identidade visual.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="bg-navy py-20 md:py-28 px-6">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-2xl md:text-4xl font-bold text-gold text-center mb-16"
        >
          Mais tempo para advogar, menos tempo escrevendo o mesmo contrato.
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: benefits */}
          <div className="space-y-8">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex gap-4"
              >
                <b.icon className="text-gold shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-display text-lg font-semibold text-navy-foreground mb-1">{b.title}</h3>
                  <p className="font-body text-sm text-navy-foreground/70 leading-relaxed">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="bg-navy-foreground/5 border border-gold/20 rounded-lg p-8 text-center">
              <span className="font-display text-5xl md:text-6xl font-bold text-gold">70%</span>
              <p className="font-body text-sm text-navy-foreground/70 mt-2">menos tempo em contratos recorrentes</p>
            </div>
            <div className="bg-navy-foreground/5 border border-gold/20 rounded-lg p-8 text-center">
              <span className="font-display text-5xl md:text-6xl font-bold text-gold">+50</span>
              <p className="font-body text-sm text-navy-foreground/70 mt-2">modelos prontos para personalizar</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

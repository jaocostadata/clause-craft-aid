import { motion } from "framer-motion";
import { User, Users, Building2 } from "lucide-react";

const cards = [
  {
    icon: User,
    title: "Advogados autônomos",
    desc: "Ganhe escala sem perder a qualidade. Crie contratos padrão para seus principais serviços.",
  },
  {
    icon: Users,
    title: "Pequenos escritórios",
    desc: "Padronize modelos entre sócios e associados, evitando cláusulas desencontradas.",
  },
  {
    icon: Building2,
    title: "Departamentos jurídicos",
    desc: "Acelere a revisão de contratos recorrentes com templates aprovados pela diretoria.",
  },
];

const AudienceSection = () => {
  return (
    <section id="para-quem" className="bg-light-gray py-20 md:py-28 px-6">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-2xl md:text-4xl font-bold text-foreground text-center mb-14"
        >
          Feita sob medida para profissionais do Direito
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6, type: "spring" }}
              whileHover={{ y: -8, rotateY: 3, scale: 1.02 }}
              className={`bg-card rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow ${
                i === 2 ? "sm:col-span-2 lg:col-span-1 sm:max-w-sm sm:mx-auto lg:max-w-none" : ""
              }`}
              style={{ perspective: 800, transformStyle: "preserve-3d" }}
            >
              <card.icon className="text-gold mb-4" size={32} />
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{card.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;

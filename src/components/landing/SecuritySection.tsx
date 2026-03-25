import { motion } from "framer-motion";
import { Scale, PenTool, Lock } from "lucide-react";

const items = [
  {
    icon: Scale,
    title: "Baseado em boas práticas",
    desc: "Modelos revisados a partir de cláusulas amplamente usadas em escritórios e departamentos jurídicos.",
  },
  {
    icon: PenTool,
    title: "Controle total do advogado",
    desc: "Você sempre pode editar, incluir ou remover cláusulas. A decisão final é sua.",
  },
  {
    icon: Lock,
    title: "Armazenamento seguro",
    desc: "Seus contratos são armazenados em ambiente seguro, com backup e controle de acesso.",
  },
];

const SecuritySection = () => {
  return (
    <section className="bg-background py-20 md:py-28 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-2xl md:text-4xl font-bold text-foreground text-center mb-14"
        >
          Segurança jurídica e tecnológica em primeiro lugar
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5, type: "spring", stiffness: 120, damping: 14 }}
              whileHover={{ y: -8, scale: 1.03, rotateY: 4, rotateX: -2 }}
              className="bg-card rounded-lg p-6 border-2 border-gold/30 shadow-lg hover:shadow-2xl hover:border-gold/80 transition-all duration-500 ease-out"
              style={{ perspective: 800, transformStyle: "preserve-3d" }}
            >
              <item.icon className="text-gold mb-4" size={32} />
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;

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

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-5">
                <item.icon className="text-gold" size={28} />
              </div>
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

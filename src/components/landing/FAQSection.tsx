import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "Meus contratos são realmente personalizados ou são modelos fixos?",
    a: "Os contratos são totalmente personalizáveis. Você parte de um modelo inteligente e adapta cada cláusula, prazo, valor e condição às necessidades do seu cliente.",
  },
  {
    q: "Consigo editar cláusulas livremente?",
    a: "Sim. Você tem controle total para adicionar, remover ou modificar qualquer cláusula antes de exportar o documento final.",
  },
  {
    q: "A Contract.fy substitui meu trabalho como advogado?",
    a: "De forma alguma. A Contract.fy é uma ferramenta de produtividade que automatiza a parte operacional da criação de contratos, liberando seu tempo para análise jurídica e atendimento ao cliente.",
  },
  {
    q: "Posso cancelar quando quiser?",
    a: "Sim. Não há fidelidade ou multa. Você pode cancelar sua assinatura a qualquer momento com apenas um clique.",
  },
  {
    q: "Existe limite de contratos por mês no teste grátis?",
    a: "No período de teste gratuito você tem acesso a funcionalidades essenciais para experimentar a plataforma. Detalhes sobre limites serão informados durante o cadastro.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="bg-light-gray py-20 md:py-28 px-6">
      <div className="container mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-2xl md:text-4xl font-bold text-foreground text-center mb-14"
        >
          Perguntas frequentes
        </motion.h2>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card rounded-lg border border-border px-6 shadow-md"
            >
              <AccordionTrigger className="font-body text-sm font-medium text-foreground hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="font-body text-sm text-muted-foreground leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;

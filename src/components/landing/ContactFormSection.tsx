import { motion } from "framer-motion";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const ContactFormSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contato" className="bg-background py-20 md:py-28 px-6">
      <div className="container mx-auto max-w-xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-2xl md:text-4xl font-bold text-foreground text-center mb-4"
        >
          Tem dúvidas antes de assinar? Fale com um especialista.
        </motion.h2>
        <p className="font-body text-muted-foreground text-center mb-10 text-sm">
          Preencha o formulário e nossa equipe entrará em contato rapidamente.
        </p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="bg-card border border-border rounded-lg p-6 md:p-8 space-y-5 shadow-lg"
        >
          <div className="space-y-2">
            <Label htmlFor="name" className="font-body text-sm font-medium text-foreground">
              Nome completo <span className="text-cta">*</span>
            </Label>
            <Input id="name" name="name" required placeholder="Seu nome completo" className="font-body" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="font-body text-sm font-medium text-foreground">
              E-mail <span className="text-cta">*</span>
            </Label>
            <Input id="email" name="email" type="email" required placeholder="seu@email.com" className="font-body" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="profile" className="font-body text-sm font-medium text-foreground">
              Qual é o seu perfil? <span className="text-cta">*</span>
            </Label>
            <Select name="profile" required>
              <SelectTrigger className="font-body">
                <SelectValue placeholder="Selecione seu perfil" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="autonomo-pequeno">Advogado autônomo — pequeno porte</SelectItem>
                <SelectItem value="autonomo-medio">Advogado autônomo — médio porte</SelectItem>
                <SelectItem value="autonomo-grande">Advogado autônomo — grande porte</SelectItem>
                <SelectItem value="escritorio-pequeno">Escritório — pequeno porte</SelectItem>
                <SelectItem value="escritorio-medio">Escritório — médio porte</SelectItem>
                <SelectItem value="escritorio-grande">Escritório — grande porte</SelectItem>
                <SelectItem value="departamento">Departamento jurídico</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="font-body text-sm font-medium text-foreground">
              Mensagem <span className="text-muted-foreground font-normal">(opcional)</span>
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Escreva sua dúvida ou mensagem..."
              className="font-body"
              rows={4}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-md bg-cta text-cta-foreground font-body font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {loading ? "Enviando..." : "Enviar mensagem"}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactFormSection;

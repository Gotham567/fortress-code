import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { motion } from "framer-motion";
import { Shield, BookOpen, Users, FileText, Lock, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  { icon: Shield, title: "Accompagnement RSSI", desc: "Mise à disposition d'un RSSI externalisé ou en temps partagé pour piloter votre stratégie de cybersécurité." },
  { icon: FileText, title: "Conformité & réglementation", desc: "Accompagnement RGPD, NIS2, DORA, LPM et mise en conformité réglementaire adaptée à votre secteur." },
  { icon: Lock, title: "ISO 27001", desc: "Accompagnement à la mise en place et certification ISO 27001 de votre système de management de la sécurité." },
  { icon: BookOpen, title: "Politique de sécurité", desc: "Rédaction de PSSI, chartes informatiques, plans de continuité et de reprise d'activité (PCA/PRA)." },
  { icon: GraduationCap, title: "Sensibilisation", desc: "Formations et campagnes de sensibilisation à la cybersécurité pour vos collaborateurs." },
  { icon: Users, title: "Gouvernance", desc: "Structuration de la gouvernance sécurité, analyse de risques (EBIOS RM) et schéma directeur SSI." },
];

const Conseil = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-16"
          >
            <p className="text-primary font-heading font-semibold text-sm uppercase tracking-widest mb-4">
              Services
            </p>
            <h1 className="font-heading text-4xl md:text-6xl font-bold leading-tight mb-6">
              <span className="text-gradient">Conseil</span> en cybersécurité
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Nous vous accompagnons dans la définition et la mise en œuvre de votre stratégie de cybersécurité, de la gouvernance à la conformité réglementaire.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="card-glass rounded-xl p-8 hover:border-primary/50 transition-all group cursor-pointer"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <s.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-16"
          >
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-semibold px-10">
              Prendre rendez-vous
            </Button>
          </motion.div>
        </div>
      </section>
      <FooterSection />
    </div>
  );
};

export default Conseil;

import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { motion } from "framer-motion";
import { Search, Server, Network, Globe, Smartphone, Code, ShieldCheck, FileSearch } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  { icon: Search, title: "Tests d'intrusion", desc: "Tests en boîte noire, grise ou blanche pour identifier les vulnérabilités exploitables de vos applications et infrastructures." },
  { icon: Server, title: "Audit de configuration", desc: "Vérification de la conformité des configurations de vos serveurs, équipements réseau et services cloud." },
  { icon: Network, title: "Audit d'architecture", desc: "Analyse de la conception de votre architecture réseau et systèmes pour détecter les failles structurelles." },
  { icon: Globe, title: "Audit d'applications web", desc: "Évaluation approfondie de la sécurité de vos applications web selon les standards OWASP." },
  { icon: Smartphone, title: "Audit mobile", desc: "Analyse de sécurité de vos applications iOS et Android, incluant le reverse engineering." },
  { icon: Code, title: "Revue de code source", desc: "Analyse statique et manuelle du code source pour identifier les vulnérabilités applicatives." },
  { icon: ShieldCheck, title: "Audit organisationnel", desc: "Évaluation de votre organisation, processus et politiques de sécurité selon ISO 27001/27002." },
  { icon: FileSearch, title: "Red Team", desc: "Simulation d'attaque réaliste combinant intrusion physique, ingénierie sociale et exploitation technique." },
];

const Audit = () => {
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
              <span className="text-gradient">Audit</span> & Tests d'intrusion
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Qualifiés PASSI par l'ANSSI, nous réalisons des audits techniques et organisationnels pour évaluer et renforcer la sécurité de votre système d'information.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className="card-glass rounded-xl p-6 hover:border-primary/50 transition-all group cursor-pointer"
              >
                <s.icon className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-heading font-semibold text-foreground mb-2">{s.title}</h3>
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
              Demander un devis
            </Button>
          </motion.div>
        </div>
      </section>
      <FooterSection />
    </div>
  );
};

export default Audit;

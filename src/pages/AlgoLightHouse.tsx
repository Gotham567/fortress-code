import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { motion } from "framer-motion";
import { Shield, Eye, Monitor, BarChart3, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const features = [
  { icon: Eye, title: "Cartographie de votre surface d'attaque", desc: "Identification exhaustive de tous vos actifs exposés sur Internet : domaines, sous-domaines, IP, services, applications web." },
  { icon: Monitor, title: "Surveillance continue", desc: "Monitoring 24/7 de votre périmètre externe avec détection automatique de nouvelles expositions et vulnérabilités." },
  { icon: BarChart3, title: "Tableaux de bord", desc: "Visualisation claire de votre posture de sécurité avec indicateurs de risque et suivi des remédiations." },
  { icon: AlertTriangle, title: "Alertes et recommandations", desc: "Notifications en temps réel et plan d'action priorisé par nos experts pour chaque vulnérabilité détectée." },
];

const AlgoLightHouse = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <p className="text-primary font-heading font-semibold text-sm uppercase tracking-widest mb-4">
              Surveillance
            </p>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              algo<span className="text-gradient">LightHouse</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Pilotez et maîtrisez votre surface d'attaque externe grâce à notre service managé combinant technologie et expertise humaine.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-glass rounded-xl p-8 hover:border-primary/50 transition-all group"
              >
                <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <f.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-semibold text-base px-8">
                Demander une démo
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <FooterSection />
    </div>
  );
};

export default AlgoLightHouse;

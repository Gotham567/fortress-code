import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { motion } from "framer-motion";
import { Phone, AlertTriangle, HardDrive, Eye, FileWarning, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  { icon: AlertTriangle, title: "Réponse à incident", desc: "Intervention rapide pour contenir, analyser et remédier aux incidents de sécurité (ransomware, intrusion, fuite de données)." },
  { icon: HardDrive, title: "Analyse forensique", desc: "Investigation numérique approfondie pour identifier l'origine, l'étendue et l'impact d'une compromission." },
  { icon: Eye, title: "Threat Intelligence", desc: "Veille sur les menaces ciblant votre secteur et surveillance de vos actifs exposés sur le dark web." },
  { icon: FileWarning, title: "Gestion de crise", desc: "Accompagnement stratégique et opérationnel pendant la crise : communication, coordination et plan de remédiation." },
  { icon: Clock, title: "Astreinte 24/7", desc: "Disponibilité permanente de nos analystes pour une réponse immédiate en cas d'incident critique." },
  { icon: Phone, title: "Hotline dédiée", desc: "Numéro d'urgence dédié pour les clients sous contrat avec prise en charge garantie sous 4h." },
];

const Cert = () => {
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
              CERT AlgoSecure
            </p>
            <h1 className="font-heading text-4xl md:text-6xl font-bold leading-tight mb-6">
              Centre de réponse aux <span className="text-gradient">incidents</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Notre CERT (Computer Emergency Response Team) intervient 24h/24 et 7j/7 pour vous accompagner face aux cyberattaques et incidents de sécurité.
            </p>
          </motion.div>

          <div className="card-glass rounded-2xl p-8 md:p-12 mb-12 glow-border">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  Urgence cyber ? Contactez le CERT
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  En cas d'incident de sécurité, nos analystes prennent en charge votre situation immédiatement. Containment, investigation et remédiation.
                </p>
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-semibold">
                  <Phone className="h-5 w-5 mr-2" />
                  04 26 78 24 86
                </Button>
              </div>
              <div className="text-center">
                <div className="text-6xl font-heading font-bold text-primary">24/7</div>
                <p className="text-muted-foreground text-sm mt-2">Disponibilité</p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-4 p-6 rounded-xl bg-secondary/30 border border-border hover:border-primary/30 transition-all group"
              >
                <s.icon className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <FooterSection />
    </div>
  );
};

export default Cert;

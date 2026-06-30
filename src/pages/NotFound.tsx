import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Shield, FileSearch, BookOpen, Phone, ArrowRight } from "lucide-react";

const suggestions = [
  { icon: Shield, title: "Audit cybersécurité", desc: "Pentest, audit de configuration, Red Team", to: "/audit" },
  { icon: BookOpen, title: "Conseil & RSSI", desc: "Accompagnement, conformité NIS2, ISO 27001", to: "/conseil" },
  { icon: FileSearch, title: "Actualités", desc: "Guides, analyses et alertes cybersécurité", to: "/actualites" },
  { icon: Phone, title: "Contact", desc: "Demandez un devis ou un rendez-vous", to: "/contact" },
];

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    if (import.meta.env.DEV) console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEOHead
        title="Page non trouvée (404)"
        description="La page que vous recherchez n'existe pas. Retournez à l'accueil de CyberSecure pour découvrir nos services de cybersécurité."
      />
      <Navbar />
      <main className="flex-1 flex items-center justify-center py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-heading text-8xl font-bold text-primary mb-4">404</h1>
            <p className="font-heading text-2xl font-semibold text-foreground mb-4">Page non trouvée</p>
            <p className="text-muted-foreground mb-12 max-w-md mx-auto">
              La page <span className="text-foreground font-mono text-sm">{location.pathname}</span> n'existe pas ou a été déplacée.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {suggestions.map((s, i) => (
              <motion.div
                key={s.to}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08 }}
              >
                <Link to={s.to} className="card-glass rounded-xl p-5 flex items-start gap-4 hover:border-primary/50 transition-all group block text-left">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <s.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-heading font-semibold text-foreground text-sm mb-1 flex items-center gap-1">
                      {s.title}
                      <ArrowRight className="h-3 w-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h2>
                    <p className="text-muted-foreground text-xs">{s.desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            <Link to="/">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-semibold">
                Retour à l'accueil
              </Button>
            </Link>
          </motion.div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
};

export default NotFound;

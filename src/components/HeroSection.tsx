import { motion } from "framer-motion";
import { Search, ShieldCheck, Phone, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const services = [
  { icon: Search, title: "Audit cybersécurité", desc: "Pentest entreprise, audits de configuration et d'architecture pour PME et ETI", href: "/audit" },
  { icon: ShieldCheck, title: "Conseil", desc: "Accompagnement RSSI, conformité, formations", href: "/conseil" },
  { icon: Phone, title: "CERT", desc: "Réponse à incident, analyse forensique, gestion de crise", href: "/cert" },
  { icon: Award, title: "Certifications", desc: "PASSI, ISO 27001, Cyber Expert, OSEP, OSCP", href: "/qui-sommes-nous" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-28">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/75" />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-20 py-20">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-primary font-heading font-semibold text-sm uppercase tracking-widest mb-4">
                Cabinet indépendant qualifié PASSI & certifié ISO 27001
              </p>
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                Experts en{" "}
                <span className="text-gradient">cybersécurité</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-xl mb-8 leading-relaxed">
                Nous accompagnons les <strong>PME et ETI</strong> de toutes industries avec des <strong>audits cybersécurité</strong> et <strong>pentests entreprise</strong> adaptés à vos enjeux et votre budget.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/audit">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-semibold text-base px-8">
                    Découvrir nos services
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary font-heading font-semibold text-base px-8">
                    Nous contacter
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="grid grid-cols-2 gap-4 mt-14"
            >
              {services.map((s) => (
                <Link key={s.title} to={s.href}>
                  <div className="card-glass rounded-lg p-5 hover:border-primary/50 transition-all cursor-pointer group h-full">
                    <s.icon className="h-10 w-10 text-primary mb-3 group-hover:scale-110 transition-transform" />
                    <h3 className="font-heading font-semibold text-foreground mb-1">{s.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </Link>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:col-span-2 hidden lg:block"
          >
            <div className="card-glass rounded-2xl p-8 text-center glow-border">
              <p className="text-primary font-heading font-semibold text-xs uppercase tracking-widest mb-6">
                Surveillance
              </p>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-2">
                algo<span className="text-primary">LightHouse</span>
              </h2>
              <p className="text-muted-foreground text-sm mb-6">by cybersecure</p>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4 leading-snug">
                Pilotez et maîtrisez votre surface d'attaque externe
              </h3>
              <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
                Service managé combinant technologie et expertise humaine pour une cybersécurité pilotable et efficiente.
              </p>
              <Link to="/algolighthouse">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-semibold w-full">
                  Découvrir AlgoLightHouse
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import { motion } from "framer-motion";
import { ShieldCheck, Calendar, ArrowRight, Search, Phone, Award, Shield, Users, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { icon: Shield, value: "500+", label: "Audits & pentests" },
  { icon: Users, value: "15+", label: "Années d'expertise" },
  { icon: Clock, value: "24/7", label: "CERT disponible" },
  { icon: Star, value: "100%", label: "Indépendant PASSI" },
];

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
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
                <ShieldCheck className="h-4 w-4 text-primary" />
                <span className="text-primary font-heading text-xs font-semibold uppercase tracking-widest">
                  Offre découverte
                </span>
              </div>

              <h2 className="font-heading text-2xl font-bold text-foreground mb-3 leading-tight">
                Audit cybersécurité{" "}
                <span className="text-gradient">gratuit</span>
              </h2>

              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                15 minutes pour identifier vos <strong className="text-foreground">principaux risques</strong> et vous orienter vers les actions prioritaires.
              </p>

              <ul className="text-left space-y-2.5 mb-6">
                {[
                  "Vision claire de votre niveau de risque",
                  "Recommandations concrètes",
                  "Sans engagement",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-muted-foreground text-sm">
                    <div className="h-4 w-4 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <ArrowRight className="h-2.5 w-2.5 text-primary" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="https://calendly.com/lakaoub/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-semibold w-full gap-2">
                  <Calendar className="h-4 w-4" />
                  Réserver mon audit gratuit
                </Button>
              </a>
              <p className="text-muted-foreground text-xs mt-3">
                En visio • 100% gratuit
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-16 pt-12 border-t border-border/30"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + i * 0.1 }}
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <s.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gradient font-heading leading-none">{s.value}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{s.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

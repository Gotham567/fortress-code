import { motion } from "framer-motion";
import { ShieldCheck, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const FreeAuditBanner = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.15),transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card-glass rounded-2xl p-8 md:p-12 glow-border"
        >
          <div className="grid lg:grid-cols-5 gap-8 items-center">
            {/* Left content */}
            <div className="lg:col-span-3">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
                <ShieldCheck className="h-4 w-4 text-primary" />
                <span className="text-primary font-heading text-xs font-semibold uppercase tracking-widest">
                  Offre découverte
                </span>
              </div>

              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                Audit cybersécurité{" "}
                <span className="text-gradient">gratuit de 15 min</span>
              </h2>

              <p className="text-muted-foreground text-lg leading-relaxed mb-6 max-w-2xl">
                Identifiez rapidement les <strong className="text-foreground">principaux risques</strong> liés à votre cybersécurité. 
                Un échange simple, sans engagement, pour vous orienter vers les <strong className="text-foreground">actions prioritaires</strong> à mettre en place.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Vision claire de votre niveau de risque",
                  "Recommandations d'améliorations concrètes",
                  "Sans engagement, 100% gratuit",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-muted-foreground">
                    <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <ArrowRight className="h-3 w-3 text-primary" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right CTA */}
            <div className="lg:col-span-2 flex flex-col items-center text-center">
              <div className="bg-secondary/50 rounded-xl p-8 w-full border border-border">
                <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  Prenez rendez-vous
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Choisissez le créneau qui vous convient
                </p>
                <a
                  href="https://calendly.com/many-cyberconform/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-semibold w-full text-base gap-2"
                  >
                    <Calendar className="h-5 w-5" />
                    Réserver mon audit gratuit
                  </Button>
                </a>
                <p className="text-muted-foreground text-xs mt-4">
                  15 minutes • En visio • Sans engagement
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FreeAuditBanner;

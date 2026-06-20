import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Engagés et compétents, les intervenants sont arrivés à l'objectif dans le temps imparti, et ont produit un rapport de qualité.",
    author: "Laurent P.",
    role: "RSSI",
    company: "Mirion Technologies",
    initials: "LP",
    color: "bg-blue-500",
    stars: 5,
  },
  {
    quote: "Très à l'écoute, les équipes de CyberSecure m'ont conseillé des solutions pertinentes. Leur prestation toute aussi pointue que bienveillante a été une véritable plus-value.",
    author: "Caroline G.",
    role: "Directrice Informatique",
    company: "MSD France",
    initials: "CG",
    color: "bg-purple-500",
    stars: 5,
  },
  {
    quote: "Depuis la fin des années 2000, CyberSecure a fourni son expertise technique à plusieurs de nos projets complexes de cybersécurité, avec un niveau d'efficience remarquable.",
    author: "Direction Sécurité du Numérique",
    role: "DSI",
    company: "Groupe SNCF",
    initials: "SN",
    color: "bg-green-500",
    stars: 5,
  },
  {
    quote: "Les consultants ont été efficaces et très professionnels. Les résultats de ces deux audits nous ont été très utiles. Je recommande CyberSecure.",
    author: "Jean-Baptiste B.",
    role: "Technology Operations Manager",
    company: "Cosmo Tech",
    initials: "JB",
    color: "bg-orange-500",
    stars: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding border-t border-border" aria-label="Témoignages clients">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ce que nos clients <span className="text-gradient">disent de nous</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Grands comptes, ETI et PME témoignent de la qualité de nos prestations en audit, conseil et réponse à incident de cybersécurité.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-glass rounded-xl p-8 relative"
            >
              <Quote className="h-8 w-8 text-primary/20 absolute top-6 right-6" aria-hidden="true" />
              <div className="flex gap-0.5 mb-4" aria-label={`Note: ${t.stars}/5`}>
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-primary text-primary" aria-hidden="true" />
                ))}
              </div>
              <p className="text-foreground/90 text-sm leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>
              <footer className="flex items-center gap-3">
                <div className={`${t.color} h-10 w-10 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground text-sm">{t.author}</p>
                  <p className="text-muted-foreground text-xs">{t.role} · {t.company}</p>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

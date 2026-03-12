import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import NewsletterSection from "@/components/NewsletterSection";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    tag: "Actualité",
    title: "Summer Secure : 8 réflexes pour renforcer votre sécurité numérique",
    desc: "Chaque semaine, nous avons partagé des réflexes concrets pour réduire les risques et renforcer la sécurité de votre SI.",
    date: "15 Fév 2026",
  },
  {
    tag: "Blog",
    title: "Le règlement DORA dans le secteur financier : une mise en conformité obligatoire",
    desc: "Le règlement DORA vise à renforcer la cybersécurité et la résilience informatique du secteur financier européen.",
    date: "28 Jan 2026",
  },
  {
    tag: "Événement",
    title: "CyberSecure au Forum InCyber 2026",
    desc: "Retrouvez-nous au FIC à Lille les 1-3 avril 2026 sur notre stand pour échanger autour de la cybersécurité.",
    date: "10 Jan 2026",
  },
  {
    tag: "Blog",
    title: "NIS2 : ce que les entreprises doivent savoir",
    desc: "La directive NIS2 élargit considérablement le périmètre des entités concernées par les obligations de cybersécurité en Europe.",
    date: "5 Jan 2026",
  },
  {
    tag: "Actualité",
    title: "CyberSecure renouvelle sa qualification PASSI",
    desc: "Notre qualification PASSI délivrée par l'ANSSI a été renouvelée, confirmant notre expertise en audit de sécurité.",
    date: "18 Déc 2025",
  },
  {
    tag: "Blog",
    title: "Ransomware : les bonnes pratiques pour s'en protéger",
    desc: "Guide complet des mesures préventives et réactives face à la menace croissante des rançongiciels.",
    date: "2 Déc 2025",
  },
];

const Actualites = () => {
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
              Blog & actualités
            </p>
            <h1 className="font-heading text-4xl md:text-6xl font-bold leading-tight mb-6">
              Nos <span className="text-gradient">actualités</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Découvrez nos dernières publications, événements et conseils en cybersécurité.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((a, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="card-glass rounded-xl overflow-hidden group cursor-pointer hover:border-primary/40 transition-all"
              >
                <div className="h-44 bg-secondary/50 flex items-center justify-center">
                  <span className="text-muted-foreground font-heading text-sm">{a.tag}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-primary text-xs font-heading font-semibold uppercase tracking-wider">{a.tag}</span>
                    <span className="text-muted-foreground text-xs">{a.date}</span>
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {a.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{a.desc}</p>
                  <span className="text-primary text-sm font-heading font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Lire l'article <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      <NewsletterSection />
      <FooterSection />
    </div>
  );
};

export default Actualites;

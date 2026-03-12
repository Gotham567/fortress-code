import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const articles = [
  {
    tag: "Actualité",
    title: "Summer Secure : 8 réflexes pour renforcer votre sécurité numérique",
    desc: "Chaque semaine, nous avons partagé des réflexes concrets pour réduire les risques et renforcer la sécurité de votre SI.",
  },
  {
    tag: "Blog",
    title: "Le règlement DORA dans le secteur financier : une mise en conformité obligatoire",
    desc: "Le règlement DORA vise à renforcer la cybersécurité et la résilience informatique du secteur financier européen.",
  },
];

const BlogSection = () => {
  return (
    <section className="section-padding border-t border-border" id="blog">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nos <span className="text-gradient">actualités</span>
          </h2>
          <p className="text-muted-foreground">Découvrez notre actualité autour de la cybersécurité.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {articles.map((a, i) => (
            <Link key={i} to="/actualites">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="card-glass rounded-xl overflow-hidden group cursor-pointer hover:border-primary/40 transition-all"
            >
              <div className="h-48 bg-secondary/50 flex items-center justify-center">
                <span className="text-muted-foreground font-heading text-sm">{a.tag}</span>
              </div>
              <div className="p-6">
                <span className="text-primary text-xs font-heading font-semibold uppercase tracking-wider">{a.tag}</span>
                <h3 className="font-heading text-lg font-semibold text-foreground mt-2 mb-3 group-hover:text-primary transition-colors">
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
  );
};

export default BlogSection;

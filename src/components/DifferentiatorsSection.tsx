import { motion } from "framer-motion";
import { Brain, Unplug, Lightbulb, Users, MapPin, BadgeCheck } from "lucide-react";

const items = [
  { icon: Brain, title: "Expertise", desc: "Experts en pentests, reverse engineering, forensique et conseil ISO 27001." },
  { icon: Unplug, title: "Indépendance", desc: "Aucun partenariat éditeur ou constructeur — conseils objectifs garantis." },
  { icon: Lightbulb, title: "Innovation", desc: "Partenariat recherche pour la sécurisation IoT via thèse Cifre." },
  { icon: Users, title: "Taille humaine", desc: "Offre personnalisée et qualité de service optimale." },
  { icon: MapPin, title: "En expansion", desc: "Lyon, Paris, Saint-Étienne, Grenoble et Annecy." },
  { icon: BadgeCheck, title: "Certifiés", desc: "Qualifiés PASSI pour des audits et pentests qualitatifs." },
];

const DifferentiatorsSection = () => {
  return (
    <section className="section-padding border-t border-border" id="about">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ce qui nous <span className="text-gradient">différencie</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cabinet de conseil indépendant spécialisé en sécurité des systèmes d'information, au plus proche de vos besoins.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex gap-4 p-6 rounded-xl bg-secondary/30 border border-border hover:border-primary/30 transition-all group"
            >
              <item.icon className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorsSection;

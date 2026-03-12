import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { motion } from "framer-motion";
import { Leaf, Heart, Users, Recycle } from "lucide-react";

const engagements = [
  { icon: Leaf, title: "Environnement", desc: "Réduction de notre empreinte carbone, politique zéro papier et choix d'hébergeurs éco-responsables." },
  { icon: Heart, title: "Bien-être au travail", desc: "Télétravail flexible, formation continue et équilibre vie professionnelle/personnelle." },
  { icon: Users, title: "Inclusion et diversité", desc: "Promotion de la diversité dans le recrutement et sensibilisation aux enjeux d'inclusion dans le numérique." },
  { icon: Recycle, title: "Numérique responsable", desc: "Conception de solutions durables, optimisation des ressources et lutte contre l'obsolescence programmée." },
];

const RSE = () => {
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
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Démarche <span className="text-gradient">RSE</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              AlgoSecure s'engage pour un numérique responsable et éthique, en intégrant les enjeux sociaux et environnementaux au cœur de son activité.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {engagements.map((e, i) => (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-glass rounded-xl p-8 hover:border-primary/50 transition-all group"
              >
                <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <e.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{e.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{e.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <FooterSection />
    </div>
  );
};

export default RSE;

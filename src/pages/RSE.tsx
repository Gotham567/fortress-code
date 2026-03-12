import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Leaf, Heart, Users, Recycle } from "lucide-react";
import { Link } from "react-router-dom";

const engagements = [
  { icon: Leaf, title: "Environnement", desc: "Réduction de notre empreinte carbone numérique, politique zéro papier, choix d'hébergeurs éco-responsables et optimisation de la consommation énergétique de nos systèmes." },
  { icon: Heart, title: "Bien-être au travail", desc: "Télétravail flexible, formation continue et certifications financées, équilibre vie professionnelle/personnelle et environnement de travail bienveillant." },
  { icon: Users, title: "Inclusion et diversité", desc: "Promotion de la diversité dans le recrutement, sensibilisation aux enjeux d'inclusion dans le numérique et partenariats avec des écoles et associations." },
  { icon: Recycle, title: "Numérique responsable", desc: "Conception de solutions durables, optimisation des ressources, lutte contre l'obsolescence programmée et sensibilisation de nos clients au numérique responsable." },
];

const RSE = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Démarche RSE — Cybersécurité responsable"
        description="Découvrez les engagements RSE de CyberSecure : numérique responsable, bien-être au travail, inclusion et environnement. Un cabinet de cybersécurité engagé pour un numérique éthique et durable."
        canonical="/rse"
      />
      <Navbar />
      <main>
        <section className="pt-32 pb-20 px-6 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-center mb-16">
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                Démarche <span className="text-gradient">RSE</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed mb-4">
                CyberSecure s'engage pour un numérique responsable et éthique, en intégrant les enjeux sociaux et environnementaux au cœur de son activité de cybersécurité.
              </p>
              <p className="text-muted-foreground text-base max-w-2xl mx-auto leading-relaxed">
                En tant que cabinet de <Link to="/conseil" className="text-primary hover:underline">conseil en cybersécurité</Link>, nous croyons que la sécurité numérique va de pair avec la responsabilité sociétale.
              </p>
            </motion.div>

            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Nos <span className="text-gradient">engagements</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {engagements.map((e, i) => (
                <motion.div key={e.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card-glass rounded-xl p-8 hover:border-primary/50 transition-all group">
                  <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <e.icon className="h-7 w-7 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{e.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{e.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
};

export default RSE;

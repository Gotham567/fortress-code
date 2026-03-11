import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import DifferentiatorsSection from "@/components/DifferentiatorsSection";
import CertificationsSection from "@/components/CertificationsSection";
import TrustSection from "@/components/TrustSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { motion } from "framer-motion";
import { Users, Target, Heart, MapPin } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-primary font-heading font-semibold text-sm uppercase tracking-widest mb-4">
              À propos
            </p>
            <h1 className="font-heading text-4xl md:text-6xl font-bold leading-tight mb-6">
              Qui sommes-<span className="text-gradient">nous</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              AlgoSecure est un cabinet de conseil indépendant en cybersécurité fondé en 2008 à Lyon. Nous accompagnons entreprises et organismes publics dans la sécurisation de leurs systèmes d'information avec expertise, indépendance et bienveillance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
          >
            {[
              { icon: Users, title: "+60 experts", desc: "Consultants certifiés en cybersécurité" },
              { icon: Target, title: "+1000 missions", desc: "Audits et accompagnements réalisés" },
              { icon: Heart, title: "Indépendant", desc: "Aucun partenariat éditeur, conseils objectifs" },
              { icon: MapPin, title: "5 bureaux", desc: "Lyon, Paris, Saint-Étienne, Grenoble, Annecy" },
            ].map((item, i) => (
              <div key={i} className="card-glass rounded-xl p-6 text-center">
                <item.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-heading font-bold text-foreground text-xl mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <DifferentiatorsSection />
      <CertificationsSection />
      <TrustSection />
      <TestimonialsSection />
      <FooterSection />
    </div>
  );
};

export default About;

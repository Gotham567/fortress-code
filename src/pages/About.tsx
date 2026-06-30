import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import DifferentiatorsSection from "@/components/DifferentiatorsSection";
import CertificationsSection from "@/components/CertificationsSection";
import TrustSection from "@/components/TrustSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Users, Target, Heart, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://securecyber.fr/" },
      { "@type": "ListItem", "position": 2, "name": "Qui sommes-nous", "item": "https://securecyber.fr/qui-sommes-nous" }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Qui sommes-nous — Cabinet cybersécurité indépendant"
        description="CyberSecure, cabinet de conseil indépendant en cybersécurité fondé en 2008 à Lyon. +60 experts certifiés, +1000 missions, qualifié PASSI et certifié ISO 27001. Bureaux à Lyon, Paris, Saint-Étienne, Grenoble et Annecy."
        canonical="/qui-sommes-nous"
        jsonLd={breadcrumbJsonLd}
      />
      <Navbar />
      <main>
        <section className="pt-32 pb-20 px-6 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
              <p className="text-primary font-heading font-semibold text-sm uppercase tracking-widest mb-4">À propos de CyberSecure</p>
              <h1 className="font-heading text-4xl md:text-6xl font-bold leading-tight mb-6">
                Qui sommes-<span className="text-gradient">nous</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                CyberSecure est un cabinet de conseil indépendant en cybersécurité fondé en 2008 à Lyon. Nous accompagnons entreprises et organismes publics dans la sécurisation de leurs systèmes d'information avec expertise, indépendance et bienveillance.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed mb-8">
                Notre indépendance est notre force : aucun partenariat éditeur ou constructeur ne biaise nos recommandations. Nos consultants certifiés (OSCP, OSEP, CEH, Lead Auditor ISO 27001) interviennent en <Link to="/audit" className="text-primary hover:underline">audit</Link>, <Link to="/conseil" className="text-primary hover:underline">conseil</Link> et <Link to="/cert" className="text-primary hover:underline">réponse à incident</Link> pour des organisations de toutes tailles et secteurs. Notre expertise s'étend à la <a href="https://cloud-secure.fr" target="_blank" rel="noopener" className="text-primary hover:underline">sécurisation des environnements cloud</a> et à l'accompagnement en <a href="https://cyberconform.fr" target="_blank" rel="noopener" className="text-primary hover:underline">conformité réglementaire</a>.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {[
                { icon: Users, title: "+60 experts", desc: "Consultants certifiés en cybersécurité (OSCP, OSEP, CEH, ISO 27001 LA)" },
                { icon: Target, title: "+1000 missions", desc: "Audits, pentests et accompagnements réalisés depuis 2008" },
                { icon: Heart, title: "100% indépendant", desc: "Aucun partenariat éditeur, conseils objectifs et sur-mesure" },
                { icon: MapPin, title: "5 bureaux en France", desc: "Lyon, Paris, Saint-Étienne, Grenoble, Annecy" },
              ].map((item, i) => (
                <div key={i} className="card-glass rounded-xl p-6 text-center">
                  <item.icon className="h-10 w-10 text-primary mx-auto mb-4" aria-hidden="true" />
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
      </main>
      <FooterSection />
    </div>
  );
};

export default About;

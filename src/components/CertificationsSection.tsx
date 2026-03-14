import { motion } from "framer-motion";
import { ShieldCheck, Award, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CertificationsSection = () => {
  return (
    <section className="section-padding" id="certifications">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nos <span className="text-gradient">certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Évaluez notre expertise grâce à nos qualifications et certifications reconnues.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: ShieldCheck,
              title: "Qualifiés PASSI",
              desc: "Prestataire d'Audit de la Sécurité des Systèmes d'Information, qualification délivrée par l'ANSSI. Tests d'intrusion, audit de configuration, audit d'architecture et audit organisationnel.",
            },
            {
              icon: Award,
              title: "Certifiés ISO 27001:2022",
              desc: "Certification sur le périmètre de notre infrastructure d'audit, démontrant notre engagement à appliquer les meilleures pratiques de sécurité que nous recommandons.",
            },
            {
              icon: Building2,
              title: "Membre Campus Cyber",
              desc: "CyberSecure est membre du Campus Cyber, le lieu totem de la cybersécurité en France, renforçant notre réseau et notre expertise collective.",
            },
          ].map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="card-glass rounded-xl p-8 hover:border-primary/50 transition-all group"
            >
              <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <cert.icon className="h-7 w-7 text-primary" aria-hidden="true" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{cert.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{cert.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/contact">
            <Button variant="outline" className="border-border text-foreground hover:bg-secondary font-heading">
              Demander nos livres blancs
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;

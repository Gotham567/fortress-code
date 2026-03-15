import { motion } from "framer-motion";
import nikeLogo from "@/assets/logos/nike.png";
import doctolibLogo from "@/assets/logos/doctolib.png";
import ibmLogo from "@/assets/logos/ibm.png";
import netflixLogo from "@/assets/logos/netflix.png";
import googleLogo from "@/assets/logos/google.png";
import microsoftLogo from "@/assets/logos/microsoft.png";
import amazonLogo from "@/assets/logos/amazon.png";

const logos = [
  { name: "Nike", src: nikeLogo },
  { name: "Doctolib", src: doctolibLogo },
  { name: "IBM", src: ibmLogo },
  { name: "Netflix", src: netflixLogo },
  { name: "Google", src: googleLogo },
  { name: "Microsoft", src: microsoftLogo },
  { name: "Amazon", src: amazonLogo },
];

const TrustSection = () => {
  return (
    <section className="section-padding border-b border-border" id="trust" aria-label="Références clients">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ils nous font <span className="text-gradient">confiance</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Grands comptes, ETI, PME et acteurs publics nous confient la sécurisation de leurs systèmes d'information.
          </p>
        </motion.div>

        <div className="overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="flex animate-scroll-left gap-16 w-max items-center py-4">
            {[...logos, ...logos, ...logos].map((logo, i) => (
              <div
                key={`${logo.name}-${i}`}
                className="flex items-center justify-center h-24 px-10 rounded-xl bg-secondary/50 border border-border min-w-[200px]"
              >
                <img
                  src={logo.src}
                  alt={`${logo.name} fait confiance à CyberSecure pour sa cybersécurité`}
                  className="h-14 max-w-[140px] object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
                  loading="lazy"
                  width="140"
                  height="56"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;

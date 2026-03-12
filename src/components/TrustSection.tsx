import { motion } from "framer-motion";
import orangeLogo from "@/assets/logos/orange.png";
import sfrLogo from "@/assets/logos/sfr.png";
import nikeLogo from "@/assets/logos/nike.png";
import spotifyLogo from "@/assets/logos/spotify.png";
import deliverooLogo from "@/assets/logos/deliveroo.png";
import macifLogo from "@/assets/logos/macif.png";
import doctolibLogo from "@/assets/logos/doctolib.png";

const logos = [
  { name: "Orange", src: orangeLogo },
  { name: "SFR", src: sfrLogo },
  { name: "Nike", src: nikeLogo },
  { name: "Spotify", src: spotifyLogo },
  { name: "Deliveroo", src: deliverooLogo },
  { name: "Macif", src: macifLogo },
  { name: "Doctolib", src: doctolibLogo },
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
          <div className="flex animate-scroll-left gap-12 w-max items-center">
            {[...logos, ...logos, ...logos].map((logo, i) => (
              <div
                key={`${logo.name}-${i}`}
                className="flex items-center justify-center h-20 px-8 rounded-lg bg-secondary/50 border border-border min-w-[180px]"
              >
                <img
                  src={logo.src}
                  alt={`${logo.name} fait confiance à CyberSecure pour sa cybersécurité`}
                  className="h-10 max-w-[120px] object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
                  loading="lazy"
                  width="120"
                  height="40"
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

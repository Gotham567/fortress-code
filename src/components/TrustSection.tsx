import { motion } from "framer-motion";

const logos = [
  "SNCF", "Thales", "Enedis", "Crédit Agricole", "Arkema", "Eurofins",
  "APICIL", "April", "Go Sport", "Delta Plus", "Grand Lyon", "Grenoble",
];

const TrustSection = () => {
  return (
    <section className="section-padding border-b border-border" id="trust">
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
            Grands comptes, ETI, PME et acteurs publics nous confient la sécurité de leurs systèmes d'information.
          </p>
        </motion.div>

        <div className="overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="flex animate-scroll-left gap-12 w-max">
            {[...logos, ...logos].map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="flex items-center justify-center h-16 px-8 rounded-lg bg-secondary/50 border border-border min-w-[160px]"
              >
                <span className="font-heading font-semibold text-muted-foreground text-sm whitespace-nowrap">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;

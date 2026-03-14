import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import NewsletterSection from "@/components/NewsletterSection";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Euro, BarChart3, Calculator, TrendingUp, HelpCircle } from "lucide-react";

const CoutAudit = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Combien coûte un audit cybersécurité en 2025 ?",
    "author": { "@type": "Organization", "name": "CyberSecure" },
    "datePublished": "2026-02-25",
    "dateModified": "2026-03-14"
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Combien coûte un audit cybersécurité en 2025 ?"
        description="Prix détaillés des audits cybersécurité en 2025 : pentest, audit de configuration, audit organisationnel. Tarifs par type de prestation, facteurs de coût et conseils pour optimiser votre budget."
        canonical="/actualites/cout-audit-cybersecurite-2025"
        jsonLd={jsonLd}
      />
      <Navbar />
      <main>
        <article className="pt-32 pb-20 px-6 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Link to="/actualites" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-heading text-sm mb-8 transition-colors">
                <ArrowLeft className="h-4 w-4" /> Retour aux actualités
              </Link>

              <div className="flex items-center gap-3 mb-4">
                <span className="text-primary text-xs font-heading font-semibold uppercase tracking-wider">Article</span>
                <time className="text-muted-foreground text-xs" dateTime="2026-02-25">25 Fév 2026</time>
              </div>

              <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight mb-6">
                Combien coûte un <span className="text-gradient">audit cybersécurité</span> en 2025 ?
              </h1>

              <p className="text-muted-foreground text-lg leading-relaxed mb-12">
                Le coût d'un audit cybersécurité est l'une des premières questions que se posent les dirigeants de PME. Et c'est légitime : entre les offres à quelques centaines d'euros et les prestations à plusieurs dizaines de milliers d'euros, il est difficile de s'y retrouver. Cet article détaille les vrais prix du marché et vous aide à comprendre ce qui justifie les écarts de tarifs.
              </p>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <Euro className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Les prix par type d'audit</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Les tarifs varient considérablement selon le type d'audit, le périmètre et la complexité de l'environnement. Voici les fourchettes de prix constatées sur le marché français en 2025 pour un prestataire qualifié :
                </p>

                <div className="card-glass rounded-xl overflow-hidden mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left p-4 font-heading font-semibold">Type d'audit</th>
                        <th className="text-left p-4 font-heading font-semibold">Durée</th>
                        <th className="text-left p-4 font-heading font-semibold">Fourchette PME</th>
                        <th className="text-left p-4 font-heading font-semibold hidden md:table-cell">Fourchette ETI</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b border-border/50"><td className="p-4 font-medium">Pentest externe</td><td className="p-4">3-5 j</td><td className="p-4">3 000 – 8 000 €</td><td className="p-4 hidden md:table-cell">8 000 – 20 000 €</td></tr>
                      <tr className="border-b border-border/50"><td className="p-4 font-medium">Pentest interne</td><td className="p-4">3-5 j</td><td className="p-4">4 000 – 10 000 €</td><td className="p-4 hidden md:table-cell">10 000 – 25 000 €</td></tr>
                      <tr className="border-b border-border/50"><td className="p-4 font-medium">Pentest applicatif web</td><td className="p-4">5-10 j</td><td className="p-4">5 000 – 15 000 €</td><td className="p-4 hidden md:table-cell">10 000 – 30 000 €</td></tr>
                      <tr className="border-b border-border/50"><td className="p-4 font-medium">Audit d'architecture</td><td className="p-4">3-5 j</td><td className="p-4">3 000 – 8 000 €</td><td className="p-4 hidden md:table-cell">8 000 – 15 000 €</td></tr>
                      <tr className="border-b border-border/50"><td className="p-4 font-medium">Audit de configuration</td><td className="p-4">2-5 j</td><td className="p-4">2 000 – 7 000 €</td><td className="p-4 hidden md:table-cell">5 000 – 15 000 €</td></tr>
                      <tr className="border-b border-border/50"><td className="p-4 font-medium">Audit organisationnel</td><td className="p-4">5-10 j</td><td className="p-4">5 000 – 12 000 €</td><td className="p-4 hidden md:table-cell">10 000 – 25 000 €</td></tr>
                      <tr><td className="p-4 font-medium">Audit complet (combo)</td><td className="p-4">10-20 j</td><td className="p-4">10 000 – 30 000 €</td><td className="p-4 hidden md:table-cell">25 000 – 80 000 €</td></tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Ces tarifs correspondent aux prix pratiqués par des prestataires qualifiés PASSI ou disposant d'une expertise reconnue. Le tarif journalier moyen (TJM) d'un consultant cybersécurité senior/pentester en France se situe entre 800€ et 1 500€ HT. Ce TJM reflète le niveau d'expertise requis, les certifications détenues et la responsabilité engagée.
                </p>
              </section>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <BarChart3 className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Les facteurs qui influencent le prix</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Pourquoi des écarts de prix aussi importants ? Plusieurs facteurs expliquent les variations de tarifs entre les différentes prestations et les différents prestataires.
                </p>

                <h3 className="font-heading text-xl font-semibold mt-6 mb-3">Le périmètre de l'audit</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  C'est le facteur le plus déterminant. Un pentest ciblant une seule application web simple ne coûtera pas le même prix qu'un audit complet de l'infrastructure d'une entreprise multi-sites avec des dizaines de serveurs, un Active Directory complexe et plusieurs applications métier. Plus le périmètre est large, plus l'audit nécessite de temps et de ressources, et plus le coût sera élevé. C'est pourquoi le cadrage initial est crucial : il permet de définir un périmètre réaliste par rapport au budget disponible.
                </p>

                <h3 className="font-heading text-xl font-semibold mt-6 mb-3">La complexité de l'environnement</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Un environnement homogène (quelques serveurs Windows, un réseau simple) sera plus rapide à auditer qu'un environnement hétérogène mêlant technologies anciennes et modernes, systèmes industriels (OT/SCADA), environnements cloud multi-provider, et applications développées sur mesure. La complexité technique augmente le temps nécessaire et requiert parfois des compétences spécialisées plus rares et donc plus coûteuses.
                </p>

                <h3 className="font-heading text-xl font-semibold mt-6 mb-3">La qualification du prestataire</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Un prestataire qualifié PASSI par l'ANSSI sera généralement plus cher qu'un prestataire non qualifié, mais cette différence de prix se justifie par la rigueur méthodologique, les compétences validées et la qualité des livrables. Pour certaines réglementations (OIV, NIS2), le recours à un prestataire qualifié est d'ailleurs obligatoire. Considérez cette dépense comme un investissement dans la fiabilité des résultats.
                </p>

                <h3 className="font-heading text-xl font-semibold mt-6 mb-3">L'approche et la profondeur des tests</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Un pentest en boîte noire nécessite plus de temps de reconnaissance qu'un pentest en boîte grise, ce qui se reflète dans le prix. De même, un audit qui inclut une exploitation approfondie des vulnérabilités avec des scénarios d'attaque réalistes sera plus coûteux qu'un simple scan de vulnérabilités avec validation manuelle. La profondeur des tests est directement corrélée à la valeur des résultats.
                </p>

                <h3 className="font-heading text-xl font-semibold mt-6 mb-3">Les prestations annexes</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Certains prestataires incluent dans leur tarif des prestations complémentaires : réunion de restitution détaillée, accompagnement à la remédiation, audit de contrôle post-remédiation, mise à disposition d'un portail de suivi. Ces services apportent une réelle valeur ajoutée mais augmentent le coût global. Vérifiez ce qui est inclus dans le devis pour comparer les offres à périmètre équivalent.
                </p>
              </section>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <Calculator className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Comment optimiser votre budget audit</h2>
                </div>

                <div className="space-y-4">
                  {[
                    { title: "Priorisez les actifs les plus exposés", desc: "Commencez par auditer ce qui est exposé sur Internet (site web, VPN, messagerie) car c'est ce que les attaquants ciblent en premier. Vous pourrez élargir le périmètre lors des audits suivants." },
                    { title: "Optez pour un forfait annuel", desc: "De nombreux prestataires proposent des contrats annuels incluant plusieurs tests à des tarifs préférentiels (économie de 10 à 20% par rapport aux missions ponctuelles). Cette approche permet également un suivi dans le temps." },
                    { title: "Combinez les types d'audits", desc: "Réaliser un pentest externe et interne dans la même mission réduit les frais de cadrage, de mobilisation et de reporting. Les synergies méthodologiques permettent des économies de 15 à 25%." },
                    { title: "Préparez-vous en amont", desc: "Fournissez rapidement la documentation demandée (schémas réseau, inventaire, comptes de test) pour que les auditeurs ne perdent pas de temps à chercher des informations. Chaque heure économisée en phase de préparation est une heure de moins à facturer." },
                    { title: "Profitez des aides disponibles", desc: "Le dispositif Mon Aide Cyber de l'ANSSI, certaines CCI, BPI France et les régions proposent des aides financières pour les audits de cybersécurité des PME. Renseignez-vous auprès de votre CCI locale." }
                  ].map((item, i) => (
                    <div key={i} className="card-glass rounded-xl p-6">
                      <h3 className="font-heading text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Le ROI d'un audit cybersécurité</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  L'audit cybersécurité ne doit pas être perçu comme une dépense mais comme un investissement. Pour comprendre son retour sur investissement, il faut le mettre en perspective avec le coût d'une cyberattaque :
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                  <li><strong>Coût moyen d'un ransomware pour une PME :</strong> 25 000 à 50 000 € (sans compter la rançon)</li>
                  <li><strong>Coût d'une interruption d'activité :</strong> 5 000 à 20 000 € par jour selon le secteur</li>
                  <li><strong>Amende RGPD :</strong> jusqu'à 4% du chiffre d'affaires ou 20 millions d'euros</li>
                  <li><strong>Amende NIS2 :</strong> jusqu'à 2% du chiffre d'affaires ou 10 millions d'euros</li>
                  <li><strong>Perte de clients post-incident :</strong> 20 à 40% des clients peuvent partir</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Un audit à 5 000 ou 10 000 € qui permet d'identifier et corriger une vulnérabilité critique avant qu'elle ne soit exploitée peut éviter un sinistre de plusieurs centaines de milliers d'euros. C'est un ratio risque/coût extrêmement favorable. Sans compter que la démonstration d'une démarche proactive de sécurité peut faciliter la souscription d'une assurance cyber à des conditions préférentielles.
                </p>
              </section>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <HelpCircle className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Attention aux offres trop bon marché</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Sur le marché, vous trouverez des offres de "pentest" à 500€ ou des "audits cybersécurité complets" à 1 000€. Ces offres correspondent généralement à de simples scans automatisés, sans analyse humaine approfondie. Elles peuvent donner un faux sentiment de sécurité, ce qui est potentiellement plus dangereux que de ne pas faire d'audit du tout.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Un véritable audit cybersécurité nécessite l'intervention d'experts humains qualifiés pendant plusieurs jours. Un pentester certifié OSCP avec 5 ans d'expérience ne peut pas être facturé 100€ la journée. Si le prix est trop beau pour être vrai, c'est probablement le cas.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Privilégiez la qualité à la quantité : un bon pentest de 3 jours sur un périmètre ciblé apportera infiniment plus de valeur qu'un "audit complet" low-cost qui se contentera de lister les CVE théoriques sans vérifier leur exploitabilité réelle dans votre contexte.
                </p>
              </section>

              <section className="card-glass rounded-xl p-8 text-center">
                <h2 className="font-heading text-2xl font-bold mb-4">Obtenez un devis adapté à votre PME</h2>
                <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
                  Nous adaptons nos audits cybersécurité au périmètre et au budget de chaque PME. Contactez-nous pour un devis transparent et personnalisé.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-heading font-semibold hover:bg-primary/90 transition-colors">
                  Demander un devis gratuit
                </Link>
              </section>
            </motion.div>
          </div>
        </article>
        <NewsletterSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default CoutAudit;

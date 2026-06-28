import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import NewsletterSection from "@/components/NewsletterSection";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ShieldCheck, FileText, Euro, AlertTriangle, CheckCircle2, Calendar, Scale } from "lucide-react";
import heroImg from "@/assets/articles/cyber-assurance.jpg";

const CyberAssurance = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Cyber-assurance : guide complet pour les PME et ETI",
    "author": { "@type": "Organization", "name": "CyberSecure" },
    "datePublished": "2026-04-18",
    "dateModified": "2026-04-18",
    "description": "Guide pratique sur la cyber-assurance : garanties, exclusions, prix, critères des assureurs (LPM 2023), comment souscrire et négocier sa police pour les PME et ETI."
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Cyber-assurance : guide complet pour PME et ETI"
        description="Cyber-assurance 2026 : garanties (RC, dommages, rançon, frais de gestion de crise), exclusions, prix, critères des assureurs et plan pour souscrire la bonne police."
        canonical="/actualites/cyber-assurance-guide-pme-eti"
        jsonLd={jsonLd}
        ogImage={heroImg}
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
                <span className="text-primary text-xs font-heading font-semibold uppercase tracking-wider">Guide</span>
                <time className="text-muted-foreground text-xs" dateTime="2026-04-18">18 Avril 2026</time>
              </div>

              <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight mb-6">
                <span className="text-gradient">Cyber-assurance</span> : guide complet pour les PME et ETI
              </h1>

              <img src={heroImg} alt="Cyber-assurance pour les entreprises" className="w-full rounded-xl mb-8 border border-border/40" width={1280} height={720} />

              <p className="text-muted-foreground text-lg leading-relaxed mb-12">
                Selon l'AMRAE, le marché français de la cyber-assurance a doublé en trois ans pour dépasser <strong>328 M€ de primes en 2024</strong>. Pourtant, <strong>seulement 16 % des PME françaises sont assurées contre les cyber-risques</strong> (LCL/Stat). Avec la <strong>LPM 2023</strong> (loi de programmation militaire), le législateur impose désormais le <strong>dépôt de plainte sous 72 h</strong> avant toute indemnisation d'une rançon. Ce guide pratique vous explique le fonctionnement, les garanties indispensables, les exclusions à éviter et comment négocier votre police.
              </p>
            </motion.div>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Qu'est-ce qu'une cyber-assurance ?</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Une <strong>cyber-assurance</strong> couvre les conséquences financières d'un incident de sécurité : ransomware, vol de données, fraude, interruption d'activité, sanctions RGPD, frais de défense, etc. Elle se distingue de l'assurance RC professionnelle classique, qui exclut presque toujours les cyber-risques.
              </p>
              <div className="card-glass rounded-xl p-6 border-l-4 border-primary">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  <strong>Important :</strong> une cyber-assurance n'est <em>pas</em> un substitut à la cybersécurité. Les assureurs exigent désormais un socle minimal de mesures (MFA, sauvegardes, EDR, sensibilisation) avant d'accepter de souscrire. Sans ce socle, vous serez refusé ou la prime sera prohibitive.
                </p>
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Les garanties d'une bonne police cyber</h2>
              </div>
              <div className="space-y-3">
                {[
                  { t: "Frais de gestion de crise", d: "Forensic, communication, notification CNIL, gestion des relations clients. Souvent activable en quelques heures via une hotline 24/7 incluse." },
                  { t: "Pertes d'exploitation", d: "Indemnisation du chiffre d'affaires perdu pendant l'arrêt d'activité (franchise temporelle de 8 à 24 h selon les contrats)." },
                  { t: "Reconstitution des données", d: "Coûts de restauration des systèmes, des sauvegardes et des données détruites ou chiffrées." },
                  { t: "Rançongiciel (extorsion)", d: "Prise en charge de la rançon (sous conditions LPM 2023) ET surtout des frais de négociation, déchiffrement et reconstruction." },
                  { t: "Responsabilité civile cyber", d: "Réclamations de tiers : clients, partenaires, sous-traitants suite à une fuite de données ou à une atteinte à leurs systèmes." },
                  { t: "Sanctions administratives RGPD", d: "Couverture des amendes CNIL (lorsque le droit local l'autorise) et frais de défense devant les autorités." },
                  { t: "Fraude et ingénierie sociale", d: "Arnaque au président (FOVI), fraude au virement, faux ordres de paiement. Souvent en option avec sous-limite." },
                  { t: "Cyber-extorsion (DDoS, doxing)", d: "Menaces de divulgation, attaques DDoS volumétriques, dénigrement en ligne." },
                ].map((g, i) => (
                  <div key={i} className="card-glass rounded-xl p-5">
                    <h3 className="font-heading font-semibold text-primary mb-1">{g.t}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{g.d}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Les exclusions et pièges à connaître</h2>
              </div>
              <div className="space-y-3">
                {[
                  { t: "Acte d'État (war exclusion)", d: "Suite à NotPetya (2017), de nombreux assureurs excluent les attaques attribuées à un État. À négocier précisément (clause LMA5556 vs Lloyd's 2023)." },
                  { t: "Vulnérabilités connues non patchées", d: "Si l'attaque exploite une CVE publiée depuis plus de 30 ou 90 jours sans correctif, l'assureur peut refuser l'indemnisation." },
                  { t: "Absence de MFA", d: "Compromission par credential stuffing sans MFA = exclusion fréquente. Imposer la MFA partout, surtout sur les accès admin et VPN." },
                  { t: "Sauvegardes non testées ou non isolées", d: "Si vos backups étaient connectés au réseau et chiffrés par le ransomware, l'assureur peut refuser la garantie reconstitution." },
                  { t: "Déclaration sincère lors de la souscription", d: "Toute fausse déclaration ou omission au questionnaire annule la garantie. Faire valider par le RSSI." },
                  { t: "Sous-limites par garantie", d: "Le plafond global cache souvent des sous-limites (ex : rançon plafonnée à 25 % du capital). Lire en détail." },
                ].map((e, i) => (
                  <div key={i} className="card-glass rounded-xl p-5">
                    <h3 className="font-heading font-semibold text-foreground mb-1">{e.t}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{e.d}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <Euro className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Combien coûte une cyber-assurance en 2026 ?</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Les primes ont triplé entre 2020 et 2023 puis se stabilisent depuis 2024. Les fourchettes ci-dessous valent pour une entreprise dotée d'un socle de sécurité conforme aux attentes des assureurs.
              </p>
              <div className="card-glass rounded-xl overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-primary/10">
                    <tr className="text-left">
                      <th className="p-4 font-heading font-semibold">CA annuel</th>
                      <th className="p-4 font-heading font-semibold">Capital recommandé</th>
                      <th className="p-4 font-heading font-semibold">Prime annuelle</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-t border-border/40"><td className="p-4">&lt; 5 M€</td><td className="p-4">500 k€ – 1 M€</td><td className="p-4">2 000 – 6 000 €</td></tr>
                    <tr className="border-t border-border/40"><td className="p-4">5 – 20 M€</td><td className="p-4">1 – 3 M€</td><td className="p-4">6 000 – 18 000 €</td></tr>
                    <tr className="border-t border-border/40"><td className="p-4">20 – 100 M€</td><td className="p-4">3 – 10 M€</td><td className="p-4">18 000 – 60 000 €</td></tr>
                    <tr className="border-t border-border/40"><td className="p-4">100 – 500 M€</td><td className="p-4">10 – 25 M€</td><td className="p-4">60 000 – 200 000 €</td></tr>
                    <tr className="border-t border-border/40"><td className="p-4">&gt; 500 M€</td><td className="p-4">25 M€+</td><td className="p-4">Sur mesure</td></tr>
                  </tbody>
                </table>
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <Scale className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">LPM 2023 : la nouvelle obligation des 72 h</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Depuis le <strong>24 avril 2024</strong>, l'article L.12-10-1 du Code des assurances impose, pour toute indemnisation d'une cyber-rançon, le <strong>dépôt de plainte auprès des forces de l'ordre dans les 72 heures</strong> suivant la connaissance de l'infraction. À défaut, l'assureur refuse la prise en charge de la rançon (mais les autres garanties restent ouvertes).
              </p>
              <div className="card-glass rounded-xl p-6 border-l-4 border-primary">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  <strong>Conseil pratique :</strong> intégrer cette obligation dans votre <Link to="/actualites/que-faire-apres-cyberattaque" className="text-primary underline">plan de réponse à incident</Link> et identifier à l'avance le commissariat ou la gendarmerie compétente (BL2C, COMCYBER, C3N).
                </p>
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Les 12 mesures attendues par les assureurs</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Avant de souscrire, l'assureur vous fera remplir un questionnaire de 50 à 200 questions. Voici les mesures qui font la différence entre une prime acceptable et un refus.
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  "MFA obligatoire (admin, VPN, M365, SaaS)",
                  "EDR sur 100 % des postes et serveurs",
                  "Sauvegardes 3-2-1 + copies hors ligne / immuables",
                  "Tests de restauration documentés",
                  "Patch management (vulnérabilités critiques sous 30 j)",
                  "Filtrage email avancé + sandboxing",
                  "Sensibilisation annuelle + simulations de phishing",
                  "Plan de réponse à incident testé",
                  "Segmentation réseau et hardening Active Directory",
                  "Journalisation centralisée (SIEM ou SOC managé)",
                  "Inventaire des actifs et classification des données",
                  "Audit de sécurité annuel par un tiers (PASSI de préférence)",
                ].map((m, i) => (
                  <div key={i} className="card-glass rounded-xl p-4 flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm leading-relaxed">{m}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14 card-glass rounded-2xl p-8 text-center glow-border">
              <Calendar className="h-10 w-10 text-primary mx-auto mb-4" />
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3">Préparer votre dossier d'assurance cyber</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                15 minutes pour évaluer votre maturité face aux exigences des assureurs et identifier les actions à mener pour décrocher la meilleure prime. Sans engagement.
              </p>
              <a
                href="https://calendly.com/lakaoub/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-heading font-semibold hover:bg-primary/90 transition-all"
              >
                Réserver mon échange gratuit
              </a>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <h2 className="font-heading text-xl md:text-2xl font-bold mb-4">Articles liés</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link to="/actualites/ransomware-pme-guide-prevention-reponse" className="card-glass rounded-xl p-5 hover:border-primary/40 transition-all">
                  <h3 className="font-heading font-semibold text-foreground mb-1">Ransomware PME</h3>
                  <p className="text-muted-foreground text-sm">Le risque numéro 1 couvert par les polices cyber.</p>
                </Link>
                <Link to="/actualites/conformite-rgpd-cybersecurite-guide-pme" className="card-glass rounded-xl p-5 hover:border-primary/40 transition-all">
                  <h3 className="font-heading font-semibold text-foreground mb-1">Conformité RGPD</h3>
                  <p className="text-muted-foreground text-sm">Sanctions CNIL et garantie d'assurance associée.</p>
                </Link>
              </div>
            </motion.section>
          </div>
        </article>
        <NewsletterSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default CyberAssurance;

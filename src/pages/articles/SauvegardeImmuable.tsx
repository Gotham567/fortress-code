import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import NewsletterSection from "@/components/NewsletterSection";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Database, ShieldCheck, Layers, AlertTriangle, CheckCircle2, Calendar } from "lucide-react";
import heroImg from "@/assets/articles/sauvegarde-immuable.jpg";

const SauvegardeImmuable = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Sauvegarde immuable et règle 3-2-1-1-0 : la dernière ligne de défense contre le ransomware",
    "author": { "@type": "Organization", "name": "CyberSecure" },
    "datePublished": "2026-05-08",
    "dateModified": "2026-05-08",
    "description": "Sauvegarde immuable, air gap, règle 3-2-1-1-0, WORM, S3 Object Lock : guide complet pour bâtir une stratégie de sauvegarde résiliente contre le ransomware."
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Sauvegarde immuable & règle 3-2-1-1-0 : guide PME"
        description="Stratégie de sauvegarde anti-ransomware : règle 3-2-1-1-0, immuabilité WORM/Object Lock, air gap, tests de restauration, RTO/RPO et budget pour PME et ETI."
        canonical="/actualites/sauvegarde-immuable-3-2-1-guide-pme"
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
                <time className="text-muted-foreground text-xs" dateTime="2026-05-08">8 Mai 2026</time>
              </div>
              <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight mb-6">
                <span className="text-gradient">Sauvegarde immuable</span> et règle 3-2-1-1-0
              </h1>
              <img src={heroImg} alt="Sauvegarde immuable contre le ransomware" className="w-full rounded-xl mb-8 border border-border/40" width={1280} height={720} />
              <p className="text-muted-foreground text-lg leading-relaxed mb-12">
                <strong>93 % des attaques ransomware ciblent en priorité les sauvegardes</strong> (rapport Veeam Ransomware Trends 2024). Sans sauvegardes saines, hors-ligne et testées, payer la rançon devient la seule option — et même là, <strong>30 % des entreprises ne récupèrent pas leurs données</strong>. La sauvegarde immuable est aujourd'hui la dernière ligne de défense. Ce guide vous explique la règle 3-2-1-1-0, les technologies (WORM, S3 Object Lock, air gap), les coûts et la méthode de test.
              </p>
            </motion.div>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <Layers className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">La règle 3-2-1-1-0 expliquée</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">Évolution moderne de la règle 3-2-1, recommandée par l'ANSSI et le NIST :</p>
              <div className="space-y-3">
                {[
                  { c: "3", t: "copies des données", d: "Le primaire + 2 sauvegardes distinctes." },
                  { c: "2", t: "supports différents", d: "Ex. disque + bande, ou disque + objet cloud — pour éliminer les risques liés à une seule technologie." },
                  { c: "1", t: "copie hors site", d: "Site distant, cloud, datacenter de secours — pour résister à un incendie ou à un sinistre local." },
                  { c: "1", t: "copie hors ligne ou immuable", d: "Bande détachée, S3 Object Lock, Azure Immutable Blob, dépôt WORM — invulnérable au ransomware qui prend le contrôle de votre AD." },
                  { c: "0", t: "erreur après vérification", d: "Tests de restauration réguliers avec vérification d'intégrité (hash, checksum, restauration complète)." },
                ].map((r, i) => (
                  <div key={i} className="card-glass rounded-xl p-5 flex gap-4 items-start">
                    <div className="text-3xl font-heading font-bold text-primary leading-none">{r.c}</div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-1">{r.t}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{r.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Qu'est-ce qu'une sauvegarde « immuable » ?</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Une sauvegarde immuable est <strong>impossible à modifier, chiffrer ou supprimer</strong> pendant une période définie (rétention), <strong>même avec un compte administrateur compromis</strong>. Techniques disponibles :
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { t: "Amazon S3 Object Lock (Governance / Compliance)", d: "Verrou WORM natif AWS. Mode Compliance : irréversible même pour le root account." },
                  { t: "Azure Immutable Blob Storage", d: "Politique time-based ou legal hold sur container ou version." },
                  { t: "Veeam Hardened Repository (Linux + immutability flag)", d: "Linux XFS avec attribut chattr +i, accès SSH désactivé après bootstrap." },
                  { t: "Bande LTO + air gap physique", d: "Cassette retirée et stockée dans un coffre — invulnérable à toute attaque réseau." },
                  { t: "Stockage WORM dédié (Dell PowerProtect, NetApp SnapLock)", d: "Appliance avec rétention compliance certifiée SEC 17a-4." },
                  { t: "Cloud backup avec PIN/MFA delete", d: "Wasabi, Backblaze B2, OVHcloud Cold Archive avec suppression protégée." },
                ].map((t, i) => (
                  <div key={i} className="card-glass rounded-xl p-5">
                    <h3 className="font-heading font-semibold text-primary mb-1">{t.t}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{t.d}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <Database className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">RTO, RPO et stratégie de rétention</h2>
              </div>
              <div className="card-glass rounded-xl overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-primary/10">
                    <tr className="text-left">
                      <th className="p-4 font-heading">Tier de données</th>
                      <th className="p-4 font-heading">RPO cible</th>
                      <th className="p-4 font-heading">RTO cible</th>
                      <th className="p-4 font-heading">Rétention immuable</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-t border-border/40"><td className="p-4">Critique (ERP, AD, prod)</td><td className="p-4">≤ 1 h</td><td className="p-4">≤ 4 h</td><td className="p-4">30 j + archive 1 an</td></tr>
                    <tr className="border-t border-border/40"><td className="p-4">Important (fichiers métier)</td><td className="p-4">≤ 4 h</td><td className="p-4">≤ 24 h</td><td className="p-4">30 j + 6 mois</td></tr>
                    <tr className="border-t border-border/40"><td className="p-4">Standard (bureautique)</td><td className="p-4">24 h</td><td className="p-4">72 h</td><td className="p-4">14 j + 3 mois</td></tr>
                    <tr className="border-t border-border/40"><td className="p-4">Légal / archivage</td><td className="p-4">N/A</td><td className="p-4">7 j</td><td className="p-4">5 à 10 ans (compliance)</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-muted-foreground text-sm mt-4 italic">RPO = perte de données acceptable. RTO = temps de redémarrage acceptable.</p>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">10 bonnes pratiques essentielles</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Isoler la console de sauvegarde de l'AD de production (compte local dédié, MFA hardware)",
                  "Activer l'immuabilité par défaut sur tous les jobs critiques",
                  "Chiffrer les sauvegardes à la source (AES-256) avec gestion KMS séparée",
                  "Tester une restauration complète tous les trimestres (pas juste un fichier)",
                  "Documenter les procédures de restauration (runbook accessible offline)",
                  "Mettre les sauvegardes hors du domaine Windows (Linux hardened repo)",
                  "Surveiller les jobs : alerte en cas d'échec, de suppression ou de baisse de volume",
                  "Limiter l'accès à la console (RBAC, just-in-time, journalisation)",
                  "Vérifier l'intégrité régulièrement (Veeam SureBackup, hash, scan AV)",
                  "Inclure SaaS critiques : Microsoft 365, Google Workspace, Salesforce (la responsabilité reste à vous)",
                ].map((p, i) => (
                  <div key={i} className="card-glass rounded-xl p-4 flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm leading-relaxed">{p}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Les 6 pièges qui ruinent une stratégie de sauvegarde</h2>
              </div>
              <div className="space-y-3">
                {[
                  "Console de backup intégrée à l'AD : le ransomware compromet d'abord l'AD puis supprime les sauvegardes",
                  "Aucune copie immuable ou hors ligne : le snapshot NAS ne protège pas si l'attaquant a les credentials NAS",
                  "Jamais testé : 1 sauvegarde sur 3 échoue lors de la première vraie restauration",
                  "Oublier les SaaS : Microsoft ne sauvegarde pas vos données M365 au-delà de 30 jours",
                  "Rétention trop courte : un attaquant reste 6 mois en moyenne avant déclenchement",
                  "Clés de chiffrement stockées avec les sauvegardes (= pas de chiffrement utile)",
                ].map((p, i) => (
                  <div key={i} className="card-glass rounded-xl p-4 flex gap-3">
                    <AlertTriangle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm leading-relaxed">{p}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14 card-glass rounded-2xl p-8 text-center glow-border">
              <Calendar className="h-10 w-10 text-primary mx-auto mb-4" />
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3">Évaluez votre résilience face au ransomware</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                15 minutes pour challenger votre stratégie de sauvegarde, vérifier l'immuabilité et identifier les axes de renforcement. Sans engagement.
              </p>
              <a href="https://calendly.com/many-cyberconform/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-heading font-semibold hover:bg-primary/90 transition-all">
                Réserver mon audit gratuit
              </a>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <h2 className="font-heading text-xl md:text-2xl font-bold mb-4">Articles liés</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link to="/actualites/ransomware-pme-guide-prevention-reponse" className="card-glass rounded-xl p-5 hover:border-primary/40 transition-all">
                  <h3 className="font-heading font-semibold text-foreground mb-1">Ransomware PME</h3>
                  <p className="text-muted-foreground text-sm">Prévention et réponse à incident.</p>
                </Link>
                <Link to="/actualites/pca-pra-cybersecurite-guide" className="card-glass rounded-xl p-5 hover:border-primary/40 transition-all">
                  <h3 className="font-heading font-semibold text-foreground mb-1">PCA &amp; PRA</h3>
                  <p className="text-muted-foreground text-sm">Plan de continuité et de reprise.</p>
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

export default SauvegardeImmuable;

import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import NewsletterSection from "@/components/NewsletterSection";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Radar, Activity, Eye, Layers, CheckCircle2, Server, Mail, Calendar, Zap } from "lucide-react";

const EDRXDRProtection = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "EDR vs XDR : choisir sa solution de détection pour PME",
    "author": { "@type": "Organization", "name": "CyberSecure" },
    "datePublished": "2026-04-08",
    "dateModified": "2026-04-08",
    "description": "Comprendre les solutions EDR et XDR : différences avec l'antivirus, fonctionnalités clés, comparatif des meilleures solutions et guide d'implémentation pour les PME."
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="EDR vs XDR : guide complet pour PME et ETI"
        description="EDR, XDR, antivirus : quelles différences ? Découvrez comment choisir et déployer une solution de détection et réponse pour protéger efficacement votre parc informatique."
        canonical="/actualites/edr-xdr-protection-endpoint-pme"
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
                <span className="text-primary text-xs font-heading font-semibold uppercase tracking-wider">Guide</span>
                <time className="text-muted-foreground text-xs" dateTime="2026-04-08">8 Avril 2026</time>
              </div>

              <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight mb-6">
                <span className="text-gradient">EDR vs XDR</span> : choisir sa solution de détection et réponse
              </h1>

              <p className="text-muted-foreground text-lg leading-relaxed mb-12">
                Les antivirus traditionnels ne détectent <strong>plus que 40 % des menaces modernes</strong>. Face à des attaquants utilisant des techniques de <em>living-off-the-land</em>, des malwares sans fichier et de l'IA générative, les solutions <strong>EDR (Endpoint Detection and Response)</strong> et <strong>XDR (Extended Detection and Response)</strong> sont devenues la nouvelle norme. Ce guide explique leurs différences, comment les choisir et les déployer dans une PME.
              </p>
            </motion.div>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <Radar className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Antivirus, EDR, XDR : quelles différences ?</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Ces trois technologies répondent à des approches très différentes de la sécurité des postes et serveurs.
              </p>
              <div className="space-y-4">
                <div className="card-glass rounded-xl p-6">
                  <h3 className="font-heading text-base font-semibold mb-2 text-primary">Antivirus traditionnel (AV)</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Détection basée sur des <strong>signatures connues</strong>. Bloque les malwares déjà identifiés mais inefficace contre les menaces nouvelles, le fileless malware et les techniques d'évasion.
                  </p>
                </div>
                <div className="card-glass rounded-xl p-6">
                  <h3 className="font-heading text-base font-semibold mb-2 text-primary">EDR (Endpoint Detection and Response)</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Surveille en continu le <strong>comportement</strong> des postes et serveurs (processus, registres, réseau, mémoire). Détecte les menaces inconnues par analyse comportementale et permet l'investigation et la réponse à distance (isolation, kill process, rollback).
                  </p>
                </div>
                <div className="card-glass rounded-xl p-6">
                  <h3 className="font-heading text-base font-semibold mb-2 text-primary">XDR (Extended Detection and Response)</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Étend l'EDR à <strong>plusieurs sources de télémétrie</strong> : endpoints + email + cloud + identité + réseau. Corrèle les signaux entre tous ces vecteurs pour détecter des attaques complexes invisibles en silo.
                  </p>
                </div>
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <Activity className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Fonctionnalités clés d'un EDR moderne</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { t: "Détection comportementale (UEBA)", d: "Analyse des comportements anormaux des utilisateurs et machines via machine learning." },
                  { t: "Isolation réseau à distance", d: "Couper instantanément un poste compromis du réseau sans intervention physique." },
                  { t: "Threat hunting proactif", d: "Recherche manuelle ou automatisée d'indicateurs de compromission dans la télémétrie." },
                  { t: "Rollback automatique", d: "Restauration des fichiers chiffrés par ransomware grâce à des snapshots locaux." },
                  { t: "Intégration MITRE ATT&CK", d: "Mapping des alertes sur le framework MITRE pour comprendre les TTPs des attaquants." },
                  { t: "Réponse automatisée (SOAR)", d: "Playbooks automatiques : suppression du processus, blocage IP, isolation, ticket SOC." },
                ].map((f, i) => (
                  <div key={i} className="card-glass rounded-xl p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <h3 className="font-heading text-sm font-semibold">{f.t}</h3>
                    </div>
                    <p className="text-muted-foreground text-xs leading-relaxed">{f.d}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <Layers className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Comparatif des principales solutions du marché</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm card-glass rounded-xl overflow-hidden">
                  <thead className="bg-primary/10">
                    <tr>
                      <th className="text-left p-4 font-heading text-primary">Solution</th>
                      <th className="text-left p-4 font-heading text-primary">Type</th>
                      <th className="text-left p-4 font-heading text-primary">Cible</th>
                      <th className="text-left p-4 font-heading text-primary">Prix indicatif / poste / mois</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-t border-border"><td className="p-4">CrowdStrike Falcon</td><td className="p-4">EDR/XDR</td><td className="p-4">PME à grand compte</td><td className="p-4">8 - 18 €</td></tr>
                    <tr className="border-t border-border"><td className="p-4">SentinelOne Singularity</td><td className="p-4">EDR/XDR</td><td className="p-4">PME à ETI</td><td className="p-4">6 - 15 €</td></tr>
                    <tr className="border-t border-border"><td className="p-4">Microsoft Defender for Endpoint</td><td className="p-4">EDR/XDR</td><td className="p-4">Écosystème Microsoft 365</td><td className="p-4">Inclus E5 / 5 €</td></tr>
                    <tr className="border-t border-border"><td className="p-4">HarfangLab</td><td className="p-4">EDR (FR, qualifié ANSSI)</td><td className="p-4">PME à OIV</td><td className="p-4">7 - 14 €</td></tr>
                    <tr className="border-t border-border"><td className="p-4">Sophos Intercept X</td><td className="p-4">EDR/XDR</td><td className="p-4">PME</td><td className="p-4">5 - 10 €</td></tr>
                    <tr className="border-t border-border"><td className="p-4">Bitdefender GravityZone</td><td className="p-4">EDR/XDR</td><td className="p-4">PME</td><td className="p-4">4 - 9 €</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-muted-foreground text-xs mt-4 italic">Tarifs indicatifs 2025 - Variables selon volume, options et contrat MSSP. Pour les structures sensibles, privilégiez une solution <strong>qualifiée par l'ANSSI</strong> comme HarfangLab.</p>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">EDR + supervision SOC : indispensable</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Déployer un EDR sans <strong>supervision 24/7</strong> revient à installer une alarme sans personne pour répondre. Les attaquants frappent <strong>à 73 % en dehors des heures ouvrées</strong> (nuit, week-end, jours fériés). Trois options pour une PME :
              </p>
              <div className="space-y-3">
                <div className="card-glass rounded-xl p-5">
                  <h3 className="font-heading text-sm font-semibold mb-2 text-primary">SOC interne</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">Réservé aux ETI et grands comptes : minimum 6 analystes, budget &gt; 600 k€/an. Inadapté à une PME.</p>
                </div>
                <div className="card-glass rounded-xl p-5">
                  <h3 className="font-heading text-sm font-semibold mb-2 text-primary">MDR (Managed Detection and Response)</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">Externalisation complète : EDR + supervision 24/7 + réponse à incident. Tarif : 12 à 25 €/poste/mois. <strong>Solution recommandée pour les PME</strong>.</p>
                </div>
                <div className="card-glass rounded-xl p-5">
                  <h3 className="font-heading text-sm font-semibold mb-2 text-primary">EDR autonome avec alertes</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">Notifications par email/SMS lors d'alertes critiques. Acceptable seulement si l'équipe IT a des compétences cyber et peut intervenir hors horaires.</p>
                </div>
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <Server className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Plan de déploiement en 6 étapes</h2>
              </div>
              <div className="space-y-3">
                {[
                  { n: "1", t: "Cartographie du parc", d: "Inventaire exhaustif des postes, serveurs, OS et applications critiques." },
                  { n: "2", t: "Définition des cas d'usage", d: "Quelles menaces prioritaires ? Quels actifs critiques ? Quels SLA ?" },
                  { n: "3", t: "POC sur 4 à 6 semaines", d: "Test de 2 ou 3 solutions sur un échantillon représentatif (50 à 100 postes)." },
                  { n: "4", t: "Déploiement progressif", d: "Vague pilote → métiers → ensemble du parc, en mode audit puis bloquant." },
                  { n: "5", t: "Tuning et exclusions", d: "Ajustement des règles pour minimiser les faux positifs sans créer de zones aveugles." },
                  { n: "6", t: "Mesure d'efficacité continue", d: "Tests de bypass réguliers (purple team), suivi du MTTD/MTTR, exercices de crise." },
                ].map((s) => (
                  <div key={s.n} className="card-glass rounded-xl p-4 flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-heading font-bold text-sm">{s.n}</div>
                    <div>
                      <h3 className="font-heading text-sm font-semibold mb-1">{s.t}</h3>
                      <p className="text-muted-foreground text-xs leading-relaxed">{s.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Pour aller plus loin</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <Link to="/actualites/ransomware-pme-guide-prevention-reponse" className="card-glass rounded-xl p-5 hover:border-primary/40 transition-all">
                  <h3 className="font-heading text-sm font-semibold mb-2 text-primary">Ransomware PME : prévention et réponse</h3>
                  <p className="text-muted-foreground text-xs">L'EDR est l'arme #1 pour stopper un ransomware en cours de déploiement.</p>
                </Link>
                <Link to="/actualites/audit-active-directory-securite-pme" className="card-glass rounded-xl p-5 hover:border-primary/40 transition-all">
                  <h3 className="font-heading text-sm font-semibold mb-2 text-primary">Audit de sécurité Active Directory</h3>
                  <p className="text-muted-foreground text-xs">L'EDR doit s'intégrer à une stratégie globale de protection de l'identité.</p>
                </Link>
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="card-glass glow-border rounded-2xl p-8 md:p-12 text-center">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Quelle solution EDR/XDR pour vous ?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Bénéficiez d'un audit gratuit de 15 minutes pour évaluer votre niveau de protection actuel et identifier la solution EDR/XDR adaptée à votre contexte.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://calendly.com/many-cyberconform/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-semibold px-6 py-3 rounded-lg transition-colors">
                  <Calendar className="h-4 w-4" /> Réserver un audit gratuit
                </a>
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 border border-primary/40 text-primary hover:bg-primary/10 font-heading font-semibold px-6 py-3 rounded-lg transition-colors">
                  <Mail className="h-4 w-4" /> Nous contacter
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

export default EDRXDRProtection;

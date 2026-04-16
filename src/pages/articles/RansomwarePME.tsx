import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import NewsletterSection from "@/components/NewsletterSection";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ShieldAlert, Lock, AlertTriangle, RefreshCw, CheckCircle2, FileWarning, Database, Mail, Calendar } from "lucide-react";

const RansomwarePME = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Ransomware PME : guide complet de prévention et réponse",
    "author": { "@type": "Organization", "name": "CyberSecure" },
    "datePublished": "2026-04-10",
    "dateModified": "2026-04-10",
    "description": "Tout savoir sur les attaques par ransomware visant les PME : modes opératoires, prévention, plan de réponse, négociation et restauration."
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Ransomware PME : prévention, réponse et restauration"
        description="Guide complet sur les attaques par ransomware ciblant les PME : fonctionnement, 12 mesures de prévention, plan de réponse à incident, faut-il payer la rançon, restauration et coût moyen."
        canonical="/actualites/ransomware-pme-guide-prevention-reponse"
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
                <time className="text-muted-foreground text-xs" dateTime="2026-04-10">10 Avril 2026</time>
              </div>

              <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight mb-6">
                <span className="text-gradient">Ransomware PME</span> : guide complet de prévention et de réponse
              </h1>

              <p className="text-muted-foreground text-lg leading-relaxed mb-12">
                En 2025, <strong>une PME française est victime d'un ransomware toutes les 11 secondes dans le monde</strong> et la France figure parmi les 5 pays les plus ciblés (source : Cybermalveillance.gouv.fr). Le coût moyen d'une attaque pour une PME française dépasse désormais <strong>270 000 €</strong>, en incluant les pertes d'exploitation, la restauration et l'impact réputationnel. Ce guide vous donne toutes les clés pour prévenir, détecter et répondre efficacement à une attaque par rançongiciel.
              </p>
            </motion.div>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <ShieldAlert className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Qu'est-ce qu'un ransomware ?</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Un <strong>ransomware</strong> (ou rançongiciel) est un logiciel malveillant qui chiffre l'intégralité des données d'un système d'information et exige le paiement d'une rançon, généralement en cryptomonnaie, pour fournir la clé de déchiffrement. Depuis 2020, les attaquants pratiquent la <strong>double extorsion</strong> : ils exfiltrent les données avant de les chiffrer, et menacent de les publier en cas de non-paiement. Certains groupes vont jusqu'à la <strong>triple extorsion</strong> en contactant directement les clients de la victime.
              </p>
              <div className="card-glass rounded-xl p-6 mb-6 border-l-4 border-primary">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  <strong>Familles les plus actives en 2025 :</strong> LockBit 4.0, BlackCat/ALPHV, Play, Akira, 8Base, RansomHub. Ces groupes opèrent en mode <em>Ransomware-as-a-Service</em> (RaaS) avec des affiliés qui mènent les intrusions et reversent un pourcentage de la rançon.
                </p>
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <FileWarning className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Comment se déroule une attaque ?</h2>
              </div>
              <div className="space-y-4">
                {[
                  { n: "1", t: "Vecteur d'entrée initial", d: "Phishing ciblé (60 % des cas), exploitation d'une vulnérabilité non corrigée sur un VPN/RDP exposé, ou compromission d'identifiants achetés sur le dark web." },
                  { n: "2", t: "Persistance et reconnaissance", d: "L'attaquant installe des outils légitimes (Cobalt Strike, AnyDesk) pour rester discret et cartographie le réseau pendant 7 à 30 jours en moyenne." },
                  { n: "3", t: "Élévation de privilèges", d: "Compromission d'un compte administrateur Active Directory via Mimikatz, Kerberoasting ou exploitation de failles non patchées." },
                  { n: "4", t: "Exfiltration des données", d: "Vol de plusieurs centaines de Go de données sensibles (RH, financier, R&D, clients) via Rclone vers un cloud externe." },
                  { n: "5", t: "Suppression des sauvegardes", d: "Destruction des shadow copies, suppression ou chiffrement des sauvegardes accessibles depuis le réseau." },
                  { n: "6", t: "Déploiement du chiffrement", d: "Activation simultanée du chiffrement sur tous les serveurs et postes pendant la nuit ou le week-end pour maximiser l'impact." },
                ].map((s) => (
                  <div key={s.n} className="card-glass rounded-xl p-5 flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-heading font-bold">{s.n}</div>
                    <div>
                      <h3 className="font-heading text-base font-semibold mb-1">{s.t}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{s.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">12 mesures de prévention essentielles</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                La prévention reste de loin la stratégie la plus rentable. Selon l'ANSSI, <strong>80 % des attaques par ransomware auraient pu être évitées</strong> avec l'application de mesures d'hygiène informatique élémentaires.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Authentification multi-facteurs (MFA) sur tous les accès distants et comptes administrateurs",
                  "Sauvegardes 3-2-1 avec au moins une copie hors-ligne (air gap) et immuable",
                  "Patch management rigoureux : vulnérabilités critiques corrigées sous 72 heures",
                  "Solution EDR/XDR sur l'ensemble du parc avec supervision 24/7",
                  "Segmentation réseau pour limiter la propagation latérale",
                  "Désactivation du RDP exposé sur Internet ou protection par bastion",
                  "Filtrage anti-phishing avancé avec sandboxing des pièces jointes",
                  "Politique de mots de passe forts et coffre-fort d'identifiants",
                  "Principe du moindre privilège et désactivation des comptes inactifs",
                  "Sensibilisation continue des collaborateurs et simulations de phishing",
                  "Audit Active Directory annuel pour détecter les chemins d'attaque",
                  "Plan de réponse à incident testé et exercices de crise réguliers",
                ].map((m, i) => (
                  <div key={i} className="card-glass rounded-xl p-4 flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground text-sm leading-relaxed">{m}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Que faire en cas d'attaque ? Plan de réponse</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Les premières heures sont déterminantes. Une mauvaise décision (éteindre brutalement les serveurs, payer dans la précipitation, communiquer publiquement trop tôt) peut aggraver considérablement l'incident.
              </p>
              <div className="space-y-4">
                <div className="card-glass rounded-xl p-6">
                  <h3 className="font-heading text-base font-semibold mb-3 text-primary">Heure 0 à 2 : Containment</h3>
                  <ul className="text-muted-foreground text-sm leading-relaxed space-y-2">
                    <li>• Isoler les machines infectées <strong>du réseau</strong> sans les éteindre (préserver la mémoire vive)</li>
                    <li>• Couper les accès distants (VPN, RDP) et désactiver les comptes compromis</li>
                    <li>• Activer la cellule de crise et désigner un coordinateur unique</li>
                    <li>• Contacter immédiatement un prestataire de réponse à incident qualifié</li>
                  </ul>
                </div>
                <div className="card-glass rounded-xl p-6">
                  <h3 className="font-heading text-base font-semibold mb-3 text-primary">Heure 2 à 24 : Notification et investigation</h3>
                  <ul className="text-muted-foreground text-sm leading-relaxed space-y-2">
                    <li>• <strong>Déposer plainte</strong> au commissariat ou à la gendarmerie (obligatoire pour l'assurance)</li>
                    <li>• Notifier la <strong>CNIL sous 72 heures</strong> si des données personnelles sont concernées (RGPD)</li>
                    <li>• Prévenir l'<strong>ANSSI</strong> si vous êtes OIV/OSE/entité essentielle NIS2</li>
                    <li>• Lancer une investigation forensique pour identifier le vecteur d'entrée et l'étendue</li>
                    <li>• Préserver les preuves (logs, images disque, dumps mémoire)</li>
                  </ul>
                </div>
                <div className="card-glass rounded-xl p-6">
                  <h3 className="font-heading text-base font-semibold mb-3 text-primary">Jour 1 à 7 : Restauration</h3>
                  <ul className="text-muted-foreground text-sm leading-relaxed space-y-2">
                    <li>• Reconstruire un environnement sain avant toute restauration de données</li>
                    <li>• Vérifier l'intégrité des sauvegardes et l'absence de portes dérobées</li>
                    <li>• Réinitialiser <strong>tous les mots de passe</strong> et secrets compromis (krbtgt deux fois)</li>
                    <li>• Restaurer progressivement les services critiques en mode contrôlé</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <Database className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Faut-il payer la rançon ?</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                La position officielle de l'<strong>ANSSI, du FBI et d'Europol</strong> est claire : <strong>ne pas payer</strong>. Plusieurs raisons :
              </p>
              <ul className="text-muted-foreground text-sm leading-relaxed space-y-2 mb-6 ml-6">
                <li>• Aucune garantie de récupération : 30 % des victimes ayant payé n'ont jamais reçu de clé fonctionnelle</li>
                <li>• Encouragement direct du modèle économique criminel</li>
                <li>• Risque d'être marqué comme cible facile et frappé à nouveau (re-extorsion fréquente)</li>
                <li>• Risque pénal : payer un groupe sous sanctions internationales est interdit</li>
                <li>• Depuis 2023, en France, les assureurs ne peuvent indemniser le paiement qu'à condition d'un dépôt de plainte sous 72h</li>
              </ul>
              <div className="card-glass rounded-xl p-6 border-l-4 border-destructive">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  <strong>Investir 1 € en prévention coûte en moyenne 14 fois moins cher</strong> que gérer une attaque réussie. C'est tout l'enjeu d'un audit cybersécurité préventif.
                </p>
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <RefreshCw className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Articles complémentaires</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <Link to="/actualites/que-faire-apres-cyberattaque" className="card-glass rounded-xl p-5 hover:border-primary/40 transition-all">
                  <h3 className="font-heading text-sm font-semibold mb-2 text-primary">Que faire après une cyberattaque ?</h3>
                  <p className="text-muted-foreground text-xs">Guide de réponse à incident détaillé pour les PME.</p>
                </Link>
                <Link to="/actualites/pca-pra-cybersecurite-guide" className="card-glass rounded-xl p-5 hover:border-primary/40 transition-all">
                  <h3 className="font-heading text-sm font-semibold mb-2 text-primary">PCA et PRA en cybersécurité</h3>
                  <p className="text-muted-foreground text-xs">Construire un plan de continuité résilient face aux ransomware.</p>
                </Link>
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="card-glass glow-border rounded-2xl p-8 md:p-12 text-center">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Évaluez votre exposition au ransomware</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Profitez d'un audit cybersécurité gratuit de 15 minutes pour identifier vos principales vulnérabilités face aux ransomware et obtenir un plan d'action prioritaire.
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

export default RansomwarePME;

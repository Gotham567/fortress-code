import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import NewsletterSection from "@/components/NewsletterSection";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckSquare, Shield, AlertTriangle, Users, Cloud, Server } from "lucide-react";

const ChecklistCybersecurite = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Checklist cybersécurité PME : les 42 points essentiels inspirés de l'ANSSI",
    "author": { "@type": "Organization", "name": "CyberSecure" },
    "datePublished": "2026-06-28",
    "dateModified": "2026-06-28"
  };

  const sections = [
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      titre: "Gouvernance et organisation",
      items: [
        "Désigner un responsable cybersécurité (RSSI interne ou externalisé)",
        "Rédiger et valider une politique de sécurité des systèmes d'information (PSSI)",
        "Tenir un inventaire à jour de tous les actifs numériques (postes, serveurs, applications, données)",
        "Former les dirigeants aux enjeux et responsabilités cyber (obligatoire NIS2)",
        "Réaliser un audit cybersécurité ou un test d'intrusion au moins une fois par an",
        "Documenter les procédures de gestion des incidents",
        "Souscrire une cyber-assurance adaptée à votre activité",
      ]
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      titre: "Gestion des accès et des identités",
      items: [
        "Activer l'authentification multi-facteurs (MFA) sur tous les comptes administrateurs",
        "Déployer le MFA sur la messagerie professionnelle (Microsoft 365, Google Workspace)",
        "Activer le MFA sur le VPN et tous les accès distants",
        "Appliquer le principe du moindre privilège : chaque utilisateur n'a accès qu'au strict nécessaire",
        "Supprimer immédiatement les comptes des collaborateurs qui quittent l'entreprise",
        "Bannir les mots de passe partagés : utiliser un gestionnaire de mots de passe d'entreprise",
        "Revoir régulièrement (au moins une fois par an) les droits d'accès de tous les utilisateurs",
        "Désactiver les comptes de service et comptes génériques inutilisés",
      ]
    },
    {
      icon: <Server className="h-6 w-6 text-primary" />,
      titre: "Protection des postes et serveurs",
      items: [
        "Déployer un EDR (Endpoint Detection and Response) sur tous les postes et serveurs",
        "Mettre en place une gestion des correctifs automatisée : délai max 72h pour les correctifs critiques",
        "Désactiver les fonctionnalités inutilisées (bureau à distance RDP si non nécessaire, macros Office, etc.)",
        "Chiffrer les disques durs des postes nomades (BitLocker, FileVault)",
        "Segmenter le réseau : séparer au minimum le réseau serveur, le réseau utilisateur et le Wi-Fi invité",
        "Activer les logs Windows Event sur tous les postes et serveurs",
        "Bloquer l'exécution automatique des clés USB non autorisées",
        "Vérifier la configuration des pare-feux et ne laisser ouverts que les ports nécessaires",
      ]
    },
    {
      icon: <Cloud className="h-6 w-6 text-primary" />,
      titre: "Messagerie et protection web",
      items: [
        "Activer DMARC, DKIM et SPF sur votre domaine de messagerie",
        "Déployer un filtre anti-spam et anti-phishing avancé (Defender for Office 365, Proofpoint, Mimecast)",
        "Activer la protection contre l'usurpation d'identité (anti-spoofing) sur votre messagerie",
        "Filtrer le DNS et la navigation web pour bloquer les domaines malveillants",
        "Former les utilisateurs à reconnaître les emails de phishing (simulation annuelle)",
        "Activer le chiffrement des emails pour les communications sensibles",
      ]
    },
    {
      icon: <CheckSquare className="h-6 w-6 text-primary" />,
      titre: "Sauvegarde et continuité",
      items: [
        "Appliquer la règle 3-2-1 : 3 copies, 2 supports différents, 1 hors-site",
        "Utiliser des sauvegardes immuables (WORM) ou air-gappées résistantes aux ransomwares",
        "Tester la restauration des sauvegardes au moins une fois par trimestre",
        "Documenter les RTO (temps de reprise) et RPO (perte de données maximale) pour chaque système critique",
        "Rédiger un Plan de Reprise d'Activité (PRA) et le tester au moins une fois par an",
        "Conserver les sauvegardes pendant au moins 3 mois (délai minimum recommandé)",
      ]
    },
    {
      icon: <AlertTriangle className="h-6 w-6 text-primary" />,
      titre: "Cloud et applications SaaS",
      items: [
        "Inventorier tous les services cloud et SaaS utilisés (y compris le Shadow IT)",
        "Vérifier les paramètres de partage des fichiers cloud (Google Drive, SharePoint) : rien de public par défaut",
        "Activer la journalisation des accès dans tous les services cloud critiques",
        "Vérifier les clauses RGPD des contrats SaaS : où sont hébergées vos données ?",
        "Désactiver les intégrations OAuth non nécessaires sur vos comptes Google et Microsoft",
        "Utiliser un CASB ou équivalent si vous avez plus de 50 utilisateurs cloud",
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Checklist cybersécurité PME : 42 points essentiels (inspirée ANSSI)"
        description="Checklist cybersécurité complète pour les PME : gouvernance, gestion des accès, protection des postes, messagerie, sauvegarde et cloud. 42 actions prioritaires inspirées des guides ANSSI et adaptées aux PME françaises."
        canonical="/actualites/checklist-cybersecurite-pme-anssi"
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
                <span className="text-primary text-xs font-heading font-semibold uppercase tracking-wider">Contenu éducatif</span>
                <time className="text-muted-foreground text-xs" dateTime="2026-06-28">28 Juin 2026</time>
              </div>

              <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight mb-6">
                Checklist cybersécurité PME : les <span className="text-gradient">42 points essentiels</span> (inspirée ANSSI)
              </h1>

              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                L'ANSSI publie plusieurs guides de bonnes pratiques cybersécurité, mais leur lecture exhaustive prend du temps. Cette checklist opérationnelle synthétise les 42 mesures prioritaires applicables par toute PME, classées par thème, avec un niveau de priorité clairement indiqué. Imprimez-la, cochez ce qui est fait, planifiez le reste.
              </p>

              <div className="card-glass rounded-xl p-5 border border-primary/30 mb-10">
                <p className="text-muted-foreground text-sm">
                  <strong className="text-primary">Méthodologie :</strong> Cette checklist s'inspire du Guide ANSSI "La cybersécurité pour les TPE/PME en 13 questions", du référentiel CIS Controls v8 (niveau 1) et des obligations NIS2. Elle ne remplace pas un audit professionnel mais permet d'identifier rapidement vos lacunes les plus critiques.
                </p>
              </div>

              {sections.map((section, si) => (
                <section key={si} className="mb-10">
                  <div className="flex items-center gap-3 mb-4">
                    {section.icon}
                    <h2 className="font-heading text-xl md:text-2xl font-bold">{section.titre}</h2>
                  </div>
                  <div className="space-y-2">
                    {section.items.map((item, ii) => (
                      <div key={ii} className="card-glass rounded-lg px-4 py-3 flex items-start gap-3">
                        <CheckSquare className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span className="text-muted-foreground text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </section>
              ))}

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl font-bold">Comment utiliser cette checklist ?</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Pour chaque point, attribuez un statut :
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { status: "✅ Fait", desc: "La mesure est implémentée et opérationnelle. Planifiez une vérification périodique.", color: "border-green-500/30 bg-green-500/5" },
                    { status: "⚠️ Partiel", desc: "La mesure est partiellement en place. Identifiez ce qui manque et planifiez la complétion.", color: "border-yellow-500/30 bg-yellow-500/5" },
                    { status: "❌ À faire", desc: "La mesure n'est pas en place. Priorisez selon la criticité et planifiez dans les 3 à 6 mois.", color: "border-red-500/30 bg-red-500/5" },
                  ].map((item, i) => (
                    <div key={i} className={`card-glass rounded-xl p-4 border ${item.color}`}>
                      <p className="font-heading font-semibold mb-2">{item.status}</p>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Si vous avez plus de 15 points "❌ À faire", votre exposition au risque est élevée. Commencez par les mesures de gouvernance et de gestion des accès — elles sont les plus impactantes à court terme.
                </p>
              </section>

              <section className="card-glass rounded-xl p-8 text-center">
                <h2 className="font-heading text-2xl font-bold mb-4">Faites auditer votre checklist par nos experts</h2>
                <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
                  Nos experts évaluent concrètement chaque point de votre checklist dans votre environnement réel et vous proposent un plan de remédiation priorisé. Audit de maturité en 1 journée.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-heading font-semibold hover:bg-primary/90 transition-colors">
                  Obtenir un audit de maturité
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

export default ChecklistCybersecurite;

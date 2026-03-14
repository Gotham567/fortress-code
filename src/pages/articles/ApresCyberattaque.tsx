import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import NewsletterSection from "@/components/NewsletterSection";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, AlertOctagon, Phone, Shield, FileText, RefreshCw, Scale } from "lucide-react";

const ApresCyberattaque = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Que faire après une cyberattaque ?",
    "author": { "@type": "Organization", "name": "CyberSecure" },
    "datePublished": "2026-02-10",
    "dateModified": "2026-03-14"
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Que faire après une cyberattaque ? Guide de réponse"
        description="Guide complet de réponse à une cyberattaque pour les PME : premières actions, investigation, notification CNIL, restauration, communication de crise et retour d'expérience."
        canonical="/actualites/que-faire-apres-cyberattaque"
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
                <time className="text-muted-foreground text-xs" dateTime="2026-02-10">10 Fév 2026</time>
              </div>

              <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight mb-6">
                Que faire après une <span className="text-gradient">cyberattaque</span> ?
              </h1>

              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Votre entreprise vient d'être victime d'une cyberattaque ? Les premières heures sont cruciales. Les décisions prises dans l'urgence détermineront l'ampleur des dégâts et la vitesse de rétablissement. Ce guide vous donne les étapes à suivre, dans l'ordre, pour gérer la crise efficacement.
              </p>

              <div className="card-glass rounded-xl p-6 mb-12 border-l-4 border-l-destructive">
                <p className="text-foreground font-heading font-semibold mb-2">⚠️ Urgence immédiate</p>
                <p className="text-muted-foreground">Si vous êtes en cours d'attaque, appelez immédiatement votre prestataire de sécurité ou le numéro d'urgence cyber de l'ANSSI. Chaque minute compte pour limiter la propagation.</p>
              </div>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <AlertOctagon className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Étape 1 : Contenir l'attaque (0-4 heures)</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  La priorité absolue est d'empêcher l'attaque de se propager davantage. Mais attention : contenir ne signifie pas tout éteindre aveuglément. Certaines actions précipitées peuvent détruire des preuves essentielles à l'investigation.
                </p>
                <h3 className="font-heading text-xl font-semibold mt-6 mb-3">Ce qu'il faut faire :</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                  <li><strong>Isoler les systèmes compromis</strong> en les déconnectant du réseau (débrancher le câble réseau, désactiver le Wi-Fi) SANS les éteindre. L'extinction supprime la mémoire vive qui contient des preuves précieuses pour l'investigation.</li>
                  <li><strong>Changer immédiatement</strong> les mots de passe des comptes administrateur et des comptes potentiellement compromis, en priorité ceux qui ont des privilèges élevés (Active Directory, accès cloud, VPN).</li>
                  <li><strong>Bloquer les accès distants</strong> (VPN, RDP, accès prestataires) jusqu'à ce que l'étendue de la compromission soit déterminée.</li>
                  <li><strong>Préserver les logs</strong> et toutes les traces de l'attaque (emails suspects, URLs, fichiers suspects). Ne supprimez rien, même si cela semble anodin.</li>
                  <li><strong>Documenter</strong> toutes les actions prises et les constats faits, avec horodatage. Ce journal sera essentiel pour l'investigation et les démarches juridiques.</li>
                </ul>
                <h3 className="font-heading text-xl font-semibold mt-6 mb-3">Ce qu'il ne faut surtout PAS faire :</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Éteindre ou réinstaller les machines compromises (destruction de preuves)</li>
                  <li>Communiquer via les canaux internes potentiellement compromis (email d'entreprise)</li>
                  <li>Payer une rançon sans avoir consulté un expert (pas de garantie de récupération)</li>
                  <li>Tenter de "réparer" vous-même si vous n'avez pas les compétences</li>
                  <li>Minimiser l'incident ou le cacher à la direction</li>
                </ul>
              </section>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Étape 2 : Mobiliser les ressources (4-24 heures)</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Une fois l'attaque contenue, il faut mobiliser rapidement les compétences nécessaires pour gérer la crise. Si vous ne disposez pas d'une équipe de sécurité interne (ce qui est le cas de la plupart des PME), faites appel à des experts externes.
                </p>
                <div className="space-y-4">
                  <div className="card-glass rounded-xl p-6">
                    <h3 className="font-heading text-lg font-semibold mb-2">Votre prestataire de sécurité / CERT</h3>
                    <p className="text-muted-foreground leading-relaxed">Un prestataire disposant d'un CERT (Computer Emergency Response Team) pourra intervenir rapidement pour analyser l'attaque, déterminer son étendue et guider la remédiation. Si vous n'avez pas de prestataire identifié, l'ANSSI maintient une liste de prestataires qualifiés PRIS (Prestataire de Réponse aux Incidents de Sécurité).</p>
                  </div>
                  <div className="card-glass rounded-xl p-6">
                    <h3 className="font-heading text-lg font-semibold mb-2">Votre assureur cyber</h3>
                    <p className="text-muted-foreground leading-relaxed">Si vous disposez d'une assurance cyber, notifiez votre assureur dans les plus brefs délais. La plupart des contrats imposent un délai de notification (souvent 72 heures). L'assureur peut également mettre à disposition des experts en gestion de crise, des juristes et des communicants.</p>
                  </div>
                  <div className="card-glass rounded-xl p-6">
                    <h3 className="font-heading text-lg font-semibold mb-2">Un avocat spécialisé</h3>
                    <p className="text-muted-foreground leading-relaxed">En cas de violation de données personnelles, les obligations légales sont nombreuses et les délais serrés. Un avocat spécialisé en droit du numérique vous accompagnera dans les démarches auprès de la CNIL, les notifications aux personnes concernées et la gestion des éventuelles responsabilités.</p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <Scale className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Étape 3 : Respecter les obligations légales (24-72 heures)</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  En tant qu'entreprise, vous avez des obligations légales en cas de cyberattaque, particulièrement si des données personnelles sont concernées.
                </p>
                <div className="space-y-4">
                  <div className="card-glass rounded-xl p-6">
                    <h3 className="font-heading text-lg font-semibold mb-2">Notification à la CNIL (72 heures)</h3>
                    <p className="text-muted-foreground leading-relaxed">Si des données personnelles ont été compromises (accès, vol, destruction, modification non autorisée), vous devez notifier la CNIL dans les 72 heures suivant la découverte de la violation (article 33 du RGPD). La notification doit décrire la nature de la violation, les catégories et le nombre de personnes concernées, les conséquences probables et les mesures prises ou envisagées.</p>
                  </div>
                  <div className="card-glass rounded-xl p-6">
                    <h3 className="font-heading text-lg font-semibold mb-2">Notification aux personnes concernées</h3>
                    <p className="text-muted-foreground leading-relaxed">Si la violation est susceptible d'engendrer un risque élevé pour les droits et libertés des personnes (article 34 du RGPD), vous devez également informer directement les personnes concernées. Cette communication doit être claire, précise et indiquer les mesures de protection que les personnes peuvent prendre (changement de mot de passe, surveillance des comptes).</p>
                  </div>
                  <div className="card-glass rounded-xl p-6">
                    <h3 className="font-heading text-lg font-semibold mb-2">Dépôt de plainte</h3>
                    <p className="text-muted-foreground leading-relaxed">Déposez plainte auprès de la police ou de la gendarmerie (brigade de lutte contre la cybercriminalité). Le dépôt de plainte est essentiel pour activer votre assurance cyber, pour les démarches juridiques ultérieures et pour contribuer à la lutte contre la cybercriminalité. Vous pouvez également signaler l'incident sur la plateforme cybermalveillance.gouv.fr.</p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Étape 4 : Investiguer (jours 2-14)</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  L'investigation forensique (ou analyse post-incident) vise à comprendre précisément ce qui s'est passé : comment l'attaquant est entré, quels systèmes ont été compromis, quelles données ont été accédées ou exfiltrées, et si l'attaquant a maintenu des accès persistants.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Cette phase est réalisée par des experts en forensique numérique qui analysent les logs, les images disque, la mémoire vive et les traces réseau. Les résultats de l'investigation sont essentiels pour : s'assurer que l'attaquant n'a plus d'accès, identifier l'étendue exacte de la compromission, alimenter le dossier juridique, et tirer les leçons pour éviter une récurrence.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Pour les PME, le coût d'une investigation forensique se situe généralement entre 5 000€ et 30 000€ selon la complexité. C'est un investissement qui peut sembler élevé en pleine crise, mais qui est indispensable pour garantir un retour à la normale sécurisé et pour alimenter les procédures d'assurance et juridiques.
                </p>
              </section>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <RefreshCw className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Étape 5 : Restaurer et renforcer (semaines 2-8)</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Une fois l'investigation terminée et l'étendue de la compromission déterminée, vient la phase de restauration. L'objectif n'est pas simplement de revenir à l'état initial (qui était vulnérable) mais de reconstruire en intégrant les enseignements de l'incident.
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                  <li><strong>Restaurer les systèmes</strong> à partir de sauvegardes vérifiées saines (antérieures à la compromission). Réinstaller complètement les systèmes compromis plutôt que de tenter de les "nettoyer".</li>
                  <li><strong>Corriger les vulnérabilités</strong> exploitées par l'attaquant avant de remettre les systèmes en production. Appliquer les recommandations issues de l'investigation.</li>
                  <li><strong>Renforcer les défenses</strong> : déployer la MFA partout, durcir les configurations, segmenter le réseau, mettre en place une supervision de sécurité (SOC/SIEM).</li>
                  <li><strong>Changer tous les mots de passe</strong> et secrets (clés API, certificats) de l'environnement compromis.</li>
                  <li><strong>Tester la restauration</strong> avant de remettre en production : un pentest de validation peut être utile pour vérifier que les correctifs sont efficaces.</li>
                </ul>
              </section>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Étape 6 : Retour d'expérience et amélioration continue</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Une fois la crise passée, il est essentiel de mener un retour d'expérience (RETEX) approfondi pour tirer les leçons de l'incident. Ce RETEX doit impliquer toutes les parties prenantes (direction, IT, métiers, prestataires) et couvrir tant les aspects techniques qu'organisationnels.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Questions à se poser lors du RETEX : L'attaque aurait-elle pu être évitée ? Comment a-t-elle été détectée ? Le plan de réponse à incident a-t-il fonctionné ? Quelles actions de remédiation ont été les plus efficaces ? Quelles lacunes sont apparues dans nos processus ? Quels investissements sont nécessaires pour éviter une récurrence ?
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Le RETEX doit déboucher sur un plan d'action concret et budgété pour renforcer la posture de sécurité. Paradoxalement, une cyberattaque bien gérée peut devenir un levier de transformation : elle crée une prise de conscience au niveau de la direction et débloque souvent les budgets nécessaires pour une vraie démarche de cybersécurité.
                </p>
              </section>

              <section className="card-glass rounded-xl p-8 text-center">
                <h2 className="font-heading text-2xl font-bold mb-4">Urgence cyberattaque ? Notre CERT intervient 24/7</h2>
                <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
                  Notre équipe CERT est disponible 24h/24, 7j/7 pour vous accompagner en cas de cyberattaque : containment, investigation forensique, restauration et retour d'expérience.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-heading font-semibold hover:bg-primary/90 transition-colors">
                  Contacter le CERT
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

export default ApresCyberattaque;

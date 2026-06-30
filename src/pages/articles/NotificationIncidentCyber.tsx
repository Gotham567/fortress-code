import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import NewsletterSection from "@/components/NewsletterSection";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Bell, Clock, AlertTriangle, FileText, Shield } from "lucide-react";

const NotificationIncidentCyber = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Signalement incident cybersécurité ANSSI : obligations et délais pour les entreprises",
      "url": "https://securecyber.fr/actualites/signalement-incident-cybersecurite-anssi-obligation",
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://securecyber.fr/actualites/signalement-incident-cybersecurite-anssi-obligation" },
      "author": { "@type": "Organization", "name": "CyberSecure", "url": "https://securecyber.fr" },
      "publisher": {
        "@type": "Organization",
        "name": "CyberSecure",
        "url": "https://securecyber.fr",
        "logo": { "@type": "ImageObject", "url": "https://securecyber.fr/favicon.png", "width": 512, "height": 512 }
      },
      "datePublished": "2026-06-28",
      "dateModified": "2026-06-30",
      "image": {
        "@type": "ImageObject",
        "url": "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/5393a1ce-90f4-4e06-84ab-2dee3e5dd962/id-preview-bc576449--9bd8c65b-b20f-4747-8f8a-63d66528046c.lovable.app-1773318218871.png",
        "width": 1200,
        "height": 630
      },
      "inLanguage": "fr-FR",
      "isPartOf": { "@type": "Blog", "name": "Blog CyberSecure", "url": "https://securecyber.fr/actualites" }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://securecyber.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Actualités", "item": "https://securecyber.fr/actualites" },
        { "@type": "ListItem", "position": 3, "name": "Signalement incident cybersécurité ANSSI : obligations et délais pour les entreprises", "item": "https://securecyber.fr/actualites/signalement-incident-cybersecurite-anssi-obligation" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Signalement incident cybersécurité ANSSI : obligations et délais CNIL"
        description="Qui doit notifier un incident cyber à l'ANSSI et à la CNIL ? Délais légaux, procédure de notification, sanctions en cas de non-déclaration. Guide complet NIS2 et RGPD pour les PME et ETI françaises."
        canonical="/actualites/signalement-incident-cybersecurite-anssi-obligation"
        ogType="article"
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
                <span className="text-primary text-xs font-heading font-semibold uppercase tracking-wider">Incidents & Urgence</span>
                <time className="text-muted-foreground text-xs" dateTime="2026-06-28">28 Juin 2026</time>
              </div>

              <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight mb-6">
                Signalement incident cybersécurité : <span className="text-gradient">obligations ANSSI et CNIL</span> pour les entreprises
              </h1>

              <p className="text-muted-foreground text-lg leading-relaxed mb-12">
                Vous avez subi une cyberattaque ou détecté une violation de données. Devez-vous le déclarer ? À qui ? Dans quel délai ? Les obligations légales de notification sont nombreuses, mal connues et les sanctions pour non-déclaration sont lourdes. Ce guide fait le point sur toutes vos obligations : ANSSI (NIS2), CNIL (RGPD) et secteurs spécifiques.
              </p>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <Bell className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Les deux obligations de notification distinctes</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  En France, deux régimes de notification coexistent et peuvent s'appliquer simultanément au même incident. Il est crucial de les distinguer car les destinataires, les délais et les contenus diffèrent :
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="card-glass rounded-xl p-6 border border-primary/30">
                    <h3 className="font-heading font-semibold text-primary mb-3">Notification ANSSI (NIS2)</h3>
                    <ul className="text-muted-foreground text-sm space-y-2">
                      <li>• <strong>Qui :</strong> Entités essentielles et importantes NIS2</li>
                      <li>• <strong>Quoi :</strong> Tout incident significatif (disponibilité, intégrité, confidentialité)</li>
                      <li>• <strong>Quand :</strong> 24h → 72h → 1 mois</li>
                      <li>• <strong>Où :</strong> Portail de notification ANSSI</li>
                      <li>• <strong>Sanction :</strong> Jusqu'à 10 M€ ou 2 % du CA</li>
                    </ul>
                  </div>
                  <div className="card-glass rounded-xl p-6 border border-orange-500/30">
                    <h3 className="font-heading font-semibold text-orange-400 mb-3">Notification CNIL (RGPD)</h3>
                    <ul className="text-muted-foreground text-sm space-y-2">
                      <li>• <strong>Qui :</strong> Tout responsable de traitement</li>
                      <li>• <strong>Quoi :</strong> Violation de données personnelles</li>
                      <li>• <strong>Quand :</strong> 72h après prise de connaissance</li>
                      <li>• <strong>Où :</strong> Portail notifications.cnil.fr</li>
                      <li>• <strong>Sanction :</strong> Jusqu'à 20 M€ ou 4 % du CA</li>
                    </ul>
                  </div>
                </div>
                <div className="card-glass rounded-xl p-5 border border-yellow-500/30 bg-yellow-500/5">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-yellow-400 mt-0.5 shrink-0" />
                    <p className="text-muted-foreground text-sm">Un ransomware qui chiffre des données personnelles (dossiers clients, RH) déclenche <strong>simultanément</strong> l'obligation ANSSI (si vous êtes entité NIS2) ET l'obligation CNIL. Les deux notifications sont indépendantes.</p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Les délais NIS2 : le calendrier en 3 étapes</h2>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      delai: "Dans les 24h",
                      titre: "Alerte préliminaire",
                      icon: "⚡",
                      color: "text-red-400",
                      contenu: [
                        "Signaler que vous avez connaissance d'un incident significatif",
                        "Indiquer s'il est potentiellement malveillant",
                        "Préciser si l'incident pourrait avoir un impact transfrontalier",
                        "Contenu minimal — pas besoin d'investigation complète à ce stade",
                        "Via le portail de notification ANSSI ou par téléphone pour les urgences"
                      ]
                    },
                    {
                      delai: "Dans les 72h",
                      titre: "Notification d'incident",
                      icon: "📋",
                      color: "text-orange-400",
                      contenu: [
                        "Mise à jour de l'alerte préliminaire avec évaluation initiale",
                        "Nature et gravité de l'incident",
                        "Indicateurs de compromission (si disponibles)",
                        "Mesures d'atténuation appliquées ou prévues",
                        "Estimation de l'impact sur les services"
                      ]
                    },
                    {
                      delai: "Dans le mois",
                      titre: "Rapport final",
                      icon: "📊",
                      color: "text-green-400",
                      contenu: [
                        "Description détaillée de l'incident",
                        "Cause racine identifiée",
                        "Mesures correctives mises en place",
                        "Impact réel sur les services et les utilisateurs",
                        "Leçons apprises et améliorations prévues"
                      ]
                    }
                  ].map((item, i) => (
                    <div key={i} className="card-glass rounded-xl p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-2xl">{item.icon}</span>
                        <div>
                          <span className={`font-heading font-bold ${item.color}`}>{item.delai}</span>
                          <h3 className="font-heading font-semibold">{item.titre}</h3>
                        </div>
                      </div>
                      <ul className="space-y-1">
                        {item.contenu.map((c, j) => (
                          <li key={j} className="text-muted-foreground text-sm flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Délai CNIL : les 72h et la notification aux personnes concernées</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Le RGPD (article 33) impose de notifier la CNIL dans les <strong>72 heures après avoir pris connaissance</strong> d'une violation de données personnelles. Ce délai court non pas à partir de l'incident, mais à partir du moment où votre entreprise en a connaissance. Si vous n'êtes pas sûr à 72h, notifiez quand même en précisant que l'investigation est en cours.
                </p>

                <h3 className="font-heading text-xl font-semibold mb-3 mt-6">Quand faut-il notifier les personnes concernées ?</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  L'article 34 du RGPD impose une notification directe aux personnes concernées (clients, salariés, etc.) <strong>sans délai</strong> lorsque la violation est susceptible d'engendrer un risque <em>élevé</em> pour leurs droits et libertés. Exemples :
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                  <li>Vol de données financières (RIB, numéro de carte)</li>
                  <li>Exposition de données de santé ou données biométriques</li>
                  <li>Fuite de mots de passe non chiffrés</li>
                  <li>Vol d'identifiants pouvant mener à une usurpation d'identité</li>
                  <li>Données de mineurs compromises</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  Si la CNIL estime que vous auriez dû notifier les personnes concernées et que vous ne l'avez pas fait, elle peut l'ordonner et infliger une sanction supplémentaire.
                </p>
              </section>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Préparer sa notification avant l'incident</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  En situation de crise, le stress et la précipitation mènent aux erreurs. Préparez votre procédure de notification à froid, avant tout incident :
                </p>
                <div className="space-y-3">
                  {[
                    { action: "Créer un compte sur notifications.cnil.fr", detail: "La procédure d'inscription prend du temps. Faites-le maintenant, pas en pleine crise." },
                    { action: "Désigner un DPO ou responsable notification CNIL", detail: "Qui appelle la CNIL en cas d'incident ? Cette personne doit être connue de tous et joignable 24/7." },
                    { action: "Préparer un modèle de notification ANSSI", detail: "Rédigez à l'avance un template avec les champs requis. En crise, vous n'aurez qu'à compléter les données de l'incident." },
                    { action: "Documenter votre registre des traitements", detail: "La CNIL exige que vous identifiiez rapidement les données personnelles potentiellement touchées. Sans registre à jour, c'est impossible en 72h." },
                    { action: "Rédiger une procédure de réponse à incident (IRP)", detail: "Qui fait quoi, dans quel ordre, avec quels outils. La notification aux autorités est une étape de cette procédure." },
                  ].map((item, i) => (
                    <div key={i} className="card-glass rounded-xl p-5 flex items-start gap-3">
                      <Shield className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <h4 className="font-heading font-semibold text-sm mb-1">{item.action}</h4>
                        <p className="text-muted-foreground text-sm">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Sanctions pour non-notification : les risques réels</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  La CNIL n'hésite plus à sanctionner les entreprises qui n'ont pas notifié une violation dans les délais. Quelques exemples récents :
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                  <li>Hôtel (2022) : <strong>600 000 €</strong> pour notification tardive d'une violation affectant 1,5 million de clients</li>
                  <li>Prestataire RH (2023) : <strong>200 000 €</strong> pour absence de notification d'un incident touchant des données de salariés</li>
                  <li>E-commerçant (2024) : <strong>525 000 €</strong> incluant un manquement à l'obligation de notification</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  Sous NIS2, les sanctions pour non-notification s'ajoutent à celles pour les manquements aux mesures de sécurité. Une entreprise qui subit un incident et ne le signale pas s'expose à un double risque : l'amende pour les lacunes de sécurité ayant permis l'incident, plus l'amende pour la non-notification.
                </p>
              </section>

              <section className="card-glass rounded-xl p-8 text-center">
                <h2 className="font-heading text-2xl font-bold mb-4">Préparez votre procédure de notification maintenant</h2>
                <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
                  Nos experts vous aident à rédiger votre procédure de gestion et notification d'incidents, conforme NIS2 et RGPD, avant qu'une crise ne survienne.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-heading font-semibold hover:bg-primary/90 transition-colors">
                  Préparer ma procédure de notification
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

export default NotificationIncidentCyber;

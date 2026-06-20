import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import NewsletterSection from "@/components/NewsletterSection";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Users, BarChart2, ShieldCheck, Calendar } from "lucide-react";

const SimulationPhishing = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Simulation de phishing en entreprise : méthode et bonnes pratiques",
    "author": { "@type": "Organization", "name": "CyberSecure" },
    "datePublished": "2026-06-12",
    "dateModified": "2026-06-12",
    "description": "Comment organiser des campagnes de phishing simulé pour sensibiliser vos collaborateurs : plateformes, scénarios, métriques clés et programme de formation associé."
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Simulation de phishing en entreprise : guide et méthode"
        description="Organiser des campagnes de phishing simulé efficaces : choisir la plateforme (GoPhish, KnowBe4, Proofpoint), créer des scénarios réalistes, mesurer le taux de clic et former les collaborateurs."
        canonical="/actualites/simulation-phishing-campagne-sensibilisation"
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
                <span className="text-primary text-xs font-heading font-semibold uppercase tracking-wider">Sensibilisation</span>
                <time className="text-muted-foreground text-xs" dateTime="2026-06-12">12 Juin 2026</time>
              </div>
              <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight mb-6">
                <span className="text-gradient">Simulation de phishing</span> : méthode et bonnes pratiques pour PME
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-12">
                Le phishing est le vecteur d'attaque numéro un : il est impliqué dans plus de 90 % des cyberattaques réussies. La simulation de phishing — envoyer de faux emails malveillants à vos collaborateurs pour mesurer et améliorer leur vigilance — est l'outil de sensibilisation le plus efficace disponible. Voici comment l'organiser correctement.
              </p>
            </motion.div>

            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold">Pourquoi simuler des attaques phishing ?</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Les formations traditionnelles (PowerPoint, e-learning) ont un impact limité sur le comportement réel. Les simulations phishing créent une expérience concrète : le collaborateur qui clique sur un lien suspect reçoit immédiatement une page d'avertissement pédagogique, ancrant l'apprentissage dans l'expérience vécue. Les études montrent que les organisations pratiquant des simulations régulières réduisent leur taux de clic de <strong>30 % initial à moins de 5 % en 12 mois</strong>.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                La simulation mesure également votre exposition réelle : combien de collaborateurs cliquent sur un lien ? Combien saisissent leurs identifiants ? Combien signalent l'email ? Ces métriques permettent d'identifier les populations à risque, de cibler la formation et de démontrer l'amélioration au fil du temps.
              </p>
            </section>

            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold">Choisir sa plateforme de simulation</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">GoPhish</strong> est une solution open source gratuite, idéale pour débuter avec un budget limité. Elle permet de créer des campagnes personnalisées, de suivre les clics et soumissions de formulaires, et de générer des rapports. Nécessite une configuration technique.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">KnowBe4</strong> est le leader du marché avec une bibliothèque de 15 000+ templates de phishing et une plateforme de formation intégrée. Tarif : 15 à 30 € par utilisateur et par an. Idéal pour les organisations cherchant une solution complète clé en main.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">Proofpoint Security Awareness</strong> combine simulation phishing et formation contextualisée. Forte intégration avec les outils Microsoft 365 et Google Workspace.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">Terranova Security</strong> est un acteur canadien avec une interface en français, populaire en France et au Canada. Bon rapport qualité-prix pour les PME francophones.
              </p>
            </section>

            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold">Concevoir des scénarios réalistes et progressifs</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                La difficulté des scénarios doit être progressive. Commencez par des templates "faciles" (emails avec des fautes d'orthographe évidentes, noms de domaine suspects) pour établir une baseline. Progressez vers des scénarios "moyens" (email imitant votre DSI, notification RH) puis "difficiles" (spear phishing ciblé avec nom du collaborateur, référence à un projet réel).
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Les thèmes les plus efficaces (taux de clic élevés) : notification de réinitialisation de mot de passe (Microsoft 365 / Google), colis en attente de livraison (DHL, Colissimo), notification de voicemail ou de fax, invitation à une réunion Teams urgente, notification de document partagé. Adaptez les templates à votre contexte : utilisez le nom de domaine de votre entreprise, les logos de vos outils internes.
              </p>
            </section>

            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <BarChart2 className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold">Métriques clés et exploitation des résultats</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Les indicateurs à suivre : <strong>taux d'ouverture</strong> (% d'emails ouverts), <strong>taux de clic</strong> (% de liens cliqués — l'indicateur principal), <strong>taux de soumission</strong> (% ayant saisi leurs identifiants sur une fausse page), <strong>taux de signalement</strong> (% ayant signalé l'email au SOC ou au IT). Le taux de signalement est un indicateur positif souvent négligé : un collaborateur qui signale un phishing contribue activement à la défense.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Segmentez les résultats par département, niveau hiérarchique et ancienneté pour identifier les populations à risque. Les profils les plus vulnérables sont souvent les nouveaux arrivants, les collaborateurs non-techniques et les équipes travaillant sous forte pression temporelle (comptabilité lors des clôtures, RH lors des campagnes de recrutement).
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Éthique et communication autour des simulations</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                La transparence sur l'existence d'un programme de simulation (sans révéler les dates) est recommandée : informez les collaborateurs que des simulations ont lieu régulièrement, sans préciser quand. Cette approche est plus éthique que la surprise totale et maintient quand même l'efficacité pédagogique. Associez le CSE à la mise en place du programme si votre taille le justifie.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Ne stigmatisez jamais publiquement les collaborateurs qui ont cliqué. L'objectif est pédagogique, pas punitif. La page d'avertissement affichée après un clic doit être bienveillante et éducative. Les organisations qui utilisent les simulations comme outils de sanction constatent une baisse de confiance et une réticence à signaler les vraies attaques — l'effet inverse de l'objectif recherché.
              </p>
            </section>

            <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 text-primary" />
              <time dateTime="2026-06-12">12 Juin 2026</time>
              <span>·</span>
              <span>12 min de lecture</span>
            </div>
          </div>
        </article>
        <NewsletterSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default SimulationPhishing;

import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import NewsletterSection from "@/components/NewsletterSection";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Users, Target, Brain, ShieldAlert, BarChart3, CheckCircle2, GraduationCap } from "lucide-react";

const FormationCybersecurite = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Formation cybersécurité en entreprise : sensibiliser vos collaborateurs",
    "author": { "@type": "Organization", "name": "CyberSecure" },
    "datePublished": "2026-03-22",
    "dateModified": "2026-03-22",
    "description": "Guide complet sur la sensibilisation et la formation cybersécurité en entreprise : programmes, méthodes, fréquence et mesure de l'efficacité pour les PME."
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Formation cybersécurité entreprise : guide de sensibilisation"
        description="Sensibilisation cybersécurité en entreprise : pourquoi former vos collaborateurs, programmes de formation, simulations de phishing, mesure du ROI et plan de formation annuel pour les PME."
        canonical="/actualites/formation-sensibilisation-cybersecurite-entreprise"
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
                <time className="text-muted-foreground text-xs" dateTime="2026-03-22">22 Mars 2026</time>
              </div>

              <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight mb-6">
                <span className="text-gradient">Formation cybersécurité</span> en entreprise : le maillon humain au cœur de la défense
              </h1>

              <p className="text-muted-foreground text-lg leading-relaxed mb-12">
                <strong>95 % des incidents de cybersécurité impliquent une erreur humaine</strong> (IBM, 2025). Le phishing, les mots de passe faibles et les mauvaises pratiques restent les premières portes d'entrée des attaquants. Former et sensibiliser vos collaborateurs n'est plus une option — c'est votre meilleure ligne de défense. Voici comment construire un programme de sensibilisation efficace et mesurable.
              </p>
            </motion.div>

            {/* Section 1 - Le constat */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <ShieldAlert className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Le facteur humain : première faille de cybersécurité</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Les cybercriminels ont bien compris que la technologie seule ne suffit plus à protéger les entreprises. Plutôt que de s'attaquer aux pare-feu et aux systèmes de détection, ils ciblent directement les collaborateurs via des techniques d'ingénierie sociale de plus en plus sophistiquées.
              </p>
              <div className="card-glass rounded-xl p-6 mb-6">
                <h3 className="font-heading text-sm font-semibold mb-4 text-primary">Chiffres clés 2025</h3>
                <div className="grid md:grid-cols-4 gap-4">
                  {[
                    { value: "95%", label: "des incidents liés à l'erreur humaine" },
                    { value: "36%", label: "des salariés cliquent sur un phishing test" },
                    { value: "68%", label: "réutilisent le même mot de passe" },
                    { value: "x6", label: "ROI moyen d'un programme de sensibilisation" },
                  ].map((stat, i) => (
                    <div key={i} className="text-center">
                      <p className="text-primary font-heading font-bold text-2xl mb-1">{stat.value}</p>
                      <p className="text-muted-foreground text-xs">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                La bonne nouvelle : avec un programme de sensibilisation structuré, le taux de clics sur les emails de phishing passe de <strong>36 % à moins de 5 %</strong> en 12 mois. La formation est l'investissement au meilleur retour en cybersécurité.
              </p>
            </motion.section>

            {/* Section 2 - Les thématiques essentielles */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Les 8 thématiques incontournables</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Un programme de sensibilisation complet doit couvrir les risques les plus courants, adaptés au contexte de votre entreprise :
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "Phishing et ingénierie sociale", desc: "Reconnaître les emails frauduleux, le spear phishing, le vishing (phishing vocal), le smishing (par SMS) et les arnaques au président. Exercices pratiques avec des exemples réels." },
                  { title: "Gestion des mots de passe", desc: "Création de mots de passe robustes, utilisation d'un gestionnaire de mots de passe, activation du MFA. Pourquoi 'Azerty123!' n'est pas un bon mot de passe." },
                  { title: "Sécurité du poste de travail", desc: "Verrouillage automatique, mises à jour, chiffrement du disque, utilisation du Wi-Fi public, politique de clean desk. Les réflexes quotidiens." },
                  { title: "Protection des données", desc: "Classification des données, partage sécurisé, RGPD, suppression sécurisée, sensibilisation au shadow IT et aux services cloud non approuvés." },
                  { title: "Sécurité du télétravail", desc: "VPN obligatoire, séparation pro/perso, sécurité du réseau domestique, gestion des appareils personnels (BYOD)." },
                  { title: "Navigation et téléchargements", desc: "Sites malveillants, téléchargements suspects, extensions de navigateur, publicités malveillantes (malvertising)." },
                  { title: "Réseaux sociaux et fuites d'information", desc: "OSINT (renseignement en sources ouvertes), informations sensibles partagées sur LinkedIn, risques pour l'entreprise." },
                  { title: "Réaction face à un incident", desc: "Qui contacter, comment signaler un email suspect, quoi faire si on a cliqué sur un lien malveillant. Pas de blame culture." },
                ].map((item, i) => (
                  <div key={i} className="card-glass rounded-xl p-5">
                    <h3 className="font-heading text-sm font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Section 3 - Méthodes */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Les méthodes qui fonctionnent vraiment</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Les formations PowerPoint de 3 heures une fois par an ne fonctionnent pas. Les programmes efficaces combinent plusieurs approches complémentaires, régulières et engageantes :
              </p>
              <div className="space-y-4">
                {[
                  { title: "Simulations de phishing", desc: "Envoyez des campagnes de phishing simulé chaque mois. Analysez les taux de clics par service, identifiez les profils à risque, et proposez des micro-formations ciblées aux personnes qui ont cliqué. L'objectif n'est pas de piéger mais d'entraîner.", badge: "Efficacité maximale" },
                  { title: "Micro-learning (5 min/semaine)", desc: "Des capsules vidéo, quiz interactifs ou infographies envoyés chaque semaine par email ou via une plateforme dédiée. Le format court et régulier est 3x plus efficace que les formations longues espacées.", badge: "Meilleur engagement" },
                  { title: "Exercices de crise (tabletop)", desc: "Simulez un incident réel (ransomware, fuite de données) avec les équipes dirigeantes et opérationnelles. Évaluez les réflexes, les circuits de communication et les processus de décision.", badge: "Impact direction" },
                  { title: "Gamification et challenges", desc: "Concours inter-services, badges, classements, récompenses pour les bons comportements. La gamification augmente l'engagement de 60 % et la rétention des connaissances de 40 %.", badge: "Forte adhésion" },
                ].map((item, i) => (
                  <div key={i} className="card-glass rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-heading font-semibold text-foreground">{item.title}</h3>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-heading">{item.badge}</span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Section 4 - Plan annuel */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Plan de formation annuel type</h2>
              </div>
              <div className="card-glass rounded-xl p-6">
                <div className="space-y-4">
                  {[
                    { period: "Janvier", action: "Bilan de l'année N-1, définition des objectifs, campagne de phishing initiale (baseline)" },
                    { period: "Fév – Mars", action: "Module phishing & ingénierie sociale, micro-learning hebdomadaire lancé" },
                    { period: "Avril – Mai", action: "Module mots de passe & MFA, déploiement gestionnaire de mots de passe, campagne phishing #2" },
                    { period: "Juin", action: "Exercice de crise tabletop avec la direction, bilan semestriel" },
                    { period: "Juil – Août", action: "Module télétravail & mobilité, rappels estivaux (Summer Secure)" },
                    { period: "Sept – Oct", action: "Module protection des données & RGPD, campagne phishing #3, Cybermois" },
                    { period: "Nov", action: "Module navigation & réseaux sociaux, challenge inter-services" },
                    { period: "Décembre", action: "Bilan annuel, rapport d'indicateurs, planification N+1, campagne phishing finale" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <span className="text-primary font-heading font-semibold text-sm w-24 flex-shrink-0">{item.period}</span>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.action}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* Section 5 - Mesurer l'efficacité */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <BarChart3 className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Mesurer le ROI de votre programme</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Un programme de sensibilisation doit être mesurable pour être piloté et justifié auprès de la direction. Voici les indicateurs clés à suivre :
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="card-glass rounded-xl p-5">
                  <h3 className="font-heading text-sm font-semibold mb-3 text-primary">KPIs comportementaux</h3>
                  <ul className="text-muted-foreground text-sm space-y-2">
                    <li>• Taux de clics sur phishing simulé (objectif &lt; 5 %)</li>
                    <li>• Taux de signalement des emails suspects (objectif &gt; 60 %)</li>
                    <li>• Nombre d'incidents causés par erreur humaine</li>
                    <li>• Taux d'adoption du MFA</li>
                  </ul>
                </div>
                <div className="card-glass rounded-xl p-5">
                  <h3 className="font-heading text-sm font-semibold mb-3 text-primary">KPIs de programme</h3>
                  <ul className="text-muted-foreground text-sm space-y-2">
                    <li>• Taux de complétion des formations (&gt; 90 %)</li>
                    <li>• Score moyen aux quiz (évolution trimestrielle)</li>
                    <li>• Taux de satisfaction des participants</li>
                    <li>• Coût par collaborateur formé</li>
                  </ul>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                En moyenne, les entreprises qui investissent dans la sensibilisation réduisent de <strong>72 %</strong> le nombre d'incidents liés au facteur humain et divisent par <strong>6</strong> le coût des cyberincidents sur 3 ans (source : SANS Institute, 2025).
              </p>
            </motion.section>

            {/* Section 6 - Budget */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Quel budget pour une PME ?</h2>
              </div>
              <div className="card-glass rounded-xl p-6 mb-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <p className="text-primary font-heading font-bold text-2xl mb-1">15 – 40 €</p>
                    <p className="text-muted-foreground text-sm">par collaborateur / an</p>
                    <p className="text-muted-foreground text-xs mt-1">(plateforme e-learning + phishing)</p>
                  </div>
                  <div className="text-center">
                    <p className="text-primary font-heading font-bold text-2xl mb-1">2 000 – 5 000 €</p>
                    <p className="text-muted-foreground text-sm">formation présentielle</p>
                    <p className="text-muted-foreground text-xs mt-1">(session d'une demi-journée)</p>
                  </div>
                  <div className="text-center">
                    <p className="text-primary font-heading font-bold text-2xl mb-1">3 000 – 8 000 €</p>
                    <p className="text-muted-foreground text-sm">programme complet annuel</p>
                    <p className="text-muted-foreground text-xs mt-1">(e-learning + phishing + exercice)</p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* CTA */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="card-glass rounded-xl p-8 text-center border-primary/20">
                <GraduationCap className="h-10 w-10 text-primary mx-auto mb-4" />
                <h2 className="font-heading text-xl font-bold mb-3">Lancez votre programme de sensibilisation</h2>
                <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
                  Nos experts conçoivent des programmes de sensibilisation sur-mesure adaptés à votre secteur, votre culture d'entreprise et votre niveau de maturité. Simulations de phishing, formations interactives et tableaux de bord inclus.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-heading font-semibold hover:bg-primary/90 transition-colors">
                  Demander un devis
                </Link>
              </div>
            </motion.section>

            {/* Articles connexes */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}>
              <h2 className="font-heading text-xl font-bold mb-6">Articles connexes</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Link to="/actualites/10-cyberattaques-frequentes-pme" className="card-glass rounded-xl p-5 hover:border-primary/40 transition-all">
                  <h3 className="font-heading text-sm font-semibold text-foreground mb-2">Les 10 cyberattaques les plus fréquentes</h3>
                  <p className="text-muted-foreground text-xs">Phishing, ransomware, arnaque au président…</p>
                </Link>
                <Link to="/actualites/securiser-teletravail-entreprise" className="card-glass rounded-xl p-5 hover:border-primary/40 transition-all">
                  <h3 className="font-heading text-sm font-semibold text-foreground mb-2">Sécuriser le télétravail</h3>
                  <p className="text-muted-foreground text-xs">12 mesures essentielles pour vos collaborateurs</p>
                </Link>
                <Link to="/actualites/cybersecurite-pme-par-ou-commencer" className="card-glass rounded-xl p-5 hover:border-primary/40 transition-all">
                  <h3 className="font-heading text-sm font-semibold text-foreground mb-2">Cybersécurité PME : par où commencer ?</h3>
                  <p className="text-muted-foreground text-xs">Feuille de route pour les dirigeants de PME</p>
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

export default FormationCybersecurite;

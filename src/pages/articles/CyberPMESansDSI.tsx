import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import NewsletterSection from "@/components/NewsletterSection";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Users, Lightbulb, CheckCircle, Shield, HelpCircle } from "lucide-react";

const CyberPMESansDSI = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Cybersécurité PME sans DSI : comment se protéger quand on n'est pas informaticien",
    "author": { "@type": "Organization", "name": "CyberSecure" },
    "datePublished": "2026-06-28",
    "dateModified": "2026-06-28"
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Cybersécurité PME sans DSI : guide pour dirigeants non techniciens"
        description="Votre PME n'a pas de DSI ni d'équipe informatique interne ? Guide pratique pour sécuriser votre entreprise sans compétences techniques : 10 mesures simples, prestataires à contacter, budget et questions à poser."
        canonical="/actualites/cybersecurite-pme-sans-dsi-dirigeant-non-technicien"
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
                <span className="text-primary text-xs font-heading font-semibold uppercase tracking-wider">Par profil acheteur</span>
                <time className="text-muted-foreground text-xs" dateTime="2026-06-28">28 Juin 2026</time>
              </div>

              <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight mb-6">
                Cybersécurité <span className="text-gradient">PME sans DSI</span> : comment se protéger quand on n'est pas informaticien
              </h1>

              <p className="text-muted-foreground text-lg leading-relaxed mb-12">
                80 % des PME françaises n'ont pas de DSI ni d'équipe informatique interne. Pourtant, les cybercriminels ne font pas de distinction : une PME de 20 salariés est aussi exposée qu'une grande entreprise, souvent même plus car elle est considérée comme une cible facile. Ce guide vous donne les clés pour protéger votre entreprise même sans expertise technique interne.
              </p>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <HelpCircle className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Pourquoi les PME sans DSI sont particulièrement ciblées</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Les cybercriminels savent que les PME sans DSI présentent des failles prévisibles. Les ransomwares et le phishing sont souvent automatisés : ils ciblent des milliers d'entreprises simultanément et s'engouffrent dans les brèches les plus communes.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {[
                    { point: "Mises à jour négligées", desc: "Sans responsable informatique, les correctifs de sécurité s'accumulent. 60 % des incidents exploitent des vulnérabilités connues et corrigeables." },
                    { point: "Mots de passe faibles", desc: "Sans politique imposée, les collaborateurs utilisent des mots de passe simples, réutilisés sur des dizaines de services." },
                    { point: "Sauvegardes insuffisantes", desc: "Le disque externe laissé sur le bureau n'est pas une sauvegarde suffisante. La plupart des PME sans DSI n'ont pas de sauvegarde testée." },
                    { point: "Messagerie non sécurisée", desc: "Sans filtre anti-phishing, un email frauduleux sur cinq aboutit dans la boîte des collaborateurs. Un seul clic suffit." },
                  ].map((item, i) => (
                    <div key={i} className="card-glass rounded-xl p-5">
                      <h3 className="font-heading font-semibold text-red-400 mb-2">{item.point}</h3>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Les 10 mesures immédiates, sans compétences techniques</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Ces mesures peuvent être mises en place par n'importe quel dirigeant ou assistante de direction sans expertise informatique poussée. Chacune peut être déléguée à votre prestataire informatique habituel.
                </p>
                <div className="space-y-3">
                  {[
                    { num: "1", mesure: "Activez le MFA sur votre messagerie professionnelle", facilite: "Très facile", detail: "Microsoft 365 ou Google Workspace : allez dans les paramètres de sécurité et activez la vérification en deux étapes. 15 minutes, zéro coût supplémentaire, impact majeur." },
                    { num: "2", mesure: "Installez un gestionnaire de mots de passe", facilite: "Facile", detail: "1Password Teams ou Bitwarden Business : environ 4 € par personne et par mois. Plus besoin de retenir des dizaines de mots de passe. Chaque service aura un mot de passe unique et complexe." },
                    { num: "3", mesure: "Vérifiez que vos sauvegardes fonctionnent", facilite: "Facile", detail: "Demandez à votre prestataire de restaurer un fichier test depuis votre dernière sauvegarde. Si personne ne peut le faire, vous n'avez pas de sauvegarde opérationnelle." },
                    { num: "4", mesure: "Activez les mises à jour automatiques sur tous les postes", facilite: "Très facile", detail: "Windows Update, macOS Software Update : paramétrez les mises à jour automatiques pour toutes les machines de l'entreprise. Demandez à votre prestataire informatique de le vérifier." },
                    { num: "5", mesure: "Abonnez-vous à un filtre anti-phishing pour la messagerie", facilite: "Facile", detail: "Microsoft Defender for Office 365 Plan 1 (2 €/utilisateur/mois) ou Proofpoint Essentials. Votre prestataire peut le configurer en une demi-journée." },
                    { num: "6", mesure: "Sensibilisez vos équipes au phishing en 30 minutes", facilite: "Très facile", detail: "Montrez 3 exemples concrets d'emails de phishing lors d'une réunion d'équipe. Définissez une procédure simple : en cas de doute, on appelle l'expéditeur avant de cliquer." },
                    { num: "7", mesure: "Chiffrez les ordinateurs portables", facilite: "Facile", detail: "BitLocker (Windows) ou FileVault (Mac) : activer le chiffrement du disque prend 5 minutes. Protège vos données si un ordinateur est volé ou perdu." },
                    { num: "8", mesure: "Supprimez les accès des ex-collaborateurs immédiatement", facilite: "Très facile", detail: "Quand quelqu'un quitte l'entreprise, supprimez son compte le jour même : messagerie, applications cloud, VPN. Créez une procédure de départ incluant cette étape." },
                    { num: "9", mesure: "Souscrivez une cyber-assurance", facilite: "Facile", detail: "Contactez votre courtier en assurances pour ajouter une garantie cyber. À partir de 500-1500 €/an pour une PME de 20 personnes. Couverture : frais de gestion de crise, perte d'exploitation, notification CNIL." },
                    { num: "10", mesure: "Faites réaliser un audit par un prestataire certifié", facilite: "Déléguable", detail: "Un audit cybersécurité réalisé par un prestataire qualifié PASSI vous donnera une vision claire et priorisée de vos vulnérabilités. Demandez un rapport adapté aux non-techniciens." },
                  ].map((item, i) => (
                    <div key={i} className="card-glass rounded-xl p-5 flex gap-4">
                      <div className="w-7 h-7 rounded-full bg-primary/20 text-primary font-heading font-bold text-xs flex items-center justify-center shrink-0">{item.num}</div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-heading font-semibold text-sm">{item.mesure}</h3>
                          <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full font-heading">{item.facilite}</span>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Externaliser votre cybersécurité : les options</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Si vous n'avez pas les compétences en interne, l'externalisation est la solution naturelle. Plusieurs modèles existent selon votre budget et vos besoins :
                </p>
                <div className="space-y-4">
                  {[
                    {
                      option: "Votre prestataire informatique actuel",
                      cout: "Inclus ou tarif horaire",
                      pour: "PME de moins de 20 salariés, besoins basiques",
                      detail: "Votre infogérant actuel peut déployer les mesures de base (MFA, sauvegardes, mises à jour). Assurez-vous qu'il a des compétences cybersécurité spécifiques. Demandez-lui les certifications de ses techniciens."
                    },
                    {
                      option: "RSSI externalisé (vCISO)",
                      cout: "1 500 – 4 000 €/mois",
                      pour: "PME de 20 à 200 salariés, besoins de gouvernance",
                      detail: "Un RSSI à temps partagé (2 à 4 jours par mois) pilote votre stratégie cybersécurité, rédige votre PSSI, anime les audits et est votre interlocuteur en cas d'incident. La solution idéale pour les PME sans DSI."
                    },
                    {
                      option: "SOC managé / MDR",
                      cout: "500 – 2 000 €/mois",
                      pour: "PME souhaitant une surveillance 24/7",
                      detail: "Un SOC (Security Operations Center) externe surveille vos systèmes en temps réel et réagit aux alertes. Avec un EDR managé, vous bénéficiez d'une détection et d'une réponse aux incidents sans compétence interne."
                    },
                  ].map((item, i) => (
                    <div key={i} className="card-glass rounded-xl p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                        <h3 className="font-heading font-semibold">{item.option}</h3>
                        <span className="text-primary font-heading font-bold text-sm">{item.cout}</span>
                      </div>
                      <p className="text-xs text-primary font-heading mb-2">Adapté : {item.pour}</p>
                      <p className="text-muted-foreground text-sm">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <Lightbulb className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Les ressources gratuites de l'ANSSI pour les PME</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  L'ANSSI met à disposition plusieurs ressources accessibles aux non-techniciens :
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li><strong>cybermalveillance.gouv.fr</strong> : portail d'assistance et de prévention, guide en cas d'incident</li>
                  <li><strong>Guide ANSSI "La cybersécurité pour les TPE/PME en 13 questions"</strong> : téléchargeable gratuitement, accessible aux non-techniciens</li>
                  <li><strong>Mon Aide Cyber</strong> : diagnostic gratuit réalisé par un prestataire partenaire ANSSI, durée 1 journée</li>
                  <li><strong>MesServicesCyber</strong> : catalogue de prestataires de confiance référencés par l'ANSSI</li>
                  <li><strong>Alerte CERT-FR</strong> : abonnez-vous aux alertes gratuites sur les vulnérabilités critiques</li>
                </ul>
              </section>

              <section className="card-glass rounded-xl p-8 text-center">
                <h2 className="font-heading text-2xl font-bold mb-4">Parlez à un expert — sans jargon technique</h2>
                <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
                  Nos experts s'adaptent à votre niveau et vous expliquent clairement ce dont votre entreprise a besoin, sans jargon informatique. Premier échange gratuit et sans engagement.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-heading font-semibold hover:bg-primary/90 transition-colors">
                  Parler à un expert cyber
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

export default CyberPMESansDSI;

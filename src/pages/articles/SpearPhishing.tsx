import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import NewsletterSection from "@/components/NewsletterSection";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Fish, Mail, Calendar, ShieldCheck, AlertTriangle, CheckCircle2, Brain, Target, Eye } from "lucide-react";

const SpearPhishing = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Spear-phishing et BEC : guide complet pour les PME",
    "author": { "@type": "Organization", "name": "CyberSecure" },
    "datePublished": "2026-04-12",
    "dateModified": "2026-04-12",
    "description": "Comprendre et contrer les attaques de spear-phishing et BEC : techniques avancées (AiTM, deepfake), mesures techniques, sensibilisation et plan de réponse pour PME."
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Spear-phishing & BEC : guide de protection pour PME"
        description="Guide complet pour se protéger du spear-phishing, du BEC et des attaques AiTM : techniques utilisées, 12 mesures techniques, plan de sensibilisation et réponse à incident pour les PME."
        canonical="/actualites/spear-phishing-bec-guide-protection-pme"
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
                <time className="text-muted-foreground text-xs" dateTime="2026-04-12">12 Avril 2026</time>
              </div>

              <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight mb-6">
                <span className="text-gradient">Spear-phishing &amp; BEC</span> : se protéger des attaques email avancées
              </h1>

              <p className="text-muted-foreground text-lg leading-relaxed mb-12">
                Le phishing reste le <strong>premier vecteur d'attaque devant 90 % des incidents</strong> traités par l'ANSSI. Mais en 2025, les attaques se sont sophistiquées : <strong>spear-phishing</strong> hautement ciblé, <strong>Business Email Compromise (BEC)</strong>, attaques <strong>AiTM</strong> qui contournent le MFA, et nouvelle vague de <strong>deepfake audio et vidéo</strong>. Le coût moyen d'une fraude BEC en France atteint désormais <strong>140 000 €</strong> selon le rapport FBI IC3. Ce guide vous explique comment vous protéger efficacement.
              </p>
            </motion.div>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Phishing, spear-phishing, BEC : quelles différences ?</h2>
              </div>
              <div className="space-y-4">
                {[
                  { t: "Phishing de masse", d: "Email générique envoyé à des milliers de destinataires, usurpant une marque connue (banque, livreur, impôts). Faible taux de succès individuel mais volume massif." },
                  { t: "Spear-phishing", d: "Attaque ciblée sur une personne précise, après collecte d'informations sur LinkedIn, le site web et les réseaux sociaux. Le message est crédible et personnalisé. Taux de clic : 30 à 50 %." },
                  { t: "Whaling", d: "Variante du spear-phishing visant exclusivement les dirigeants (CEO, CFO, DG). Enjeu financier ou stratégique majeur." },
                  { t: "BEC (Business Email Compromise)", d: "Usurpation ou compromission d'une boîte mail légitime (dirigeant, fournisseur) pour obtenir un virement frauduleux ou détourner une facture. Pas toujours de pièce jointe ou lien : seul le contexte trahit l'attaque." },
                  { t: "AiTM (Adversary in the Middle)", d: "Page de phishing qui relaie en temps réel l'authentification et vole les tokens de session, contournant le MFA classique. Forte croissance depuis 2023." },
                ].map((s, i) => (
                  <div key={i} className="card-glass rounded-xl p-5">
                    <h3 className="font-heading text-base font-semibold mb-2 text-primary">{s.t}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{s.d}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Les nouvelles techniques en 2025</h2>
              </div>
              <div className="card-glass rounded-xl p-6 mb-4">
                <h3 className="font-heading text-base font-semibold mb-3 text-primary">IA générative au service des attaquants</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Les grands modèles de langage permettent de générer des emails de phishing en français parfait, sans faute, adaptés au ton de l'entreprise visée. Les fautes d'orthographe ne sont <strong>plus un signe fiable</strong>. Des outils comme WormGPT ou FraudGPT sont vendus sur le dark web.
                </p>
              </div>
              <div className="card-glass rounded-xl p-6 mb-4">
                <h3 className="font-heading text-base font-semibold mb-3 text-primary">Deepfake audio et vidéo</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  En 2024, une PME de Hong Kong a perdu 25 M$ après une visioconférence deepfake où le « directeur financier » et plusieurs collègues étaient entièrement synthétiques. Quelques minutes d'audio public suffisent à cloner une voix.
                </p>
              </div>
              <div className="card-glass rounded-xl p-6 mb-4">
                <h3 className="font-heading text-base font-semibold mb-3 text-primary">Quishing (QR code phishing)</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Insertion d'un QR code dans un email ou une fausse note d'authentification, qui redirige le téléphone personnel de la victime (hors périmètre de protection de l'entreprise) vers une page de capture d'identifiants.
                </p>
              </div>
              <div className="card-glass rounded-xl p-6">
                <h3 className="font-heading text-base font-semibold mb-3 text-primary">Détournement de fil de conversation</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Après compromission d'une boîte mail, l'attaquant répond à un fil légitime en cours, en injectant un lien malveillant ou en demandant un changement d'IBAN. Très difficile à détecter pour la victime.
                </p>
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">12 mesures techniques de protection</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "DMARC en politique reject + alignement SPF/DKIM sur tous les domaines",
                  "MFA résistant au phishing (FIDO2, passkeys) pour contrer les attaques AiTM",
                  "Solution anti-phishing avancée avec sandboxing (Defender for O365, Proofpoint, Vade)",
                  "Réécriture des URL (Safe Links) et analyse temps réel des pièces jointes",
                  "Bannière visuelle « Email externe » sur tous les messages venant de l'extérieur",
                  "Blocage des extensions exécutables (.exe, .iso, .img, .lnk, .hta) en pièce jointe",
                  "Protection anti-usurpation : look-alike domains, anti-spoofing, impersonation protection",
                  "Désactivation des règles de transfert externe automatiques sur Exchange",
                  "Validation hors-bande (téléphone) pour tout virement > 5 000 € ou changement d'IBAN",
                  "Surveillance des connexions impossibles et des téléchargements massifs (Defender for Cloud Apps)",
                  "Supervision SIEM des logs Exchange / Entra ID avec alertes sur création de règles inbox",
                  "Sauvegarde tierce des boîtes mail pour restaurer en cas de suppression malveillante",
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
                <Eye className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Programme de sensibilisation efficace</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Aucune solution technique ne couvre 100 % des cas. Selon Verizon DBIR, <strong>68 % des incidents impliquent un facteur humain</strong>. Un programme de sensibilisation continue est indispensable.
              </p>
              <div className="space-y-4">
                {[
                  { t: "Formation initiale (1h)", d: "Module e-learning obligatoire à l'embauche : reconnaître le phishing, signaler un email suspect, processus en cas de doute." },
                  { t: "Simulations mensuelles", d: "Campagnes de phishing simulé avec scénarios variés (livraison, RH, dirigeant, fournisseur). Mesurer le taux de clic et de signalement." },
                  { t: "Micro-learning ciblé", d: "Pour chaque utilisateur ayant cliqué : module court de 5 minutes le jour même, sans sanction mais avec pédagogie." },
                  { t: "Communication régulière", d: "Newsletter mensuelle avec exemples réels d'attaques détectées, témoignages anonymisés, focus sur les nouvelles techniques." },
                  { t: "Bouton « Signaler un phishing »", d: "Plugin Outlook/Gmail intégré qui transmet directement l'email à l'équipe sécurité avec analyse automatique." },
                  { t: "Exercices de crise BEC annuels", d: "Mise en situation des équipes finance/comptabilité face à une fausse demande de virement urgente du dirigeant." },
                ].map((s, i) => (
                  <div key={i} className="card-glass rounded-xl p-5 flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-heading font-bold">{i + 1}</div>
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
                <AlertTriangle className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Que faire en cas de fraude BEC avérée ?</h2>
              </div>
              <div className="card-glass rounded-xl p-6">
                <ul className="text-muted-foreground text-sm leading-relaxed space-y-3">
                  <li>• <strong>Heure 0 :</strong> contacter immédiatement la banque émettrice pour tenter le rappel du virement (efficace dans les premières heures)</li>
                  <li>• <strong>Heure 1 :</strong> changer tous les mots de passe des comptes potentiellement compromis et révoquer les sessions actives</li>
                  <li>• <strong>Heure 2 :</strong> rechercher et supprimer les règles de boîte mail malveillantes (forward, suppression auto)</li>
                  <li>• <strong>Sous 24h :</strong> dépôt de plainte au commissariat ou en ligne sur THESEE, signalement sur cybermalveillance.gouv.fr</li>
                  <li>• <strong>Sous 72h :</strong> notification CNIL si données personnelles concernées, déclaration assurance cyber</li>
                  <li>• <strong>Investigation :</strong> analyse forensique des logs Entra ID / Exchange pour comprendre l'étendue de la compromission</li>
                  <li>• <strong>Communication :</strong> alerter les clients/fournisseurs si leur boîte mail a pu être ciblée à leur tour</li>
                </ul>
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <Fish className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Articles complémentaires</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <Link to="/actualites/securiser-microsoft-365-pme" className="card-glass rounded-xl p-5 hover:border-primary/40 transition-all">
                  <h3 className="font-heading text-sm font-semibold mb-2 text-primary">Sécuriser Microsoft 365</h3>
                  <p className="text-muted-foreground text-xs">Configurer Defender et Purview contre le phishing avancé.</p>
                </Link>
                <Link to="/actualites/formation-sensibilisation-cybersecurite-entreprise" className="card-glass rounded-xl p-5 hover:border-primary/40 transition-all">
                  <h3 className="font-heading text-sm font-semibold mb-2 text-primary">Formation cybersécurité</h3>
                  <p className="text-muted-foreground text-xs">Sensibiliser durablement vos collaborateurs au risque cyber.</p>
                </Link>
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="card-glass glow-border rounded-2xl p-8 md:p-12 text-center">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Testez votre résistance au phishing</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Profitez d'un audit gratuit de 15 minutes pour évaluer votre exposition au spear-phishing et au BEC, et obtenir un plan d'action sur les mesures techniques et humaines prioritaires.
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

export default SpearPhishing;

import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import NewsletterSection from "@/components/NewsletterSection";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Factory, Network, ShieldAlert, CheckCircle2, AlertTriangle, Calendar } from "lucide-react";
import heroImg from "@/assets/articles/securite-ot-ics.jpg";

const SecuriteOTICS = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Sécurité OT et ICS : protéger les environnements industriels",
    "author": { "@type": "Organization", "name": "CyberSecure" },
    "datePublished": "2026-05-12",
    "dateModified": "2026-05-12",
    "description": "Guide complet sur la cybersécurité OT/ICS : modèle Purdue, IEC 62443, segmentation, monitoring passif, NIS2 et plan d'action pour PME et ETI industrielles."
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Cybersécurité OT & ICS : guide PME industrielles 2026"
        description="Sécuriser SCADA, PLC et automates : modèle Purdue, IEC 62443, segmentation IT/OT, monitoring passif, conformité NIS2 et plan d'action pour les industriels."
        canonical="/actualites/securite-ot-ics-industrielle-guide"
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
                <time className="text-muted-foreground text-xs" dateTime="2026-05-12">12 Mai 2026</time>
              </div>
              <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight mb-6">
                <span className="text-gradient">Sécurité OT &amp; ICS</span> : protéger les environnements industriels
              </h1>
              <img src={heroImg} alt="Cybersécurité industrielle OT ICS SCADA" className="w-full rounded-xl mb-8 border border-border/40" width={1280} height={720} />
              <p className="text-muted-foreground text-lg leading-relaxed mb-12">
                Les cyberattaques contre les environnements industriels <strong>ont augmenté de 87 % en 2024</strong> (Dragos Year in Review). Les ransomware Black Basta, LockBit et FrostyGoop ciblent désormais les SCADA, PLC et systèmes de supervision : usines, logistique, énergie, eau. Avec <strong>NIS2 qui s'applique à toute l'industrie manufacturière critique</strong> et IEC 62443 devenu standard de fait, sécuriser l'OT n'est plus optionnel. Ce guide vous présente la méthode, les contrôles et le plan d'action.
              </p>
            </motion.div>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <Factory className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">IT vs OT : pourquoi c'est différent</h2>
              </div>
              <div className="card-glass rounded-xl overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-primary/10">
                    <tr className="text-left">
                      <th className="p-4 font-heading">Dimension</th>
                      <th className="p-4 font-heading">IT</th>
                      <th className="p-4 font-heading">OT / ICS</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-t border-border/40"><td className="p-4">Priorité</td><td className="p-4">Confidentialité</td><td className="p-4">Disponibilité &amp; sécurité physique</td></tr>
                    <tr className="border-t border-border/40"><td className="p-4">Durée de vie</td><td className="p-4">3–5 ans</td><td className="p-4">15–30 ans</td></tr>
                    <tr className="border-t border-border/40"><td className="p-4">Patching</td><td className="p-4">Mensuel</td><td className="p-4">Annuel (arrêts de prod planifiés)</td></tr>
                    <tr className="border-t border-border/40"><td className="p-4">Protocoles</td><td className="p-4">HTTPS, SMB, LDAP</td><td className="p-4">Modbus, OPC-UA, Profinet, DNP3</td></tr>
                    <tr className="border-t border-border/40"><td className="p-4">Impact d'un arrêt</td><td className="p-4">Productivité</td><td className="p-4">Pertes massives, risque vies humaines</td></tr>
                  </tbody>
                </table>
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <Network className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Le modèle Purdue : la colonne vertébrale de l'architecture OT</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">Référence universelle pour segmenter IT et OT, repris par IEC 62443 :</p>
              <div className="space-y-3">
                {[
                  { n: "5", t: "Entreprise / Internet", d: "Web, email, ERP corporate." },
                  { n: "4", t: "Système d'information", d: "MES, planification, reporting." },
                  { n: "3.5", t: "DMZ industrielle", d: "Passerelle obligatoire entre IT et OT. Jump servers, antivirus, patch management." },
                  { n: "3", t: "Supervision opérationnelle", d: "Historian, serveurs MES, postes ingénieurs." },
                  { n: "2", t: "Supervision contrôle (SCADA / HMI)", d: "Interfaces opérateurs, serveurs de supervision." },
                  { n: "1", t: "Contrôle (PLC, DCS, RTU)", d: "Automates qui pilotent les actionneurs." },
                  { n: "0", t: "Process physique", d: "Capteurs, moteurs, vannes, instruments." },
                ].map((l, i) => (
                  <div key={i} className="card-glass rounded-xl p-4 flex gap-4 items-start">
                    <div className="text-xl font-heading font-bold text-primary w-10 text-center flex-shrink-0">L{l.n}</div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-1">{l.t}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{l.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <ShieldAlert className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Le standard IEC 62443</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Famille de normes ISA/IEC dédiées à la sécurité des systèmes d'automatisation industriels. Articulée autour de 4 axes : général, politique &amp; procédures, système, composant. Définit notamment les <strong>Security Levels SL1 à SL4</strong> et la notion de <strong>zones et conduits</strong> pour la segmentation.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="card-glass rounded-xl p-5"><h3 className="font-heading font-semibold text-primary mb-1">SL1</h3><p className="text-muted-foreground text-sm">Protection contre la violation accidentelle.</p></div>
                <div className="card-glass rounded-xl p-5"><h3 className="font-heading font-semibold text-primary mb-1">SL2</h3><p className="text-muted-foreground text-sm">Attaquant opportuniste, ressources limitées.</p></div>
                <div className="card-glass rounded-xl p-5"><h3 className="font-heading font-semibold text-primary mb-1">SL3</h3><p className="text-muted-foreground text-sm">Attaquant ciblé avec compétences ICS.</p></div>
                <div className="card-glass rounded-xl p-5"><h3 className="font-heading font-semibold text-primary mb-1">SL4</h3><p className="text-muted-foreground text-sm">Attaquant étatique, ressources étendues.</p></div>
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Plan d'action OT en 10 étapes</h2>
              </div>
              <ol className="space-y-3 list-decimal list-inside text-muted-foreground">
                {[
                  "Inventaire passif des assets OT (Nozomi, Claroty, Dragos, Tenable.ot)",
                  "Cartographier les flux IT/OT et identifier les liaisons sauvages (USB, modems 4G, accès fournisseurs)",
                  "Installer une DMZ industrielle (niveau 3.5 Purdue) avec firewall dédié",
                  "Segmenter en zones &amp; conduits selon IEC 62443",
                  "Sécuriser les accès distants fournisseurs (jump server, MFA, journalisation vidéo)",
                  "Monitoring passif des protocoles OT (Modbus, OPC-UA) — jamais d'active scan sans tests",
                  "Hardening des HMI/serveurs SCADA (whitelisting applicatif, comptes nominatifs)",
                  "Politique de patch adaptée : windows de maintenance, virtual patching via IPS",
                  "Plan de continuité industriel : configurations PLC sauvegardées, pièces de rechange, runbooks",
                  "Sensibilisation des automaticiens et exercices de crise (table-top + technique)",
                ].map((s, i) => <li key={i} className="card-glass rounded-xl p-3 text-sm leading-relaxed">{s}</li>)}
              </ol>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Pièges spécifiques à l'industriel</h2>
              </div>
              <div className="space-y-3">
                {[
                  "Lancer un scan Nessus actif sur un PLC : crash garanti, arrêt de production",
                  "Brancher un EDR Windows classique sur une HMI XP/7 industrielle : instabilité",
                  "Connecter l'OT à l'AD Windows IT : compromission IT = compromission OT immédiate",
                  "Oublier les accès maintenance fournisseurs (TeamViewer, AnyDesk) — vecteur n°1 d'intrusion",
                  "Penser que « l'air gap » suffit : la plupart des sites prétendument isolés ont des liaisons cachées",
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
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3">Sécurisez votre environnement industriel</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                15 minutes pour évaluer la maturité OT de votre site, votre exposition NIS2 et les premières actions prioritaires. Sans engagement.
              </p>
              <a href="https://calendly.com/many-cyberconform/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-heading font-semibold hover:bg-primary/90 transition-all">
                Réserver mon audit gratuit
              </a>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <h2 className="font-heading text-xl md:text-2xl font-bold mb-4">Articles liés</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link to="/actualites/directive-nis2-guide-pme-eti" className="card-glass rounded-xl p-5 hover:border-primary/40 transition-all">
                  <h3 className="font-heading font-semibold text-foreground mb-1">Directive NIS2</h3>
                  <p className="text-muted-foreground text-sm">Obligations applicables à l'industrie.</p>
                </Link>
                <Link to="/actualites/pca-pra-cybersecurite-guide" className="card-glass rounded-xl p-5 hover:border-primary/40 transition-all">
                  <h3 className="font-heading font-semibold text-foreground mb-1">PCA &amp; PRA</h3>
                  <p className="text-muted-foreground text-sm">Continuité d'activité industrielle.</p>
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

export default SecuriteOTICS;

import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import NewsletterSection from "@/components/NewsletterSection";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const pillarPages = [
  { tag: "Page pilier", title: "Qu'est-ce qu'un audit cybersécurité et pourquoi en faire un ?", desc: "Guide complet sur l'audit cybersécurité : définition, méthodologie, types d'audits, bénéfices et fréquence recommandée pour les PME et ETI.", date: "10 Mars 2026", slug: "/actualites/audit-cybersecurite-guide" },
  { tag: "Page pilier", title: "Pentest entreprise : guide complet pour les PME", desc: "Tout savoir sur le pentest entreprise : approches (boîte noire, grise, blanche), types de tests, déroulement étape par étape et coûts pour les PME.", date: "8 Mars 2026", slug: "/actualites/pentest-entreprise-guide-pme" },
  { tag: "Page pilier", title: "Comment choisir son prestataire en cybersécurité ?", desc: "Les critères essentiels pour sélectionner un prestataire cybersécurité : qualifications PASSI, certifications, méthodologie, pièges à éviter.", date: "5 Mars 2026", slug: "/actualites/choisir-prestataire-cybersecurite" },
  { tag: "Page pilier", title: "Cybersécurité PME : par où commencer ?", desc: "Feuille de route complète pour les PME : 10 premières mesures, budget, obligations réglementaires et plan d'action sur 12 mois.", date: "1 Mars 2026", slug: "/actualites/cybersecurite-pme-par-ou-commencer" },
];

const blogArticles = [
  { tag: "Article", title: "Combien coûte un audit cybersécurité en 2025 ?", desc: "Prix détaillés par type d'audit, facteurs de coût, conseils pour optimiser votre budget et ROI d'un audit cybersécurité pour les PME.", date: "25 Fév 2026", slug: "/actualites/cout-audit-cybersecurite-2025" },
  { tag: "Article", title: "Pentest vs audit de sécurité : quelles différences ?", desc: "Comprendre les différences fondamentales entre pentest et audit de sécurité : approche, méthodologie, livrables et comment choisir.", date: "20 Fév 2026", slug: "/actualites/pentest-vs-audit-securite-differences" },
  { tag: "Article", title: "Les 10 cyberattaques les plus fréquentes sur les PME", desc: "Phishing, ransomware, arnaque au président... Les 10 menaces les plus courantes avec leur impact réel et les mesures de protection.", date: "15 Fév 2026", slug: "/actualites/10-cyberattaques-frequentes-pme" },
  { tag: "Article", title: "Que faire après une cyberattaque ?", desc: "Guide de réponse à incident pour les PME : containment, obligations légales, investigation forensique, restauration et retour d'expérience.", date: "10 Fév 2026", slug: "/actualites/que-faire-apres-cyberattaque" },
  { tag: "Article", title: "Audit cybersécurité obligatoire : qui est concerné ?", desc: "NIS2, DORA, RGPD, LPM : toutes les réglementations qui imposent des audits cybersécurité et les secteurs concernés.", date: "5 Fév 2026", slug: "/actualites/audit-cybersecurite-obligatoire" },
  { tag: "Article", title: "Comment se préparer à un pentest ?", desc: "Guide pratique : documentation à fournir, périmètre à définir, équipes à impliquer, checklist complète de préparation.", date: "28 Jan 2026", slug: "/actualites/comment-se-preparer-pentest" },
];

const allArticles = [...pillarPages, ...blogArticles];

const Actualites = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Blog cybersécurité : audit, pentest, conseils PME"
        description="Blog cybersécurité de CyberSecure : guides complets sur l'audit cybersécurité, le pentest entreprise, la conformité NIS2/DORA et les bonnes pratiques pour les PME et ETI."
        canonical="/actualites"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Blog cybersécurité CyberSecure",
          "description": "Articles et guides sur l'audit cybersécurité et le pentest entreprise pour les PME",
          "publisher": { "@type": "Organization", "name": "CyberSecure" }
        }}
      />
      <Navbar />
      <main>
        <section className="pt-32 pb-20 px-6 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl mb-16">
              <p className="text-primary font-heading font-semibold text-sm uppercase tracking-widest mb-4">Blog & guides cybersécurité</p>
              <h1 className="font-heading text-4xl md:text-6xl font-bold leading-tight mb-6">
                <span className="text-gradient">Audit cybersécurité</span> & pentest entreprise
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Guides complets, articles pratiques et retours d'expérience sur l'audit cybersécurité et le pentest entreprise. Ressources conçues pour les dirigeants et responsables IT de PME et ETI.
              </p>
            </motion.div>

            {/* Pillar pages */}
            <div className="mb-16">
              <h2 className="font-heading text-2xl font-bold mb-8">Guides complets</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {pillarPages.map((a, i) => (
                  <motion.article key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
                    <Link to={a.slug} className="card-glass rounded-xl overflow-hidden group cursor-pointer hover:border-primary/40 transition-all block h-full">
                      <div className="h-44 bg-secondary/50 flex items-center justify-center">
                        <span className="text-primary font-heading text-sm font-semibold">{a.tag}</span>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-primary text-xs font-heading font-semibold uppercase tracking-wider">{a.tag}</span>
                          <time className="text-muted-foreground text-xs" dateTime={a.date}>{a.date}</time>
                        </div>
                        <h3 className="font-heading text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">{a.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">{a.desc}</p>
                        <span className="text-primary text-sm font-heading font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                          Lire le guide <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </span>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            </div>

            {/* Blog articles */}
            <div>
              <h2 className="font-heading text-2xl font-bold mb-8">Articles de blog</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogArticles.map((a, i) => (
                  <motion.article key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
                    <Link to={a.slug} className="card-glass rounded-xl overflow-hidden group cursor-pointer hover:border-primary/40 transition-all block h-full">
                      <div className="h-36 bg-secondary/50 flex items-center justify-center">
                        <span className="text-muted-foreground font-heading text-sm">{a.tag}</span>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-primary text-xs font-heading font-semibold uppercase tracking-wider">{a.tag}</span>
                          <time className="text-muted-foreground text-xs" dateTime={a.date}>{a.date}</time>
                        </div>
                        <h3 className="font-heading text-base font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">{a.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">{a.desc}</p>
                        <span className="text-primary text-sm font-heading font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                          Lire l'article <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </span>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>
        <NewsletterSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Actualites;

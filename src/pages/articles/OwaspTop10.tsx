import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import NewsletterSection from "@/components/NewsletterSection";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Globe, ShieldCheck, AlertTriangle, Lock, Calendar } from "lucide-react";

const OwaspTop10 = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "OWASP Top 10 2025 : guide complet des vulnérabilités web pour PME",
      "url": "https://securecyber.fr/actualites/owasp-top-10-guide-securite-web",
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://securecyber.fr/actualites/owasp-top-10-guide-securite-web" },
      "author": { "@type": "Organization", "name": "CyberSecure", "url": "https://securecyber.fr" },
      "publisher": {
        "@type": "Organization",
        "name": "CyberSecure",
        "url": "https://securecyber.fr",
        "logo": { "@type": "ImageObject", "url": "https://securecyber.fr/favicon.png", "width": 512, "height": 512 }
      },
      "datePublished": "2026-06-18",
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
        { "@type": "ListItem", "position": 3, "name": "OWASP Top 10 2025 : guide complet des vulnérabilités web pour PME", "item": "https://securecyber.fr/actualites/owasp-top-10-guide-securite-web" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="OWASP Top 10 2025 : guide des vulnérabilités web critiques"
        description="Guide complet OWASP Top 10 2025 : injections SQL, broken authentication, SSRF, IDOR, XSS, mauvaise configuration. Comprendre, tester et corriger les failles web de vos applications."
        canonical="/actualites/owasp-top-10-guide-securite-web"
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
                <span className="text-primary text-xs font-heading font-semibold uppercase tracking-wider">Guide technique</span>
                <time className="text-muted-foreground text-xs" dateTime="2026-06-18">18 Juin 2026</time>
              </div>
              <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight mb-6">
                <span className="text-gradient">OWASP Top 10</span> 2025 : guide complet des vulnérabilités web
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-12">
                L'OWASP (Open Web Application Security Project) Top 10 est la référence mondiale pour la sécurité des applications web. Mis à jour régulièrement par des centaines d'experts, il recense les dix catégories de vulnérabilités les plus critiques et les plus répandues. Ce guide vous explique chaque catégorie, son impact concret et les mesures correctives à mettre en place.
              </p>
            </motion.div>

            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold">A01 — Contrôle d'accès défaillant</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Le contrôle d'accès défaillant est devenu la première vulnérabilité OWASP en 2021, détrônant les injections. Il recouvre toutes les situations où des utilisateurs peuvent agir au-delà de leurs permissions. Les exemples les plus courants : IDOR (Insecure Direct Object Reference) permettant d'accéder aux données d'un autre utilisateur en changeant un ID dans l'URL, violation de principe de moindre privilège (accès admin accordé trop largement), CSRF permettant des actions non souhaitées, et accès à des fonctions d'administration sans authentification adéquate.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">Correction :</strong> Implémenter des contrôles d'accès côté serveur systématiques (ne jamais faire confiance au client), adopter un modèle de refus par défaut, journaliser les échecs de contrôle d'accès, et effectuer des tests d'autorisation dans chaque sprint de développement.
              </p>
            </section>

            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold">A02 — Défaillances cryptographiques</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Anciennement "Exposition de données sensibles", cette catégorie couvre les failles liées au chiffrement et à la protection des données. Les problèmes fréquents : transmission de données sensibles en clair (HTTP au lieu de HTTPS), utilisation d'algorithmes obsolètes (MD5, SHA1 pour les mots de passe), stockage de mots de passe sans hachage ou avec des algorithmes faibles, clés cryptographiques codées en dur dans le code source, et absence de chiffrement des données au repos.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">Correction :</strong> Utiliser TLS 1.2/1.3 pour toutes les communications, bcrypt ou Argon2 pour le hachage des mots de passe, AES-256 pour le chiffrement des données sensibles, et un gestionnaire de secrets (Vault, AWS Secrets Manager) pour les clés et secrets applicatifs.
              </p>
            </section>

            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold">A03 — Injection (SQL, NoSQL, OS, LDAP)</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Les injections restent la troisième vulnérabilité la plus critique malgré des années de sensibilisation. Une injection SQL classique se produit lorsqu'une entrée utilisateur non validée est incluse directement dans une requête SQL, permettant à l'attaquant de lire, modifier ou supprimer des données. Les variantes incluent les injections NoSQL (MongoDB), OS command injection, LDAP injection et XPath injection.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">Correction :</strong> Utiliser systématiquement des requêtes paramétrées ou des ORM, valider et nettoyer toutes les entrées utilisateur, appliquer le principe de moindre privilège sur les comptes de base de données, et utiliser des WAF (Web Application Firewall) comme couche de protection supplémentaire.
              </p>
            </section>

            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold">A04 à A10 : les autres vulnérabilités critiques</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">A04 — Design non sécurisé :</strong> Failles architecturales qui ne peuvent être corrigées par le seul codage sécurisé. Solution : threat modeling dès la conception, revue d'architecture sécurité.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">A05 — Mauvaise configuration de sécurité :</strong> Services et frameworks avec configurations par défaut non sécurisées, pages d'erreur verboses révélant des informations sensibles, ports inutiles ouverts. Solution : hardening systématique, Infrastructure as Code avec scanning de sécurité.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">A06 — Composants vulnérables et obsolètes :</strong> Bibliothèques, frameworks et modules avec des CVE connues non patchées. Solution : SCA (Software Composition Analysis) automatisé dans le pipeline CI/CD, politique de mise à jour des dépendances.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">A07 — Échecs d'identification et d'authentification :</strong> Mots de passe faibles autorisés, absence de MFA, gestion défaillante des sessions. Solution : MFA obligatoire, politique de mots de passe robuste, rotation des tokens de session.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">A08 — Défaillances d'intégrité des données et du logiciel :</strong> Désérialisation non sécurisée, pipelines CI/CD compromis, mises à jour logicielles sans vérification d'intégrité. Solution : signatures numériques des artefacts, vérification des dépendances tierces.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">A09 — Défaillances de journalisation et de surveillance :</strong> Absence de logs sur les événements de sécurité, logs non surveillés, pas d'alertes sur les activités suspectes. Solution : logging centralisé, SIEM, alertes sur les échecs d'authentification répétés.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">A10 — SSRF (Server-Side Request Forgery) :</strong> L'application effectue des requêtes vers des ressources internes à partir d'URL fournies par l'utilisateur, permettant d'accéder aux services internes non exposés. Solution : valider et filtrer toutes les URL entrantes, désactiver les redirections HTTP, utiliser des listes blanches de domaines autorisés.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Intégrer l'OWASP dans votre cycle de développement</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                L'OWASP Top 10 doit être intégré dans votre processus SDLC (Software Development Lifecycle) à plusieurs niveaux. En phase de conception : threat modeling STRIDE, revue d'architecture sécurité. En développement : SAST (Static Application Security Testing) automatisé dans l'IDE, formation des développeurs aux failles OWASP. En test : DAST (Dynamic Application Security Testing), pentest applicatif annuel par un prestataire qualifié PASSI. En production : WAF, monitoring des logs applicatifs, bug bounty.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Un audit applicatif basé sur l'OWASP Top 10 prend généralement 5 à 10 jours selon la complexité de l'application. Il produit un rapport détaillé de chaque vulnérabilité identifiée, sa criticité CVSS, une preuve d'exploitation et des recommandations de correction priorisées. C'est le point de départ indispensable pour sécuriser vos applications web.
              </p>
            </section>

            <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 text-primary" />
              <time dateTime="2026-06-18">18 Juin 2026</time>
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

export default OwaspTop10;

import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import NewsletterSection from "@/components/NewsletterSection";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Code2, Lock } from "lucide-react";

const AuditSecuriteApi = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Audit de sécurité des API web : méthodologie et outils 2026",
    "author": { "@type": "Organization", "name": "CyberSecure" },
    "datePublished": "2026-06-18",
    "dateModified": "2026-06-18",
    "description": "Méthodologie d'audit de sécurité des API REST et GraphQL : OWASP API Security Top 10, outils (Burp Suite, OWASP ZAP, Postman, Arjun), tests d'authentification, autorisation et injection."
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Audit sécurité des API web : méthodologie et outils 2026"
        description="Méthodologie d'audit de sécurité des API REST et GraphQL : OWASP API Security Top 10 2023, outils Burp Suite, OWASP ZAP, tests d'authentification OAuth2/JWT, BOLA, injection."
        canonical="/actualites/audit-securite-api-web-guide"
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
                <span className="text-primary text-xs font-heading font-semibold uppercase tracking-wider">Audit applicatif</span>
                <time className="text-muted-foreground text-xs" dateTime="2026-06-18">18 Juin 2026</time>
              </div>
              <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight mb-6">
                <span className="text-gradient">Audit sécurité des API web</span> : méthodologie et outils 2026
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-12">
                Les API REST et GraphQL sont devenues la surface d'attaque prioritaire : 83 % du trafic web transite par des API (Akamai 2025). L'OWASP a publié une liste dédiée des 10 vulnérabilités API les plus critiques. Voici comment conduire un audit de sécurité des API de façon méthodique et efficace.
              </p>
            </motion.div>

            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold">Phase 1 : Reconnaissance et cartographie</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Avant de tester, il faut connaître le périmètre API de la cible :
              </p>
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li><strong className="text-foreground">Documentation API</strong> : récupérer les specs OpenAPI/Swagger, Postman collections, documentations publiques.</li>
                <li><strong className="text-foreground">Découverte de endpoints cachés</strong> : <strong>Arjun</strong> (bruteforce de paramètres), <strong>kiterunner</strong> (découverte de routes API), analyse JavaScript pour les endpoints côté client.</li>
                <li><strong className="text-foreground">Shadow APIs</strong> : endpoints non documentés détectés via Shodan, crawling de l'application, logs de proxy.</li>
                <li><strong className="text-foreground">Versionning</strong> : tester les anciennes versions (v1, v2, beta) qui peuvent avoir des contrôles moins stricts.</li>
              </ul>
            </section>

            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold">OWASP API Security Top 10 (2023)</h2>
              </div>

              <h3 className="font-heading text-xl font-bold mt-6 mb-3">API1 — Broken Object Level Authorization (BOLA)</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                La vulnérabilité n°1. Un utilisateur peut accéder aux objets d'autres utilisateurs en modifiant l'ID dans la requête. Test : changer l'ID d'un objet pour accéder aux données d'un autre compte. Outil : Burp Suite Intruder pour tester tous les IDs d'une plage.
              </p>

              <h3 className="font-heading text-xl font-bold mt-6 mb-3">API2 — Broken Authentication</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Tests : JWT avec algorithme "none" ou secret faible (JWTcrack), absence de rotation des tokens, brute force sans rate limiting, OAuth flows mal implémentés (PKCE absent, implicit flow).
              </p>

              <h3 className="font-heading text-xl font-bold mt-6 mb-3">API3 — Broken Object Property Level Authorization</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Mass Assignment : envoyer des propriétés supplémentaires dans le body (ex: "isAdmin": true) qui ne devraient pas être modifiables. Excessive Data Exposure : l'API renvoie plus de données que nécessaire.
              </p>

              <h3 className="font-heading text-xl font-bold mt-6 mb-3">API4 — Unrestricted Resource Consumption</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Absence de rate limiting, pagination ou limites de taille. Tests : requêtes massives sur des endpoints coûteux, GraphQL depth bombing (requêtes imbriquées récursives), file uploads sans limite de taille.
              </p>

              <h3 className="font-heading text-xl font-bold mt-6 mb-3">API5 à API10</h3>
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li><strong className="text-foreground">API5 — Broken Function Level Authorization</strong> : accès à des fonctions admin (DELETE /users/{"{id}"}) depuis un compte standard.</li>
                <li><strong className="text-foreground">API6 — Unrestricted Access to Sensitive Business Flows</strong> : abus de processus métier (achat massif d'articles limités, enumération de comptes via reset password).</li>
                <li><strong className="text-foreground">API7 — Server Side Request Forgery (SSRF)</strong> : forcer le serveur à faire des requêtes vers des ressources internes via des URLs dans les paramètres.</li>
                <li><strong className="text-foreground">API8 — Security Misconfiguration</strong> : CORS trop permissif (Access-Control-Allow-Origin: *), headers de sécurité manquants, introspection GraphQL exposée en production.</li>
                <li><strong className="text-foreground">API9 — Improper Inventory Management</strong> : endpoints legacy en production, documentation Swagger exposée.</li>
                <li><strong className="text-foreground">API10 — Unsafe Consumption of APIs</strong> : confiance excessive dans les APIs tierces sans validation des données retournées.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">Outils d'audit API</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li><strong className="text-foreground">Burp Suite Pro</strong> : proxy intercepteur, scanner automatique, Intruder pour les fuzzing, extensions (JWT Editor, API Scanner).</li>
                <li><strong className="text-foreground">OWASP ZAP</strong> : alternative open source avec API scan, Active Scan et AJAX Spider pour les SPAs.</li>
                <li><strong className="text-foreground">Postman</strong> : test fonctionnel, collections automatisées, pre-request scripts pour tests de sécurité.</li>
                <li><strong className="text-foreground">GraphQL Voyager / InQL</strong> : exploration du schéma GraphQL, génération automatique de requêtes de test.</li>
                <li><strong className="text-foreground">jwt_tool</strong> : manipulation de tokens JWT (algorithm confusion, RS256/HS256 confusion, kid injection).</li>
                <li><strong className="text-foreground">ffuf / Feroxbuster</strong> : fuzzing de endpoints API avec wordlists spécialisées (SecLists/Discovery/Web-Content).</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">Livrables d'un audit API</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Cartographie complète des endpoints testés avec méthodes HTTP et paramètres.</li>
                <li>• Vulnérabilités classées par criticité (CVSS ou risk-based) avec preuve de concept.</li>
                <li>• Recommandations de remédiation priorisées et actionnables.</li>
                <li>• Analyse des contrôles d'authentification et d'autorisation implémentés.</li>
                <li>• Évaluation de la configuration (headers, CORS, rate limiting, logging).</li>
              </ul>
            </section>
          </div>
        </article>
      </main>
      <NewsletterSection />
      <FooterSection />
    </div>
  );
};

export default AuditSecuriteApi;

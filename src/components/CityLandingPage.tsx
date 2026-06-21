import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Shield, MapPin, Phone, CheckCircle2, ArrowRight, Building2, Users, Clock, Target } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

export interface CityData {
  city: string;
  citySlug: string;
  region: string;
  postalCode: string;
  intro: string;
  localContext: string;
  sectors: string[];
  neighborhoods: string[];
  faq: { q: string; a: string }[];
}

interface Props {
  data: CityData;
}

const services = [
  { title: "Audit de sécurité", desc: "Diagnostic complet de votre SI selon les référentiels ANSSI, ISO 27001 et PASSI." },
  { title: "Test d'intrusion (Pentest)", desc: "Simulation d'attaques réalistes : web, réseau, social engineering, Red Team." },
  { title: "CERT / Réponse à incident", desc: "Cellule de crise 24/7, investigation forensique et remédiation post-attaque." },
  { title: "Audit Active Directory", desc: "Évaluation de votre AD/Azure AD, vecteur d'attaque n°1 des ransomwares." },
  { title: "Conformité NIS2 & RGPD", desc: "Mise en conformité réglementaire et accompagnement DPO externalisé." },
  { title: "RSSI externalisé", desc: "Pilotage de votre sécurité informatique sans recruter en interne." },
];

const CityLandingPage = ({ data }: Props) => {
  const url = `https://securecyber.fr/audit-securite-${data.citySlug}`;
  const title = `Cybersécurité ${data.city} — Audit & Pentest | CyberSecure`;
  const description = `Cabinet d'audit et pentest cybersécurité à ${data.city} (${data.region}). Tests d'intrusion, audit de sécurité, CERT et conformité NIS2 pour les entreprises ${data.region.toLowerCase()}.`;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `CyberSecure ${data.city}`,
    description,
    url,
    telephone: "+33426782486",
    email: "contact@cybersecure.fr",
    areaServed: {
      "@type": "City",
      name: data.city,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: data.city,
      postalCode: data.postalCode,
      addressRegion: data.region,
      addressCountry: "FR",
    },
    priceRange: "€€€",
    serviceType: [
      "Audit cybersécurité",
      "Test d'intrusion",
      "Pentest",
      "CERT",
      "Réponse à incident",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://securecyber.fr/" },
      { "@type": "ListItem", position: 2, name: `Cybersécurité ${data.city}`, item: url },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:image" content="https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/5393a1ce-90f4-4e06-84ab-2dee3e5dd962/id-preview-bc576449--9bd8c65b-b20f-4747-8f8a-63d66528046c.lovable.app-1773318218871.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/5393a1ce-90f4-4e06-84ab-2dee3e5dd962/id-preview-bc576449--9bd8c65b-b20f-4747-8f8a-63d66528046c.lovable.app-1773318218871.png" />
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-20">
          <div className="container mx-auto px-6">
            {/* Breadcrumb */}
            <nav aria-label="Fil d'Ariane" className="mb-8 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary">Accueil</Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">Cybersécurité {data.city}</span>
            </nav>

            {/* Hero */}
            <section className="max-w-4xl mb-16">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-primary mb-6">
                <MapPin className="h-3 w-3" /> {data.region}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Audit & Pentest Cybersécurité à {data.city}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                {data.intro}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 min-h-[44px]"
                >
                  Audit gratuit à {data.city}
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="tel:+33426782486"
                  className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground hover:border-primary/40 hover:bg-primary/5 transition-all min-h-[44px]"
                >
                  <Phone className="h-4 w-4" /> 04 26 78 24 86
                </a>
              </div>
            </section>

            {/* Local context */}
            <section className="max-w-4xl mb-16 rounded-2xl border border-border bg-card/50 p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
                <Building2 className="h-6 w-6 text-primary" />
                Expertise cyber pour les entreprises de {data.city}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{data.localContext}</p>
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-primary mb-2">Secteurs accompagnés</p>
                  <ul className="space-y-1 text-muted-foreground">
                    {data.sectors.map((s) => (
                      <li key={s} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" /> {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-primary mb-2">Zones d'intervention</p>
                  <ul className="space-y-1 text-muted-foreground">
                    {data.neighborhoods.map((n) => (
                      <li key={n} className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" /> {n}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Services */}
            <section className="max-w-5xl mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                Nos prestations à {data.city}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map((s) => (
                  <div key={s.title} className="rounded-xl border border-border bg-card p-6 hover:border-primary/40 transition-colors">
                    <Target className="h-6 w-6 text-primary mb-3" />
                    <h3 className="text-base font-semibold text-foreground mb-2">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Stats / Trust */}
            <section className="max-w-4xl mb-16 grid sm:grid-cols-3 gap-6">
              <div className="rounded-xl border border-border bg-card p-6 text-center">
                <Users className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">+200</p>
                <p className="text-xs text-muted-foreground">Audits réalisés</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6 text-center">
                <Clock className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">24h</p>
                <p className="text-xs text-muted-foreground">Réponse à incident</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6 text-center">
                <Shield className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">PASSI</p>
                <p className="text-xs text-muted-foreground">Qualification ANSSI</p>
              </div>
            </section>

            {/* FAQ */}
            <section className="max-w-4xl mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                FAQ — Audit & Pentest à {data.city}
              </h2>
              <div className="space-y-4">
                {data.faq.map((f) => (
                  <details key={f.q} className="group rounded-xl border border-border bg-card p-6">
                    <summary className="cursor-pointer font-semibold text-foreground list-none flex items-start justify-between gap-4">
                      {f.q}
                      <span className="text-primary text-xl shrink-0 transition-transform group-open:rotate-45">+</span>
                    </summary>
                    <p className="mt-4 text-muted-foreground leading-relaxed">{f.a}</p>
                  </details>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="max-w-4xl rounded-2xl border border-primary/30 bg-primary/5 p-8 md:p-12 text-center">
              <Shield className="h-10 w-10 text-primary mx-auto mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Demandez votre audit gratuit à {data.city}
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Un expert CyberSecure analyse vos risques en 30 minutes. Rapport de synthèse offert.
              </p>
              <a
                href="/contact"
                className="inline-block rounded-md bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 min-h-[44px]"
              >
                Réserver mon audit gratuit
              </a>
            </section>
          </div>
        </main>
        <FooterSection />
      </div>
    </>
  );
};

export default CityLandingPage;

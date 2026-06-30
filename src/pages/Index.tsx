import Navbar from "@/components/Navbar";
import StickyAuditBanner from "@/components/StickyAuditBanner";
import HeroSection from "@/components/HeroSection";
import FreeAuditBanner from "@/components/FreeAuditBanner";
import TrustSection from "@/components/TrustSection";
import CertificationsSection from "@/components/CertificationsSection";
import DifferentiatorsSection from "@/components/DifferentiatorsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import NewsletterSection from "@/components/NewsletterSection";
import FooterSection from "@/components/FooterSection";
import CookieConsent from "@/components/CookieConsent";
import SEOHead from "@/components/SEOHead";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://securecyber.fr/#organization",
  "name": "CyberSecure",
  "url": "https://securecyber.fr",
  "logo": {
    "@type": "ImageObject",
    "url": "https://securecyber.fr/favicon.png",
    "width": 512,
    "height": 512
  },
  "image": "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/5393a1ce-90f4-4e06-84ab-2dee3e5dd962/id-preview-bc576449--9bd8c65b-b20f-4747-8f8a-63d66528046c.lovable.app-1773318218871.png",
  "description": "Cabinet de conseil indépendant en cybersécurité qualifié PASSI et certifié ISO 27001. Audit, pentest, conseil RSSI externalisé, CERT 24/7. Lyon, Paris.",
  "foundingDate": "2008",
  "telephone": "+33769323019",
  "email": "contact@cybersecure.fr",
  "address": [
    {
      "@type": "PostalAddress",
      "streetAddress": "40 rue de Bruxelles",
      "addressLocality": "Lyon",
      "postalCode": "69009",
      "addressCountry": "FR"
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "8 rue de Hanovre",
      "addressLocality": "Paris",
      "postalCode": "75002",
      "addressCountry": "FR"
    }
  ],
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 45.7527,
    "longitude": 4.8322
  },
  "priceRange": "€€€",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "sameAs": [
    "https://www.linkedin.com/company/cybersecure",
    "https://twitter.com/cybersecure_fr"
  ],
  "areaServed": { "@type": "Country", "name": "France" },
  "knowsAbout": ["Cybersécurité", "Pentest", "Audit de sécurité", "ISO 27001", "PASSI", "CERT", "Réponse à incident", "NIS2", "RGPD", "DORA"],
  "hasCredential": [
    { "@type": "EducationalOccupationalCredential", "name": "Qualification PASSI ANSSI" },
    { "@type": "EducationalOccupationalCredential", "name": "Certification ISO 27001" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services de cybersécurité",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Audit cybersécurité & pentest", "url": "https://securecyber.fr/audit" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Conseil RSSI externalisé", "url": "https://securecyber.fr/conseil" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CERT — Réponse à incident 24/7", "url": "https://securecyber.fr/cert" } }
    ]
  }
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://securecyber.fr/#website",
  "url": "https://securecyber.fr",
  "name": "CyberSecure",
  "description": "Cabinet audit cybersécurité et pentest pour PME et ETI, qualifié PASSI ANSSI",
  "publisher": { "@id": "https://securecyber.fr/#organization" },
  "inLanguage": "fr-FR",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://securecyber.fr/actualites?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "CyberSecure",
  "image": "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/5393a1ce-90f4-4e06-84ab-2dee3e5dd962/id-preview-bc576449--9bd8c65b-b20f-4747-8f8a-63d66528046c.lovable.app-1773318218871.png",
  "telephone": "+33769323019",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "40 rue de Bruxelles",
    "addressLocality": "Lyon",
    "postalCode": "69009",
    "addressCountry": "FR"
  },
  "priceRange": "€€€",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ]
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Audit cybersécurité & pentest entreprise | Lyon Paris"
        description="CyberSecure, cabinet qualifié PASSI et certifié ISO 27001. Audit cybersécurité et pentest pour PME et ETI. Conseil RSSI externalisé, CERT 24/7. Devis gratuit sous 48h."
        canonical="/"
        jsonLd={[organizationJsonLd, websiteJsonLd, localBusinessJsonLd]}
      />
      <StickyAuditBanner />
      <Navbar />
      <main>
        <HeroSection />
        
        <TrustSection />
        <CertificationsSection />
        <DifferentiatorsSection />
        <TestimonialsSection />
        <FreeAuditBanner />
        <BlogSection />
        <NewsletterSection />
      </main>
      <FooterSection />
      <CookieConsent />
    </div>
  );
};

export default Index;

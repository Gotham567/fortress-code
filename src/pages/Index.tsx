import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import CertificationsSection from "@/components/CertificationsSection";
import DifferentiatorsSection from "@/components/DifferentiatorsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import NewsletterSection from "@/components/NewsletterSection";
import FooterSection from "@/components/FooterSection";
import SEOHead from "@/components/SEOHead";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "CyberSecure",
  "url": "https://fortress-code.lovable.app",
  "logo": "https://fortress-code.lovable.app/favicon.ico",
  "description": "Cabinet de conseil indépendant en cybersécurité qualifié PASSI et certifié ISO 27001. Audit, pentest, conseil, CERT et gestion de surface d'attaque.",
  "foundingDate": "2008",
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
  "telephone": "+33426782486",
  "sameAs": [],
  "areaServed": "FR",
  "knowsAbout": ["Cybersécurité", "Pentest", "Audit de sécurité", "ISO 27001", "PASSI", "CERT", "Réponse à incident"]
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "CyberSecure",
  "image": "https://fortress-code.lovable.app/favicon.ico",
  "telephone": "+33426782486",
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
        title="Cabinet de conseil en cybersécurité à Lyon et Paris"
        description="CyberSecure, cabinet indépendant qualifié PASSI et certifié ISO 27001. Experts en audit de sécurité, pentest, conseil RSSI, CERT 24/7 et gestion de surface d'attaque. Lyon, Paris, France."
        canonical="/"
        jsonLd={[organizationJsonLd, localBusinessJsonLd]}
      />
      <Navbar />
      <main>
        <HeroSection />
        <TrustSection />
        <CertificationsSection />
        <DifferentiatorsSection />
        <TestimonialsSection />
        <BlogSection />
        <NewsletterSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Index;

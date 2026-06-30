import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  jsonLd?: object | object[];
  ogImage?: string;
  ogType?: "website" | "article";
  noIndex?: boolean;
}

const SITE_URL = "https://securecyber.fr";
const DEFAULT_OG_IMAGE = "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/5393a1ce-90f4-4e06-84ab-2dee3e5dd962/id-preview-bc576449--9bd8c65b-b20f-4747-8f8a-63d66528046c.lovable.app-1773318218871.png";

// Pages that should never be indexed by search engines
const NO_INDEX_PATHS = ["/mentions-legales", "/politique-confidentialite"];

const SEOHead = ({ title, description, canonical, jsonLd, ogImage, ogType = "website", noIndex }: SEOHeadProps) => {
  const location = useLocation();
  const fullTitle = `${title} | CyberSecure`;
  // Auto-generate canonical from current path if not explicitly provided
  const canonicalUrl = canonical
    ? `${SITE_URL}${canonical}`
    : `${SITE_URL}${location.pathname === "/" ? "/" : location.pathname.replace(/\/+$/, "")}`;
  const image = ogImage || DEFAULT_OG_IMAGE;

  // Determine if this page should be noindexed
  const shouldNoIndex = noIndex || NO_INDEX_PATHS.includes(location.pathname) || NO_INDEX_PATHS.includes(canonical || "");
  const robotsContent = shouldNoIndex
    ? "noindex, nofollow"
    : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1";

  const imageAlt = `${title} — CyberSecure`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robotsContent} />
      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" hreflang="fr" href={canonicalUrl} />
      <link rel="alternate" hreflang="x-default" href={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:site_name" content="CyberSecure" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@cybersecure_fr" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={imageAlt} />
      {jsonLd && (
        Array.isArray(jsonLd) ? (
          jsonLd.map((schema, i) => (
            <script key={i} type="application/ld+json">
              {JSON.stringify(schema)}
            </script>
          ))
        ) : (
          <script type="application/ld+json">
            {JSON.stringify(jsonLd)}
          </script>
        )
      )}
    </Helmet>
  );
};

export default SEOHead;

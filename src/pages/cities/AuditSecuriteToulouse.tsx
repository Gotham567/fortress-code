import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteToulouse = () => (
  <CityLandingPage
    data={{
      city: "Toulouse",
      citySlug: "toulouse",
      region: "Occitanie",
      postalCode: "31000",
      intro: "CyberSecure accompagne les entreprises toulousaines, aéronautiques et spatiales avec des audits de sécurité et pentests de haut niveau. Airbus, sous-traitants et PME innovantes : nous protégeons l'industrie de pointe de Toulouse et de l'Occitanie.",
      localContext: "Toulouse est la capitale mondiale de l'aéronautique et de l'espace (Airbus, Thales, Safran, CNES). Ces entreprises et leurs milliers de sous-traitants traitent des données hautement sensibles (propriété intellectuelle, données de vol, systèmes embarqués) et sont des cibles prioritaires d'attaques étatiques et de cyberespionnage industriel.",
      sectors: [
        "Aéronautique et spatial (Airbus, CNES, Thales)",
        "Défense et systèmes embarqués",
        "Recherche et enseignement supérieur",
        "Santé (CHU de Toulouse, biotech)",
        "Numérique et startups deeptech",
        "Sous-traitants aéronautiques",
      ],
      neighborhoods: [
        "Toulouse Blagnac et Colomiers (Airbus)",
        "Labège et Innopole",
        "Toulouse Métropole Centre",
        "Montauban, Tarbes, Albi",
        "Castres, Muret, L'Union",
        "Toute la région Occitanie",
      ],
      faq: [
        {
          q: "Comment protéger la propriété intellectuelle des sous-traitants d'Airbus ?",
          a: "Les fournisseurs d'Airbus doivent respecter les exigences du programme FAST (Fournisseurs Airbus Sécurité et Transformation). Nous réalisons des audits alignés sur ces exigences et sur les standards cybersécurité de la défense (RGS, IGI 1300).",
        },
        {
          q: "Les entreprises de défense toulousaines sont-elles soumises à des obligations spécifiques ?",
          a: "Oui. Les entreprises travaillant pour la DGA et les programmes de défense sont soumises à l'IGI 1300 et doivent protéger les informations classifiées. Nous avons l'expertise pour vous accompagner dans cette conformité.",
        },
        {
          q: "Intervenez-vous à Toulouse et en Occitanie ?",
          a: "Oui. Nos consultants se déplacent sur site à Toulouse, Blagnac, Labège, Montauban et dans toute la région Occitanie. Nous intervenons aussi à Bordeaux et Tarbes.",
        },
        {
          q: "Que faire en cas d'attaque sur nos systèmes industriels ?",
          a: "En cas d'attaque sur vos systèmes OT/embarqués, contactez notre CERT au 01 55 27 04 00. Nous intervenons sous 4h à Toulouse et déployons une équipe spécialisée en sécurité industrielle et forensique.",
        },
      ],
    }}
  />
);

export default AuditSecuriteToulouse;

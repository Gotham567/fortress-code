import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteStrasbourg = () => (
  <CityLandingPage
    data={{
      city: "Strasbourg",
      citySlug: "strasbourg",
      region: "Grand Est",
      postalCode: "67000",
      intro: "CyberSecure réalise des audits de sécurité et pentests pour les entreprises strasbourgeoises et alsaciennes. Pharma, automobile, institutions européennes et entreprises transfrontalières : nos experts interviennent à Strasbourg et dans tout le Grand Est.",
      localContext: "Strasbourg, siège du Parlement Européen, concentre des enjeux de cybersécurité exceptionnels : institutions internationales, industrie pharmaceutique (Lilly, Sanofi), automobile (Stellantis), entreprises transfrontalières franco-allemandes et un tissu de PME alsaciennes. Les cybermenaces étatiques ciblant les institutions européennes créent un contexte de risque élevé.",
      sectors: [
        "Institutions européennes et organisations internationales",
        "Pharmacie et biotechnologies",
        "Industrie automobile (Stellantis Mulhouse)",
        "Banque et finance transfrontalière",
        "Santé (CHU de Strasbourg)",
        "PME alsaciennes et transfrontalières",
      ],
      neighborhoods: [
        "Strasbourg Centre et Neudorf",
        "Schiltigheim et Illkirch",
        "Mulhouse, Colmar, Haguenau",
        "Metz, Nancy, Reims",
        "Zone franco-allemande (Kehl, Freiburg)",
        "Toute la région Grand Est",
      ],
      faq: [
        {
          q: "Avez-vous une expertise pour les entreprises transfrontalières franco-allemandes ?",
          a: "Oui. Nos consultants maîtrisent à la fois le RGPD français et le BSI-Grundschutz allemand. Nous accompagnons les entreprises opérant des deux côtés du Rhin dans leur double conformité cybersécurité.",
        },
        {
          q: "Comment sécuriser les fournisseurs des institutions européennes à Strasbourg ?",
          a: "Les prestataires des institutions européennes doivent respecter les règlements ENISA et les exigences NIS2. Nous réalisons des audits de conformité et des tests d'intrusion pour valider votre niveau de sécurité.",
        },
        {
          q: "Intervenez-vous à Strasbourg et dans le Grand Est ?",
          a: "Oui. Nous couvrons Strasbourg, Mulhouse, Colmar, Metz, Nancy, Reims et toute la région Grand Est. Nous pouvons aussi intervenir côté allemand (Bade-Wurtemberg) pour les entreprises transfrontalières.",
        },
        {
          q: "Quel pentest pour une entreprise pharmaceutique à Strasbourg ?",
          a: "Pour l'industrie pharma, nous réalisons des pentests orientés protection de la R&D : sécurité des laboratoires connectés, protection de la propriété intellectuelle, audit des accès distants et sécurité des essais cliniques.",
        },
      ],
    }}
  />
);

export default AuditSecuriteStrasbourg;

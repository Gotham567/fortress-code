import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteParis = () => (
  <CityLandingPage
    data={{
      city: "Paris",
      citySlug: "paris",
      region: "Île-de-France",
      postalCode: "75000",
      intro: "CyberSecure accompagne les entreprises parisiennes avec des audits de sécurité, pentests et une cellule CERT disponible 24h/24. Qualifié PASSI ANSSI, nous intervenons sur Paris et toute l'Île-de-France pour protéger vos systèmes d'information.",
      localContext: "Paris concentre les sièges sociaux des grands groupes français, les fintech, les cabinets d'avocats, les agences de communication et des milliers de PME cibles des cyberattaques. La densité économique de la capitale en fait la zone la plus ciblée par les ransomwares et le vol de données en France.",
      sectors: [
        "Finance, banque et assurance",
        "Cabinet d'avocats et conseil",
        "Médias et communication",
        "Retail et e-commerce",
        "Startups et scale-ups",
        "Institutions publiques et administrations",
      ],
      neighborhoods: [
        "Paris 8e, 9e, 16e (sièges sociaux)",
        "La Défense et Neuilly-sur-Seine",
        "Boulogne-Billancourt, Levallois-Perret",
        "Saint-Denis, Montreuil, Vincennes",
        "Versailles, Massy, Saclay",
        "Toute l'Île-de-France",
      ],
      faq: [
        {
          q: "Combien coûte un pentest à Paris ?",
          a: "Un pentest web pour une PME parisienne démarre à 4 000 euros HT pour une application. Un pentest réseau complet varie entre 8 000 et 20 000 euros selon le périmètre. Nous proposons des devis gratuits sous 48h.",
        },
        {
          q: "Quel délai pour un audit de sécurité à Paris ?",
          a: "Un audit organisationnel prend 3 à 5 jours. Un audit technique complet (réseau, AD, applications) prend 5 à 15 jours selon la taille de votre SI. Nous pouvons intervenir sous 5 jours ouvrés en cas d'urgence.",
        },
        {
          q: "Intervenez-vous sur site à Paris et en Île-de-France ?",
          a: "Oui. Nos consultants interviennent sur site dans tout Paris intramuros et en Île-de-France. Nous proposons aussi des audits à distance pour réduire les coûts sans compromettre la qualité.",
        },
        {
          q: "Que faire en cas de cyberattaque à Paris ?",
          a: "Contactez notre CERT immédiatement au 01 55 27 04 00 (disponible 24/7). Nous déployons une équipe de réponse à incident sous 4 heures à Paris. Isolez vos systèmes en attendant notre arrivée.",
        },
      ],
    }}
  />
);

export default AuditSecuriteParis;

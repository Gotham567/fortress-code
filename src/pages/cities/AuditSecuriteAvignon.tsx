import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteAvignon = () => (
  <CityLandingPage
    data={{
      city: "Avignon",
      citySlug: "avignon",
      region: "Provence-Alpes-Côte d'Azur",
      postalCode: "84000",
      intro: "CyberSecure accompagne les PME et ETI d'Avignon avec des audits de sécurité informatique, pentests et tests d'intrusion adaptés aux secteurs touristique, agricole et logistique du Vaucluse. Notre cabinet qualifié PASSI ANSSI intervient sur site à Avignon pour des missions d'audit réseau, de pentest PME et de réponse à incident CERT pour les entreprises du bassin avignonnais.",
      localContext: "Avignon est un carrefour logistique et culturel unique : le Festival d'Avignon (premier festival de théâtre au monde) génère chaque été une économie événementielle intense nécessitant la sécurisation des billetteries en ligne et des données personnelles de dizaines de milliers de spectateurs. La plateforme logistique de Courtine, reliée à l'autoroute A7, est l'une des plus importantes du couloir rhodanien et fait face aux cybermenaces ciblant les supply chains. L'agriculture vauclusienne (maraîchage, viticulture du Lubéron et des Côtes-du-Rhône) s'appuie sur des coopératives en transformation numérique. Le CH Avignon et les établissements de santé du Vaucluse nécessitent une protection renforcée face aux ransomwares.",
      sectors: [
        "Tourisme culturel et événementiel (Festival d'Avignon)",
        "Logistique et transport (couloir rhodanien A7)",
        "Agriculture et viticulture vauclusienne",
        "Santé (CH Avignon, cliniques Vaucluse)",
        "Commerce et distribution (plateforme Courtine)",
        "Collectivités et Grand Avignon",
      ],
      neighborhoods: [
        "Intra-muros (Palais des Papes, centre historique)",
        "Courtine et zone logistique (plateforme multimodale)",
        "Agroparc (technopôle sud, numérique)",
        "Le Pontet et zones commerciales nord",
        "Villeneuve-lès-Avignon (Gard, rive droite)",
        "L'Isle-sur-la-Sorgue et Lubéron (tourisme, PME)",
      ],
      faq: [
        {
          q: "Combien coûte un audit sécurité informatique pour un opérateur logistique à Avignon ?",
          a: "Un audit de sécurité pour une plateforme logistique sur la Courtine à Avignon est tarifé entre 6 000 et 15 000 € HT selon la taille des systèmes et les interconnexions avec les partenaires. Un pentest web pour une billetterie en ligne ou un portail événementiel (Festival d'Avignon) débute à 4 500 € HT. CyberSecure propose des audits adaptés aux budgets des PME vauclusiennes avec un devis gratuit sous 48h.",
        },
        {
          q: "Quel délai pour un pentest ou audit réseau à Avignon ?",
          a: "Un pentest réseau pour une PME avignonnaise dure 4 à 7 jours ouvrés. Un audit logistique incluant les WMS et les interfaces EDI prend 5 à 9 jours. L'audit Active Directory seul est réalisable en 2 à 3 jours. CyberSecure peut intervenir sur site à Avignon dans les 72h pour les urgences.",
        },
        {
          q: "Comment sécuriser une billetterie en ligne et les données de spectateurs du Festival d'Avignon ?",
          a: "Les systèmes de billetterie en ligne du Festival d'Avignon et des structures culturelles vauclusiennes traitent des données bancaires et personnelles de spectateurs du monde entier, soumises au RGPD. CyberSecure réalise des audits de sécurité des plateformes e-commerce incluant les tests d'injection SQL, de XSS, de falsification de paiement (IDOR) et de conformité PCI-DSS pour les systèmes de paiement en ligne. Nous recommandons également des tests de charge pour les pics de trafic lors des ouvertures de billetteries.",
        },
        {
          q: "CyberSecure intervient-il sur site à Avignon et dans le Vaucluse ?",
          a: "Oui, nos consultants se déplacent à Avignon, Carpentras, L'Isle-sur-la-Sorgue, Apt, Orange et dans tout le Vaucluse. Nous couvrons également les Bouches-du-Rhône (Aix, Marseille) et le Gard (Nîmes) pour les groupes avec des sites dans plusieurs départements PACA/Occitanie. Intervention sous 72h à Avignon.",
        },
        {
          q: "Que faire en cas de cyberattaque à Avignon — procédure d'urgence CERT ?",
          a: "Appelez le CERT de CyberSecure immédiatement (disponible 24h/24, 7j/7). Isolez les systèmes compromis sans les éteindre. Notre équipe peut être sur site à Avignon dans les 4 heures pour contenir l'attaque et coordonner la reprise d'activité. CyberSecure assure les notifications ANSSI et CNIL. Pour les incidents en période de festival, nous disposons d'un plan d'intervention renforcé pour garantir la continuité des événements culturels. Tarif CERT : 1 500 € HT/jour.",
        },
      ],
    }}
  />
);

export default AuditSecuriteAvignon;

import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteVersailles = () => (
  <CityLandingPage
    data={{
      city: "Versailles",
      citySlug: "versailles",
      region: "Île-de-France",
      postalCode: "78000",
      intro: "CyberSecure, cabinet qualifié PASSI ANSSI, accompagne les PME, administrations et entreprises innovantes de Versailles et des Yvelines avec des audits de sécurité informatique et des pentests adaptés. Paris-Saclay, startups des Yvelines et préfecture régionale : nos experts sécurisent vos systèmes d'information en Île-de-France.",
      localContext: "Versailles est la préfecture des Yvelines et bénéficie de la proximité du plateau de Paris-Saclay, l'un des plus grands pôles de recherche et d'innovation d'Europe (CEA, CNRS, CentraleSupélec, HEC). Ce tissu de startups deeptech, d'ETI numériques et d'organismes publics génère des enjeux cyber importants : protection de la propriété intellectuelle des spin-offs universitaires, sécurité des accès des personnels des administrations et conformité des collectivités locales. Le tourisme autour du Château de Versailles et le commerce versaillais complètent un bassin économique diversifié. CyberSecure intervient à Versailles, Saint-Quentin-en-Yvelines, Massy et dans tout le département Yvelines.",
      sectors: [
        "Recherche et innovation (Paris-Saclay, CEA, CNRS)",
        "Startups deeptech et numérique",
        "Administrations et collectivités (préfecture, mairies)",
        "Tourisme et commerce (Château de Versailles)",
        "Santé et établissements médicaux",
        "PME de services et immobilier",
      ],
      neighborhoods: [
        "Versailles Centre et Chantiers",
        "Saint-Quentin-en-Yvelines et Trappes",
        "Massy et plateau de Saclay",
        "Rambouillet et Chevreuse",
        "Poissy, Mantes-la-Jolie",
        "Tout le département Yvelines",
      ],
      faq: [
        {
          q: "Quel est le prix d'un pentest pour une startup ou PME de Versailles ?",
          a: "Un pentest web applicatif pour une startup ou PME versaillaise démarre à 4 000 € HT pour une application. Un audit réseau complet pour une ETI des Yvelines varie entre 8 000 et 20 000 € HT selon le périmètre. Pour les startups de Paris-Saclay souhaitant valider la sécurité de leur produit avant une levée de fonds ou un contrat avec un grand compte, un Quick Scan est disponible à partir de 2 500 € HT. Un audit Active Directory coûte entre 5 000 et 12 000 € HT. Devis gratuit sous 48h.",
        },
        {
          q: "Combien de temps dure un audit de sécurité pour une entreprise à Versailles ?",
          a: "Un audit rapide pour une PME versaillaise prend 2 à 4 jours. Un audit complet couvrant réseau, applications, Active Directory et sensibilisation pour une ETI nécessite 7 à 15 jours. Pour les organismes publics et collectivités des Yvelines, un audit de conformité NIS2 ou PSSIE (Politique de Sécurité des Systèmes d'Information de l'État) dure généralement 5 à 10 jours.",
        },
        {
          q: "Les startups de Paris-Saclay ont-elles des besoins cybersécurité spécifiques ?",
          a: "Oui. Les startups deeptech de Paris-Saclay gèrent souvent de la propriété intellectuelle très sensible (brevets, données de recherche, algorithmes propriétaires) issue de travaux universitaires. Elles sont ciblées par le cyberespionnage industriel avant leur introduction en bourse ou leur vente. Notre offre startup inclut un audit rapide de l'infrastructure cloud, de l'application principale et des accès utilisateurs, avec des recommandations priorisées adaptées à une organisation en croissance.",
        },
        {
          q: "Intervenez-vous sur site à Versailles et dans les Yvelines ?",
          a: "Oui. Nos consultants se déplacent sur site à Versailles, Saint-Quentin-en-Yvelines, Massy, Saclay, Rambouillet, Poissy, Mantes-la-Jolie et dans tout le département des Yvelines. Nous couvrons également les Hauts-de-Seine et l'Essonne pour les missions régionales autour de Paris-Saclay. La proximité de Paris permet des interventions rapides et des frais de déplacement limités.",
        },
        {
          q: "Que faire en cas de cyberattaque contre mon entreprise ou administration à Versailles ?",
          a: "Contactez immédiatement notre CERT (disponible 24h/24, 7j/7). Isolez les systèmes compromis du réseau sans les éteindre. Pour les administrations et collectivités des Yvelines, activez votre plan de continuité et signalez l'incident à la DNUM (Direction du Numérique) de l'État et à l'ANSSI. Notifiez la CNIL sous 72h si des données personnelles sont impliquées. CyberSecure déploie une équipe à Versailles sous 4 heures pour contenir l'attaque et coordonner la reprise.",
        },
      ],
    }}
  />
);

export default AuditSecuriteVersailles;

import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteAjaccio = () => (
  <CityLandingPage
    data={{
      city: "Ajaccio",
      citySlug: "ajaccio",
      region: "Corse-du-Sud",
      postalCode: "20000",
      intro: "CyberSecure, cabinet qualifié PASSI ANSSI, accompagne les collectivités, administrations et PME d'Ajaccio avec des audits cybersécurité et des tests d'intrusion sur mesure. Préfecture de la Corse, Ajaccio concentre les enjeux de sécurité des institutions publiques et du secteur touristique — nos experts assurent votre protection.",
      localContext: "Ajaccio, préfecture de la Corse-du-Sud, abrite les principales administrations régionales, la Collectivité de Corse, des PME locales et un secteur touristique important. Les collectivités et organismes publics corses sont des cibles récurrentes des cyberattaques : ransomware paralysant les services publics, phishing visant les agents territoriaux, compromission des messageries administratives. La dépendance insulaire aux systèmes d'information pour assurer la continuité des services rend la résilience cyber particulièrement critique. CyberSecure intervient à Ajaccio et dans toute la Corse-du-Sud pour protéger vos systèmes d'information.",
      sectors: [
        "Collectivités et administrations publiques",
        "Tourisme, hôtellerie et agences de voyage",
        "Commerce et distribution",
        "Santé (Centre Hospitalier d'Ajaccio)",
        "Transports et logistique insulaire",
        "PME et artisanat local",
      ],
      neighborhoods: [
        "Ajaccio Centre et Cours Napoléon",
        "Les Milelli et Pietralba",
        "Campo dell'Oro (aéroport)",
        "Bastelicaccia et Cauro",
        "Porto-Vecchio, Sartène, Propriano",
        "Toute la Corse-du-Sud",
      ],
      faq: [
        {
          q: "Quel est le tarif d'un audit cybersécurité pour une collectivité à Ajaccio ?",
          a: "Un audit de sécurité pour une commune ou collectivité d'Ajaccio démarre à 5 000 € HT et comprend l'analyse organisationnelle, la revue du SI et un plan de remédiation priorisé. Un pentest réseau complet pour une administration de taille intermédiaire varie entre 8 000 et 20 000 € HT. Nos rapports qualifiés PASSI ANSSI sont valorisés dans les appels d'offres publics et reconnus par les tutelles. Devis gratuit sous 48h.",
        },
        {
          q: "Combien de temps dure un audit de sécurité pour une PME ou administration à Ajaccio ?",
          a: "Un audit ciblé pour une PME corse prend 2 à 3 jours. Un audit complet d'une administration — incluant la revue des politiques de sécurité, le test des accès, l'audit réseau et la sensibilisation des agents — nécessite généralement 5 à 10 jours. Nous planifions les interventions pour ne pas perturber la continuité de service.",
        },
        {
          q: "Les collectivités corses ont-elles des obligations spécifiques en matière de cybersécurité ?",
          a: "Les collectivités territoriales de plus de 100 000 habitants et celles assurant des services essentiels sont soumises à NIS2. La Collectivité de Corse et les communes de taille significative doivent mettre en place des mesures de sécurité, notifier les incidents à l'ANSSI et réaliser des audits réguliers. CyberSecure vous accompagne dans la mise en conformité NIS2 et la réalisation des audits PASSI requis.",
        },
        {
          q: "Intervenez-vous sur site à Ajaccio et dans toute la Corse-du-Sud ?",
          a: "Oui. Nos consultants se déplacent sur site à Ajaccio, Bonifacio, Porto-Vecchio, Sartène et dans tout le département Corse-du-Sud. Pour les missions distantes (revue de configuration, audit organisationnel par questionnaire), nous proposons des formats à distance pour réduire les frais de déplacement. La Corse bénéficie de la même qualité de service que nos interventions en métropole.",
        },
        {
          q: "Que faire en cas de cyberattaque sur une administration ou PME à Ajaccio ?",
          a: "Appelez immédiatement notre ligne CERT (disponible 24h/24 et 7j/7). Isolez les machines compromises du réseau sans les éteindre pour préserver les preuves numériques. Signalez l'incident à l'ANSSI via cybermalveillance.gouv.fr et, si des données personnelles sont impliquées, notifiez la CNIL dans les 72 heures. Nos experts CyberSecure coordonnent la réponse à incident et la reprise d'activité depuis Ajaccio.",
        },
      ],
    }}
  />
);

export default AuditSecuriteAjaccio;

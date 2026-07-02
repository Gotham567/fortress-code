import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuritePointeAPitre = () => (
  <CityLandingPage
    data={{
      city: "Pointe-à-Pitre",
      citySlug: "pointe-a-pitre",
      region: "Guadeloupe — Caraïbes",
      postalCode: "97110",
      intro: "CyberSecure, prestataire qualifié PASSI ANSSI, intervient en Guadeloupe avec les mêmes standards qu'en France métropolitaine : pentest CHU Guadeloupe (victime d'une cyberattaque ransomware majeure en 2021, référence nationale), audit de sécurité Port Guadeloupe Caraïbes, test d'intrusion GBH grande distribution. RGPD et directive NIS2 France intégralement applicables. La Guadeloupe est un DROM français avec les mêmes obligations cyber qu'en métropole.",
      localContext: "La Guadeloupe est un département et région d'outre-mer (DROM) français, pleinement soumis au droit français et européen. Le CHU de Guadeloupe (CHRU de la Guadeloupe) a subi en novembre 2021 une cyberattaque ransomware majeure qui est devenue une référence nationale : l'attaque a compromis une grande partie du système d'information hospitalier, forçant un retour complet au papier et un transfert de patients. Cette cyberattaque a conduit l'ANSSI à renforcer ses recommandations pour les hôpitaux ultramarins. GBH (groupe Bernard Hayot) opère la grande distribution en Guadeloupe (Carrefour, Leclerc, Leader Price). Le port Guadeloupe Caraïbes est un hub maritime régional. L'agriculture (banane, canne à sucre) et le rhum Damoiseau sont des secteurs économiques importants avec des enjeux de traçabilité numérique. La Région et le Département gèrent d'importantes infrastructures numériques.",
      sectors: [
        "Santé (CHU Guadeloupe, CHBT)",
        "Distribution (GBH, Carrefour, Leclerc)",
        "Port et logistique (Guadeloupe Caraïbes)",
        "Agriculture (banane, canne, rhum Damoiseau)",
        "Collectivités (Région, Département)",
        "Tourisme et hôtellerie",
      ],
      neighborhoods: [
        "Pointe-à-Pitre centre et Les Abymes",
        "Baie-Mahault Jarry (zone industrielle)",
        "Basse-Terre (préfecture)",
        "Le Gosier et Saint-François (tourisme)",
        "Capesterre-Belle-Eau (industrie, agriculture)",
        "Grande-Terre Nord",
      ],
      faq: [
        {
          q: "La cyberattaque du CHU Guadeloupe 2021 est-elle représentative des risques ultramarins ?",
          a: "Oui, la cyberattaque ransomware du CHU de Guadeloupe en novembre 2021 est emblématique des vulnérabilités spécifiques aux hôpitaux ultramarins : isolement géographique rendant l'intervention d'urgence plus complexe, systèmes d'information parfois moins bien maintenus que dans les CHU métropolitains en raison de ressources IT limitées, dépendance à la connectivité internet (liaisons sous-marines) pour les sauvegardes et la téléassistance. L'ANSSI a depuis renforcé ses recommandations et son programme MonAideCyber pour les hôpitaux. Un audit de sécurité régulier est aujourd'hui une obligation légale NIS2 pour le CHU Guadeloupe (entité essentielle santé). CyberSecure a retenu les enseignements de cet incident pour ses méthodologies d'audit hospitalier en outre-mer.",
        },
        {
          q: "Pentest CHU Guadeloupe : méthodologie NIS2 santé et coût ?",
          a: "Le CHU de Guadeloupe (CHRU) est une entité essentielle NIS2 avec des obligations légales renforcées depuis la transposition de la directive en droit français. Un pentest NIS2 santé comprend : (1) audit de l'architecture réseau hospitalière (segmentation, DMZ, VLAN), (2) test d'intrusion réseau interne (simulation d'une attaque depuis un poste compromis), (3) audit Active Directory (chemins d'escalade de privilèges, comptes de service), (4) pentest des applications web (DPI, portail patients), (5) test de la résilience des sauvegardes face à un ransomware (snapshots immuables, sauvegardes hors ligne), (6) revue du plan de continuité d'activité. Tarifs France : 5 000 à 12 000 € selon le périmètre, avec un supplément pour les déplacements depuis la métropole.",
        },
        {
          q: "Les mêmes standards PASSI qu'en métropole s'appliquent-ils en Guadeloupe ?",
          a: "Oui, intégralement. La Guadeloupe est un DROM français où le droit français et européen s'applique sans restriction. La qualification PASSI ANSSI, le RGPD, la directive NIS2, le règlement DORA sont en vigueur en Guadeloupe exactement comme en métropole. Les entités essentielles et importantes (hôpitaux, opérateurs télécoms, établissements financiers) ont les mêmes obligations que leurs homologues métropolitains. CyberSecure intervient en Guadeloupe avec ses experts PASSI et les mêmes méthodologies rigoureuses, sans adaptation dégradée.",
        },
        {
          q: "Audit Port Guadeloupe Caraïbes : test d'intrusion d'une infrastructure portuaire ?",
          a: "Le port Guadeloupe Caraïbes (Point-à-Pitre et Jarry) est un hub maritime régional gérant des flux de conteneurs, des ferries interîles et des activités de vraquiers. Ses systèmes comprennent un TOS (Terminal Operating System), des systèmes douaniers (DELT@, SOGET), des équipements de manutention connectés et des interfaces EDI avec les armateurs. Un audit de sécurité portuaire comprend : test d'intrusion du TOS, audit des connexions EDI partenaires, test de la segmentation réseau IT/OT (équipements portuaires), revue des accès VPN des agents maritimes et sous-traitants. La cybersécurité portuaire est un enjeu critique pour l'approvisionnement de l'île. Budget indicatif : 3 000 à 7 000 €.",
        },
        {
          q: "Que faire en cas de cyberattaque en Guadeloupe ?",
          a: "En cas de cyberattaque en Guadeloupe : (1) activez votre cellule de crise et isolez les systèmes compromis immédiatement (sans extinction brutale pour préserver les preuves), (2) pour les entités NIS2 (CHU, opérateurs télécoms) : notifiez l'ANSSI dans les 24h via le portail ANSSI, (3) déposez une plainte auprès de la gendarmerie (BRGC Guadeloupe, coordination avec le C3N en métropole), (4) contactez CyberSecure CERT pour une réponse à incident à distance immédiate — déploiement d'une équipe sur site en Guadeloupe sous 24-48h si nécessaire, (5) alertez la CNIL si des données personnelles sont compromises (obligation RGPD — 72 heures), (6) ne payez aucune rançon et conservez toutes les preuves numériques disponibles.",
        },
      ],
    }}
  />
);

export default AuditSecuritePointeAPitre;

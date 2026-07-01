import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteAngers = () => (
  <CityLandingPage
    data={{
      city: "Angers",
      citySlug: "angers",
      region: "Pays de la Loire",
      postalCode: "49000",
      intro: "CyberSecure accompagne les PME et ETI d'Angers avec des audits de sécurité informatique, pentests applicatifs et tests d'intrusion réseau adaptés aux filières végétale, électronique et numérique du Maine-et-Loire. Notre cabinet qualifié PASSI ANSSI intervient à Angers et dans l'agglomération pour protéger vos systèmes d'information contre les cybermenaces ciblant l'industrie ligérienne.",
      localContext: "Angers est le centre mondial de la filière végétale grâce à Végépolys Valley, pôle de compétitivité rassemblant des centaines d'entreprises horticoles et semencières dont les systèmes de gestion et les données R&D constituent des actifs sensibles. La ville abrite également des acteurs majeurs de l'électronique (STMicroelectronics, groupe SEB) et un tissu de PME numériques en plein essor autour d'Angers Technopole. Le CHU d'Angers et les structures de santé privées du Maine-et-Loire sont exposés aux attaques ransomware qui paralysent régulièrement les établissements de santé français. L'université et les grandes écoles (ESEO, ESSCA) constituent un terreau d'innovation que CyberSecure contribue à sécuriser.",
      sectors: [
        "Végétal et agro-industrie (Végépolys Valley)",
        "Électronique et industrie (STMicro, groupe SEB)",
        "Santé (CHU, cliniques, EHPAD Maine-et-Loire)",
        "Numérique et ESN (Angers Technopole)",
        "Collectivités et service public",
        "Formation et enseignement supérieur",
      ],
      neighborhoods: [
        "Centre-ville et quartier de la Gare",
        "Belle-Beille (université, technopole)",
        "Zone industrielle de Saint-Barthélemy",
        "Les Ponts-de-Cé et sud agglomération",
        "Avrillé (zones d'activités nord)",
        "Trélazé et Agglomération Angers Loire Métropole",
      ],
      faq: [
        {
          q: "Combien coûte un pentest pour une entreprise du végétal ou de l'électronique à Angers ?",
          a: "Un pentest application web pour une PME de la filière végétale ou électronique à Angers débute à 4 500 € HT. Pour une ETI avec plusieurs sites et un ERP exposé, le budget d'un test d'intrusion complet se situe entre 8 000 et 15 000 € HT. CyberSecure propose des offres adaptées aux entreprises innovantes disposant de données R&D sensibles, avec un devis personnalisé gratuit sous 48h.",
        },
        {
          q: "Quel est le délai pour un audit sécurité informatique à Angers ?",
          a: "Un audit réseau ETI à Angers s'étale généralement sur 5 à 8 jours ouvrés. L'audit Active Directory sur 150 à 300 utilisateurs prend 3 à 4 jours. CyberSecure peut intervenir sur site à Angers dans les 72h pour les missions urgentes, et planifier un audit complet avec rapport de recommandations dans un délai de 2 à 3 semaines.",
        },
        {
          q: "Comment protéger les données R&D et les secrets industriels des entreprises de Végépolys Valley à Angers ?",
          a: "Les entreprises de la filière végétale détiennent des données génomiques, des brevets et des savoir-faire de sélection variétale qui constituent des cibles d'espionnage industriel. CyberSecure réalise des audits de classification des données, des tests d'intrusion ciblés sur les accès partenaires et fournisseurs, et des revues des politiques de gestion des droits. Nous recommandons également l'implémentation de DLP (Data Loss Prevention) pour protéger l'exfiltration des données sensibles dans ces environnements collaboratifs.",
        },
        {
          q: "CyberSecure intervient-il sur site à Angers et en Maine-et-Loire ?",
          a: "Oui, nos consultants se déplacent physiquement à Angers, Avrillé, Les Ponts-de-Cé, Cholet, Saumur et dans toute l'agglomération Angers Loire Métropole. Nous couvrons l'ensemble du Maine-et-Loire pour les missions d'audit et de pentest sur site, avec des déploiements possibles sous 48h pour les situations urgentes.",
        },
        {
          q: "Que faire en cas de cyberattaque à Angers — quelle est la procédure CERT ?",
          a: "Contactez immédiatement le CERT de CyberSecure (disponible 24h/24). N'éteignez pas les machines compromises — isolez-les du réseau en débranchant le câble ethernet. Notre équipe d'intervention peut être sur site à Angers dans les 4 heures pour contenir l'attaque, réaliser l'analyse forensique et coordonner la reprise d'activité. Nous prenons en charge les notifications obligatoires auprès de l'ANSSI et de la CNIL. Tarif d'intervention CERT : 1 500 € HT/jour.",
        },
      ],
    }}
  />
);

export default AuditSecuriteAngers;

import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteThionville = () => (
  <CityLandingPage
    data={{
      city: "Thionville",
      citySlug: "thionville",
      region: "Grand Est",
      postalCode: "57100",
      intro: "CyberSecure, cabinet qualifié PASSI ANSSI, accompagne les industriels, ETI sidérurgiques et entreprises frontalières de Thionville avec des pentests industriels et des audits de sécurité informatique. ArcelorMittal, logistique luxembourgeoise et PME mosellanes : nos experts sécurisent vos systèmes OT/IT dans le bassin thionvillois.",
      localContext: "Thionville est un bassin industriel historique ancré dans la sidérurgie (ArcelorMittal) et la métallurgie, en pleine reconversion vers la logistique et les services aux entreprises frontalières avec le Luxembourg. La proximité du Grand-Duché crée un flux intense de travailleurs frontaliers et de données sensibles entre France et Luxembourg, exposant les entreprises thionvilloises à des risques de fuite d'information et d'accès non autorisés. Les systèmes OT de l'usine sidérurgique d'ArcelorMittal sont des cibles pour le cyberespionnage industriel et les ransomwares à fort impact opérationnel. CyberSecure intervient à Thionville, Yutz, Hayange, Fameck et dans tout le nord de la Moselle.",
      sectors: [
        "Sidérurgie et métallurgie (ArcelorMittal)",
        "Logistique et transport transfrontalier",
        "Services aux travailleurs frontaliers",
        "BTP et industrie de transformation",
        "Commerce et distribution",
        "PME et ETI mosellanes",
      ],
      neighborhoods: [
        "Thionville Centre et Beauregard",
        "Yutz et Terville",
        "Hayange et vallée de la Fensch",
        "Fameck et Florange (ArcelorMittal)",
        "Metz et agglomération messine",
        "Nord Moselle et frontière luxembourgeoise",
      ],
      faq: [
        {
          q: "Quel est le prix d'un pentest industriel pour un sous-traitant d'ArcelorMittal à Thionville ?",
          a: "Un pentest industriel OT/IT pour un sous-traitant sidérurgique à Thionville varie entre 12 000 et 30 000 € HT selon la complexité des systèmes. L'audit d'un réseau industriel avec automates et systèmes de supervision aciérie coûte entre 15 000 et 35 000 € HT. Un pentest réseau IT classique pour une ETI mosellane est compris entre 8 000 et 20 000 € HT. Un audit Active Directory pour sécuriser les accès utilisateurs coûte entre 5 000 et 12 000 € HT. Devis gratuit sous 48h.",
        },
        {
          q: "Combien de temps dure un audit de sécurité pour une entreprise thionvilloise ?",
          a: "Un audit de sécurité pour une PME de Thionville dure 3 à 7 jours. Un audit OT complet pour un site sidérurgique ou métallurgique nécessite 10 à 20 jours compte tenu des systèmes spécifiques à auditer et des contraintes de production en continu. Pour les entreprises avec des opérations côté luxembourgeois, nous pouvons étendre le périmètre d'audit aux systèmes luxembourgeois.",
        },
        {
          q: "Comment sécuriser les systèmes industriels d'un site sidérurgique comme ArcelorMittal ?",
          a: "La sécurisation des systèmes OT sidérurgiques (haut-fourneau, convertisseurs, laminoirs) passe par l'inventaire des automates et capteurs connectés, la segmentation rigoureuse IT/OT, l'audit des protocoles industriels (Modbus, OPC-UA, Profinet), la gestion des accès distants des équipes de maintenance et une surveillance en temps réel du réseau industriel (SOC OT). Nos audits suivent la norme IEC 62443 et les guides ANSSI pour les systèmes industriels critiques.",
        },
        {
          q: "Les entreprises frontalières avec le Luxembourg ont-elles des risques cyber spécifiques ?",
          a: "Oui. Les entreprises thionvilloises avec des opérations au Luxembourg ou employant des frontaliers gèrent des données qui traversent la frontière et sont soumises à deux régimes réglementaires (RGPD français et luxembourgeois). Les accès VPN et à distance des frontaliers constituent des vecteurs d'attaque supplémentaires. Nous auditrons la sécurité des accès distants transfrontaliers, les politiques de gestion des comptes des télétravailleurs et la conformité dans les deux pays.",
        },
        {
          q: "Que faire si mon entreprise à Thionville subit une cyberattaque ?",
          a: "Contactez notre CERT immédiatement (disponible 24h/24, 7j/7). Isolez les systèmes compromis du réseau. Si les systèmes OT sont touchés, activez votre plan de continuité industrielle et isolez le réseau de production. Notifiez l'ANSSI et la CNIL (sous 72h si des données personnelles sont impliquées). Nos experts CyberSecure se déploient à Thionville pour contenir l'incident, analyser les vecteurs d'attaque et coordonner la reprise des opérations.",
        },
      ],
    }}
  />
);

export default AuditSecuriteThionville;

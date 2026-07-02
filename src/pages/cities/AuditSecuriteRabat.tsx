import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteRabat = () => (
  <CityLandingPage
    data={{
      city: "Rabat",
      citySlug: "rabat",
      region: "Maroc — Rabat-Salé-Kénitra",
      postalCode: "10000",
      intro: "CyberSecure réalise des pentests, audits de sécurité et tests d'intrusion à Rabat pour les administrations publiques marocaines, Bank Al-Maghrib (banque centrale), la DGSSI et les entreprises du Technopark Rabat. Cabinet qualifié PASSI ANSSI, nous intervenons dans la capitale administrative du Maroc avec une expertise en sécurité des systèmes d'information gouvernementaux et des infrastructures financières régulées par Bank Al-Maghrib.",
      localContext: "Rabat est la capitale administrative du Maroc, siège du gouvernement, des ministères (Finances, Intérieur, Affaires Étrangères, Éducation) et de Bank Al-Maghrib (banque centrale gérant les réserves de change et la politique monétaire du Royaume). La DGSSI, l'autorité nationale marocaine de cybersécurité, est installée à Rabat et coordonne la protection des systèmes d'information de l'État. Le Technopark Rabat héberge 200+ startups et PME tech bénéficiant de la proximité gouvernementale. L'Université Mohammed V (UM5) développe des programmes en informatique et cybersécurité. Les ministères marocains sont des cibles de cyberespionnage régional (services de renseignement de pays voisins, groupes hacktivistes). La digitalisation accélérée des services publics (wtiqa.ma, espace.ma) crée de nouvelles surfaces d'attaque sur des portails citoyens gérant des millions de dossiers.",
      sectors: [
        "Administrations et ministères (Finances, Intérieur, Affaires Étrangères)",
        "Banque centrale et régulateurs (Bank Al-Maghrib, ACAPS, AMMC)",
        "Technologies et startups (Technopark Rabat, incubateurs)",
        "Enseignement supérieur (UM5, ENSIAS, École Mohammadia)",
        "Services publics numériques (wtiqa.ma, CIN biométrique)",
        "Médias et presse (MAP, 2M, publications gouvernementales)",
      ],
      neighborhoods: [
        "Agdal et Hassan (ministères, ambassades, résidentiel chic)",
        "Hay Riad (tech, sièges sociaux, Technopark)",
        "Centre de Rabat (Médina, Kasbah, administrations historiques)",
        "Souissi et Palmier (résidentiel VIP, ambassades)",
        "Salé (zone industrielle, université, banlieue)",
        "Temara et Bouznika (technopoles, industrie légère)",
      ],
      faq: [
        {
          q: "Combien coûte un audit de sécurité à Rabat pour un ministère ou une administration publique marocaine ?",
          a: "Les audits de sécurité des administrations marocaines à Rabat s'inscrivent dans des marchés publics régis par le décret n° 2-22-431. Tarifs indicatifs : audit de sécurité d'un portail de services publics entre 20 000 et 50 000 MAD HT (1 850-4 600 €) ; pentest d'infrastructure ministérielle (réseau interne, Active Directory) entre 40 000 et 100 000 MAD HT ; audit complet NIS2-like selon le référentiel DGSSI entre 60 000 et 150 000 MAD HT. Pour les administrations ayant des partenariats avec des pays européens (coopération franco-marocaine, financements EU), les rapports peuvent être émis en français selon les standards ANSSI. CyberSecure accompagne également la rédaction de politiques de sécurité des systèmes d'information (PSSI) conformes au référentiel DGSSI.",
        },
        {
          q: "Pentest Bank Al-Maghrib à Rabat : audit de la banque centrale marocaine ?",
          a: "Bank Al-Maghrib est l'institution financière la plus critique du Maroc — elle gère les réserves de change (30 milliards de dollars), pilote la politique monétaire et supervise l'ensemble du système bancaire marocain. Un audit BAM nécessite une coordination formelle avec la Direction des Systèmes d'Information de Bank Al-Maghrib et s'inscrit dans le cadre des missions de contrôle interne. CyberSecure réalise des prestations type : pentest des interfaces de supervision bancaire, audit des systèmes RTGS (règlement brut en temps réel, interbanking), test de la segmentation entre les réseaux de supervision et les réseaux administratifs, audit Active Directory des accès des agents BAM. Ces prestations font l'objet de dévis sur mesure avec NDA préalable.",
        },
        {
          q: "Comment auditer la sécurité d'une startup tech du Technopark Rabat soumise à la Loi 09-08 ?",
          a: "Les startups du Technopark Rabat travaillent souvent avec des clients gouvernementaux ou des entreprises européennes, imposant un niveau de sécurité élevé. Un audit startup Technopark comprend : pentest de l'application web ou API, audit de la configuration cloud (souvent AWS ou OVHcloud), revue de la sécurité du code source (SAST), test de l'authentification et de la gestion des sessions, évaluation de la conformité Loi 09-08 (données personnelles, CNDP). La Loi 09-08 est en cours de modernisation pour l'aligner sur le RGPD européen — CyberSecure accompagne les startups dans cette transition réglementaire et dans les audits exigés par leurs clients EU. Tarif startup : 12 000-30 000 MAD HT (1 100-2 800 €).",
        },
        {
          q: "DGSSI Maroc vs PASSI ANSSI France : quelles différences et complémentarités pour un audit au Maroc ?",
          a: "La DGSSI (Direction Générale de la Sécurité des Systèmes d'Information) marocaine est l'équivalent fonctionnel de l'ANSSI française — elle établit les référentiels de sécurité pour les administrations et les infrastructures critiques marocaines, gère le maCERT (CERT gouvernemental) et délivre des homologations de sécurité. La qualification PASSI ANSSI est la référence de qualification des prestataires d'audit en France et dans l'espace francophone ; la DGSSI a développé un programme similaire de labellisation marocain. Les entreprises marocaines travaillant avec des clients français ou européens bénéficient doublement d'un prestataire qualifié PASSI : satisfaction des exigences françaises (NIS2, RGPD) et proximité avec le référentiel DGSSI. CyberSecure peut produire des rapports conformes simultanément aux deux référentiels.",
        },
        {
          q: "Que faire en cas de cyberattaque à Rabat contre une administration publique ou une banque ?",
          a: "En cas d'incident à Rabat, notre CERT est disponible 24h/24 en français et arabe. Pour une administration : notification immédiate à la DGSSI (maCERT : +212 537 57 09 09, maci@dgssi.gov.ma), isolation des systèmes compromis en préservant les journaux d'événements, information du ministère de tutelle. Pour une banque : notification à Bank Al-Maghrib (Direction de la Supervision Bancaire) selon les délais de la directive BAM sur la gestion des incidents. CyberSecure coordonne l'investigation forensique, l'identification du vecteur d'intrusion, le containment et la reconstruction des systèmes. Dépôt de plainte à la BNPJ (Brigade Nationale de la Police Judiciaire, unité criminalistique informatique). CyberSecure peut également assurer la communication de crise en arabe et en français.",
        },
      ],
    }}
  />
);

export default AuditSecuriteRabat;

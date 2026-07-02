import { Link } from "react-router-dom";
import { Globe, ArrowRight } from "lucide-react";

const countries = [
  {
    group: "Afrique du Nord",
    items: [
      { name: "Maroc", flag: "🇲🇦", path: "/audit-securite-maroc", cities: 6, desc: "Casablanca, Rabat, Marrakech, Tanger, Agadir, Fès" },
      { name: "Algérie", flag: "🇩🇿", path: "/audit-securite-algerie", cities: 2, desc: "Alger, Oran" },
      { name: "Tunisie", flag: "🇹🇳", path: "/audit-securite-tunisie", cities: 3, desc: "Tunis, Sfax, Sousse" },
    ],
  },
  {
    group: "Afrique subsaharienne",
    items: [
      { name: "Afrique francophone", flag: "🌍", path: "/audit-securite-afrique", cities: 4, desc: "Abidjan, Dakar, Yaoundé, Douala" },
    ],
  },
  {
    group: "Europe francophone",
    items: [
      { name: "Belgique", flag: "🇧🇪", path: "/audit-securite-belgique", cities: 5, desc: "Bruxelles, Liège, Namur, Charleroi, Mons" },
      { name: "Suisse", flag: "🇨🇭", path: "/audit-securite-suisse", cities: 4, desc: "Genève, Lausanne, Fribourg, Neuchâtel" },
      { name: "Luxembourg", flag: "🇱🇺", path: "/audit-securite-luxembourg", cities: 2, desc: "Luxembourg, Esch-sur-Alzette" },
      { name: "Monaco", flag: "🇲🇨", path: "/audit-securite-monaco", cities: 1, desc: "Monaco" },
    ],
  },
  {
    group: "Amériques & DOM-TOM",
    items: [
      { name: "Canada — Québec", flag: "🇨🇦", path: "/audit-securite-canada", cities: 4, desc: "Montréal, Québec, Gatineau, Sherbrooke" },
      { name: "DOM-TOM français", flag: "🇫🇷", path: "/audit-securite-dom-tom", cities: 4, desc: "La Réunion, Martinique, Guadeloupe, Guyane" },
    ],
  },
];

const CountriesSection = () => (
  <section className="py-20 border-t border-border">
    <div className="container mx-auto px-6">
      <div className="max-w-3xl mb-12">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-primary mb-4">
          <Globe className="h-3 w-3" /> Couverture internationale
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Audit et pentest dans tout l'espace francophone
        </h2>
        <p className="text-muted-foreground text-lg">
          Cabinet PASSI qualifié ANSSI, nous réalisons des audits de sécurité et pentests pour les entreprises en France, Europe, Afrique et DOM-TOM. Intervention sur site ou à distance.
        </p>
      </div>

      <div className="space-y-10">
        {countries.map((group) => (
          <div key={group.group}>
            <p className="text-xs font-mono uppercase tracking-widest text-primary mb-4">{group.group}</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {group.items.map((country) => (
                <Link
                  key={country.path}
                  to={country.path}
                  className="group flex items-start gap-4 rounded-xl border border-border bg-card p-5 hover:border-primary/40 hover:bg-primary/5 transition-all"
                >
                  <span className="text-3xl shrink-0">{country.flag}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <p className="font-semibold text-foreground">{country.name}</p>
                      <ArrowRight className="h-4 w-4 text-primary shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-xs text-primary font-mono mb-1">{country.cities} ville{country.cities > 1 ? "s" : ""}</p>
                    <p className="text-xs text-muted-foreground truncate">{country.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CountriesSection;

import {
  Briefcase,
  Building2,
  Landmark,
  LucideIcon,
  User,
  Wrench,
} from "lucide-react";

import { HowItWorkCard } from "./HowItWorkCard";

interface Feature {
  title: string;
  icon: {
    icon: LucideIcon;
    bg: string;
  };
  points: string[];
}

const features: Feature[] = [
  {
    title: "Pour les Citoyens",
    icon: {
      icon: User,
      bg: "bg-blue-100",
    },
    points: [
      "Consultez et payez vos factures en 2 clics",
      "Paiement mobile",
      "Signalez des pannes instantanément",
      "Discutez avec EVA, votre assistant IA 24h/24",
    ],
  },
  {
    title: "Pour les PME",
    icon: {
      icon: Building2,
      bg: "bg-purple-100",
    },
    points: [
      "Gérez plusieurs compteurs professionnels",
      "Analysez votre consommation avec l'IA",
      "Recevez des recommandations d'économie",
    ],
  },
  {
    title: "Pour les Techniciens",
    icon: {
      icon: Wrench,
      bg: "bg-orange-100",
    },
    points: [
      "Recevez des tickets géolocalisés",
      "Optimisez vos trajets avec l'IA",
      "Historique complet de vos interventions",
    ],
  },
  {
    title: "Pour les Managers",
    icon: {
      icon: Briefcase,
      bg: "bg-green-100",
    },
    points: [
      "Tableaux de bord en temps réel",
      "Suivez les performances des techniciens",
      "Analysez la satisfaction client avec l'IA",
    ],
  },
  {
    title: "Pour L'État",
    icon: {
      icon: Landmark,
      bg: "bg-yellow-100",
    },
    points: [
      "Vue nationale des performances EDG",
      "Statistiques régionales en temps réel",
      "Rapports prédictifs alimentés par l'IA",
    ],
  },
];

export const HowItWork = () => {
  return (
    <section className="bg-gradient-to-b from-green-50 to-gray-50 py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Comment ça marche ?
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            Une plateforme adaptée à chaque utilisateur
          </p>
        </div>

        <div className="flex flex-wrap gap-6 w-full">
          {features.map((feature) => (
            <HowItWorkCard key={feature.title} {...feature}>
              {feature.points.map((point, index) => (
                <li key={index} className="text-sm text-gray-600 flex gap-3">
                  <span className="text-green-600 font-bold">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </HowItWorkCard>
          ))}
        </div>

       
      </div>
    </section>
  );
};

import { Card } from "./Card";

const innovations = [
  {
    title: "EVA : Votre Conseiller IA Personnel",
    flash: {
      icon: "⚡",
      text: "95% de satisfaction",
      bg: "bg-green-200 text-green-700",
    },
    icon: {
      icon: "👜",
      bg: "bg-green-600",
    },
  },
  {
    title: "Détection Intelligente d'Anomalies",
    flash: {
      icon: "⚡",
      text: "Résolution 3x plus rapide",
      bg: "bg-green-200 text-green-700",
    },
    icon: {
      icon: "⚡",
      bg: "bg-green-600",
    },
  },
  {
    title: "Réduction de Vos Factures",
    flash: {
      icon: "⚡",
      text: "Économies moyennes : 30%",
      bg: "bg-green-200 text-green-700",
    },
    icon: {
      icon: "📈",
      bg: "bg-green-600",
    },
  },
  {
    title: "EVA : Votre Conseiller IA Personnel",
    flash: {
      icon: "⚡",
      text: "95% de satisfaction",
      bg: "bg-green-200 text-green-700",
    },
    icon: {
      icon: "👜",
      bg: "bg-green-600",
    },
  },
  {
    title: "Support Multicanal Unifié",
    flash: {
      icon: "⚡",
      text: "Disponible 24h/24",
      bg: "bg-yellow-200 text-yellow-700",
    },
    icon: {
      icon: "💬",
      bg: "bg-yellow-500",
    },
  },
  {
    title: "Prédictions de Consommation",
    flash: {
      icon: "⚡",
      text: "Précision de 92%",
      bg: "bg-yellow-200 text-yellow-700",
    },
    icon: {
      icon: "📊",
      bg: "bg-yellow-500",
    },
  },
  {
    title: "Paiements Sécurisés Simplifiés",
    flash: {
      icon: "⚡",
      text: "100% sécurisé",
      bg: "bg-yellow-200 text-yellow-700",
    },
    icon: {
      icon: "🛡️",
      bg: "bg-yellow-500",
    },
  },
  {
    title: "Support Multicanal Unifié",
    flash: {
      icon: "⚡",
      text: "Disponible 24h/24",
      bg: "bg-yellow-200 text-yellow-700",
    },
    icon: {
      icon: "💬",
      bg: "bg-yellow-500",
    },
  },
];

export const Innovation = () => {
  return (
    <section className="bg-white py-12 md:py-20 px-4 md:px-8 bg-gradient-to-b from-white to-green-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">
            L'innovation EDG au service de votre quotidien
          </h2>
          <p className="text-base md:text-lg text-gray-500">
            Découvrez comment l’IA transforme votre expérience
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {
            innovations.map((innovation, index) => (
              <Card key={index} {...innovation} />
            ))
          }
        </div>
      </div>
    </section>
  );
};

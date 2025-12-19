import WhyUsCard from "./WhyUsCard";

const WhyGSEData = [
  {
    title: "Paiement Simplifié",
    icon: {
      icon: "💳",
      bg: "bg-green-500",
    },
    description: "Sécurisé via Mobile Money",
  },
  {
    title: "Alertes Intelligentes",
    icon: { icon: "🔔", bg: "bg-yellow-400" },
    description: "IA anticipe vos besoins",
  },
  {
    title: "EVA Assistant IA",
    icon: { icon: "✨", bg: "bg-green-500" },
    description: "Support 24h/24",
  },
  {
    title: "EDG Partout",
    icon: { icon: "🚀", bg: "bg-green-500" },
    description: "App, SMS, WhatsApp",
  },
];

const WhyGSE = () => {
  return (
    <section className="bg-gray-50 py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Pourquoi choisir Guinea Smart Electricity ?
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            L'IA au service de votre expérience EDG
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {
            WhyGSEData.map((whyus, index) => (
              <WhyUsCard
                key={index}
                {...whyus}
              />
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default WhyGSE;

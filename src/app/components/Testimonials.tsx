

import TestiCard from "./TestiCard";
import { TestiCardProps } from "../types/types";

const testimonials: TestiCardProps[] = [
    {
        name: "Mariama Diallo",
        job: "Commerçante - Matam",
        stars: 5,
        comment: "Avant, j'attendais des heures au guichet EDG. Avec EVA, je paie mes factures en 2 minutes depuis ma boutique. Le service client a vraiment changé !"
    },
    {
        name: "Ibrahima Sow",
        job: "Gérant PME - Kaloum",
        stars: 5,
        comment: "EVA a détecté une anomalie sur notre compteur qui nous coûtait 150 000 GNF par mois. L'IA EDG m'a fait économiser une fortune !"
    },
    {
        name: "Aïssatou Bah",
        job: "Enseignante - Ratoma",
        stars: 5,
        comment: "Je reçois mes alertes par SMS avant même d'ouvrir l'application. Plus de surprise sur les factures. EDG est devenu vraiment transparent !"
    },
    {
        name: "Mamadou Kouyaté",
        job: "Restaurateur - Dixinn",
        stars: 5,
        comment: "L'IA prédit ma consommation avec une précision incroyable. Je planifie maintenant mon budget restaurant sans stress. Merci Guinea Smart !"
    },
    {
        name: "Fatoumata Camara",
        job: "Infirmière - Kipé",
        stars: 5,
        comment: "Payer avec Orange Money en quelques clics, parler à EVA la nuit"
    },
    {
        name: "Moussa Sacko",
        job: "Entrepreneur - Landréah",
        stars: 5,
        comment: "J'ai signalé une panne via l'app, le technicien EDG est arrivé en 2h avec tout l'historique. Un service client digne du 21ème siècle !"
    }
]

export const Testimonials = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-green-50 py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Ils ont transformé leur expérience EDG
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            Découvrez comment l'IA améliore le quotidien des clients EDG en
            Guinée
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

          {testimonials.map((testimonial, index) => (
            <TestiCard key={index} {...testimonial} />
          ))}

        </div>
      </div>
    </section>
  );
};

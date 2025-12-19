"use client";

import { useState, useMemo } from "react";
import FaqItem from "./components/FaqItem";
import { TCategory } from "../../types/types"; 


const categories: TCategory[] = [
  {
    icon: "💳",
    title: "À propos d'EVA (Assistant IA)",
    questions: [
      {
        question:
          "Qu'est-ce qu'EVA et comment améliore-t-elle le service client EDG ?",
        answer:
          "EVA est un assistant virtuel intelligent propulsé par l'intelligence artificielle qui révolutionne le service client EDG. Elle répond instantanément à vos questions, vous aide à gérer vos factures, prédit votre consommation et vous guide dans toutes vos démarches. Disponible 24h/24 et 7j/7, EVA améliore considérablement votre expérience client en réduisant les temps d'attente et en offrant un support personnalisé.",
      },
      {
        question: "Comment parler avec EVA ?",
        answer:
          "Pour parler avec EVA, il suffit de cliquer sur l'icône de chat en bas à droite de votre écran une fois connecté à votre compte. EVA est accessible depuis votre tableau de bord client. Vous pouvez lui poser des questions en langage naturel, et elle vous répondra instantanément avec des informations précises et pertinentes.",
      },
      {
        question: "EVA peut-elle prédire ma consommation ?",
        answer:
          "Oui ! EVA utilise des algorithmes d'intelligence artificielle avancés pour analyser vos habitudes de consommation passées et prédire votre consommation future. Elle peut vous alerter en cas de surconsommation inhabituelle et vous proposer des recommandations pour optimiser votre utilisation d'électricité.",
      },
    ],
  },
  {
    icon: "💳",
    title: "Paiements et Factures",
    questions: [
      {
        question: "Quels moyens de paiement sont acceptés ?",
        answer:
          "Guinea Smart Electricity accepte plusieurs moyens de paiement pour votre commodité : Orange Money, MTN Money, Moov Money, et les cartes bancaires. Tous les paiements sont sécurisés et traités instantanément. Vous recevrez une confirmation immédiate après chaque transaction.",
      },
      {
        question: "Comment consulter mes factures ?",
        answer:
          "Vous pouvez consulter toutes vos factures depuis votre tableau de bord client. Accédez à la section 'Factures' pour voir l'historique complet de vos factures, télécharger les PDF, et suivre l'état de vos paiements. Les factures sont disponibles en ligne dès leur émission.",
      },
      {
        question: "Puis-je payer par tranches ?",
        answer:
          "Oui, vous pouvez payer vos factures par tranches selon vos possibilités. Contactez le support client EDG ou utilisez EVA pour discuter des options de paiement échelonné disponibles. Nous proposons des solutions flexibles pour vous aider à gérer vos paiements.",
      },
    ],
  },
  {
    icon: "⚡",
    title: "Consommation et Compteurs",
    questions: [
      {
        question: "Comment suivre ma consommation en temps réel ?",
        answer:
          "Votre tableau de bord client affiche votre consommation en temps réel avec des graphiques détaillés. Vous pouvez voir votre consommation quotidienne, hebdomadaire et mensuelle. Les données sont mises à jour automatiquement et vous permettent d'identifier vos habitudes de consommation pour mieux les gérer.",
      },
      {
        question: "Que faire en cas de surconsommation inhabituelle ?",
        answer:
          "Si vous remarquez une surconsommation inhabituelle, EVA vous alertera automatiquement. Vous pouvez également signaler le problème via votre tableau de bord en créant un ticket. Notre équipe technique pourra vérifier votre compteur et identifier la cause du problème. En attendant, vérifiez vos appareils électriques et assurez-vous qu'aucun équipement ne fonctionne inutilement.",
      },
      {
        question: "Mon compteur affiche une erreur, que faire ?",
        answer:
          "Si votre compteur affiche une erreur, créez immédiatement un ticket de panne depuis votre tableau de bord. Notre équipe technique sera notifiée et interviendra dans les plus brefs délais. En cas d'urgence, contactez le support EDG directement. Ne tentez jamais de manipuler le compteur vous-même pour des raisons de sécurité.",
      },
    ],
  },
  {
    icon: "🛡️",
    title: "Sécurité et Confidentialité",
    questions: [
      {
        question: "Mes données sont-elles sécurisées ?",
        answer:
          "Oui, la sécurité de vos données est notre priorité absolue. Nous utilisons des protocoles de chiffrement avancés (SSL/TLS) pour protéger toutes vos informations. Votre compte est protégé par authentification sécurisée, et nous respectons les normes internationales de protection des données. Vos informations financières sont traitées de manière sécurisée et ne sont jamais stockées en clair.",
      },
      {
        question: "Qui a accès à mes informations ?",
        answer:
          "Seuls les membres autorisés de l'équipe EDG ayant besoin d'accéder à vos informations pour fournir le service ont accès à vos données. Tous les accès sont tracés et audités régulièrement. Nous ne partageons jamais vos informations avec des tiers sans votre consentement explicite, conformément à notre politique de confidentialité.",
      },
    ],
  },
  {
    icon: "🎧",
    title: "Support Client EDG",
    questions: [
      {
        question: "Comment contacter le support EDG ?",
        answer:
          "Vous pouvez contacter le support EDG de plusieurs façons : via EVA (notre assistant IA disponible 24h/24), en créant un ticket depuis votre tableau de bord, par email à support@edg.gn, ou par téléphone au numéro dédié. EVA peut répondre à la plupart de vos questions instantanément, mais pour les cas complexes, notre équipe humaine prendra le relais.",
      },
      {
        question: "Quel est le délai de réponse ?",
        answer:
          "EVA répond instantanément à vos questions. Pour les tickets créés, notre équipe s'engage à répondre dans un délai de 24 heures pour les demandes standard, et dans les 2 heures pour les urgences. Les tickets de panne sont traités en priorité selon leur niveau de criticité.",
      },
      {
        question: "Puis-je suggérer des améliorations ?",
        answer:
          "Absolument ! Nous apprécions vos suggestions et vos retours. Vous pouvez suggérer des améliorations via EVA, en créant un ticket avec le type 'Suggestion', ou en contactant directement notre équipe. Votre feedback nous aide à améliorer continuellement nos services et votre expérience utilisateur.",
      },
    ],
  },
  {
    icon: "🔔",
    title: "Alertes et Notifications",
    questions: [
      {
        question: "Quel type d'alertes vais-je recevoir ?",
        answer:
          "Vous recevrez des alertes pour : les nouvelles factures disponibles, les rappels de paiement, les alertes de surconsommation, les notifications de maintenance programmée, les mises à jour sur vos tickets de panne, et les informations importantes concernant votre service électrique. Toutes les alertes sont personnalisables selon vos préférences.",
      },
      {
        question: "Puis-je personnaliser mes notifications ?",
        answer:
          "Absolument ! Vous pouvez personnaliser vos notifications depuis les paramètres de votre compte. Choisissez les types d'alertes que vous souhaitez recevoir, la fréquence, et le canal de communication (email, SMS, notifications push). Vous avez un contrôle total sur vos notifications.",
      },
    ],
  },
];

const Faq = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return categories;

    return categories
      .map((category) => {
        const titleMatch = category.title.toLowerCase().includes(query);
        const filteredQuestions = category.questions.filter(
          (q) =>
            q.question.toLowerCase().includes(query) ||
            q.answer.toLowerCase().includes(query)
        );

        if (titleMatch || filteredQuestions.length > 0) {
          return {
            ...category,
            questions: titleMatch ? category.questions : filteredQuestions,
          };
        }
        return null;
      })
      .filter((category): category is TCategory => category !== null);
  }, [searchQuery]);

  return (
    <section className="bg-white py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <div className="inline-block bg-green-100 px-4 py-2 rounded-full mb-4">
            <span className="text-green-700 font-semibold text-sm flex items-center gap-2">
              🎧 Support Client EDG Propulsé par l'IA
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-600">
            Questions Fréquentes
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            Découvrez comment Guinea Smart Electricity révolutionne le service
            client EDG grâce à l'intelligence artificielle
          </p>
        </div>

        <div className="mb-12 relative">
          <input
            placeholder="Rechercher dans la FAQ..."
            className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none text-gray-700 placeholder-gray-400 transition-all duration-200"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
            🔍
          </span>
        </div>

        <div className="space-y-8">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category, index) => (
              <div
                key={index}
                className="bg-green-50 rounded-3xl p-3 md:p-8 border-l-4 border-green-200 space-y-4"
              >
                <div className="flex items-center gap-3 pb-0">
                  <span className="text-2xl md:text-3xl">{category.icon}</span>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4 mt-6">
                  {category.questions.map((q, qIndex) => (
                    <FaqItem
                      key={qIndex}
                      question={q.question}
                      answer={q.answer}
                    />
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 space-y-4">
              <div className="text-5xl">🔍</div>
              <p className="text-xl text-gray-600">
                Aucune question ne correspond à votre recherche
              </p>
              <p className="text-gray-500">
                Essayez avec d'autres mots-clés ou contactez EVA pour de l'aide
              </p>
            </div>
          )}
        </div>

        <div className="mt-16 bg-gradient-to-r from-green-500 to-green-600 rounded-3xl p-8 md:p-12 text-center space-y-6 shadow-lg">
          <div className="text-5xl md:text-6xl">💬</div>
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            Vous ne trouvez pas votre réponse ?
          </h3>
          <p className="text-white text-base md:text-lg max-w-2xl mx-auto">
            EVA, notre assistant IA, est disponible 24h/24 pour améliorer votre
            expérience client EDG
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-10 rounded-full text-lg transition-all duration-200 hover:shadow-lg transform hover:scale-105 inline-block">
            Parler à EVA maintenant
          </button>
        </div>
      </div>
    </section>
  );
};

export default Faq;

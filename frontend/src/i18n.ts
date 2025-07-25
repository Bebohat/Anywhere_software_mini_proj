import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector) // auto-detect user language
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          welcome: "Welcome to the Dashboard",
          logout: "Logout",
          announcements: "Announcements",
          newAnnouncement: "Post New Announcement",
          newQuiz: "Create New Quiz",
          allQuizzes: "All Quizzes",
        },
      },
      fr: {
        translation: {
          welcome: "Bienvenue au tableau de bord",
          logout: "Se déconnecter",
          announcements: "Annonces",
          newAnnouncement: "Publier une annonce",
          newQuiz: "Créer un quiz",
          allQuizzes: "Tous les quiz",
        },
      },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

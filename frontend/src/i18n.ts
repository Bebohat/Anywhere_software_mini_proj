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
          // Home page
          welcome: "Welcome to the Student Dashboard",
          welcomeSubtitle: "Your gateway to learning excellence",
          login: "Log In",
          
          // Dashboard
          dashboard: "Dashboard",
          announcements: "Announcements",
          quizzes: "Quizzes",
          upcomingQuizzes: "Upcoming Quizzes",
          whatsDue: "What's due",
          viewAll: "All",
          addAnnouncement: "Add Announcement",
          addQuiz: "Add Quiz",
          logout: "Logout",
          searchPlaceholder: "Search courses, assignments...",
          welcomeMessage: "Welcome",
          dashboardSubtitle: "Here's what's happening with your courses today",
          
          // Navigation
          main: "MAIN",
          account: "ACCOUNT",
          profile: "Profile",
          settings: "Settings",
          helpCenter: "Help Center",
          
          // Forms
          postAnnouncement: "Post Announcement",
          createQuiz: "Create New Quiz",
          yourName: "Your name",
          announcement: "Announcement",
          courseName: "Course name",
          questionText: "Question text",
          answer1: "Answer 1",
          answer2: "Answer 2", 
          answer3: "Answer 3",
          answer4: "Answer 4",
          correctAnswer: "Correct answer",
          submit: "Submit",
          cancel: "Cancel",
          
          // Quiz related
          allQuizzes: "All Quizzes",
          questions: "questions",
          course: "Course",
          delete: "Delete",
          loading: "Loading...",
          error: "Error",
          
          // Announcement related
          newAnnouncement: "Post New Announcement",
          announcementContent: "Announcement content",
          author: "Author",
          date: "Date",
          likes: "likes",
          comments: "comments",
          
          // Common
          loadingText: "Loading...",
          errorText: "Error",
          noData: "No data available",
          save: "Save",
          edit: "Edit",
          close: "Close",
          
          // Language
          language: "Language",
          english: "English",
          french: "French",
          arabic: "Arabic",
        },
      },
      fr: {
        translation: {
          // Home page
          welcome: "Bienvenue au tableau de bord étudiant",
          welcomeSubtitle: "Votre passerelle vers l'excellence d'apprentissage",
          login: "Se connecter",
          
          // Dashboard
          dashboard: "Tableau de bord",
          announcements: "Annonces",
          quizzes: "Quiz",
          upcomingQuizzes: "Quiz à venir",
          whatsDue: "Ce qui est dû",
          viewAll: "Tout",
          addAnnouncement: "Ajouter une annonce",
          addQuiz: "Ajouter un quiz",
          logout: "Se déconnecter",
          searchPlaceholder: "Rechercher des cours, devoirs...",
          welcomeMessage: "Bienvenue",
          dashboardSubtitle: "Voici ce qui se passe avec vos cours aujourd'hui",
          
          // Navigation
          main: "PRINCIPAL",
          account: "COMPTE",
          profile: "Profil",
          settings: "Paramètres",
          helpCenter: "Centre d'aide",
          
          // Forms
          postAnnouncement: "Publier une annonce",
          createQuiz: "Créer un nouveau quiz",
          yourName: "Votre nom",
          announcement: "Annonce",
          courseName: "Nom du cours",
          questionText: "Texte de la question",
          answer1: "Réponse 1",
          answer2: "Réponse 2",
          answer3: "Réponse 3",
          answer4: "Réponse 4",
          correctAnswer: "Bonne réponse",
          submit: "Soumettre",
          cancel: "Annuler",
          
          // Quiz related
          allQuizzes: "Tous les quiz",
          questions: "questions",
          course: "Cours",
          delete: "Supprimer",
          loading: "Chargement...",
          error: "Erreur",
          
          // Announcement related
          newAnnouncement: "Publier une nouvelle annonce",
          announcementContent: "Contenu de l'annonce",
          author: "Auteur",
          date: "Date",
          likes: "j'aime",
          comments: "commentaires",
          
          // Common
          loadingText: "Chargement...",
          errorText: "Erreur",
          noData: "Aucune donnée disponible",
          save: "Enregistrer",
          edit: "Modifier",
          close: "Fermer",
          
          // Language
          language: "Langue",
          english: "Anglais",
          french: "Français",
          arabic: "Arabe",
        },
      },
      ar: {
        translation: {
          // Home page
          welcome: "مرحباً بك في لوحة تحكم الطالب",
          welcomeSubtitle: "بوابتك نحو التميز في التعلم",
          login: "تسجيل الدخول",
          
          // Dashboard
          dashboard: "لوحة التحكم",
          announcements: "الإعلانات",
          quizzes: "الاختبارات",
          upcomingQuizzes: "الاختبارات القادمة",
          whatsDue: "ما هو مستحق",
          viewAll: "الكل",
          addAnnouncement: "إضافة إعلان",
          addQuiz: "إضافة اختبار",
          logout: "تسجيل الخروج",
          searchPlaceholder: "البحث في الدورات والواجبات...",
          welcomeMessage: "مرحباً",
          dashboardSubtitle: "إليك ما يحدث في دوراتك اليوم",
          
          // Navigation
          main: "الرئيسية",
          account: "الحساب",
          profile: "الملف الشخصي",
          settings: "الإعدادات",
          helpCenter: "مركز المساعدة",
          
          // Forms
          postAnnouncement: "نشر إعلان",
          createQuiz: "إنشاء اختبار جديد",
          yourName: "اسمك",
          announcement: "الإعلان",
          courseName: "اسم الدورة",
          questionText: "نص السؤال",
          answer1: "الإجابة 1",
          answer2: "الإجابة 2",
          answer3: "الإجابة 3",
          answer4: "الإجابة 4",
          correctAnswer: "الإجابة الصحيحة",
          submit: "إرسال",
          cancel: "إلغاء",
          
          // Quiz related
          allQuizzes: "جميع الاختبارات",
          questions: "أسئلة",
          course: "الدورة",
          delete: "حذف",
          loading: "جاري التحميل...",
          error: "خطأ",
          
          // Announcement related
          newAnnouncement: "نشر إعلان جديد",
          announcementContent: "محتوى الإعلان",
          author: "الكاتب",
          date: "التاريخ",
          likes: "إعجابات",
          comments: "تعليقات",
          
          // Common
          loadingText: "جاري التحميل...",
          errorText: "خطأ",
          noData: "لا توجد بيانات متاحة",
          save: "حفظ",
          edit: "تعديل",
          close: "إغلاق",
          
          // Language
          language: "اللغة",
          english: "الإنجليزية",
          french: "الفرنسية",
          arabic: "العربية",
        },
      },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;

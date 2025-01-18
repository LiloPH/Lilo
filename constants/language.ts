import i18n from "i18next";
import { initReactI18next } from "react-i18next";

interface TranslationResource {
  [language: string]: {
    translation: {
      [key: string]: string;
    };
  };
}

const resources: TranslationResource = {
  en: {
    translation: {
      welcome: "Welcome",
      login: "Login",
      email: "Email",
      password: "Password",
      signUp: "Sign Up",
    },
  },
  ko: {
    translation: {
      welcome: "환영합니다",
      login: "로그인",
      email: "이메일",
      password: "비밀번호",
      signUp: "회원가입",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Language = "en" | "ko";

interface LanguageStore {
  language: Language;
  setLanguage: (lang: Language) => Promise<void>;
}

const useLanguageStore = create<LanguageStore>((set) => ({
  language: "en",
  setLanguage: async (lang) => {
    set({ language: lang });
    await AsyncStorage.setItem("language", lang);
  },
}));

AsyncStorage.getItem("language").then((lang) => {
  if (lang === "en" || lang === "ko") {
    useLanguageStore.setState({ language: lang });
  }
});

export default useLanguageStore;

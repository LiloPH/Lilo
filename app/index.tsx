import { Text, View, Button } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "nativewind";
import { router } from "expo-router";
import { useTranslation } from "react-i18next";

const Index = () => {
  const { colorScheme } = useColorScheme();
  const { t, i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
      <View className="flex-1 justify-center items-center bg-white dark:bg-slate-800">
        <Text className="text-2xl text-center font-bold dark:text-white">
          {t("welcome")}
        </Text>

        <View className="mt-4">
          <Button
            title={t("switchToKorean")}
            onPress={() => changeLanguage("ko")}
            disabled={i18n.language === "ko"}
          />
          <Button
            title={t("switchToEnglish")}
            onPress={() => changeLanguage("en")}
            disabled={i18n.language === "en"}
          />
        </View>

        <View className="mt-4">
          <Button
            title={t("login")}
            onPress={() => router.navigate("/login")}
          />
        </View>
      </View>
    </>
  );
};

export default Index;

import { Tabs } from "expo-router";
import {
  AntDesign,
  MaterialIcons,
  FontAwesome,
  Feather,
} from "@expo/vector-icons";
import React, { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import { useColorScheme } from "nativewind";
import { lightTheme, darkTheme } from "../constants/theme";
import { I18nextProvider } from "react-i18next";
import i18n from "../constants/language";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { Header } from "../components";
import { SafeAreaView } from "react-native-safe-area-context";

import "../global.css";
import { StatusBar } from "expo-status-bar";

SplashScreen.preventAutoHideAsync();

const EntryRootLayout = () => {
  const [isReady, setIsReady] = useState(false);
  const { colorScheme } = useColorScheme();
  const theme = colorScheme === "dark" ? darkTheme : lightTheme;

  useEffect(() => {
    async function prep() {
      try {
        await Font.loadAsync(AntDesign.font);
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (error) {
        console.warn(error);
      } finally {
        setIsReady(true);
      }
    }
    prep();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <I18nextProvider i18n={i18n}>
        <Tabs
          screenOptions={{
            tabBarActiveTintColor: "#D19E00",
            header: () => <Header />,
            tabBarStyle: {
              paddingVertical: 10,
              paddingHorizontal: 20,
            },
          }}
        >
          <Tabs.Screen
            name="index"
            options={{
              tabBarLabel: "Discover",
              headerTitle: "",
              tabBarIcon: ({ size, color }) => (
                <Feather name="home" size={size} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="commute"
            options={{
              tabBarLabel: "Commute",
              headerTitle: "",
              headerShown: false,
              tabBarIcon: ({ size, color }) => (
                <MaterialIcons name="commute" size={size} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="tour"
            options={{
              tabBarLabel: "Tour",
              headerTitle: "",
              tabBarIcon: ({ size, color }) => (
                <FontAwesome name="globe" size={size} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="place/[placeId]"
            options={{
              headerTitle: "",
              headerShown: false,
              href: null,
            }}
          />
          <Tabs.Screen
            name="auth"
            options={{
              headerTitle: "",
              headerShown: false,
              href: null,
            }}
          />
        </Tabs>
      </I18nextProvider>
      <StatusBar style="dark" backgroundColor="#FFFD86" />
    </View>
  );
};

export default EntryRootLayout;

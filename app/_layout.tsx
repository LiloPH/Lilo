import React from "react";
import { Stack } from "expo-router";
import { useColorScheme } from "nativewind";
import { lightTheme, darkTheme } from "../constants/theme";
import ToggleTheme from "../components/ToggleTheme";
import { I18nextProvider } from "react-i18next";
import i18n from "../constants/language";

import "../global.css";

const RootLayout = () => {
  const { colorScheme } = useColorScheme();
  const theme = colorScheme === "dark" ? darkTheme : lightTheme;

  return (
    <>
      <I18nextProvider i18n={i18n}>
        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor: theme.background,
            },
            headerTintColor: theme.textColor,
            headerRight: () => <ToggleTheme />,
          }}
        >
          <Stack.Screen
            name="index"
            options={{
              headerTitle: "",
            }}
          />
          <Stack.Screen
            name="login"
            options={{
              headerTitle: "",
            }}
          />
        </Stack>
      </I18nextProvider>
    </>
  );
};

export default RootLayout;

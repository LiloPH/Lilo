import React, { useEffect } from "react";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";

const AuthRootLayout = () => {
  return (
    <>
      <Stack initialRouteName="register">
        <Stack.Screen
          name="login"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="register"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
};

export default AuthRootLayout;

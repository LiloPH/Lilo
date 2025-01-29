import { View, Text, Button, StatusBar } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const register = () => {
  useEffect(() => {
    StatusBar.setBackgroundColor("transparent");

    return () => {
      StatusBar.setBackgroundColor("#FFFD86");
    };
  }, []);

  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <Text>register</Text>
      <Button title="Sign in" onPress={() => router.push("/auth/login")} />
    </SafeAreaView>
  );
};

export default register;

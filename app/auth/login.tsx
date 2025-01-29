import { View, Text, StatusBar } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const login = () => {
  useEffect(() => {
    StatusBar.setBackgroundColor("transparent");

    return () => {
      StatusBar.setBackgroundColor("#FFFD86");
    };
  }, []);

  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <Text>login</Text>
    </SafeAreaView>
  );
};

export default login;

import { View, Text, Button, Platform, StatusBar } from "react-native";
import React, { useEffect } from "react";
import { useLocalSearchParams, router } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";

const SinglePlace = () => {
  const { placeId } = useLocalSearchParams();

  useEffect(() => {
    StatusBar.setBackgroundColor("transparent");

    return () => {
      StatusBar.setBackgroundColor("#FFFD86");
    };
  }, [router]);

  return (
    <View className="flex-1 items-center justify-center">
      <AntDesign
        name="left"
        size={28}
        onPress={() => router.back()}
        className="absolute top-4 left-3"
      />
      <Text>{placeId}</Text>
      <Button title={"navigate"} onPress={() => router.navigate("_sitemap")} />
    </View>
  );
};

export default SinglePlace;

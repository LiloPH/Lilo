import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { router } from "expo-router";

const UserProfile = () => {
  const handlePress = () => {
    router.navigate("/auth");
  };

  return (
    <TouchableOpacity onPress={handlePress} className="mr-4">
      <FontAwesome name="user-circle" size={28} color="black" />
    </TouchableOpacity>
  );
};

export default UserProfile;

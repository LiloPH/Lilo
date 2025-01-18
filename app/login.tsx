import { Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useTranslation } from "react-i18next";

const Login = () => {
  const { t } = useTranslation();

  return (
    <View className="flex-1 justify-end items-center bg-brand-100">
      <Image
        className="w-64 h-64 mb-8"
        source={require("../assets/2Artboard 2 copy 4@4x 1.png")}
        resizeMode="contain"
      />

      <View className="bg-white w-full h-3/4 rounded-t-3xl p-6">
        <Text className="text-3xl font-bold text-center text-gray-800 mb-6">
          {t("Welcome Back!")}
        </Text>
        <Text className="text-md font-normal text-center">
          Login to continue
        </Text>

        <View className="mb-4">
          <Text className="text-gray-700 mb-2">Email</Text>
          <View className="border border-gray-300 rounded-lg p-3">
            <Text className="text-gray-500">Enter your email</Text>
          </View>
        </View>

        <View className="mb-6">
          <Text className="text-gray-700 mb-2">Password</Text>
          <View className="border border-gray-300 rounded-lg p-3">
            <Text className="text-gray-500">Enter your password</Text>
          </View>
        </View>

        <TouchableOpacity className="bg-blue-500 rounded-lg p-4 items-center">
          <Text className="text-white font-bold text-lg">Login</Text>
        </TouchableOpacity>

        <View className="mt-4 flex-row justify-center">
          <Text className="text-gray-600">Don't have an account? </Text>
          <TouchableOpacity>
            <Text className="text-blue-500 font-bold">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

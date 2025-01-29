import { View, Text, Image, TouchableOpacity, Animated } from "react-native";
import React, { FC, useRef } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";

interface PlacesCardProps {
  placeId: string;
  image: string;
  name: string;
  rating: number;
  location: string;
  price?: number;
  type?: string;
}

const PlacesCard: FC<PlacesCardProps> = ({
  placeId,
  image,
  name,
  rating,
  location,
  price,
  type,
}) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 5,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  return (
    <TouchableOpacity
      onPress={() => router.navigate(`/place/${placeId}`)}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      activeOpacity={1}
      className="flex-col bg-white rounded-lg shadow-md mb-2"
      style={{ overflow: "hidden", borderRadius: 10 }}
    >
      <Image source={{ uri: image }} style={{ aspectRatio: 1 }} />
      <Animated.View
        className="bg-white rounded-lg "
        style={{
          transform: [{ scale: scaleAnim }],
          borderRadius: 10,
          padding: 5,
        }}
      >
        <View>
          <Text numberOfLines={1}>{name}</Text>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <AntDesign name="star" size={14} color="#FFD700" />
            <Text>{rating.toFixed(1)}</Text>
          </View>

          <Text numberOfLines={1}>{location}</Text>

          {price && <Text>₱{price}</Text>}
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default PlacesCard;

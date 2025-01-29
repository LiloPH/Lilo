import {
  Text,
  View,
  FlatList,
  RefreshControl,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { PlaceCard } from "../components";
import { scale, moderateScale } from "react-native-size-matters";

interface Place {
  id: string;
  image: string;
  name: string;
  rating: number;
  location: string;
  price?: number;
  type?: string;
}

const Discover = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const screenWidth = Dimensions.get("window").width;
  const cardWidth = (screenWidth - scale(18)) / 2;

  const places: Place[] = [
    {
      id: "robertos",
      image:
        "https://2.img-dpreview.com/files/p/E~C1000x0S4000x4000T1200x1200~articles/3925134721/0266554465.jpeg",
      name: "Roberto's Restaurant",
      rating: 4.5,
      location: "New York, USA",
      price: 25,
      type: "Italian Cuisine",
    },
    {
      id: "central-park",
      image:
        "https://2.img-dpreview.com/files/p/E~C1000x0S4000x4000T1200x1200~articles/3925134721/0266554465.jpeg",
      name: "Central Park",
      rating: 4.8,
      location: "New York, USA",
      type: "Park",
    },
    {
      id: "robertos1",
      image:
        "https://2.img-dpreview.com/files/p/E~C1000x0S4000x4000T1200x1200~articles/3925134721/0266554465.jpeg",
      name: "Roberto's Restaurant",
      rating: 4.5,
      location: "New York, USA",
      price: 25,
      type: "Italian Cuisine",
    },
    {
      id: "central-park1",
      image:
        "https://2.img-dpreview.com/files/p/E~C1000x0S4000x4000T1200x1200~articles/3925134721/0266554465.jpeg",
      name: "Central Park",
      rating: 4.8,
      location: "New York, USA",
      type: "Park",
    },
    {
      id: "robertos2",
      image:
        "https://2.img-dpreview.com/files/p/E~C1000x0S4000x4000T1200x1200~articles/3925134721/0266554465.jpeg",
      name: "Roberto's Restaurant",
      rating: 4.5,
      location: "New York, USA",
      price: 25,
      type: "Italian Cuisine",
    },
    {
      id: "central-park2",
      image:
        "https://2.img-dpreview.com/files/p/E~C1000x0S4000x4000T1200x1200~articles/3925134721/0266554465.jpeg",
      name: "Central Park",
      rating: 4.8,
      location: "New York, USA",
      type: "Park",
    },
  ];

  const filteredPlaces = selectedType
    ? places.filter((place) => place.type === selectedType)
    : places;

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <View className="flex-1 bg-gray-50">
      <FlatList
        data={filteredPlaces}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ width: cardWidth }} className="px-1">
            <PlaceCard
              placeId={item.id}
              image={item.image}
              name={item.name}
              rating={item.rating}
              location={item.location}
              price={item.price}
              type={item.type}
            />
          </View>
        )}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        contentContainerStyle={{
          paddingHorizontal: scale(12),
          paddingTop: scale(16),
          paddingBottom: scale(32),
        }}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor="#4F46E5"
            colors={["#4F46E5"]}
          />
        }
        ListEmptyComponent={() => (
          <View className="flex-1 items-center justify-center py-20">
            <Text
              className="text-gray-500"
              style={{ fontSize: moderateScale(16) }}
            >
              No places available
            </Text>
          </View>
        )}
        ListHeaderComponent={() => (
          <View className="mb-4 flex flex-row items-center gap-2 px-2">
            <TouchableOpacity onPress={() => setSelectedType(null)}>
              <Text
                className="text-2xl font-bold text-gray-900"
                style={{ fontSize: moderateScale(18) }}
              >
                Discover
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelectedType(null)}>
              <Text
                className="text-2xl text-gray-900"
                style={{ fontSize: moderateScale(18) }}
              >
                Top Picks
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default Discover;

import React from "react";
import {
  View,
  TextInput,
  Image,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import UserProfile from "./UserProfile";
import { vs, s } from "react-native-size-matters";
import { LinearGradient } from "expo-linear-gradient";

const Header = () => {
  return (
    <LinearGradient
      colors={["#FFFD86", "#FFE60D"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.container}
    >
      <View style={styles.topRow}>
        <Image source={require("../../assets/Lilo.png")} style={styles.image} />
        <UserProfile />
      </View>
      <View style={styles.searchBar}>
        <Feather name="search" size={20} style={styles.searchIcon} />
        <TextInput placeholder="Search..." style={styles.searchInput} />
      </View>
    </LinearGradient>
  );
};

const statusBarHeight = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;

const styles = StyleSheet.create({
  container: {
    height: vs(100),
    width: "100%",
    padding: s(10),
    marginTop: statusBarHeight,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    width: s(70),
    height: s(40),
    borderRadius: s(10),
  },
  searchBar: {
    marginTop: vs(10),
    backgroundColor: "white",
    borderRadius: s(20),
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: s(10),
  },
  searchIcon: {
    marginRight: s(8),
    color: "#666",
  },
  searchInput: {
    flex: 1,
    paddingVertical: s(8),
    fontSize: s(14),
  },
});

export default Header;

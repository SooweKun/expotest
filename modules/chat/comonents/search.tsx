import { SearchIco } from "@/assets/images/search";
import { useRouter } from "expo-router";
import { FC } from "react";
import { TouchableOpacity, Text, Image, Animated, View } from "react-native";

interface Props {
  searchHeight: Animated.Value;
}

export const Search: FC<Props> = ({ searchHeight }) => {
  const router = useRouter();

  return (
    <Animated.View
      style={{
        width: "100%",
        height: searchHeight,
        backgroundColor: "#1a1a1a",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <TouchableOpacity
        onPress={() => router.push("/chat/search")}
        style={{
          width: 302,
          height: 35,
          backgroundColor: "#101010",
          borderRadius: 8,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 6,
        }}
      >
        <SearchIco fill="white" />
        <Text style={{ color: "white", fontWeight: 500 }}>Поиск</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

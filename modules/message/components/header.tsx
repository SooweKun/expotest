import { OnlineTrecker } from "@/modules/profile/components/onlineTrecker";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  Image,
  Pressable,
} from "react-native";

export const Header = () => {
  const router = useRouter();
  const { title } = useLocalSearchParams();

  return (
    <View>
      <SafeAreaView style={{ backgroundColor: "#1a1a1a", height: 54 }} />
      <View
        style={{
          backgroundColor: "#1a1a1a",
          height: 42,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingLeft: 15,
          paddingRight: 15,
        }}
      >
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={{ color: "white" }}>Назад</Text>
        </TouchableOpacity>
        <Text style={{ color: "white" }}>{title}</Text>
        <Pressable
          style={{ position: "relative" }}
          onPress={() => router.push("/chat/enemyProfile")}
        >
          <OnlineTrecker className={{ width: 11, height: 11 }} />
          <Image
            style={{
              width: 30,
              height: 30,
              borderRadius: 4,
              backgroundColor: "gray",
            }}
          />
        </Pressable>
      </View>
    </View>
  );
};

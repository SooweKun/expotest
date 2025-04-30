import { ProfileIco } from "@/assets/images/profileIco";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";

export default function Message() {
  const { title } = useLocalSearchParams();
  const router = useRouter();

  return (
    <SafeAreaView
      style={{
        width: "100%",
        height: 100,
        borderBottomWidth: 1,
        borderBottomColor: "black",
      }}
    >
      <View
        style={{
          width: "100%",
          height: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
        <Text onPress={() => router.push("/chat")}>Назад</Text>
        <Text>{title}</Text>
        <TouchableOpacity
          style={{
            width: 33,
            height: 33,
            backgroundColor: "black",
            borderRadius: 4,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ProfileIco focused={false} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

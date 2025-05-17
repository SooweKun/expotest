import { Back } from "@/assets/images/back";
import { UseIcoUserStore } from "@/store/useIcoStore";
import { useRouter } from "expo-router";
import { TouchableOpacity, View, Image, Text } from "react-native";

export const Header = () => {
  const router = useRouter();
  const { userIco } = UseIcoUserStore();

  return (
    <View
      style={{ height: 44, backgroundColor: "#1a1a1a", position: "relative" }}
    >
      <TouchableOpacity
        onPress={() => router.back()}
        style={{
          backgroundColor: "rgba(240, 240, 240, 0.4);",
          width: 26,
          height: 26,
          position: "absolute",
          borderRadius: 100,
          left: 15,
          top: 2,
          justifyContent: "center",
          alignItems: "center",
          paddingRight: 2,
        }}
      >
        <Back />
      </TouchableOpacity>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 5,
        }}
      >
        <Text style={{ color: "white", fontSize: 17, fontWeight: 600 }}>
          Archive
        </Text>
        {userIco && (
          <Image source={userIco} style={{ width: 24, height: 24 }} />
        )}
      </View>
    </View>
  );
};

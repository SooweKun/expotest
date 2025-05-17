import { Archive } from "@/assets/images/archive";
import { UseIcoUserStore } from "@/store/useIcoStore";
import { useRouter } from "expo-router";
import { View, Text, Image, TouchableOpacity } from "react-native";

export const Header = () => {
  const { userIco } = UseIcoUserStore();
  const router = useRouter();

  const onClick = () => {
    router.push({
      pathname: "/chat/archive",
    });
  };

  return (
    <View
      style={{
        backgroundColor: "#1a1a1a",
        gap: 15,
        height: 40,
        width: "100%",
        paddingRight: 15,
        paddingLeft: 15,
        alignItems: "center",
      }}
    >
      <View
        style={{
          position: "relative",
          width: "100%",
        }}
      >
        <TouchableOpacity
          onPress={onClick}
          style={{
            width: 24,
            height: 24,
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            left: 15,
            top: 3,
          }}
        >
          <Archive />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            width: "100%",
            gap: 7,
            marginTop: 3,
          }}
        >
          <Text style={{ color: "white", fontSize: 17, fontWeight: 600 }}>
            Chat
          </Text>
          {userIco && (
            <Image source={userIco} style={{ width: 20, height: 20 }} />
          )}
        </View>
      </View>
    </View>
  );
};

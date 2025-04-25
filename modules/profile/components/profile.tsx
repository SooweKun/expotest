import { UseIcoStore } from "@/store/useIcoStore";
import { Image, Text, TouchableOpacity, View } from "react-native";

export const Profile = () => {
  const { ico } = UseIcoStore();

  return (
    <View
      style={{
        width: "100%",
        height: 150,
        flexDirection: "row",
        justifyContent: "center",
        gap: 20,
        padding: 10,
        position: "relative",
      }}
    >
      <Text style={{ position: "absolute", left: 10, top: 10 }}>@morteit</Text>
      <View
        style={{
          width: 184,
          height: 131,
          alignItems: "center",
          gap: 10,
        }}
      >
        <View
          style={{
            width: 184,
            height: 103,
            marginTop: 10,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              width: 45,
              height: 103,
              alignItems: "flex-end",
              justifyContent: "space-between",
            }}
          >
            <Image style={{ width: 22, height: 22 }} source={ico} />
            <Image
              style={{ width: 22, height: 22, marginRight: 23 }}
              source={ico}
            />
            <Image style={{ width: 22, height: 22 }} source={ico} />
          </View>
          <Image
            style={{ width: 100, height: 100, borderRadius: "100%" }}
            source={require("@/assets/images/foto1.jpg")}
          />
          <View
            style={{
              width: 45,
              height: 103,
              alignItems: "flex-start",
              justifyContent: "space-between",
            }}
          >
            <Image style={{ width: 22, height: 22 }} source={ico} />
            <Image
              style={{ width: 22, height: 22, marginLeft: 23 }}
              source={ico}
            />
            <Image style={{ width: 22, height: 22 }} source={ico} />
          </View>
        </View>
        <View style={{ flexDirection: "row", gap: 5 }}>
          <Text style={{ color: "black", fontWeight: 500 }}>
            на моем крыле мифрил
          </Text>
          <Text style={{ color: "black", fontWeight: 500 }}>()</Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          width: 47,
          height: 22,
          borderRadius: 6,
          backgroundColor: "black",
          borderWidth: 1,
          borderColor: "white",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          right: 13,
          top: 10,
        }}
      >
        <Text style={{ color: "white" }}>изм</Text>
      </TouchableOpacity>
    </View>
  );
};

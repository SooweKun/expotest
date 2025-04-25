import { ProfileIco } from "@/assets/images/profileIco";
import { useColorStore } from "@/store/useColorStore";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { Modal } from "./modal";
import { useState } from "react";

export const Content = () => {
  const { color } = useColorStore();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    router.push("/settings");
  };

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderColor: "black",
        borderWidth: 2,
        alignItems: "center",
        paddingTop: 15,
        gap: 10,
        position: "relative",
      }}
    >
      <View
        style={{
          width: 328,
          height: 95,
          backgroundColor: "black",
          borderColor: "white",
          borderWidth: 1,
          borderRadius: 7,
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={handleClick}
          style={{
            width: "100%",
            height: 47.5,
            flexDirection: "row",
            paddingLeft: 20,
            gap: 12,
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              width: 23,
              height: 23,
              borderRadius: 50,
              borderColor: "white",
              backgroundColor: color,
              borderWidth: 1,
              overflow: "hidden",
            }}
          />
          <Text style={{ color: "white" }}>сменить тему</Text>
        </TouchableOpacity>
        <View
          style={{ width: 299, height: 0.5, backgroundColor: "white" }}
        ></View>
        <TouchableOpacity
          onPress={handleOpen}
          style={{
            width: "100%",
            height: 47.5,
            flexDirection: "row",
            paddingLeft: 20,
            gap: 8,
            alignItems: "center",
          }}
        >
          <Image
            style={{ width: 23, height: 23 }}
            source={require("@/assets/images/ico/ico.webp")}
          />
          <Text style={{ color: "white" }}> сменить иконку</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          width: 328,
          height: 47.5,
          flexDirection: "row",
          paddingLeft: 20,
          gap: 8,
          alignItems: "center",
          backgroundColor: "black",
          borderColor: "white",
          borderWidth: 1,
          borderRadius: 7,
        }}
      >
        <ProfileIco focused={false} />
        <Text style={{ color: "white" }}>Мой профиль</Text>
      </TouchableOpacity>
      {open && <Modal handleOpen={handleOpen} /> }
    </View>
  );
};

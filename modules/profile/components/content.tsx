import { ProfileIco } from "@/assets/images/profileIco";
import { useColorStore } from "@/store/useColorStore";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { useState } from "react";
import { UseIcoStore, UseIcoUserStore } from "@/store/useIcoStore";
import { Modal } from "@/components/modal";

const iconfy = [
  { src: require("@/assets/images/ico/ico.webp") },
  { src: require("@/assets/images/ico/Ico1.webp") },
  { src: require("@/assets/images/ico/Ico2.webp") },
  { src: require("@/assets/images/ico/Ico3.webp") },
  { src: require("@/assets/images/ico/Ico4.png") },
  { src: require("@/assets/images/ico/Ico5.webp") },
  { src: require("@/assets/images/ico/Ico6.webp") },
  { src: require("@/assets/images/ico/Ico7.png") },
  { src: require("@/assets/images/ico/Ico8.webp") },
  { src: require("@/assets/images/ico/Ico9.png") },
  { src: require("@/assets/images/ico/Ico10.webp") },
  { src: require("@/assets/images/ico/Ico11.webp") },
  { src: require("@/assets/images/ico/Ico12.webp") },
  { src: require("@/assets/images/ico/Ico13.png") },
  { src: require("@/assets/images/ico/Ico14.png") },
  { src: require("@/assets/images/ico/Ico15.png") },
  { src: require("@/assets/images/ico/Ico16.webp") },
  { src: require("@/assets/images/ico/Ico17.webp") },
  { src: require("@/assets/images/ico/Ico18.webp") },
  { src: require("@/assets/images/ico/Ico19.png") },
  { src: require("@/assets/images/ico/Ico20.webp") },
  { src: require("@/assets/images/ico/Ico21.webp") },
  { src: require("@/assets/images/ico/Ico22.webp") },
  { src: require("@/assets/images/ico/Ico23.webp") },
  { src: require("@/assets/images/ico/Ico24.png") },
  { src: require("@/assets/images/ico/Ico25.webp") },
  { src: require("@/assets/images/ico/Ico26.webp") },
];

export const Content = () => {
  const { color } = useColorStore();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [isUserIcon, setIsUserIcon] = useState(false);
  const { setIco } = UseIcoStore();
  const { setUserIco } = UseIcoUserStore();

  const handleClick = () => {
    router.push("/settings");
  };

  const handleOpen = (isUserIcon: boolean) => {
    setIsUserIcon(isUserIcon);
    setOpen((prev) => !prev);
  };

  const handleIconSelect = (src: any) => {
    if (isUserIcon) {
      setUserIco(src);
    } else {
      setIco(src);
    }
    setOpen(false);
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
          <View
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
          onPress={() => handleOpen(false)}
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
          <Text style={{ color: "white" }}>сменить иконку</Text>
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
      <TouchableOpacity
        onPress={() => handleOpen(true)}
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
        <Image
          style={{ width: 23, height: 23 }}
          source={require("@/assets/images/ico/Ico6.webp")}
        />
        <Text style={{ color: "white" }}>сменить иконку имени</Text>
      </TouchableOpacity>
      {open && (
        <Modal handleOpen={() => setOpen(false)}>
          {iconfy.map(({ src }, index) => (
            <TouchableOpacity
              onPress={() => handleIconSelect(src)}
              key={index}
              style={{
                width: 30,
                height: 30,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image style={{ width: 25, height: 25 }} source={src} />
            </TouchableOpacity>
          ))}
        </Modal>
      )}
    </View>
  );
};

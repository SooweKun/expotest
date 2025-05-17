import { Change } from "@/assets/images/change";
import { Emogi } from "@/assets/images/emogi";
import { Icon } from "@/assets/images/icon";
import { Modal } from "@/components/modal";
import { useColorStore } from "@/store/useColorStore";
import { UseIcoStore, UseIcoUserStore } from "@/store/useIcoStore";
import { useState } from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";

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
  const [open, setOpen] = useState(false);
  const [isUserIcon, setIsUserIcon] = useState(false);
  const { setIco } = UseIcoStore();
  const { setUserIco } = UseIcoUserStore();

  const handleOpen = (isUserIcon: boolean) => {
    setIsUserIcon(isUserIcon);
    setOpen(true);
  };

  const handleIconSelect = (src: string) => {
    if (isUserIcon) {
      setUserIco(src);
    } else {
      setIco(src);
    }
    setOpen(false);
  };

  return (
    <View style={{ gap: 15, flex: 1 }}>
      <View
        style={{
          height: 95,
          backgroundColor: "#1a1a1a",
          borderRadius: 7,
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => handleOpen(false)}
          style={{
            width: "100%",
            height: 47.5,
            flexDirection: "row",
            paddingLeft: 20,
            gap: 12,
            alignItems: "center",
          }}
        >
          <Icon color={color} />

          <Text style={{ color: color ? color : "white" }}>сменить иконку</Text>
        </TouchableOpacity>
        <View
          style={{
            width: 299,
            height: 0.5,
            backgroundColor: color ? color : "white",
          }}
        ></View>
        <TouchableOpacity
          onPress={() => handleOpen(true)}
          style={{
            width: "100%",
            height: 47.5,
            flexDirection: "row",
            paddingLeft: 20,
            gap: 8,
            alignItems: "center",
          }}
        >
          <Emogi color={color} />
          <Text style={{ color: color ? color : "white" }}>
            сменить эмоджи-статус
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: 95,
          backgroundColor: "#1a1a1a",
          borderRadius: 7,
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            width: "100%",
            height: 47.5,
            flexDirection: "row",
            paddingLeft: 20,
            gap: 12,
            alignItems: "center",
          }}
        >
          <Text style={{ color: color ? color : "white", fontSize: 24 }}>
            @
          </Text>
          <Text style={{ color: color ? color : "white" }}>изменить uid</Text>
        </TouchableOpacity>
        <View
          style={{
            width: 299,
            height: 0.5,
            backgroundColor: color ? color : "white",
          }}
        ></View>
        <TouchableOpacity
          style={{
            width: "100%",
            height: 47.5,
            flexDirection: "row",
            paddingLeft: 20,
            gap: 8,
            alignItems: "center",
          }}
        >
          <Change color={color} />
          <Text style={{ color: color ? color : "white" }}>изменить имя</Text>
        </TouchableOpacity>
      </View>
      {open && (
        <Modal setOpen={setOpen}>
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

import { UseIcoStore } from "@/store/useIcoStore";
import { FC } from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";

interface Props {
  handleOpen: () => void;
}

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

export const Modal: FC<Props> = ({ handleOpen }) => {
  const { setIco } = UseIcoStore();

  return (
    <TouchableOpacity
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        alignItems: "center",
        paddingTop: 5,
      }}
      onPress={handleOpen}
    >
      <View
        onStartShouldSetResponder={() => true}
        style={{
          width: 328,
          height: 300,
          backgroundColor: "black",
          borderRadius: 25,
        }}
      >
        <Text
          style={{
            width: "100%",
            height: 30,
            borderBottomWidth: 1,
            borderBottomColor: "gray",
            color: "white",
            textAlign: "center",
            paddingTop: 5,
          }}
        >
          Выберите иконку
        </Text>
        <View
          style={{
            flexWrap: "wrap",
            flexDirection: "row",
            padding: 5,
            gap: 5,
          }}
        >
          {iconfy.map(({ src }, index) => (
            <TouchableOpacity
              onPress={() => {
                setIco(src);
                handleOpen();
              }}
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
        </View>
      </View>
    </TouchableOpacity>
  );
};

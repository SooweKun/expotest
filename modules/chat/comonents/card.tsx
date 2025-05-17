import { useBackgroundStore, useColorStore } from "@/store/useColorStore";
import { useRouter } from "expo-router";
import { FC } from "react";
import { TouchableOpacity, View, Image, Text } from "react-native";

interface Props {
  title: string;
  description: string;
  img: any;
  id: number;
}

export const Card: FC<Props> = ({ title, img, id, description }) => {
  const { color, selectColor } = useColorStore();
  const { background } = useBackgroundStore();
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() =>
        router.push({
          pathname: "/chat/message",
          params: { id: id, title: title },
        })
      }
      style={{
        width: 391,
        height: 80,
        backgroundColor: "black",
        flexDirection: "row",

      }}
    >
      <View
        style={{
          width: 83,
          height: 80,
          justifyContent: "center",
          alignItems: "center",
          shadowColor: selectColor ? selectColor : "white",
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.7,
          shadowRadius: 7,
        }}
      >
        <Image
          style={{
            width: 62,
            height: 62,
            backgroundColor: "#413838",
            borderRadius: 60,
          }}
          source={img}
        />
      </View>
      <View
        style={{
          flex: 1,
          borderBottomWidth: 1,
          borderColor: background ? background : "white",
          paddingLeft: 10,
          paddingRight: 20,
          paddingTop: 6,
        }}
      >
        <Text
          style={{
            color: color ? color : "#9D9D9D",
            fontSize: 16,
            fontWeight: "500",
          }}
        >
          {title}
        </Text>
        <Text style={{ color: "white", fontSize: 13, fontWeight: "400" }}>
          {description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

import { Back } from "@/assets/images/back";
import { Card } from "@/modules/chat/comonents/card";
import { useRouter } from "expo-router";
import {
  View,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Pressable,
  Keyboard,
} from "react-native";

const users = [
  {
    title: "Morteit",
    img: require("@/assets/images/pr.png"),
    description: "desc",
    id: 1,
  },
];

export default function Search() {
  const router = useRouter();

  const onClick = () => {
    Keyboard.dismiss();
  };

  return (
    <Pressable style={{ flex: 1, backgroundColor: "black" }} onPress={onClick}>
      <SafeAreaView style={{ backgroundColor: "#1a1a1a", height: 50 }} />
      <View
        style={{
          backgroundColor: "#1a1a1a",
          width: "100%",
          height: 45,
          flexDirection: "row",
          justifyContent: "center",
          paddingTop: 2,
          gap: 20,
        }}
      >
        <TouchableOpacity
          onPress={() => router.back()}
          style={{
            backgroundColor: "rgba(240, 240, 240, 0.4);",
            width: 26,
            height: 26,
            borderRadius: 100,
            justifyContent: "center",
            alignItems: "center",
            paddingRight: 2,
            marginTop: 3,
          }}
        >
          <Back />
        </TouchableOpacity>
        <TextInput
          placeholder="Поиск"
          style={{
            width: 280,
            height: 35,
            backgroundColor: "#101010",
            borderRadius: 8,
            paddingLeft: 15,
            color: "white",
          }}
        />
      </View>
      {users.map(({ id, title, img, description }) => (
        <Card
          key={id}
          title={title}
          img={img}
          id={id}
          description={description}
        />
      ))}
    </Pressable>
  );
}

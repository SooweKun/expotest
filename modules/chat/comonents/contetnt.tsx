import { useNavigation, useRouter } from "expo-router";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";

const Users = [
  {
    title: "Morteit",
    img: require("@/assets/images/pr.png"),
    id: 1,
  },
  {
    title: "Vanya",
    img: require("@/assets/images/pr.png"),
    id: 2,
  },
  {
    title: "Egor",
    img: require("@/assets/images/pr.png"),
    id: 3,
  },
  {
    title: "Nikita",
    img: require("@/assets/images/pr.png"),
    id: 4,
  },
  {
    title: "Slava",
    img: require("@/assets/images/pr.png"),

    id: 5,
  },
  {
    title: "Dima",
    img: require("@/assets/images/pr.png"),
    id: 6,
  },
  {
    title: "Maks",
    img: require("@/assets/images/pr.png"),
    id: 7,
  },
  {
    title: "Slava2",
    img: require("@/assets/images/pr.png"),
    id: 8,
  },
  {
    title: "Slava3",
    img: require("@/assets/images/pr.png"),
    id: 9,
  },
  {
    title: "Slava4",
    img: require("@/assets/images/pr.png"),
    id: 10,
  },
  {
    title: "Slava5",
    img: require("@/assets/images/pr.png"),
    id: 11,
  },
  {
    title: "Slava6",
    img: require("@/assets/images/pr.png"),
    id: 12,
  },
  {
    title: "Slava7",
    img: require("@/assets/images/pr.png"),
    id: 13,
  },
];

export const Content = () => {
  const router = useRouter();

  return (
    <ScrollView style={{ flex: 1, }}>
      {Users.map(({ title, img, id }) => {
        return (
          <TouchableOpacity
            onPress={() =>
              router.push({ pathname: "/chat/message", params: { title } })
            }
            key={id}
            style={{
              width: "100%",
              height: 75,
              backgroundColor: "gray",
              borderBottomColor: "black",
              borderWidth: 1,
              borderColor: "transparent",
            }}
          >
            <Text>{title}</Text>
            <Image source={img} />
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

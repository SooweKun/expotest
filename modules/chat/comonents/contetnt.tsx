import { useNavigation, useRouter } from "expo-router";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { Card } from "./card";
import { FC } from "react";

const Users = [
  {
    title: "Morteit",
    img: require("@/assets/images/pr.png"),
    description: "desc",
    id: 1,
  },
  {
    title: "Vanya",
    img: require("@/assets/images/pr.png"),
    description: "desc",
    id: 2,
  },
  {
    title: "Egor",
    img: require("@/assets/images/pr.png"),
    description: "desc",
    id: 3,
  },
  {
    title: "Nikita",
    img: require("@/assets/images/pr.png"),
    description: "desc",
    id: 4,
  },
  {
    title: "Slava",
    img: require("@/assets/images/pr.png"),
    description: "desc",

    id: 5,
  },
  {
    title: "Dima",
    img: require("@/assets/images/pr.png"),
    description: "desc",
    id: 6,
  },
  {
    title: "Maks",
    img: require("@/assets/images/pr.png"),
    description: "desc",
    id: 7,
  },
  {
    title: "Slava2",
    img: require("@/assets/images/pr.png"),
    description: "desc",
    id: 8,
  },
  {
    title: "Slava3",
    img: require("@/assets/images/pr.png"),
    description: "desc",
    id: 9,
  },
  {
    title: "Slava4",
    img: require("@/assets/images/pr.png"),
    description: "desc",
    id: 10,
  },
  {
    title: "Slava5",
    img: require("@/assets/images/pr.png"),
    description: "desc",
    id: 11,
  },
  {
    title: "Slava6",
    img: require("@/assets/images/pr.png"),
    description: "desc",
    id: 12,
  },
  {
    title: "Slava7",
    img: require("@/assets/images/pr.png"),
    description: "desc",
    id: 13,
  },
  {
    title: "Slava7",
    img: require("@/assets/images/pr.png"),
    description: "desc",
    id: 14,
  },
  {
    title: "Slava7",
    img: require("@/assets/images/pr.png"),
    description: "desc",
    id: 15,
  },
  {
    title: "Slava7",
    img: require("@/assets/images/pr.png"),
    description: "desc",
    id: 16,
  },
  {
    title: "Slava7",
    img: require("@/assets/images/pr.png"),
    description: "desc",
    id: 17,
  },
  {
    title: "Slava7",
    img: require("@/assets/images/pr.png"),
    description: "desc",
    id: 18,
  },
  {
    title: "Slava7",
    img: require("@/assets/images/pr.png"),
    description: "desc",
    id: 19,
  },
  {
    title: "Slava7",
    img: require("@/assets/images/pr.png"),
    description: "desc",
    id: 20,
  },

];

interface Props {
  handleScroll: (event: any) => void;
}

export const Content: FC<Props> = ({ handleScroll }) => {
  return (
    <ScrollView
      style={{ flex: 1 }}
      bounces={false}
      scrollEventThrottle={150}
      onScroll={handleScroll}
    >
      {Users.map(({ title, img, id, description }) => (
        <Card
          title={title}
          img={img}
          id={id}
          key={id}
          description={description}
        />
      ))}
    </ScrollView>
  );
};

import { View } from "react-native";
import { Profile } from "./components/profile";
import { Content } from "./components/content";

export const ProfileModule = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <Profile />
      <Content />
    </View>
  );
};

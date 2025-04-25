import { View } from "react-native";
import { Content } from "./components/content";
import { Profile } from "./components/profile";

export const ProfileModule = () => {
  return (
    <View style={{gap: 20, flexDirection: "column", width: "100%"}}>
      <Profile />
      <Content />
    </View>
  );
};

import { View } from "react-native";
import { ColorPicker } from "./components/colorPiker";
import { Content } from "./components/content";

export const SettingsModule = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
        gap: 15,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 15,
      }}
    >
      <ColorPicker />
      <Content />
    </View>
  );
};

import { Change } from "@/assets/images/change";
import { ColorPicker } from "@/modules/settings/components/colorPiker";
import { SettingsModule } from "@/modules/settings/Module";
import { UseIcoUserStore } from "@/store/useIcoStore";
import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

export default function Settings() {
  const { userIco } = UseIcoUserStore();

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView
        style={{
          backgroundColor: "#1A1A1A",
          height: 99,
          justifyContent: "center",
        }}
      >
        <StatusBar barStyle="light-content" />
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            gap: 5,
            flexDirection: "row",
          }}
        >
          <Text style={{ color: "white", fontWeight: 500 }}>Settings</Text>
          {userIco && (
            <Image source={userIco} style={{ width: 22, height: 22 }} />
          )}
        </View>
      </SafeAreaView>
      <SettingsModule />
    </View>
  );
}

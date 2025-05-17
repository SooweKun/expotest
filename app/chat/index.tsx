import { ChatModule } from "@/modules/chat/Module";
import { SafeAreaView, StatusBar, Pressable } from "react-native";

export default function Index() {
  return (
    <Pressable style={{ flex: 1 }}>
      <SafeAreaView
        style={{
          backgroundColor: "#1a1a1a",
          height: 54,
        }}
      >
        <StatusBar barStyle="light-content" />
      </SafeAreaView>
      <ChatModule />
    </Pressable>
  );
}

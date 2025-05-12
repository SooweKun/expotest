import { ChatIco } from "@/assets/images/chat";
import { ProfileIco } from "@/assets/images/profileIco";
import { SettingsIco } from "@/assets/images/settings";
import { useColorStore } from "@/store/useColorStore";
import { Tabs } from "expo-router";
import { View, Text } from "react-native";

export default function RootLayout() {
  const { color, selectColor } = useColorStore();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopWidth: 0,
          backgroundColor: "#1C1C1C",
          height: 80,
        },
      }}
    >
      <Tabs.Screen name="index" options={{ href: null }} />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                width: 50,
                marginTop: 26,
                gap: 4,
              }}
            >
              <ProfileIco focused={focused} />
              <Text
                style={{ fontSize: 11, color: focused ? selectColor : color }}
              >
                Profile
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="chat/index"
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                width: 50,
                marginTop: 26,
                gap: 4,
              }}
            >
              <ChatIco focused={focused} />
              <Text
                style={{ fontSize: 11, color: focused ? selectColor : color }}
              >
                Chat
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="chat/message"
        options={{ href: null, tabBarStyle: { display: "none" } }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                width: 50,
                marginTop: 26,
                gap: 4,
              }}
            >
              <SettingsIco focused={focused} />
              <Text
                style={{ fontSize: 11, color: focused ? selectColor : color }}
              >
                Settings
              </Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

import { ChatIco } from "@/assets/images/chat";
import { ProfileIco } from "@/assets/images/profileIco";
import { SettingsIco } from "@/assets/images/settings";
import { useColorStore } from "@/store/useColorStore";
import { Tabs } from "expo-router";
import { View, Text } from "react-native";

export default function RootLayout() {
  const { color } = useColorStore();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
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
              <Text style={{ fontSize: 13, color: focused ? "red" : color }}>
                Profile
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="index"
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
              <Text style={{ fontSize: 13, color: focused ? "red" : color }}>
                Chat
              </Text>
            </View>
          ),
        }}
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
              <Text style={{ fontSize: 13, color: focused ? "red" : color }}>
                Settings
              </Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

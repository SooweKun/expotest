import { useMessageStore } from "@/store/useMessageStore";
import { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";

export const Messages = () => {
  const { message } = useMessageStore();
  const [socket, setSocket] = useState(message);

  useEffect(() => {
    setSocket(message);
  }, [message]);

  return (
    <ScrollView keyboardShouldPersistTaps="handled" style={{ flex: 1 }}>
      <View>
        <Text>Messages</Text>
      </View>
      {socket.map((item, index) => (
        <View key={index}>
          <Text>{item}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

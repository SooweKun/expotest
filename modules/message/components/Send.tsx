import React, { FC, useState } from "react";
import { Clip } from "@/assets/images/Clip";
import { SendBtn } from "@/assets/images/SendBtn";
import { TextInput, TouchableOpacity, View } from "react-native";
import { useMessageStore } from "@/store/useMessageStore";

interface Props {
  open: boolean;
  handleOpen: (open: boolean) => void;
}

export const Send: FC<Props> = ({ open, handleOpen }) => {
  const { setMessage } = useMessageStore();
  const [message, setMessageText] = useState("");

  const handleSend = () => {
    setMessage(message);
    setMessageText("");
  };

  return (
    <View
      style={{
        width: "100%",
        height: open ? 350 : 80,
        backgroundColor: "#1a1a1a",
        flexDirection: "row",
        padding: 17,
        paddingTop: 17,
        justifyContent: "space-between",
        gap: 15,
      }}
    > 
      <TouchableOpacity
        style={{
          width: 33,
          height: 33,
          justifyContent: "center",
          alignItems: "center",
          borderWidth: 1,
          borderColor: "black",
          borderRadius: 100,
        }}
      >
        <Clip />
      </TouchableOpacity>
      <TextInput
        style={{
          width: 250,
          height: 33,
          backgroundColor: "black",
          borderRadius: 15,
          paddingLeft: 13,
          color: "white",
        }}
        placeholder="Введите сообщение"
        placeholderTextColor={"white"}
        value={message}
        onChangeText={setMessageText}
        onFocus={() => handleOpen(true)}
      />
      <TouchableOpacity
        style={{
          width: 33,
          height: 33,
          borderWidth: 1,
          borderColor: "black",
          borderRadius: 100,
          justifyContent: "center", 
          alignItems: "center",
        }}
        onPress={() => {
          if (message !== "") {
            handleSend();
          }
        }}
      >
        <SendBtn />
      </TouchableOpacity>
    </View>
  );
};

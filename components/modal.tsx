import { FC } from "react";
import { TouchableOpacity, View, Text } from "react-native";

interface Props {
  children: React.ReactNode;
  handleOpen: () => void;
}

export const Modal: FC<Props> = ({ children, handleOpen }) => {
  return (
    <TouchableOpacity
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        alignItems: "center",
        paddingTop: 5,
      }}
      onPress={handleOpen}
    >
      <View
        onStartShouldSetResponder={() => true}
        style={{
          width: 328,
          height: 300,
          backgroundColor: "black",
          borderRadius: 25,
        }}
      >
        <Text
          style={{
            width: "100%",
            height: 30,
            borderBottomWidth: 1,
            borderBottomColor: "gray",
            color: "white",
            textAlign: "center",
            paddingTop: 5,
          }}
        >
          Выберите иконку
        </Text>
        <View
          style={{
            flexWrap: "wrap",
            flexDirection: "row",
            padding: 5,
            gap: 5,
          }}
        >
          {children}
        </View>
      </View>
    </TouchableOpacity>
  );
};

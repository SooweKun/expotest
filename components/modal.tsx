import { FC } from "react";
import { TouchableOpacity, View, Text } from "react-native";

interface Props {
  children: React.ReactNode;
  setOpen: (open: boolean) => void;
}

export const Modal: FC<Props> = ({ children, setOpen }) => {
  return (
    <TouchableOpacity
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        alignItems: "center",
        flex: 1,
        paddingTop: 5,
        borderWidth: 1,
        borderColor: "red",
      }}
      onPress={() => setOpen(false)}
    >
      <View
        style={{
          width: 328,
          height: 300,
          backgroundColor: "black",
          borderRadius: 25,
          borderWidth: 1,
          borderColor: "gray",
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

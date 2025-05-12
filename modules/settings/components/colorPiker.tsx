import { useBackgroundStore, useColorStore } from "@/store/useColorStore";
import { TouchableOpacity, View, Text } from "react-native";

const CollorArr = [
  { color: "#90132F", selectColor: "#C02042" },
  { color: "#1A477D", selectColor: "#051641" },
  { color: "#32CD32", selectColor: "#00FF00" },
  { color: "#000000", selectColor: "#808080" },
  { color: "#7DA0CA", selectColor: "#C1E8FF" },
  { color: "#FFCB68", selectColor: "#E2773A" },
  { color: "#FF5B60", selectColor: "#D35C9C" },
  { color: "#1C621B", selectColor: "#419310" },
];

export const ColorPicker = () => {
  const { setColor, setSelectColor, color } = useColorStore();
  const { setBackground } = useBackgroundStore();

  return (
    <View
      style={{
        backgroundColor: "#1a1a1a",
        alignItems: "center",
        width: "100%",
        height: 232,
        borderRadius: 9,
        padding: 8,
        gap: 13,
      }}
    >
      <View style={{ flexDirection: "column", gap: 5 }}>
        <Text style={{ color: color ? color : "white", fontWeight: 500 }}>
          Select color:
        </Text>
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            width: 322,
            height: 44,
            justifyContent: "center",
            backgroundColor: "black",
            alignItems: "center",
            borderRadius: 7,
          }}
        >
          {CollorArr.map(({ color, selectColor }, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setColor(color)}
              onPressIn={() => setSelectColor(selectColor)}
              style={{
                width: 25,
                height: 25,
                borderRadius: 50,
                borderColor: "#9A9A9A",
                borderWidth: 1,
                overflow: "hidden",
                transform: [{ rotate: "45deg" }],
              }}
            >
              <View
                style={{
                  backgroundColor: selectColor,
                  width: 25,
                  height: 11.5,
                }}
              />
              <View
                style={{
                  backgroundColor: color,
                  width: 25,
                  height: 11.5,
                }}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={{ flexDirection: "column", gap: 5 }}>
        <Text style={{ color: color ? color : "white", fontWeight: 500 }}>
          Background color:
        </Text>
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            width: 322,
            height: 44,
            justifyContent: "center",
            backgroundColor: "black",
            alignItems: "center",
            borderRadius: 7,
          }}
        >
          {CollorArr.map(({ color }, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setBackground(color)}
              style={{
                width: 25,
                height: 25,
                borderRadius: 50,
                borderColor: "#9A9A9A",
                backgroundColor: color,
                borderWidth: 1,
                overflow: "hidden",
                transform: [{ rotate: "45deg" }],
              }}
            ></TouchableOpacity>
          ))}
        </View>
      </View>
      <View
        style={{
          width: 322,
          height: 44,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "black",
            width: 161,
            justifyContent: "center",
            alignItems: "center",
            borderTopLeftRadius: 7,
            borderBottomLeftRadius: 7,
          }}
        >
          <Text style={{ color: "white" }}>light</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "white",
            width: 161,
            justifyContent: "center",
            alignItems: "center",
            borderTopRightRadius: 7,
            borderBottomRightRadius: 7,
          }}
        >
          <Text>night</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

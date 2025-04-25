import { Text, TouchableOpacity, View } from "react-native";

export const Profile = () => {
  return (
    <View
      style={{
        width: 387,
        height: 150,
        borderBottomColor: "black",
        borderBottomWidth: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 20,
        padding: 10,
      }}
    >
      <Text>@morteit</Text>
      <View
        style={{
          width: 184,
          height: 131,
          alignItems: "center",
          gap: 7,
        }}
      >
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: "#D9D9D9",
            borderRadius: "100%",
            marginTop: 10,
          }}
        />
        <View style={{ flexDirection: "row", gap: 5 }}>
          <Text style={{ color: "black", fontWeight: 500 }}>
            на моем крыле мифрил
          </Text>
          <Text style={{ color: "black", fontWeight: 500 }}>()</Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          width: 47,
          height: 22,
          borderRadius: 6,
          backgroundColor: "black",
          borderWidth: 1,
          borderColor: "white",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white" }}>изм</Text>
      </TouchableOpacity>
    </View>
  );
};

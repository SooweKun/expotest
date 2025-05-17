import { FC, useEffect, useState } from "react";
import { Falsy, View, ViewStyle } from "react-native";
import NetInfo from "@react-native-community/netinfo";

interface Props {
  className: Falsy | ViewStyle;
}

export const OnlineTrecker: FC<Props> = ({ className }) => {
  const [isConnected, setIsConnected] = useState<boolean | null>(null);
  const [color, setColor] = useState("black");

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
      {
        state.isConnected ? setColor("#5A8C45") : setColor("gray");
      }
    });

    return () => unsubscribe();
  }, [isConnected]);

  return (
    <View
      style={[
        {
          backgroundColor: color,
          position: "absolute",
          top: -5,
          left: -5,
          zIndex: 2,
          borderRadius: 50,
        },
        className,
      ]}
    ></View>
  );
};

import React, { FC } from "react";
import { Svg, Path } from "react-native-svg";
import Animated, {
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import { useColorStore } from "@/store/useColorStore";

interface Props {
  focused: boolean;
}

export const ChatIco: FC<Props> = ({ focused }) => {
  const { color, selectColor } = useColorStore();

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: withSpring(focused ? 1.1 : 1) }],
  }));

  return (
    <Animated.View style={animatedStyle}>
      <Svg
        height="28px"
        viewBox="0 -960 960 960"
        width="28px"
        fill={focused ? selectColor : color}
      >
        <Path d="M480-80 373-240H160q-33 0-56.5-23.5T80-320v-480q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H587L480-80Zm0-144 64-96h256v-480H160v480h256l64 96Zm0-336Z" />
      </Svg>
    </Animated.View>
  );
};

import { useCallback, useEffect, useRef } from "react";
import { Animated } from "react-native";

export const Skeleton = ({
  bgColor = "#313B58",
  borderRadius = 8,
  className,
}: {
  borderRadius?: number;
  bgColor?: string;
  className?: string;
}) => {
  const animation = useRef(new Animated.Value(0.5)).current;

  const startAnimation = useCallback(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animation, {
          toValue: 1,
          duration: 1000, // You can adjust the time as you want
          useNativeDriver: true,
        }),
        Animated.timing(animation, {
          toValue: 0.5,
          duration: 1000, // You can adjust the time as you want
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [animation]);

  useEffect(() => {
    startAnimation();
  }, [startAnimation]);

  const animatedStyle = {
    opacity: animation,
    backgroundColor: bgColor,
    borderRadius,
  };

  return <Animated.View style={animatedStyle} className={className} />;
};

import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

export default function ReanimatedAnimation() {
  const degrees = useSharedValue(0);

  const rotate = withTiming(degrees.value + 360, {
    duration: 3000,
    easing: Easing.linear,
  });

  const animations = () => {
    degrees.value = withRepeat(rotate, -1);
  };

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ rotate: `${degrees.value}deg` }],
  }));

  useEffect(animations);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.square, animatedStyles]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  square: {
    height: 100,
    width: 100,
    backgroundColor: "deeppink",
  },
});

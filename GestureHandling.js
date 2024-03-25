import { StyleSheet, View } from "react-native";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

export default function GestureHandling() {
  const offset = useSharedValue({ x: 0, y: 0 });

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value.x }, { translateY: offset.value.y }],
  }));

  const panGesture = Gesture.Pan().onUpdate((e) => {
    offset.value = {
      x: e.translationX,
      y: e.translationY,
    };
  });

  return (
    <GestureHandlerRootView style={styles.gestureContainer}>
      <View style={styles.container}>
        <GestureDetector gesture={panGesture}>
          <Animated.View style={[styles.square, animatedStyles]} />
        </GestureDetector>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  gestureContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  square: {
    height: 100,
    width: 100,
    backgroundColor: "seagreen",
  },
});

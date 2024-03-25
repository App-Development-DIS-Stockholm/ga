import { Pressable, StyleSheet, View } from "react-native";

export default function StateAnimation() {
  return (
    <View style={styles.container}>
      <Pressable style={[styles.square, { transform: [] }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  square: {
    height: "15%",
    aspectRatio: 1,
    backgroundColor: "hotpink",
  },
});

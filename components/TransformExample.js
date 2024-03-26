import { StyleSheet, View } from "react-native";

export default function TransformExample() {
  return (
    <View style={styles.container}>
      <View style={[styles.square, { backgroundColor: "green" }]} />
      <View style={[styles.square, { backgroundColor: "red" }]} />
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
  },
});

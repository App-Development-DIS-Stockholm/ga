import { StyleSheet, View } from "react-native";
import GestureHandling from "../GestureHandling";

export default function Index() {
  return (
    <View style={styles.container}>
      <GestureHandling />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

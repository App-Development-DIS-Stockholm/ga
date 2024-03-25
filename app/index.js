import { StyleSheet, View } from "react-native";
import ReanimatedAnimation from "../ReanimatedAnimation";

export default function Index() {
  return (
    <View style={styles.container}>
      <ReanimatedAnimation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

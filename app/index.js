import { StyleSheet, View } from "react-native";
import StateAnimation from "../StateAnimation";

export default function Index() {
  return (
    <View style={styles.container}>
      <StateAnimation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

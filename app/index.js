import { StyleSheet, View } from "react-native";
import TransformExample from "../TransformExample";

export default function Index() {
  return (
    <View style={styles.container}>
      <TransformExample />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

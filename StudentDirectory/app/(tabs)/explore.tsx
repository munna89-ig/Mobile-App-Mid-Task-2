import { StyleSheet, Text, View } from "react-native";

export default function Explore() {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Explore Tab</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#F0F4F8" },
  text: { fontSize: 18, fontWeight: "600", color: "#0D1F4E" },
});
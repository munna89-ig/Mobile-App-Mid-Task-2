// app/(tabs)/add-student.tsx  (Week 5 — NEW)

import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AddStudentForm from "../../components/add-student-form";

export default function AddStudentScreen() {
  return (
    <SafeAreaView style={styles.screen} edges={["bottom", "left", "right"]}>
      <AddStudentForm />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#FFFFFF" },
});

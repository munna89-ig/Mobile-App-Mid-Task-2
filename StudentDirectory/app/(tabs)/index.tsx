import { router } from "expo-router";
import { useState } from "react";
import { Alert, FlatList, Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "../../components/search-bar";
import StudentDetail from "../../components/student-detail";
import StudentItem from "../../components/student-item";
import { useStudents } from "../../context/students-context";
import { Student } from "../../data/students";

export default function Index() {
  const { students, dispatch } = useStudents();

  const [query, setQuery] = useState("");
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  const filtered = students.filter(
    (s) =>
      s.name.toLowerCase().includes(query.toLowerCase()) ||
      s.department.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (student: Student) => {
    setSelectedStudent((prev) => (prev?.id === student.id ? null : student));
  };

  // ===== Lab Task Feature 1 — Reset with confirmation =====
  const handleReset = () => {
    const reset = () => {
      dispatch({ type: "RESET" });
      setSelectedStudent(null);
    };

    if (Platform.OS === "web") {
      if (window.confirm("Restore the original student list?")) {
        reset();
      }
      return;
    }

    Alert.alert("Reset Directory", "Restore the original student list?", [
      { text: "Cancel", style: "cancel" },
      { text: "Reset", style: "destructive", onPress: reset },
    ]);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.titleBar}>
        {/* ===== Lab Task Feature 2 — live count (no extra state) ===== */}
        <Text style={styles.title}>Student Directory ({students.length})</Text>

        <View style={styles.buttonRow}>
          <Pressable style={styles.resetButton} onPress={handleReset}>
            <Text style={styles.resetButtonText}>Reset</Text>
          </Pressable>
          <Pressable style={styles.addButton} onPress={() => router.push("/(tabs)/add-student")}>
            <Text style={styles.addButtonText}>+ Add</Text>
          </Pressable>
        </View>
      </View>

      <SearchBar value={query} onChangeText={setQuery} />

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <StudentItem
            student={item}
            onPress={handleSelect}
            isSelected={selectedStudent?.id === item.id}
          />
        )}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={styles.emptyText}>No students match "{query}"</Text>
          </View>
        }
      />

      {selectedStudent && (
        <StudentDetail student={selectedStudent} onRemoved={() => setSelectedStudent(null)} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#F0F4F8" },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: "#0D1F4E",
  },
  title: { fontSize: 18, fontWeight: "bold", color: "#FFFFFF", flexShrink: 1 },
  buttonRow: { flexDirection: "row", gap: 8 },
  resetButton: {
    borderWidth: 1,
    borderColor: "#FFFFFF",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  resetButtonText: { color: "#FFFFFF", fontWeight: "700", fontSize: 13 },
  addButton: {
    backgroundColor: "#0D9488",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 8,
  },
  addButtonText: { color: "#FFFFFF", fontWeight: "700", fontSize: 13 },
  empty: { padding: 40, alignItems: "center" },
  emptyText: { fontSize: 14, color: "#94A3B8" },
});
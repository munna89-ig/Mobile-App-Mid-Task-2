import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import StudentItem from "../../components/student-item";
import { useStudents } from "../../context/students-context";

export default function Bookmarks() {
  // Same global list — Home e add/remove korle ekhaneo update hobe
  const { students } = useStudents();

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.titleBar}>
        <Text style={styles.title}>Bookmarks ({students.length})</Text>
      </View>

      <FlatList
        data={students}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <StudentItem student={item} onPress={() => {}} isSelected={false} />
        )}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={styles.emptyText}>No students in the directory</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#F0F4F8" },
  titleBar: { paddingHorizontal: 16, paddingVertical: 14, backgroundColor: "#0D1F4E" },
  title: { fontSize: 20, fontWeight: "bold", color: "#FFFFFF" },
  empty: { padding: 40, alignItems: "center" },
  emptyText: { fontSize: 14, color: "#94A3B8" },
});
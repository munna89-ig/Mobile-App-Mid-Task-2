import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: "#0D9488" }}>
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="bookmarks" options={{ title: "Bookmarks" }} />

      <Tabs.Screen
        name="add-student"
        options={{
          title: "Add Student",
          href: null,
          headerShown: true,
          headerTitle: "Join the Directory",
          headerStyle: { backgroundColor: "#0D1F4E" },
          headerTintColor: "#FFFFFF",
        }}
      />
    </Tabs>
  );
}
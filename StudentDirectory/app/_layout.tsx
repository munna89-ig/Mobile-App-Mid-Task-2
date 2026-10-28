// app/_layout.tsx  (Week 5 — wrapped in StudentsProvider)

import { Stack } from "expo-router";
import { StudentsProvider } from "../context/students-context";

export default function RootLayout() {
  return (
    <StudentsProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </StudentsProvider>
  );
}

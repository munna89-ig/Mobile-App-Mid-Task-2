import React, { createContext, useContext, useReducer } from "react";
import { STUDENTS } from "../data/students";
import { StudentsAction, StudentsState, studentsReducer } from "./students-reducer";

interface StudentsContextValue {
  students: StudentsState;
  dispatch: React.Dispatch<StudentsAction>;
}

const StudentsContext = createContext<StudentsContextValue | null>(null);

export function StudentsProvider({ children }: { children: React.ReactNode }) {
  const [students, dispatch] = useReducer(studentsReducer, STUDENTS);

  return (
    <StudentsContext.Provider value={{ students, dispatch }}>
      {children}
    </StudentsContext.Provider>
  );
}

export function useStudents(): StudentsContextValue {
  const ctx = useContext(StudentsContext);
  if (!ctx) {
    throw new Error("useStudents must be used inside a StudentsProvider");
  }
  return ctx;
}
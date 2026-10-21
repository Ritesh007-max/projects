import type { Student } from "@/types";
import { StudentCard } from "./StudentCard";

export function StudentGrid({ students }: { students: Student[] }) {
  return( 
  <div className="student-grid">
    {students.map((student) => <StudentCard key={student.id} student={student} />)}
  </div>
  )
}

import Link from "next/link";
import type { Student } from "@/types";
import { departmentPath, initials, ordinalYear } from "@/lib";

export function StudentCard({ student }: { student: Student }) {
  const studentInitials = initials(student.name);
  const departmentLink = `/departments/${departmentPath(student.department)}`;
  const studentProfileLink = `/students/${student.id.toLowerCase()}`;

  return (
    <article className="student-card">
      <div className="card-top">
        <span className="avatar">{studentInitials}</span>

        <span className="tag code">{student.id}</span>
      </div>

      <h2>{student.name}</h2>

      <div className="student-meta">
        <Link className="tag dept-tag" href={departmentLink}>
          {student.department}
        </Link>

        <span>{ordinalYear(student.year)} Year</span>
      </div>

      <div className="card-link">
        <Link href={studentProfileLink}>
          View profile <span>→</span>
        </Link>
      </div>
    </article>
  );
}


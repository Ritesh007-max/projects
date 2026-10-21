import Link from "next/link";
import type { Student } from "@/types";
import { initials } from "@/lib";

type DepartmentMemberCardProps = {
  student: Student;
  nested: boolean;
  specialization: string;
};

export function DepartmentMemberCard({
  student,
  nested,
  specialization,
}: DepartmentMemberCardProps) {
  const studentTrack = nested
    ? specialization
    : student.track;

  return (
    <article className="member-card">
      <div className="member-top">
        <span className="avatar">
          {initials(student.name)}
        </span>

        <div>
          <h3>{student.name}</h3>
          <span>{student.id}</span>
        </div>

        <span className="tag">
          Year {student.year}
        </span>
      </div>

      <div className="member-bottom">
        <span>{studentTrack}</span>

        <Link href={`/students/${student.id.toLowerCase()}`}>
          View profile →
        </Link>
      </div>
    </article>
  );
}

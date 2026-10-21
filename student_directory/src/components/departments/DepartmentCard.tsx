import Link from "next/link";
import type { Department } from "@/types";

const symbols = ["◣", "✳", "↗"];

export function DepartmentCard({
  department,
  index,
}: {
  department: Department;
  index: number;
}) {

  const icon = symbols[index % symbols.length];

  return (
    <article className="department-card">
      <div className="department-copy">
        <h2>
          <span className="department-icon">{icon}</span>
          {department.name}
        </h2>

        <p>{department.description}</p>

        <div className="department-stats">
          <span>
            {department.specializations} Specializations
          </span>

          <b>·</b>

          <span>
            {department.enrollment} Enrolled Students
          </span>
        </div>
      </div>

      <Link
        className="arrow-link"
        href={`/departments/${department.slug}`}
      >
        View students <span>→</span>
      </Link>
    </article>
  );
}


import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs, DepartmentMemberCard } from "@/components";
import { departments, students } from "@/data";

const specializations = [
  "Full-Stack Architecture",
  "Reactive UI Design",
  "Distributed Web Systems",
  "Progressive Web Apps",
];

export function generateStaticParams() {
  return departments.map((department) => ({
    department: department.slug,
  }));
}

export default async function DepartmentPage({
  params,
}: PageProps<"/departments/[department]">) {
  const { department: slug } = await params;

  const department = departments.find(
    (item) => item.slug === slug.toLowerCase()
  );

  if (!department) {
    notFound();
  }

  const departmentStudents = students.filter(
    (student) => student.department === department.name
  );

  const isWebDevelopment = slug === "computer-science";

  const displayedStudents = isWebDevelopment
    ? departmentStudents.filter(
      (student) => student.track === "Web Development"
    )
    : departmentStudents;

  const pageTitle = isWebDevelopment
    ? "Web Development"
    : department.name;

  const studentCount = displayedStudents.length;

  return (
    <main className="nested-page wrap">
      <Breadcrumbs
        items={[
          { label: "Departments", href: "/departments" },
          {
            label: department.name,
            href: `/departments/${department.slug}`,
          },
          ...(isWebDevelopment
            ? [{ label: "Web Development" }]
            : []),
        ]}
      />

      <div className="nested-actions">
        <Link className="back-link" href="/departments">
          Return to Departments
        </Link>


        <Link href="/students">View all students →</Link>
      </div>

      <section className="track-card">
        <div className="track-title">
          <div>
            <h1>{pageTitle}</h1>

            {isWebDevelopment && (
              <span className="tag">
                Specialization under {department.name}
              </span>
            )}

            <p>
              {isWebDevelopment
                ? "Explore web development, from building interactive user interfaces to creating full-stack applications and working with modern web APIs."
                : department.description}
            </p>
          </div>

          {isWebDevelopment && (
            <div className="track-code">
              <span className="eyebrow">Department track</span>
              <span className="tag">CS-SPEC-04</span>
            </div>
          )}
        </div>

        <div className="track-facts">
          <div>
            <span>Academic Lead</span>
            <strong>
              {isWebDevelopment
                ? "Prof. Elena Vance"
                : "Department Faculty"}
            </strong>
          </div>

          <div>
            <span>Primary Core Lab</span>
            <strong>
              {isWebDevelopment
                ? "Turing Hall 408"
                : "Campus Academic Center"}
            </strong>
          </div>

          <div>
            <span>Total Enrollment</span>
            <strong>
              {isWebDevelopment
                ? `${studentCount} Active Enrollees`
                : `${studentCount} Directory Students`}
            </strong>
          </div>

          <div>
            <span>Curriculum Cycle</span>
            <strong>2024-2025 Revised</strong>
          </div>
        </div>
      </section>

      <div className="track-section-heading">
        <h2>
          Students in{" "}
          {isWebDevelopment
            ? "this Specialization"
            : department.name}

          <span className="count-badge">{studentCount}</span>
        </h2>

        <div>
          Filtered by {isWebDevelopment ? "Track" : "Department"}:{" "}
          <span className="tag">
            {isWebDevelopment
              ? "Web Development"
              : department.name}
          </span>
        </div>
      </div>

      <section className="member-grid">
        {displayedStudents.map((student, index) => (
          <DepartmentMemberCard
            key={student.id}
            student={student}
            nested={isWebDevelopment}
            specialization={
              specializations[index] ?? student.track
            }
          />
        ))}
      </section>

      <footer className="route-footer">
        <span>Campus Directory © Academic Informatics Core</span>

        <span>
          Path: /departments/{slug}
          {isWebDevelopment ? "/web-development" : ""}
          <i />
        </span>
      </footer>
    </main>
  );
}

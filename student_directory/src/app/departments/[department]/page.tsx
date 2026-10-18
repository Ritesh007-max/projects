import Link from "next/link";
import { notFound } from "next/navigation";
import { departments, initials, students } from "@/lib/data";

export function generateStaticParams() { return departments.map((department) => ({ department: department.slug })); }

export default async function DepartmentPage({ params }: PageProps<"/departments/[department]">) {
  const { department: slug } = await params;
  const department = departments.find((item) => item.slug === slug.toLowerCase());
  if (!department) notFound();
  const members = students.filter((student) => student.department === department.name);
  const nested = slug === "computer-science";
  const trackStudents = nested ? members.filter((student) => student.track === "Web Development") : members;
  const title = nested ? "Web Development" : department.name;
  return <main className="nested-page wrap">
    <div className="breadcrumbs"><Link href="/departments">Departments</Link><span>/</span><Link href={`/departments/${department.slug}`}>{department.name}</Link>{nested && <><span>/</span><strong>Web Development</strong></>}</div>
    <div className="nested-actions"><Link className="back-link" href="/departments">← &nbsp;Return to {nested ? `${department.name} Department` : "all departments"}</Link><Link href="/students">View all students →</Link></div>
    <section className="track-card"><div className="track-title"><div><h1>{title}</h1>{nested && <span className="tag">Specialization under {department.name}</span>}<p>{nested ? "Focusing on modern frontend architectures, full-stack frameworks, reactive interfaces, and distributed web APIs." : department.description}</p></div>{nested && <div className="track-code"><span className="eyebrow">Department track</span><span className="tag">CS-SPEC-04</span></div>}</div>
      <div className="track-facts"><div><span>Academic Lead</span><strong>{nested ? "Prof. Elena Vance" : "Department Faculty"}</strong></div><div><span>Primary Core Lab</span><strong>{nested ? "Turing Hall 408" : "Campus Academic Center"}</strong></div><div><span>Total Enrollment</span><strong>{nested ? `${trackStudents.length} Active Enrollees` : `${members.length} Directory Students`}</strong></div><div><span>Curriculum Cycle</span><strong>2024–2025 Revised</strong></div></div>
    </section>
    <div className="track-section-heading"><h2>Students in {nested ? "this Specialization" : department.name}<span className="count-badge">{trackStudents.length}</span></h2><div>Filtered by {nested ? "Track" : "Department"}: <span className="tag">{nested ? "Web Development" : department.name}</span></div></div>
    <section className="member-grid">{trackStudents.map((student) => <article className="member-card" key={student.id}><div className="member-top"><span className="avatar">{initials(student.name)}</span><div><h3>{student.name}</h3><span>{student.id}</span></div><span className="tag">Year {student.year}</span></div><div className="member-bottom"><span>{student.track === "Web Development" && nested ? ["Full-Stack Architecture", "Reactive UI Design", "Distributed Web Systems", "Progressive Web Apps"][trackStudents.indexOf(student)] : student.track}</span><Link href={`/students/${student.id.toLowerCase()}`}>View profile →</Link></div></article>)}</section>
    <footer className="route-footer"><span>Campus Directory © Academic Informatics Core</span><span>Path: /departments/{slug}{nested ? "/web-development" : ""} <i /></span></footer>
  </main>;
}

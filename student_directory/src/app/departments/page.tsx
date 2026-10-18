import Link from "next/link";
import { departments } from "@/lib/data";

const symbols = ["▣", "✳", "↗"];

export default function DepartmentsPage() {
  return <main className="departments-page wrap">
    <div className="department-heading"><div><h1>Departments</h1><p>Explore academic faculties, programs, and enrolled students.</p></div><span className="faculty-count"><i />3 Active Academic Faculties</span></div>
    <section className="department-list">{departments.map((department, index) => <article className="department-card" key={department.slug}>
      <div className="department-copy"><h2><span className="department-icon">{symbols[index]}</span>{department.name}</h2><p>{department.description}</p><div className="department-stats"><span>♧ {department.specializations} Specializations</span><b>·</b><span>♙ {department.enrollment} Enrolled Students</span></div></div>
      <Link className="arrow-link" href={`/departments/${department.slug}`}>View students <span>→</span></Link>
    </article>)}</section>
    <div className="record-footer"><span>Curriculum Year 2024–2025</span><span>Updated daily via Campus Records API</span></div>
  </main>;
}

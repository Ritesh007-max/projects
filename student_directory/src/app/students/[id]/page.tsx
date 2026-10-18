import Link from "next/link";
import { notFound } from "next/navigation";
import { initials, students } from "@/lib/data";

export function generateStaticParams() { return students.map((student) => ({ id: student.id.toLowerCase() })); }

export default async function StudentPage({ params }: PageProps<"/students/[id]">) {
  const { id } = await params;
  const student = students.find((item) => item.id.toLowerCase() === id.toLowerCase());
  if (!student) notFound();
  const yearName = ["", "First Year (Freshman)", "2nd Year (Sophomore)", "3rd Year (Junior)", "4th Year (Senior)"][student.year];
  return <main className="profile-page">
    <div className="breadcrumbs"><Link href="/students">Students</Link><span>/</span><strong>{student.name}</strong></div>
    <Link className="back-link" href="/students">← &nbsp;Back to students</Link>
    <article className="profile-card">
      <div className="profile-title"><span className="avatar large">{initials(student.name)}</span><div><h1>{student.name}</h1><div className="badges"><span className="tag code">{student.id}</span><span className="tag status">Active Student</span></div></div></div>
      <div className="profile-facts"><div><span className="eyebrow">Department</span><Link href={`/departments/${student.department.toLowerCase().replaceAll(" ", "-")}`}>{student.department}</Link></div><div><span className="eyebrow">Study year</span><span>{yearName}</span></div><div><span className="eyebrow">Email</span><a href={`mailto:${student.email}`}>{student.email}</a></div><div><span className="eyebrow">Enrolled</span><span>{student.enrolled}</span></div></div>
      <section className="profile-section"><h2>About</h2><p>{student.about}</p></section>
      <section className="profile-section academic"><h2>Academic Details</h2><div className="detail-row"><span>Department</span><Link href={`/departments/${student.department.toLowerCase().replaceAll(" ", "-")}`}>{student.department}</Link></div><div className="detail-row"><span>Current Academic Standing</span><span>{student.year}{student.year === 1 ? "st" : student.year === 2 ? "nd" : student.year === 3 ? "rd" : "th"} Year Undergraduate</span></div><h3>Enrolled subjects</h3><ul>{student.subjects.map((subject) => <li key={subject.name}><span>{subject.name}</span><span>{subject.credits}</span></li>)}</ul></section>
    </article>
    <div className="record-footer"><span>System Record ID: 0948-CS-{initials(student.name)}</span><span>Last validated: Oct 24, 2024</span></div>
  </main>;
}

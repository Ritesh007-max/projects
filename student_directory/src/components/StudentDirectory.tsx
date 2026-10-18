"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { departments, initials, students } from "@/lib/data";

export default function StudentDirectory() {
  const [query, setQuery] = useState("");
  const [department, setDepartment] = useState("All departments");
  const filtered = useMemo(() => students.filter((student) => {
    const matchesDepartment = department === "All departments" || student.department === department;
    const q = query.trim().toLowerCase();
    return matchesDepartment && (!q || `${student.name} ${student.id} ${student.department} ${student.track}`.toLowerCase().includes(q));
  }), [query, department]);
  return <main className="page wrap">
    <div className="page-heading"><div><h1>Students</h1><p>Browse students and view their profiles.</p></div></div>
    <div className="filters"><label className="search"><span aria-hidden="true">⌕</span><input aria-label="Search students" placeholder="Search students" value={query} onChange={(event) => setQuery(event.target.value)} /></label>
      <label className="department-filter"><span>Department:</span><select value={department} onChange={(event) => setDepartment(event.target.value)}><option>All departments</option>{departments.map((item) => <option key={item.slug}>{item.name}</option>)}</select></label>
    </div>
    {filtered.length ? <div className="student-grid">{filtered.map((student) => <article className="student-card" key={student.id}>
      <div className="card-top"><span className="avatar">{initials(student.name)}</span><span className="tag code">{student.id}</span></div>
      <h2>{student.name}</h2><div className="student-meta"><Link className="tag dept-tag" href={`/departments/${student.department.toLowerCase().replaceAll(" ", "-")}`}>{student.department}</Link><span>{student.year}{student.year === 1 ? "st" : student.year === 2 ? "nd" : student.year === 3 ? "rd" : "th"} Year</span></div>
      <div className="card-link"><Link href={`/students/${student.id.toLowerCase()}`}>View profile <span>→</span></Link></div>
    </article>)}</div> : <div className="empty-state"><h2>No students found</h2><p>Try a different name or department.</p><button className="button secondary" onClick={() => { setQuery(""); setDepartment("All departments"); }}>Clear filters</button></div>}
    <div className="list-footer"><span>Showing <strong>{filtered.length}</strong> of <strong>{students.length}</strong> students</span><div><button className="button secondary" disabled>Previous</button><button className="button secondary" disabled>Next</button></div></div>
  </main>;
}

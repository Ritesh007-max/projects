import Link from "next/link";

export default function NotFound() {
  return <main className="not-found-wrap">
    <div className="breadcrumbs"><Link href="/students">Directory</Link><span>/</span><strong>Not Found</strong></div>
    <section className="not-found"><span className="tag">● &nbsp;404 · ROUTE NOT FOUND</span><h1>Student or department not found</h1><p>The requested directory entry or path could not be located. It may have moved or the identifier might be invalid.</p><div className="not-found-actions"><Link className="button primary" href="/students">Return to Students Directory</Link><Link className="button secondary" href="/departments">Browse All Departments</Link></div><div className="suggested"><div><strong>Suggested starting points</strong><span>Internal Routes</span></div><Link href="/departments/computer-science"><span>▦ &nbsp; Computer Science Department</span><span>/departments/cs →</span></Link><Link href="/students"><span>▦ &nbsp; Student Directory</span><span>/students →</span></Link></div></section>
  </main>;
}

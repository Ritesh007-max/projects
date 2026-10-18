import Link from "next/link";

export default function AboutPage() {
  return <main className="page wrap about-page"><h1>About Campus Directory</h1><p>Campus Directory is a simple guide to the students, departments, and academic programs in our campus community.</p><p>Browse the student directory to explore profiles, or visit a department to see its programs and students.</p><div className="about-actions"><Link className="button primary" href="/students">Browse students</Link><Link className="button secondary" href="/departments">Explore departments</Link></div></main>;
}

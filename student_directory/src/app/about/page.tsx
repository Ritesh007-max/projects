import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="page wrap about-page">
      <h1>About Campus Directory</h1>

      <p>
        Welcome to Campus Directory! This is a place where you can learn
        more about our campus, get to know fellow students, and explore
        the different departments and academic programs we offer.
      </p>

      <p>
        Looking for a student profile or curious about a particular
        department? Browse our student directory or explore the
        departments to discover their programs and the students
        who are part of them.
      </p>

      <div className="about-actions">
        <Link className="button primary" href="/students">
          Browse Students
        </Link>

        <Link className="button secondary" href="/departments">
          Explore Departments
        </Link>
      </div>
    </main>
  );
}

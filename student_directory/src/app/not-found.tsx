import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found-wrap">
      <div className="breadcrumbs">
        <Link href="/students">Directory</Link>
        <span>/</span>
        <strong>Not Found</strong>
      </div>

      <section className="not-found">
        <span className="tag">404 · PAGE NOT FOUND</span>

        <h1>Oops! We couldn't find that page.</h1>

        <p>
          The student or department you're looking for doesn't seem
          to exist in our directory. The link might be incorrect,
          or the page may have been moved.
        </p>

        <div className="not-found-actions">
          <Link className="button primary" href="/students">
            Back to Student Directory
          </Link>

          <Link className="button secondary" href="/departments">
            Explore Departments
          </Link>
        </div>

        <div className="suggested">
          <div>
            <strong>Not sure where to go?</strong>
            <span>Here are a few places to start</span>
          </div>

          <Link href="/departments/computer-science">
            <span>Computer Science Department</span>
            <span>/departments/computer-science →</span>
          </Link>

          <Link href="/students">
            <span>Student Directory</span>
            <span>/students →</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

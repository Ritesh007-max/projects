import { departments } from "@/data";
import { DepartmentList } from "./DepartmentList";
import { DepartmentListFooter } from "./DepartmentListFooter";

export function DepartmentsPageContent() {
  return (
    <main className="departments-page wrap">
      <div className="department-heading">
        <div>
          <h1>Departments</h1>

          <p>
            Explore our academic departments, discover their
            programs, and learn more about the students enrolled
            in each one.
          </p>
        </div>

        <span className="faculty-count">
          <i />
          {departments.length} Active Academic Faculties
        </span>
      </div>

      <DepartmentList departments={departments} />

      <DepartmentListFooter />
    </main>
  );
}

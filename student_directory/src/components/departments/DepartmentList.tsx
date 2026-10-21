import type { Department } from "@/types";
import { DepartmentCard } from "./DepartmentCard";

export function DepartmentList({ departments }: { departments: Department[] }) {
  return <section className="department-list">

    {departments.map((department, index) => <DepartmentCard key={department.slug} department={department} index={index} />)}

  </section>;
}

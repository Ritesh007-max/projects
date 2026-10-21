
import type { Department } from "@/types";

type StudentFiltersProps = {
  departments: Department[];
  query: string;
  department: string;
  onQueryChange: (value: string) => void;
  onDepartmentChange: (value: string) => void;
};

export function StudentFilters({
  departments,
  query,
  department,
  onQueryChange,
  onDepartmentChange,
}: StudentFiltersProps) {
  return (
    <div className="filters">
      {/* Search students by name, ID, department, or track */}
      <label className="search">
        <span aria-hidden="true">⌕</span>

        <input
          aria-label="Search students"
          placeholder="Search students"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
        />
      </label>

      {/* Filter the directory by department */}
      <label className="department-filter">
        <span>Department:</span>

        <select
          value={department}
          onChange={(event) =>
            onDepartmentChange(event.target.value)
          }
        >
          <option>All departments</option>

          {departments.map((item) => (
            <option key={item.slug} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

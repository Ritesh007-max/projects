"use client";

import { useMemo, useState } from "react";
import { departments, students } from "@/data";
import { EmptyStudents } from "./EmptyStudents";
import { StudentFilters } from "./StudentFilters";
import { StudentGrid } from "./StudentGrid";
import { StudentListFooter } from "./StudentListFooter";

export function StudentDirectory() {
  const [query, setQuery] = useState("");
  const [department, setDepartment] = useState("All departments");
  const filteredStudents = useMemo(() => {
    const searchText = query.trim().toLowerCase();

    return students.filter((student) => {
      const matchesDepartment =
        department === "All departments" ||
        student.department === department;

      const studentDetails = `
        ${student.name}
        ${student.id}
        ${student.department}
        ${student.track}
      `.toLowerCase();

      const matchesSearch =
        !searchText || studentDetails.includes(searchText);

      return matchesDepartment && matchesSearch;
    });
  }, [query, department]);

  function clearFilters() {
    setQuery("");
    setDepartment("All departments");
  }

  return (
    <main className="page wrap">
      <div className="page-heading">
        <div>
          <h1>Students</h1>
          <p>
            Browse the student directory to find profiles and
            explore academic information.
          </p>
        </div>
      </div>

      <StudentFilters
        departments={departments}
        query={query}
        department={department}
        onQueryChange={setQuery}
        onDepartmentChange={setDepartment}
      />

      {filteredStudents.length > 0 ? (
        <StudentGrid students={filteredStudents} />
      ) : (
        <EmptyStudents onClear={clearFilters} />
      )}

      <StudentListFooter
        shown={filteredStudents.length}
        total={students.length}
      />
    </main>
  );
}

type EmptyStudentsProps = { onClear: () => void };

export function EmptyStudents({ onClear }: EmptyStudentsProps) {
  return (
    <div className="empty-state">
      <h2>No students found</h2>
      <p>Try a different name or department.</p>
      <button className="button secondary" onClick={onClear}>Clear filters</button>
    </div>
  )
}

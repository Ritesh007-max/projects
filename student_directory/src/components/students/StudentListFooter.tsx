type StudentListFooterProps = { shown: number; total: number };

export function StudentListFooter({ shown, total }: StudentListFooterProps) {
  return (
    <div className="list-footer">
      <span>Showing <strong>{shown}</strong> of <strong>{total}</strong> students</span>
      <div>
        <button className="button secondary" disabled>
          Previous
        </button>
        <button className="button secondary" disabled>
          Next
        </button>
      </div>
    </div>
    );
}
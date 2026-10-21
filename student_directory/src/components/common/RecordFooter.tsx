type RecordFooterProps = { recordId: string; validatedAt: string };

export function RecordFooter({ recordId, validatedAt }: RecordFooterProps) {
  return <div className="record-footer"><span>System Record ID: {recordId}</span><span>Last validated: {validatedAt}</span></div>;
}

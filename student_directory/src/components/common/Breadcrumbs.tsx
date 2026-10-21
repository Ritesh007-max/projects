
import Link from "next/link";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export function Breadcrumbs({
  items,
}: {
  items: BreadcrumbItem[];
}) {
  return (
    <div className="breadcrumbs">
      {items.map((item, index) => (
        <span
          className="breadcrumb-item"
          key={`${item.label}-${index}`}
        >
          {index > 0 && (
            <span aria-hidden="true">/</span>
          )}
          {item.href ? (
            <Link href={item.href}>{item.label}</Link>
          ) : (
            <strong>{item.label}</strong>
          )}
        </span>
      ))}
    </div>
  );
}

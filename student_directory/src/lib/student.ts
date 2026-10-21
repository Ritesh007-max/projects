export function initials(name: string): string {
  return name.split(/\s+/).map((part) => part[0]).join("").slice(0, 2).toUpperCase();
}

export function departmentPath(name: string): string {
  return name.toLowerCase().replaceAll(" ", "-");
}

export function ordinalYear(year: number): string {
  const suffix = year === 1 ? "st" : year === 2 ? "nd" : year === 3 ? "rd" : "th";
  return `${year}${suffix}`;
}

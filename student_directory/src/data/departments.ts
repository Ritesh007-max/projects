import type { Department } from "@/types";

export const departments: Department[] = [
  {
    slug: "computer-science",
    name: "Computer Science",
    description:
      "Explore software development, artificial intelligence, algorithms, and the systems that power modern technology.",
    specializations: 4,
    enrollment: 320,
  },
  {
    slug: "design",
    name: "Design",
    description:
      "Learn about user experience, visual communication, interactive design, and turning creative ideas into practical products.",
    specializations: 3,
    enrollment: 185,
  },
  {
    slug: "business",
    name: "Business",
    description:
      "Discover business strategy, financial technology, entrepreneurship, and data-driven decision-making.",
    specializations: 3,
    enrollment: 240,
  },
];

import type { Student } from "@/types";

export const students: Student[] = [
  {
    id: "STU-1042",
    name: "Aarav Mehta",
    department: "Computer Science",
    year: 3,
    track: "Web Development",
    email: "aarav.mehta@campus.edu",
    enrolled: "Fall 2022",
    about:
      "Aarav enjoys exploring distributed systems and cloud architecture. He works with languages like Rust and Go, and also helps first-year engineering students understand the basics of algorithms.",
    subjects: [
      {
        name: "CS-301: Distributed Systems & Microservices",
        credits: "4.0 Credits",
      },
      {
        name: "CS-340: Web Application Architecture",
        credits: "4.0 Credits",
      },
      {
        name: "CS-280: Algorithms & Complexity",
        credits: "3.5 Credits",
      },
    ],
  },
  {
    id: "STU-1089",
    name: "Elena Rostova",
    department: "Design",
    year: 2,
    track: "Visual Communication",
    email: "elena.rostova@campus.edu",
    enrolled: "Fall 2023",
    about:
      "Elena is passionate about visual storytelling and accessible design. She enjoys finding ways to make websites and applications easier to understand through thoughtful layouts and user-friendly interfaces.",
    subjects: [
      {
        name: "DS-210: Visual Communication",
        credits: "4.0 Credits",
      },
      {
        name: "DS-225: Interaction Design",
        credits: "3.5 Credits",
      },
    ],
  },
  {
    id: "STU-1120",
    name: "Marcus Chen",
    department: "Business",
    year: 4,
    track: "Business Analytics",
    email: "marcus.chen@campus.edu",
    enrolled: "Fall 2021",
    about:
      "Marcus is interested in financial technology and using data to make better business decisions. He also enjoys learning about global markets and how businesses can grow responsibly.",
    subjects: [
      {
        name: "BU-402: Strategic Management",
        credits: "4.0 Credits",
      },
      {
        name: "BU-318: Financial Technology",
        credits: "3.5 Credits",
      },
    ],
  },
  {
    id: "STU-1155",
    name: "Priya Sharma",
    department: "Computer Science",
    year: 1,
    track: "Web Development",
    email: "priya.sharma@campus.edu",
    enrolled: "Fall 2024",
    about:
      "Priya is getting started with modern web development and enjoys building simple, user-friendly websites. She is especially interested in creating digital tools that make everyday campus life easier.",
    subjects: [
      {
        name: "CS-101: Programming Foundations",
        credits: "4.0 Credits",
      },
      {
        name: "CS-140: Reactive UI Design",
        credits: "3.5 Credits",
      },
    ],
  },
  {
    id: "STU-1201",
    name: "Lucas Dubois",
    department: "Design",
    year: 3,
    track: "Product Design",
    email: "lucas.dubois@campus.edu",
    enrolled: "Fall 2022",
    about:
      "Lucas enjoys understanding what people need and turning those ideas into practical designs. He spends time researching, sketching, and testing prototypes, with a particular interest in tools that help people work together.",
    subjects: [
      {
        name: "DS-305: Product Prototyping",
        credits: "4.0 Credits",
      },
      {
        name: "DS-330: Design Research",
        credits: "3.5 Credits",
      },
    ],
  },
  {
    id: "STU-1244",
    name: "Maya Lin",
    department: "Business",
    year: 2,
    track: "International Entrepreneurship",
    email: "maya.lin@campus.edu",
    enrolled: "Fall 2023",
    about:
      "Maya is curious about entrepreneurship and how businesses operate in different parts of the world. She enjoys exploring new ideas and learning how small teams can turn them into successful ventures.",
    subjects: [
      {
        name: "BU-220: Global Markets",
        credits: "4.0 Credits",
      },
      {
        name: "BU-245: New Venture Design",
        credits: "3.5 Credits",
      },
    ],
  },
  {
    id: "STU-1310",
    name: "Tariq Al-Mansoor",
    department: "Computer Science",
    year: 4,
    track: "Web Development",
    email: "tariq.almansoor@campus.edu",
    enrolled: "Fall 2021",
    about:
      "Tariq enjoys building reliable web applications and working with distributed systems. He also likes collaborating with other students and helping teams turn their project ideas into working products.",
    subjects: [
      {
        name: "CS-410: Distributed Web Systems",
        credits: "4.0 Credits",
      },
      {
        name: "CS-430: Cloud Computing",
        credits: "4.0 Credits",
      },
    ],
  },
  {
    id: "STU-1388",
    name: "Sophia Müller",
    department: "Computer Science",
    year: 2,
    track: "Web Development",
    email: "sophia.mueller@campus.edu",
    enrolled: "Fall 2023",
    about:
      "Sophia enjoys building web apps that work smoothly on different devices. She is particularly interested in progressive web apps and making digital experiences accessible and convenient for users.",
    subjects: [
      {
        name: "CS-240: Progressive Web Apps",
        credits: "4.0 Credits",
      },
      {
        name: "CS-260: Human Computer Interaction",
        credits: "3.5 Credits",
      },
    ],
  },
];

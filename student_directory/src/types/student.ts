export type Subject = {
  name: string;
  credits: string;
};

export type Student = {
  id: string;
  name: string;
  department: string;
  year: number;
  track: string;
  email: string;
  enrolled: string;
  about: string;
  subjects: Subject[];
};

export type Department = {
  slug: string;
  name: string;
  description: string;
  specializations: number;
  enrollment: number;
};

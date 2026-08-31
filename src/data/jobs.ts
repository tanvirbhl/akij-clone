export interface JobPosition {
  id: number;
  designation: string;
  unit: string;
  department: string;
  experience: string;
  deadline: string;
  link: string;
}

export const jobsData: JobPosition[] = [
  {
    id: 1,
    designation: "Senior Software Engineer",
    unit: "NeosCoder",
    department: "IT",
    experience: "2",
    deadline: "31 Aug 2026",
    link: "/jobs/senior-software-engineer",
  },
  // Add more job objects here as needed in the future
];
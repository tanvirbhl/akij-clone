export interface Newsletter {
  id: number;
  title: string;
  month: string;
  year: string;
  description: string;
  fileUrl: string;
}

export const newsletterData: Newsletter[] = [
  {
    id: 1,
    title: "Corporate Newsletter",
    month: "March",
    year: "2026",
    description: "Akij Venture Monthly Newsletter",
    fileUrl: "/documents/newsletter-march-2026.pdf",
  },
  {
    id: 2,
    title: "Corporate Newsletter",
    month: "February",
    year: "2026",
    description: "Akij Venture Monthly Newsletter",
    fileUrl: "/documents/newsletter-february-2026.pdf",
  },
  {
    id: 3,
    title: "Corporate Newsletter",
    month: "January",
    year: "2026",
    description: "Akij Venture Monthly Newsletter",
    fileUrl: "/documents/newsletter-january-2026.pdf",
  },
  {
    id: 4,
    title: "Corporate Newsletter",
    month: "December",
    year: "2025",
    description: "Akij Venture Monthly Newsletter",
    fileUrl: "/documents/newsletter-december-2025.pdf",
  },
];
export interface SisterConcern {
  id: number;
  name: string;
  logo: string;
  link: string;
  isActive: boolean;
}

export const sisterConcernsData: SisterConcern[] = [
  {
    id: 1,
    name: "Akij Food & Beverage",
    logo: "/images/sister-concerns/food-beverage.png",
    link: "https://afbl.com",
    isActive: true,
  },
  {
    id: 2,
    name: "Akij Dairy",
    logo: "/images/sister-concerns/dairy.png",
    link: "#",
    isActive: false,
  },
  {
    id: 3,
    name: "Akij Agro",
    logo: "/images/sister-concerns/agro.png",
    link: "https://akijagro.com",
    isActive: true,
  },
  {
    id: 4,
    name: "Akij Bicycle",
    logo: "/images/sister-concerns/bicycle.png",
    link: "https://akijbicycle.com",
    isActive: true,
  },
  {
    id: 5,
    name: "Akij Health & Hygiene",
    logo: "/images/sister-concerns/health-hygiene.png",
    link: "#",
    isActive: false,
  },
  {
    id: 6,
    name: "Akij Electrical & Electronics",
    logo: "/images/sister-concerns/electronics.png",
    link: "https://akijee.com",
    isActive: true,
  },
  {
    id: 7,
    name: "Akij Takaful Life Insurance",
    logo: "/images/sister-concerns/takaful.png",
    link: "https://akijtakaful.com",
    isActive: true,
  },
  {
    id: 8,
    name: "Akij Paper Mills",
    logo: "/images/sister-concerns/paper-mills.png",
    link: "#",
    isActive: false,
  },
];
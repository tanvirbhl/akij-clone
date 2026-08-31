export interface Brand {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

export const brandsData: Brand[] = [
  {
    id: 1,
    title: "Akij Healthcare and Hygiene Ltd",
    description: "Leading provider of healthcare and hygiene products, focused on enhancing daily wellness and cleanliness.",
    image: "/images/brands/healthcare.png",
    link: "/brands/healthcare",
  },
  {
    id: 2,
    title: "Akij Bicycle & Engineering Ltd",
    description: "Renowned for high-quality bicycles and innovative engineering, promoting sustainability in transportation.",
    image: "/images/brands/bicycle.png",
    link: "/brands/bicycle",
  },
  {
    id: 3,
    title: "Akij Food And Beverage Ltd",
    description: "Offers a wide variety of beverages and food products, crafted with quality ingredients for a rich taste.",
    image: "/images/brands/food-beverage.png",
    link: "/brands/food-beverage",
  },
];
export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Elektrifikatsiya",
    techs: ["C#", "Prometheus", "Grafana"],
    link: "https://github.com/Stefan-5422/-T5-Elektrifikatsiya",
  },
  {
    title: "Klassik-Videospielsammlung",
    techs: ["JavaFX (Java)"],
    link: "https://github.com/LeonRothauer/Klassik-Videospielsammlung",
  },
  {
    title: "Portfolio / Template",
    techs: ["Astro"],
    link: "/",
    isComingSoon: true,
  },
];

export default projects;

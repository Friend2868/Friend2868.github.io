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
    link: "https://github.com/MaeWolff/dictionary-app",
  },
  {
    title: "Klassik-Videospielsammlung",
    techs: ["JavaFX (Java)"],
    link: "https://www.linablidi.fr/",
  },
  {
    title: "Portfolio / Template",
    techs: ["Astro"],
    link: "/",
    isComingSoon: true,
  },
];

export default projects;

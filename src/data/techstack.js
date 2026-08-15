// Central mapping of technology name -> logo asset.
// Used both for the homepage "Tech Stack" showcase and for rendering
// real logo icons next to course stack badges where a match exists.

export const techLogos = [
  { name: "JavaScript", logo: "/assets/logos/logo-javascript.png" },
  { name: "HTML5", logo: "/assets/logos/logo-html5.png" },
  { name: "CSS3", logo: "/assets/logos/logo-css3.png" },
  { name: "React", logo: "/assets/logos/logo-react.png" },
  { name: "Next.js", logo: "/assets/logos/logo-nextjs.png" },
  { name: "Tailwind CSS", logo: "/assets/logos/logo-tailwind.png" },
  { name: "Node.js", logo: "/assets/logos/logo-nodejs.png" },
  { name: "Express", logo: "/assets/logos/logo-express.png" },
  { name: "Sequelize", logo: "/assets/logos/logo-sequelize.png" },
  { name: "DBMS", logo: "/assets/logos/logo-database.png" },
  { name: "Postgres", logo: "/assets/logos/logo-postgres.png" },
  { name: "TypeScript", logo: "/assets/logos/logo-typescript.png" },
  { name: "Git", logo: "/assets/logos/logo-git.png" },
  { name: "GitHub", logo: "/assets/logos/logo-github.png" },
  { name: "Figma", logo: "/assets/logos/logo-figma.png" },
  { name: "Python", logo: "/assets/logos/logo-python.png" },
];

export function getTechLogo(name) {
  const match = techLogos.find(
    (t) => t.name.toLowerCase() === name.toLowerCase(),
  );
  return match?.logo ?? null;
}

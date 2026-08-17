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
  { name: "Bootstrap", logo: "/assets/logos/new/logo-bootstrap.png" },
  { name: "Shadcn", logo: "/assets/logos/new/logo-shadcn.png" },
  { name: "Node.js", logo: "/assets/logos/logo-nodejs.png" },
  { name: "Express", logo: "/assets/logos/logo-express.png" },
  { name: "Sequelize", logo: "/assets/logos/logo-sequelize.png" },
  { name: "Prisma", logo: "/assets/logos/new/logo-prisma.png" },
  { name: "Database", logo: "/assets/logos/logo-database.png" },
  { name: "Postgres", logo: "/assets/logos/logo-postgres.png" },
  { name: "MongoDB", logo: "/assets/logos/new/logo-mongodb.png" },
  { name: "TypeScript", logo: "/assets/logos/logo-typescript.png" },
  { name: "JSON", logo: "/assets/logos/new/logo-json.png" },
  { name: "Axios", logo: "/assets/logos/new/logo-axios.png" },
  { name: "Git", logo: "/assets/logos/logo-git.png" },
  { name: "GitHub", logo: "/assets/logos/logo-github.png" },
  { name: "GitLab", logo: "/assets/logos/new/logo-gitlab.png" },
  { name: "Bitbucket", logo: "/assets/logos/new/logo-bitbucket.png" },
  { name: "Figma", logo: "/assets/logos/logo-figma.png" },
  { name: "Python", logo: "/assets/logos/logo-python.png" },
  { name: "Flutter", logo: "/assets/logos/new/logo-flutter.png" },
  { name: "Firebase", logo: "/assets/logos/new/logo-firebase.png" },
  { name: "Vercel", logo: "/assets/logos/new/logo-vercel.png" },
  { name: "Render", logo: "/assets/logos/new/logo-render.png" },
];

export function getTechLogo(name) {
  const match = techLogos.find(
    (t) => t.name.toLowerCase() === name.toLowerCase(),
  );
  return match?.logo ?? null;
}

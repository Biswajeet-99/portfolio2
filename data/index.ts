export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Education", link: "#education" },
  { name: "Contact", link: "#contact" },
] as const;

export const gridItems = [
  {
    id: 1,
    title: "I focus on clean architecture, practical solutions, and continuous learning",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Based in Cuttack, Odisha — flexible with global remote collaboration",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "B.Sc. ITM student passionate about Full-Stack, Cloud, DevOps & AI/ML.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Currently building full-stack web apps & exploring Cloud/DevOps",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
] as const;

export const projects = [
  {
    id: 1,
    title: "Ravenshaw Free Fire Esports",
    des: "A persistent full-stack esports tournament portal with MySQL-compatible schema, SQL queries, API backend, and live Vercel deployment.",
    img: "/project-esports.svg",
    iconLists: ["/html.svg", "/mysql.svg", "/git.svg", "/cloud.svg"],
    link: "https://ravenshaw-free-fire-esports.vercel.app",
    sourceCode: "https://github.com/Biswajeet-99/ravenshaw-free-fire-esports",
  },
  {
    id: 2,
    title: "FinPulse - WealthTrack",
    des: "A personal wealth and expense dashboard built with Python, CustomTkinter, and MySQL for tracking income, spending, and financial metrics.",
    img: "/project-finpulse.svg",
    iconLists: ["/python.svg", "/mysql.svg", "/git.svg"],
    link: "https://github.com/Biswajeet-99/FinPulse-WealthTrack",
    sourceCode: "https://github.com/Biswajeet-99/FinPulse-WealthTrack",
  },
  {
    id: 3,
    title: "Personal Developer Portfolio",
    des: "A modern dark-themed developer portfolio built with Next.js, TypeScript, Tailwind CSS, 3D visuals, and scroll-linked background animations.",
    img: "/project-portfolio.svg",
    iconLists: ["/next.svg", "/re.svg", "/tail.svg", "/ts.svg", "/fm.svg"],
    link: "https://github.com/Biswajeet-99",
    sourceCode: "https://github.com/Biswajeet-99",
  },
  {
    id: 4,
    title: "Full-Stack & Cloud Experiments",
    des: "Open-source repositories exploring web engineering, database design, Python automation, and cloud deployment workflows on GitHub.",
    img: "/project-labs.svg",
    iconLists: ["/python.svg", "/html.svg", "/mysql.svg", "/dock.svg", "/git.svg"],
    link: "https://github.com/Biswajeet-99?tab=repositories",
    sourceCode: "https://github.com/Biswajeet-99?tab=repositories",
  },
] as const;

export const testimonials: ReadonlyArray<{
  quote: string;
  name: string;
  title: string;
}> = [];

export const companies: ReadonlyArray<{
  id: number;
  name: string;
  img: string;
  nameImg: string;
}> = [];

export const workExperience = [
  {
    id: 1,
    title: "B.Sc. in ITM — Ravenshaw University",
    desc: "Pursuing a Bachelor of Science in Information Technology & Management (ITM) in Cuttack, building a strong foundation in programming, DBMS, web development, and software engineering.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Higher Secondary — Hariharananda Balashram",
    desc: "Completed higher secondary education at Hariharananda Balashram, developing strong analytical skills, academic discipline, and an early interest in computing and technology.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Full-Stack Web & Database Development",
    desc: "Designing and deploying responsive web applications with HTML/CSS, PHP, JavaScript, Next.js, MySQL, and Vercel.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Python, Cloud & DevOps Exploration",
    desc: "Building Python desktop dashboards and actively growing hands-on skills across Cloud/AWS, DevOps workflows, Git/GitHub, and AI/ML.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
] as const;

export const socialMedia = [
  {
    name: "GitHub",
    img: "/git.svg",
    link: "https://github.com/Biswajeet-99",
  },
  {
    name: "X",
    img: "/twit.svg",
    link: "https://x.com/TechBiswajeet99",
  },
  {
    name: "LinkedIn",
    img: "/link.svg",
    link: "https://www.linkedin.com/in/biswajeet-das-4a31a3412",
  },
  {
    name: "Instagram",
    img: "/insta.svg",
    link: "https://www.instagram.com/____________.___________94?bqrl=MTU0Y3U5NWZzbnFuNA==",
  },
] as const;

export const techStack = {
  stack1: ["Python", "Java", "HTML/CSS"],
  stack2: ["PHP", "MySQL", "Next.js"],
} as const;

import type { Metadata } from "next";

export const links = {
  sourceCode: "https://github.com/Biswajeet-99",
  ownerName: "Biswajeet Das",
  ownerEmail: "techbiswajeet1997@gmail.com",
} as const;

export const siteConfig: Metadata = {
  title: `${links.ownerName} | Developer Portfolio`,
  description:
    "Personal developer portfolio of Biswajeet Das — Full-Stack Developer and B.Sc. ITM student at Ravenshaw University, Cuttack, Odisha.",
  keywords: [
    "biswajeet das",
    "portfolio",
    "full-stack developer",
    "ravenshaw university",
    "bsc itm",
    "python",
    "java",
    "php",
    "mysql",
    "nextjs",
    "react",
    "tailwindcss",
    "framer-motion",
    "cloud",
    "devops",
    "odisha",
  ] as Array<string>,
  authors: {
    name: links.ownerName,
    url: "https://github.com/Biswajeet-99",
  },
} as const;

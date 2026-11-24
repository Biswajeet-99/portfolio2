# Biswajeet Das — Developer Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=flat&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-14-0055FF?style=flat&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Three.js](https://img.shields.io/badge/Three.js-3D-000000?style=flat&logo=threedotjs&logoColor=white)](https://threejs.org/)

Personal developer portfolio showcasing my projects, technical stack, education, and development approach — built with **Next.js**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Three.js**.

## Key Features

- **Scroll-Linked Ambient Background (`ScrollBackground`)**: Smooth spring-interpolated parallax nebula glows, a drifting dot-grid field, and a top scroll progress bar powered by Framer Motion.
- **Interactive Bento Grid**: Highlight cards featuring a 3D interactive Three.js globe, tech stack showcase, and one-click email copy with Lottie confetti feedback.
- **3D Pin Project Showcase**: Interactive 3D hover cards highlighting my work including **Ravenshaw Free Fire Esports** and **FinPulse - WealthTrack**.
- **Education & Journey**: Animated moving-border cards detailing my B.Sc. ITM studies at Ravenshaw University, higher secondary education at Harindabala Shram, and core engineering focus areas.
- **Hover-Reveal Approach Cards**: Interactive canvas reveal cards outlining my build workflow from planning to launch.
- **Responsive Dark Theme**: Engineered for desktop and mobile with floating scroll-aware navigation.

## Tech Stack

- **Framework:** Next.js (App Router), React, TypeScript
- **Styling:** Tailwind CSS, `clsx`, `tailwind-merge`
- **Animation & 3D:** Framer Motion, Three.js (`@react-three/fiber`, `@react-three/drei`, `three-globe`), Lottie
- **Icons:** React Icons

## Project Structure

```text
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── provider.tsx
├── components/
│   ├── approach.tsx
│   ├── experience.tsx
│   ├── footer.tsx
│   ├── grid-globe.tsx
│   ├── grid.tsx
│   ├── hero.tsx
│   ├── recent-projects.tsx
│   └── ui/
│       ├── scroll-background.tsx
│       └── ...
├── config/
│   └── index.ts
├── data/
│   └── index.ts
└── public/
```

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/Biswajeet-99/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

This project is ready for one-click deployment on [Vercel](https://vercel.com/):

1. Push this repository to GitHub.
2. Import the repository in your Vercel dashboard.
3. Click **Deploy** — Next.js build settings are detected automatically.

## Connect With Me

- **GitHub:** [github.com/Biswajeet-99](https://github.com/Biswajeet-99)
- **LinkedIn:** [linkedin.com/in/biswajeet-das-4a31a3412](https://www.linkedin.com/in/biswajeet-das-4a31a3412)
- **X (Twitter):** [x.com/TechBiswajeet99](https://x.com/TechBiswajeet99)
- **Email:** techbiswajeet1997@gmail.com

## License

This project is licensed under the [MIT License](LICENSE).

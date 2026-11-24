"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export const ScrollBackground = () => {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });

  // Parallax vertical & horizontal drifts for ambient background layers
  const orb1Y = useTransform(smoothProgress, [0, 1], ["-8%", "42%"]);
  const orb1X = useTransform(smoothProgress, [0, 1], ["-6%", "14%"]);
  const orb1Scale = useTransform(smoothProgress, [0, 0.5, 1], [1, 1.18, 0.96]);

  const orb2Y = useTransform(smoothProgress, [0, 1], ["18%", "-32%"]);
  const orb2X = useTransform(smoothProgress, [0, 1], ["8%", "-16%"]);
  const orb2Scale = useTransform(smoothProgress, [0, 0.5, 1], [0.95, 1.15, 1.05]);

  const orb3Y = useTransform(smoothProgress, [0, 1], ["48%", "-18%"]);
  const orb3Rotate = useTransform(smoothProgress, [0, 1], [0, 40]);

  const gridY = useTransform(smoothProgress, [0, 1], ["0%", "-14%"]);
  const beamX = useTransform(smoothProgress, [0, 1], ["-25%", "25%"]);

  return (
    <>
      {/* Top scroll progress indicator */}
      <motion.div
        aria-hidden="true"
        style={{ scaleX: smoothProgress }}
        className="pointer-events-none fixed left-0 right-0 top-0 z-[5001] h-[2px] origin-left bg-gradient-to-r from-[#cbacf9] via-[#6366f1] to-[#38bdf8] opacity-90"
      />

      {/* Ambient scroll-linked background layer */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        {/* Subtle parallax dot-grid field */}
        <motion.div
          style={{
            y: gridY,
            backgroundImage:
              "radial-gradient(rgba(203, 172, 249, 0.14) 1px, transparent 1px)",
            backgroundSize: "34px 34px",
          }}
          className="absolute -inset-y-24 inset-x-0 opacity-45 [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_80%)]"
        />

        {/* Soft purple nebula orb (top-left -> lower-center) */}
        <motion.div
          style={{ y: orb1Y, x: orb1X, scale: orb1Scale }}
          className="absolute -left-24 top-10 h-[32rem] w-[32rem] rounded-full bg-[#cbacf9]/[0.11] blur-[120px]"
        />

        {/* Deep indigo/blue nebula orb (right -> upper-left) */}
        <motion.div
          style={{ y: orb2Y, x: orb2X, scale: orb2Scale }}
          className="absolute -right-24 top-[30%] h-[34rem] w-[34rem] rounded-full bg-[#4f46e5]/[0.14] blur-[130px]"
        />

        {/* Subtle cyan/violet aurora ribbon */}
        <motion.div
          style={{ y: orb3Y, x: beamX, rotate: orb3Rotate }}
          className="absolute bottom-0 left-1/4 h-[26rem] w-[42rem] rounded-full bg-gradient-to-r from-[#38bdf8]/[0.09] via-[#a855f7]/[0.1] to-transparent blur-[125px]"
        />
      </div>
    </>
  );
};

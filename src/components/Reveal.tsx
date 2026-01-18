"use client";

import { motion, type MotionProps } from "framer-motion";

export function Reveal({
  children,
  delay = 0,
  ...props
}: {
  children: React.ReactNode;
  delay?: number;
} & MotionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedBody from "../animations/AnimatedBody";
import React from "react";

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#0E1016]">
      {/* Background texture (same as Contact) */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.05),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.04),transparent_45%)]" />

      <motion.section
        className="flex min-h-[14vh] w-full items-center justify-center px-4 pb-28 pt-10 text-[#e4ded7] md:pb-16 lg:min-h-[10vh] lg:pb-6"
        initial="initial"
        animate="animate"
      >
        <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center justify-between gap-4 text-center text-[12px] sm:flex-row sm:text-left md:text-[14px]">
          <AnimatedBody
            text={"© 'LW_19'-24. All Rights Reserved."}
            className="p-0 m-0"
          />

          <div className="flex flex-col items-center gap-1 sm:flex-row sm:gap-2">
            <AnimatedBody text={"Design & Deployed by"} className="p-0 m-0" />
            <Link
              href="https://github.com/lw-108"
              target="_blank"
              aria-label="lw-108 UI Github"
              className="underline underline-offset-2 hover:no-underline"
            >
              <AnimatedBody text={"LW_19"} className="p-0 m-0" />
            </Link>
          </div>
        </div>
      </motion.section>

      {/* 👇 Mobile-only dock spacer */}
      <div className="block h-20 md:hidden" />
    </footer>
  );
};

export default Footer;

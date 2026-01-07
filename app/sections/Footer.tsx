import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedBody from "../animations/AnimatedBody";
import React from "react";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  

  return (
    <footer className="relative w-full overflow-hidden bg-[#0E1016] border-t border-white/[0.07]">
      {/* Tech grid background */}
      <div className="absolute inset-0 -z-20 opacity-30">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(120,119,198,0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(120,119,198,0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0E1016] to-[#0E1016]" />
      </div>

      {/* Animated energy pulse */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] overflow-hidden">
        <motion.div
          className="absolute w-full h-full bg-gradient-to-r from-transparent via-green-400 to-transparent"
          initial={{ x: "-100%", opacity: 0.3 }}
          animate={{ x: "100%", opacity: [0.3, 1, 0.3] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Glowing orbs */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <motion.div
          className="absolute w-32 h-32 rounded-full top-1/4 -left-4 bg-green-500/5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-32 h-32 rounded-full bottom-1/4 -right-4 bg-cyan-500/5 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.section
        className="relative flex min-h-[18vh] w-full items-center px-6 py-10 lg:min-h-[14vh] lg:py-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center justify-between gap-8 lg:flex-row">
          
          {/* Left section with Omnitrix */}
          <motion.div 
            className="flex items-center gap-4"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <div className="relative group">
              {/* Outer glow */}
              <div className="absolute transition-all duration-500 rounded-full opacity-0 -inset-3 bg-gradient-to-r from-green-500/20 to-cyan-500/20 group-hover:opacity-100 blur-lg" />
              
              {/* Omnitrix container */}
              <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#1a1c23] to-[#0E1016] border border-green-500/20 group-hover:border-green-400/40 transition-all duration-300">
                {/* Pulsing ring */}
                <motion.div
                  className="absolute inset-0 border rounded-full border-green-400/30"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                {/* Omnitrix icon */}
                <div className="relative w-8 h-8">
                  <img
                    src="/omnitrix.svg"
                    alt="Omnitrix"
                    width={100}
                    height={100}
                    className="object-contain filter drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]"
                  />
                  
                  {/* Green glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-green-500/10 blur-sm"
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <AnimatedBody
                  text={`© LW19-${currentYear}`}
                  className="font-medium text-[#e4ded7] p-0 m-0 text-sm"
                />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="text-green-400"
                >
                  <span className="text-xs">
                    <Image src="/omnitrix.svg" alt="omnitrix" width={17} height={17} />
                  </span>
                </motion.div>
              </div>
              
            </div>
          </motion.div>

          {/* Center decorative element */}
          <div className="items-center hidden gap-4 lg:flex">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-green-400/50"
            >
              <span className="text-lg">🚀</span>
            </motion.div>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
          </div>

          {/* Right section - Developer info */}
          <div className="flex flex-col items-center gap-1 sm:flex-row sm:items-center sm:gap-2">
            <span className="text-sm text-white/70">
              Built by 
            </span>
            
            <Link
              href="https://github.com/lw-108"
              target="_blank"
              aria-label="lw-108 UI Github"
              className="text-sm font-medium text-green-500 transition-colors hover:text-green-400"
            >
              LW_19
            </Link>
          </div>

      {/* DNA strand separator - FIXED ANIMATION */}
     
      {/* Mobile spacer */}
      <div className="relative block h-24 md:hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-green-500/30 to-transparent" />
        </div>
      </div>
        </div>
      </motion.section>
    </footer>
  );
};

export default Footer;
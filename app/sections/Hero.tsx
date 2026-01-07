import { inter } from "../fonts/inter";
import { motion } from "framer-motion";
import HeroBackground from "../components/background/HeroBackground";
import React, { useEffect, useState } from "react";
import AnimatedTitle from "../animations/AnimatedTitle";

const roles = [
    "Frontend Engineer",
    "Web Developer",
    "React & Next.js Developer",
    "UI-Focused Engineer",
    "MERN Stack Developer",
];

const TYPING_SPEED = 80;
const DELETING_SPEED = 50;
const HOLD_DURATION = 1200;

const Hero = () => {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[roleIndex];
        let timeout: NodeJS.Timeout;

        if (!isDeleting && displayText.length < currentRole.length) {
            timeout = setTimeout(() => {
                setDisplayText(currentRole.slice(0, displayText.length + 1));
            }, TYPING_SPEED);
        } else if (isDeleting && displayText.length > 0) {
            timeout = setTimeout(() => {
                setDisplayText(currentRole.slice(0, displayText.length - 1));
            }, DELETING_SPEED);
        } else if (!isDeleting && displayText.length === currentRole.length) {
            timeout = setTimeout(() => setIsDeleting(true), HOLD_DURATION);
        } else if (isDeleting && displayText.length === 0) {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, roleIndex]);

    return (
        <motion.section
            className="relative z-10 flex items-center justify-center w-full h-screen overflow-hidden"
            id="home"
            initial="initial"
            animate="animate"
        >
            <HeroBackground />

            <div className="flex flex-col items-center justify-center px-4 text-center">
                <div
                    className={`relative flex flex-col items-center justify-center ${inter.className}`}
                >
                    {/* Name */}
                    <AnimatedTitle
                        text={"I'm Lingeshwarma."}
                        className="mb-3 text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[48px] md:text-[64px] lg:text-[88px]"
                        wordSpace="mr-[10px]"
                        charSpace="mr-[0.001em]"
                    />

                    {/* Static base role */}
                    {/* <AnimatedTitle
                        text={"Web Developer"}
                        className="mb-6 text-[20px] font-semibold tracking-tight text-[#e4ded7]/90 sm:text-[26px] md:text-[32px] lg:text-[40px]"
                        wordSpace="mr-[8px]"
                        charSpace="mr-[0.001em]"
                    /> */}

                    {/* Typing Roles */}
                    <motion.div
                        className="flex items-center gap-1 text-[18px] font-medium uppercase tracking-widest text-[#e4ded7]/70 sm:text-[15px] md:text-[20px] mt-5"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        <span>{displayText}</span>
                        <span className="animate-pulse">|</span>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default Hero;

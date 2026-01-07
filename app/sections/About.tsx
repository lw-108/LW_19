import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
    return (
        <section
            className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
            id="about"
        >
            <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <AnimatedTitle
                    text={"About Me"}
                    className={
                        "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />

                <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16 lg:max-w-[90%] lg:text-[24px]">
                        <AnimatedBody text="I am currently pursuing my Master&apos;s degree in Computer Applications. I have a strong interest in Front-end and Full Stack Development, and I&apos;m confident in my skills with JavaScript, Next.js, React.js, and HTML & CSS. I enjoy exploring new ideas, taking on challenges, and continuously expanding my knowledge across different domains, as every experience adds value to my learning journey. I&apos;m especially focused on improving areas where I can grow further." />

                        <AnimatedBody
                            delay={0.1}
                            text="From crafting clean and intuitive user interfaces to building complex applications, I always aim to deliver thoughtful and creative solutions. I enjoy experimenting with modern tools and frameworks while keeping myself updated with the evolving trends in technology."
                        />

                        <AnimatedBody
                            delay={0.2}
                            text="At the moment, I&apos;m involved in several exciting projects that I&apos;ll be sharing soon. I&apos;m also eager to explore new opportunities and collaborate with others to build impactful solutions."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

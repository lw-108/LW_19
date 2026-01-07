import {
    SiCplusplus,
    SiFramer,
    SiGithub, SiNeovim,
    SiNextdotjs,
    SiReact,
    SiRust,
    SiTailwindcss,
    SiTypescript,
    SiWebgl,
    SiZig
} from "react-icons/si";
import {IconType} from "react-icons";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: IconType[];
  techNames: string[];
  techLinks: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const projects = [
    {
        id: 0,
        name: "U Fill Academy",
        description:
            "Developed the official website for U-Fill Academy. ",
        technologies: [SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiFramer],
        techNames: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion"],
        techLinks: ["https://www.typescriptlang.org/", "https://reactjs.org/", "https://nextjs.org/", "https://tailwindcss.com/", "https://www.framer.com/motion/"],
        github: "https://github.com/lw-108/UFAF",
        demo: "https://ufaf.vercel.app/",
        image: "/projects/ufill.png",
        available: true,
    },
    {
        id: 1,
        name: "AI Tools & React Seminar",
        description:
            "Developed an AI tools and React based Seminar website using Next.Js",
        technologies: [SiTypescript, SiReact, SiTailwindcss],
        techNames: [ "Typescript", "React", "Tailwind CSS"],
        techLinks: ["https://get.webgl.org/", "https://www.typescriptlang.org/", "https://reactjs.org/"],
        github: "https://github.com/lw-108/full-AI-RT-SEMINAR",
        demo: "https://141025mcaairtseminarlw19.vercel.app/",
        image: "/projects/seminar.png",
        available: true,
    },
];

import "./globals.css";
import React, { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const syne = Inter({
    subsets: ["latin"],
    display: "block",
    weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://www.example.com/"),
    title: {
        default: "LW_19",
        template: "%s | LW-108",
    },
    description:
        "LW_19 is a Frontend Developer Portfolio built with React, Typescript, Tailwind CSS, and Framer Motion.",
    generator: "Next.js",
    icons: {
        icon: "/omnitrix.svg",
        shortcut: "/omnitrix.svg",
        apple: "/omnitrix.svg",
    },
    applicationName: "Portfolio template",
    keywords: [
        "Portfolio template",
        "React",
        "developer",
        "frontend",
        "nextjs",
        "react",
        "frontend developer",
        "frontend engineer",
        "creative",
        "creative developer",
        "creative engineer",
        "tech",
        "software",
        "software developer",
        "portfolio",
        "frontend developer portfolio",
        "creative developer portfolio",
        "creative engineer portfolio",
        "software developer portfolio",
        "frontend engineer portfolio",
    ],
    colorScheme: "dark",
    openGraph: {
        title: "Portfolio template - lw-108 UI",
        description:
            "LW_19 is a portfolio template built with React, Typescript, Tailwind CSS, and Framer Motion. 100% open-source, and customizable.",
        url: "https://www.lw-108.site/",
        siteName: "www.lw-108.site",
        images: [
            {
                url: "/metadata.jpg",
                width: 1200,
                height: 630,
                alt: "Portfolio template - lw-108 UI",
            },
        ],
        locale: "en-US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "LW_19",
        description:
            "Portfolio template - LW_19 is a portfolio template built with React, Typescript, Tailwind CSS, and Framer Motion. 100% open-source, and customizable.",
        creator: "@lw-108",
        creatorId: "0000000000",
        images: ["/metadata.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    category: "technology",
};

type RootLayoutProps = {
    children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body
                className={`${syne.className} scroll-smooth scrollbar-none scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
            >
                {children}
            </body>
        </html>
    );
}

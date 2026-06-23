import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import IntroAnimation from "@/components/IntroAnimation";

export const metadata: Metadata = {
  metadataBase: new URL("https://coldcraft.studio"),
  title: {
    default: "Pavan Gajula — Full-stack engineer",
    template: "%s · Pavan Gajula",
  },
  description:
    "Pavan Gajula — full-stack engineer in Maryland. Five years building enterprise systems. Three years building small websites.",
  keywords: [
    "Java Full Stack Developer",
    "Spring Boot",
    "React",
    "AWS",
    "Microservices",
    "HCI Research",
    "Human-AI Interaction",
    "PhD Applicant",
    "Pavan Gajula",
    "Maryland",
  ],
  authors: [{ name: "Pavan Gajula" }],
  openGraph: {
    title: "Pavan Gajula — Engineer & Researcher",
    description:
      "Full Stack Engineer building production systems. Researching human-AI interaction in professional software tools.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pavan Gajula",
    description:
      "Engineer · Researcher · PhD applicant in human-computer interaction.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="system">
      <head>
        {/* Reads localStorage before first paint — prevents flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark'||t==='system')document.documentElement.dataset.theme=t;}catch(e){}`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link href="https://api.fontshare.com/v2/css?f[]=bevellier@600,700,800&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,400;6..12,600;6..12,700&display=swap" rel="stylesheet" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
        />
      </head>
      <body>
        <IntroAnimation />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

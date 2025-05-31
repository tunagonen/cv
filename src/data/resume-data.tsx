import {
  ClevertechLogo,
  ConsultlyLogo,
  JojoMobileLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Bartosz Jarocki",
  initials: "BJ",
  location: "Wrocław, Poland, CET",
  locationLink: "https://www.google.com/maps/place/Wrocław",
  about:
    "Detail-oriented Full Stack Engineer dedicated to building high-quality products.",
  summary: (
    <>
      Frontend-focused Full Stack Engineer specializing in high-performance
      React applications, scalable Node.js services, and real-time collaboration
      systems. Experienced in technical architecture design and remote team
      leadership.
    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/1017620?v=4",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "bartosz.jarocki@hey.com",
    tel: "+48530213401",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/BartoszJarocki",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/bjarocki/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/BartoszJarocki",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Wrocław University of Technology",
      degree: "Bachelor's Degree in Control systems engineering and Robotics",
      start: "2007",
      end: "2010",
    },
  ],
  work: [
    {
<<<<<<< Updated upstream
      company: "Film.io",
      link: "https://film.io",
      badges: ["Remote", "React", "Next.js", "TypeScript", "Node.js"],
      title: "Software Architect",
      logo: ConsultlyLogo,
      start: "2024",
      end: null,
      description: (
        <>
          Leading technical architecture of a blockchain-based film funding
          platform.
          <ul className="list-inside list-disc">
            <li>
              Architecting migration from CRA to Next.js for improved
              performance, SEO, and DX
            </li>
            <li>
              Established release process enabling faster deployments and
              reliable rollbacks
            </li>
            <li>
              Implementing system-wide monitoring and security improvements
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Parabol",
      link: "https://parabol.co",
      badges: [
        "Remote",
        "React",
        "TypeScript",
        "Node.js",
        "GraphQL",
        "Tailwind CSS",
=======
      company: "Red Sift",
      link: { href: "https://redsift.com" },
      positions: [
        {
          title: "Senior Data Scientist",
          start: "Jan 2025",
          end: null,
          badges: [],
          descriptions: [
            "⦿ Organized and facilitated brainstorming sessions and technical workshops with software engineers to foster innovation and share the latest advancements in Generative AI.",
          ],
        },
        {
          title: "Data Scientist",
          start: "Dec 2022",
          end: "Dec 2024",
          badges: [],
          descriptions: [
            "⦿ Trained NLP models for text classification POCs, leveraging data sources including public datasets, and proprietary company feeds.",
            "⦿ Debugged production NLP models by analyzing biases and data quality issues, iterated on models by finding new data, tuning hyperparameters, and exploring other model architectures.",
            "⦿ Created automated data collection pipelines combining web scraping and API integrations to create high-quality training datasets for model development and validation.",
            "⦿ Led the development of a cybersecurity chat assistant on analyzing the web security posture of domains and ips and recommending fixes using LLM APIs, product APIs and internal knowledge bases. Implemented ideas on AI agents from research papers on LLM orchestration, tool-use and security.",
          ],
        },
      ],
    },
    {
      company: "King's College, Human Centred Computing Group",
      link: { href: "https://www.kcl.ac.uk/research/hcc" },
      positions: [
        {
          title: "Research Software Engineer",
          start: "Mar 2022",
          end: "Dec 2022",
          badges: [],
          descriptions: [
            "⦿ Co-led the full-stack development of a visualization system tailored for epigenetics researchers, facilitating the exploration of connections between DNA methylation patterns and complex human traits using advanced network summarization and community detection algorithms.",
            "⦿ Organized interdisciplinary meetings with computer scientists and domain experts to benchmark existing systems and identify novel research opportunities in multi-omics data integration and analysis.",
          ],
        },
>>>>>>> Stashed changes
      ],
      title: "Senior Full Stack Developer",
      logo: ParabolLogo,
      start: "2021",
      end: "2024",
      description: (
        <>
          Senior developer and squad leader for an enterprise agile meeting
          platform.
          <ul className="list-inside list-disc">
            <li>
              Built design system with Tailwind CSS, improving development speed
              and time to market
            </li>
            <li>
              Implemented engineering practices: PR automation, code review
              guidelines, and workflows
            </li>
            <li>
              Open source contributions to Relay DevTools and React i18n tooling
            </li>
          </ul>
        </>
      ),
    },
    {
<<<<<<< Updated upstream
      company: "Clevertech",
      link: "https://clevertech.biz",
      badges: ["Remote", "React", "TypeScript", "Node.js", "Android", "Kotlin"],
      title: "Lead Android Developer → Full Stack Developer",
      logo: ClevertechLogo,
      start: "2015",
      end: "2021",
      description: (
        <>
          Successfully transitioned from mobile to full-stack development while
          leading distributed teams.
          <ul className="list-inside list-disc">
            <li>
              Led frontend team at Evercast, building real-time platform
              supporting 30+ users per room with HD streaming and collaboration
              tools
            </li>
            <li>
              Developed offline-first Android app for DKMS, improving donor
              registration process
            </li>
            <li>
              Led development teams across multiple successful client projects
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Jojo Mobile",
      link: "https://bsgroup.eu/",
      badges: ["On Site", "Android", "Java", "Kotlin"],
      title: "Android Developer → Lead Android Developer",
      logo: JojoMobileLogo,
      start: "2012",
      end: "2015",
      description: (
        <>
          First Android developer, grew and led a team of 15+ engineers while
          establishing engineering culture.
          <ul className="list-inside list-disc">
            <li>
              Developed apps for major Polish companies including LOT, Polskie
              Radio, and Agora
            </li>
            <li>Built and mentored high-performing mobile development team</li>
          </ul>
        </>
      ),
    },
    {
      company: "Nokia Siemens Networks",
      link: "https://www.nokia.com",
      badges: ["On Site", "C/C++", "LTE", "Agile"],
      title: "C/C++ Developer",
      logo: NSNLogo,
      start: "2010",
      end: "2012",
      description:
        "Developed software for LTE base stations at enterprise scale, gaining strong fundamentals in software architecture, testing practices, and cross-team collaboration.",
=======
      company: "University of Oxford, e-Research Center",
      link: { href: "https://oerc.ox.ac.uk/" },
      positions: [
        {
          title: "Research Software Engineer",
          start: "Jul 2021",
          end: "Feb 2022",
          badges: [],
          descriptions: [
            "⦿ Responsible for the full-stack development of a multidimensional time-series search, visualization, and prediction system, empowering health experts and decision-makers to dissect and compare global pandemic trends. Incorporated time-series similarity and clustering algorithms, complemented by uncertainty visualization, to deliver critical insights.",
            "⦿ Partnered with a diverse team of academics from machine learning and data visualization fields to forge interactive Observable notebooks which includes state-of-the-art data-mining techniques and innovative dashboard designs tailored for helping governmental decision-making capabilities.",
            "⦿ Refined iterative online surveys, and 'think aloud' feedback sessions with target users to pinpoint necessary system enhancements and optimize user interface design.",
          ],
        },
      ],
>>>>>>> Stashed changes
    },
  ],
  skills: [
    "React/Next.js/Remix",
    "TypeScript",
    "Tailwind CSS",
    "Design Systems",
    "WebRTC",
    "WebSockets",
    "Node.js",
    "GraphQL",
    "Relay",
    "System Architecture",
    "Remote Team Leadership",
  ],
  projects: [
    {
      title: "Monito",
      techStack: ["TypeScript", "Next.js", "Browser Extension", "PostgreSQL"],
      description:
        "Browser extension for debugging web applications. Includes taking screenshots, screen recording, E2E tests generation and generating bug reports",
      logo: MonitoLogo,
      link: {
<<<<<<< Updated upstream
        label: "monito.dev",
        href: "https://monito.dev/",
=======
        label: "Red Sift Radar",
        href: "https://radar.redsift.com",
>>>>>>> Stashed changes
      },
    },
    {
      title: "Consultly",
      techStack: [
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
        "Tailwind CSS",
        "PostgreSQL",
        "Redis",
      ],
      description:
        "Platform for online consultations with real-time video meetings and scheduling",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Minimalist CV",
      techStack: ["TypeScript", "Next.js", "Tailwind CSS"],
      description:
        "An open source minimalist, print friendly CV template with a focus on readability and clean design. >9k stars on GitHub",
      logo: MonitoLogo,
      link: {
        label: "Minimalist CV",
        href: "https://github.com/BartoszJarocki/cv",
      },
    },
  ],
} as const;

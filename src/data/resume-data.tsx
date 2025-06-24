import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Tuna Gönen",
  initials: "TG",
  location: "London, UK",
  about: "",
  summary:
    "Full-stack data scientist specializing in AI-powered cybersecurity solutions and data visualization systems. Expert in Python and TypeScript with deep experience in NLP, large language models, and human-AI interaction design. Passionate about applying cutting-edge AI research to solve complex problems in cybersecurity, healthcare analytics, and music technology.",
  contact: {
    email: "tunagonen@gmail.com",
    tel: "+447904872456",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/tunagonen",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/tuna-g%C3%B6nen-024340b6/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Oxford",
      degree: "MEng (Master of Engineering in Engineering Science)",
      start: "2015",
      end: "2021",
      description: "2.i",
    },
  ],
  work: [
    {
      company: "Red Sift",
      link: { href: "https://redsift.com" },
      badges: [],
      roles: [
        {
          title: "Senior Data Scientist",
          start: "Jan 2025",
          end: null,
          descriptions: [
            "⦿ Built Radar, an intelligent cybersecurity agent that automates security workflows by integrating internal security APIs with RAG-powered knowledge retrieval, reducing manual threat analysis time by 10x.",
            "⦿ Collaborated with design and engineering teams to develop innovative agent-human interaction patterns, staying current with generative AI research to implement advanced workflow optimization techniques.",
          ],
        },
        {
          title: "Data Scientist",
          start: "Dec 2022",
          end: "Jan 2025",
          descriptions: [
            "⦿ Led end-to-end NLP model development for supply-chain relationship detection and advanced phishing identification, processing millions of emails daily and achieving >90% accuracy through ensemble models with multiple classifiers.",
            "⦿ Orchestrated complete ML pipeline from data collection (internal databases and web scraping) through model training, deployment, and monitoring to validate technical feasibility and business viability of strategic product pivots.",
            "⦿ Organized strategic product development sessions and workshops to transfer Generative AI expertise to software engineering teams, catalyzing the creation of 3 new product features on AI-assisted asset discovery, email forensics summarization and DNS record fixing through cross-functional collaboration.",
          ],
        },
      ],
    },
    {
      company: "King's College, Human Centred Computing Group",
      link: { href: "https://www.kcl.ac.uk/research/hcc" },
      badges: [],
      roles: [
        {
          title: "Research Software Engineer",
          start: "Mar 2022",
          end: "Dec 2022",
          descriptions: [
            "⦿ Co-led the full-stack development of a visualization system tailored for epigenetics researchers, facilitating the exploration of connections between DNA methylation patterns and complex human traits using advanced network summarization and community detection algorithms.",
            "⦿ Orchestrated interdisciplinary meetings with computer scientists and domain experts to benchmark existing systems and identify novel research opportunities in multi-omics data integration and analysis.",
          ],
        },
      ],
    },
    {
      company: "University of Oxford, e-Research Center",
      link: { href: "https://oerc.ox.ac.uk/" },
      badges: [],
      roles: [
        {
          title: "Research Software Engineer",
          start: "Jul 2021",
          end: "Feb 2022",
          descriptions: [
            "⦿ Responsible for the full-stack development of a multidimensional time-series search, visualization, and prediction system, empowering health experts and decision-makers to dissect and compare global pandemic trends. Incorporated time-series similarity and clustering algorithms, complemented by uncertainty visualization, to deliver critical insights.",
            "⦿ Collaborated with a diverse team of academics from machine learning and data visualization fields to forge interactive Observable notebooks which includes state-of-the-art data-mining techniques and innovative dashboard designs tailored for helping governmental decision-making capabilities.",
          ],
        },
      ],
    },
  ],
  publications: [
    '⦿ T. Gonen et al., "Visual Analytics based Search-Analyze-Forecast Framework for Epidemiological Time-series Data," 2023 IEEE VIS Workshop on Visualization for Pandemic and Emergency Responses (Vis4PandEmRes), Melbourne, Australia, 2023.',
    '⦿ J. Dykes et al., "Visualization for epidemiological modelling: challenges, solutions, reflections and recommendations" Phil. Trans. R. Soc. , 2022.',
  ],
  projects: [
    {
      title: "RS Radar",
      techStack: ["Next.js", "Langchain", "GraphQL", "GCP"],
      description:
        "Cybersecurity agent for DNS, web and email security diagnostics and remediation",
      link: {
        label: "Redsift Radar",
        href: "https://radar.redsift.com",
      },
    },
    {
      title: "RS OnInbox & VendorSecure",
      techStack: [
        "Web Scraping",
        "Scikit-Learn",
        "PyTorch",
        "Docker",
        "AWS",
        "Datadog",
      ],
      description:
        "Supply chain threat detection and security monitoring system using NLP models",
    },
    {
      title: "VASAP",
      techStack: ["Next.js", "d3.js", "FastAPI", "Scikit-Learn"],
      description:
        "COVID timeseries similarity-based query and prediction engine.",
      link: {
        label: "VASAP Rampvis",
        href: "https://github.com/ScottishCovidResponse/",
      },
    },
    {
      title: "VATS",
      techStack: ["Next.js", "Sigma.js", "d3.js", "FastAPI"],
      description:
        "Circular plots and network diagrams for multi-omic datasets used by epigenetics researchers.",
    },
  ],
  skills: [
    {
      category: "Languages",
      items: ["Python", "TypeScript"],
    },
    {
      category: "Modelling",
      items: ["Scikit-learn", "PyTorch"],
    },
    {
      category: "Data Visualization",
      items: ["d3.js", "Sigma.js"],
    },
    {
      category: "Web Dev/Deployment",
      items: ["Next.js", "FastAPI", "Docker", "Vercel"],
    },
    {
      category: "Cloud/MLOps",
      items: ["AWS", "GCP", "Datadog", "Weights & Biases"],
    },
    {
      category: "Databases",
      items: ["BigQuery", "GraphQL"],
    },
    {
      category: "GenAI",
      items: ["Langchain", "Unsloth", "Hugging Face"],
    },
  ],
} as const;

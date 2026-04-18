export interface ProjectMeta {
  label: string;
  value: string;
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  subtitle?: string;
  description: string;
  meta?: ProjectMeta[];
  tags: string[];
  links: ProjectLink[];
}

export const projects: Project[] = [
  {
    title: "AuraFarmers",
    subtitle: "QUT AI & ML Society Hackathon 2026",
    description:
      "A real-time multiplayer trading game where players buy and sell corn stock to accumulate aura and outmanoeuvre rivals; designed as a fun, low-stakes introduction to stock markets and options contracts. The Rust backend implements price-time priority order matching, stale-order pruning, and Black-Scholes options pricing, with NPC traders running in the background to keep markets lively. Delivered real-time multiplayer via WebSockets, containerised on AWS Lightsail, and provisioned end-to-end with Terraform.",
    tags: [
      "Rust",
      "React",
      "TypeScript",
      "ThreeJS",
      "WebSockets",
      "Amazon Web Services",
      "Docker",
      "Cloudflare",
      "LLM Integration",
    ],
    links: [
      {
        label: "Visit AuraFarmer",
        href: "https://farm.tarangjanawalkar.com/",
      },
    ],
  },
  {
    title: "Fluid Simulator",
    subtitle: "Cloud Computing Project",
    description:
      "Interactive particle-based fluid simulator built with WebAssembly, Rust, and TypeScript. Explore real-time fluid dynamics in your browser.",
    meta: [{ label: "Grade", value: "100%" }],
    tags: [
      "Amazon Web Services",
      "WebAssembly",
      "Rust",
      "Terraform",
      "React",
      "APIs",
      "TypeScript",
      "ThreeJS",
    ],
    links: [
      {
        label: "Visit Fluid Simulator",
        href: "https://fluid.tarangjanawalkar.com/",
      },
    ],
  },
  {
    title: "The Sway",
    subtitle: "Audima Labs",
    description:
      "Architected and developed a real-time desktop application to control a motion-controlled ARM Cortex-M7 STM32-based MIDI device. Built with Rust and React, featuring low-latency, high-throughput data exchange for performance-critical environments.",
    tags: [
      "Rust",
      "TypeScript",
      "Tauri",
      "React",
      "Desktop Software",
      "USB DFU",
      "Custom UART Protocol",
      "STM32H7",
    ],
    links: [
      { label: "Download Software", href: "https://audima.com.au/downloads" },
    ],
  },
  {
    title: "Image Analysis of Osteocyte Networks in Bone",
    subtitle: "Engineering Honours Thesis",
    description:
      "Developed OsteonX, a Python library for quantitative analysis of osteocyte networks from high-resolution confocal microscopy data. Introduced a novel 3D Euclidean distance-based reconstruction method to approximate lamellar growth surfaces in cortical bone, enabling spatial quantification of cellular and dendritic densities across osteonal layers.",
    meta: [
      { label: "Grade", value: "High Distinction" },
      {
        label: "Supervisors",
        value: "Associate Professor Pascal Buenzli and Dr Jessica Crawshaw",
      },
    ],
    tags: [
      "Python",
      "Image Analysis",
      "Mathematical Modelling",
      "Research",
      "Mathematical Biology",
    ],
    links: [
      { label: "View OsteonX", href: "https://github.com/tarang74/OsteonX" },
    ],
  },
  {
    title: "Stability Analysis of Additive Continuous Cellular Automata",
    subtitle: "Wolfram Summer School 2025",
    description:
      "Selected for a three-week intensive research program led by Stephen Wolfram on continuous cellular automata dynamics, exploring perturbation stability and emergent structures.",
    meta: [
      { label: "Supervisors", value: "Pietro Pepe and Dr Sotiris Michos" },
    ],
    tags: ["Research", "Cellular Automata", "Wolfram Language", "Mathematics"],
    links: [
      {
        label: "View Publication",
        href: "https://community.wolfram.com/groups/-/m/t/3494918",
      },
    ],
  },
  {
    title: "QUT Notes",
    description:
      "Created and automated a lecture notes system used by over 15,000 students, facilitating access to learning resources for engineering, IT, mathematics, and science students at Queensland University of Technology.",
    tags: ["LaTeX", "Education", "Lecture Notes"],
    links: [
      { label: "View Notes", href: "https://tarang74.gitbook.io/qut-notes" },
    ],
  },
  {
    title: "EGB202 Documentation",
    subtitle: "Queensland University of Technology",
    description:
      "Developed and maintain online resources for EGB202: Microprocessors and Digital Systems at QUT, supporting thousands of students annually with comprehensive tutorials and guides for embedded systems programming.",
    tags: ["Education", "Embedded Systems", "AVR", "Documentation"],
    links: [{ label: "View Resources", href: "https://egb202.gitbook.io/" }],
  },
  {
    title: "Nonlinear Water Waves and Signal Analysis",
    subtitle: "Vacation Research Experience Scheme",
    description:
      "Summer research project supervised by Professor Timothy Moroney. Developed a water wave noise model for neural network regularisation and conducted advanced research in data analysis and scientific computing.",
    meta: [{ label: "Supervisor", value: "Professor Timothy Moroney" }],
    tags: ["Research", "Python", "Signal Analysis", "Machine Learning"],
    links: [],
  },
  {
    title: "LaTeX Workshop",
    description:
      "Collection of custom LaTeX templates, packages, and utilities for academic writing, including thesis templates, assignment layouts, and presentation slides used by students and researchers.",
    tags: ["LaTeX", "Templates", "Academic Writing"],
    links: [
      {
        label: "View on GitHub",
        href: "https://github.com/Tarang74/LaTeX-Workshop",
      },
    ],
  },
];

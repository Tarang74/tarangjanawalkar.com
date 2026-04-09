export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "LANGUAGES",
    skills: [
      "Rust",
      "Python",
      "Embedded C",
      "C",
      "C++",
      "TypeScript",
      "JavaScript",
      "Bash",
      "C#",
      "Lua",
      "Java",
    ],
  },
  {
    name: "EMBEDDED SYSTEMS",
    skills: [
      "AVR ATtiny1626",
      "ARM Cortex-M4 (TI Tiva C)",
      "ARM Cortex-M7 (STM32)",
      "Raspberry Pi 5",
      "Real-Time OS",
    ],
  },
  {
    name: "HIGH-PERFORMANCE COMPUTING",
    skills: [
      "Async & Multithreading",
      "CPU Parallelisation",
      "Performance Optimisation",
      "Low-Latency Systems",
    ],
  },
  {
    name: "SCIENTIFIC COMPUTING",
    skills: [
      "Numerical Methods",
      "Mathematical Modelling",
      "MATLAB",
      "Mathematica",
      "TensorFlow",
      "scikit-learn",
      "NumPy",
      "Pandas",
      "Matplotlib",
    ],
  },
  {
    name: "AMAZON WEB SERVICES",
    skills: [
      "Compute (ECS, Fargate, Lambda)",
      "Storage & Caching (S3, ElastiCache, ECR)",
      "Networking (CloudFront, Route 53)",
      "Integration (SQS)",
      "Security & Monitoring (Cognito, CloudWatch)",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Infrastructure as Code",
    ],
  },
  {
    name: "DEVOPS & SRE",
    skills: [
      "GitHub Actions",
      "CI/CD Pipelines",
      "DNS",
      "Distributed Systems",
      "Microservices",
      "Observability",
      "Least-Privilege IAM",
    ],
  },
  {
    name: "DATABASES & ORMS",
    skills: ["PostgreSQL", "MySQL", "SQLite", "Redis", "Prisma"],
  },
  {
    name: "UI DEVELOPMENT",
    skills: ["React", "Three.js", "WebAssembly", "Vite", "Tauri"],
  },
];

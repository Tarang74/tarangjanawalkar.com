export interface Degree {
  year: string;
  degree: string;
  major: string;
  institution: string;
  wam: string;
  grade: string;
  awards: string[];
}

export const education: Degree[] = [
  {
    year: "2025",
    degree: "Bachelor of Engineering (Honours)",
    major: "Computer and Software Systems",
    institution: "Queensland University of Technology",
    wam: "91%",
    grade: "First Class Honours",
    awards: [
      "QUT University Medal",
      "Faculty of Enginering Dean's Scholar",
      "Faculty of Enginering Dean's List across 10 consecutive semesters",
    ],
  },
  {
    year: "2025",
    degree: "Bachelor of Mathematics",
    major: "Applied & Computational Mathematics",
    institution: "Queensland University of Technology",
    wam: "96%",
    grade: "High Distinction",
    awards: [
      "QUT University Medal",
      "Faculty of Science Dean's Scholar",
      "Faculty of Science Dean's List across 10 consecutive semesters",
    ],
  },
];

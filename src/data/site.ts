export const siteMeta = {
  title: "Ruihan Lin",
  description:
    "Academic homepage of Ruihan Lin, a PhD candidate at HKUST working on stochastic systems, AI, operations research, and AI-enabled service systems."
};

export const profile = {
  name: "Ruihan Lin",
  role: "PhD Candidate at HKUST",
  institution: "Hong Kong University of Science and Technology",
  email: "rlinah@connect.ust.hk",
  photo: "/photo.jpg",
  advisor: "Jiheng Zhang",
  intro:
    "I work at the intersection of stochastic systems, operations research, and AI, with recent projects on LLM systems, resource allocation, dynamic pricing, and human-AI workflows.",
  bio: [
    "I am a PhD candidate in Industrial Engineering and Decision Analytics at the Hong Kong University of Science and Technology. My work uses queueing, stochastic control, and optimization to study how complex service and decision systems behave under uncertainty.",
    "Much of my recent research is motivated by AI systems, especially large-scale LLM inference and human-AI workflows. Another research direction studies dynamic pricing, revenue management, and how financial constraints shape firms' operating and business decisions.",
    "Before starting my PhD, I studied financial engineering and worked on quantitative trading research. I am interested in problems where rigorous modeling can still provide useful structure for modern computational and economic systems."
  ],
  links: [
    { label: "Research", href: "#research" },
    { label: "Papers", href: "#papers" }
  ]
};

export const researchInterests = [
  "AI systems and LLM inference",
  "Human-AI workflows and service operations",
  "Dynamic pricing and revenue management",
  "Stochastic control and data-driven optimization"
];

export const research = {
  summary: [
    "My research is broadly about how to model, analyze, and optimize systems with congestion, uncertainty, and the strategic allocation of limited resources. I am especially drawn to problems where analytical structure can still offer useful guidance for modern computational systems.",
    "One current direction studies AI infrastructure through an operations lens, including LLM inference systems and AI-human workflows. Another direction focuses on dynamic pricing, revenue management, and the role of financial constraints in shaping operational and business decisions."
  ]
};

export const education = [
  {
    school: "Hong Kong University of Science and Technology",
    period: "2022 - 2026 (expected)",
    degree: "Ph.D. in Industrial Engineering and Decision Analytics",
    details: ["Advisor: Prof. Jiheng Zhang"]
  },
  {
    school: "Hong Kong University of Science and Technology",
    period: "2018 - 2022",
    degree: "B.Eng. in Financial Engineering, Minor in Mathematics",
    details: ["MCGA: 3.9/4.3", "Dean's List (2020, 2022)"]
  }
];

export const teaching = [
  {
    title: "Teaching Assistant Coordinator",
    organization: "Postgraduate Programs, HKUST",
    period: "2023 - 2024",
    details: []
  },
  {
    title: "Teaching Assistant",
    organization: "HKUST",
    period: "2022 - 2025",
    details: [
      "Foundations of FinTech",
      "Blockchain & Financial Technologies",
      "Statistics for Engineers"
    ]
  }
];

export const contact = {
  heading: "Get in touch",
  lines: [
    "Email: rlinah@connect.ust.hk",
    "Hong Kong University of Science and Technology"
  ],
  links: [{ label: "Top", href: "#top" }]
};

export const papers = [
  {
    title:
      "Large-Scale LLM Inference with Heterogeneous Workloads: Prefill-Decode Contention and Asymptotically Optimal Control",
    authors: "Ruihan Lin, Zean Han, Zezhen Ding, and Jiheng Zhang",
    venue: "Major revision, Management Science"
  },
  {
    title:
      "Dynamic Pricing under Revenue-Based Financing: Global Stability versus Local Inefficiency",
    authors: "Ruihan Lin, Yunrui Ling, and Jiheng Zhang",
    venue: "Under review, Management Science"
  },
  {
    title:
      "When to Screen, When to Bypass: LLM-Judges in Resource-Scarce AI-Human Workflow",
    authors: "Ruihan Lin and Jiheng Zhang",
    venue: "Under review, Operations Research"
  }
];

export const siteMeta = {
  title: "Ruihan Lin",
  description:
    "Academic homepage of Ruihan Lin, a PhD candidate at HKUST working on stochastic systems, AI, and operations research."
};

export const profile = {
  name: "Ruihan Lin",
  role: "PhD Candidate in Industrial Engineering and Decision Analytics",
  institution: "Hong Kong University of Science and Technology",
  email: "rlinah@connect.ust.hk",
  advisor: "Jiheng Zhang",
  graduation: "Expected 2026",
  intro:
    "I study stochastic systems and the interface between AI and operations research, with a current focus on LLM systems, resource allocation, and human-AI workflows.",
  bio: [
    "My research combines queueing-inspired modeling, stochastic control, and optimization to understand how modern AI systems should be designed and operated under uncertainty.",
    "I am especially interested in two directions: using operations research to analyze and optimize LLM infrastructure, and using AI tools to support better optimization and decision-making."
  ],
  links: [
    { label: "Email", href: "mailto:rlinah@connect.ust.hk" },
    { label: "HKUST", href: "https://hkust.edu.hk/" },
    { label: "Research", href: "#papers" }
  ]
};

export const researchThemes = [
  {
    title: "OR for AI",
    description:
      "I build stochastic and queueing-based models for LLM inference, AI service systems, and congestion-aware resource allocation."
  },
  {
    title: "AI for OR",
    description:
      "I study how generative AI and learning-based methods can improve optimization workflows and decision support."
  },
  {
    title: "Stochastic Systems",
    description:
      "I am interested in dynamic control, service systems, and large-scale operational design under uncertainty."
  }
];

export const papers = [
  {
    title:
      "Large-Scale LLM Inference with Heterogeneous Workloads: Prefill-Decode Contention and Asymptotically Optimal Control",
    authors: "Ruihan Lin, Zean Han, Zezhen Ding, and Jiheng Zhang",
    venue: "Major revision, Management Science",
    href: "https://arxiv.org/abs/2602.02987",
    summary:
      "Models prefill-decode contention in large LLM serving systems and develops asymptotically optimal gate-and-route control policies."
  },
  {
    title:
      "Dynamic Pricing under Revenue-Based Financing: Global Stability versus Local Inefficiency",
    authors: "Ruihan Lin, Yunrui Ling, and Jiheng Zhang",
    venue: "Under review, Management Science",
    href: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6237799",
    summary:
      "Studies how revenue-based financing reshapes pricing decisions and reveals a trade-off between global stability and local inefficiency."
  },
  {
    title:
      "When to Screen, When to Bypass: LLM-Judges in Resource-Scarce AI-Human Workflow",
    authors: "Ruihan Lin and Jiheng Zhang",
    venue: "Under review, Operations Research",
    href: "https://arxiv.org/abs/2603.13870",
    summary:
      "Analyzes how LLM judges should be allocated in human-AI workflows when screening capacity is scarce and bottlenecks shift over time."
  }
];

export const teaching = [
  {
    role: "Teaching Assistant Coordinator",
    org: "Postgraduate Programs, HKUST",
    years: "2023-2024"
  },
  {
    role: "Teaching Assistant",
    org: "Foundations of FinTech, Blockchain and Financial Technologies, Statistics for Engineers",
    years: "2022-2025"
  }
];

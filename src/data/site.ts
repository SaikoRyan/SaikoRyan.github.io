export const siteMeta = {
  title: "Ruihan Lin",
  description:
    "Academic homepage of Ruihan Lin, a PhD candidate at HKUST and incoming postdoctoral researcher at the University of Oxford, working on stochastic systems, AI, and operations research."
};

export const profile = {
  name: "Ruihan Lin",
  role: "PhD Candidate at HKUST",
  institution: "Incoming Postdoctoral Researcher, University of Oxford",
  email: "rlinah@connect.ust.hk",
  photo: "/photo.jpg",
  advisor: "Jiheng Zhang",
  intro:
    "I work at the intersection of stochastic systems, operations research, and AI, with recent projects on LLM systems, resource allocation, dynamic pricing, and human-AI workflows.",
  bio: [
    "I am a PhD candidate in Industrial Engineering and Decision Analytics at the Hong Kong University of Science and Technology, and I will be joining the University of Oxford as a postdoctoral researcher. My work uses queueing, stochastic control, and optimization to study how complex service and decision systems behave under uncertainty.",
    "Before starting my PhD, I studied financial engineering and worked on quantitative trading research."
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
  email: "rlinah@connect.ust.hk",
  institution: "Hong Kong University of Science and Technology",
  lastUpdated: "Sep 2026",
  links: [{ label: "Top", href: "#top" }]
};

export const papers = [
  {
    title:
      "Large-Scale LLM Inference with Heterogeneous Workloads: Prefill-Decode Contention and Asymptotically Optimal Control",
    authors: "Ruihan Lin, Zean Han, Zezhen Ding, and Jiheng Zhang",
    venue: "Major revision, Management Science",
    href: "https://arxiv.org/abs/2602.02987",
    insight:
      "Prefill and decode compete for the same GPUs; a fluid-LP gate-and-route policy is asymptotically optimal in the many-GPU limit.",
    keywords: ["queueing networks", "stochastic control", "LLM serving"]
  },
  {
    title:
      "Dynamic Pricing under Revenue-Based Financing: Global Stability versus Local Inefficiency",
    authors: "Ruihan Lin, Yunrui Ling, and Jiheng Zhang",
    venue: "Major revision, Management Science",
    href: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6237799",
    insight:
      "Revenue-based financing distorts pricing locally but stabilizes the firm globally, unlike conventional debt.",
    keywords: ["dynamic pricing", "dynamic programming", "operational finance"]
  },
  {
    title:
      "When to Screen, When to Bypass: LLM-Judges in Resource-Scarce AI-Human Workflow",
    authors: "Ruihan Lin and Jiheng Zhang",
    venue: "Under review, Management Science",
    href: "https://arxiv.org/abs/2603.13870",
    insight:
      "Whether to screen with an imperfect LLM judge depends on where the bottleneck sits; the optimal policy shows phase transitions.",
    keywords: ["human-AI workflows", "fluid approximation", "resource allocation"]
  },
  {
    title:
      "Direction-Aware Offline-to-Online Learning in Linear Contextual Bandits",
    authors: "Zean Han, Ruihan Lin, Zezhen Ding, and Jiheng Zhang",
    venue: "arXiv preprint",
    href: "https://arxiv.org/abs/2604.24016",
    insight:
      "Uses biased offline data only along directions where it provably helps, avoiding harm from model mismatch.",
    keywords: ["contextual bandits", "offline-to-online learning"]
  },
  {
    title:
      "Nonparametric Contextual Pricing and Inventory Learning under Censored Demand",
    authors: "Zean Han, Jing Liang, Ruihan Lin, Zezhen Ding, and Jiheng Zhang",
    venue: "arXiv preprint",
    href: "https://arxiv.org/abs/2608.30944",
    insight:
      "A kernel-UCB method learns pricing and stocking jointly from censored sales, with minimax-optimal rates.",
    keywords: ["nonparametric learning", "pricing and inventory", "censored demand"]
  }
];

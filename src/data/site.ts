export const siteMeta = {
  title: "Ruihan Lin",
  description:
    "Academic homepage of Ruihan Lin, a PhD candidate at HKUST working on stochastic systems, AI, and operations research."
};

export const profile = {
  name: "Ruihan Lin",
  role: "PhD Candidate at HKUST",
  institution: "Hong Kong University of Science and Technology",
  email: "rlinah@connect.ust.hk",
  advisor: {
    name: "Jiheng Zhang",
    href: "https://facultyprofiles.hkust.edu.hk/profiles.php?profile=jiheng-zhang-jiheng"
  },
  intro:
    "I work at the intersection of stochastic systems, operations research, and AI, with recent projects on LLM systems, resource allocation, and human-AI workflows.",
  bio: [
    "I am a PhD candidate in Industrial Engineering and Decision Analytics at the Hong Kong University of Science and Technology. My work uses queueing, stochastic control, and optimization to study how complex service and decision systems behave under uncertainty.",
    "Much of my recent research is motivated by AI systems, especially large-scale LLM inference and human-AI workflows. Another research direction studies dynamic pricing, revenue management, and how financial constraints shape firms' operating and business decisions."
  ],
  links: [
    { label: "Email", href: "mailto:rlinah@connect.ust.hk" },
    { label: "Papers", href: "#papers" }
  ]
};

export const research = [
  "My research is broadly about how to model, analyze, and optimize systems with congestion, uncertainty, and strategic allocation of limited resources. I am especially drawn to problems where analytical structure can still offer useful guidance for modern computational systems.",
  "One current direction studies AI infrastructure through an operations lens, including LLM inference systems and AI-human workflows. Another research direction focuses on dynamic pricing, revenue management, and the role of financial constraints in shaping operational and business decisions."
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

export type Project = {
  title: string;
  subtitle: string;

  media: {
    mainImage: string;
    previewVideo: string;
    secondaryImage: string[];
  };

  challenge: string;
  solution: string;
  results: string[];

  ctas: {
    caseStudy?: string;
    github?: string;
    demo?: string;
  };
};


export const moduleLabels = [
  "Architecture",
  "Crew Management",
  "Vendor Management",
  "Media Vault",
  "Script Management",
  "Auditions",
];


export const project: Project = {
  title: "ClapOS",
  subtitle: "Film Industry SaaS. Microservices. Kafka Event Streaming.",

  media: {
    mainImage: "/projects/clapos/images/clap1.png", 
    previewVideo: "",
    secondaryImage: [
      "/projects/clapos/images/architecture.png",
            "/projects/clapos/images/cerw.png",
      "/projects/clapos/images/vendor.png",
      "/projects/clapos/images/media.png",
      "/projects/clapos/images/scriptpng.png",
      "/projects/clapos/images/auditions.png",


    ], 
  },

  challenge: "Film production teams need unified system for vendor, talent, scheduling, media management.",

  solution: "Microservices architecture with Kafka event streaming. 10+ modules. Full frontend ownership. Currently in active development.",

  results: [
    "10+ modules live (frontend)",
    "Kafka event-driven architecture",
    "Real-time data sync",
    "Cloudinary media integration",
  ],

  ctas: {
    caseStudy: "/work/clapos",
    github: "", // Only if public
    demo: "", // Skip since local only
  },
};
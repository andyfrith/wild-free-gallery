export const HOME_HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuABLR1nzU6S8qxU15M3NGzWzvs2bGFNJ_URpPiyWK9TM63g-l7Ku17I2N5l331pX2GJwhz_dqwRrRCSK1Z2cPgsYwT_p6S-0H60zpEVZgIywzZV-QbU0n6XAtPvjX6vEgmTua4FWawHJ8inXMgMDWEXNG1cnBP0VWoy--pRhJk3ZQvXdqoFHcpURa3LHRK3Y3GClSWSjY2Fock4OBIvBX1IIIpyGmVZyk3y7qU4-0Ke7DLjRg2TEDzbekXDDdo8LyfNsqANCQc6iOIg";

export type HomeArtifactCard = {
  image: string;
  imageAlt: string;
  label: string;
  labelClass: string;
  title: string;
  description: string;
  date: string;
};

export const HOME_ARTIFACT_CARDS: HomeArtifactCard[] = [
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAGf7rp9WhwfeFoE7qiktoVZKGLZ6GocW_64lc0PRhTbEwRPhSv3ivuDDk3pSGtzoTFjUib1_RfByK4KIuDTrzMCCdcYqZuBmX8tWL6DdNiBlwV0VOlIJrKbXqOPT5OhhehuUxOAHkTyJRgONLntbWa-Edy-oxFnRHth4n3zTzGs4DVFLi9byI5_HU9w_i-RbI5WysplojRqX0ikC2FE-fcV-oFy-L6bDa3j5PekrhQ7SabohzSd84A0d6X531W-rK4SN57kQR-PBe4",
    imageAlt: "Studio Charter document cover",
    label: "Document",
    labelClass: "text-primary",
    title: "Studio Charter",
    description: "Defining the core principles and operational boundaries of the WFG ecosystem.",
    date: "Oct 12, 2023",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuByWXiQiWYFUvM0Dye-zV8ly4mfV583xCmcjVowJEAN1r486NNEtI2Ge-yflf2m6bBfvipBHH2tFZdSXBrDl6FR71iWE3r_vLeFk1jhGQplDCspixgolR3mq9toSV4644Vf65SKZj9uQYZmGQv5TF--uEcr5oWwHifkxHjze9aeTERuQshf6dOzxjkTDOLQb-jV05_hRRKw9tY3zkg5Kcp7ud1cwiiuIpCcs_gLm6I6AdfPKHX03lAlpwY6oAw2veYtIpihiLglD9Oi",
    imageAlt: "Product PRD strategic document cover",
    label: "Strategic",
    labelClass: "text-secondary",
    title: "Product PRD",
    description: "A comprehensive breakdown of requirements for the first flagship artifact.",
    date: "Oct 10, 2023",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAJ9tkZJONiiELxevDSER-OYkAJX6tC3EDTF9ISZK3p7ypy4XLUmedoZheMLznSNUShHtIIKpNjWyjyLeqIdnPqhGm1m-A9HvQeCJ9_WGy53dK06Qf49MiSjQNB-t9AX7fTLPHwwzi-GTkMh49khYivlLRNnEzbVmrDJR09bXtmaebOQ4pv_ATvnj6QrVj0qzmG7M3Ea89YkzIiDsZMWHz4mk6j7mK-aajW2ZE-k3PY3Ni-tnvlZGuhHzt0NJm8uhTbTZ5L4DoNbcYp",
    imageAlt: "System information architecture diagram cover",
    label: "Architecture",
    labelClass: "text-accent-info",
    title: "System IA",
    description: "The structural backbone mapping data flows across the entire platform.",
    date: "Oct 08, 2023",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDCPmsjhTXUkzVPssPzi2DBIuxtfhk4JABXHgu9uQlM7gO2uW2o-bKDUt7OuIP78TSbyk7rb0KEINvgSlu_Ag3IEC9doGHfOjN8fF__C358xlQYPe8nHxJecCDe9LGUWTLO0TC87y-McBpBZ-7Ik9yqpKcl3mKqNd-fvHZB3uXHt_AVnck83iJsVL-U7LhBUaHXezxpqaZ7SQJijSNGQSGYO5CtkHhvz7AhF1ZyPt_s9NXNtFmxwOj49LljvaG_YatmhMDCyMzLXOo0",
    imageAlt: "UX Blueprint wireframe cover",
    label: "Experience",
    labelClass: "text-semantic-success",
    title: "UX Blueprint",
    description: "Initial wireframes and interaction patterns for user-centric validation.",
    date: "Oct 05, 2023",
  },
];

export const HOME_MISSION_ITEMS = [
  "Evidence-led decision making",
  "Radical transparency in process",
  "Open-source architecture models",
] as const;

export const HOME_DOMAIN_ITEMS = {
  human: [
    "Strategic Intent & Mission Alignment",
    "Ethical Guardrails & Value Judgments",
    "Emotional Resonance & Brand Soul",
    "High-Stakes Architecture Decisions",
  ],
  ai: [
    "Rapid Component Prototyping",
    "Synthetic User Path Simulation",
    "Code Base Generation & Refactoring",
    "Automated Quality Assurance",
  ],
} as const;

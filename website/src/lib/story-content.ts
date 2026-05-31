export const STORY_HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBQ_dWieVv8w5JTg6JEMo7LTMMn-kVqIpG5DhCThbCqrhwLkvqE22jt46P9oHeYvUqNzb7cGYEU93X8kQvsd808PdgrHqPFjlykcZJJz-IFUKEDnugxaS2ehYKkCVF_Gf5t6jUWjKL2GzAs7UeIlPbqQyd-Q-cLabkXJBVuxll7Cv6QbNr2UzF2dnJRf4CPhtdQ-1Fl8xvKUc1n5N1O8ZZsUjvBQbs2qlFd8frR0dVLGbmlxZAWWDv_Gz8Va6vSLYKonE8Dco6oB-Eq";

export const STORY_FOREST_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCgPlcIBlZcLDIqJxAeWXQ0hDQqIZjr-B7bD-NcyRb0zEg7XAg6yAYozBtJ4YEE365u6r2k3fIUK2L3nVtEKhgMIBdQwvM3pbqbi4lwbisajNEPCGVrhfuC-qUOVCZHSgwk8zfypxn_rYqfGw2JUJU8-MbeWgW3BqjH5bVMK0LW-HRpc5S2iaB2Hi4C_zgD9RY384k8zcCguCqdD2tU4m2N9ddvPJzuA8afMFeOVuFrJUNtjnFVaIdTuv5-WykLKaO9ToBiijJJL0fD";

export type PhilosophyCard = {
  icon: string;
  title: string;
  body: string;
};

export const STORY_PHILOSOPHY_CARDS: PhilosophyCard[] = [
  {
    icon: "fact_check",
    title: "Evidence Over Claims",
    body: "We don't sell promises. Every feature is a response to a real-world need, backed by tangible results and iterative testing.",
  },
  {
    icon: "auto_awesome",
    title: "Progressive Disclosure",
    body: "Clarity requires restraint. We provide the essential first, revealing complexity only when the user is ready to engage.",
  },
  {
    icon: "psychology",
    title: "Human-Led AI",
    body: "Artificial intelligence is our brush, not the artist. We use technology to amplify human creativity, not replace it.",
  },
];

export const STORY_HORIZON_KEYWORDS = ["Resilience", "Truth", "Exploration", "Curation"] as const;

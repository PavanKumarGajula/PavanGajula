export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  tags: string[];
  status: "draft" | "published";
  body?: string; // Markdown content, filled in when published
}

// SEED CONTENT — three post stubs to flesh out before going live.
// Status: "draft" posts will not render on /writing until set to "published".
export const posts: Post[] = [
  {
    slug: "watching-myself-use-copilot",
    title: "Watching myself use Copilot for a week",
    excerpt:
      "What I actually accept, what I quietly delete, and the strange middle category of suggestions I rewrite without thinking. Notes from one engineer keeping a log.",
    date: "2026-06-01",
    readingTime: "8 min",
    tags: ["HCI", "AI tools", "developer workflow"],
    status: "draft",
  },
  {
    slug: "trust-handoff-ai-pairing",
    title: "The trust handoff in AI-assisted coding",
    excerpt:
      "Pair programming has a well-studied rhythm of trust between two humans. Pairing with an AI assistant breaks that rhythm in specific ways — and reveals what was load-bearing about the original.",
    date: "2026-06-15",
    readingTime: "6 min",
    tags: ["HCI", "AI tools", "research notes"],
    status: "draft",
  },
  {
    slug: "non-developer-clients-and-ai",
    title: "When non-developer clients meet AI builders",
    excerpt:
      "Three freelance clients independently asked whether they could just build this themselves with AI. A short essay on what they were really asking, and what I found when I tried it from their side.",
    date: "2026-07-01",
    readingTime: "5 min",
    tags: ["HCI", "low-code", "freelance"],
    status: "draft",
  },
];

export const publishedPosts = () =>
  posts.filter((p) => p.status === "published");

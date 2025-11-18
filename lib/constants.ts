import { IEvent } from "@/database";

export const events = [
  {
    slug: "react-conf-2024",
    image: "/images/event1.png",
    title: "React Conf 2024",
    location: "San Francisco, CA",
    date: "March 15, 2024",
    time: "9:00 AM - 6:00 PM",
    description: "Annual conference focusing on new features and best practices in React.",
    overview: "A full-day event featuring talks, demos, and React ecosystem updates.",
    venue: "Moscone Center",
    mode: "offline",
    audience: "Frontend developers, React enthusiasts",
    agenda: [
      "React Server Components deep dive",
      "State management panel",
      "Performance optimization workshop"
    ],
    organizer: "React Community Group",
    tags: ["react", "javascript", "frontend"]
  },
  {
    slug: "nextjs-summit",
    image: "/images/event2.png",
    title: "Next.js Summit",
    location: "Austin, TX",
    date: "April 22, 2024",
    time: "10:00 AM - 5:00 PM",
    description: "A summit covering modern Next.js development and full-stack workflows.",
    overview: "Talks from Next.js core team and hands-on deployment sessions.",
    venue: "Austin Tech Arena",
    mode: "hybrid",
    audience: "Full-stack developers, tech leads",
    agenda: [
      "App Router updates",
      "Edge runtime demo",
      "Next.js performance lab"
    ],
    organizer: "Vercel Community",
    tags: ["nextjs", "web", "fullstack"]
  },
  {
    slug: "javascript-world",
    image: "/images/event3.png",
    title: "JavaScript World Conference",
    location: "New York, NY",
    date: "May 8, 2024",
    time: "8:30 AM - 7:00 PM",
    description: "A global JS event showcasing modern tooling, frameworks, and patterns.",
    overview: "Speakers from major JS frameworks, plus interactive workshops.",
    venue: "NYC Convention Hall",
    mode: "offline",
    audience: "Developers, architects, students",
    agenda: [
      "JS ecosystem keynote",
      "TypeScript best practices",
      "Node.js architecture workshop"
    ],
    organizer: "JS Global Association",
    tags: ["javascript", "typescript", "nodejs"]
  },
  {
    slug: "ai-hackathon-2024",
    image: "/images/event4.png",
    title: "AI Innovation Hackathon",
    location: "Seattle, WA",
    date: "June 14-16, 2024",
    time: "48 Hours",
    description: "A 48-hour hackathon focused on AI and machine learning projects.",
    overview: "Teams build AI prototypes and pitch to industry judges.",
    venue: "Seattle AI Lab",
    mode: "offline",
    audience: "Hackers, AI developers, students",
    agenda: [
      "Kickoff and team formation",
      "24hr coding sprint",
      "AI demo presentations"
    ],
    organizer: "AI Developers Hub",
    tags: ["ai", "ml", "hackathon"]
  },
  {
    slug: "web3-developer-meetup",
    image: "/images/event5.png",
    title: "Web3 Developer Meetup",
    location: "Miami, FL",
    date: "July 20, 2024",
    time: "6:00 PM - 9:00 PM",
    description: "A meetup discussing blockchain, smart contracts, and decentralized apps.",
    overview: "Talks and networking for Web3 and crypto builders.",
    venue: "Miami Blockchain Center",
    mode: "offline",
    audience: "Web3 developers, crypto founders",
    agenda: [
      "Smart contract security session",
      "Intro to L2 networks",
      "Networking mixer"
    ],
    organizer: "Web3 Builders Network",
    tags: ["web3", "blockchain", "crypto"]
  },
  {
    slug: "fullstack-conference",
    image: "/images/event6.png",
    title: "Full Stack Conference",
    location: "Denver, CO",
    date: "August 12, 2024",
    time: "9:00 AM - 6:00 PM",
    description: "A conference covering backend, frontend, and cloud technologies.",
    overview: "Hands-on coding sessions and architecture-focused talks.",
    venue: "Denver Tech Park",
    mode: "hybrid",
    audience: "Full-stack developers, engineers",
    agenda: [
      "Microservices talk",
      "Full-stack architecture",
      "API design workshop"
    ],
    organizer: "TechStack Community",
    tags: ["fullstack", "backend", "frontend"]
  },
  {
    slug: "devops-unleashed",
    image: "/images/event1.png",
    title: "DevOps Unleashed",
    location: "Chicago, IL",
    date: "September 5, 2024",
    time: "8:00 AM - 5:30 PM",
    description: "A DevOps event focused on CI/CD, automation, and cloud pipelines.",
    overview: "Live demos, automation labs, and DevOps culture sessions.",
    venue: "Chicago Cloud Center",
    mode: "offline",
    audience: "DevOps engineers, SREs",
    agenda: [
      "CI/CD pipeline deep dive",
      "Infrastructure as code workshop",
      "SRE best practices"
    ],
    organizer: "DevOps Global",
    tags: ["devops", "cicd", "cloud"]
  },
  {
    slug: "mobile-dev-summit",
    image: "/images/event2.png",
    title: "Mobile Development Summit",
    location: "Los Angeles, CA",
    date: "October 18, 2024",
    time: "9:30 AM - 6:00 PM",
    description: "A summit for Android, iOS, and cross-platform mobile developers.",
    overview: "Talks on performance, UI/UX, and mobile architecture.",
    venue: "LA Mobile Arena",
    mode: "offline",
    audience: "Mobile devs, product teams",
    agenda: [
      "Flutter vs React Native panel",
      "App performance session",
      "Mobile security workshop"
    ],
    organizer: "Mobile Dev Collective",
    tags: ["mobile", "flutter", "reactnative"]
  },
  {
    slug: "cybersecurity-conference",
    image: "/images/event3.png",
    title: "Cybersecurity Conference",
    location: "Boston, MA",
    date: "November 2, 2024",
    time: "8:00 AM - 7:00 PM",
    description: "A conference on modern cybersecurity, threats, and SOC operations.",
    overview: "Live hacking demos, security talks, and hands-on labs.",
    venue: "Boston Security Center",
    mode: "hybrid",
    audience: "Security engineers, analysts",
    agenda: [
      "Zero-trust keynote",
      "Ethical hacking session",
      "Blue team workshop"
    ],
    organizer: "CyberGuard Network",
    tags: ["cybersecurity", "network", "ethical-hacking"]
  },
  {
    slug: "data-science-hackathon",
    image: "/images/event4.png",
    title: "Data Science Hackathon",
    location: "San Diego, CA",
    date: "December 7-9, 2024",
    time: "72 Hours",
    description: "A 3-day competition focused on AI, data analytics, and ML models.",
    overview: "Team-based hackathon with problem statements from real companies.",
    venue: "San Diego Data Arena",
    mode: "offline",
    audience: "Data scientists, ML engineers",
    agenda: [
      "Problem statement briefing",
      "48hr ML sprint",
      "Project presentations"
    ],
    organizer: "Data Innovators League",
    tags: ["data", "ai", "hackathon"]
  },
  {
    slug: "cloud-native-meetup",
    image: "/images/event5.png",
    title: "Cloud Native Meetup",
    location: "Portland, OR",
    date: "January 15, 2025",
    time: "6:30 PM - 9:00 PM",
    description: "A meetup for cloud-native architecture, containers, and Kubernetes.",
    overview: "Community talks and networking with cloud engineers.",
    venue: "Portland Cloud Hub",
    mode: "offline",
    audience: "Cloud engineers, DevOps teams",
    agenda: [
      "Kubernetes scaling",
      "Service mesh intro",
      "Cloud networking Q&A"
    ],
    organizer: "Cloud Native Community",
    tags: ["cloud", "kubernetes", "containers"]
  },
  {
    slug: "frontend-masters",
    image: "/images/event6.png",
    title: "Frontend Masters Conference",
    location: "Nashville, TN",
    date: "February 28, 2025",
    time: "9:00 AM - 5:00 PM",
    description: "A conference focusing on modern frontend tooling and UI frameworks.",
    overview: "Talks, workshops, and advanced frontend architecture sessions.",
    venue: "Nashville Dev Arena",
    mode: "hybrid",
    audience: "Frontend engineers, UI developers",
    agenda: [
      "Advanced React patterns",
      "Design systems workshop",
      "Frontend performance engineering"
    ],
    organizer: "Frontend Masters Group",
    tags: ["frontend", "react", "ui"]
  }
];

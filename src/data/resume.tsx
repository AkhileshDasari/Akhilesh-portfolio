import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { Python } from "@/components/ui/svgs/python";
import { Java } from "@/components/ui/svgs/java";

export const DATA = {
  name: "Dasari Sai Akhilesh",
  initials: "DSA",
  url: "https://github.com/AkhileshDasari",
  location: "Hyderabad, India",
  locationLink: "https://www.google.com/maps/place/Hyderabad",
  description:
    "Undergraduate – Bachelor of Technology. Aspiring Artificial Intelligence Engineer.",
  summary:
    "Aspiring Artificial Intelligence Engineer who is passionate, hardworking, and driven to achieve impactful results. Highly motivated to learn and adapt to emerging technologies and challenges, with a collaborative approach to peer-driven development. Committed to contributing to organizational success while continuously growing both professionally and technically.",
  avatarUrl: "/me.jpg",
  skills: [
    { name: "C", icon: null },
    { name: "Java", icon: Java },
    { name: "JavaScript", icon: null },
    { name: "Python", icon: Python },
    { name: "HTML5", icon: null },
    { name: "CSS3", icon: null },
    { name: "NPM", icon: null },
    { name: "React", icon: null },
    { name: "Django", icon: null },
    { name: "Flask", icon: null },
    { name: "FastAPI", icon: null },
    { name: "Socket.io", icon: null },
    { name: "Streamlit", icon: null },
    { name: "MongoDB", icon: null },
    { name: "PostgreSQL", icon: null },
    { name: "MySQL", icon: null },
    { name: "Supabase", icon: null },
    { name: "Firebase", icon: null },
    { name: "Vercel", icon: null },
    { name: "Netlify", icon: null },
    { name: "Render", icon: null },
    { name: "NumPy", icon: null },
    { name: "Pandas", icon: null },
    { name: "SciPy", icon: null },
    { name: "TensorFlow", icon: null },
    { name: "PyTorch", icon: null },
    { name: "Scikit-Learn", icon: null },
    { name: "Matplotlib", icon: null },
    { name: "Seaborn", icon: null },
    { name: "Git", icon: null },
    { name: "GitHub", icon: null },
    { name: "Canva", icon: null },
    { name: "Adobe After Effects", icon: null },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "akhileshdasari123@gmail.com",
    tel: "+919949211284",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/AkhileshDasari",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/akhileshdasari123",
        icon: Icons.linkedin,
        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/akhileshdasari_/",
        icon: Icons.instagram,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:akhileshdasari123@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "7s IQ Pvt Ltd",
      href: "#",
      badges: ["Remote"],
      location: "Remote",
      title: "Python Full Stack Developer Intern",
      logoUrl: "/7siq.png",
      start: "Jan 2026",
      end: "Mar 2026",
      description:
        "Developed and maintained full-stack web applications using Python-based technologies. Assisted in backend development, API integration, and database connectivity.",
    },
  ],
  education: [
    {
      school: "Vignan's Foundation for Science Technology and Research",
      href: "#",
      degree: "BTech (Computer Science Engineering)",
      logoUrl: "/vignan-logo.png",
      start: "2024",
      end: "Present",
    },
    {
      school: "Narayana Junior College",
      href: "#",
      degree: "Intermediate (89.6%)",
      logoUrl: "/narayana-logo.png",
      start: "2022",
      end: "2024",
    },
    {
      school: "St. Joseph's Public School (ICSE)",
      href: "#",
      degree: "Tenth Grade (77.3%)",
      logoUrl: "/st-josephs-logo.png",
      start: "2022",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "Procurement Intelligence System",
      href: "#",
      dates: "Personal Project",
      active: true,
      description:
        "Developed an AI-powered platform to analyze tender and vendor bid PDFs used in procurement workflows. Implemented automated extraction of financial, legal, and eligibility parameters and generated compliance matrices for vendor comparison. Built a React interface for document upload, structured outputs, and integrated an AI enquiry chatbot for tender-related queries.",
      technologies: ["Python", "AI/Rule-based NLP", "React", "PDF Parsing"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Stock Market Analysis Platform",
      href: "https://sapv1.onrender.com",
      dates: "Personal Project",
      active: true,
      description:
        "Built a full-stack stock analysis platform using Flask that converts technical indicators into beginner-friendly decision insights. Implemented RSI and EMA analytics using market data APIs and generated advisory metrics such as trend, risk level, and entry zone. Designed an interactive dashboard with candlestick charts and analytical visualizations.",
      technologies: [
        "Python",
        "Flask",
        "yfinance API",
        "JavaScript",
        "Trading View Charts",
      ],
      links: [
        {
          type: "Website",
          href: "https://sapv1.onrender.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/sap-preview.png",
      video: "",
    },
    {
      title: "LLM College Admission FAQ Chatbot",
      href: "https://github.com/AkhileshDasari/collegefaqbot",
      dates: "Personal Project",
      active: true,
      description:
        "Designed an LLM-powered chatbot to assist students and parents with college admission queries including fees, ranks, courses, placements, and hostel facilities. Implemented conversational responses with chat history for consistent and quick information delivery.",
      technologies: ["LLM APIs", "Python", "streamlit Web Interface"],
      links: [
        {
          type: "Source",
          href: "https://github.com/AkhileshDasari/collegefaqbot",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://image.thum.io/get/width/1200/crop/600/https://github.com/AkhileshDasari/collegefaqbot",
      video: "",
    },
    {
      title: "Unified College Bus Tracking System",
      href: "https://cbtlive.vercel.app",
      dates: "Personal Project",
      active: true,
      description:
        "Developed a centralized web platform for real-time college bus tracking. Implemented GPS-based location updates using driver smartphones as an alternative to dedicated tracking hardware, improving transport transparency and reducing student waiting time.",
      technologies: ["Web Technologies", "GPS", "Socket.IO"],
      links: [
        {
          type: "Website",
          href: "https://cbtlive.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/cbt-preview.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Zenith'2024 Hackathon",
      dates: "2024",
      location: "MLRIT",
      description: "Winners At MLRIT.",
      image: "/images/6.jpeg",
      links: [],
    },
    {
      title: "Oracle Cloud Infrastructure",
      dates: "01/2026 - 01/2028",
      location: "Online",
      description: "2025 Certified AI Foundations Associate",
      image: "",
      links: [],
    },
    {
      title: "Generative AI Workshop",
      dates: "2025-2026",
      location: "IIT HYDERABAD",
      description: "Participation in Generative AI Workshop at IIT HYDERABAD (2025-Techobytes, 2026-InCuXai).",
      image: "",
      links: [],
    },
    {
      title: "Google Developers Group",
      dates: "2025",
      location: "Hyderabad",
      description: "Participation in Google Developers Group Hyderabad Agentaton-2025.",
      image: "",
      links: [],
    },
    {
      title: "Goldman Sachs Internal Audit",
      dates: "2025",
      location: "Forage",
      description: "Job Simulation on Forage-2025.",
      image: "",
      links: [],
    },
  ],
  funActivities: [
    {
      videoSrc: "/fun1.mp4",
      thumbnailSrc: "/fun1-thumb.png",
      title: "Fun Activity 1",
    },
    {
      videoSrc: "/fun2.mp4",
      thumbnailSrc: "/fun2-thumb.png",
      title: "Fun Activity 2",
    },
  ],
} as const;

export type ServiceItem = {
  title: string;
  description: string;
  needs: string[];
  cta: string;
};

export const SERVICES: ServiceItem[] = [
  {
    title: "ATS-Friendly Resume",
    description:
      "Resume creation, redesign, and role-specific tailoring using clean ATS-compatible formatting and relevant keywords.",
    needs: [
      "Existing resume if available",
      "Target job role",
      "Experience details",
      "One or two job descriptions",
    ],
    cta: "Discuss Your Resume on WhatsApp",
  },
  {
    title: "LinkedIn Profile Optimization",
    description:
      "Improve headline, About section, work/project descriptions, skills, keywords, and overall recruiter-friendly presentation.",
    needs: [
      "LinkedIn profile link",
      "Target role",
      "Current experience",
      "Achievements and project details",
    ],
    cta: "Optimize My LinkedIn",
  },
  {
    title: "Portfolio Website",
    description:
      "Create a responsive personal portfolio website with About, Skills, Projects, Resume, and Contact sections.",
    needs: [
      "Name and bio",
      "Skills and project links",
      "Preferred style",
      "Any existing resume or portfolio",
    ],
    cta: "Build My Portfolio",
  },
  {
    title: "Resume + LinkedIn Bundle",
    description:
      "A combined professional resume and LinkedIn profile service for a consistent job-search presence.",
    needs: [
      "Existing resume",
      "LinkedIn link",
      "Target role",
      "Experience and job descriptions",
    ],
    cta: "Get the Bundle",
  },
  {
    title: "Job-Ready Bundle",
    description:
      "ATS-friendly resume, LinkedIn optimization, GitHub/project presentation, and a personal portfolio website.",
    needs: [
      "Resume",
      "LinkedIn URL",
      "GitHub URL",
      "Project details and target role",
    ],
    cta: "Become Job-Ready",
  },
  {
    title: "Cover Letter & Application Kit",
    description:
      "Tailored cover letters, recruiter outreach messages, and application-ready templates.",
    needs: [
      "Resume",
      "Target role",
      "Company name",
      "Job description",
    ],
    cta: "Create My Application Kit",
  },
  {
    title: "GitHub & Project Presentation",
    description:
      "Improve GitHub profile, README files, project descriptions, screenshots, demos, and project presentation.",
    needs: [
      "GitHub link",
      "Project links or files",
      "Technologies used",
      "Target job role",
    ],
    cta: "Improve My Projects",
  },
  {
    title: "Freelancer Personal Brand Setup",
    description:
      "Build a freelancer portfolio/service page and create proposal, pricing, and profile essentials.",
    needs: [
      "Services offered",
      "Target customers",
      "Work samples",
      "Existing social profiles and brand preferences",
    ],
    cta: "Build My Freelance Brand",
  },
  {
    title: "Small Business Website",
    description:
      "Build a clean business website or landing page with services, contact details, location, and enquiry options.",
    needs: [
      "Business name",
      "Services",
      "Logo and contact information",
      "Brand colors and website examples",
    ],
    cta: "Create My Business Website",
  },
  {
    title: "Landing Page & Basic Automation",
    description:
      "Create lead-generation landing pages with contact or booking setup and WhatsApp or email notifications.",
    needs: [
      "Business goal",
      "Service or offer details",
      "Required contact fields",
      "Preferred notification method",
    ],
    cta: "Set Up My Landing Page",
  },
];

export function buildWhatsAppLink(serviceName: string) {
  const text = encodeURIComponent(`Hi Akhilesh, I'm interested in ${serviceName}`);
  return `https://wa.me/919949211294?text=${text}`;
}

"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"

export type Skill = {
  id: string
  name: string
  icon: string
  category: "frontend" | "design" | "backend"
}

export type Project = {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  link: string
}

export type Testimonial = {
  id: string
  name: string
  role: string
  company: string
  content: string
  avatar: string
}

export type PricingPlan = {
  id: string
  name: string
  description: string
  price: string
  features: string[]
  popular: boolean
}

export type FAQ = {
  id: string
  question: string
  answer: string
}

export type SiteData = {
  hero: {
    title: string
    subtitle: string
    image: string
    ctaPrimary: string
    ctaSecondary: string
  }
  about: {
    title: string
    subtitle: string
    description: string
    image: string
  }
  skills: {
    title: string
    subtitle: string
    categories: {
      frontend: Skill[]
      design: Skill[]
      backend: Skill[]
    }
  }
  projects: {
    title: string
    subtitle: string
    items: Project[]
  }
  testimonials: {
    title: string
    subtitle: string
    items: Testimonial[]
  }
  pricing: {
    title: string
    subtitle: string
    plans: PricingPlan[]
  }
  faq: {
    title: string
    subtitle: string
    items: FAQ[]
  }
  contact: {
    title: string
    subtitle: string
    email: string
    phone: string
    address: string
    socialLinks: {
      github: string
      linkedin: string
      twitter: string
    }
  }
  footer: {
    copyright: string
    links: {
      label: string
      href: string
    }[]
  }
}

type SiteStore = {
  data: SiteData
  updateHero: (hero: Partial<SiteData["hero"]>) => void
  updateAbout: (about: Partial<SiteData["about"]>) => void
  updateSkills: (skills: Partial<SiteData["skills"]>) => void
  updateSkill: (category: keyof SiteData["skills"]["categories"], skill: Skill) => void
  addSkill: (category: keyof SiteData["skills"]["categories"], skill: Skill) => void
  removeSkill: (category: keyof SiteData["skills"]["categories"], id: string) => void
  updateProjects: (projects: Partial<SiteData["projects"]>) => void
  updateProject: (project: Project) => void
  addProject: (project: Project) => void
  removeProject: (id: string) => void
  updateTestimonials: (testimonials: Partial<SiteData["testimonials"]>) => void
  updateTestimonial: (testimonial: Testimonial) => void
  addTestimonial: (testimonial: Testimonial) => void
  removeTestimonial: (id: string) => void
  updatePricing: (pricing: Partial<SiteData["pricing"]>) => void
  updatePricingPlan: (plan: PricingPlan) => void
  updateFAQ: (faq: Partial<SiteData["faq"]>) => void
  updateFAQItem: (item: FAQ) => void
  addFAQItem: (item: FAQ) => void
  removeFAQItem: (id: string) => void
  updateContact: (contact: Partial<SiteData["contact"]>) => void
  updateFooter: (footer: Partial<SiteData["footer"]>) => void
}

// Initial data
const initialData: SiteData = {
  hero: {
    title: "Hi, I'm Danuka Nimsara",
    subtitle: "I'm a web developer specializing in building exceptional digital experiences.",
    image: "/placeholder.svg?height=320&width=320",
    ctaPrimary: "View My Skills",
    ctaSecondary: "Contact Me",
  },
  about: {
    title: "About Me",
    subtitle: "Get to know me better",
    description:
      "I'm a passionate web developer with a strong foundation in modern web technologies. With several years of experience in the field, I've developed a keen eye for detail and a commitment to creating clean, efficient, and user-friendly websites.",
    image: "/placeholder.svg?height=400&width=400",
  },
  skills: {
    title: "My Skills",
    subtitle: "Technologies and tools I work with",
    categories: {
      frontend: [
        { id: "1", name: "HTML", icon: "Code" },
        { id: "2", name: "CSS", icon: "Palette" },
        { id: "3", name: "JavaScript", icon: "Code" },
        { id: "4", name: "TypeScript", icon: "Code" },
        { id: "5", name: "React", icon: "Code" },
        { id: "6", name: "Next.js", icon: "Code" },
      ],
      design: [
        { id: "7", name: "Responsive Design", icon: "Smartphone" },
        { id: "8", name: "UI/UX", icon: "Layout" },
        { id: "9", name: "Figma", icon: "Palette" },
        { id: "10", name: "Tailwind CSS", icon: "Palette" },
      ],
      backend: [
        { id: "11", name: "Node.js", icon: "Server" },
        { id: "12", name: "API Integration", icon: "Globe" },
        { id: "13", name: "Database Design", icon: "Database" },
        { id: "14", name: "Git", icon: "Code" },
      ],
    },
  },
  projects: {
    title: "My Projects",
    subtitle: "Check out some of my recent work",
    items: [
      {
        id: "1",
        title: "E-commerce Website",
        description: "A fully functional e-commerce website with payment integration",
        image: "/placeholder.svg?height=300&width=500",
        tags: ["React", "Node.js", "MongoDB"],
        link: "#",
      },
      {
        id: "2",
        title: "Portfolio Website",
        description: "A modern portfolio website for a photographer",
        image: "/placeholder.svg?height=300&width=500",
        tags: ["Next.js", "Tailwind CSS"],
        link: "#",
      },
      {
        id: "3",
        title: "Task Management App",
        description: "A task management application with real-time updates",
        image: "/placeholder.svg?height=300&width=500",
        tags: ["React", "Firebase", "Tailwind CSS"],
        link: "#",
      },
    ],
  },
  testimonials: {
    title: "Testimonials",
    subtitle: "What my clients say about me",
    items: [
      {
        id: "1",
        name: "John Doe",
        role: "CEO",
        company: "Tech Solutions",
        content: "Working with Danuka was a pleasure. He delivered the project on time and exceeded our expectations.",
        avatar: "/placeholder.svg?height=100&width=100",
      },
      {
        id: "2",
        name: "Jane Smith",
        role: "Marketing Director",
        company: "Creative Agency",
        content:
          "Danuka is a talented developer who understands both the technical and design aspects of web development.",
        avatar: "/placeholder.svg?height=100&width=100",
      },
      {
        id: "3",
        name: "Robert Johnson",
        role: "Founder",
        company: "Startup Inc.",
        content: "I highly recommend Danuka for any web development project. His attention to detail is impressive.",
        avatar: "/placeholder.svg?height=100&width=100",
      },
    ],
  },
  pricing: {
    title: "Pricing Plans",
    subtitle: "Choose the perfect plan for your needs",
    plans: [
      {
        id: "1",
        name: "Basic",
        description: "For small personal projects",
        price: "$49",
        popular: false,
        features: [
          "Single page website",
          "Responsive design",
          "Basic SEO optimization",
          "1 revision round",
          "Delivery within 7 days",
          "Basic admin panel",
        ],
      },
      {
        id: "2",
        name: "Pro",
        description: "For businesses and professional sites",
        price: "$149",
        popular: true,
        features: [
          "Multi-page website (up to 5 pages)",
          "Responsive design",
          "Advanced SEO optimization",
          "Content management system",
          "3 revision rounds",
          "Delivery within 14 days",
          "1 month of support",
          "Full-featured admin panel",
        ],
      },
      {
        id: "3",
        name: "Enterprise",
        description: "For large businesses and complex projects",
        price: "$499",
        popular: false,
        features: [
          "Custom website (unlimited pages)",
          "Responsive design",
          "Premium SEO optimization",
          "Advanced content management system",
          "E-commerce functionality",
          "Unlimited revision rounds",
          "Custom timeline",
          "6 months of priority support",
          "Advanced custom admin panel",
        ],
      },
    ],
  },
  faq: {
    title: "Frequently Asked Questions",
    subtitle: "Answers to common questions about my services",
    items: [
      {
        id: "1",
        question: "What services do you offer?",
        answer:
          "I offer web development services including website design, development, e-commerce solutions, and maintenance.",
      },
      {
        id: "2",
        question: "How long does it take to complete a project?",
        answer:
          "Project timelines vary depending on complexity. A simple website might take 1-2 weeks, while more complex projects can take 4-8 weeks or more.",
      },
      {
        id: "3",
        question: "Do you provide ongoing support?",
        answer:
          "Yes, I offer ongoing support and maintenance packages to ensure your website remains up-to-date and secure.",
      },
      {
        id: "4",
        question: "What is your payment process?",
        answer:
          "I typically require a 50% deposit to begin work, with the remaining 50% due upon project completion. For larger projects, we can arrange milestone payments.",
      },
    ],
  },
  contact: {
    title: "Get In Touch",
    subtitle: "Feel free to reach out if you have any questions",
    email: "danuka@example.com",
    phone: "+1 (123) 456-7890",
    address: "Colombo, Sri Lanka",
    socialLinks: {
      github: "https://github.com/danukanimsara",
      linkedin: "https://linkedin.com/in/danukanimsara",
      twitter: "https://twitter.com/danukanimsara",
    },
  },
  footer: {
    copyright: "© 2025 Danuka Nimsara. All rights reserved.",
    links: [
      { label: "Home", href: "#" },
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#projects" },
      { label: "Contact", href: "#contact" },
    ],
  },
}

export const useSiteStore = create<SiteStore>()(
  persist(
    (set) => ({
      data: initialData,
      updateHero: (hero) =>
        set((state) => ({
          data: { ...state.data, hero: { ...state.data.hero, ...hero } },
        })),
      updateAbout: (about) =>
        set((state) => ({
          data: { ...state.data, about: { ...state.data.about, ...about } },
        })),
      updateSkills: (skills) =>
        set((state) => ({
          data: { ...state.data, skills: { ...state.data.skills, ...skills } },
        })),
      updateSkill: (category, updatedSkill) =>
        set((state) => ({
          data: {
            ...state.data,
            skills: {
              ...state.data.skills,
              categories: {
                ...state.data.skills.categories,
                [category]: state.data.skills.categories[category].map((skill) =>
                  skill.id === updatedSkill.id ? updatedSkill : skill,
                ),
              },
            },
          },
        })),
      addSkill: (category, newSkill) =>
        set((state) => ({
          data: {
            ...state.data,
            skills: {
              ...state.data.skills,
              categories: {
                ...state.data.skills.categories,
                [category]: [...state.data.skills.categories[category], newSkill],
              },
            },
          },
        })),
      removeSkill: (category, id) =>
        set((state) => ({
          data: {
            ...state.data,
            skills: {
              ...state.data.skills,
              categories: {
                ...state.data.skills.categories,
                [category]: state.data.skills.categories[category].filter((skill) => skill.id !== id),
              },
            },
          },
        })),
      updateProjects: (projects) =>
        set((state) => ({
          data: { ...state.data, projects: { ...state.data.projects, ...projects } },
        })),
      updateProject: (updatedProject) =>
        set((state) => ({
          data: {
            ...state.data,
            projects: {
              ...state.data.projects,
              items: state.data.projects.items.map((project) =>
                project.id === updatedProject.id ? updatedProject : project,
              ),
            },
          },
        })),
      addProject: (newProject) =>
        set((state) => ({
          data: {
            ...state.data,
            projects: {
              ...state.data.projects,
              items: [...state.data.projects.items, newProject],
            },
          },
        })),
      removeProject: (id) =>
        set((state) => ({
          data: {
            ...state.data,
            projects: {
              ...state.data.projects,
              items: state.data.projects.items.filter((project) => project.id !== id),
            },
          },
        })),
      updateTestimonials: (testimonials) =>
        set((state) => ({
          data: { ...state.data, testimonials: { ...state.data.testimonials, ...testimonials } },
        })),
      updateTestimonial: (updatedTestimonial) =>
        set((state) => ({
          data: {
            ...state.data,
            testimonials: {
              ...state.data.testimonials,
              items: state.data.testimonials.items.map((testimonial) =>
                testimonial.id === updatedTestimonial.id ? updatedTestimonial : testimonial,
              ),
            },
          },
        })),
      addTestimonial: (newTestimonial) =>
        set((state) => ({
          data: {
            ...state.data,
            testimonials: {
              ...state.data.testimonials,
              items: [...state.data.testimonials.items, newTestimonial],
            },
          },
        })),
      removeTestimonial: (id) =>
        set((state) => ({
          data: {
            ...state.data,
            testimonials: {
              ...state.data.testimonials,
              items: state.data.testimonials.items.filter((testimonial) => testimonial.id !== id),
            },
          },
        })),
      updatePricing: (pricing) =>
        set((state) => ({
          data: { ...state.data, pricing: { ...state.data.pricing, ...pricing } },
        })),
      updatePricingPlan: (updatedPlan) =>
        set((state) => ({
          data: {
            ...state.data,
            pricing: {
              ...state.data.pricing,
              plans: state.data.pricing.plans.map((plan) => (plan.id === updatedPlan.id ? updatedPlan : plan)),
            },
          },
        })),
      updateFAQ: (faq) =>
        set((state) => ({
          data: { ...state.data, faq: { ...state.data.faq, ...faq } },
        })),
      updateFAQItem: (updatedItem) =>
        set((state) => ({
          data: {
            ...state.data,
            faq: {
              ...state.data.faq,
              items: state.data.faq.items.map((item) => (item.id === updatedItem.id ? updatedItem : item)),
            },
          },
        })),
      addFAQItem: (newItem) =>
        set((state) => ({
          data: {
            ...state.data,
            faq: {
              ...state.data.faq,
              items: [...state.data.faq.items, newItem],
            },
          },
        })),
      removeFAQItem: (id) =>
        set((state) => ({
          data: {
            ...state.data,
            faq: {
              ...state.data.faq,
              items: state.data.faq.items.filter((item) => item.id !== id),
            },
          },
        })),
      updateContact: (contact) =>
        set((state) => ({
          data: { ...state.data, contact: { ...state.data.contact, ...contact } },
        })),
      updateFooter: (footer) =>
        set((state) => ({
          data: { ...state.data, footer: { ...state.data.footer, ...footer } },
        })),
    }),
    {
      name: "site-storage",
    },
  ),
)

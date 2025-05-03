"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"

export type Skill = {
  id: string
  name: string
  icon: string
  category: "frontend" | "design" | "backend"
}

export type PricingPlan = {
  id: string
  name: string
  description: string
  price: string
  features: string[]
  popular: boolean
}

export type WebsiteData = {
  hero: {
    title: string
    subtitle: string
    imageUrl: string
  }
  about: {
    title: string
    content: string
  }
  skills: Skill[]
  adminPanel: {
    title: string
    description: string
    features: {
      title: string
      description: string
    }[]
  }
  pricing: {
    title: string
    description: string
    plans: PricingPlan[]
  }
  contact: {
    title: string
    description: string
    email: string
    socialLinks: {
      github: string
      linkedin: string
    }
  }
  footer: {
    copyright: string
  }
}

type WebsiteStore = {
  data: WebsiteData
  updateHero: (hero: WebsiteData["hero"]) => void
  updateAbout: (about: WebsiteData["about"]) => void
  updateSkill: (skill: Skill) => void
  addSkill: (skill: Skill) => void
  removeSkill: (id: string) => void
  updateAdminPanel: (adminPanel: WebsiteData["adminPanel"]) => void
  updatePricing: (pricing: WebsiteData["pricing"]) => void
  updatePlan: (plan: PricingPlan) => void
  updateContact: (contact: WebsiteData["contact"]) => void
  updateFooter: (footer: WebsiteData["footer"]) => void
}

// Initial data
const initialData: WebsiteData = {
  hero: {
    title: "Hi, I'm Danuka Nimsara",
    subtitle: "I'm a web developer specializing in building exceptional digital experiences.",
    imageUrl: "/placeholder.svg?height=320&width=320",
  },
  about: {
    title: "About Me",
    content:
      "I'm a passionate web developer with a strong foundation in modern web technologies. With several years of experience in the field, I've developed a keen eye for detail and a commitment to creating clean, efficient, and user-friendly websites.",
  },
  skills: [
    { id: "1", name: "HTML", icon: "Code", category: "frontend" },
    { id: "2", name: "CSS", icon: "Palette", category: "frontend" },
    { id: "3", name: "JavaScript", icon: "Code", category: "frontend" },
    { id: "4", name: "TypeScript", icon: "Code", category: "frontend" },
    { id: "5", name: "React", icon: "Code", category: "frontend" },
    { id: "6", name: "Next.js", icon: "Code", category: "frontend" },
    { id: "7", name: "Responsive Design", icon: "Smartphone", category: "design" },
    { id: "8", name: "UI/UX", icon: "Layout", category: "design" },
    { id: "9", name: "Figma", icon: "Palette", category: "design" },
    { id: "10", name: "Tailwind CSS", icon: "Palette", category: "design" },
    { id: "11", name: "Node.js", icon: "Server", category: "backend" },
    { id: "12", name: "API Integration", icon: "Globe", category: "backend" },
    { id: "13", name: "Database Design", icon: "Database", category: "backend" },
    { id: "14", name: "Git", icon: "Code", category: "backend" },
  ],
  adminPanel: {
    title: "Admin Panel",
    description: "Take full control of your website with our powerful admin dashboard.",
    features: [
      { title: "Content Management", description: "Edit text, images, and content without coding knowledge" },
      { title: "Site Structure", description: "Add new pages or sections to your website" },
      { title: "Data Management", description: "Manage users, products, or blog posts" },
      { title: "Integrations", description: "Connect with third-party services and APIs" },
    ],
  },
  pricing: {
    title: "Pricing Plans",
    description: "Choose the perfect plan for your needs. All plans include support and regular updates.",
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
  contact: {
    title: "Get In Touch",
    description:
      "Feel free to reach out if you're looking for a developer, have a question, or want to discuss your project.",
    email: "danuka@example.com",
    socialLinks: {
      github: "https://github.com/danukanimsara",
      linkedin: "https://linkedin.com/in/danukanimsara",
    },
  },
  footer: {
    copyright: "© 2025 Danuka Nimsara. All rights reserved.",
  },
}

export const useWebsiteStore = create<WebsiteStore>()(
  persist(
    (set) => ({
      data: initialData,
      updateHero: (hero) =>
        set((state) => ({
          data: { ...state.data, hero },
        })),
      updateAbout: (about) =>
        set((state) => ({
          data: { ...state.data, about },
        })),
      updateSkill: (updatedSkill) =>
        set((state) => ({
          data: {
            ...state.data,
            skills: state.data.skills.map((skill) => (skill.id === updatedSkill.id ? updatedSkill : skill)),
          },
        })),
      addSkill: (newSkill) =>
        set((state) => ({
          data: {
            ...state.data,
            skills: [...state.data.skills, newSkill],
          },
        })),
      removeSkill: (id) =>
        set((state) => ({
          data: {
            ...state.data,
            skills: state.data.skills.filter((skill) => skill.id !== id),
          },
        })),
      updateAdminPanel: (adminPanel) =>
        set((state) => ({
          data: { ...state.data, adminPanel },
        })),
      updatePricing: (pricing) =>
        set((state) => ({
          data: { ...state.data, pricing },
        })),
      updatePlan: (updatedPlan) =>
        set((state) => ({
          data: {
            ...state.data,
            pricing: {
              ...state.data.pricing,
              plans: state.data.pricing.plans.map((plan) => (plan.id === updatedPlan.id ? updatedPlan : plan)),
            },
          },
        })),
      updateContact: (contact) =>
        set((state) => ({
          data: { ...state.data, contact },
        })),
      updateFooter: (footer) =>
        set((state) => ({
          data: { ...state.data, footer },
        })),
    }),
    {
      name: "website-storage",
    },
  ),
)

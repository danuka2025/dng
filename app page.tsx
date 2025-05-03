"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Github,
  Mail,
  Linkedin,
  Twitter,
  Check,
  Code,
  Palette,
  Database,
  Layout,
  Smartphone,
  Globe,
  Server,
  Settings,
  ChevronRight,
} from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import { useSiteStore } from "@/lib/store"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

// Map icon names to Lucide icons
const iconMap: Record<string, React.ReactNode> = {
  Code: <Code className="h-5 w-5" />,
  Palette: <Palette className="h-5 w-5" />,
  Database: <Database className="h-5 w-5" />,
  Layout: <Layout className="h-5 w-5" />,
  Smartphone: <Smartphone className="h-5 w-5" />,
  Globe: <Globe className="h-5 w-5" />,
  Server: <Server className="h-5 w-5" />,
  Settings: <Settings className="h-5 w-5" />,
}

export default function Portfolio() {
  const { data } = useSiteStore()
  const [mounted, setMounted] = useState(false)
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  })
  const { toast } = useToast()

  // Fix hydration issues
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Simulate form submission
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    })

    // Reset form
    setContactForm({
      name: "",
      email: "",
      message: "",
    })
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="font-bold">Danuka Nimsara</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-foreground/80">
                About
              </Link>
              <Link href="#skills" className="transition-colors hover:text-foreground/80">
                Skills
              </Link>
              <Link href="#projects" className="transition-colors hover:text-foreground/80">
                Projects
              </Link>
              <Link href="#testimonials" className="transition-colors hover:text-foreground/80">
                Testimonials
              </Link>
              <Link href="#pricing" className="transition-colors hover:text-foreground/80">
                Pricing
              </Link>
              <Link href="#faq" className="transition-colors hover:text-foreground/80">
                FAQ
              </Link>
              <Link href="#contact" className="transition-colors hover:text-foreground/80">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <div className="flex items-center gap-2">
                <ThemeToggle />
                <Button asChild variant="outline" size="icon" className="ml-auto hidden md:flex">
                  <Link href="#contact">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Contact</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container py-6 md:py-12">
        {/* Hero Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="flex flex-col-reverse items-center gap-8 pb-8 pt-6 md:flex-row md:pb-10 md:pt-8 lg:py-20"
        >
          <div className="flex-1 space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              {data.hero.title}
            </h1>
            <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl">{data.hero.subtitle}</p>
            <div className="flex gap-4">
              <Button asChild>
                <Link href="#skills">{data.hero.ctaPrimary}</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#contact">{data.hero.ctaSecondary}</Link>
              </Button>
            </div>
            <div className="flex gap-4 pt-4">
              <Link href={data.contact.socialLinks.github} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href={data.contact.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href={data.contact.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Button>
              </Link>
              <Link href={`mailto:${data.contact.email}`}>
                <Button variant="ghost" size="icon">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
          <motion.div
            className="flex justify-center md:flex-1"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="relative h-60 w-60 overflow-hidden rounded-full border-4 border-primary md:h-80 md:w-80">
              <Image
                src={data.hero.image || "/placeholder.svg"}
                alt="Profile"
                width={320}
                height={320}
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </motion.section>

        {/* About Section */}
        <motion.section
          id="about"
          className="py-10 md:py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-1/2">
                <motion.div
                  className="relative h-80 w-full overflow-hidden rounded-lg border-4 border-primary"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image src={data.about.image || "/placeholder.svg"} alt="About Me" fill className="object-cover" />
                </motion.div>
              </div>
              <div className="md:w-1/2 space-y-4">
                <div className="inline-block">
                  <div className="h-1 w-20 bg-primary rounded-full mb-2"></div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{data.about.title}</h2>
                </div>
                <p className="text-muted-foreground">{data.about.subtitle}</p>
                <p className="text-lg">{data.about.description}</p>
                <Button asChild>
                  <Link href="#contact">
                    Get in Touch
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          id="skills"
          className="py-10 md:py-16 bg-gradient-to-b from-background to-muted/30"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <motion.div variants={fadeIn} className="space-y-2">
                <div className="inline-block">
                  <div className="h-1 w-20 bg-primary rounded-full mb-2 mx-auto"></div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{data.skills.title}</h2>
                </div>
                <p className="max-w-[900px] text-muted-foreground md:text-lg">{data.skills.subtitle}</p>
              </motion.div>
            </div>

            <div className="grid gap-8 md:gap-12">
              {/* Frontend Skills */}
              <motion.div variants={fadeIn} className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="h-1 w-12 bg-primary rounded-full"></div>
                  <h3 className="text-xl font-bold">Frontend Development</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {data.skills.categories.frontend.map((skill) => (
                    <motion.div key={skill.id} whileHover={{ y: -5 }} whileTap={{ scale: 0.95 }}>
                      <Card className="overflow-hidden group hover:border-primary transition-all duration-300 h-full">
                        <CardContent className="p-4 flex flex-col items-center justify-center text-center space-y-2 h-full">
                          <div className="p-2 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                            {iconMap[skill.icon]}
                          </div>
                          <p className="font-medium">{skill.name}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Design Skills */}
              <motion.div variants={fadeIn} className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="h-1 w-12 bg-primary rounded-full"></div>
                  <h3 className="text-xl font-bold">Design & UI/UX</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {data.skills.categories.design.map((skill) => (
                    <motion.div key={skill.id} whileHover={{ y: -5 }} whileTap={{ scale: 0.95 }}>
                      <Card className="overflow-hidden group hover:border-primary transition-all duration-300 h-full">
                        <CardContent className="p-4 flex flex-col items-center justify-center text-center space-y-2 h-full">
                          <div className="p-2 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                            {iconMap[skill.icon]}
                          </div>
                          <p className="font-medium">{skill.name}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Backend Skills */}
              <motion.div variants={fadeIn} className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="h-1 w-12 bg-primary rounded-full"></div>
                  <h3 className="text-xl font-bold">Backend & Development Tools</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {data.skills.categories.backend.map((skill) => (
                    <motion.div key={skill.id} whileHover={{ y: -5 }} whileTap={{ scale: 0.95 }}>
                      <Card className="overflow-hidden group hover:border-primary transition-all duration-300 h-full">
                        <CardContent className="p-4 flex flex-col items-center justify-center text-center space-y-2 h-full">
                          <div className="p-2 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                            {iconMap[skill.icon]}
                          </div>
                          <p className="font-medium">{skill.name}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          className="py-10 md:py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <motion.div variants={fadeIn} className="space-y-2">
                <div className="inline-block">
                  <div className="h-1 w-20 bg-primary rounded-full mb-2 mx-auto"></div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{data.projects.title}</h2>
                </div>
                <p className="max-w-[900px] text-muted-foreground md:text-lg">{data.projects.subtitle}</p>
              </motion.div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {data.projects.items.map((project) => (
                <motion.div
                  key={project.id}
                  variants={fadeIn}
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="overflow-hidden h-full border-primary/20 hover:border-primary transition-all duration-300">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className="w-full">
                        <Link href={project.link} target="_blank" rel="noopener noreferrer">
                          View Project
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section
          id="testimonials"
          className="py-10 md:py-16 bg-gradient-to-b from-muted/30 to-background"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <motion.div variants={fadeIn} className="space-y-2">
                <div className="inline-block">
                  <div className="h-1 w-20 bg-primary rounded-full mb-2 mx-auto"></div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{data.testimonials.title}</h2>
                </div>
                <p className="max-w-[900px] text-muted-foreground md:text-lg">{data.testimonials.subtitle}</p>
              </motion.div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {data.testimonials.items.map((testimonial) => (
                <motion.div key={testimonial.id} variants={fadeIn} whileHover={{ y: -5 }}>
                  <Card className="h-full border-primary/20 hover:border-primary transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col h-full">
                        <div className="mb-4">
                          <svg
                            className="h-8 w-8 text-primary/40"
                            fill="currentColor"
                            viewBox="0 0 32 32"
                            aria-hidden="true"
                          >
                            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                          </svg>
                        </div>
                        <p className="flex-1 text-lg mb-4">{testimonial.content}</p>
                        <div className="flex items-center gap-4">
                          <div className="h-10 w-10 rounded-full overflow-hidden">
                            <img
                              src={testimonial.avatar || "/placeholder.svg"}
                              alt={testimonial.name}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div>
                            <p className="font-medium">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {testimonial.role}, {testimonial.company}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Pricing Section */}
        <motion.section
          id="pricing"
          className="py-10 md:py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <motion.div variants={fadeIn} className="space-y-2">
                <div className="inline-block">
                  <div className="h-1 w-20 bg-primary rounded-full mb-2 mx-auto"></div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{data.pricing.title}</h2>
                </div>
                <p className="max-w-[900px] text-muted-foreground md:text-lg">{data.pricing.subtitle}</p>
              </motion.div>
            </div>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
              {data.pricing.plans.map((plan) => (
                <motion.div
                  key={plan.id}
                  variants={fadeIn}
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className={`flex flex-col h-full ${plan.popular ? "border-primary shadow-lg" : ""}`}>
                    <CardHeader className={plan.popular ? "bg-primary/10" : ""}>
                      {plan.popular && (
                        <div className="mb-2">
                          <Badge className="bg-primary text-primary-foreground">Popular</Badge>
                        </div>
                      )}
                      <CardTitle className="text-xl">{plan.name}</CardTitle>
                      <CardDescription>{plan.description}</CardDescription>
                      <div className="mt-4 flex items-baseline text-5xl font-bold">
                        {plan.price}
                        <span className="ml-1 text-lg font-medium text-muted-foreground">/project</span>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <ul className="space-y-2 text-sm">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <Check className="mr-2 h-4 w-4 text-primary" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" asChild>
                        <Link href="#contact">Get Started</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section
          id="faq"
          className="py-10 md:py-16 bg-gradient-to-b from-background to-muted/30"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <div className="inline-block">
                  <div className="h-1 w-20 bg-primary rounded-full mb-2 mx-auto"></div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{data.faq.title}</h2>
                </div>
                <p className="max-w-[900px] text-muted-foreground md:text-lg">{data.faq.subtitle}</p>
              </div>
            </div>

            <div className="mx-auto max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                {data.faq.items.map((item) => (
                  <AccordionItem key={item.id} value={item.id}>
                    <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                    <AccordionContent>{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          className="py-10 md:py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <div className="inline-block">
                  <div className="h-1 w-20 bg-primary rounded-full mb-2 mx-auto"></div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{data.contact.title}</h2>
                </div>
                <p className="max-w-[900px] text-muted-foreground md:text-lg">{data.contact.subtitle}</p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                  <CardDescription>Fill out the form below to get in touch with me.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Your message"
                        rows={5}
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>You can also reach me using the following information.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <a
                        href={`mailto:${data.contact.email}`}
                        className="text-sm text-muted-foreground hover:underline"
                      >
                        {data.contact.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <Globe className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-sm text-muted-foreground">{data.contact.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <Smartphone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href={`tel:${data.contact.phone}`} className="text-sm text-muted-foreground hover:underline">
                        {data.contact.phone}
                      </a>
                    </div>
                  </div>
                  <div className="mt-6">
                    <p className="font-medium mb-2">Connect with me</p>
                    <div className="flex gap-4">
                      <Link href={data.contact.socialLinks.github} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="icon">
                          <Github className="h-5 w-5" />
                          <span className="sr-only">GitHub</span>
                        </Button>
                      </Link>
                      <Link href={data.contact.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="icon">
                          <Linkedin className="h-5 w-5" />
                          <span className="sr-only">LinkedIn</span>
                        </Button>
                      </Link>
                      <Link href={data.contact.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="icon">
                          <Twitter className="h-5 w-5" />
                          <span className="sr-only">Twitter</span>
                        </Button>
                      </Link>
                      <Link href={`mailto:${data.contact.email}`}>
                        <Button variant="outline" size="icon">
                          <Mail className="h-5 w-5" />
                          <span className="sr-only">Email</span>
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground">{data.footer.copyright}</p>
          <div className="flex items-center gap-4">
            <Link href={data.contact.socialLinks.github} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href={data.contact.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

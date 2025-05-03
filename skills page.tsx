"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Save, Plus, Trash2, Code, Palette, Database, Layout, Smartphone, Globe, Server, Settings } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"
import { useSiteStore } from "@/lib/store"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { Skill } from "@/lib/store"

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

export default function SkillsPage() {
  const { data, updateSkills, updateSkill, addSkill, removeSkill } = useSiteStore()
  const [title, setTitle] = useState(data.skills.title)
  const [subtitle, setSubtitle] = useState(data.skills.subtitle)
  const [newSkill, setNewSkill] = useState<Partial<Skill>>({
    name: "",
    icon: "Code",
    category: "frontend",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { toast } = useToast()

  // Fix hydration issues
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const handleSaveGeneral = () => {
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      updateSkills({
        title,
        subtitle,
      })

      toast({
        title: "Skills section updated",
        description: "Your changes have been saved successfully",
      })

      setIsLoading(false)
    }, 1000)
  }

  const handleAddSkill = () => {
    if (!newSkill.name || !newSkill.icon || !newSkill.category) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      })
      return
    }

    const skillToAdd: Skill = {
      id: Date.now().toString(),
      name: newSkill.name,
      icon: newSkill.icon,
      category: newSkill.category as "frontend" | "design" | "backend",
    }

    addSkill(skillToAdd.category, skillToAdd)

    toast({
      title: "Skill added",
      description: `${skillToAdd.name} has been added to your skills`,
    })

    // Reset form
    setNewSkill({
      name: "",
      icon: "Code",
      category: "frontend",
    })
  }

  const handleRemoveSkill = (category: "frontend" | "design" | "backend", id: string) => {
    removeSkill(category, id)

    toast({
      title: "Skill removed",
      description: "The skill has been removed from your skills",
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Skills Section</h1>
          <p className="text-muted-foreground">Edit your website's skills section content.</p>
        </div>
        <Button onClick={handleSaveGeneral} disabled={isLoading}>
          <Save className="mr-2 h-4 w-4" />
          {isLoading ? "Saving..." : "Save Changes"}
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>General Settings</CardTitle>
          <CardDescription>Edit the main content of your skills section.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter skills title"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="subtitle">Subtitle</Label>
            <Input
              id="subtitle"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              placeholder="Enter skills subtitle"
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Add New Skill</CardTitle>
          <CardDescription>Add a new skill to your skills section.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="space-y-2">
              <Label htmlFor="skill-name">Skill Name</Label>
              <Input
                id="skill-name"
                value={newSkill.name}
                onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
                placeholder="Enter skill name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="skill-icon">Icon</Label>
              <Select value={newSkill.icon} onValueChange={(value) => setNewSkill({ ...newSkill, icon: value })}>
                <SelectTrigger id="skill-icon">
                  <SelectValue placeholder="Select an icon" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(iconMap).map(([name, icon]) => (
                    <SelectItem key={name} value={name}>
                      <div className="flex items-center gap-2">
                        {icon}
                        <span>{name}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="skill-category">Category</Label>
              <Select
                value={newSkill.category}
                onValueChange={(value: "frontend" | "design" | "backend") =>
                  setNewSkill({ ...newSkill, category: value })
                }
              >
                <SelectTrigger id="skill-category">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="frontend">Frontend</SelectItem>
                  <SelectItem value="design">Design</SelectItem>
                  <SelectItem value="backend">Backend</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-end">
              <Button onClick={handleAddSkill} className="w-full">
                <Plus className="mr-2 h-4 w-4" />
                Add Skill
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Manage Skills</CardTitle>
          <CardDescription>Edit and manage your skills.</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="frontend">
            <TabsList className="mb-4">
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="design">Design</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
            </TabsList>

            <TabsContent value="frontend">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {data.skills.categories.frontend.map((skill) => (
                  <Card key={skill.id} className="overflow-hidden">
                    <CardContent className="p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-full bg-primary/10 text-primary">{iconMap[skill.icon]}</div>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <Button variant="ghost" size="icon" onClick={() => handleRemoveSkill("frontend", skill.id)}>
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="design">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {data.skills.categories.design.map((skill) => (
                  <Card key={skill.id} className="overflow-hidden">
                    <CardContent className="p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-full bg-primary/10 text-primary">{iconMap[skill.icon]}</div>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <Button variant="ghost" size="icon" onClick={() => handleRemoveSkill("design", skill.id)}>
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="backend">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {data.skills.categories.backend.map((skill) => (
                  <Card key={skill.id} className="overflow-hidden">
                    <CardContent className="p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-full bg-primary/10 text-primary">{iconMap[skill.icon]}</div>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <Button variant="ghost" size="icon" onClick={() => handleRemoveSkill("backend", skill.id)}>
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </motion.div>
  )
}

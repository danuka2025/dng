"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Save, Upload } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { useSiteStore } from "@/lib/store"

export default function AboutPage() {
  const { data, updateAbout } = useSiteStore()
  const [title, setTitle] = useState(data.about.title)
  const [subtitle, setSubtitle] = useState(data.about.subtitle)
  const [description, setDescription] = useState(data.about.description)
  const [image, setImage] = useState(data.about.image)
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

  const handleSave = () => {
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      updateAbout({
        title,
        subtitle,
        description,
        image,
      })

      toast({
        title: "About section updated",
        description: "Your changes have been saved successfully",
      })

      setIsLoading(false)
    }, 1000)
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
          <h1 className="text-3xl font-bold tracking-tight">About Section</h1>
          <p className="text-muted-foreground">Edit your website's about section content.</p>
        </div>
        <Button onClick={handleSave} disabled={isLoading}>
          <Save className="mr-2 h-4 w-4" />
          {isLoading ? "Saving..." : "Save Changes"}
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>About Content</CardTitle>
            <CardDescription>Edit the main content of your about section.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter about title"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="subtitle">Subtitle</Label>
              <Input
                id="subtitle"
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
                placeholder="Enter about subtitle"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter about description"
                rows={6}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>About Image</CardTitle>
            <CardDescription>Edit your about section image.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="image">Image URL</Label>
              <div className="flex gap-2">
                <Input
                  id="image"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  placeholder="Enter image URL"
                />
                <Button variant="outline" size="icon">
                  <Upload className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">Enter the URL of your about image or upload a new one.</p>
            </div>
            <div className="mt-4">
              <div className="aspect-square rounded-lg border overflow-hidden">
                <img src={image || "/placeholder.svg"} alt="About" className="w-full h-full object-cover" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Preview</CardTitle>
          <CardDescription>Preview how your about section will look on your website.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border overflow-hidden">
            <div className="bg-muted p-6 md:p-10 flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <div className="relative h-60 w-full overflow-hidden rounded-lg border-4 border-primary">
                  <img src={image || "/placeholder.svg"} alt="About" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="md:w-1/2 space-y-4">
                <div>
                  <div className="h-1 w-20 bg-primary rounded-full mb-2"></div>
                  <h2 className="text-3xl font-bold">{title || "About Title"}</h2>
                </div>
                <p className="text-muted-foreground">{subtitle || "About Subtitle"}</p>
                <p className="text-lg">{description || "About Description"}</p>
                <Button>Get in Touch</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

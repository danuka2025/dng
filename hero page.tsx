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

export default function HeroPage() {
  const { data, updateHero } = useSiteStore()
  const [title, setTitle] = useState(data.hero.title)
  const [subtitle, setSubtitle] = useState(data.hero.subtitle)
  const [image, setImage] = useState(data.hero.image)
  const [ctaPrimary, setCtaPrimary] = useState(data.hero.ctaPrimary)
  const [ctaSecondary, setCtaSecondary] = useState(data.hero.ctaSecondary)
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
      updateHero({
        title,
        subtitle,
        image,
        ctaPrimary,
        ctaSecondary,
      })

      toast({
        title: "Hero section updated",
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
          <h1 className="text-3xl font-bold tracking-tight">Hero Section</h1>
          <p className="text-muted-foreground">Edit your website's hero section content.</p>
        </div>
        <Button onClick={handleSave} disabled={isLoading}>
          <Save className="mr-2 h-4 w-4" />
          {isLoading ? "Saving..." : "Save Changes"}
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Hero Content</CardTitle>
            <CardDescription>Edit the main content of your hero section.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter hero title"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="subtitle">Subtitle</Label>
              <Textarea
                id="subtitle"
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
                placeholder="Enter hero subtitle"
                rows={3}
              />
            </div>
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
              <p className="text-xs text-muted-foreground">Enter the URL of your hero image or upload a new one.</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Call to Action</CardTitle>
            <CardDescription>Edit your hero section call-to-action buttons.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="cta-primary">Primary Button Text</Label>
              <Input
                id="cta-primary"
                value={ctaPrimary}
                onChange={(e) => setCtaPrimary(e.target.value)}
                placeholder="Enter primary button text"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cta-secondary">Secondary Button Text</Label>
              <Input
                id="cta-secondary"
                value={ctaSecondary}
                onChange={(e) => setCtaSecondary(e.target.value)}
                placeholder="Enter secondary button text"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Preview</CardTitle>
          <CardDescription>Preview how your hero section will look on your website.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border overflow-hidden">
            <div className="bg-muted p-6 md:p-10 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 space-y-4 text-center md:text-left">
                <h2 className="text-3xl font-bold">{title || "Hero Title"}</h2>
                <p className="text-muted-foreground">{subtitle || "Hero Subtitle"}</p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <Button>{ctaPrimary || "Primary CTA"}</Button>
                  <Button variant="outline">{ctaSecondary || "Secondary CTA"}</Button>
                </div>
              </div>
              <div className="w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-primary flex-shrink-0">
                <img src={image || "/placeholder.svg"} alt="Hero" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

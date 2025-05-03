"use client"

import { useState } from "react"
import { FileText, ImageIcon, Plus, Save } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

export default function ContentPage() {
  const [heroTitle, setHeroTitle] = useState("Hi, I'm Your Name")
  const [heroDescription, setHeroDescription] = useState(
    "I'm a web developer specializing in building exceptional digital experiences.",
  )
  const [aboutText, setAboutText] = useState(
    "I'm a passionate web developer with a strong foundation in modern web technologies. With several years of experience in the field, I've developed a keen eye for detail and a commitment to creating clean, efficient, and user-friendly websites.",
  )

  const handleSave = () => {
    // In a real implementation, this would save to a database or API
    alert("Content saved successfully!")
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Content Management</h1>
          <p className="text-muted-foreground">Edit and manage your website content.</p>
        </div>
        <Button onClick={handleSave}>
          <Save className="mr-2 h-4 w-4" />
          Save Changes
        </Button>
      </div>

      <Tabs defaultValue="home">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="home">Home Page</TabsTrigger>
          <TabsTrigger value="about">About Section</TabsTrigger>
          <TabsTrigger value="pricing">Pricing Section</TabsTrigger>
        </TabsList>
        <TabsContent value="home" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Hero Section</CardTitle>
              <CardDescription>Edit your main hero section content.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="hero-title">Title</Label>
                <Input
                  id="hero-title"
                  value={heroTitle}
                  onChange={(e) => setHeroTitle(e.target.value)}
                  placeholder="Enter hero title"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="hero-description">Description</Label>
                <Textarea
                  id="hero-description"
                  value={heroDescription}
                  onChange={(e) => setHeroDescription(e.target.value)}
                  placeholder="Enter hero description"
                  rows={3}
                />
              </div>
              <div className="space-y-2">
                <Label>Hero Image</Label>
                <div className="flex items-center gap-4">
                  <div className="h-24 w-24 rounded-full border-2 border-dashed flex items-center justify-center">
                    <ImageIcon className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <Button variant="outline" size="sm">
                    <Plus className="mr-2 h-4 w-4" />
                    Upload Image
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="about" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>About Section</CardTitle>
              <CardDescription>Edit your about section content.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="about-text">About Text</Label>
                <Textarea
                  id="about-text"
                  value={aboutText}
                  onChange={(e) => setAboutText(e.target.value)}
                  placeholder="Enter about text"
                  rows={6}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="pricing" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Pricing Plans</CardTitle>
              <CardDescription>Manage your pricing plans.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {["Basic", "Pro", "Enterprise"].map((plan, index) => (
                  <div key={index} className="flex items-center justify-between border-b pb-4">
                    <div>
                      <h3 className="font-medium">{plan}</h3>
                      <p className="text-sm text-muted-foreground">
                        {index === 0
                          ? "For small personal projects"
                          : index === 1
                            ? "For businesses and professional sites"
                            : "For large businesses and complex projects"}
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      <FileText className="mr-2 h-4 w-4" />
                      Edit
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

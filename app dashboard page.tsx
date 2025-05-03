"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  BarChart3,
  FileText,
  Settings,
  ShoppingCart,
  Users,
  ArrowUp,
  ArrowDown,
  Eye,
  Clock,
  Activity,
  Zap,
  Bell,
  ImageIcon,
  User,
  Code,
  MessageSquare,
  Star,
  HelpCircle,
} from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useSiteStore } from "@/lib/store"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DashboardPage() {
  const { data } = useSiteStore()
  const [mounted, setMounted] = useState(false)

  // Fix hydration issues
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const sections = [
    { title: "Hero Section", href: "/dashboard/hero", icon: <ImageIcon className="h-10 w-10 text-blue-500" /> },
    { title: "About Section", href: "/dashboard/about", icon: <User className="h-10 w-10 text-green-500" /> },
    { title: "Skills", href: "/dashboard/skills", icon: <Code className="h-10 w-10 text-purple-500" /> },
    { title: "Projects", href: "/dashboard/projects", icon: <FileText className="h-10 w-10 text-amber-500" /> },
    { title: "Testimonials", href: "/dashboard/testimonials", icon: <Star className="h-10 w-10 text-pink-500" /> },
    { title: "Pricing", href: "/dashboard/pricing", icon: <ShoppingCart className="h-10 w-10 text-indigo-500" /> },
    { title: "FAQ", href: "/dashboard/faq", icon: <HelpCircle className="h-10 w-10 text-cyan-500" /> },
    { title: "Contact", href: "/dashboard/contact", icon: <MessageSquare className="h-10 w-10 text-teal-500" /> },
  ]

  return (
    <motion.div className="space-y-6" variants={container} initial="hidden" animate="show">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <motion.div variants={item}>
          <h1 className="text-3xl font-bold tracking-tight">Welcome back, Danuka</h1>
          <p className="text-muted-foreground">Here's what's happening with your website today.</p>
        </motion.div>
        <motion.div variants={item} className="flex items-center gap-2">
          <Button asChild>
            <Link href="/">
              <Zap className="mr-2 h-4 w-4" />
              View Website
            </Link>
          </Button>
        </motion.div>
      </div>

      <motion.div variants={item}>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="sections">Website Sections</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card className="overflow-hidden">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
                  <CardTitle className="text-sm font-medium">Total Visitors</CardTitle>
                  <Eye className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="text-2xl font-bold">1,234</div>
                  <div className="flex items-center text-xs text-muted-foreground mt-1">
                    <ArrowUp className="mr-1 h-3 w-3 text-green-500" />
                    <span className="text-green-500 font-medium">12%</span>
                    <span className="ml-1">from last month</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
                  <CardTitle className="text-sm font-medium">Active Users</CardTitle>
                  <Users className="h-4 w-4 text-green-600 dark:text-green-400" />
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="text-2xl font-bold">342</div>
                  <div className="flex items-center text-xs text-muted-foreground mt-1">
                    <ArrowUp className="mr-1 h-3 w-3 text-green-500" />
                    <span className="text-green-500 font-medium">5%</span>
                    <span className="ml-1">from last month</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900">
                  <CardTitle className="text-sm font-medium">Products</CardTitle>
                  <ShoppingCart className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="text-2xl font-bold">24</div>
                  <div className="flex items-center text-xs text-muted-foreground mt-1">
                    <ArrowUp className="mr-1 h-3 w-3 text-green-500" />
                    <span className="text-green-500 font-medium">2</span>
                    <span className="ml-1">added this month</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-gradient-to-r from-amber-50 to-amber-100 dark:from-amber-950 dark:to-amber-900">
                  <CardTitle className="text-sm font-medium">Avg. Session</CardTitle>
                  <Clock className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="text-2xl font-bold">2m 45s</div>
                  <div className="flex items-center text-xs text-muted-foreground mt-1">
                    <ArrowDown className="mr-1 h-3 w-3 text-red-500" />
                    <span className="text-red-500 font-medium">1%</span>
                    <span className="ml-1">from last month</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle>Website Activity</CardTitle>
                  <CardDescription>Website traffic over the last 30 days</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] w-full rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 flex items-center justify-center">
                    <Activity className="h-24 w-24 text-blue-500/20" />
                  </div>
                </CardContent>
              </Card>
              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Manage your website content and settings</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Link
                      href="/dashboard/hero"
                      className="flex flex-col items-center justify-center rounded-lg border border-dashed p-4 text-center hover:bg-muted transition-colors"
                    >
                      <ImageIcon className="h-6 w-6 mb-2 text-blue-500" />
                      <div className="text-sm font-medium">Edit Hero</div>
                    </Link>
                    <Link
                      href="/dashboard/settings"
                      className="flex flex-col items-center justify-center rounded-lg border border-dashed p-4 text-center hover:bg-muted transition-colors"
                    >
                      <Settings className="h-6 w-6 mb-2 text-purple-500" />
                      <div className="text-sm font-medium">Site Settings</div>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest actions on your website</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { action: "Hero section updated", section: "Home page", time: "2 hours ago" },
                    { action: "New testimonial added", section: "Testimonials", time: "5 hours ago" },
                    { action: "Contact form submission", section: "Contact", time: "1 day ago" },
                    { action: "Pricing plan updated", section: "Pricing", time: "2 days ago" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                    >
                      <div>
                        <p className="text-sm font-medium">{item.action}</p>
                        <p className="text-xs text-muted-foreground">{item.section}</p>
                      </div>
                      <div className="text-xs text-muted-foreground">{item.time}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Analytics Overview</CardTitle>
                <CardDescription>Detailed website analytics and metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] w-full rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 flex items-center justify-center">
                  <BarChart3 className="h-24 w-24 text-blue-500/20" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sections" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Website Sections</CardTitle>
                <CardDescription>Edit and manage your website sections</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {sections.map((section) => (
                    <Link
                      key={section.title}
                      href={section.href}
                      className="flex flex-col items-center justify-center rounded-lg border p-6 text-center hover:bg-muted transition-colors"
                    >
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mb-4">
                        {section.icon}
                      </motion.div>
                      <div className="text-lg font-medium">{section.title}</div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>Recent system notifications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "System Update",
                      message: "The system has been updated to version 2.0",
                      time: "1 hour ago",
                    },
                    { title: "New Feature", message: "New dashboard features are now available", time: "1 day ago" },
                    {
                      title: "Maintenance",
                      message: "Scheduled maintenance completed successfully",
                      time: "2 days ago",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4 border-b pb-4 last:border-0 last:pb-0">
                      <div className="rounded-full bg-blue-100 dark:bg-blue-900 p-2">
                        <Bell className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{item.title}</p>
                        <p className="text-xs text-muted-foreground">{item.message}</p>
                        <p className="text-xs text-muted-foreground mt-1">{item.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </motion.div>
  )
}

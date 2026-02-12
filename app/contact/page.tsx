"use client";

import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import AnimatedSection from "@/components/AnimatedSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to send email");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmissionError(
        error instanceof Error ? error.message : "Failed to send message"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", subject: "", message: "" });
    setSubmissionError("");
    setIsSubmitted(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Head>
        <title>Contact Billie Heidelberg Jr. | Available for New Opportunities | Full Stack Developer</title>
        <meta
          name="description"
          content="Get in touch with Billie Heidelberg Jr. - Full Stack Developer with 7+ years experience. Available for full-time, contract, and consulting opportunities. Quick response guaranteed."
        />
        <meta name="keywords" content="contact developer, hire full stack developer, React developer available, TypeScript expert, team lead available, consulting opportunities" />
      </Head>
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <AnimatedSection animationType="fadeIn" className="relative py-24 md:py-32 bg-secondary/30">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="mb-6">
              <Badge className="text-sm px-4 py-2">
                ✓ Available for New Opportunities
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Let's Work Together
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Looking for a senior full-stack developer who can hit the ground running? 
              I'm available for full-time roles, contract work, and consulting projects.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild>
                <a href="#contact-form">
                  Send Message
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#quick-contact">
                  Quick Contact
                </a>
              </Button>
            </div>
          </div>
        </AnimatedSection>

        {/* Quick Contact Options */}
        <AnimatedSection
          animationType="fadeInUp"
          className="py-16 md:py-24"
          id="quick-contact"
        >
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Get In Touch Quickly
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose the method that works best for you. I typically respond within 24 hours.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {/* Email */}
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <CardTitle className="text-lg">Email</CardTitle>
                  <CardDescription>Direct communication</CardDescription>
                </CardHeader>
                <CardContent>
                  <a href="mailto:billie@houseofheidelberg.com" className="text-primary hover:text-primary/80 font-medium text-sm">
                    billie@houseofheidelberg.com
                  </a>
                </CardContent>
              </Card>
              
              {/* LinkedIn */}
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <CardTitle className="text-lg">LinkedIn</CardTitle>
                  <CardDescription>Professional network</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://linkedin.com/in/bheidelberg" target="_blank" rel="noopener noreferrer">
                      View Profile
                    </a>
                  </Button>
                </CardContent>
              </Card>
              
              {/* GitHub */}
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <CardTitle className="text-lg">GitHub</CardTitle>
                  <CardDescription>View my work</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://github.com/theamazingmrb" target="_blank" rel="noopener noreferrer">
                      View Projects
                    </a>
                  </Button>
                </CardContent>
              </Card>
              
              {/* Resume */}
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                    </svg>
                  </div>
                  <CardTitle className="text-lg">Resume</CardTitle>
                  <CardDescription>Download PDF</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" asChild>
                    <a href="/documents/Billie_Heidelberg_Software_Engineer_Resume.pdf" target="_blank" rel="noopener noreferrer">
                      Download
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </AnimatedSection>

        {/* Contact Form Section */}
        <AnimatedSection
          animationType="fadeInUp"
          className="py-16 md:py-24"
          id="contact-form"
        >
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Send Me a Message
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Whether you're looking to hire, collaborate, or just want to chat about tech, 
                I'd love to hear from you. I'll get back to you within 24 hours.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-1">
                <Card className="p-8">
                  <CardHeader>
                    <CardTitle className="text-xl">Let's Connect</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4 mt-1">
                        <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Location</h4>
                        <p className="text-muted-foreground text-sm">Los Angeles, CA<br />Available Remote & On-site</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4 mt-1">
                        <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Email</h4>
                        <a href="mailto:billie@houseofheidelberg.com" className="text-primary hover:text-primary/80 text-sm">
                          billie@houseofheidelberg.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4 mt-1">
                        <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Response Time</h4>
                        <p className="text-muted-foreground text-sm">Within 24 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="p-8">
                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="name" className="block text-sm font-medium mb-2">
                            Name *
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email *
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="subject" className="block text-sm font-medium mb-2">
                          Subject *
                        </Label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="What's this about?"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="message" className="block text-sm font-medium mb-2">
                          Message *
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          rows={6}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell me about your project, opportunity, or question..."
                        />
                      </div>
                      
                      {submissionError && (
                        <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                          <p className="text-destructive text-sm">{submissionError}</p>
                        </div>
                      )}
                      
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full"
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  ) : (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                      <p className="text-muted-foreground mb-6">
                        Thanks for reaching out. I'll get back to you within 24 hours.
                      </p>
                      <Button onClick={resetForm} variant="outline">
                        Send Another Message
                      </Button>
                    </div>
                  )}
                </Card>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>

      <Footer />
    </div>
  );
}

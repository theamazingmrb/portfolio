"use client";

import { useState } from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import AnimatedSection from "@/components/AnimatedSection";
import Footer from "@/components/Footer";

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
        error instanceof Error
          ? error.message
          : "Failed to send message. Please try again."
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
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
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
        <section className="relative py-20 md:py-32 flex items-center justify-center overflow-hidden px-4 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white">
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
          </div>
          <div className="container mx-auto max-w-4xl relative z-10 text-center">
            <div className="mb-6">
              <span className="inline-block px-6 py-3 bg-green-500/20 text-green-300 rounded-full text-sm font-bold border border-green-400/30 animate-pulse">
                ✓ Available for New Opportunities
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              Let's Work Together
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Looking for a senior full-stack developer who can hit the ground running? 
              I'm available for full-time roles, contract work, and consulting projects.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#contact-form" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Send Message
              </a>
              <a href="#quick-contact" className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:border-white/80 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                Quick Contact
              </a>
            </div>
          </div>
        </section>

        {/* Quick Contact Options */}
        <AnimatedSection
          animationType="fadeInUp"
          className="py-16 md:py-24 bg-white"
          id="quick-contact"
        >
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Get In Touch Quickly
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose the method that works best for you. I typically respond within 24 hours.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {/* Email */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200 hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600 text-sm mb-3">Direct communication</p>
                <a href="mailto:billie@houseofheidelberg.com" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                  billie@houseofheidelberg.com
                </a>
              </div>
              
              {/* LinkedIn */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-2xl border border-indigo-200 hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">LinkedIn</h3>
                <p className="text-gray-600 text-sm mb-3">Professional network</p>
                <a href="https://linkedin.com/in/bheidelberg" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 font-medium text-sm">
                  Connect with me
                </a>
              </div>
              
              {/* GitHub */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">GitHub</h3>
                <p className="text-gray-600 text-sm mb-3">View my code</p>
                <a href="https://github.com/theamazingmrb" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 font-medium text-sm">
                  @theamazingmrb
                </a>
              </div>
              
              {/* Resume */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-2xl border border-green-200 hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Resume</h3>
                <p className="text-gray-600 text-sm mb-3">Download PDF</p>
                <a href="/documents/bheidelberg.pdf" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 font-medium text-sm">
                  View Resume
                </a>
              </div>
            </div>
            
            {/* For Recruiters Section */}
            <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-3xl p-8 md:p-12 border border-blue-100 shadow-lg">
              <div className="text-center mb-8">
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-bold mb-4">
                  💼 For Recruiters & Hiring Managers
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Ready to Make an Impact
                </h3>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  I'm actively seeking new opportunities where I can leverage my 7+ years of experience 
                  to drive technical excellence and lead high-performing development teams.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">24hr</div>
                  <div className="text-gray-600 font-medium">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">Immediate</div>
                  <div className="text-gray-600 font-medium">Availability</div>
                </div>
                <div className="text-3xl font-bold text-purple-600 mb-2 text-center">
                  <div>$50M+</div>
                  <div className="text-gray-600 font-medium text-base">Project Value Delivered</div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a 
                    href="https://linkedin.com/in/bheidelberg" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    View LinkedIn
                  </a>
                  <a 
                    href="/documents/bheidelberg.pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 bg-white rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 transform hover:scale-105"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                    </svg>
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Contact Form Section */}
        <AnimatedSection
          animationType="fadeInUp"
          className="py-16 md:py-24 bg-gray-50"
          id="contact-form"
        >
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Send Me a Message
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Whether you're looking to hire, collaborate, or just want to chat about tech, 
                I'd love to hear from you. I'll get back to you within 24 hours.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-1">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Let's Connect</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                        <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
                        <p className="text-gray-600">Los Angeles, CA<br />Available Remote & On-site</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                        <a href="mailto:billie@houseofheidelberg.com" className="text-green-600 hover:text-green-700">
                          billie@houseofheidelberg.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                        <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Response Time</h4>
                        <p className="text-gray-600">Usually within 24 hours</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                        <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                          <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Availability</h4>
                        <p className="text-gray-600">Open to new opportunities</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-4">Quick Questions?</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Contract work?</span>
                        <span className="text-green-600 font-medium">✓ Yes</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Full-time roles?</span>
                        <span className="text-green-600 font-medium">✓ Yes</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Remote work?</span>
                        <span className="text-green-600 font-medium">✓ Yes</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Consulting?</span>
                        <span className="text-green-600 font-medium">✓ Yes</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="lg:col-span-2">
                {isSubmitted ? (
                  <div className="bg-white p-12 rounded-2xl shadow-lg border border-gray-100 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Message Sent!</h2>
                    <p className="text-lg text-gray-600 mb-8">
                      Thank you for reaching out! I've received your message and will get back to you within 24 hours.
                      In the meantime, feel free to connect with me on LinkedIn or check out my latest projects.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                      <button
                        onClick={resetForm}
                        className="px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                      >
                        Send Another Message
                      </button>
                      <a
                        href="https://linkedin.com/in/bheidelberg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                      >
                        Connect on LinkedIn
                      </a>
                    </div>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100"
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-8">Send a Message</h3>
                    
                    {submissionError && (
                      <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg" role="alert">
                        <div className="flex items-center">
                          <svg className="w-5 h-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                          </svg>
                          <span className="text-red-800 font-medium">{submissionError}</span>
                        </div>
                      </div>
                    )}
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                          placeholder="john@company.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                        placeholder="Let's discuss a new project opportunity"
                        required
                      />
                    </div>
                    
                    <div className="mb-8">
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 resize-none"
                        placeholder="Tell me about your project, timeline, and how I can help..."
                        required
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending Message...
                        </div>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                    
                    <p className="text-center text-sm text-gray-500 mt-4">
                      I'll get back to you within 24 hours. Usually much sooner!
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </AnimatedSection>
        
        {/* Final CTA Section */}
        <AnimatedSection
          animationType="fadeInUp"
          className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white"
        >
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Whether you need a technical leader, full-stack developer, or consultant, 
              I'm here to help turn your vision into reality.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 mb-2">7+ Years</div>
                <div className="text-gray-300">Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400 mb-2">$50M+</div>
                <div className="text-gray-300">Project Value</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400 mb-2">100+</div>
                <div className="text-gray-300">Students Mentored</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#contact-form" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Let's Talk
              </a>
              <a href="/projects" className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:border-white/80 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                View My Work
              </a>
            </div>
          </div>
        </AnimatedSection>
      </main>

      <Footer />
    </div>
  );
}

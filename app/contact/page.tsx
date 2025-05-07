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
        <title>Contact Billie Heidelberg Jr.</title>
        <meta
          name="description"
          content="Get in touch with Billie Heidelberg Jr. - Full Stack Developer, Educator, and Team Leader"
        />
      </Head>
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-64 md:h-96 flex items-center justify-center overflow-hidden px-4 bg-gray-900 text-white">
          <div className="z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Me</h1>
            <p className="text-lg md:text-xl">
              I&apos;d love to hear from you!
            </p>
          </div>
        </section>

        {/* For Recruiters Section */}
        <AnimatedSection
          animationType="fadeInUp"
          className="py-8 md:py-12 bg-blue-50"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <h2 className="text-2xl font-bold text-blue-700 mb-3">For Recruiters & Hiring Managers</h2>
              <p className="text-gray-700 mb-4">
                I'm currently available for new opportunities in full-stack development and technical leadership roles. 
                I specialize in React, TypeScript, Node.js, and cloud technologies, with 7+ years of experience building 
                scalable applications and leading development teams.
              </p>
              <div className="flex flex-wrap gap-4 mt-4">
                <a 
                  href="https://linkedin.com/in/bheidelberg" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  <span>LinkedIn Profile</span>
                </a>
                <a 
                  href="/BillieHeidelberg_Resume.pdf" 
                  target="_blank"
                  className="inline-flex items-center px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition-colors"
                >
                  <span>Download Resume</span>
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Contact Form Section */}
        <AnimatedSection
          animationType="fadeInUp"
          className="py-12 md:py-20 bg-gray-100"
        >
          <div className="container mx-auto px-4">
            {isSubmitted ? (
              <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md text-center">
                <h2 className="text-2xl font-semibold mb-4">Thank You!</h2>
                <p className="mb-4">
                  Your message has been sent successfully. I&apos;ll get back to
                  you soon.
                </p>
                <button
                  onClick={resetForm}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-600 transition duration-300"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md"
              >
                <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
                {submissionError && (
                  <p className="text-red-500 mb-4" role="alert">
                    {submissionError}
                  </p>
                )}
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    aria-required="true"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    aria-required="true"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="subject"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    aria-required="true"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    aria-required="true"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-600 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </AnimatedSection>
      </main>

      <Footer />
    </div>
  );
}

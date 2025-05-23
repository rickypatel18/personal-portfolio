"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { z } from "zod";
import {
  fadeInUp,
  fadeIn,
  slideInLeft,
  slideInRight,
} from "../../utils/animation";

// Define Zod schema for form validation
const ContactFormSchema = z.object({
  name: z.string().min(3, { message: "Name is required" }),
  email: z
    .string()
    .min(5, { message: "Email is required" })
    .email({ message: "Invalid email address" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters long" }),
});

// Infer FormData type from Zod schema
type FormData = z.infer<typeof ContactFormSchema>;

// Type for form errors
interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<FormErrors>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validate form data
    const validationResult = ContactFormSchema.safeParse(formData);

    if (!validationResult.success) {
      const fieldErrors: FormErrors = {};
      validationResult.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof FormErrors] = err.message;
        }
      });
      setErrors(fieldErrors);
      setStatus("idle");
      return;
    }

    // If validation is successful, proceed with submission
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validationResult.data),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for the field being changed
    if (errors[name as keyof FormErrors]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: undefined,
      }));
    }
  };

  return (
    <section className="contact-form-main container max-w-7xl mx-auto py-12 px-0 xl:px-4">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-12"
        initial={{ y: 0 }}
        animate={{ y: [0, 10, 20, 20, 10, 0] }}
        transition={{ delay: 0.5, duration: 5 }}
      >
        {/* Contact Information */}
        <motion.div className="space-y-8 " {...slideInLeft}>
          <motion.div {...fadeInUp}>
            <h2 className="text-subheading mb-4 font-[montserrat] font-bold">
              Stay Connected
            </h2>
            <p className="text-secondary font-[delius] font-bold">
              I&apos;m always open to discussing new projects, creative ideas,
              or opportunities to be part of your visions.
            </p>
          </motion.div>

          <motion.div
            className="space-y-4"
            variants={fadeIn}
            initial="initial"
            animate="animate"
          >
            <motion.div
              className="flex-i gap-4"
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaEnvelope className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <a
                  href="mailto:your.email@example.com"
                  className="text-secondary hover:text-primary"
                >
                  patelricky184@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div
              className="flex-i gap-4"
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaPhone className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <a
                  href="tel:+1234567890"
                  className="text-secondary hover:text-primary"
                >
                  +91 8866467330
                </a>
              </div>
            </motion.div>

            <motion.div
              className="flex-i gap-4"
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaMapMarkerAlt className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-secondary">Undach, Bilimora</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="bg-gray-100 dark:bg-gray-950 p-6 rounded-lg"
          {...slideInRight}
        >
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            variants={fadeIn}
            initial="initial"
            animate="animate"
            noValidate 
          >
            <motion.div variants={fadeInUp}>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-md border ${
                  errors.name
                    ? "border-red-500"
                    : "border-gray-300 dark:border-gray-900"
                } bg-white dark:bg-gray-900 focus:outline-none focus:border-primary`}
              />
              {errors.name && (
                <p id="name-error" className="text-red-500 text-xs mt-1">
                  {errors.name}
                </p>
              )}
            </motion.div>

            <motion.div variants={fadeInUp}>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email "
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-md border ${
                  errors.email
                    ? "border-red-500"
                    : "border-gray-300 dark:border-gray-900"
                } bg-white dark:bg-gray-900 focus:outline-none focus:border-primary`}
              />
              {errors.email && (
                <p id="email-error" className="text-red-500 text-xs mt-1">
                  {errors.email}
                </p>
              )}
            </motion.div>

            <motion.div variants={fadeInUp}>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message "
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className={`w-full px-4 py-2 rounded-md border ${
                  errors.message
                    ? "border-red-500"
                    : "border-gray-300 dark:border-gray-900"
                } bg-white dark:bg-gray-900 focus:outline-none focus:border-primary`}
              />
              {errors.message && (
                <p id="message-error" className="text-red-500 text-xs mt-1">
                  {errors.message}
                </p>
              )}
            </motion.div>

            <motion.button
              type="submit"
              disabled={status === "loading"}
              className="w-full btn btn-primary card-title inline-block"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </motion.button>

            {status === "success" && (
              <motion.p
                className="text-green-500 text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Message sent successfully! (not really)
              </motion.p>
            )}

            {status === "error" && (
              <motion.p
                className="text-red-500 text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Failed to send message. Please try again.
              </motion.p>
            )}
          </motion.form>
        </motion.div>
      </motion.div>
    </section>
  );
}

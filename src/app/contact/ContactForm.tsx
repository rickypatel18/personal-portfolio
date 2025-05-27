"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { IoMail } from "react-icons/io5";
import { z } from "zod";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaUser,
  FaComment,
} from "react-icons/fa";
import {
  staggerContainer,
  staggerItem,
  textVariant,
  zoomIn,
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

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  return (
    <section
      className="contact-form-main relative overflow-hidden container max-w-7xl mx-auto py-20 px-0 xl:px-4"
      ref={ref}
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full overflow-hidden z-0"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
      >
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full bg-secondary/10 `}
            style={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, (Math.random() - 0.5) * 100],
              y: [0, (Math.random() - 0.5) * 100],
              rotate: [0, Math.random() * 360],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 lg:gap-16 relative z-10"
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "show" : {}}
      >
        {/* Contact Information - Now with floating cards */}
        <motion.div className="space-y-10" variants={staggerContainer}>
          <motion.div variants={textVariant(0.1)}>
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary font-[montserrat]"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, type: "spring" }}
            >
              Let&apos;s <span className="text-primary">Connect</span>
            </motion.h2>
            <motion.p
              className="text-gray-600 text-lg dark:text-gray-300 font-[delius]"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Have a project in mind or want to discuss opportunities?
              <motion.span
                className="block mt-2 text-sm"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
              >
                I&apos;d love to hear from you!
              </motion.span>
            </motion.p>
          </motion.div>

          <motion.div
            className="space-y-4 lg:space-y-6"
            variants={staggerContainer}
          >
            <motion.div
              className="relative bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden"
              variants={staggerItem}
              whileHover={{
                y: -5,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-primary/10 blur-lg"
                animate={{
                  x: [0, 10, 0],
                  y: [0, 15, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="flex items-center gap-2 lg:gap-5 relative z-10">
                <motion.div
                  className="p-4 rounded-xl bg-red-500/60 text-white shadow-lg"
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  transition={{ type: "spring" }}
                >
                  <FaEnvelope className="h-4 w-4 lg:h-6 lg:w-6" />
                </motion.div>
                <div>
                  <h3 className="font-bold text-lg font-[montserrat]">Email</h3>
                  <a
                    href="mailto:patelricky184@gmail.com"
                    className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                  >
                    patelricky184@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden"
              variants={staggerItem}
              whileHover={{
                y: -5,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
            >
              <motion.div
                className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-primary/10 blur-lg"
                animate={{
                  x: [0, -10, 0],
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="flex items-center gap-2 lg:gap-5 relative z-10">
                <motion.div
                  className="p-4 rounded-xl bg-blue-500/60 text-white shadow-lg"
                  whileHover={{ rotate: -15, scale: 1.1 }}
                  transition={{ type: "spring" }}
                >
                  <FaPhone className="h-4 w-4 lg:h-6 lg:w-6" />
                </motion.div>
                <div>
                  <h3 className="font-bold text-lg font-[montserrat]">Phone</h3>
                  <a
                    href="tel:+918866467330"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors"
                  >
                    +91 8866467330
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden"
              variants={staggerItem}
              whileHover={{
                y: -5,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
            >
              <motion.div
                className="absolute -top-5 -right-5 w-24 h-24 rounded-full bg-green-500/10 blur-lg"
                animate={{
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <div className="flex items-center gap-2 lg:gap-5 relative z-10">
                <motion.div
                  className="p-4 rounded-xl bg-green-500/60 text-white shadow-lg"
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  transition={{ type: "spring" }}
                >
                  <FaMapMarkerAlt className="h-4 w-4 lg:h-6 lg:w-6" />
                </motion.div>
                <div>
                  <h3 className="font-bold text-lg font-[montserrat]">
                    Location
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Undach, Bilimora
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Contact Form - Now with floating labels and more animations */}
        <motion.div className="relative" variants={zoomIn(0.4)}>
          <motion.div
            className="absolute bg-gradient-to-r from-primary to-secondary rounded-3xl opacity-20 blur-xl"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.2, 0.25, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="bg-white dark:bg-gray-900 p-8 md:p-10 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-800 relative overflow-hidden"
            whileHover={{
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/10 blur-2xl"
              animate={{
                x: [0, 20, 0],
                y: [0, 30, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.h3
              className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary font-[montserrat]"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              Send a Message
            </motion.h3>

            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6 relative z-10"
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? "show" : {}}
              noValidate
            >
              <motion.div className="relative" variants={staggerItem}>
                <motion.div
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  whileHover={{ scale: 1.2 }}
                >
                  <FaUser />
                </motion.div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full pl-12 pr-4 py-4 rounded-xl border ${errors.name
                      ? "border-red-500"
                      : "border-gray-200 dark:border-gray-700"
                    } bg-white dark:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all peer`}
                />

                <AnimatePresence>
                  {errors.name && (
                    <motion.p
                      className="text-red-500 text-xs mt-1 pl-2"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      {errors.name}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div className="relative" variants={staggerItem}>
                <motion.div
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  whileHover={{ scale: 1.2 }}
                >
                  <IoMail />
                </motion.div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full pl-12 pr-4 py-4 rounded-xl border ${errors.email
                      ? "border-red-500"
                      : "border-gray-200 dark:border-gray-700"
                    } bg-white dark:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all peer`}
                />
                <AnimatePresence>
                  {errors.email && (
                    <motion.p
                      className="text-red-500 text-xs mt-1 pl-2"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div className="relative" variants={staggerItem}>
                <motion.div
                  className="absolute left-4 top-6 text-gray-400"
                  whileHover={{ scale: 1.2 }}
                >
                  <FaComment />
                </motion.div>
                <textarea
                  id="message"
                  name="message"
                  placeholder="enter your message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className={`w-full pl-12 pr-4 py-4 rounded-xl border ${errors.message
                      ? "border-red-500"
                      : "border-gray-200 dark:border-gray-700"
                    } bg-white dark:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all`}
                />
                <AnimatePresence>
                  {errors.message && (
                    <motion.p
                      className="text-red-500 text-xs mt-1 pl-2"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      {errors.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div variants={staggerItem}>
                <motion.button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-4 px-6 rounded-xl text-white font-bold 
                  shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group btn-gradgreen"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {status === "loading" ? (
                      <>
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        >
                          <FaPaperPlane />
                        </motion.span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        Send Message
                      </>
                    )}
                  </span>
                </motion.button>
              </motion.div>

              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    className="p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg border border-green-200 dark:border-green-800/50"
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  >
                    <div className="flex items-center gap-2">
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          rotate: [0, 10, -10, 0],
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        <FaPaperPlane />
                      </motion.div>
                      Message sent successfully! (not really)
                    </div>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    className="p-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg border border-red-200 dark:border-red-800/50"
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  >
                    <div className="flex items-center gap-2">
                      <motion.div
                        animate={{
                          x: [0, -5, 5, -5, 0],
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        <FaPaperPlane />
                      </motion.div>
                      Failed to send message. Please try again.
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.form>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

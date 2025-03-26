"use client"

import type React from "react"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { useLanguage } from "../context/LanguageContext"
import { Container } from "./Container"
import { Button } from "./Button"
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline"

const Contact = () => {
  const { t, language } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  // Apply the appropriate font class based on language
  const fontClass = language === "en" ? "font-en" : "font-th"
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus("sending")

    try {
      // Create email content
      const emailContent = `
        Name: ${formData.name}
        Email: ${formData.email}
        Message: ${formData.message}
      `

      // Send email using mailto link
      const mailtoLink = `mailto:asosid15@gmail.com?subject=Contact from Portfolio Website&body=${encodeURIComponent(emailContent)}`
      window.open(mailtoLink, "_blank")

      // Simulate form submission success
      setTimeout(() => {
        setFormStatus("success")
        // Reset form after success
        setFormData({
          name: "",
          email: "",
          message: "",
        })

        // Reset status after 3 seconds
        setTimeout(() => {
          setFormStatus("idle")
        }, 3000)
      }, 1000)
    } catch (error) {
      console.error("Error sending email:", error)
      setFormStatus("error")

      // Reset status after 3 seconds
      setTimeout(() => {
        setFormStatus("idle")
      }, 3000)
    }
  }

  const contactInfo = [
    {
      icon: EnvelopeIcon,
      title: t("email"),
      content: "asosid15@gmail.com",
      link: "mailto:asosid15@gmail.com",
    },
    {
      icon: PhoneIcon,
      title: t("phone"),
      content: "+66 94 673 8282",
      link: "tel:+66946738282",
    },
    {
      icon: MapPinIcon,
      title: t("location"),
      content: "Bangkok, Thailand",
      link: "https://maps.google.com/?q=Bangkok,Thailand",
    },
  ]

  const inputClasses =
    "w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-200 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 transition-colors"

  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-800">
      <Container>
        <div className="py-10" ref={ref}>
          <motion.h2
            className={`text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 text-3xl md:text-4xl font-bold text-center ${fontClass}`}
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.7 }}
          >
            {t("contact_title")}
          </motion.h2>
          <motion.h3
            className={`text-gray-700 dark:text-gray-300 text-xl md:text-2xl text-center mt-6 font-medium ${fontClass}`}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {t("get_in_touch")}
          </motion.h3>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-gray-200 dark:bg-gray-200 p-8 rounded-2xl">
                <h4 className={`text-xl font-semibold text-gray-500 dark:text-gray-500 mb-6 ${fontClass}`}>
                  {t("send_message")}
                </h4>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className={`block text-sm font-medium text-gray-500 dark:text-gray-300 mb-1 ${fontClass}`}
                    >
                      {t("name")}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`${inputClasses} ${fontClass}`}
                      placeholder={t("your_name")}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className={`block text-sm font-medium text-gray-500 dark:text-gray-300 mb-1 ${fontClass}`}
                    >
                      {t("email")}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`${inputClasses} ${fontClass}`}
                      placeholder={t("your_email")}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className={`block text-sm font-medium text-gray-500 dark:text-gray-300 mb-1 ${fontClass}`}
                    >
                      {t("message")}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className={`${inputClasses} resize-none ${fontClass}`}
                      placeholder={t("your_message")}
                    ></textarea>
                  </div>

                  <div>
                    <Button
                      type="submit"
                      className={`w-full justify-center ${fontClass}`}
                      disabled={formStatus === "sending"}
                    >
                      {formStatus === "sending" ? (
                        <div className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          {t("sending")}
                        </div>
                      ) : formStatus === "success" ? (
                        <div className="flex items-center">
                          <svg
                            className="h-5 w-5 mr-2 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {t("message_sent")}
                        </div>
                      ) : (
                        t("send")
                      )}
                    </Button>
                  </div>

                  {formStatus === "success" && (
                    <motion.div
                      className="text-center text-green-600 dark:text-green-400 mt-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {t("success_message")}
                    </motion.div>
                  )}

                  {formStatus === "error" && (
                    <motion.div
                      className="text-center text-red-600 dark:text-red-400 mt-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {t("error_message")}
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col justify-between"
            >
              <div className="bg-gray-200 dark:bg-gray-900 p-8 rounded-2xl mb-8">
                <h4 className={`text-xl font-semibold text-gray-500 dark:text-gray-200 mb-6 ${fontClass}`}>
                  {t("contact_info")}
                </h4>

                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 text-gray-500 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-xl">
                        <item.icon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <h5 className={`font-medium text-gray-500 dark:text-gray-200 ${fontClass}`}>{item.title}</h5>
                        <p className={`mt-1 ${fontClass}`}>{item.content}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Map or Additional Content */}
              {/* <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl shadow-md h-64 flex items-center justify-center">
                <p className={`text-gray-500 dark:text-gray-400 text-center ${fontClass}`}>{t("map_placeholder")}</p>
              </div> */}
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Contact


"use client"

import type React from "react"
import { createContext, useState, useContext, type ReactNode, useEffect } from "react"

type Language = "en" | "th"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  fontFamily: string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// English translations
const enTranslations = {
  // Hero section
  hi_im: "Hi, I'm",
  developer: "Developer",
  intro_text:
    "I graduated from Suranaree University of Technology with a degree in Computer Engineering. I'm eager to expand my knowledge and skills and I'm currently working on improving my English proficiency.",
  resume: "Resume",

  // Navigation
  skills: "Skills",
  qualification: "Qualification",
  project: "Project",
  contact: "Contact",

  // Skills section
  what_skills: "WHAT I SKILLS?",
  frontend_dev: "Frontend Development",
  web_applications: "Web Applications",
  web_applications_desc:
    "I'm a front-end developer with experience in building responsive and optimized sites using React, Next and Vue.",
  mobile_applications: "Mobile applications",
  mobile_applications_desc: "Developing mobile applications using Flutter.",

  // Qualification section
  qualification_title: "QUALIFICATION",
  personal_journey: "My personal journey",
  educations: "Educations",
  experience: "Experience",

  // Education
  sut: "Suranaree University of Technology",
  sut_desc: "B. Eng in Computer Engineering.",
  high_school: "Samrongthap Wittayakom School",
  high_school_desc: "High School Diploma.",

  // Experience
  maximum_soft: "Maximum Soft Co., Ltd.",
  maximum_soft_desc: "Frontend Developer",
  yim: "Y.I.M Coporations",
  yim_desc: "Frontend Developer and Mobile Developer",
  msc: "MSC Sitipol Co., Ltd.",
  msc_desc: "Programmer",
  sirisoft: "Sirisoft Public Co., Ltd.",
  sirisoft_desc: "Frontend Developer",
  // freelance: "Freelance",
  // freelance_desc: "Frontend Developer",

   // Project section
   project_title: "PROJECTS",
   recent_work: "My recent work",
   view_project: "View Project",
 
   // Contact section
   contact_title: "CONTACT ME",
   get_in_touch: "Get in touch",
   send_message: "Send me a message",
   contact_info: "Contact Information",
   name: "Name",
   email: "Email",
   phone: "Phone",
   location: "Location",
   message: "Message",
   your_name: "Your name",
   your_email: "Your email",
   your_message: "Write your message here...",
   send: "Send Message",
   sending: "Sending...",
   message_sent: "Message Sent",
   success_message: "Your message has been sent successfully!",
   error_message: "There was an error sending your message. Please try again.",
   map_placeholder: "Map will be displayed here",
 
   // Footer
   footer_description:
     "A passionate frontend developer creating responsive and user-friendly web applications with modern technologies.",
   quick_links: "Quick Links",
   social_media: "Social Media",
   all_rights_reserved: "All rights reserved.",
   privacy_policy: "Privacy Policy",
   terms_of_service: "Terms of Service",
}

// Thai translations
const thTranslations = {
  // Hero section
  hi_im: "สวัสดี, ฉันคือ",
  developer: "นักพัฒนา",
  intro_text:
    "ฉันจบการศึกษาจากมหาวิทยาลัยเทคโนโลยีสุรนารี สาขาวิศวกรรมคอมพิวเตอร์ ฉันกระตือรือร้นที่จะเพิ่มพูนความรู้และทักษะของฉัน และปัจจุบันฉันกำลังพัฒนาทักษะภาษาอังกฤษของฉัน",
  resume: "เรซูเม่",

  // Navigation
  skills: "ทักษะ",
  qualification: "คุณสมบัติ",
  project: "โปรเจค",
  contact: "ติดต่อ",

  // Skills section
  what_skills: "ทักษะของฉัน?",
  frontend_dev: "การพัฒนาฟรอนท์เอนด์",
  web_applications: "เว็บแอปพลิเคชัน",
  web_applications_desc: "ฉันเป็นนักพัฒนาฟรอนท์เอนด์ที่มีประสบการณ์ในการสร้างเว็บไซต์ที่ตอบสนองและเหมาะสมโดยใช้ React, Next และ Vue",
  mobile_applications: "แอปพลิเคชันมือถือ",
  mobile_applications_desc: "พัฒนาแอปพลิเคชันมือถือโดยใช้ Flutter",

  // Qualification section
  qualification_title: "คุณสมบัติ",
  personal_journey: "เส้นทางส่วนตัวของฉัน",
  educations: "การศึกษา",
  experience: "ประสบการณ์",

  // Education
  sut: "มหาวิทยาลัยเทคโนโลยีสุรนารี",
  sut_desc: "วิศวกรรมศาสตรบัณฑิต สาขาวิศวกรรมคอมพิวเตอร์",
  high_school: "โรงเรียนสำโรงทาบวิทยาคม",
  high_school_desc: "มัธยมศึกษาตอนปลาย",

  // Experience
  maximum_soft: "บริษัท แมกซิมัม ซอฟต์ จำกัด",
  maximum_soft_desc: "นักพัฒนาฟรอนท์เอนด์",
  yim: "บริษัท วาย.ไอ.เอ็ม คอร์ปอเรชั่น",
  yim_desc: "นักพัฒนาฟรอนท์เอนด์และนักพัฒนาแอปพลิเคชันมือถือ",
  msc: "บริษัท เอ็มเอสซี สิทธิผล จำกัด",
  msc_desc: "โปรแกรมเมอร์",
  sirisoft: "บริษัท สิริซอฟต์ จำกัด (มหาชน)",
  sirisoft_desc: "นักพัฒนาฟรอนท์เอนด์",
  // freelance: "ฟรีแลนซ์",
  // freelance_desc: "นักพัฒนาฟรอนท์เอนด์",


  // Project section
  project_title: "โปรเจค",
  recent_work: "ผลงานล่าสุดของฉัน",
  view_project: "ดูโปรเจค",

  // Contact section
  contact_title: "ติดต่อฉัน",
  get_in_touch: "ติดต่อได้ที่",
  send_message: "ส่งข้อความถึงฉัน",
  contact_info: "ข้อมูลการติดต่อ",
  name: "ชื่อ",
  email: "อีเมล",
  phone: "โทรศัพท์",
  location: "ที่อยู่",
  message: "ข้อความ",
  your_name: "ชื่อของคุณ",
  your_email: "อีเมลของคุณ",
  your_message: "เขียนข้อความของคุณที่นี่...",
  send: "ส่งข้อความ",
  sending: "กำลังส่ง...",
  message_sent: "ส่งข้อความแล้ว",
  success_message: "ข้อความของคุณถูกส่งเรียบร้อยแล้ว!",
  error_message: "เกิดข้อผิดพลาดในการส่งข้อความของคุณ โปรดลองอีกครั้ง",
  map_placeholder: "แผนที่จะแสดงที่นี่",

  // Footer
  footer_description: "นักพัฒนาฟรอนท์เอนด์ที่มีความกระตือรือร้นในการสร้างเว็บแอปพลิเคชันที่ตอบสนองและเป็นมิตรกับผู้ใช้ด้วยเทคโนโลยีที่ทันสมัย",
  quick_links: "ลิงก์ด่วน",
  social_media: "โซเชียลมีเดีย",
  all_rights_reserved: "สงวนลิขสิทธิ์",
  privacy_policy: "นโยบายความเป็นส่วนตัว",
  terms_of_service: "เงื่อนไขการให้บริการ",
}

const translations = {
  en: enTranslations,
  th: thTranslations,
}

// Font families for each language
const fontFamilies = {
  en: "'Athiti', sans-serif",
  th: "'IBM Plex Sans Thai', sans-serif",
}

interface LanguageProviderProps {
  children: ReactNode
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("en")
  const [fontFamily, setFontFamily] = useState<string>(fontFamilies.en)

  useEffect(() => {
    // Update font family when language changes
    setFontFamily(fontFamilies[language])

    // Apply font family to document root
    document.documentElement.style.setProperty("--font-family", fontFamilies[language])

    // Add language class to body for CSS targeting
    document.body.classList.remove("lang-en", "lang-th")
    document.body.classList.add(`lang-${language}`)
  }, [language])

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, fontFamily }}>{children}</LanguageContext.Provider>
  )
}

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}


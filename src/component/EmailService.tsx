// This is a utility component for handling email functionality
// You can expand this in the future to use a backend service

export const sendEmail = async (name: string, email: string, message: string) => {
    try {
      // For now, we're using mailto link
      // In a production environment, you would typically use a backend service
      // like EmailJS, SendGrid, or your own API endpoint
  
      const emailContent = `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `
  
      const mailtoLink = `mailto:asosid15@gmail.com?subject=Contact from Portfolio Website&body=${encodeURIComponent(emailContent)}`
      window.open(mailtoLink, "_blank")
  
      return { success: true }
    } catch (error) {
      console.error("Error sending email:", error)
      return { success: false, error }
    }
  }
  
  
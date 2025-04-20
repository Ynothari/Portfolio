
import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/Button";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };
  
  const contactLinks = [
    {
      icon: <FaEnvelope className="text-xl" />,
      text: "awmhari007@gmail.com",
      href: "mailto:awmhari007@gmail.com"
    },
    {
      icon: <FaPhone className="text-xl" />,
      text: "+91 6381120364",
      href: "tel:+916381120364"
    },
    {
      icon: <FaLinkedin className="text-xl" />,
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/hari-krishnan-r-16686729b"
    },
    {
      icon: <FaGithub className="text-xl" />,
      text: "GitHub",
      href: "https://github.com/Ynothari"
    }
  ];
  
  return (
    <section id="contact" className="py-20 bg-dark-secondary/30">
      <div className="section-container">
        <motion.h2 
          className="section-title text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Contact
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-500 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 glass-card border border-neon-purple/30 focus:border-neon-purple focus:outline-none bg-black/20 text-white"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-500 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 glass-card border border-neon-purple/30 focus:border-neon-purple focus:outline-none bg-black/20 text-white"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-500 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 glass-card border border-neon-purple/30 focus:border-neon-purple focus:outline-none bg-black/20 text-white"
                />
              </div>
              
              <Button type="submit" fullWidth isLoading={isSubmitting} disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : submitSuccess ? "Message Sent!" : "Send Message"}
              </Button>
              
              {submitSuccess && (
                <p className="text-green-400 text-sm mt-2">
                  Thank you for your message! I'll get back to you soon.
                </p>
              )}
            </form>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                {contactLinks.map((contact, index) => (
                  <motion.a
                    key={index}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-gray-300 hover:text-neon-purple transition-colors group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="h-10 w-10 rounded-full bg-neon-purple/20 flex items-center justify-center group-hover:bg-neon-purple/30 transition-colors">
                      {contact.icon}
                    </div>
                    <span>{contact.text}</span>
                  </motion.a>
                ))}
              </div>
            </div>
            
            <div className="mt-12">
              <p className="text-gray-300">
                Feel free to reach out for collaboration opportunities, project inquiries, or just to connect!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

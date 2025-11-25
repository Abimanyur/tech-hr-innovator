import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_sf4cphl',
        'template_po69oke',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'kJ1jN7LtlP1AvjLWd'
      );
      
      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Failed to send email:", error);
      toast.error("Failed to send message. Please try again or contact me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "abimanyuramesh02@gmail.com",
      link: "mailto:abimanyuramesh02@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 90807989XX",
      link: "tel:+919363206989",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "Abimanyu Ramesh",
      link: "https://www.linkedin.com/in/abimanyu-ramesh/",
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "abimanyur",
      link: "https://github.com/Abimanyur",
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Get In <span className="text-accent">Touch</span>
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="glass-card rounded-3xl p-8 space-y-6">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith("http") ? "_blank" : undefined}
                  rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="font-medium">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card rounded-3xl p-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-secondary border-border"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-secondary border-border"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="bg-secondary border-border resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

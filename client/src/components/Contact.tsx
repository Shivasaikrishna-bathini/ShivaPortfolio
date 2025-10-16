import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "shbathin@my.bridgeport.edu",
    href: "mailto:shbathin@my.bridgeport.edu"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "New York, US",
    href: null
  },
  // TODO: Update your LinkedIn link and display name below
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Shiva Sai Krishna",
    href: "https://www.linkedin.com/in/shiva-sai-bathini/"
  },
  // TODO: Update your GitHub link and username below
  {
    icon: Github,
    label: "GitHub",
    value: "Shivasaikrishna-bathini",
    href: "https://github.com/Shivasaikrishna-bathini"
  }
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 md:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Let's Connect</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing AI/ML projects, research collaborations, or new opportunities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon;
            const content = (
              <Card
                className="p-6 text-center hover-elevate group cursor-pointer"
                data-testid={`card-contact-${index}`}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                  className="inline-block mb-4 p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors"
                >
                  <Icon className="h-6 w-6 text-primary" />
                </motion.div>
                <h3 className="font-semibold mb-2">{contact.label}</h3>
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {contact.value}
                </p>
              </Card>
            );

            return (
              <motion.div
                key={contact.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                {contact.href ? (
                  <a
                    href={contact.href}
                    target={contact.href.startsWith("http") ? "_blank" : undefined}
                    rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {content}
                  </a>
                ) : (
                  content
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

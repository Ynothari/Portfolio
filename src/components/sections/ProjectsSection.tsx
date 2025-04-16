
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/Button";
import { FaGithub } from "react-icons/fa";

type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  image: string;
  category: string[];
};

const projects: Project[] = [
  {
    id: "voice-assistant",
    title: "Voice Assistant",
    description: "A voice-activated assistant that can perform various tasks through natural language processing.",
    technologies: ["Python", "Speech Recognition", "NLP", "APIs"],
    github: "https://github.com/Ynothari/Voice-assistant",
    image: "https://images.unsplash.com/photo-1583267746897-2cf415887172?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: ["AI"]
  },
  {
    id: "banking-service",
    title: "Online Banking Service",
    description: "A secure banking system with transaction management and user authentication features.",
    technologies: ["Python", "Flask", "SQL", "Authentication"],
    github: "https://github.com/Ynothari/atm",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: ["Web"]
  },
  {
    id: "fashion-recommendation",
    title: "AI Fashion Recommendation System",
    description: "An intelligent system that recommends fashion items based on user preferences and styles.",
    technologies: ["Python", "TensorFlow", "Computer Vision", "Machine Learning"],
    github: "https://github.com/Ynothari/AI-fashion",
    image: "https://images.unsplash.com/photo-1529720317453-c8da503f2051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: ["AI"]
  }
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div 
      className="project-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="overflow-hidden h-48">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
      </div>
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        
        <div className="flex flex-wrap gap-2 mb-3">
          {project.technologies.map((tech) => (
            <span key={tech} className="badge-primary">
              {tech}
            </span>
          ))}
        </div>
        
        <p className="text-gray-400 text-sm">{project.description}</p>
        
        <div className="pt-4">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex items-center gap-2"
            onClick={() => window.open(project.github, '_blank')}
          >
            <FaGithub /> <span>Get Code</span>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const [filter, setFilter] = useState<string>("all");
  const categories = ["all", "AI", "DevOps", "Web"];
  
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category.includes(filter));
    
  return (
    <section id="projects" className="py-20 bg-dark-secondary/30">
      <div className="section-container">
        <motion.h2 
          className="section-title text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>
        
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 p-1 glass-card">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  filter === category
                    ? "bg-neon-purple text-white"
                    : "bg-transparent text-gray-400 hover:text-white"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div 
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsSection;

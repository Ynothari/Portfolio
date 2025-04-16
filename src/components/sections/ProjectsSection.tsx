import { motion } from "framer-motion";
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
      className="project-card transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-neon-purple/20"
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
        <h3 className="text-xl font-semibold text-white drop-shadow-sm">{project.title}</h3>
        
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
  return (
    <section id="projects" className="py-32 bg-dark-secondary/30">
      <div className="section-container">
        <motion.h2 
          className="section-title text-center drop-shadow-lg mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;

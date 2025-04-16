
import { motion } from "framer-motion";

type Skill = {
  name: string;
  category: string;
  level: number; // 1-5
};

const skills: Skill[] = [
  { name: "Python", category: "Programming", level: 5 },
  { name: "Streamlit", category: "Framework", level: 4 },
  { name: "MongoDB", category: "Database", level: 4 },
  { name: "Docker", category: "DevOps", level: 4 },
  { name: "Jenkins", category: "DevOps", level: 3 },
  { name: "Kubernetes", category: "DevOps", level: 3 },
  { name: "AWS", category: "Cloud", level: 3 },
  { name: "Git", category: "Tool", level: 4 },
  { name: "Linux", category: "Operating System", level: 4 },
];

const SkillPill = ({ skill, index }: { skill: Skill; index: number }) => {
  // Determine color based on category
  let colorClass = "";
  switch(skill.category) {
    case "Programming":
      colorClass = "badge-primary";
      break;
    case "Framework":
      colorClass = "badge-secondary";
      break;
    case "DevOps":
      colorClass = "badge-success";
      break;
    case "Cloud":
      colorClass = "bg-blue-500/20 text-blue-300 border border-blue-500/30";
      break;
    default:
      colorClass = "bg-purple-500/20 text-purple-300 border border-purple-500/30";
  }

  // Size based on level
  const sizeClass = `text-${skill.level * 2 + 10}px py-${skill.level < 3 ? 1 : 2} px-${skill.level + 2}`;
  
  return (
    <motion.span
      className={`inline-flex items-center rounded-full ${colorClass} ${sizeClass} font-medium m-1`}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      whileHover={{ scale: 1.1 }}
    >
      {skill.name}
    </motion.span>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-dark-secondary/30">
      <div className="section-container">
        <motion.h2 
          className="section-title text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>
        
        <motion.div
          className="glass-card p-12 mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-8">
            <p className="text-gray-300 mb-8">
              I've cultivated these skills throughout my academic journey and personal projects:
            </p>
            
            <div className="flex flex-wrap justify-center gap-2">
              {skills.map((skill, index) => (
                <SkillPill key={skill.name} skill={skill} index={index} />
              ))}
            </div>
            
            <div className="pt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div>
                <h3 className="text-lg font-medium text-neon-purple mb-4">Programming</h3>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neon-purple"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
                    Object-Oriented Programming
                  </li>
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neon-purple"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
                    Data Structures & Algorithms
                  </li>
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neon-purple"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
                    API Development
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-neon-blue mb-4">DevOps</h3>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neon-blue"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
                    CI/CD Pipelines
                  </li>
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neon-blue"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
                    Container Orchestration
                  </li>
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neon-blue"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
                    Infrastructure as Code
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-neon-green mb-4">Cloud</h3>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neon-green"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
                    AWS Services (EC2, S3)
                  </li>
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neon-green"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
                    Serverless Architecture
                  </li>
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neon-green"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
                    Cloud Security
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;

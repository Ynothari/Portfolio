
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="section-container">
        <motion.h2 
          className="section-title text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-purple to-neon-blue opacity-70 blur-md animate-pulse-glow"></div>
              <div className="absolute inset-2 rounded-full bg-dark"></div>
              <div className="absolute inset-4 rounded-full overflow-hidden border-2 border-neon-purple/30">
                {/* Placeholder image - replace with your actual image */}
                <img 
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Hari Krishnan R"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
          
          {/* Bio */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300">
              Hello! I'm <span className="text-neon-purple font-semibold">Hari Krishnan R</span>, a passionate B.Tech AI & DS student (2024–2027) with a deep interest in artificial intelligence, DevOps practices, and cloud technologies.
            </p>
            
            <p className="text-gray-400">
              My journey began with a curiosity about how technology can solve real-world problems. This led me to explore various domains, from building voice assistants to implementing DevOps pipelines and cloud solutions.
            </p>
            
            <h3 className="text-xl font-semibold text-white">My Journey</h3>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-none">
                  <div className="h-12 w-12 rounded-full bg-neon-purple/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neon-purple">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                      <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-white">Early Education</h4>
                  <p className="text-sm text-gray-400">Where my interest in technology began, laying the foundation for my future endeavors.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-none">
                  <div className="h-12 w-12 rounded-full bg-neon-blue/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neon-blue">
                      <path d="M12 2v8a2 2 0 0 0 2 2h8"></path>
                      <rect x="2" y="14" width="20" height="8" rx="2"></rect>
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-white">AI Exploration</h4>
                  <p className="text-sm text-gray-400">Discovering the fascinating world of artificial intelligence and its applications.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-none">
                  <div className="h-12 w-12 rounded-full bg-neon-green/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neon-green">
                      <path d="M12 3v19"></path>
                      <path d="M5 8h14"></path>
                      <path d="M5 12h14"></path>
                      <path d="M5 16h14"></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-white">Project Development</h4>
                  <p className="text-sm text-gray-400">Creating meaningful projects that solve real problems and boost my skills.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-none">
                  <div className="h-12 w-12 rounded-full bg-purple-600/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400">
                      <path d="M7 16a4 4 0 0 1-4-4 7 7 0 0 1 7-7 6 6 0 0 1 6 6c0 3 2 4 2 4"></path>
                      <line x1="10" y1="20" x2="10" y2="4"></line>
                      <line x1="14" y1="20" x2="14" y2="10"></line>
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-white">DevOps Journey</h4>
                  <p className="text-sm text-gray-400">Learning about automation, CI/CD pipelines, and infrastructure as code.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

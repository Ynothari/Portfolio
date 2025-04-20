
import { motion } from "framer-motion";

type Achievement = {
  title: string;
  organization: string;
  date: string;
  description: string;
  award: string;
  icon: React.ReactNode;
};

const achievements: Achievement[] = [
  {
    title: "Hackathon Winner",
    organization: "Dr. M.G.R University",
    date: "2023",
    description: "First place in the university-wide hackathon for developing an innovative AI solution.",
    award: "₹5000",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
        <path d="M4 22h16"></path>
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
        <path d="M12 2v8"></path>
        <path d="m18 9-6 3-6-3"></path>
      </svg>
    )
  },
  {
    title: "Tech Fest 3rd Place",
    organization: "Saveetha Engineering College",
    date: "2022",
    description: "Third place in the annual tech fest for a DevOps automation project.",
    award: "₹500",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-400">
        <path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"></path>
        <path d="M11 12 5.12 2.2"></path>
        <path d="m13 12 5.88-9.8"></path>
        <path d="M12 22a10 10 0 0 0 5-7.5c0-2.76-4.48-5-5-5s-5 2.24-5 5a10 10 0 0 0 5 7.5Z"></path>
      </svg>
    )
  }
];

const AchievementCard = ({ achievement, index }: { achievement: Achievement; index: number }) => {
  return (
    <motion.div 
      className="flex gap-6 relative"
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.2 }}
    >
      {/* Timeline connector */}
      {index !== achievements.length - 1 && (
        <div className="absolute top-16 bottom-0 left-10 w-0.5 bg-gradient-to-b from-neon-purple to-transparent"></div>
      )}
      
      {/* Achievement icon */}
      <div className="flex-none">
        <div className="h-20 w-20 rounded-full glass-card neon-border flex items-center justify-center">
          {achievement.icon}
        </div>
      </div>
      
      {/* Achievement content */}
      <div className="glass-card p-6 flex-1">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-black">{achievement.title}</h3>
          <div className="bg-yellow-500/20 px-3 py-1 rounded-full text-yellow-300 text-sm font-semibold">
            {achievement.award}
          </div>
        </div>
        
        <div className="text-sm text-gray-500 mb-3">
          {achievement.organization} • {achievement.date}
        </div>
        
        <p className="text-gray-500">
          {achievement.description}
        </p>
      </div>
    </motion.div>
  );
};

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-20">
      <div className="section-container">
        <motion.h2 
          className="section-title text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Achievements
        </motion.h2>
        
        <div className="max-w-3xl mx-auto mt-12 space-y-16">
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} achievement={achievement} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;

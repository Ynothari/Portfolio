
import { motion } from "framer-motion";

type Course = {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
};

const courses: Course[] = [
  {
    id: "python",
    title: "Python Programming",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neon-blue">
        <path d="M14.25 6.5v-2a2.25 2.25 0 0 0-2.25-2.25h-1.5V.75h-1.5v1.5h-1.5A2.25 2.25 0 0 0 5.25 4.5v2.25h5.25v1.5H3A2.25 2.25 0 0 0 .75 10.5v2.25h1.5V10.5a.75.75 0 0 1 .75-.75h7.5v3.75a2.25 2.25 0 0 0 2.25 2.25h6a2.25 2.25 0 0 0 2.25-2.25v-2.25h-1.5v2.25a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1-.75-.75V9.75h7.5a.75.75 0 0 1 .75.75v2.25h1.5V10.5a2.25 2.25 0 0 0-2.25-2.25h-6.75v-1.5h5.25Z"></path>
      </svg>
    ),
    description: "Advanced Python programming concepts including data structures, algorithms, and application development."
  },
  {
    id: "docker",
    title: "Docker Essentials",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neon-blue">
        <path d="M8.25 6h2.25v2.25H8.25zM12 8.25h2.25V6H12zM15.75 8.25H18V6h-2.25zM12 4.5h2.25V2.25H12zM8.25 2.25V4.5H6v10.5a3 3 0 0 0 3 3h7.5a3 3 0 0 0 3-3V6H8.25v-3.75z"></path>
      </svg>
    ),
    description: "Containerization fundamentals, Docker ecosystem, image creation, and deployment practices."
  },
  {
    id: "kubernetes",
    title: "Kubernetes for Developers",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neon-green">
        <circle cx="12" cy="12" r="3"></circle>
        <path d="M3 9h3v6H3z"></path>
        <path d="M18 9h3v6h-3z"></path>
        <path d="M3 9a9 9 0 0 1 18 0"></path>
        <path d="M3 15a9 9 0 0 0 18 0"></path>
      </svg>
    ),
    description: "Container orchestration, Kubernetes architecture, deployment strategies, and scaling applications."
  },
  {
    id: "aws",
    title: "AWS Cloud Fundamentals",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neon-purple">
        <path d="M2 12h2M20 12h2M6.425 6.425L5 5M19 5l-1.425 1.425M6.425 17.575L5 19M19 19l-1.425-1.425M12 2v2M12 20v2"></path>
        <circle cx="12" cy="12" r="4"></circle>
      </svg>
    ),
    description: "Cloud computing principles, AWS services (EC2, S3, Lambda), infrastructure as code, and cloud security."
  }
];

const CourseCard = ({ course, index }: { course: Course; index: number }) => {
  return (
    <motion.div 
      className="glass-card p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(139, 92, 246, 0.3)" }}
    >
      <div className="h-12 w-12 bg-neon-purple/20 rounded-lg flex items-center justify-center mb-4">
        {course.icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{course.title}</h3>
      <p className="text-gray-400 text-sm">{course.description}</p>
    </motion.div>
  );
};

const CoursesSection = () => {
  return (
    <section id="courses" className="py-20">
      <div className="section-container">
        <motion.h2 
          className="section-title text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Related Courses
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {courses.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;

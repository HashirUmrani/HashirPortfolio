import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  Calendar,
  Cpu,
  Activity,
  Cloud,
  Zap,
} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "FinApp – AI-Powered Personal Finance Web App",
      description:
        "AI-powered platform for tracking, analyzing, and optimizing expenses with real-time insights and automated receipt scanning.",
      image:
        "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: [
        "Next.js",
        "JavaScript",
        "Tailwind CSS",
        "Shadcn UI",
        "PostgreSQL",
        "Gemini API",
      ],
      github: "https://github.com/HashirUmrani/FinApp.git",
      demo: "#",
      date: "2025",
    },
    {
      title: "AI Image Generator Web App",
      description:
        "Responsive AI-powered app generating images from user prompts in real-time with a clean, intuitive UI.",
      image:
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["JavaScript", "HTML", "CSS", "AI Image API"],
      github: "https://github.com/HashirUmrani/ai_image_generator.git",
      demo: "https://aiimagegenerator-five.vercel.app/",
      date: "2025",
    },
    {
      title: "Netflix Clone – Streaming UI Web App",
      description:
        "Production-style Netflix UI clone showcasing modern layout, responsive design, and dynamic content components.",
      image:
        "https://images.pexels.com/photos/4009402/pexels-photo-4009402.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/HashirUmrani/netflixdemo_clone.git",
      demo: "https://netflixdemoclone.vercel.app/",
      date: "2023",
    },
  ];

  const smallProjects = [
    {
      title: "Anomaly Detection (Python)",
      description:
        "Detect outliers in CPU usage data using Z-score and visualize anomalies with matplotlib.",
      icon: <Cpu size={24} />,
      github:
        "https://github.com/HashirUmrani/Python_Related/blob/master/project.py",
    },
    {
      title: "Association Rule Mining",
      description:
        "Analyze transaction data using Apriori algorithm and visualize support & association rules with seaborn & networkx.",
      icon: <Activity size={24} />,
      github:
        "https://github.com/HashirUmrani/Python_Related/blob/master/project2.py",
    },
    {
      title: "Web Automation – Selenium",
      description:
        "Automate browser actions like visiting pages, extracting headings, and interacting with Google search using Selenium.",
      icon: <Zap size={24} />,
      github:
        "https://github.com/HashirUmrani/Python_Related/blob/master/SelniumPython/webPageAutomate.py",
    },
    {
      title: "Weather App (Python)",
      description: "Simple Python app to fetch and display weather data.",
      icon: <Cloud size={24} />,
      github:
        "https://github.com/HashirUmrani/Python_Related/tree/master/WetherApp/__pycashe__",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.2, staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        {/* Featured Projects */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A selection of projects that showcase my skills and experience
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/70 rounded-xl border border-gray-700/50 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              variants={cardVariants}
              whileHover={{ y: -10 }}
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center text-gray-300 text-sm">
                  <Calendar size={14} className="mr-1" />
                  {project.date}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      className="px-3 py-1 bg-linear-to-r from-purple-600 to-pink-500 text-white text-sm rounded-full"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <motion.a
                    href={project.github}
                    className="flex items-center text-gray-400 hover:text-purple-400 transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={18} className="mr-2" />
                    Source Code
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    className="flex items-center text-gray-400 hover:text-purple-400 transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={18} className="mr-2" />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Small Projects */}
        <motion.div
          className="text-center mt-24 mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            Small Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Quick experiments and Python scripts showcasing automation and data
            analysis.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {smallProjects.map((sp, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/70 rounded-xl border border-gray-700/50 p-6 flex flex-col gap-4 shadow-md hover:shadow-xl transition-all duration-300"
              variants={cardVariants}
              whileHover={{ y: -8 }}
            >
              <div className="text-pink-500">{sp.icon}</div>
              <h3 className="text-xl font-semibold text-white">{sp.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{sp.description}</p>
              <motion.a
                href={sp.github}
                className="flex items-center text-gray-400 hover:text-purple-400 transition-colors duration-200 mt-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={18} className="mr-2" />
                Source Code
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

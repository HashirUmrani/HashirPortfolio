import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 95 },
        { name: "JavaScript", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Vue.js", level: 75 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Java", level: 85 },
        { name: "API Integration", level: 85 },
        { name: "DSA", level: 90 },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 95, emoji: "🔧" },
        { name: "Docker", level: 75, emoji: "🐳" },
        { name: "AWS", level: 80, emoji: "☁️" },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Skill Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/40 backdrop-blur-lg p-8 rounded-2xl border border-gray-700/50 shadow-xl hover:shadow-2xl transition-shadow duration-300"
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-white text-center">
                {category.title}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, i) => (
                  <div key={i} className="space-y-3">
                    {/* Label */}
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-400 text-sm">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Bar */}
                    <div className="w-full bg-gray-700/50 rounded-full h-3">
                      <motion.div
                        className="h-3 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 shadow-md"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1.5,
                          delay: index * 0.2 + i * 0.1,
                          ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                      />
                    </div>

                    {/* Emoji below bar ONLY for Tools */}
                    {category.title === "Tools & Others" && skill.emoji && (
                      <div className="flex justify-center text-2xl pt-1">
                        <span className="drop-shadow-lg">{skill.emoji}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

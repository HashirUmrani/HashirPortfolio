import React from "react";
import { motion } from "framer-motion";
import { Code, Server, Database, Globe } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Code,
      title: "Clean & Scalable Code",
      description:
        "Writing maintainable, efficient, and modular code following best practices.",
    },
    {
      icon: Server,
      title: "Backend Development",
      description:
        "Developing robust server-side applications and APIs for seamless functionality.",
    },
    {
      icon: Database,
      title: "Database Design & Optimization",
      description:
        "Designing optimized database schemas and queries for high performance.",
    },
    {
      icon: Globe,
      title: "Modern Web Technologies",
      description:
        "Leveraging latest frameworks and tools to build interactive applications.",
    },
  ];

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Software Engineering undergraduate passionate about building modern,
            efficient and scalable applications. I aim to grow as a developer by
            solving real-world problems and creating impactful digital
            solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* IMAGE SECTION */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="relative p-[6px] rounded-3xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-gray-900 rounded-3xl p-2">
                <motion.img
                  src="/mypicture.jpg"
                  alt="Hashir Umrani"
                  className="w-64 md:w-72 rounded-2xl object-cover shadow-xl"
                  whileHover={{
                    boxShadow: "0 0 25px rgba(96, 165, 250, 0.5)",
                  }}
                />
              </div>

              {/* Floating glow effects */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full blur-2xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 6, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl"
                animate={{ scale: [1.2, 1, 1.2] }}
                transition={{ duration: 8, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>

          {/* TEXT SECTION */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-white">
              My Journey
            </h3>

            <p className="text-gray-300 mb-3 leading-relaxed">
              I’ve always been driven by curiosity and creativity. Technology
              gives me the ability to turn ideas into real, functional products.
            </p>

            <p className="text-gray-300 mb-3 leading-relaxed">
              From frontend interfaces to backend logic, I enjoy every part of
              the development process — designing systems, writing clean code,
              and solving challenging problems.
            </p>

            <p className="text-gray-300 leading-relaxed">
              My goal is simple: to keep learning, improving, and building
              meaningful applications that make life easier and better.
            </p>
          </motion.div>
        </div>

        {/* FEATURE CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-14">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                className="bg-gray-800/70 p-5 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
                whileHover={{ y: -6 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-3">
                  <Icon size={24} className="text-white" />
                </div>

                <h4 className="text-lg font-semibold mb-2 text-white">
                  {feature.title}
                </h4>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-pink-900/10 pointer-events-none" />
    </section>
  );
};

export default About;

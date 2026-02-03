import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const titleWordVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120, damping: 12 },
    },
  };

  const socialVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: { type: "spring", stiffness: 260, damping: 20 },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-800 text-white">
      {/* Background Gradient & Blobs */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700/80"></div>

      {/* Floating Blobs */}
      <motion.div
        className="absolute w-44 h-44 bg-blue-500/30 rounded-full blur-3xl top-10 left-10"
        animate={{ x: [0, 40, 0], y: [0, -40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-60 h-60 bg-purple-500/30 rounded-full blur-3xl bottom-10 right-10"
        animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Hero Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Sliding Title */}
          <motion.h1 className="text-5xl md:text-7xl font-extrabold mb-6 flex justify-center gap-2">
            <motion.span
              className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent"
              variants={titleWordVariants}
            >
              Hey!
            </motion.span>
            <motion.span
              className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent"
              variants={titleWordVariants}
            >
              I'm Hashir
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-gray-200 mb-4"
            variants={itemVariants}
          >
            Full Stack Developer
          </motion.p>
          <motion.p
            className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Building robust web applications with modern technologies.
            Passionate about creating scalable solutions and clean, maintainable
            code.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
            variants={itemVariants}
          >
            <a
              href="/Hashir-cv.pdf"
              download
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-cyan-400 hover:to-pink-500 px-8 py-3 rounded-full font-semibold text-white shadow-lg hover:shadow-pink-500/50 transition-all duration-300 flex items-center gap-2"
            >
              <Download size={20} />
              Download Resume
            </a>
            <motion.button
              className="border cursor-pointer border-gray-400 hover:border-cyan-400 px-8 py-3 rounded-full font-semibold text-white transition-all duration-300 hover:bg-cyan-400/10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            className="flex justify-center space-x-6"
            variants={itemVariants}
          >
            {[
              { icon: Github, href: "https://github.com/HashirUmrani" },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/hashir-umrani-81a989272/",
              },
              {
                icon: Mail,
                href: "mailto:hashir.muhkam@gmail.com?subject=Hello%20Hashir&body=I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect.",
              },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="p-3 rounded-full bg-gray-700/50 hover:bg-gray-600/50 text-white transition-all duration-300"
                variants={socialVariants}
                whileHover={{
                  scale: 1.3,
                  rotate: 360,
                  boxShadow:
                    social.icon === Mail
                      ? "0 0 15px #00ffff, 0 0 25px #ff00ff"
                      : "0 0 10px #00ffff, 0 0 20px #ff00ff",
                  transition: { duration: 0.6 },
                }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

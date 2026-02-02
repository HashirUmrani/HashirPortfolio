import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_zts2sna",
        "template_9at7rq6",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "h3SRZuJUZsXpsgAJ3",
      )
      .then(() => {
        setLoading(false);
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSuccess(false), 4000);
      })
      .catch(() => {
        setLoading(false);
        alert("❌ Failed to send message. Please try again.");
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden"
    >
      {/* Glow background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Let’s Connect
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I’d love to hear from
            you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Info Card */}
          <motion.div
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10 shadow-xl"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">
              Contact Information
            </h3>

            <p className="text-gray-400 mb-10 leading-relaxed">
              Feel free to reach out through email, phone, or location. I’m
              always open for exciting opportunities.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-5 group cursor-pointer">
                <div
                  className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center 
                  shadow-lg shadow-blue-500/40 
                  group-hover:scale-110 group-hover:rotate-3 
                  transition-all duration-300"
                >
                  <Mail className="text-white" size={22} />
                </div>
                <p className="text-white group-hover:text-blue-400 transition">
                  Hashir.muhkam@gmail.com
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-5 group cursor-pointer">
                <div
                  className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center 
                  shadow-lg shadow-purple-500/40 
                  group-hover:scale-110 group-hover:-rotate-3 
                  transition-all duration-300"
                >
                  <Phone className="text-white" size={22} />
                </div>
                <p className="text-white group-hover:text-purple-400 transition">
                  +92 311 12410 51
                </p>
              </div>

              {/* Location */}
              <div className="flex items-center gap-5 group cursor-pointer">
                <div
                  className="w-14 h-14 bg-gradient-to-r from-pink-500 to-red-500 rounded-xl flex items-center justify-center 
                  shadow-lg shadow-pink-500/40 
                  group-hover:scale-110 group-hover:rotate-6 
                  transition-all duration-300"
                >
                  <MapPin className="text-white" size={22} />
                </div>
                <p className="text-white group-hover:text-pink-400 transition">
                  Nasarpur, Pakistan
                </p>
              </div>
            </div>
          </motion.div>

          {/* Form Card */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10 shadow-xl space-y-8"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* Name */}
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="peer w-full px-4 py-4 bg-transparent border border-gray-700 rounded-xl text-white focus:outline-none focus:border-blue-500"
              />
              <label className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-400 transition-all bg-black px-2">
                Your Name
              </label>
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="peer w-full px-4 py-4 bg-transparent border border-gray-700 rounded-xl text-white focus:outline-none focus:border-purple-500"
              />
              <label className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-purple-400 transition-all bg-black px-2">
                Your Email
              </label>
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="peer w-full px-4 py-4 bg-transparent border border-gray-700 rounded-xl text-white focus:outline-none focus:border-pink-500 resize-none"
              />
              <label className="absolute left-4 top-6 text-gray-400 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-pink-400 transition-all bg-black px-2">
                Your Message
              </label>
            </div>

            {/* Button */}
            <motion.button
              type="submit"
              disabled={loading}
              className="
                relative w-full flex items-center justify-center gap-3 
                bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
                py-4 rounded-xl font-semibold text-lg text-white
                cursor-pointer
                shadow-lg shadow-purple-500/40
                hover:shadow-pink-500/60
                transition-all duration-300
                overflow-hidden
              "
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send />
                </>
              )}
            </motion.button>

            {success && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-green-400 text-center font-medium"
              >
                ✅ Message sent successfully!
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

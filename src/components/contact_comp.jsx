import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  // Send email using EmailJS
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_98uaqh4",        // Replace with your EmailJS service ID
        "template_jackcwq",       // Replace with your EmailJS template ID
        formRef.current,
        "OQ1kjJZLgPrPasxDa"       // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          setDone(true);
        },
        (error) => {
          console.error("Email error:", error.text);
        }
      );
  };

  return (
    <section id="contact" className="w-full px-6 md:px-20 py-16 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-cyan-400 text-center mb-12">
          Contact Me
        </h2>

        <div className="flex flex-col md:flex-row gap-10">
          {/* ===== Left Side: Contact Form ===== */}
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 space-y-5"
          >
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <textarea
              rows={5}
              name="message"
              placeholder="Your Message"
              required
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-cyan-500 text-white px-6 py-2 rounded-lg font-semibold shadow-lg hover:bg-cyan-600 transition"
            >
              Send Message
            </motion.button>
            {done && (
              <p className="text-green-400 text-sm">
                Message sent successfully!
              </p>
            )}
          </motion.form>

          {/* ===== Right Side: Contact Info ===== */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 flex flex-col justify-center gap-6"
          >
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-cyan-400 text-xl" />
              <span>ssuryavanshi6222@gmail.com</span>
            </div>

            <div className="flex items-center gap-4">
              <FaPhone className="text-cyan-400 text-xl" />
              <span>+91 9538790345</span>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-cyan-400 text-xl" />
              <span>Belagavi, Karnataka, India</span>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 mt-6">
              <a
                href="https://github.com/Snehal-A-S"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 text-4xl hover:text-white transition-transform hover:scale-110 hover:drop-shadow-[0_0_6px_cyan]"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/snehal-suryavanshi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 text-4xl hover:text-white transition-transform hover:scale-110 hover:drop-shadow-[0_0_6px_cyan]"
              >
                <FaLinkedin />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


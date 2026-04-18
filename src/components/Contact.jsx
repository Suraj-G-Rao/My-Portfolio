import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { personalInfo } from '../data/portfolio';
import { SectionHeader } from './About';

const socialLinks = [
  { icon: FaGithub, href: personalInfo.github, label: 'GitHub', color: '#fff' },
  { icon: FaLinkedin, href: personalInfo.linkedin, label: 'LinkedIn', color: '#0A66C2' },
  { icon: FaXTwitter, href: personalInfo.twitter, label: 'X (Twitter)', color: '#fff' },
  { icon: FaInstagram, href: personalInfo.instagram, label: 'Instagram', color: '#E1306C' },
  { icon: FaEnvelope, href: `mailto:${personalInfo.email}`, label: 'Email', color: '#4483BE' },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject || `Message from ${name}`)}&body=${encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.open(mailtoLink);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const inputCls = (field) =>
    `w-full px-4 py-3.5 rounded-xl text-white text-sm outline-none transition-all duration-300 font-medium bg-transparent ${
      focused === field
        ? 'border-primary shadow-[0_0_0_1px_rgba(68,131,190,0.5),0_0_20px_rgba(68,131,190,0.1)]'
        : 'border-white/8 hover:border-white/15'
    }`;

  return (
    <section className="relative py-8">
      <div className="blob-1" style={{ top: '10%', left: '-5%', opacity: 0.35 }} />
      <div className="blob-2" style={{ bottom: '10%', right: '-5%', opacity: 0.35 }} />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader subtitle="Get In Touch" title="Let's" accent="Connect" />

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 1, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* Card */}
            <div className="glass-card rounded-3xl p-7 relative overflow-hidden">
              <div
                className="absolute top-0 left-0 w-full h-1"
                style={{ background: 'linear-gradient(90deg, #4483BE, #7C3AED, #06B6D4)' }}
              />
              <h3 className="text-xl font-bold text-white mb-3">Let's Build Something Amazing</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Whether you have a project idea, a research collaboration, or just want to chat about AI/ML and tech — I'd love to hear from you. Great things start with a conversation!
              </p>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-1 gap-3">
              {socialLinks.map((link, i) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label !== 'Email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="glass-card rounded-2xl p-4 flex items-center gap-3 group hover:translate-x-1.5 transition-transform duration-200"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white flex-shrink-0 transition-all duration-300"
                    style={{ background: 'rgba(255,255,255,0.06)' }}
                  >
                    <link.icon size={18} />
                  </div>
                  <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">
                    {link.label}
                  </span>
                  <svg className="w-4 h-4 text-gray-600 ml-auto group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 1, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <div className="glass-card rounded-3xl p-8 relative overflow-hidden">
              <div
                className="absolute top-0 left-0 w-full h-1"
                style={{ background: 'linear-gradient(90deg, #7C3AED, #4483BE)' }}
              />

              <h3 className="text-xl font-bold text-white mb-7">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-gray-500 font-medium mb-2">Name</label>
                    <input
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused(null)}
                      placeholder="Your name"
                      className={`${inputCls('name')} border`}
                      style={{ borderColor: focused === 'name' ? '#4483BE' : 'rgba(255,255,255,0.08)' }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 font-medium mb-2">Email</label>
                    <input
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused(null)}
                      placeholder="your@email.com"
                      className={`${inputCls('email')} border`}
                      style={{ borderColor: focused === 'email' ? '#4483BE' : 'rgba(255,255,255,0.08)' }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-gray-500 font-medium mb-2">Subject</label>
                  <input
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setFocused('subject')}
                    onBlur={() => setFocused(null)}
                    placeholder="What's this about?"
                    className={`${inputCls('subject')} border`}
                    style={{ borderColor: focused === 'subject' ? '#4483BE' : 'rgba(255,255,255,0.08)' }}
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-500 font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                    placeholder="Your message..."
                    className={`${inputCls('message')} border resize-none`}
                    style={{ borderColor: focused === 'message' ? '#4483BE' : 'rgba(255,255,255,0.08)' }}
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-primary w-full justify-center py-4 text-base relative z-10"
                >
                  {submitted ? (
                    <>✓ Message sent via email!</>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

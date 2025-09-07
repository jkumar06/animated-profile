import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Calendar, 
  Code, 
  Award, 
  Users,
  Download,
  ExternalLink,
  Camera,
  X
} from 'lucide-react';

const AnimatedProfile = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    });
  }, [controls]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const downloadResume = () => {
    // Create RTF (Rich Text Format) content that opens directly in Word
    const resumeRTF = `{\\rtf1\\ansi\\deff0 {\\fonttbl {\\f0 Times New Roman;}} {\\colortbl;\\red0\\green0\\blue0;\\red0\\green0\\blue128;\\red128\\green128\\blue128;}

{\\pard\\qc\\f0\\fs32\\b K JAGADEESH KUMAR\\par}
{\\pard\\qc\\f0\\fs18\\b0 Frontend Developer\\par}
{\\pard\\qc\\f0\\fs14 Location: Hyderabad, Telangana | Email: jagadeesh@example.com | Phone: +91-9876543210\\par}
{\\pard\\qc\\f0\\fs14 LinkedIn: linkedin.com/in/k-jagadeesh-kumar | GitHub: github.com/jkumar06\\par}
{\\pard\\qc\\f0\\fs14\\b0\\par}

{\\pard\\f0\\fs20\\b PROFESSIONAL SUMMARY\\par}
{\\pard\\f0\\fs12\\b0 Passionate developer with 6+ years of experience building scalable web applications. I love creating beautiful, functional, and user-friendly digital experiences. Specialized in React.js, JavaScript, and modern frontend technologies.\\par}
{\\pard\\f0\\fs12\\b0\\par}

{\\pard\\f0\\fs20\\b TECHNICAL SKILLS\\par}
{\\pard\\f0\\fs12\\b0\\b Frontend:\\b0 React.js, JavaScript, TypeScript, HTML5, CSS3, Tailwind CSS\\par}
{\\pard\\f0\\fs12\\b0\\b Backend:\\b0 Node.js, Express.js, Python\\par}
{\\pard\\f0\\fs12\\b0\\b Database:\\b0 MongoDB, PostgreSQL\\par}
{\\pard\\f0\\fs12\\b0\\b Tools:\\b0 Git, Webpack, Vite, Docker\\par}
{\\pard\\f0\\fs12\\b0\\b Other:\\b0 RESTful APIs, GraphQL, Responsive Design\\par}
{\\pard\\f0\\fs12\\b0\\par}

{\\pard\\f0\\fs20\\b PROFESSIONAL EXPERIENCE\\par}
{\\pard\\f0\\fs12\\b0\\b Senior Frontend Developer\\b0 | TechCorp Inc. | 2021 - Present\\par}
{\\pard\\f0\\fs12\\b0 \\bullet Developed and maintained React-based web applications\\par}
{\\pard\\f0\\fs12\\b0 \\bullet Collaborated with cross-functional teams to deliver high-quality products\\par}
{\\pard\\f0\\fs12\\b0 \\bullet Implemented responsive designs using Tailwind CSS\\par}
{\\pard\\f0\\fs12\\b0 \\bullet Optimized application performance and user experience\\par}
{\\pard\\f0\\fs12\\b0\\par}

{\\pard\\f0\\fs12\\b0\\b Frontend Developer\\b0 | WebSolutions Ltd. | 2019 - 2021\\par}
{\\pard\\f0\\fs12\\b0 \\bullet Built interactive user interfaces using React.js\\par}
{\\pard\\f0\\fs12\\b0 \\bullet Worked with RESTful APIs and GraphQL\\par}
{\\pard\\f0\\fs12\\b0 \\bullet Participated in code reviews and agile development processes\\par}
{\\pard\\f0\\fs12\\b0 \\bullet Contributed to the development of reusable component libraries\\par}
{\\pard\\f0\\fs12\\b0\\par}

{\\pard\\f0\\fs12\\b0\\b Junior Developer\\b0 | StartupXYZ | 2018 - 2019\\par}
{\\pard\\f0\\fs12\\b0 \\bullet Developed web applications using JavaScript and React\\par}
{\\pard\\f0\\fs12\\b0 \\bullet Collaborated with senior developers on various projects\\par}
{\\pard\\f0\\fs12\\b0 \\bullet Learned modern development practices and tools\\par}
{\\pard\\f0\\fs12\\b0\\par}

{\\pard\\f0\\fs20\\b EDUCATION\\par}
{\\pard\\f0\\fs12\\b0\\b Bachelor of Technology in Computer Science\\b0\\par}
{\\pard\\f0\\fs12\\b0 University of Technology | 2014 - 2018\\par}
{\\pard\\f0\\fs12\\b0\\par}

{\\pard\\f0\\fs20\\b KEY PROJECTS\\par}
{\\pard\\f0\\fs12\\b0\\b E-Commerce Platform\\b0\\par}
{\\pard\\f0\\fs12\\b0 Technologies: React, Node.js, MongoDB, Stripe\\par}
{\\pard\\f0\\fs12\\b0 Full-stack e-commerce solution with user authentication, product catalog, shopping cart, and order management. Implemented payment integration with Stripe.\\par}
{\\pard\\f0\\fs12\\b0\\par}

{\\pard\\f0\\fs12\\b0\\b Task Management App\\b0\\par}
{\\pard\\f0\\fs12\\b0 Technologies: React, Socket.io, Express, PostgreSQL\\par}
{\\pard\\f0\\fs12\\b0 Collaborative task management with real-time updates, drag-and-drop interface, and team management features.\\par}
{\\pard\\f0\\fs12\\b0\\par}

{\\pard\\f0\\fs12\\b0\\b Weather Dashboard\\b0\\par}
{\\pard\\f0\\fs12\\b0 Technologies: React, Weather API, Chart.js, Tailwind CSS\\par}
{\\pard\\f0\\fs12\\b0 Beautiful weather app with location-based forecasts, current weather, 7-day forecast, and interactive charts.\\par}
{\\pard\\f0\\fs12\\b0\\par}

{\\pard\\f0\\fs20\\b CERTIFICATIONS\\par}
{\\pard\\f0\\fs12\\b0 \\bullet AWS Certified Developer Associate\\par}
{\\pard\\f0\\fs12\\b0 \\bullet React Developer Certification\\par}
{\\pard\\f0\\fs12\\b0 \\bullet JavaScript Algorithms and Data Structures\\par}
{\\pard\\f0\\fs12\\b0\\par}

{\\pard\\f0\\fs20\\b LANGUAGES\\par}
{\\pard\\f0\\fs12\\b0\\b English:\\b0 Fluent\\par}
{\\pard\\f0\\fs12\\b0\\b Telugu:\\b0 Native\\par}
{\\pard\\f0\\fs12\\b0\\b Hindi:\\b0 Conversational\\par}
}`;

    // Create a blob with the RTF content
    const blob = new Blob([resumeRTF], { type: 'application/rtf' });
    const url = window.URL.createObjectURL(blob);
    
    // Create a temporary link element and trigger download
    const link = document.createElement('a');
    link.href = url;
    link.download = 'K_Jagadeesh_Kumar_Resume.rtf';
    document.body.appendChild(link);
    link.click();
    
    // Clean up
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };


  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const skills = [
    { name: 'React.js', level: 95, color: 'from-blue-400 to-blue-600' },
    { name: 'JavaScript', level: 90, color: 'from-yellow-400 to-yellow-600' },
    { name: 'Node.js', level: 85, color: 'from-green-400 to-green-600' },
    { name: 'Python', level: 80, color: 'from-purple-400 to-purple-600' },
    { name: 'CSS/Tailwind', level: 95, color: 'from-pink-400 to-pink-600' },
    { name: 'TypeScript', level: 75, color: 'from-indigo-400 to-indigo-600' }
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
      github: '#'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management with real-time updates',
      tech: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
      link: '#',
      github: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'Beautiful weather app with location-based forecasts',
      tech: ['React', 'API', 'Chart.js', 'Tailwind'],
      link: '#',
      github: '#'
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        className="max-w-6xl w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Profile Card */}
        <motion.div
          className="glass rounded-3xl p-8 md:p-12 shadow-2xl"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Profile Image and Basic Info */}
            <motion.div
              className="text-center md:text-left"
              variants={itemVariants}
            >
              <motion.div
                className="relative inline-block mb-6 group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-48 h-48 mx-auto md:mx-0 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-1 cursor-pointer"
                     onClick={triggerFileInput}>
                  <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-6xl font-bold text-gray-600 overflow-hidden relative">
                    {imagePreview ? (
                      <img
                        src={imagePreview}
                        alt="Profile"
                        className="w-full h-full object-cover rounded-full"
                      />
                    ) : (
                      <span>JD</span>
                    )}
                    
                    {/* Upload overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Camera className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
                
                {/* Remove image button */}
                {imagePreview && (
                  <motion.button
                    className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                    onClick={removeImage}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-4 h-4 text-white" />
                  </motion.button>
                )}
                
                {/* Online status indicator */}
                <motion.div
                  className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{ display: imagePreview ? 'none' : 'flex' }}
                >
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </motion.div>
                
                {/* Hidden file input */}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </motion.div>

              <motion.h1
                className="text-4xl md:text-5xl font-bold text-white mb-2"
                variants={itemVariants}
              >
                K Jagadeesh kumar 
              </motion.h1>
              <motion.p
                className="text-xl text-blue-200 mb-4"
                variants={itemVariants}
              >
                Frontend Developer
              </motion.p>
              <motion.p
                className="text-gray-300 mb-6 leading-relaxed"
                variants={itemVariants}
              >
                Passionate developer with 6+ years of experience building scalable web applications. 
                I love creating beautiful, functional, and user-friendly digital experiences.
              </motion.p>

              {/* Image upload instruction */}
              <motion.p
                className="text-sm text-blue-200 mb-4 italic"
                variants={itemVariants}
              >
                💡 Click on the profile picture to upload your photo
              </motion.p>

              {/* Contact Info */}
              <motion.div
                className="space-y-3 mb-6"
                variants={itemVariants}
              >
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-5 h-5 mr-3 text-blue-400" />
                  <span>Hyderabad, Telangana</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Calendar className="w-5 h-5 mr-3 text-blue-400" />
                  <span>Available for work</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Code className="w-5 h-5 mr-3 text-blue-400" />
                  <span>6+ years experience</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Linkedin className="w-5 h-5 mr-3 text-blue-400" />
                  <a 
                    href="https://www.linkedin.com/in/k-jagadeesh-kumar-8aa229a4/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                  >
                    linkedin.com/in/k-jagadeesh-kumar
                  </a>
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                className="flex space-x-4"
                variants={itemVariants}
              >
                {[
                  { icon: Github, href: 'https://github.com/jkumar06', color: 'hover:text-gray-300' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/k-jagadeesh-kumar-8aa229a4/', color: 'hover:text-blue-400' },
                  { icon: Mail, href: 'mailto:jagadeesh@example.com', color: 'hover:text-red-400' }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-full glass flex items-center justify-center text-white transition-colors duration-300 ${social.color}`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Stats and Skills */}
            <motion.div
              className="space-y-8"
              variants={itemVariants}
            >
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Projects', value: '50+', icon: Code },
                  { label: 'Clients', value: '25+', icon: Users },
                  { label: 'Awards', value: '10+', icon: Award },
                  { label: 'Experience', value: '5+', icon: Calendar }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="glass rounded-2xl p-4 text-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Skills</h3>
                <div className="space-y-3">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="space-y-1"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex justify-between text-sm text-gray-300">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div
                          className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Projects Section */}
        <motion.div
          className="mt-12"
          variants={itemVariants}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-8">Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="glass rounded-2xl p-6 hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <motion.a
                    href={project.github}
                    className="flex items-center text-gray-300 hover:text-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </motion.a>
                  <motion.a
                    href={project.link}
                    className="flex items-center text-gray-300 hover:text-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-12"
          variants={itemVariants}
        >
          <motion.button
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={downloadResume}
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AnimatedProfile;
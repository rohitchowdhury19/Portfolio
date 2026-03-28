"use client"

import { motion } from "framer-motion"
import Section from "./Section"

// Core technical skills with proficiency levels
const skills = [
  { name: "Python", level: 85, color: "bg-blue-500" },
  { name: "JavaScript", level: 80, color: "bg-yellow-400" },
  { name: "C / C++", level: 75, color: "bg-purple-500" },
  { name: "React.js", level: 80, color: "bg-cyan-500" },
  { name: "Node.js / Express.js", level: 75, color: "bg-green-500" },
  { name: "HTML / CSS", level: 90, color: "bg-orange-500" },
]

// Other technologies & tools grouped
const techGroups = [
  {
    category: "Web Development",
    items: ["React.js", "Node.js", "Express.js", "MongoDB", "REST API"],
  },
  {
    category: "DevOps & Cloud",
    items: ["Git", "GitHub", "GitHub Actions", "Docker", "AWS EC2", "AWS S3"],
  },
  {
    category: "ML & Data Science",
    items: ["TensorFlow", "scikit-learn", "NumPy", "Pandas", "Data Visualization"],
  },
  {
    category: "Tools & Design",
    items: ["VS Code", "Jupyter", "Google Colab", "Figma", "Adobe Photoshop", "Illustrator", "Canva"],
  },
]

// Soft skills
const softSkills = [
  "Problem Solving",
  "Team Collaboration",
  "Creative Thinking",
  "Content Writing (Sports)",
  "Time Management",
  "Adaptability",
]

export default function Skills() {
  return (
    <Section id="skills" title="Skills" className="bg-gray-900">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Left: Proficiency Bars */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Technical Proficiency</h3>
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="h-3 w-full bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full ${skill.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Soft Skills */}
          <h3 className="text-2xl font-semibold mt-10 mb-6">Soft Skills</h3>
          <div className="grid grid-cols-2 gap-4">
            {softSkills.map((skill) => (
              <motion.div
                key={skill}
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="w-3 h-3 rounded-full bg-blue-500 mr-2 flex-shrink-0"></div>
                <span className="text-sm">{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: Tech Groups */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Technologies & Tools</h3>
          <div className="space-y-6">
            {techGroups.map((group) => (
              <div key={group.category}>
                <h4 className="text-blue-400 font-semibold mb-2 text-sm uppercase tracking-wide">
                  {group.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((tech) => (
                    <motion.div
                      key={tech}
                      className="bg-gray-800 px-3 py-1 rounded-full shadow-md text-sm"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      viewport={{ once: true }}
                    >
                      {tech}
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <img
            src="/type.png"
            alt="Typing"
            className="w-full h-auto mt-8 opacity-70 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      </div>
    </Section>
  )
}

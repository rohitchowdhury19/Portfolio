"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Github } from "lucide-react"
import Section from "./Section"

// Rohit Chowdhury's GitHub projects (rohitchowdhury19)
const projects = [
  {
    id: 1,
    title: "DRAIS — Disaster Detection & Response",
    description:
      "A digital guardian for communities facing disasters. Uses AI and real-time IoT sensor data to predict upcoming disasters, monitor natural and man-made crises, and provide live updates to guide emergency teams.",
    image: "/drais_project_thumb.png",
    tags: ["AI/ML", "IoT", "Python", "Web Development"],
    githubLink: "https://github.com/rohitchowdhury19/DRAIS",
  },
  {
    id: 2,
    title: "Snake & Ladder Game",
    description:
      "A classic 2-player Snake & Ladder board game built with HTML, CSS, and JavaScript. Features animated dice rolling, snakes that send you down, ladders that help you climb, and a winner celebration modal.",
    image: "/snake_ladder_thumb.png",
    tags: ["JavaScript", "HTML", "CSS", "Web Development"],
    githubLink: "https://github.com/rohitchowdhury19/Snake-and-ladder-game-in-C",
  },
  {
    id: 3,
    title: "Todo Remainder",
    description:
      "A simple and functional to-do list application with reminder features. Built with HTML, CSS, and JavaScript for efficient task management and productivity.",
    image: "/todo_remainder_thumb.png",
    tags: ["HTML", "CSS", "JavaScript", "Web Development"],
    githubLink: "https://github.com/rohitchowdhury19/Todo_remainder",
  },
  {
    id: 4,
    title: "Time Series Forecasting (DWDM)",
    description:
      "A time series forecasting project for Data Warehousing and Data Mining coursework. Implements forecasting models in Python for predictive analytics and trend analysis.",
    image: "/time_series_thumb.png",
    tags: ["Python", "AI/ML", "Data Science"],
    githubLink: "https://github.com/rohitchowdhury19/CodeCA2-TimeSeries-Forecasting",
  },
  {
    id: 5,
    title: "React Project",
    description:
      "A React-based project for practicing component-driven UI development. Explores modern React patterns, state management, and responsive design principles.",
    image: "/react_project_thumb.png",
    tags: ["React", "JavaScript", "Web Development"],
    githubLink: "https://github.com/rohitchowdhury19/React-Project",
  },
]

const categories = ["All", "Web Development", "AI/ML", "Data Science"]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.tags.includes(activeCategory))

  return (
    <Section id="projects" title="Projects" className="bg-gray-800">
      <div className="flex justify-center mb-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full ${activeCategory === category
                  ? "bg-blue-500 text-white"
                  : "bg-gray-700 hover:bg-gray-600 text-gray-200"
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative h-48 md:h-56">
              <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="bg-gray-700 px-3 py-1 rounded-full text-xs">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-white text-sm"
                >
                  <Github size={16} className="mr-1" />
                  View on GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        {/* Left Column Image */}
        <div>
          <img
            src="/robot-talk.png"
            alt="Developer Workspace Left View"
            className="w-3/4 max-w-xs md:max-w-sm rounded-lg"
          />
        </div>

        {/* Right Column Image */}
        <div>
          <img
            src="/droid.png"
            alt="Developer Workspace Right View"
            className="w-3/4 max-w-xs md:max-w-sm rounded-lg"
          />
        </div>
      </div>
    </Section>
  )
}

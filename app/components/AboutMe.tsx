import { GraduationCap, Award } from "lucide-react";
import Section from "./Section";

export default function AboutMe() {
  return (
    <Section id="about" title="About Me">
      <div className="grid md:grid-cols-2 gap-8 items-start">

        {/* Left: Bio */}
        <div className="space-y-4">
          <img
            src="/dev-space.png"
            alt="Developer Workspace"
            className="w-full h-auto rounded-lg shadow-md mb-4"
          />
          <p className="text-lg leading-relaxed">
            I am <strong>Rohit Chowdhury</strong>, a highly motivated undergraduate student pursuing a
            Bachelor of Technology in Computer Science and Engineering at Kalyani Government Engineering College
            (Class of 2023–2027). I am passionate about building impactful solutions that sit at the intersection
            of full-stack development, AI/ML, and cloud technologies.
          </p>
          <p className="text-lg leading-relaxed">
            My journey in tech started with curiosity and grew into a deep drive to build things that matter —
            from responsive web applications to intelligent disaster detection systems. I love exploring DevOps,
            contributing to open source, and researching AI/ML topics.
          </p>
          <p className="text-lg leading-relaxed">
            Outside of coding, I enjoy competitive programming, writing about sports, and exploring creative tools
            like Photoshop and Illustrator. I speak English, Bengali, and Hindi.
          </p>

          {/* Objective */}
          <div className="bg-gray-800 rounded-lg p-4 border-l-4 border-blue-500 mt-2">
            <h4 className="font-semibold text-blue-400 mb-1">Objective</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              Currently seeking a software development or AI/ML internship to apply and enhance skills in
              full-stack development, machine learning, and cloud technologies.
            </p>
          </div>

          {/* Languages & Interests */}
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div className="bg-gray-800 rounded-lg p-4">
              <h4 className="font-semibold text-blue-400 mb-2">Languages</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>🌐 English</li>
                <li>🌐 Bengali</li>
                <li>🌐 Hindi</li>
              </ul>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <h4 className="font-semibold text-blue-400 mb-2">Interests</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>💻 Competitive Programming</li>
                <li>🤖 AI/ML Research</li>
                <li>⚙️ DevOps</li>
                <li>🌍 Open Source</li>
                <li>🎨 Front End Developer</li>
                <li>💻 Software Developer</li>
                <li>🛠️ Backend Developer</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right: Education & Certifications */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">Education</h3>

          <div className="space-y-4">
            {/* B.Tech */}
            <div className="flex items-start">
              <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full mr-4 mt-1 flex-shrink-0">
                <GraduationCap className="text-blue-600" size={20} />
              </div>
              <div>
                <h4 className="font-semibold">B.Tech in Computer Science and Engineering</h4>
                <p className="text-gray-400">Kalyani Government Engineering College (KGEC) | 2023 – 2027</p>
                <p className="text-gray-300 text-sm">Maulana Abul Kalam Azad University of Technology, West Bengal</p>
              </div>
            </div>

            {/* Higher Secondary */}
            <div className="flex items-start">
              <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full mr-4 mt-1 flex-shrink-0">
                <GraduationCap className="text-blue-600" size={20} />
              </div>
              <div>
                <h4 className="font-semibold">Higher Secondary Education (Class XII)</h4>
                <p className="text-gray-400">U.P. Public School, Suri, Birbhum | 2023</p>
                <p className="text-gray-300 text-sm">
                  AISSCE — CBSE | Science Stream (Physics, Chemistry, Mathematics, Biology)
                </p>
              </div>
            </div>

            {/* Secondary */}
            <div className="flex items-start">
              <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full mr-4 mt-1 flex-shrink-0">
                <GraduationCap className="text-blue-600" size={20} />
              </div>
              <div>
                <h4 className="font-semibold">Secondary Education (Class X)</h4>
                <p className="text-gray-400">U.P. Public School, Suri, Birbhum | 2021</p>
                <p className="text-gray-300 text-sm">AISSE — CBSE</p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <h3 className="text-2xl font-semibold mt-4">Certifications</h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-yellow-100 dark:bg-yellow-900 p-2 rounded-full mr-4 mt-1 flex-shrink-0">
                <Award className="text-yellow-500" size={20} />
              </div>
              <div>
                <h4 className="font-semibold">SIH Finalist 2024</h4>
                <p className="text-gray-400">Smart India Hackathon — National Level Finalist</p>
                <p className="text-gray-300 text-sm">
                  Recognized as a finalist in Smart India Hackathon 2024, one of the largest hackathons in India,
                  for developing an innovative tech-driven solution.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
}
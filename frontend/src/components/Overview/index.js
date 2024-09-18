import React, { useState } from 'react';

const SkillTag = ({ skill }) => (
  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">
    {skill}
  </span>
);

const Overview = () => {
  const [activeSection, setActiveSection] = useState('about');

  const sections = {
    about: {
      title: "About Me",
      content: "Hi, I'm Alex! I'm a passionate web developer with 5 years of experience. I love creating user-friendly and efficient web applications."
    },
    skills: {
      title: "My Skills",
      content: (
        <div>
          <SkillTag skill="React" />
          <SkillTag skill="JavaScript" />
          <SkillTag skill="CSS" />
          <SkillTag skill="Node.js" />
          <SkillTag skill="UI/UX Design" />
        </div>
      )
    },
    projects: {
      title: "Featured Projects",
      content: (
        <ul className="list-disc list-inside">
          <li>E-commerce Platform</li>
          <li>Weather App</li>
          <li>Task Management System</li>
        </ul>
      )
    }
  };

return (
    <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Tianyi S</h1>
        <p className="text-gray-600 mb-6">Full Stack Developer | Software Engineer</p>
        
        <div className="flex space-x-2 mb-6">
            <a href="https://github.com/tshao42" className="p-2 border rounded">GitHub</a>
            <a href="https://www.linkedin.com/in/tianyishao42/" className="p-2 border rounded">LinkedIn</a>
            <a href="mailto:tianyi.s.ca@gmail.com" className="p-2 border rounded">Email</a>
        </div>

        <div className="flex space-x-2 mb-4">
            {Object.keys(sections).map((section) => (
                <button
                    key={section}
                    className={`px-4 py-2 rounded ${activeSection === section ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                    onClick={() => setActiveSection(section)}
                >
                    {sections[section].title}
                </button>
            ))}
        </div>

        <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-2">{sections[activeSection].title}</h2>
            <div>{sections[activeSection].content}</div>
        </div>
    </div>
);
};

export default Overview;
import { useState } from "react";
import dashboard from "../assets/money.png";
import ecommerce from "../assets/ecom.png";
import auth from "../assets/header.png";
import RevealOnScroll from "../Ui/RevealOnScroll";

function Projects() {
  const [projects] = useState([
    {
      image: dashboard,
      name: "Personal Finance Manager App",
      brief:
        "A full-stack personal finance management system built with React and Spring Boot, designed to help users efficiently track income, expenses, and budgets.",
      languages : ["HTML", "ReactJS", "TailwindCSS", "Spring Boot", "Spring Data JPA", "Spring Security", "JWT", "PostgreSQL"],
      link : "https://mymoney243.netlify.app/"
    },
    {
      image: ecommerce,
      name: "Shopping Application",
      brief:
        "This shopping application is a comprehensive e-commerce platform built with Java Spring Boot that provides a seamless online shopping experience for both customers and administrators.",
      languages : ["HTML", "CSS","Javascript", "Spring Boot", "Spring Data JPA", "MySQL"],
      link : "https://myshopping-production.up.railway.app/"
    },
    {
      image: auth,
      name: "Authentication System",
      brief:
        "The system implements secure user registration and login functionality with advanced features like email OTP code verification.",
      languages : ["HTML", "ReactJS", "TailwindCSS", "Spring Boot", "Spring Data JPA", "Spring Security", "JWT", "MySQL"],
      link : "https://authenticationn-system.netlify.app/"
    },
  ]);
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center font-mono justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="max-w-3xl text-4xl font-semibold mb-12 bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent text-center ">
            Features Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="p-6 rounded-xl flex flex-col items-center text-center border-2 border-white/10 hover:border-blue-500/30 hover:shadow-[9_2px_8px_rgba(59,130,246,0.2)] hover:-translate-y-1 transition-all hover:bg-cyan-900 "
              >
                <h3 className="font-semibold text-xl mb-4">{project.name}</h3>
                <p className="text-gray-300 mb-4">{project.brief} </p>
                <div className="flex flex-wrap sm:items-center gap-2 mb-4">
                  {project.languages.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-balance hover:bg-blue-500/20 hover:shadow-[9_2px_8px_rgba(59,130,22.46,0.2)] transition "
                    >
                      {tech}
                    </span>
                  ))}
                  <div className="flex flex-col text-center my-5 py-3 justify-center gap-3 border-2 border-white/10 hover:border-blue-500/30 hover:shadow-[9_2px_8px_rgba(59,130,22.46,0.2)]  cursor-pointer rounded-xl ">
                    <p className="text-gray-200">View Project</p>
                    <a
                      href={project.link}
                      target="_blank"
                      className="flex justify-between items-center font-bold text-blue-400 transition-colors hover:text-white"
                    >
                      {" "}
                      <img src={project.image} alt={`${project.name}Image `} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default Projects;

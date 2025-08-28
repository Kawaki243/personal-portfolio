import RevealOnScroll from "../Ui/RevealOnScroll";
function About() {
  const skills = [
    "Html",
    "Css",
    "Javascript",
    "React",
    "TailwindCSS",
  ];
  const backendskills = [
    "Java",
    "Spring Boot",
    "Spring Data JPA",
    "Spring Security",
    "MySQL",
    "PostgreSQL",
    "Oracle"
  ];
  return (
    <section
      id="about"
      className="min-h-screen font-mono flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="max-w-3xl text-4xl font-semibold mb-12 bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent text-center ">
            About Me
          </h2>
          <div className="p-8 mb-6 rounded-xl border-white/10 border-2 hover:-translate-y-1 transition-all ">
            <p className="text-gray-300 mb-5 text-xl">
              Passionate developer with expertise in building frontend and backend web
              applications and creating innovative solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-2xl text-center font-bold mb-8">💼 Frontend Skills</h3>
              <div className="flex justify-center flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-balance hover:bg-blue-500/20 hover:shadow-[9_2px_8px_rgba(59,130,22.46,0.2)] transition "
                    key={index}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-2xl text-center font-bold mb-8">🛍️ Backend Skills</h3>
              <div className="flex justify-center flex-wrap gap-2">
                {backendskills.map((skill, index) => (
                  <span
                    className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-balance hover:bg-blue-500/20 hover:shadow-[9_2px_8px_rgba(59,130,22.46,0.2)] transition "
                    key={index}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 col-span-2 hover:-translate-y-1 transition-all">
              <h3 className="text-2xl text-center font-bold mb-8">
                📚 Education
              </h3>
              <ul className="pl-5 list-disc list-inside text-lg text-gray-300">
                <li>
                  <strong>
                    {" "}
                    <em>Bachelor's degree in Computer Science </em>{" "}
                  </strong>
                  University of Strasbourg (September 2022 - July 2025)
                </li>
                <li>
                  Networking, Security, Database Systems, Programming Languages, Artificial Intelligence, Web Development
                </li>
              </ul>
            </div>
          </div>
          <div className="p-6 hover:-translate-y-1 transition-all">
            <h3 className="text-2xl text-center font-bold mb-8">
              💻 Work Experience
            </h3>
            <ul className="pl-5 list-disc list-inside text-lg text-gray-300">
              <li>
                <strong className="text-blue-400">
                  <em>Intern Backend Game Developer ( Strasbourg, France )</em>
                </strong>
                📍
                <br />* Intern | December 2025 - June 2025 <br />
                - Designed, developed and optimized SQL queries utilizing Common Table Expressions ( CTEs ) , subqueries, window functions, aggregate functions and CASE statements for advanced data transformation and reporting
 <br />-  Created and maintained database objects including stored procedures , triggers, views, temporary tables and user-defined functions to support game logic implementations. <br />-
                Executed robust data manipulation and definition operations using DML/DDL statements, enforced data integrity through proper use of primary and foreign key constraints and implemented efficient JOIN operations for relational datasets.
              </li>
            </ul>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default About;

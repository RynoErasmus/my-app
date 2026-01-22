function About() {
  const skillSet = [
    { skill: "React TypeScript" },
    { skill: "PostgreSQL" },
    { skill: "HTML5, CSS & Javascript" },
    { skill: "C# ASP.NET" },
    { skill: "SEO & Performance Optimization" },
    { skill: "UI/UX Design & WireFraming" },
  ];
  return (
    // Overall About me
    <>
      <div className="bg-gray-800 text-white p-3 sm:p-4 lg:p-6 text-sm sm:text-base lg:text-xl">
        <h1 className="text-center py-2 text-shadow-lg/100 text-lg sm:text-2xl lg:text-3xl">
          About Me
        </h1>

        <p className="text-shadow-lg/100 max-w-full sm:max-w-3xl lg:max-w-6xl mx-auto leading-relaxed">
          <span className="text-2xl sm:text-3xl lg:text-3xl text-red-600 mr-2">
            Hello! I'm Ryno Erasmus,
          </span>
          a Software Developer passionate about crafting intuitive,
          user-friendly websites. My goal is to blend aesthetics with
          functionality, creating engaging experiences that solve real user
          problems. Through research and testing, I design interfaces that
          enhance usability and drive business success. Constantly refining my
          skills, I stay updated with the latest trends to contribute to
          innovative projects. In the future, I aspire to lead design teams,
          mentor designers, and make a lasting impact in the UI/UX and Software
          field with expertise in React Typescript, PostgreSQL, C#, Tailwind and
          modern web technologies. I love crafting clean, efficient, and
          visually appealing websites.
        </p>
      </div>
      <div className="bg-[#7A7A73] px-3 sm:px-6 lg:px-10">
        <h1 className="text-center py-3 text-white text-shadow-lg/100 text-lg sm:text-2xl lg:text-3xl">
          Skills & Expertise
        </h1>

        <div className="flex flex-col md:flex-row flex-wrap gap-6 justify-center items-center w-full pb-7.5 text-white text-sm sm:text-base lg:text-xl">
          {skillSet.map((item, index) => (
            <div
              key={index}
              className="bg-[#b31212] h-32 sm:h-40 md:h-48 lg:h-54 w-full sm:w-64 md:w-64 lg:w-72 flex justify-center items-center text-center wrap-break-word rounded-3xl text-shadow-lg/100 px-3"
            >
              {item.skill}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default About;

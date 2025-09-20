"use client"
import { useState } from "react";

const ResumeSection = () => {

  const education = [
    {
      title: "SPECIALIZED TECHNICIAN IN DIGITAL DEVELOPMENT",
      subtitle: "OFPPT - Abichoub Doukkali",
      date: "2021 - 2023",
      description:
        "Completed specialized technical training in digital development, covering HTML, CSS, SASS, JavaScript, TypeScript, React.js, Next.js, Tailwind, Bootstrap, Git/GitHub, and database management. Developed skills in full-stack development and collaborative software practices.",
    },
    {
      title: "BACCALAUREATE IN PHYSICAL SCIENCES",
      subtitle: "Lalla Aicha Mixed",
      date: "2019 - 2020",
      description:
        "Studied physical sciences, building a solid foundation in analytical thinking, problem-solving, and scientific reasoning, which supports a logical approach to programming and development.",
    },
    {
      title: "RESPONSIVE WEB DESIGN DEVELOPER CERTIFICATION",
      subtitle: "FreeCodeCamp",
      date: "2022",
      description:
        "Earned certification focused on creating responsive websites with modern web standards, ensuring accessibility and cross-device compatibility.",
    },
  ];

  const experience = [
    {
      title: "FRONTEND DEVELOPER (Freelance)",
      subtitle: "Self-Employed",
      date: "Feb 2024 - Present",
      description:
        "Delivered custom web solutions for clients using Next.js, Tailwind, React. Focused on building responsive, accessible, and high-performance web applications tailored to client needs.",
    },
    {
      title: "FRONTEND DEVELOPER (Internship)",
      subtitle: "AgilTeem",
      date: "Nov 2023 - Jan 2024",
      description:
        "Converted Figma designs into pixel-perfect, responsive code. Used Tailwind and Bootstrap to streamline development, collaborated with designers, and fixed styling bugs in Angular projects. Gained experience with Strapi CMS for content management.",
    }
  ];

  const [openEduIndex, setOpenEduIndex] = useState<number>(0);
  return (
    <section className=" flex flex-col gap-24">
      {/* Experience */}
      <div className="flex flex-col gap-6">
        <span className="bg-background drop-shadow-[-2px_3px_0px_var(--primary)] w-fit px-4 py-1 rounded-md border border-primary text-primary font-bold">Experience</span>

        {experience.map((item, index) => (
          <div key={index} className="flex flex-col gap-8 mt-2">
            <div className="flex items-center justify-between border-b-2 border-dark/40 pb-2 cursor-pointer select-none relative"
              onClick={() => setOpenEduIndex(index === openEduIndex ? -1 : index)}>
              <h4 className="text-xl font-extrabold tracking-wide pe-4">{item.title}</h4>
              <span className="absolute right-0 -bottom-6 w-6 h-6 grid place-items-center rounded-br-lg border border-dark/40 text-white font-semibold bg-primary">{openEduIndex === index ? "–" : "+"}</span>
            </div>
            {openEduIndex === index && item.description && (
              <div className="md:pe-12 flex flex-col gap-5">
                <div className="flex items-center gap-3 justify-between">
                  {item.subtitle && (<span className="uppercase  text-lg font-semibold tracking-wide md:inline">{item.subtitle}</span>)}
                  {item.date && (<span className="text-sm  font-semibold">{item.date}</span>)}

                </div>
                <p className="text-muted leading-[1.8] ">{item.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Education */}
      <div className="flex flex-col gap-6">
        <span className="bg-background drop-shadow-[-2px_3px_0px_var(--primary)] w-fit px-4 py-1 rounded-md border border-primary text-primary font-bold">Education</span>

        {education.map((item, index) => (
          <div key={index} className="flex flex-col gap-8 mt-2">
            <div className="flex items-center justify-between border-b-2 border-dark/40 pb-2 cursor-pointer select-none relative"
              onClick={() => setOpenEduIndex(index === openEduIndex ? -1 : index)}>
              <h4 className="text-xl font-extrabold tracking-wide pe-4">{item.title}</h4>
              <span className="absolute right-0 -bottom-6 w-6 h-6 grid place-items-center rounded-br-lg border border-dark/40 text-white font-semibold bg-primary">{openEduIndex === index ? "–" : "+"}</span>
            </div>
            {openEduIndex === index && item.description && (
              <div className="md:pe-12 flex flex-col gap-5">
                <div className="flex items-center gap-3 justify-between">
                  {item.subtitle && (<span className="uppercase  text-lg font-semibold tracking-wide md:inline">{item.subtitle}</span>)}
                  {item.date && (<span className="text-sm  font-semibold">{item.date}</span>)}

                </div>
                <p className="text-muted leading-[1.8] text-">{item.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>


    </section>
  );
}

export default ResumeSection;
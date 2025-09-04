"use client"
import { useState } from "react";

const ResumeSection = () => {

 const education = [
  {
   title: "SPECIALIZED TECHNICIAN IN DIGITAL DEVELOPMENT",
   subtitle: "Subject ",
   date: "2021 - 2023",
   description:
    "Specialized technical training in digital development and web technologies covering modern programming languages and database management. Gained hands-on experience in full-stack development and collaborative software development practices.",
  },
  {
   title: "BACCALAUREATE IN PHYSICAL SCIENCES",
   subtitle: "",
   date: "",
   description: "",
  },
 ];

 const experience = [
  {
   title: "FRONT END DEVELOPER",
   subtitle: "Subject ",
   date: "2021 - 2023",
   description:
    "Specialized technical training in digital development and web technologies covering modern programming languages and database management.",
  },
  {
   title: "BACCALAUREATE IN PHYSICAL SCIENCES",
   subtitle: "",
   date: "",
   description: "",
  },
 ];

 const [openEduIndex, setOpenEduIndex] = useState<number>(0);
 const [openExpIndex, setOpenExpIndex] = useState<number>(0);
 return (
  <section className=" flex flex-col gap-24">
   {/* Education */}
   <div className="flex flex-col gap-6">
    <span className="bg-background drop-shadow-[-2px_3px_0px_var(--primary)] w-fit px-4 py-1 rounded-md border border-primary text-primary font-bold">Education</span>

    {education.map((item, index) => (
     <div key={index} className="flex flex-col gap-8 mt-2">
      <div className="flex items-center justify-between border-b-2 border-black/40 pb-2 cursor-pointer select-none relative"
       onClick={() => setOpenEduIndex(index === openEduIndex ? -1 : index)}>
       <h4 className="text-xl font-extrabold tracking-wide pe-4">{item.title}</h4>
       <span className="absolute right-0 -bottom-6 w-6 h-6 grid place-items-center rounded-br-lg border border-black/40 text-white font-semibold bg-primary">{openEduIndex === index ? "–" : "+"}</span>
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

   {/* Experience */}
   <div className="flex flex-col gap-6">
    <span className="bg-background drop-shadow-[-2px_3px_0px_var(--primary)] w-fit px-4 py-1 rounded-md border border-primary text-primary font-bold">Experience</span>

    {experience.map((item, index) => (
     <div key={index} className="flex flex-col gap-8 mt-2">
      <div className="flex items-center justify-between border-b-2 border-black/40 pb-2 cursor-pointer select-none relative"
       onClick={() => setOpenEduIndex(index === openEduIndex ? -1 : index)}>
       <h4 className="text-xl font-extrabold tracking-wide pe-4">{item.title}</h4>
       <span className="absolute right-0 -bottom-6 w-6 h-6 grid place-items-center rounded-br-lg border border-black/40 text-white font-semibold bg-primary">{openEduIndex === index ? "–" : "+"}</span>
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
  </section>
 );
}

export default ResumeSection;
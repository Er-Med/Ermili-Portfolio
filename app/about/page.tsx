import Image from "next/image";
import MainTitle from "../components/MainTitle";
import SkillRange from "../components/SkillRange";
import ResumeSection from "../components/ResumeSection";
import MainButton from "../components/MainButton";

const page = () => {
 return (
  <div className="grid bg-background xl:ml-[var(--left-sidebar-width)] ">
   <div className="flex flex-col lg:flex-row">
    {/* Left Section */}
    <section className="relative z-20 hidden lg:flex lg:sticky bg-primary/10  top-0  min-w-[40%] lg:h-screen  flex-col gap-6 items-center  p-4 md:px-0 py-[var(--bottom-navbar-height)]">
     {/* <div className="grid-lines -z-10"></div> */}
     <Image src="/Mouha.png"
      width={300}
      height={300}
      alt="mohamed ermili image"
      className=" w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] xl:w-[310px] xl:h-[330px] object-cover object-top rounded-xl rounded-tl-none"
     />
     <div className="flex flex-col gap-10 items-center">
      <div className="flex justify-center items-center gap-2 flex-col ">
       <h4 className="text-4xl md:text-5xl font-bold">Ermili Mohamed</h4>
       <h5 className="text-xl md:text-2xl font-semibold text-primary"> Front-end Developer</h5>
      </div>
      <div className="">
       <MainButton label="Hire Me" />
      </div>
     </div>
    </section>
    {/* Right Section */}
    <section className=" flex-1 pt-[var(--bottom-navbar-height)]  pb-[calc(var(--bottom-navbar-height)+2rem)] px-4 lg:px-12">
     {/* About Me */}
     <div className="flex flex-col gap-24">
      <div className="flex flex-col">
       <MainTitle title="About Me" />
       <p className="text-muted leading-8 lg:pe-4">
        From Morocco, Casablanca. I have rich experience in front-end development with pixel-perfect coding, also I am good at UI/UX design. I love to talk with you about our unique projects. Front-end development services encompass a range of offerings aimed at creating responsive and interactive web applications across digital platforms. Here are some key services typically provided by front-end developers.
       </p>
      </div>
      {/* Professional Skill */}
      <div className="flex flex-col gap-4">
       <MainTitle title="Professional Skill" />
       {/* skills */}
       <div className="flex flex-col md:flex-row gap-16 lg:items-center ps-2">
        <div className="flex flex-1 flex-col gap-8 relative">
         <span className="absolute w-0.5 h-full -left-2 top-1/2 -translate-y-1/2 bg-primary/15 rounded-lg rounded-tl-none"></span>
         <SkillRange number={1} tool="HTML" percent={95} iconSrc="/tools/html.svg" />
         <SkillRange number={2} tool="CSS" percent={95} iconSrc="/tools/css.svg" />
         <SkillRange number={3} tool="Next.js" percent={90} iconSrc="/tools/nextjs.svg" />
         <SkillRange number={4} tool="React" percent={90} iconSrc="/tools/react.svg" />
         <SkillRange number={5} tool="JavaScript" percent={90} iconSrc="/tools/javascript.svg" />
         <SkillRange number={6} tool="Tailwind" percent={90} iconSrc="/tools/tailwind.svg" />
        </div>
        <div className="flex flex-1 flex-col gap-8 relative">
         <span className="absolute w-0.5 h-full -left-2 top-1/2 -translate-y-1/2 bg-primary/15 rounded-lg rounded-tl-none"></span>
         <SkillRange number={7} tool="TypeScript" percent={85} iconSrc="/tools/typescript.svg" />
         <SkillRange number={8} tool="Sass" percent={85} iconSrc="/tools/sass.svg" />
         <SkillRange number={9} tool="Git" percent={85} iconSrc="/tools/git.svg" />
         <SkillRange number={10} tool="Bootstrap" percent={80} iconSrc="/tools/bootstrap.svg" />
         <SkillRange number={11} tool="Figma" percent={75} iconSrc="/tools/figma.svg" />
         <SkillRange number={12} tool="React Native" percent={70} iconSrc="/tools/reactNative.svg" />
        </div>
       </div>
      </div>
     </div>
     {/* Resume */}
     <div className="flex flex-col gap-10 mt-28">
      <MainTitle title="Resume" />
      <ResumeSection />
     </div>
     <div className="flex flex-col gap-10 mt-28">
      {/* <MainTitle title="Testimonial" /> */}
      {/* <TestimonialSection /> */}
     </div>
    </section>
   </div>
  </div>
 );
}

export default page;
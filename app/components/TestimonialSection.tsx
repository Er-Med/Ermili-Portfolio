"use client"
import Image from "next/image";

type Testimonial = {
 name: string;
 role: string;
 avatar: string;
 quote: string;
};

const testimonials: Testimonial[] = [
 {
  name: "Leslie Alexander",
  role: "CEO at Brodie",
  avatar: "/imgme.jpeg",
  quote:
   "I work with Md. Rofiqul Islam on many projects, he always tolda autonai exceeds my expectations with his quality full work and fastestopa Sedanl convallis magna vitae erosnon sollicitudin pulvinar service, very smoothai and simple wor communication.",
 },
 {
  name: "Leslie Alexander",
  role: "CEO at Brodie",
  avatar: "/imgme.jpeg",
  quote:
   "I work with Md. Rofiqul Islam on many projects, he always tolda autonai exceeds my expectations with his quality full work and fastestopa Sedanl convallis magna vitae erosnon sollicitudin pulvinar service, very smoothai and simple wor communication.",
 },
];

const TestimonialSection = () => {
 return (
  <section className="flex flex-col gap-10">
   {testimonials.map((item, index) => (
    <article key={index} className="relative  rounded-xl rounded-tl-none  bg-white  drop-shadow-[0_4px_0_var(--primary)] p-4 md:p-10 shadow-sm">
     <Image src={"/quote.svg"} alt="quote" width={24} height={24} className=" rotate-y-180 absolute top-0 left-0 w-10 h-10 m-4 opacity-25" />
     <Image src={"/quote.svg"} alt="quote" width={24} height={24} className=" absolute bottom-0 right-0 w-10 h-10 m-2 md:m-4 opacity-25" />
     <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-6 md:gap-10 items-start">
      <div className="flex md:flex-col items-center  gap-4 md:gap-5">
       <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-md rounded-tl-none overflow-hidden border-2 border-primary/60">
        <Image src={item.avatar} alt={item.name} fill sizes="96px" className="object-cover" />
       </div>
       <div className="md:text-center">
        <h3 className="text-xl font-extrabold leading-tight">{item.name}</h3>
        <p className="text-sm text-muted">{item.role}</p>
       </div>
      </div>

      <div className="relative">
       <p className="text-base  leading-8 text-muted ">
        "{item.quote}"
       </p>
       {/* <span className="absolute right-0 bottom-0 text-primary text-4xl md:text-5xl select-none">”</span> */}
      </div>
     </div>
    </article>
   ))}
  </section>
 );
}

export default TestimonialSection;
import Image from "next/image";
import { projects } from "@/app/data/projects";
import Link from "next/link";

type PageProps = {
 params: { id: string };
};

export default function ProjectDetailsPage({ params }: PageProps) {
 const project = projects.find((p) => p.id === params.id);

 if (!project) {
  return (
   <div className='xl:ml-[var(--left-sidebar-width)] pb-[calc(var(--bottom-navbar-height)+1rem)] px-4 lg:px-6'>
    <div className="py-12">
     <h1 className="font-display font-bold text-3xl md:text-4xl">Project not found</h1>
     <p className="mt-2 text-muted-foreground">The project you are looking for does not exist.</p>
     <Link href="/portfolio" className="inline-block mt-6 underline">Back to portfolio</Link>
    </div>
   </div>
  );
 }

 return (
  <div className='xl:ml-[var(--left-sidebar-width)] pb-[calc(var(--bottom-navbar-height))]'>
   <div className="flex">
    {/* LEFT: IMAGE */}
    <section className="min-w-[43%] hidden lg:block">
     <div className="sticky top-0 h-[calc(100vh-var(--bottom-navbar-height))]">
      <Image src={project.image} width={520} height={520} alt={project.title} className="w-full h-full object-cover" />
      {/* <div className="">   
      </div> */}
     </div>
    </section>

    {/* RIGHT: DETAILS */}
    <section className="flex-1 px-4 py-8 lg:px-6 lg:py-10">
     <nav className="text-sm mb-6">
      <Link href="/" className="opacity-80 hover:opacity-100">Home</Link>
      <span className="mx-2">/</span>
      <Link href="/portfolio" className="opacity-80 hover:opacity-100">Portfolio</Link>
      <span className="mx-2">/</span>
      <Link href="/portfolio" className="opacity-80 hover:opacity-100">{project.title}</Link>
     </nav>

     <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6">{project.title}</h1>

     {/* Short Description */}
     <p className="leading-7 opacity-90 mb-8 max-w-3xl">{project.shortDescription}</p>

     {/* Short Info Grid */}
     <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-6 border-y">
      <div>
       <p className="text-sm opacity-70">Client:</p>
       <p className="font-medium">{project.shortInfo.client}</p>
      </div>
      <div>
       <p className="text-sm opacity-70">Location:</p>
       <p className="font-medium">{project.shortInfo.location}</p>
      </div>
      <div>
       <p className="text-sm opacity-70">Project Type:</p>
       <p className="font-medium">{project.shortInfo.projectType}</p>
      </div>
      <div>
       <p className="text-sm opacity-70">Duration:</p>
       <p className="font-medium">{project.shortInfo.duration}</p>
      </div>
     </div>

     {/* Overview */}
     <div className="mt-10 max-w-3xl">
      <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">Project Overview</h2>
      <p className="opacity-90 leading-7">{project.overview}</p>
     </div>

     {/* Tools */}
     <div className="mt-10">
      <h3 className="font-display font-bold text-2xl md:text-3xl mb-4">Tools</h3>
      <div className="flex flex-wrap gap-4">
       {project.tools.map((tool) => (
        <div key={tool} className="flex items-center gap-2 border rounded-full px-3 py-2">
         <Image src={`/tools/${tool}.svg`} width={20} height={20} alt={tool} />
         <span className="text-sm capitalize">{tool}</span>
        </div>
       ))}
      </div>
     </div>
    </section>
   </div>
  </div>
 );
}



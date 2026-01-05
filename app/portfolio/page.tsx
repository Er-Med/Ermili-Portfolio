"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { projects, Project } from "../data/projects";

type WebsiteType = "All" | "Landing Page" | "Portfolio" | "Blog/News" | "E-commerce";

const Page = () => {
  const [selectedType, setSelectedType] = useState<WebsiteType>("All");
  const [hoveredProject, setHoveredProject] = useState<Project | null>(projects[0] || null);

  const websiteTypes: WebsiteType[] = ["All", "Landing Page", "Portfolio", "Blog/News", "E-commerce"];

  const filteredProjects = selectedType === "All"
    ? projects
    : projects.filter(project => project.websiteType === selectedType);

  const displayProjects = filteredProjects;

  return (
    <div className='xl:ml-[var(--left-sidebar-width)]  pb-[calc(var(--bottom-navbar-height)+1rem)]'>
      {/* FILTER BUTTONS */}
      <div className="pt-[calc(var(--bottom-navbar-height)-1rem)] px-4 md:px-10 lg:px-0 mb-6 flex flex-wrap gap-3 justify-center">
        {websiteTypes.map((type) => (
          <button
            key={type}
            onClick={() => {
              setSelectedType(type);
              const filtered = type === "All" ? projects : projects.filter(p => p.websiteType === type);
              if (filtered.length > 0) {
                setHoveredProject(filtered[0]);
              }
            }}
            className={`px-4 py-2 rounded-lg border border-dark font-display text-sm uppercase transition-all duration-300 ${selectedType === type
              ? "bg-primary text-white border-primary"
              : "bg-transparent text-dark hover:bg-primary hover:text-white hover:border-primary"
              }`}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="flex">
        {/* LEFT SECTION  */}
        <section className="flex-1 pe-4 md:pe-10 lg:pe-0 gap-4 flex flex-col">
          {/* projects */}
          {displayProjects.length > 0 ? (
            displayProjects.map((project) => (
              <Link
                // href={`/portfolio/${project.id}`}
                href={`/portfolio/${project.id}`}
                key={project.id}
                className="px-4 py-7 lg:px-6 lg:py-9 border border-dark border-s-0  first:border-t-1 rounded-tr-2xl rounded-s-none flex flex-col gap-1 nth-child group relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-primary before:scale-x-0   before:origin-left hover:before:scale-x-100 before:transition-transform before:duration-600 "
                onMouseEnter={() => setHoveredProject(project)}
              >
                <strong className="font-display font-meduim text-primary group-hover:text-white relative z-10">{project.websiteType}</strong>
                <h4 className="font-display font-bold text-2xl md:text-3xl lg:text-3xl xl:text-4xl group-hover:text-white relative z-10 uppercase">{project.title}</h4>
              </Link>
            ))
          ) : (
            <div className="px-4 py-7 lg:px-6 lg:py-9 text-center">
              <p className="font-display text-lg text-muted-foreground">No projects found for this category.</p>
            </div>
          )}
        </section>
        {/* RIGHT SECTION */}
        <section className=" min-w-[50%] lg:min-w-[55%] hidden lg:block">
          <div className="flex justify-center items-start sticky top-0 h-[calc(100vh-var(--bottom-navbar-height))]">
            <div className="transition-all duration-300 ease-in-out pt-[calc(var(--bottom-navbar-height)-1rem)]">
              {hoveredProject && (
                <Image
                  src={hoveredProject.image}
                  width={450}
                  height={400}
                  alt={`${hoveredProject.title} image`}
                  className="rounded-2xl rounded-tl-none drop-shadow-[-4px_5px_0px_var(--primary)] transition-all duration-300 ease-in-out hover:scale-105"
                />
              )}
            </div>
          </div>
        </section>
      </div>

    </div>
  );
};

export default Page;
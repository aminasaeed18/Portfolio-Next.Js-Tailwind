import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub } from "react-icons/bs";

const projects = [
  {
    name: "My Portfolio",
    description:
      "Portfolio site that you are viewing right now :) Developed using Next.js, Tailwind CSS, and Vercel.",
    github: "https://github.com/aminasaeed18/Portfolio-Next.Js-Tailwind/tree/master",
  },
  {
    name: "Ramadan Fasting Assistant",
    description:
      "The app shows prayer times based on the user’s location and provides notifications at key times such as Iftar (time to break fast), Suhoor (time to start fast), and prayers. Developed using Java, Android Studio, Figma, some open-source APIs.",
    github: "https://github.com/aminasaeed18/Ramadan-2020-Application",
  },
  {
    name: "Get Glamour",
    description:
      "App offers various workout methods, workout timers, beauty tips, health hacks, etc. Developed with Java, Android Studio, Figma. It also integrates open APIs to provide dynamic content and data for the features.",
    github: "https://github.com/aminasaeed18/GetGlamour-App",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="my-10 text-center font-bold text-4xl">
          Projects
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-28">
          {projects.map((project, idx) => {
            return (
              <div
                key={idx}
                className="p-6 rounded-lg bg-teal-100 dark:bg-teal-500 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-transform duration-300"
              >
                <SlideUp offset="-300px 0px -300px 0px">
                  <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2">
                    <div className="mt-8">
                      {/* Title in dark mode will be white */}
                      <h1 className="text-4xl font-bold mb-6 text-black dark:text-white">
                        {project.name}
                      </h1>
                      {/* Description in dark mode will be white */}
                      <p className="text-xl leading-7 mb-4 text-black dark:text-white">
                        {project.description}
                      </p>
                      <div className="flex flex-row align-bottom space-x-4">
                        <Link href={project.github} target="_blank">
                          <BsGithub
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </SlideUp>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

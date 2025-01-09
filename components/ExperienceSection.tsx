import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const experience = [
  {
    name: "Citi",
    title: "Appian developer (Feb 2023 - June 2024)",
    description: [
      "Upgraded build environment from Appian-18.2 to Appian-22.1 and migrating the applications to this higher environment cutting build times by 19%.",
      "Developed key features like bulk uploads, file parsing for the existing applications to provide more automation and reduce manual effort.",
      "Fixed critical client issues and blocker bugs, increasing stability. Also resolved over 70 high-severity security vulnerabilities in the codebase.",
      "Developed process reports for most of the existing applications which provide the detailed summary of all the processes their nodes and data flow which reduced bug fix time by 25%.",
    ],
  },
  {
    name: "Cognizant",
    title: "Senior Software Developer (Jan 2022 - Feb 2023)",
    description: [
      "Migrated applications to the latest versions where I replaced more than 300 Appian deprecated/about to deprecate functions with advanced functions making application more reliable and increasing efficiency by up to 30%.",
      "Styled using Tailwind CSSDeveloped 'File sensitivity recognition Automation' feature which became one of the widely used feature throughout the org which was of immense help and time saving for clients where data sensitivity of file/files can be verified immediately after uploading rather than doing the manual comparison",
      "Replaced external plugins with Appian in built functions, my customized function and smart services cutting down the cost of plugins by 100%.",
    ],
  },
  {
    name: "Coforge",
    title: "Software Engineer (Feb 2021 - Jan 2022)",
    description: [
      "Redesigned and redeveloped partially working 'ACS file cloning' feature which was failing if more than 4 files needed to be cloned at the same point but now it can clone 1000’s of files at a time with 100% success rate.",
      "Enhanced functionality and responsiveness by integrating APIs with application using OAuth 2.0 Client Credentials grant, improving security and data management.",
      "Built and optimized 100’s of Appian components like interfaces, process models, process analytics, records, reports and sites improving website user experience.",
    ],
  },
  {
    name: "IIT Bombay",
    title: "Android developer Intern (Aug 2020 - Jan 2021)",
    description: [
      "Contributing to projects aimed at providing free education and water supplies to underprivileged communities in remote areas.",
      "Played a key role in integrating live classes into the application, enabling offline access to educational content in areas with no network connectivity.",
      "Led a team of interns, performing code reviews and ensuring high-quality deliverables across the projects.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experiences">
      <h1 className="my-10 text-center font-bold text-4xl">
        Experience
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {experience.map((experience, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-1">
                  <div className="mt-8 md:w-1/1">
                    <h1 className="text-4xl font-bold mb-6">{experience.name}</h1>
                    <h1 className="text-1.5xl font-bold mb-6">{experience.title}</h1>
                    {/* Bullet points are already in a list format */}
                    <ul className="list-disc pl-6">
                      {/* Apply the color dynamically based on dark mode */}
                      {experience.description.map((point, i) => (
                        <li
                          key={i}
                          className="mb-2 text-gray-800 dark:text-white"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-row align-bottom space-x-4"></div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ExperienceSection;

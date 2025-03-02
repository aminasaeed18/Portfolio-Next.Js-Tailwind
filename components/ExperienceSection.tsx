import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const experience = [
  {
    name: "Wipro",
    title: "Sr Software Engineer (June 2024 - Oct 2024)",
    description: [
      "Acted as both a Senior team member and an individual contributor, worked on code optimization and processing efficiency. Resolved over 70 high-severity client issues and blocker bugs.",
      "Designed and developed a RESTful APIs using Spring Boot. Utilized Java 11, Spring Web, and Hibernate to handle requests and interact with the database efficiently.",
      "Ensured security and authentication by implementing SAML and OAuth 2.0 authentication protocols, enabling Single Sign-On(SSO) and secure access to APIs.",
    ],
  },
  {
    name: "Citi",
    title: "Senior developer (Feb 2023 - June 2024)",
    description: [
      "Created custom File parsers for large data files, ensuring efficient parsing, and processing while optimizing memory.",
      "Integrated Amazon S3 for cloud-based file management, improving storage efficiency and reducing server load by 25%.",
      "Redesigned and enhanced the 'Process cloning' feature to successfully clone thousands of files at a time with 100% success rate.",
    ],
  },
  {
    name: "Cognizant",
    title: "Senior Software Developer (Jan 2022 - Feb 2023)",
    description: [
      "Utilized Retrofit to interact with REST APIs, handling asynchronous requests to fetch and parse data in various formats (JSON, XML, etc.) and update the UI accordingly.",
      "Developed 'File sensitivity recognition Automation' feature, a widely used time-saving tool for clients to verify data sensitivity immediately after uploading.",
      "Eliminated external plugin dependency by developing custom Appian functions and smart services, reducing costs by 100%.",
    ],
  },
  {
    name: "Coforge",
    title: "Software Engineer (Feb 2021 - Jan 2022)",
    description: [
      "Utilized Room Database (SQLite) for storing metadata and ExoPlayer for offline video playback.",
      "Collaborated with cross-functional teams to improve app architecture, using MVP and MVVM patterns to separate concerns and enhance code testability and maintainability.",
      " Upgraded build environment from Appian-18.2 to Appian-22.1 and migrating the applications to this higher environment cutting build times by 19%.",
    ],
  },
  {
    name: "IIT Bombay",
    title: "Android developer Intern (Aug 2020 - Jan 2021)",
    description: [
      "Developed and maintained Android applications using Java, leveraging the Android SDK and Jetpack components to implement core features and functionalities, ensuring high performance and user engagement.",
      "Gained exposure to agile development processes and version control tools like Git.",
      "Worked with Android lifecycle management (Activities, Fragments, Services, Broadcast Receivers), ensuring smooth app flow and memory optimization.",
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

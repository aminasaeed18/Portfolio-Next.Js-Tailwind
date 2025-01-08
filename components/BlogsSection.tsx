import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";

const BlogsSection = () => {
  return (
    <section id="blogs">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          Blogs
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col md:flex-row items-center md:items-start space-y-10 md:space-x-10 md:space-y-0 md:p-4 md:text-left">
          {/* Text Section - at the top */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-2xl font-bold mb-6">Check out my blogs at Medium and Blogger!</h1>
            <br />
          </div>

          {/* Girl Image Section - aligned beside Medium and Blogger logos
          <div className="relative hidden md:block">
            <Image
              src="/girlblogger.png"
              alt="Girl"
              width={325}
              height={325}
              className="md:absolute md:bottom-4 md:left-40 md:z-0"
            />
          </div> */}
        </div>

        {/* Medium and Blogger Images Section - at the bottom */}
        <div className="flex flex-col items-center space-y-4 md:space-y-0 md:space-x-10 md:flex-row md:items-start">
          {/* Blogger Image with link */}
          <a
            href="https://www.blogger.com/profile/13504811589058911958"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center animate-bounce"
          >
            <Image
              src="/bloggerLogo.png" // Path to your Blogger image
              alt="Blogger"
              width={150}
              height={50}
            />
          </a>

          {/* Medium Image with link */}
          <a
            href="https://medium.com/@aminasyeed"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center animate-bounce"
          >
            <Image
              src="/mediumLogo.png" // Path to your Medium image
              alt="Medium"
              width={150}
              height={50}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;

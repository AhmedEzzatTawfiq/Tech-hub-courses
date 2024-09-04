"use client";
import React from "react";

const Hero = () => {
  const smoothScroll = (event, target) => {
    event.preventDefault();
    const element = document.querySelector(target);
    element.scrollIntoView({ behavior: 'smooth' });
  
    // Optional: Adjust window location after scrolling
    setTimeout(() => {
      window.location.hash = target;
    }, 500); // 500ms = 0.5s
  };
  
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:max-h-screen">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Access All Your Courses
            <strong className="font-extrabold text-primary sm:block">
            with just a Single Click
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
          Start Advancing Your Coding Skills Today!
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-1/2 rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow focus:outline-none focus:ring cursor-pointer"
              onClick={(e) => smoothScroll(e, '#courses')}
            >
              Get Started
            </a>

            {/* <a
              className="block w-full rounded px-12 py-3 text-sm font-medium text-primary shadow hover:text-primary focus:outline-none focus:ring sm:w-auto"
              href="#"
            >
              Learn More
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

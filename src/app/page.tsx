"use client"

import Image from "next/image";
import Nav from "~/components/Nav";
import { FaGithub, FaInstagram, FaDiscord, FaEnvelope, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { projectsArray } from "~/misc/projects";
import { useState } from "react";
import Project from "~/components/Project";

export default function Home() {

  const projects = projectsArray

  const [currentProject, setCurrentProject] = useState(0)

  const handleNext = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const handlePrev = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <main className="bg-[#00000a] text-slate-100 flex flex-col min-h-screen">
      <Nav />
      {/* Home */}
      <section className="flex flex-grow items-center justify-center min-h-screen border-b border-slate-200" id="home">
        <div className="text-center max-w-2xl px-4">
          <p className="font-semibold text-lg text-slate-400">Hi, my name is</p>
          <h1 className="text-6xl font-bold text-white">Flack.</h1>
          <h2 className="text-5xl font-bold text-slate-200 mt-2">
            Welcome to my website!
          </h2>
          <p className="text-slate-400 text-lg mt-8 leading-relaxed">
            Hello👋, I am Dmitriy, aka Flack, and I&apos;m a{" "}
            <span className="text-white font-medium">Front-end Web Developer</span>.
            I build things for the web to provide the best{" "}
            <span className="text-white font-medium">User Experience</span> possible.
            <br />
            I am a <span className="text-white font-medium">fast learner</span>, always
            looking to improve and learn new technologies.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="h-screen flex items-center justify-center px-8 border-b border-slate-200" id="about">
        <div className="max-w-4xl flex flex-col md:flex-row gap-12 items-center">
          <Image src={'/image.jpg'} alt="Profile Image" width={256} height={256} className="rounded-lg" />
          <div className="text-slate-100">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg leading-relaxed">
              I am a 17-year-old programmer and front-end web developer. My primary focus is to create responsive, user-friendly websites
              that follow modern technologies and provide the best experience possible.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              My other interests include math, game development, and playing the guitar. While web development fuels
              my professional journey, I&apos;m also excited about branching into new realms.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              I&apos;m diving into game development and exploring the exciting world of 3d modelling in Blender. I am
              currently learning languages like C++, Python, and Dart to create different cool and useful applications.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="min-h-screen bg-[#00000a] flex items-center border-b border-slate-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">My Projects</h2>
          <div className="flex items-center justify-center">
            <button
              onClick={handlePrev}
              className="bg-[#1a1a2e] hover:bg-[#16213e] text-white font-semibold p-3 rounded-full transition mr-4"
              aria-label="Previous project"
            >
              <FaChevronLeft />
            </button>
            <div className="w-full max-w-2xl">
              <Project {...projects[currentProject]} />
            </div>
            <button
              onClick={handleNext}
              className="bg-[#1a1a2e] hover:bg-[#16213e] text-white font-semibold p-3 rounded-full transition ml-4"
              aria-label="Next project"
            >
              <FaChevronRight />
            </button>
          </div>
          <div className="flex justify-center mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`h-4 w-4 rounded-full mx-1 ${
                  index === currentProject ? "bg-[#4a5568]" : "bg-[#2d3748]"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="min-h-screen bg-[#00000a] flex items-center justify-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Get in Touch with Me</h2>
          <div className="bg-[#1a1a2e] rounded-lg p-8 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <a
                href="https://github.com/FlackCode"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-slate-950 hover:scale-105 text-white font-semibold py-3 px-6 rounded-lg transition"
              >
                <FaGithub className="text-2xl" /> GitHub
              </a>
              <a
                href="https://www.instagram.com/_.flack/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-slate-950 hover:scale-105 text-white font-semibold py-3 px-6 rounded-lg transition"
              >
                <FaInstagram className="text-2xl" /> Instagram
              </a>
            </div>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-gray-400">
                <FaDiscord className="text-2xl" />
                <span>Discord: flackkkk</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <FaEnvelope className="text-2xl" />
                <span>Email: flckonfn@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

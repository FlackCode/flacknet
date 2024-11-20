"use client"

import { useState } from "react"
import Project from "./Project"
import { ProjectProps } from "~/types"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

export default function Projects() {
  const projects: ProjectProps[] = [
    {
      image: "/pong.png",
      name: "Pong",
      description: "Pong game made in C++",
      github: "https://github.com/FlackCode/PongCPP",
      live: "",
    },
    {
      image: "/devmedia.png",
      name: "DevMedia",
      description: "DevMedia Welcome to DevMedia! This is a full-stack social media platform built using modern technologies.",
      github: "https://github.com/FlackCode/t3SocialMediaApp",
      live: "https://t3-social-media-app.vercel.app",
    },
    {
      image: "/fasttype.png",
      name: "FastType.net",
      description: "Typemonkey type website to find out your wpm and potentially train and improve your typing speed.",
      github: "https://github.com/FlackCode/fastType.net",
      live: "https://fast-type-net.vercel.app/",
    },
    {
      image: "",
      name: "Styleshare",
      description: "E-Commerce type website made using NextJS, Zustand and Firebase!",
      github: "https://github.com/FlackCode/StyleShare_v3",
      live: "",
    },
    {
      image: "",
      name: "Flutter Chat App",
      description: "Chat application made using firebase, flutter & dart",
      github: "https://github.com/FlackCode/FlutterChatApp",
      live: "",
    },
  ]

  const [currentProject, setCurrentProject] = useState(0)

  const handleNext = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const handlePrev = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section id="projects" className="min-h-screen bg-[#00000a] flex items-center">
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
  )
}

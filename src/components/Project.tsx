import Image from "next/image"
import { ProjectProps } from "~/types"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

export default function Project({ image, name, description, github, live }: ProjectProps) {
  return (
    <div className="bg-[#1a1a2e] rounded-lg overflow-hidden shadow-lg">
      {image && (
        <div className="relative h-64 w-full">
          <Image src={image} alt={name} layout="fill" objectFit="cover" />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-white">{name}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex justify-between">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-slate-950 hover:scale-105 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            <FaGithub /> GitHub
          </a>
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-950 hover:scale-105 text-white font-semibold py-2 px-4 rounded-lg transition"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

import Image from "next/image";
import Nav from "~/components/Nav";

export default async function Home() {
  return (
    <main className="bg-[#00000a] text-slate-100 flex flex-col min-h-screen">
      <Nav />
      {/* Home */}
      <section className="flex flex-grow items-center justify-center min-h-screen" id="home">
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
      <section className="h-screen flex items-center justify-center bg-[#00000a] px-8" id="about">
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

    </main>
  );
}

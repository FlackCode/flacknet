export default function AboutAccordion() {
    return(
        <>
        <div className="collapse collapse-arrow bg-base-100 shadow-md">
          <input type="radio" name="my-accordion-2" defaultChecked /> 
          <div className="collapse-title text-xl font-medium">
            Tech Stack:
          </div>
          <div className="collapse-content"> 
            <p>I specialize in building web applications using <span className="underline text-sky-500 font-bold">React</span> and <span className="underline text-blue-500 font-bold">Tailwind CSS.</span> 
                These technologies allow me to craft responsive, modern interfaces that enhance user experiences. 
                However, I'm always eager to explore and incorporate new tools and frameworks into my projects.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 shadow-md">
          <input type="radio" name="my-accordion-2" /> 
          <div className="collapse-title text-xl font-medium">
            Other passions:
          </div>
          <div className="collapse-content"> 
            <p>While web development fuels my professional journey, I'm also excited about branching out into new realms. 
                I'm diving into game development and exploring the exciting world of machine learning. 
                I am currently learning languages like C++, Python, and Mojo, and I'm eager to learn these skills to create immersive gaming experiences and explore the frontiers of AI.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 shadow-md">
          <input type="radio" name="my-accordion-2" /> 
          <div className="collapse-title text-xl font-medium">
            Let's Connect:
          </div>
          <div className="collapse-content"> 
            <p>Whether you're here to collaborate, share ideas, or just geek out about tech, I'm always open to new opportunities and challenges. 
                Let's innovate together and make meaningful contributions to the digital landscape.</p>
          </div>
        </div>
        </>
    )
}
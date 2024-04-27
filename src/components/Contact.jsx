export default function Contact() {
    return (
        <>
        <div className="hero min-h-screen bg-base-100">
          <div className="hero-content text-center">
            <div className="max-w-xl">
              <h1 className="text-5xl font-bold">Contact me</h1>
              <p className="py-6">You can contact me via Email, Instagram or Discord. 
              I am mainly active on the last two but i try to check my email from time to time.
              Always open to collaborations and working in a team to create something beautiful, send me a message and let's work!
              My discord is: @flackkkk</p>
              <div className="flex justify-center gap-6">
                <a href="mailto:fl4ckc0de@gmail.com"><button className="btn btn-outline rounded-md xl:w-32 md:w-24">Email Me</button></a>
                <a href="https://www.instagram.com/flackwav/"><button className="btn btn-outline rounded-md xl:w-32 md:w-24">Instagram</button></a>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}
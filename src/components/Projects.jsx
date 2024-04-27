import resumeIMG from '../image/resume.png'
import shopIMG from '../image/shop.png'
import personalIMG from '../image/personal.png'
export default function Projects() {
    return(
        <>
        <div className="hero min-h-screen bg-base-100 border-b-2">
            <div className="hero-content flex-col">
                <h1 className="text-5xl font-bold py-6">Projects</h1>
                <p className="py-6">Here i have a display of my projects that i am the most proud of. This will be an always updating section and i will keep adding more to it.</p>
                <div className='flex flex-col gap-12'>
                    <div className="card lg:card-side bg-base-100 shadow-xl border-2">
                      <figure><img src={personalIMG} alt="Album"/></figure>
                      <div className="card-body xl:w-4/5 xsm:w-full">
                        <h2 className="card-title">Personal Page</h2>
                        <p>My personal page where i will be keeping track of my new projects and adding more information about me as time goes by.
                            Also the page you are currently viewing!
                        </p>
                        <div className="card-actions justify-end">
                            <a href="https://github.com/FlackCode/PersonalPage" target='_blank'>
                                <button className="btn btn-outline rounded-md">Click to view source code</button></a>
                        </div>
                      </div>
                    </div>
                    <div className="card lg:card-side bg-base-100 shadow-xl border-2">
                      <figure><img src={resumeIMG} alt="Album"/></figure>
                      <div className="card-body xl:w-4/5 xsm:w-full">
                        <h2 className="card-title">Resume Builder</h2>
                        <p>A small project i have worked on to showcase my React and Tailwind knowledge. 
                            A fully functional CV Maker, with the ability of downloading the document that you've made.</p>
                        <div className="card-actions justify-end">
                            <a href="https://odin-cv-app-indol.vercel.app" target='_blank'>
                                <button className="btn btn-outline rounded-md">Click to view page</button></a>
                            <a href="https://github.com/FlackCode/odin_CVApp" target='_blank'>
                                <button className="btn btn-outline rounded-md">Click to view source code</button></a>
                        </div>
                      </div>
                    </div>
                    <div className="card lg:card-side bg-base-100 shadow-xl border-2">
                      <figure><img src={shopIMG} alt="Album"/></figure>
                      <div className="card-body xl:w-4/5 xsm:w-full">
                        <h2 className="card-title">Shopping Page</h2>
                        <p>Another small project i've worked on to showcase my progress and knowledge. 
                            Learned context-api and implemented full shopping cart functionality. 
                            Planning to rework the website in the future for a cleaner and more professional look as currently the only good thing about it is it's functional.</p>
                        <div className="card-actions justify-end">
                            <a href="https://agc-store.vercel.app" target='_blank'>
                                <button className="btn btn-outline rounded-md">Click to view page</button></a>
                            <a href="https://github.com/FlackCode/odin_StoreTailwind" target='_blank'>
                                <button className="btn btn-outline rounded-md">Click to view source code</button></a>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
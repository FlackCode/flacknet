import image from '../image/image.jpg'
import AboutAccordion from './AboutAccordion'
export default function About() {
    return(
        <>
        <div className="hero min-h-screen bg-base-100 border-b-2">
        <div className="hero-content flex-col">
            <h1 className="text-5xl font-bold underline">About me</h1>
            <div className='hero-content flex-col lg:flex-row md:max-w-5xl xsm:max-w-sm gap-16'>
                <img src={image} className="md:max-w-sm rounded-lg shadow-2xl" />
                <div>
                  <h1 className="text-5xl font-bold xl:text-left xsm:text-center">Hi, I'm Dmitriy, aka Flack!</h1>
                  <p className="py-6 xl:text-left xsm:text-center">Welcome to my corner of the web. I'm a frontend web developer with a passion for creating sleek and user-friendly applications. Over the last three years, I've honed my skills through dedicated IT courses, making me a knowledgeable PC user and a quick adapter to emerging technologies.</p>
                </div>
            </div>
            <AboutAccordion />
          </div>
        </div>
        </>
    )
}
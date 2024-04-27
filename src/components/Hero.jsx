export default function Hero() {
    return(
        <>
        <div className="hero min-h-screen bg-base-100 border-b-2">
            <div className="hero-content text-center">
                <div className="xl:max-w-xl md:max-w-md text-left">
                    <p>Hey, my name is</p>
                    <h1 className="text-5xl font-bold">Dmitriy.</h1>
                    <h1 className="text-5xl font-bold">Welcome to my portfolio</h1>
                    <p className="py-6">I'm a 17 year old programmer and front-end web developper. My other interests include Math, Game Development and Machine AI Learning.</p>
                    <div className="flex justify-between">
                        <a href="https://github.com/FlackCode" target="_blank"><button className="btn btn-outline rounded-md xl:w-32 md:w-24">Github</button></a>
                        <a href="https://twitter.com/flackjsx" target="_blank"><button className="btn btn-outline rounded-md xl:w-32 md:w-24">Twitter/X</button></a>
                        <a href="https://www.instagram.com/flackwav/" target="_blank"><button className="btn btn-outline rounded-md xl:w-32 md:w-24">Instagram</button></a>
                        <a href="https://www.youtube.com/channel/UCV5DS_mBLPdfjpyrTFWYVBg" target="_blank"><button className="btn btn-outline rounded-md xl:w-32 md:w-24">Youtube</button></a>
                    </div>
                </div>
            </div>
        </div>
        </>
    ) 
}
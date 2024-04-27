import siteIcon from '../image/reactt.svg'
import { BsEnvelope } from 'react-icons/bs'
export default function Navbar() {
    return (
        <>
        <div className="navbar bg-base-100 border-b-2 sticky top-0 z-20">
            <div className="navbar-start xl:px-6 flex gap-4 items-center">
                <img src={siteIcon} alt="Site Icon" className='w-8'/>
                <h1 className="xl:text-3xl font-bold">flack.net</h1>
            </div>
            <div className="navbar-end">
                <button className="btn bg-white rounded-xl" onClick={() => window.location.href = 'mailto:fl4ckc0de@gmail.com'}><BsEnvelope/> Hire me</button>
            </div>
        </div>
        </>
    )
}
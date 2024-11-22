"use client"

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({behavior: "smooth"});
        }
        setIsMenuOpen(false);
    }

    const navItems = ["Home", "About", "Projects", "Contact"];

    return (
        <div className="bg-[#00000a] w-full flex flex-col sm:flex-row justify-between items-center tracking-wide font-semibold px-4 sm:px-6 lg:px-16 py-4 border-b border-slate-200 fixed z-10">
            <div className="flex justify-between items-center w-full sm:w-auto">
                <h1 className="text-xl">flack.net</h1>
                <button 
                    className="sm:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
            <nav className={`${isMenuOpen ? 'flex' : 'hidden'} sm:flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 sm:mt-0 w-full sm:w-auto`}>
                {navItems.map((item) => (
                    <p
                        key={item}
                        onClick={() => scrollToSection(item.toLowerCase())}
                        className="transition-all duration-150 hover:cursor-pointer hover:scale-105 hover:text-slate-200 text-center sm:text-left"
                    >
                        {item}
                    </p>
                ))}
            </nav>
        </div>
    )
}

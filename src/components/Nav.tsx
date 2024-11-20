"use client"

export default function Nav () {
    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({behavior: "smooth"});
        }
    }

    return (
        <div className="bg-[#00000a] w-full flex tracking-wide font-semibold px-16 py-4 border-b border-slate-200 fixed z-10">
            <div className="flex items-end gap-6">
                <h1 className="text-xl">flack.net</h1>
                <nav className="flex gap-6">
                    {["Home", "About", "Projects", "Contact"].map((item) => (
                        <p
                            key={item}
                            onClick={() => scrollToSection(item.toLowerCase())}
                            className="transition-all duration-150 hover:cursor-pointer hover:scale-105 hover:text-slate-200"
                        >
                            {item}
                        </p>
                    ))}
                </nav>
            </div>
        </div>
    )
}

export default function Nav () {
    return (
        <div className="w-full flex tracking-wide font-semibold px-16 py-4">
            <div className="flex items-end gap-6">
                <h1 className="text-xl">flack.net</h1>
                <nav className="flex gap-6">
                    {["Home", "About", "Projects", "Contact"].map((item) => (
                        <p
                            key={item}
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

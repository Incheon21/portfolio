"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

type Props = {};


const Navbar: React.FC<Props> = () => {
    const [shadow, setShadow] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

return (
    <nav className={`fixed h-[80px] w-full bg-gray-100 align-middle items-center flex z-20 transition-shadow duration-300 ${shadow ? "shadow-lg" : ""}`}>
        <div className="text-black font-medium w-full mx-8 sm:mx-20 flex justify-between">
            <div className="">
                <a href="#home" className="font-bold hover:scale-[1.05] transition-all duration-100">
                    <div className="hover:scale-[1.05] transition-all duration-100">
                        <Image src="/Alvin.png" alt="Alvin" width={20} height={20} />
                    </div>
                </a>
            </div>
            <div className="sm:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
                    {isMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>

                    )}
                </button>
            </div>
            <div className={`flex-col shadow-lg sm:shadow-none sm:flex-row sm:flex gap-12 items-center absolute sm:static top-[80px] left-0 right-0 sm:top-0 bg-gray-100 sm:bg-transparent transition-all duration-300 ${isMenuOpen ? "flex pb-6" : "hidden"}`}>
                <a href="#About" className="hover:scale-[1.05] hover:underline hover:text-purple-400 transition-all duration-0.75">About</a>
                <a href="#Skills" className="hover:scale-[1.05] hover:underline hover:text-purple-400 transition-all duration-0.75">Skills</a>
                <a target="_blank" href="https://drive.google.com/file/d/1jRM37hqPG6Ff6ZGA-84hd8E-0U3qEIxz/view?usp=sharing" className="hover:scale-[1.05] hover:underline hover:text-purple-400 transition-all duration-0.75">Resume/CV</a>
            </div>
        </div>
    </nav>
)
}

export default Navbar;
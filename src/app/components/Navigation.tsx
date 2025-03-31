"use client"
import React, { useRef, useState, useEffect, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import * as motion from "motion/react-client"
import { Syne } from 'next/font/google'

// import { ThemeContext } from "../context/ThemeContext";
import { ThemeContext } from './ThemeContext';
import { useParams, usePathname } from 'next/navigation';
import { useRouter } from 'next/router';

const syne = Syne({
    weight: ['400', '700'],
    subsets: ['latin'],
})

export default function Nav() {
    const pathname = usePathname(); // Get the current path

    // console.log("Current Path:", pathname);


    const { theme, toggleTheme } = useContext(ThemeContext);

    const mobileMenu = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleButtonClick = () => {
        // const Menu = mobileMenu.current;
        // setIsOpen(!prevState)
        setIsOpen((prevState) => !prevState)
    }

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

    const handleMouseEnter = (menu: string) => setHoveredMenu(menu);
    const handleMouseLeave = () => setHoveredMenu(null)

    const vibrateOnMobile = () => {
        if (typeof window !== "undefined" && typeof window.navigator.vibrate === "function") {
            navigator.vibrate(50); // Vibrates for 50ms
        }
    };

    // Apply theme and save it to localStorage
    useEffect(() => {
        if (typeof window !== "undefined") {
            document.documentElement.classList.remove("light", "dark");
            document.documentElement.classList.add(theme);
            localStorage.setItem("theme", theme);
        }
    }, [theme]);


    // console.log("param", param.slug)


    return (

        <div className="gnotis--navigation">
            <div className="px-4 lg:px-16 xl:px-20 flex items-center justify-between py-4 lg:py-10 relative">
                <Link href="/" className="logo duration-300 ease-linear hover:scale-105 scale-100 lg:hover:scale-100" onClick={vibrateOnMobile} onFocus={vibrateOnMobile}>
                    <Image
                        className='w-32 lg:w-56'
                        // src="/logo-light.svg"
                        src={theme === "dark" ? "/logo-dark.svg" : "/logo-light.svg"}
                        alt="gnotis logo"
                        width="200"
                        height="50"
                        unoptimized={true}
                        quality={100}
                    />

                </Link>

                <div className="flex gap-7 lg:hidden">
                    <div className='group' onClick={toggleTheme}>
                        <input type="checkbox" className="sr-only" id="darkmode-toggle" onChange={() => { toggleTheme(); vibrateOnMobile(); }} onFocus={vibrateOnMobile} />
                        <label htmlFor="darkmode-toggle" className="toggle dark:border-gray-700 dark:text-gray-400">
                            <span className={`transition-all group-hover:scale-105 duration-200 ${theme === 'dark' ? '!left-8' : ''}`}>Toggle dark mode</span>
                        </label>
                    </div>

                    <div className="menu-button inline-flex" onClick={() => { handleButtonClick(); vibrateOnMobile(); }} onFocus={vibrateOnMobile}>
                        <div className={`menu btn2 ${isOpen ? 'open' : ''}`} data-menu="2">
                            <div className="icon"></div>
                        </div>
                    </div>
                </div>

                <div className="navbar-right hidden lg:flex flex-col lg:flex-row items-center gap-5 lg:gap-10">
                    <ul className='flex flex-col lg:flex-row items-center gap-5 lg:gap-7'>
                        <li className='relative py-2 px-4'> 
                        <Link 
                            href="/about"  
                            className={`relative dark:text-gray-300 dark:hover:bg-gray-900 rounded font-bold 
                                after:absolute after:-bottom-1 after:bg-gray-950 after:h-px after:scale-0 
                                hover:after:scale-100 after:w-full after:left-0 after:transition after:origin-left 
                                ${pathname === "/about" ? "text-sky-500 dark:text-sky-500 font-bold" : ""}`}
                            >
                            About
                        </Link>
                        </li>

                        <li className='relative py-2 px-4' onMouseEnter={() => handleMouseEnter("services")}
                            onMouseLeave={handleMouseLeave}>
                            <Link 
                            href="#"  
                            className={`relative dark:text-gray-300 dark:hover:bg-gray-900 rounded font-bold 
                                after:content-[''] after:absolute after:-bottom-1 after:bg-gray-950 after:h-px after:scale-0 
                                hover:after:scale-100 after:w-full after:left-0 after:transition after:origin-left 
                                ${["/infrastructure-service", "/sales-marketing-outsourcing", "/business-process-outsourcing", "/staff-augmentation", "/erp-solutions"].includes(pathname) ? "text-sky-500 dark:text-sky-500 font-bold" : ""}`}
                            >Services</Link>

                            {/* Dropdown Menu */}
                            {/* {isHovered && ( */}

                            {hoveredMenu === "services" && (

                                <div
                                    className='dropdown-menu top-full left-1/2 -translate-x-1/2 w-72 pt-3'
                                    style={{ zIndex: 9999, position: 'absolute' }}
                                >
                                    <motion.ul className="rounded-2xl bg-white dark:bg-gray-800 p-5 lg:p-4 absolute shadow-lg space-y-2 z-50  origin-top"
                                        initial={{ scale: 0.1, opacity: 0 }} animate={{
                                            scale: hoveredMenu ? 1 : 0.1,
                                            opacity: hoveredMenu ? 1 : 0
                                        }}
                                        transition={{
                                            duration: 0.25,
                                            scale: { type: "spring", visualDuration: 0.35, bounce: 0.4 },
                                        }}
                                    >
                                        <li>
                                            <Link href="infrastructure-service" className={`py-2 lg:py-2 block px-4 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900 rounded w-full ${pathname === "/infrastructure-service" ? "text-sky-500 dark:text-sky-500 font-bold" : ""}`}>IT Infrastructure Maintenance (Dispatch Services)</Link>
                                        </li>
                                        <li>
                                            <Link href="sales-marketing-outsourcing" className={`py-2 lg:py-2 block px-4 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900 rounded w-full ${pathname === "/sales-marketing-outsourcing" ? "text-sky-500 dark:text-sky-500 font-bold" : ""}`}>Sales & Marketing Outsourcing</Link>
                                        </li>
                                        <li>
                                            <Link href="business-process-outsourcing" className={`py-2 lg:py-2 block px-4 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900 rounded w-full ${pathname === "/business-process-outsourcing" ? "text-sky-500 dark:text-sky-500 font-bold" : ""}`}>Business Process Outsourcing</Link>
                                        </li>
                                        <li>
                                            <Link href="staff-augmentation" className={`py-2 lg:py-2 block px-4 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900 rounded w-full ${pathname === "/staff-augmentation" ? "text-sky-500 dark:text-sky-500 font-bold" : ""}`}>Staff Augmentation</Link>
                                        </li>
                                        <li>
                                            <Link href="erp-solutions" className={`py-2 lg:py-2 block px-4 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900 rounded w-full ${pathname === "/erp-solutions" ? "text-sky-500 dark:text-sky-500 font-bold" : ""}`}>ERP Solutions</Link>
                                        </li>

                                    </motion.ul>
                                </div>

                            )}
                        </li>

                        <li className='relative py-2 px-4' onMouseEnter={() => handleMouseEnter("products")}
                            onMouseLeave={handleMouseLeave}>
                            <Link 
                            href="#"  
                            className={`relative dark:text-gray-300 dark:hover:bg-gray-900 rounded font-bold 
                                after:content-[''] after:absolute after:-bottom-1 after:bg-gray-950 after:h-px after:scale-0 
                                hover:after:scale-100 after:w-full after:left-0 after:transition after:origin-left 
                                ${["/gnotis-labs", "/gnotis-catalyze"].includes(pathname) ? "text-sky-500 dark:text-sky-500 font-bold" : ""}`}
                            >Programs</Link>

                            {/* Dropdown Menu */}

                            {hoveredMenu === "products" && (

                                <div
                                    className='dropdown-menu top-full left-1/2 -translate-x-1/2 w-60 pt-3'
                                    style={{ zIndex: 9999, position: 'absolute' }}
                                >
                                    <motion.ul className="rounded-2xl bg-white dark:bg-gray-800 p-5 lg:p-4 absolute shadow-lg space-y-2 z-50  origin-top w-full"
                                        initial={{ scale: 0.1, opacity: 0 }} animate={{
                                            scale: hoveredMenu ? 1 : 0.1,
                                            opacity: hoveredMenu ? 1 : 0
                                        }}
                                        transition={{
                                            duration: 0.25,
                                            scale: { type: "spring", visualDuration: 0.35, bounce: 0.4 },
                                        }}
                                    >
                                        <li>
                                            <Link href="/gnotis-labs" className={`py-2 lg:py-2 block px-4 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900 rounded w-full ${pathname === "/gnotis-labs" ? "text-sky-500 dark:text-sky-500 font-bold" : ""}`}>Gnotis Labs</Link>
                                        </li>
                                        <li>
                                            <Link href="/gnotis-catalyze" className={`py-2 lg:py-2 block px-4 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900 rounded w-full ${pathname === "/gnotis-catalyze" ? "text-sky-500 dark:text-sky-500 font-bold" : ""}`}>Gnotis Catalyze</Link>
                                        </li>
                                    </motion.ul>
                                </div>
                            )}
                        </li>
                    </ul>

                    <Link href="contact" className={`btn-66 px-5 lg:px-8 text-xs tracking-wide font-bold relative ${syne.className}`}>Talk To Us <div className="bbi-button-flash"></div></Link>

                    <div className='group' onClick={toggleTheme}>
                        <input type="checkbox" className="sr-only" id="darkmode-toggle" onChange={toggleTheme} />
                        <label htmlFor="darkmode-toggle" className="toggle dark:border-gray-700 dark:text-gray-400">
                            <span className={`transition-all group-hover:scale-105 duration-200 ${theme === 'dark' ? '!left-8' : ''}`}>Toggle dark mode</span>
                        </label>
                    </div>


                </div>

                {isOpen &&
                    <div className="absolute left-0 w-full flex flex-col lg:flex-row items-center gap-5 lg:gap-10 top-full bg-white dark:bg-gray-900 z-10 p-5" style={{ zIndex: 9999 }} ref={mobileMenu}>
                        <ul className='flex flex-col lg:flex-row items-center w-full divide-y divide-gray-300 dark:divide-gray-800 text-center'>
                            <li className='w-full py-3 hover:bg-slate-400 rounded-lg ease-in-out duration-75'>
                                <Link className={`focus:text-sky-500 focus:scale-105 transition block dark:text-gray-300 ${pathname === "/about" ? "text-sky-500 dark:text-sky-500 font-bold" : ""}`}
                                    onClick={() => { handleLinkClick(); vibrateOnMobile(); }}
                                    onFocus={vibrateOnMobile}

                                    href="about">About</Link>
                            </li>

                            <li className='w-full py-3'>
                                <Link className={`focus:text-sky-500 focus:scale-105 transition block dark:text-gray-300                                 ${["/infrastructure-service", "/sales-marketing-outsourcing", "/business-process-outsourcing", "/staff-augmentation", "/erp-solutions"].includes(pathname) ? "text-sky-500 dark:text-sky-500 font-bold" : ""}`}
                                    onClick={() => { handleLinkClick(); vibrateOnMobile(); }}
                                    onFocus={vibrateOnMobile}

                                    href="">Services</Link>

                                <ul className="p-5 lg:p-4 space-y-1 z-50 bg-gray-100 dark:bg-gray-800 mt-3">
                                    <li className='hover:bg-slate-400 rounded-lg ease-in-out duration-75'> <Link onClick={() => { handleLinkClick(); vibrateOnMobile(); }} onFocus={vibrateOnMobile} href="infrastructure-service" className={`focus:text-sky-500 focus:scale-105 transition py-2 lg:py-2 block px-4 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900 rounded w-full ${pathname === "/infrastructure-service" ? "text-sky-500 dark:text-sky-500 font-bold" : ""}`}>IT Infrastructure Maintenance (Dispatch Services)</Link></li>
                                    <li className='hover:bg-slate-400 rounded-lg ease-in-out duration-75'> <Link onClick={() => { handleLinkClick(); vibrateOnMobile(); }} onFocus={vibrateOnMobile} href="sales-marketing-outsourcing" className={`focus:text-sky-500 focus:scale-105 transition py-2 lg:py-2 block px-4 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900 rounded w-full ${pathname === "/sales-marketing-outsourcing" ? "text-sky-500 dark:text-sky-500 font-bold" : ""}`}>Sales & Marketing Outsourcing</Link></li>
                                    <li className='hover:bg-slate-400 rounded-lg ease-in-out duration-75'><Link onClick={() => { handleLinkClick(); vibrateOnMobile(); }} onFocus={vibrateOnMobile} href="business-process-outsourcing" className={`focus:text-sky-500 focus:scale-105 transition py-2 lg:py-2 block px-4 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900 rounded w-full ${pathname === "/business-process-outsourcing" ? "text-sky-500 dark:text-sky-500 font-bold" : ""}`}>Business Process Outsourcing</Link></li>
                                    <li className='hover:bg-slate-400 rounded-lg ease-in-out duration-75'><Link onClick={() => { handleLinkClick(); vibrateOnMobile(); }} onFocus={vibrateOnMobile} href="staff-augmentation" className={`focus:text-sky-500 focus:scale-105 transition py-2 lg:py-2 block px-4 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900 rounded w-full  ${pathname === "/staff-augmentation" ? "text-sky-500 dark:text-sky-500 font-bold" : ""}`}>Staff Augmentation</Link></li>
                                    <li className='hover:bg-slate-400 rounded-lg ease-in-out duration-75'><Link onClick={() => { handleLinkClick(); vibrateOnMobile(); }} onFocus={vibrateOnMobile} href="erp-solutions" className={`focus:text-sky-500 focus:scale-105 transition py-2 lg:py-2 block px-4 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900 rounded w-full  ${pathname === "/erp-solutions" ? "text-sky-500 dark:text-sky-500 font-bold" : ""}`}>ERP Solutions</Link></li>
                                </ul>

                            </li>

                            <li className="w-full py-3">
                                    <Link 
                                        href="/" 
                                        className={`focus:text-sky-500 focus:scale-105 transition block dark:text-gray-300" ${["/gnotis-labs", "/gnotis-catalyze"].includes(pathname) ? "text-sky-500 dark:text-sky-500 font-bold" : ""}`}
                                        onClick={handleLinkClick}
                                    >
                                        Products
                                    </Link>

                                    <ul className="p-5 lg:p-4 space-y-1 z-50 bg-gray-100 dark:bg-gray-800 mt-3">
                                        <li className='hover:bg-slate-400 rounded-lg ease-in-out duration-75'>
                                        <Link
                                            onClick={() => { handleLinkClick(); vibrateOnMobile(); }}
                                            onFocus={vibrateOnMobile}
                                            href="/gnotis-catalyze"
                                            className={`focus:text-sky-500 focus:scale-105 transition py-2 lg:py-2 block px-4 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900 rounded w-full  ${pathname === "/gnotis-catalyze" ? "text-sky-500 dark:text-sky-500 font-bold" : ""}`}
                                        >
                                            Gnotis Catalyze
                                        </Link>
                                        </li>
                                        
                                        <li className='hover:bg-slate-400 rounded-lg ease-in-out duration-75'>
                                        <Link
                                            onClick={() => { handleLinkClick(); vibrateOnMobile(); }}
                                            onFocus={vibrateOnMobile}
                                            href="/gnotis-labs"
                                            className={`focus:text-sky-500 focus:scale-105 transition py-2 lg:py-2 block px-4 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900 rounded w-full  ${pathname === "/gnotis-labs" ? "text-sky-500 dark:text-sky-500 font-bold" : ""}`}
                                        >
                                            Gnotis Labs
                                        </Link>
                                        </li>
                                    </ul>
                            </li>

                        </ul>

                        <Link href="contact"
                            onClick={() => { handleLinkClick(); vibrateOnMobile(); }}
                            onFocus={vibrateOnMobile}

                            className={`focus:scale-105 transition btn-66 px-5 lg:px-8 text-xs tracking-wide w-full text-center font-bold ${syne.className}`}>Talk To Us</Link>

                    </div>
                }

            </div>
        </div>

    )
}
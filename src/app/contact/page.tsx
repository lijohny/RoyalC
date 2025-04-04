"use client"
import Image from "next/image";
import { useState, useEffect } from 'react';
import HomeServices from "../components/homeServices";
import StatusComponentItem from "../components/statusComponentItem";
import SimpleBlueComponentItem from "../components/SimpleBlueComponent";
import { Syne } from 'next/font/google'
import Button from "../components/Button";
import * as motion from "motion/react-client"
import Globe from "../components/Globe";

const syne = Syne({
    weight: ['400', '700'],
    subsets: ['latin'],
})

// Define variants for the container
const containerVariants = {
    hidden: {
        y: 100,
    },
    visible: {
        y: 0,
        transition: {
            staggerChildren: 0.085, // Time delay between children animations
        },
    },
};

// Define variants for the child elements
const childVariants = {
    hidden: {
        opacity: 0,
        y: 20, // Start slightly below
    },
    visible: {
        opacity: 1,
        y: 0, // Move to the original position
        transition: {
            duration: 0.4, // Duration for each child
        },
    },
};

export default function Contact() {

    return (
        <div className="gnotis-labs">

            <div className="hero-container relative pt-10 lg:pt-12 xl:pt-0">

                <div className="hero-elems absolute">
                    <div className="elem absolute left-1/2 -translate-x-1/2">
                        <Image
                            src="/0cf99c.webp"
                            alt="hero-elem"
                            width={200}
                            height={200}
                        />
                    </div>
                </div>

                <div className="container mx-auto xl:pt-5 px-4 lg:px-16 xl:px-0">
                    <div className="hero--section relative">
                        <div className="lg:grid lg:grid-cols-2 items-start">

                            <div className="col relative" style={{ zIndex: -1 }}>

                                <motion.div className="block" variants={containerVariants}
                                    initial="hidden"
                                    animate="visible"
                                    transition={{
                                        duration: 0.4,
                                        scale: { type: "spring", visualDuration: 0.4, bounce: 0.05 },
                                    }}>
                                    <motion.div>
                                    <h2 className="font-medium text-3xl lg:text-3xl animate-text bg-gradient-to-r from-teal-600 via-cyan-700 to-blue-500 bg-clip-text text-transparent max-w-md mb-6 lg:mb-12">We'd love to hear from you! Leave Us a Message</h2>
                                    </motion.div>
                                    <motion.div variants={childVariants}><Image
                                        className="w-full max-w-sm"
                                        src="/d03368b.jpeg"
                                        alt="hero-image"
                                        width="500"
                                        height="500"
                                    /></motion.div>
                                </motion.div>

                            </div>

                            <motion.div className="col blue-box p-10 lg:p-12 rounded-3xl"
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{
                                    duration: 0.4,
                                    scale: { type: "spring", visualDuration: 0.4, bounce: 0.05 },
                                }}
                            >
                                <motion.h1 variants={childVariants} className="text-2xl lg:text-3xl text-white font-semibold mb-5">Talk to us</motion.h1>
                                
                                <div className="flex flex-col gap-5 lg:gap-10 items-end">
                                <div className="form-group w-full group relative">
                                    <input type="text" className="peer bg-transparent w-full border-0 border-b border-white focus:outline-none outline-none text-white placeholder-transparent pl-0.5" placeholder="Name" />
                                    <label htmlFor="name" className="absolute inline-block pointer-events-none text-white transition-all duration-300 peer-placeholder-shown:top-2 peer-placeholder-shown:left-1 text-xs opacity-80 uppercase peer-placeholder-shown:text-xs peer-placeholder-shown:opacity-100 -top-2.5 peer-focus:-top-2.5 -left-1 peer-focus:-left-1 peer-focus:text-xs peer-focus:opacity-80">Name *</label>
                                </div>

                                <div className="form-group w-full group relative">
                                    <input type="text" className="peer bg-transparent w-full border-0 border-b border-white focus:outline-none outline-none text-white placeholder-transparent pl-0.5" placeholder="Name" />
                                    <label htmlFor="name" className="absolute inline-block pointer-events-none text-white transition-all duration-300 peer-placeholder-shown:top-2 peer-placeholder-shown:left-1 text-xs opacity-80 uppercase peer-placeholder-shown:text-xs peer-placeholder-shown:opacity-100 -top-2.5 peer-focus:-top-2.5 -left-1 peer-focus:-left-1 peer-focus:text-xs peer-focus:opacity-80">Email *</label>
                                </div>

                                <div className="form-group w-full group relative">
                                    <input type="text" className="peer bg-transparent w-full border-0 border-b border-white focus:outline-none outline-none text-white placeholder-transparent pl-0.5" placeholder="Name" />
                                    <label htmlFor="name" className="absolute inline-block pointer-events-none text-white transition-all duration-300 peer-placeholder-shown:top-2 peer-placeholder-shown:left-1 text-xs opacity-80 uppercase peer-placeholder-shown:text-xs peer-placeholder-shown:opacity-100 -top-2.5 peer-focus:-top-2.5 -left-1 peer-focus:-left-1 peer-focus:text-xs peer-focus:opacity-80">Mobile Number *</label>
                                </div>

                                <div className="form-group w-full group relative">
                                    <input type="text" className="peer bg-transparent w-full border-0 border-b border-white focus:outline-none outline-none text-white placeholder-transparent pl-0.5" placeholder="Name" />
                                    <label htmlFor="name" className="absolute inline-block pointer-events-none text-white transition-all duration-300 peer-placeholder-shown:top-2 peer-placeholder-shown:left-1 text-xs opacity-80 uppercase peer-placeholder-shown:text-xs peer-placeholder-shown:opacity-100 -top-2.5 peer-focus:-top-2.5 -left-1 peer-focus:-left-1 peer-focus:text-xs peer-focus:opacity-80">Message *</label>
                                </div>
                                
                                <div className="flex flex-col lg:flex-row items-center justify-between w-full h-full lg:h-full">
                                    <div className="g-recaptcha  rounded-lg" data-sitekey="6Lc9AfcqAAAAAEj7D0OZMfigWj-76KWo1tFHZGVa"></div>
                                    <Button text="Send" className={`${syne.className} !px-12 lg:!mt-0 !border-transparent`} />
                                </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* // GLOBE */}
                  <div className="container mx-auto pt-20 pb-20 lg:pt-24 lg:pb-24 xl:pb-32 px-4 lg:px-16 xl:px-0">
                    <div className="col">
                      <h1 className="text-4xl lg:text-5xl font-bold text-center"><span className="linear-text">We Are In</span></h1>
                      <p className="mt-5 lg:mt-7 xl:max-w-2xl mx-auto text-center dark:text-gray-400">We have multi geographic presence and it enables us to identify and respond swiftly to opportunities. Global presence is key element of our business strategy.</p>
            
                      <Globe />
                    </div>
                  </div>

        </div>
    );
}

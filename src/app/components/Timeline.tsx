import React, { useEffect } from 'react';
import Image from 'next/image';
import * as motion from "motion/react-client"

// Define variants for the container
const containerVariants = {
    hidden: {
        y: 5,
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
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.8, // Duration for each child
        },
    },
};

export default function Timeline() {


    return (
        <div className='container mx-auto px-4 lg:px-16 xl:px-0 pt-20 pb-20' id="journey">

            <motion.div variants={containerVariants} initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }} className="max-w-3xl mx-auto">

                <div className="text-center mb-8 lg:mb-10 xl:mb-20">
                    <motion.h1 variants={childVariants} className="linear-text text-4xl lg:text-5xl font-bold text-center">Our Journey</motion.h1>
                </div>

                <ol className="relative border-s before:bg-gradient-to-b before-content before:w-0.5 before:h-full before:absolute from-sky-50 to-blue-400 dark:border-gray-700 ml-5 lg:ml-40">
                    <motion.li variants={childVariants} className="mb-10 lg:mb-20 ms-6 lg:ms-16">
                        <span className="absolute flex items-center justify-center w-6 h-6 lg:w-16 lg:h-16 bg-blue-100 rounded-full -start-3 lg:-start-8 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <img src="/flags/india.webp" className='w-full h-full object-cover' alt="" />
                        </span>
                        <time className="bg-gradient-to-r from-sky-400 to-blue-500 text-sky-50 text-sm font-medium me-2 px-2.5 py-0.5 dark:bg-blue-900 dark:text-blue-300 rounded-full mb-1 inline-block">
                             2012
                        </time>
                        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                            Incorporation in India as a private limited company
                        </h3>
                    </motion.li>
                    <motion.li variants={childVariants} className="mb-10 lg:mb-20 ms-6 lg:ms-16">
                        <span className="absolute flex items-center justify-center w-6 h-6 lg:w-16 lg:h-16 bg-blue-100 rounded-full -start-3 lg:-start-8 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <img src="/flags/australia.webp" className='w-full h-full object-cover' alt="" />
                        </span>
                        <time className="bg-gradient-to-r from-sky-400 to-blue-500 text-sky-50 text-sm font-medium me-2 px-2.5 py-0.5 dark:bg-blue-900 dark:text-blue-300 rounded-full mb-1 inline-block">
                        2017 
                        </time>
                        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                        Incorporation in Australia
                        </h3>
                    </motion.li>
                    <motion.li variants={childVariants} className="mb-10 lg:mb-20 ms-6 lg:ms-16">
                        <span className="absolute flex items-center justify-center w-6 h-6 overflow-x-hidden lg:w-16 lg:h-16 bg-blue-100 rounded-full -start-3 lg:-start-8 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <img src="/EIL-GLOBAL.png" className='w-full h-full object-cover' alt="" />
                        </span>
                        <time className="bg-gradient-to-r from-sky-400 to-blue-500 text-sky-50 text-sm font-medium me-2 px-2.5 py-0.5 dark:bg-blue-900 dark:text-blue-300 rounded-full mb-1 inline-block">
                        2018
                        </time>
                        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                            Partnership with EIL Global 
                        </h3>
                    </motion.li>

                    <motion.li variants={childVariants} className="mb-10 lg:mb-20 ms-6 lg:ms-16">
                        <span className="absolute flex items-center justify-center w-6 h-6 lg:w-16 lg:h-16 bg-blue-100 rounded-full -start-3 lg:-start-8 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <img src="/flags/uk.webp" className='w-full h-full object-cover' alt="" />
                        </span>
                        <time className="bg-gradient-to-r from-sky-400 to-blue-500 text-sky-50 text-sm font-medium me-2 px-2.5 py-0.5 dark:bg-blue-900 dark:text-blue-300 rounded-full mb-1 inline-block">
                        2019 
                        </time>
                        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                        Incorporation in the UK
                        </h3>
                    </motion.li>

                    <motion.li variants={childVariants} className="mb-10 lg:mb-20 ms-6 lg:ms-16">
                        <span className="absolute flex items-center justify-center w-6 h-6 lg:w-16 lg:h-16 bg-blue-100 rounded-full -start-3 lg:-start-8 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <svg
                                className="w-7 h-7 text-blue-800 dark:text-blue-300"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                            </svg>

                        </span>
                        <time className="bg-gradient-to-r from-sky-400 to-blue-500 text-sky-50 text-sm font-medium me-2 px-2.5 py-0.5 dark:bg-blue-900 dark:text-blue-300 rounded-full mb-1 inline-block">
                        2019 
                        </time>
                        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                        Gnotis Catalyse
                        </h3>
                    </motion.li>


                    <motion.li variants={childVariants} className="mb-10 lg:mb-20 ms-6 lg:ms-16">
                        <span className="absolute flex items-center justify-center w-6 h-6 lg:w-16 lg:h-16 bg-blue-100 rounded-full -start-3 lg:-start-8 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <img src="/eil.png" className='w-full h-full rounded-full  object-cover' alt="" />
                        </span>
                        <time className="bg-gradient-to-r from-sky-400 to-blue-500 text-sky-50 text-sm font-medium me-2 px-2.5 py-0.5 dark:bg-blue-900 dark:text-blue-300 rounded-full mb-1 inline-block">
                        2019 
                        </time>
                        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                        Started EU operations from Ireland Entity
                        </h3>
                    </motion.li>


                    <motion.li variants={childVariants} className="mb-10 lg:mb-20 ms-6 lg:ms-16">
                        <span className="absolute flex items-center justify-center w-6 h-6 lg:w-16 lg:h-16 bg-blue-100 rounded-full -start-3 lg:-start-8 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg
                                className="w-7 h-7 text-blue-800 dark:text-blue-300"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                            </svg>
                        </span>
                        <time className="bg-gradient-to-r from-sky-400 to-blue-500 text-sky-50 text-sm font-medium me-2 px-2.5 py-0.5 dark:bg-blue-900 dark:text-blue-300 rounded-full mb-1 inline-block">
                        2020 
                        </time>
                        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                        Launched Gnotis Angel investments 
                        </h3>
                    </motion.li>

                    <motion.li variants={childVariants} className="mb-10 lg:mb-20 ms-6 lg:ms-16">
                        <span className="absolute flex items-center justify-center w-6 h-6 lg:w-16 lg:h-16 bg-blue-100 rounded-full -start-3 lg:-start-8 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <img src="/eil.png" className='w-full h-full rounded-full  object-cover' alt="" />
                        </span>
                        <time className="bg-gradient-to-r from-sky-400 to-blue-500 text-sky-50 text-sm font-medium me-2 px-2.5 py-0.5 dark:bg-blue-900 dark:text-blue-300 rounded-full mb-1 inline-block">
                            2021
                        </time>
                        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                            Gnotis EIL Global Merger

                        </h3>
                    </motion.li>

                    <motion.li variants={childVariants} className="mb-10 lg:mb-20 ms-6 lg:ms-16">

                        <span className="absolute flex items-center justify-center w-6 h-6 lg:w-16 lg:h-16 bg-blue-100 rounded-full -start-3 lg:-start-8 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            {/* <span className="absolute flex items-center justify-center w-6 h-6 lg:w-16 lg:h-16 bg-blue-100 rounded-full -start-3 lg:-start-8 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"> */}
                                <img src="/eil.png" className='w-full h-full rounded-full  object-cover' alt="" />
                            {/* </span> */}

                        </span>
                        <time className="bg-gradient-to-r from-sky-400 to-blue-500 text-sky-50 text-sm font-medium me-2 px-2.5 py-0.5 dark:bg-blue-900 dark:text-blue-300 rounded-full mb-1 inline-block">
                            2022
                        </time>
                        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                            Gnotis/EIL US operations
                        </h3>
                    </motion.li>

                    <motion.li variants={childVariants} className="mb-10 lg:mb-20 ms-6 lg:ms-16">
                        <span className="absolute flex items-center justify-center w-6 h-6 lg:w-16 lg:h-16 bg-blue-100 rounded-full -start-3 lg:-start-8 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <img src="/flags/germany.png" className='w-full h-full object-cover' alt="" />
                        </span>
                        <time className="bg-gradient-to-r from-sky-400 to-blue-500 text-sky-50 text-sm font-medium me-2 px-2.5 py-0.5 dark:bg-blue-900 dark:text-blue-300 rounded-full mb-1 inline-block">
                            2025
                        </time>
                        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                            Expansion and incorporation in the Germany
                        </h3>
                    </motion.li>
                </ol>
            </motion.div>

        </div>

    )
}
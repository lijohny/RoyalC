import React from 'react';
import * as motion from "motion/react-client"

type HomeServiceItem = {
    id: number
    icon: string
    title: string
    description: string
}

type HomeServiceComponentItemProps = {
    item: HomeServiceItem
}


export default function HomeServiceComponentItem({ item }: HomeServiceComponentItemProps) {

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      };
      
    return (
        <motion.div 
        variants={itemVariants} // Use the child-specific variants
        // transition={{
        //     duration: 0.4,
        //     y: { type: "spring", visualDuration: 0.4, bounce: 0.05, staggerChildren: 0.2 },
        // }}
        className="group item home--service-item relative overflow-hidden group" key={item.id}>
            <div className="content z-10 relative">
                <img src={item.icon} alt="" className='mb-4 lg:mb-6 xl:mb-7 size-6 lg:size-10 dark:invert dark:group-hover:invert-0 transition delay-200 duration-300' />
                <h3 className="uppercase text-white dark:text-gray-950 font-bold lg:text-lg leading-tight mb-3 group-hover:mix-blend-difference group-hover:text-gray-100 transition delay-100 duration-300">{item.title}</h3>
                <p className='text-white dark:text-gray-950 group-hover:text-gray-400 transition delay-100 duration-300'>{item.description}</p>
            </div>

            <div className="arrow bg-gray-900 w-16 h-16 lg:w-28 lg:h-28 absolute -top-3 -right-3 lg:-top-6 lg:-right-6 flex justify-center items-center rounded-full before-content before:absolute before:bg-gray-900 before:w-16 before:h-16 lg:before:w-28 lg:before:h-28 before:rounded-full before-negative group-hover:before:scale-[8] group-hover:before:bg-gray-950 before:transition-all before:duration-700 p-5">
                <svg className='relative z-10' width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M33.6332 4.163L29.7049 0.0905877L6.13464 24.5251V2.12679L0.556349 2.12679V34.3803H31.669L31.669 28.5975L10.063 28.5975L33.6332 4.163Z" fill="#49C5F2" />
                </svg>

            </div>
        </motion.div>
    )
}
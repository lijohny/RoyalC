import React from 'react';
import * as motion from "motion/react-client"

type SimpleBlueComponentItems = {
    id: number
    title: string
    icon: string
    description: string
}

type SimpleBlueComponentItemProps = {
    item: SimpleBlueComponentItems
}

export default function SimpleBlueComponentItem( {item}: SimpleBlueComponentItemProps ) {

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      };

    return (
        <motion.div variants={itemVariants} className="item why--gnotis-card p-5 lg:p-7 rounded-3xl" key={item.id}>
            <img src={item.icon} alt="" className='mb-4 lg:mb-6 xl:mb-7 lg:size-10 dark:invert' />
            <h3 className="uppercase text-white dark:text-gray-950 font-bold lg:text-lg leading-tight mb-3">{item.title}</h3>
            <p className='text-white opacity-80 dark:text-gray-950'>{item.description}</p>
        </motion.div>
    )
}
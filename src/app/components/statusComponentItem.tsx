import React from 'react';
import * as motion from "motion/react-client"

type StatusItems = {
    id: number
    count: number | string
    text: string
}

type StatusItemsProps = {
    status: StatusItems
}

export default function StatusComponentItem( {status}: StatusItemsProps ) {

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      };

    return (
        <motion.div variants={itemVariants} className="status--component-item rounded-3xl border border-cyan-500 px-6 py-12 text-center" key={status.id}>
            <h2 className='status--count text-4xl lg:text-5xl xl:text-6xl font-bold mb-1 dark:bg-gradient-to-r from-cyan-400 via-sky-400 to-sky-600 dark:bg-clip-text dark:text-transparent'>{status.count}</h2>
            <p className='status--text dark:text-gray-400 tracking-tight'>{status.text}</p>
        </motion.div>
    )
}
"use client"
import Image from "next/image";
import { Syne } from 'next/font/google'
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

export default function InfrastructureService() {

  return (
    <div className="gnotis-labs">
      

    {/* HOW WE STARTED */}
    <div className="how-we-started mt-8 lg:mt-20">
    <div className="container mx-auto pt-5 pb-20 lg:pt-20 lg:pb-24 px-4 lg:px-16 xl:px-0">
      <div className="gnotis--catalyze two--grid-section relative">
        <motion.div className="flex items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        >
          <div className="col xl:pr-32 lg:w-2/3">

          <motion.div variants={childVariants} initial={{rotate:-10}} animate={{ rotate:5}}><Image
                className="size-28 lg:size-40 object-contain mb-5 relative lg:absolute md:-top-10 lg:-top-40"
                src="/sales-icon.png"
                alt="hero-image"
                width="500"
                height="500"
                unoptimized={true}
              /></motion.div>

            <motion.h1 variants={childVariants} className="linear-text text-4xl lg:text-4xl font-bold">Sales & Marketing Outsourcing</motion.h1>
            <motion.p variants={childVariants} className="mt-5 lg:mt-7 dark:text-gray-400">Sales and Marketing partnership with Gnotis means exposure to better sales and marketing talent and techniques to your company.</motion.p>
            <motion.p variants={childVariants} className="mt-5 lg:mt-7 dark:text-gray-400">We work with various product companies on devising sales and marketing strategy.</motion.p>
            <motion.p variants={childVariants} className="mt-5 lg:mt-7 dark:text-gray-400">Gnotis Sales and Marketing aligns industry best practices, best-in- the-business sales talent and techniques to allow you to reach your maximum potential.</motion.p>
            <motion.p variants={childVariants} className="mt-5 lg:mt-7 dark:text-gray-400">Start-up business support being provided by Gnotis results in reducing risks in the business model, maximising revenue generation and releasing services or products with potential to scale up globally.</motion.p>
          </div>
          <motion.div className="col flex w-2/6 flex-1 -space-x-10 justify-center xl:h-[470px] xl:max-h-[550px]"
          initial={{ scale:0.5 }}
          whileInView={{ scale:1 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.25 },
        }}
          >
            <motion.div ><Image
                className="w-full xl:w-[30rem]"
                src="/sales-marketing.png"
                alt="hero-image"
                width="500"
                height="500"
              /></motion.div>
          </motion.div>
        </motion.div>
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

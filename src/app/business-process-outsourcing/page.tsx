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
    <div className="container mx-auto pt-8 pb-20 lg:pt-24 lg:pb-24 px-4 lg:px-16 xl:px-0">
      <div className="gnotis--catalyze two--grid-section relative">
        <motion.div className="flex items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        >
          <div className="col xl:pr-32 lg:w-2/3">
          <motion.div variants={childVariants} initial={{rotate:-10}} animate={{ rotate:5}}><Image
                className="size-28 lg:size-40 object-contain lg:mb-5 relative lg:absolute lg:-top-20 xl:-top-36"
                src="/business-process-outsourcing-icon.png"
                alt="hero-image"
                width="500"
                height="500"
              /></motion.div>
            <motion.h1 variants={childVariants} className="linear-text text-4xl lg:text-4xl font-bold">Business Process Outsourcing</motion.h1>
            <motion.p variants={childVariants} className="mt-5 lg:mt-7 dark:text-gray-400 mb-7">Transform your business operations with Gnotis's comprehensive Business Process Outsourcing (BPO) solutions. Our strategic approach helps organizations optimize their workflow by expertly managing non-core business functions, allowing you to focus on what matters most – growing your business.</motion.p>

            <motion.h2 variants={childVariants} className="linear-text text-xl lg:text-2xl font-bold">
            Managed Call Centre Solutions
            </motion.h2>

            <motion.p variants={childVariants} className="mt-3 dark:text-gray-400 mb-3 font-semibold">Elevate your customer experience with our state-of-the-art managed call centre services. Our experienced teams deliver:</motion.p>

            <motion.ul className="list-disc pl-4">
              <motion.li variants={childVariants}>Professional customer support across all channels</motion.li>
              <motion.li variants={childVariants}>Efficient inquiry and complaint resolution</motion.li>
              <motion.li variants={childVariants}>Strategic sales support and lead generation</motion.li>
              <motion.li variants={childVariants}>Consistent brand representation and customer satisfaction</motion.li>
              <motion.li variants={childVariants}>24/7 availability and multilingual support capabilities</motion.li>
              <motion.li variants={childVariants}>Turn-key office solutions with integrated tech infrastructure</motion.li>
            </motion.ul>

            <motion.h2 variants={childVariants} className="linear-text text-xl lg:text-2xl font-bold mt-7">
            Back-Office Workflow Management
            </motion.h2>

            <motion.p variants={childVariants} className="mt-3 dark:text-gray-400 mb-3 font-semibold">Streamline your operations with our comprehensive back-office management services:</motion.p>

            <motion.ul className="list-disc pl-4">
              <motion.li variants={childVariants}>Advanced data processing and analytics</motion.li>
              <motion.li variants={childVariants}>Secure document management and digitization</motion.li>
              <motion.li variants={childVariants}>Regulatory compliance monitoring and reporting</motion.li>
              <motion.li variants={childVariants}>Process automation and optimization</motion.li>
              <motion.li variants={childVariants}>Scalable administrative support</motion.li>
            </motion.ul>
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
              className="w-auto top-0 h-full"
              src="/business-process-outsourcing.png"
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

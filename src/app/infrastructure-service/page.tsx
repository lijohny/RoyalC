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
          <div className="elem absolute left-0">
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
          <div className="flex flex-col lg:flex-row items-center">
            <motion.div className="col max-w-10/12 xl:pr-12 flex-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.05 },
            }}
            >
                <motion.div variants={childVariants} initial={{rotate:-10}} animate={{ rotate:5}}><Image
                className="size-32 lg:size-40 object-contain mb-5"
                src="/bc23e.png"
                alt="hero-image"
                width="500"
                height="500"
              /></motion.div>
              <motion.h1 variants={childVariants} className="linear-text text-3xl sm:text-4xl lg:text-5xl xl:text-4xl font-bold">build your Home</motion.h1>
              <motion.p variants={childVariants} className="mt-5 lg:mt-5 dark:text-gray-400">
                Royal Construction offers innovative and luxurious house plans tailored to embody the essence of comfort and elegance. 
                Our designs emphasize modern aesthetics combined with functional living spaces that cater to diverse lifestyles. 
                Each blueprint is meticulously crafted to optimize space, ensuring that each area is both aesthetically pleasing and highly practical. 
                From sprawling open-plan kitchens to serene, spacious bedrooms and innovative storage solutions, 
                </motion.p>

              <motion.p variants={childVariants} className="mt-5 lg:mt-5 dark:text-gray-400">
              Royal Construction's house plans are thoughtfully designed to meet the high expectations of our discerning clients. 
                Whether you're looking to build a cozy bungalow or a majestic multi-story residence, 
                our commitment to quality and attention to detail shines through in every project. 
                With Royal Construction, your dream home is not just a plan, but a promise of a masterpiece in the making.
              </motion.p>

              <div className="chips flex flex-wrap gap-5 lg:gap-3 mt-3 lg:mt-20 mb-5 lg:mb-8">
                <div className="px-3 py-2 border shadow-sm text-slate-800 bg-slate-50 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-400  border-slate-200 inline-block rounded-md sm:text-sm font-bold">Functionality and Flow</div>
                <div className="px-3 py-2 border shadow-sm text-slate-800 bg-slate-50 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-400  border-slate-200 inline-block rounded-md sm:text-sm font-bold">Light and Ventilation</div>
                <div className="px-3 py-2 border shadow-sm text-slate-800 bg-slate-50 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-400  border-slate-200 inline-block rounded-md sm:text-sm font-bold">Aesthetic and Style</div>
              </div>
              
            </motion.div>

            <div className="col relative w-1/2" style={{ zIndex:-1}}>
              
              <motion.div className="flex flex-1" variants={containerVariants}
            initial="hidden"
            animate="visible"
            transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.05 },
            }}>
              <motion.div variants={childVariants}><Image
                className="w-full"
                src="/e77aa5.png"
                alt="hero-image"
                width="500"
                height="500"
              /></motion.div>

              </motion.div>

            </div>
          </div>
        </div>
      </div>
      </div>

    {/* HOW WE STARTED */}
    <div className="how-we-started">
    <div className="container mx-auto pt-20 pb-20 lg:pt-24 lg:pb-24 px-4 lg:px-16 xl:px-0">
      <div className="royal construction--catalyze two--grid-section relative">
        <motion.div className="flex items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        >
          <div className="col xl:pr-32 lg:w-2/3">
            <motion.h1 variants={childVariants} className="linear-text text-4xl lg:text-4xl font-bold">Functionality and Flow</motion.h1>
            <motion.p variants={childVariants} className="mt-5 lg:mt-7 dark:text-gray-400">Functionality and Flow: The layout of a home should promote ease of movement and practicality for daily activities. This includes the logical arrangement of rooms, such as placing bathrooms conveniently adjacent to bedrooms and designing kitchens that open into dining or living areas. </motion.p>
            <motion.p variants={childVariants} className="mt-5 lg:mt-7 dark:text-gray-400">Ensuring good flow helps in maintaining an organized and comfortable living environment.</motion.p>

            <motion.p variants={childVariants} className="mt-3 dark:text-gray-400 mb-3 font-semibold">Light and Ventilation: Maximizing natural light and ensuring adequate ventilation are essential aspects of house design. This can involve strategically placing windows and doors, considering the orientation of the house to capture sunlight at the right times of the day, and incorporating other architectural elements like skylights or larger windows to enhance light and air circulation.</motion.p>
            
            <motion.ul className="list-disc pl-4 dark:text-gray-400">
              <motion.li variants={childVariants}>Installing and configuring heavy construction equipment and safety systems.</motion.li>
              <motion.li variants={childVariants}>Setting up logistical support for material and equipment delivery to the construction site.</motion.li>
              <motion.li variants={childVariants}>Establishing on-site quality control labs for continuous monitoring of material quality.</motion.li>
              <motion.li variants={childVariants}>Providing onsite training and support for construction safety practices.</motion.li>
              <motion.li variants={childVariants}>Conducting regular safety audits and compliance checks to adhere to industry standards.</motion.li>
              <motion.li variants={childVariants}>Implementing quality assurance processes and continuous improvement programs for construction projects.</motion.li>
            </motion.ul>



            <motion.p variants={childVariants} className="mt-3 dark:text-gray-400 mb-3 font-semibold">Our services include:</motion.p>

          <motion.ul className="list-disc pl-4 dark:text-gray-400">
            <motion.li variants={childVariants}>24/7 On-Site Construction Support across multiple regions</motion.li>
            <motion.li variants={childVariants}>Comprehensive building and infrastructure construction support</motion.li>
            <motion.li variants={childVariants}>Emergency response teams and priority support for critical project phases</motion.li>
          </motion.ul>

          <motion.p variants={childVariants} className="mt-5 lg:mt-7 dark:text-gray-400">We offer 24/7 on-demand construction site management, workforce augmentation services, technical project support, and global rollout program management to support your building projects. Additionally, we provide Monthly Maintenance Contracts (MMC) and Annual Maintenance Contracts (AMC), ensuring periodic site visits for proactive structural health checks. To address equipment issues, we also offer a loaner service for replacement machinery until faulty ones are repaired or replaced.</motion.p>

          <motion.p variants={childVariants} className="mt-5 lg:mt-7 dark:text-gray-400">Royal Construction is committed to keeping your construction projects running seamlessly with reliable, professional, and efficient support.</motion.p>

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
              className="w-auto top-0 h-full blur-xl"
              src="/0cf99c.png"
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

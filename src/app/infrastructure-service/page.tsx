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
              <motion.h1 variants={childVariants} className="linear-text text-3xl sm:text-4xl lg:text-5xl xl:text-4xl font-bold">Infrastructure Support & Service</motion.h1>
              <motion.p variants={childVariants} className="mt-5 lg:mt-5 dark:text-gray-400">Gnotis delivers IT Maintenance Services backed by a decade of experience supporting businesses of all sizes across India, Singapore, Australia, Hong Kong, Malaysia, Indonesia, the Philippines, Ireland, the UK, and the Netherlands.</motion.p>

              <motion.p variants={childVariants} className="mt-5 lg:mt-5 dark:text-gray-400">
              Through our merger and partnership with the EIL Global Group, Gnotis is expanding its reach to provide support in additional countries, including the North American region
              </motion.p>

              <div className="chips flex flex-wrap gap-5 lg:gap-3 mt-3 lg:mt-20 mb-5 lg:mb-8">
                <div className="px-3 py-2 border shadow-sm text-slate-800 bg-slate-50 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-400  border-slate-200 inline-block rounded-md sm:text-sm font-bold">IT Infrastructure Maintenance (Dispatch Services)</div>
                <div className="px-3 py-2 border shadow-sm text-slate-800 bg-slate-50 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-400  border-slate-200 inline-block rounded-md sm:text-sm font-bold">Service Provision</div>
                <div className="px-3 py-2 border shadow-sm text-slate-800 bg-slate-50 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-400  border-slate-200 inline-block rounded-md sm:text-sm font-bold">Project  & Consulting Service</div>
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
      <div className="gnotis--catalyze two--grid-section relative">
        <motion.div className="flex items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        >
          <div className="col xl:pr-32 lg:w-2/3">
            <motion.h1 variants={childVariants} className="linear-text text-4xl lg:text-4xl font-bold">IT Infrastructure Maintenance (Dispatch Services)</motion.h1>
            <motion.p variants={childVariants} className="mt-5 lg:mt-7 dark:text-gray-400">Gnotis delivers IT Maintenance Services built on a decade of expertise supporting businesses across APAC, EMEA and USCA regions with direct presence in India, Singapore, Australia, New Zealand, Hong Kong, Malaysia, Ireland, the UK, Germany and the USA.</motion.p>
            <motion.p variants={childVariants} className="mt-5 lg:mt-7 dark:text-gray-400">We adhere to ITIL-based service delivery standards, ensuring compliance with back-to-back SLAs established with our customers. Our skilled resource pool, spread across these regions, is cross trained to enhance efficiency and effectiveness. We own the end to end responsibility including managing vetted technician availability, ensuring on-time arrivals at job sites, and providing detailed, timecard-based reporting using our AI driven in house developed ERP platform.</motion.p>

            <motion.p variants={childVariants} className="mt-3 dark:text-gray-400 mb-3 font-semibold">Our technicians bring extensive experience in</motion.p>
            
            <motion.ul className="list-disc pl-4">
              <motion.li variants={childVariants}>Installing and configuring desktops, laptops, and user data migration.</motion.li>
              <motion.li variants={childVariants}>Setting up network printing and network drives.</motion.li>
              <motion.li variants={childVariants}>Installing and configuring servers, storage, and network devices.</motion.li>
              <motion.li variants={childVariants}>Delivering deskside support for users.</motion.li>
              <motion.li variants={childVariants}>Conducting user audits, as well as physical and wireless surveys.</motion.li>
              <motion.li variants={childVariants}>Cloud provisioning and engineering support.</motion.li>
            </motion.ul>



            <motion.p variants={childVariants} className="mt-3 dark:text-gray-400 mb-3 font-semibold">Our services include:</motion.p>
            
            <motion.ul className="list-disc pl-4">
              <motion.li variants={childVariants}>24X7X4 OnDemand IT support in APAC, EMEA & USCA</motion.li>
              <motion.li variants={childVariants}>End User Computing support / Data centre/ Cloud and Network support</motion.li>
              <motion.li variants={childVariants}>Emergency call out support / VIP white glove support</motion.li>
            </motion.ul>

            <motion.p variants={childVariants} className="mt-5 lg:mt-7 dark:text-gray-400">We offer 24/7 on-demand dispatch,  staff augmentation services, technical project support and global rollout program management to support your IT infrastructure. Additionally, we provide Monthly Maintenance Contracts (MMC) and Annual Maintenance Contracts (AMC), ensuring periodic visits for proactive IT health checks. To address hardware issues, we also offer a loaner service for replacement devices until faulty ones are procured and replaced.</motion.p>
            <motion.p variants={childVariants} className="mt-5 lg:mt-7 dark:text-gray-400">Gnotis is committed to keeping your IT systems running seamlessly with reliable, professional, and efficient support.</motion.p>
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

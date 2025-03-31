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
    <div className="staff-aug mt-8 lg:mt-20">
    <div className="container mx-auto pt-20 pb-20 lg:pt-24 lg:pb-24 px-4 lg:px-16 xl:px-0">
      <div className="gnotis--catalyze two--grid-section relative">
        <motion.div className="flex items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        >
          <div className="col xl:pr-32 lg:w-2/3">
          <motion.div variants={childVariants} initial={{rotate:-10}} animate={{ rotate:25}}><Image
                className="size-40 object-contain mb-5 relative lg:absolute lg:-top-20"
                src="/staff-augmentation-icon.png"
                alt="hero-image"
                width="500"
                height="500"
                unoptimized={true}
              /></motion.div>
            <motion.h1 variants={childVariants} className="linear-text text-4xl lg:text-4xl font-bold">Staff Augmentation</motion.h1>
            <motion.p variants={childVariants} className="mt-5 lg:mt-7dark:text-gray-400">Gnotis provides three primary types of services as per agreements with its clients</motion.p>

            <dl className="pt-7">
              <dt className="text-xl font-semibold">A. Proactive or AMC Support (Annual Maintenance Contract)</dt>
              <dd className="text-base mt-3">Proactive support, or AMC-based services, ensure that the client’s infrastructure is consistently maintained through regular health and performance checks. Systems are kept up-to-date, and any issues are promptly reported to the site contact. Monthly logs and reports are shared with management for clear visibility.</dd>
              <dd className="text-base mt-3">Gnotis manages the client’s entire IT estate under the AMC or proactive model for a minimum period of 12 months, offering unlimited callouts</dd>
            </dl>

            <dl className="pt-7">
              <dt className="text-xl font-semibold">B. Full Time Engineer Deployment (Dedicated Support)</dt>
              <dd className="text-base mt-3">Gnotis deploys right skilled technicians at the customer site following comprehensive background verification checks and site orientation to support their IT infrastructure. Additionally, Gnotis provides on-call support services to address issues and outages within upto two hours or as per the agreed Service Level Agreement (SLA).</dd>
              <dd className="text-base mt-3">A skilled technician will visit the site within the agreed SLA to resolve the issue or outage. This model offers a cost-efficient solution for non-critical or smaller environments while ensuring effective support.</dd>
            </dl>

            <dl className="pt-7">
              <dt className="text-xl font-semibold">C. Managed Service Support (MSS)</dt>
              <dd className="text-base mt-3">Gnotis manages its clients’ entire IT infrastructure estate and delivers metrics-based reports to relevant stakeholders. The management is handled by Gnotis, with support services aligned to industry-standard frameworks and best practices.</dd>
              <dd className="text-base mt-3">Based on the size of the customer site, Gnotis tailors the appropriate support model, ranging from Dedicated, Designated, Hub-Spoke, Campus, to Dispatch, to effectively support the client’s business needs.</dd>
            </dl>

            
          </div>
          <motion.div className="col flex w-2/6 flex-1 -space-x-10 justify-center xl:h-[470px] xl:max-h-[550px]"
          initial={{ scale:0.5 }}
          whileInView={{ scale:1 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.25 },
        }}
          >
            <motion.div variants={childVariants}><Image
                className="w-full xl:w-[30rem] ml-auto"
                src="/staff-augmentation.png"
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

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

      <div className="container mx-auto px-4 lg:px-16 xl:px-0">
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
                className="size-32 lg:size-32 object-contain mb-1"
                src="/crm-icon7.png"
                alt="hero-image"
                width="500"
                height="500"
              /></motion.div>
              <motion.h1 variants={childVariants} className="linear-text text-3xl sm:text-4xl lg:text-5xl xl:text-4xl font-bold">Transform Your Business with Cutting-Edge ERP and CRM Solutions</motion.h1>
              <motion.p variants={childVariants} className="mt-5 lg:mt-5 dark:text-gray-400">At Gnotis, we empower organizations to streamline operations, enhance productivity, and drive growth through enterprise-grade ERP and CRM solutions. Leveraging industry-leading platform Microsoft Dynamics 365, we deliver tailored systems that unlock efficiency, innovation, and competitive advantage.</motion.p>
              
            </motion.div>

            <div className="col relative w-1/2" style={{ zIndex:-1}}>
              
              <motion.div className="block" variants={containerVariants}
            initial="hidden"
            animate="visible"
            transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.05 },
            }}>
              <motion.div variants={childVariants}><Image
                className="w-full"
                src="/ERP32.png"
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
    <div className="container mx-auto pt-20 pb-20 lg:pt-16 lg:pb-24 px-4 lg:px-16 xl:px-0">
      <div className="gnotis--catalyze two--grid-section relative">
        <motion.div className="flex flex-col"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        >
          <div className="col xl:pr-32 lg:w-2/3">
          <Image
                className="size-32 lg:size-32 object-contain mb-1 lg:mb-3"
                src="/erp-1.png"
                alt="hero-image"
                width="500"
                height="500"
              />
            <motion.h1 variants={childVariants} className="linear-text text-4xl lg:text-4xl font-bold">ERP Solutions: Streamline Operations, Elevate Performance</motion.h1>
            <motion.p variants={childVariants} className="mt-5 lg:mt-7 dark:text-gray-400 mb-5 lg:mb-7">Enterprise Resource Planning (ERP) is the backbone of modern business operations. With Gnotis/EIL Global and our ERP partner network, you gain the ability to seamlessly integrate and develop with Microsoft Dynamics 365 to create a unified and intelligent business ecosystem.</motion.p>

            <motion.ul className="list-disc pl-4 space-y-4 lg:space-y-5">
              <motion.li variants={childVariants}><strong>Seamless Integration:</strong> Our ERP solutions unify your financials, supply chain, operations, and reporting into a single, intelligent system.</motion.li>
              <motion.li variants={childVariants}><strong>AI-Driven Insights:</strong> Leverage AI-powered algorithms to enable precise forecasting, demand management, and inventory optimization.</motion.li>
              <motion.li variants={childVariants}><strong>Scalable and Agile:</strong> Whether you're a growing business or an established enterprise, our ERP systems scale with your needs, ensuring long-term value.</motion.li>
              <motion.li variants={childVariants}><strong>Outcome:</strong> Streamlined processes, reduced costs, and data-driven decision-making that propel your business forward.</motion.li>
            </motion.ul>
          </div>



          <div className="col xl:pr-32 lg:w-2/3 lg:pt-10 xl:pt-20">
          <Image
                className="size-32 lg:size-32 object-contain mb-1 lg:mb-3"
                src="/erp-2.png"
                alt="hero-image"
                width="500"
                height="500"
              />
            <motion.h1 variants={childVariants} className="linear-text text-4xl lg:text-4xl font-bold">CRM Solutions: Elevate Customer Engagement and Drive Growth</motion.h1>
            <motion.p variants={childVariants} className="mt-5 lg:mt-7 dark:text-gray-400 mb-5 lg:mb-7">Enterprise Resource Planning (ERP) is the backbone of modern business operations. With Gnotis/EIL Global and our ERP partner network, you gain the ability to seamlessly integrate and develop with Microsoft Dynamics 365 to create a unified and intelligent business ecosystem.</motion.p>

            <motion.ul className="list-disc pl-4 space-y-4 lg:space-y-5">
              <motion.li variants={childVariants}><strong>Customer Relationship Management:</strong> (CRM) is key to building lasting relationships and driving revenue. With Microsoft Dynamics 365 CRM, we empower your sales, marketing, and service teams to deliver exceptional customer experiences.</motion.li>
              <motion.li variants={childVariants}><strong>
              360° Customer View:</strong> Gain a unified view of customer interactions across touchpoints, enabling personalized engagement and improved satisfaction.</motion.li>
              <motion.li variants={childVariants}><strong>
              Automated Workflows:</strong> Streamline sales pipelines, automate marketing campaigns, and enhance service delivery with intelligent workflows.</motion.li>
              <motion.li variants={childVariants}><strong>
              Actionable Insights:</strong> Leverage advanced analytics to uncover trends, predict customer behaviour, and optimize strategies for maximum impact.</motion.li>
              <motion.li variants={childVariants}><strong>
              Outcome:</strong> Increased customer retention, higher conversion rates, and a stronger competitive edge.</motion.li>
            </motion.ul>
          </div>



          <motion.div className="col flex w-2/6 absolute right-0 flex-1 -space-x-10 justify-center xl:h-[470px] xl:max-h-[550px]"
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

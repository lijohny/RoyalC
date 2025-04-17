import React from 'react';
import Image from 'next/image';
import HomeServiceComponentItem from './homeServiceComponentItem';
import * as motion from "motion/react-client"

const HomeServicesItems = [
  {
    id: 1,
    icon: 'icons/sales-marketing.svg',
    title: 'Construction Project Outsourcing',
    description: 'Partnering with Royal Construction means gaining access to top-tier construction expertise and innovative building techniques. Our outsourcing solutions provide skilled labor, project management, and advanced construction strategies to ensure efficient and high-quality project execution. Whether you need support in planning, design, or on-site construction, our team delivers excellence with precision. Let us handle the complexities while you focus on growing your business with confidence.'
  },
  {
    id: 2,
    icon: 'icons/sales-marketing.svg',
    title: 'Infrastructure Services',
    description: 'Royal Construction delivers robust infrastructure services, backed by years of experience in delivering large-scale construction projects across the country. From site development to infrastructure management, we ensure that every phase of your project is executed seamlessly, on time, and within budget. We specialize in providing the foundation for long-lasting structures that meet the highest standards.'
  },
  {
    id: 3,
    icon: 'icons/sales-marketing.svg',
    title: 'Business Process Outsourcing for Construction',
    description: "Transform your construction business operations with Royal Construction's Business Process Outsourcing (BPO) solutions. Our strategic approach helps construction companies optimize their workflows by expertly managing non-core functions such as procurement, documentation, and compliance. Focus on your core construction operations while we handle the back-office tasks that drive efficiency and growth."
  },
  {
    id: 4,
    icon: 'icons/sales-marketing.svg',
    title: 'Staff Augmentation for Construction Projects',
    description: 'Royal Construction provides staff augmentation services, leveraging years of experience to support construction projects of all sizes. Whether you need additional engineers, project managers, or construction workers, we offer highly skilled professionals who can seamlessly integrate into your team to meet project demands. Our flexible staffing solutions ensure you have the right expertise when you need it most.'
  }
];


export default function HomeServices() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.125, // Delay between child animations
      },
    },
  };

  return (
    <div className="col max-w-relative">
  <motion.h1 
    initial={{ opacity: 0, y: 20 }} 
    whileInView={{ opacity: 1, y: 0 }} 
    transition={{ duration: 0.4, scale: { type: "spring", visualDuration: 0.4, bounce: 0.05 } }} 
    className="linear-text-blue text-4xl lg:text-5xl font-bold"
  >
    Our Services
  </motion.h1>

  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, scale: { type: "spring", visualDuration: 0.4, bounce: 0.05 } }}
    className="mt-5 lg:mt-7 xl:max-w-4xl text-gray-300"
  >
    Royal Construction offers a wide range of services designed to help businesses achieve their construction and infrastructure goals. With years of experience across diverse industries, we specialize in providing exceptional project management, innovative design solutions, and sustainable construction practices. Whether you're building from the ground up or improving an existing space, our team is dedicated to delivering high-quality results on time and within budget.
  </motion.p>

  <motion.div 
    className="column-grids grid lg:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-12 xl:gap-9 lg:mt-20 mt-5 !opacity-100"
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ amount: 0.4, once: true }}
  >
    {HomeServicesItems.map((item) => {
      return (
        <HomeServiceComponentItem 
          item={item} 
          key={item.id} 
        />
      );
    })}
  </motion.div>




      <motion.div className="elem absolute left-0 xl:-left-5 lg:w-[8rem]" initial={{ opacity: 0, bottom: 50 }} whileInView={{ opacity: 0.2, bottom: -100 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.25 },
        }}>
        <Image
          className="w-full blur-sm"
          src="/0cf99c.webp"
          alt="hero-image"
          width="500"
          height="500"
        />
      </motion.div>


      <motion.div className="elem absolute top-8 lg:w-[20rem]" style={{ zIndex: -1 }}
        initial={{ right: 500, opacity: 0, top: 400 }} whileInView={{ right: 0, opacity: 1, top: 400 }}
        transition={{
          duration: 0.75,
          right: { type: "spring", visualDuration: 0.4, bounce: 0.25 },
        }}>
        <Image
          src="/0cf99c.webp"
          className="w-96 lg:w-[30rem] blur-md"
          alt="hero-elem"
          width={200}
          height={200}
        />
      </motion.div>



    </div>
  )
}
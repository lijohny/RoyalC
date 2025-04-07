"use client"
import Image from "next/image";
import { useState, useEffect } from 'react';
import StatusComponentItem from "../components/statusComponentItem";
import SimpleBlueComponentItem from "../components/SimpleBlueComponent";
import { Syne } from 'next/font/google'
import Slider from "../components/Slider";
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
// import { motion } from "motion/react"
import * as motion from "motion/react-client"
import Timeline from "../components/Timeline";
import Link from "next/link";
import Button from "../components/Button";
import { useParams, usePathname } from "next/navigation";
import { FaBuilding, FaGlobe, FaProjectDiagram } from 'react-icons/fa';

const syne = Syne({
  weight: ['400', '700'],
  subsets: ['latin'],
})

const StatusComponentItems = [
  {
    id: 1,
    count: 60 + '+',
    text: 'Years of Experience'
  },
  {
    id: 2,
    count: 65 + '+',
    text: 'Years of Experience'
  },
  {
    id: 3,
    count: 65 + '+',
    text: 'Years of Experience'
  },
  {
    id: 4,
    count: 65 + '+',
    text: 'Years of Experience'
  }
]
// Update the type to ReactNode for the icon
type SimpleBlueComponentItems = {
  id: number;
  icon: string; // Change back to string to match the other file
  title: string;
  description: string;
};

const WhyGnotisItems: SimpleBlueComponentItems[] = [
  {
    id: 1,
    icon: "/path/to/building-icon.svg", // Replace with a string path to the icon
    title: 'Quality Construction Services',
    description:
      'At Royal Construction, we ensure that every project, from residential to commercial, is completed with the highest standards of quality. Our skilled team is dedicated to delivering outstanding results that meet our clients’ unique needs.',
  },
  {
    id: 2,
    icon: "/path/to/globe-icon.svg", // Replace with a string path to the icon
    title: 'Global Reach, Local Expertise',
    description:
      'With operations spanning across multiple continents, Royal Construction brings local expertise to every project, regardless of location. Whether in the United States, UK, or the Middle East, we combine global knowledge with a focus on local requirements to deliver excellence.',
  },
  {
    id: 3,
    icon: "/path/to/project-diagram-icon.svg", // Replace with a string path to the icon
    title: 'Project Management Excellence',
    description:
      'Our experienced project managers ensure that every aspect of your construction project is handled efficiently. From planning to execution, we prioritize clear communication, timely delivery, and cost control to meet project goals successfully.',
  },
];

interface GlobePosition {
  country: string;
  position: string;
}

const globePositions: GlobePosition[] = [
  {
    country: 'India',
    position: '-380px 0px'
  },
  {
    country: 'Australia',
    position: '-380px 0px'
  },
  {
    country: 'Ireland',
    position: '-180px 0px'
  }
  // "-380px 0px", "-180px 0px"
]


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

export default function About( ) {

  // console.log("paramsddddd", params.slug);


  

  const [currentIndex, setCurrentIndex] = useState(0)
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % globePositions.length)
    }, 4000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  const currentGlobePosition = globePositions[currentIndex];

  return (
    <div className="gnotis-labs">

      <div className="hero-container relative pt-10 lg:pt-12 xl:pt-0 lg:pb-12 xl:pb-0">

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

        <div className="container mx-auto xl:pt-20 px-4 lg:px-16 xl:px-0">
          <div className="hero--section relative">
            <div className="grid lg:grid-cols-2 items-center">
              <motion.div className="col max-w-10/12 xl:pr-32"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  duration: 0.4,
                  scale: { type: "spring", visualDuration: 0.4, bounce: 0.05 },
                }}
              >
<motion.h1 variants={childVariants} className="linear-text text-4xl lg:text-5xl xl:text-6xl font-bold">About Royal Construction Company</motion.h1>
<motion.p variants={childVariants} className="mt-5 lg:mt-7 dark:text-gray-400">Royal Construction Company is a leading provider of high-quality construction services. With years of expertise in residential, commercial, and industrial projects, we specialize in delivering exceptional results through innovative solutions, meticulous planning, and strong project management. Our commitment to safety, sustainability, and client satisfaction has made us a trusted partner in the construction industry globally.</motion.p>


              </motion.div>

              <div className="col relative -bottom-10 lg:-bottom-28" style={{ zIndex: -1 }}>

                <motion.div className="flex flex-1 hand-container" variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{
                    duration: 0.4,
                    scale: { type: "spring", visualDuration: 0.4, bounce: 0.05 },
                  }}>
                  <motion.div variants={childVariants}><Image
                    className="w-full"
                    src="/hand1.webp"
                    alt="hero-image"
                    width="500"
                    height="500"
                  /></motion.div>
                  <motion.div variants={childVariants}><Image
                    className="w-full"
                    src="/hand2.webp"
                    alt="hero-image"
                    width="500"
                    height="500"
                  /></motion.div>
                  <motion.div variants={childVariants}><Image
                    className="w-full"
                    src="/hand3.webp"
                    alt="hero-image"
                    width="500"
                    height="500"
                  /></motion.div>
                  <motion.div variants={childVariants}><Image
                    className="w-full"
                    src="/hand4.webp"
                    alt="hero-image"
                    width="500"
                    height="500"
                  /></motion.div>
                  <motion.div variants={childVariants}><Image
                    className="w-full"
                    src="/hand5.webp"
                    alt="hero-image"
                    width="500"
                    height="500"
                  /></motion.div>
                  <motion.div variants={childVariants}><Image
                    className="w-full"
                    src="/hand6.webp"
                    alt="hero-image"
                    width="500"
                    height="500"
                  /></motion.div>
                </motion.div>

                <div className="elem absolute left-1/2 -translate-x-1/2 top-32 lg:w-[30rem]" style={{ zIndex: -1 }}>
                  <Image
                    src="/0cf99c.webp"
                    className="w-96 lg:w-[30rem] blur-md"
                    alt="hero-elem"
                    width={200}
                    height={200}
                  />
                </div>
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
              viewport={{ amount: 0.4, once: true }}
            >
              <div className="col xl:pr-32 lg:w-2/3">
              <motion.h1 variants={childVariants} className="linear-text text-4xl lg:text-5xl font-bold">How We Started</motion.h1>
<motion.p variants={childVariants} className="mt-5 lg:mt-7 dark:text-gray-400">Founded in 2005, Royal Construction Company has grown into a leading force in the construction industry. With over 18 years of experience in residential, commercial, and industrial development, we've earned a strong reputation for delivering projects of exceptional quality. Operating globally, we have successfully completed projects across the United States, United Kingdom, Canada, Australia, and the Middle East, partnering with clients from various sectors, including real estate, infrastructure, and government.</motion.p>
<motion.p variants={childVariants} className="mt-5 lg:mt-7 dark:text-gray-400">Our core services include building design and construction, project management, civil engineering, renovation and restoration, and specialized construction services. We also offer comprehensive consulting services to ensure that every project is completed efficiently, on time, and within budget.</motion.p>
<motion.p variants={childVariants} className="mt-5 lg:mt-7 dark:text-gray-400">At Royal Construction Company, we pride ourselves on our ability to turn visions into reality. Our experienced team works closely with clients to understand their specific needs, ensuring that every project meets the highest standards of craftsmanship, sustainability, and safety. We are committed to providing innovative solutions, and our client-first approach has made us a trusted name in the construction industry.</motion.p>

              </div>
              <motion.div className="col flex w-2/6 flex-1 -space-x-10 justify-center xl:h-[470px] xl:max-h-[550px]"
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{
                  duration: 0.4,
                  scale: { type: "spring", visualDuration: 0.4, bounce: 0.25 },
                }}
              >
                <motion.div ><Image
                  className="w-auto top-0 h-full"
                  src="/6f99d34.png"
                  alt="hero-image"
                  width="500"
                  height="500"
                /></motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* <div className="about-callout pt-20 pb-20 lg:pt-12 lg:pb-12">
        <div className="container mx-auto px-4 lg:px-16 xl:px-0">
            
            <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-bold text-3xl lg:text-3xl animate-text bg-gradient-to-r from-teal-600 dark:from-teal-400 via-cyan-700 dark:via-cyan-500 to-blue-500 dark:to-blue-400 bg-clip-text text-transparent">You can be assured with us; you are talking to people with a track-record of being able to make the difference where it matters.</h2>

            <div className="image-elem py-5 lg:py-10 xl:pt-24 xl:pb-16 mx-auto text-center">
            <Image 
            src="/69d6c1bb.jpeg"
            className="w-96 lg:w-[30rem] mx-auto"
            alt="hero-elem"
            width={200}
            height={200}
            />
            </div>

            <h2 className="font-bold text-3xl lg:text-3xl lg:max-w-lg text-center mx-auto animate-text bg-gradient-to-r from-teal-600 dark:from-teal-400 via-cyan-700 dark:via-cyan-500 to-blue-500 dark:to-blue-400 bg-clip-text text-transparent">WE PUT IN “OUR BEST” TO DELIVER QUALITY!</h2>
            </div>

        </div>
    </div> */}


      {/* <div className="container-fluid pt-20 pb-20 lg:pt-20 lg:pb-32">
    <Slider />
    </div> */}


      {/* <div className="container mx-auto pt-20 lg:pt-20 lg:pb-32 px-4 lg:px-16 xl:px-0">
        <div className="col">
          <motion.h1 initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }} className="text-4xl lg:text-5xl font-bold text-center"><span className="linear-text">Our Services</span></motion.h1>
          <motion.p initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }} className="mt-5 lg:mt-7 xl:max-w-2xl mx-auto text-center dark:text-gray-400">Gnotis provides IT Maintenance Services, based on decade worth of experience supporting businesses of all sizes in India, Singapore, Australia, Hong Kong, Malaysia, Indonesia, Philippines, Ireland, UK and Netherlands.</motion.p>

          <motion.div className="column-grids grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-16 xl:gap-16 lg:mt-14 lg:max-w-5xl mx-auto mt-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.4, once: true }}
          >
            {StatusComponentItems.map((status) => {
                return (
                    <StatusComponentItem status={status} key={status.id} />
                )
            })}
            
          </motion.div>
        </div>
      </div> */}



      <Timeline />


      {/* <div className="container mx-auto pt-20 pb-20 lg:pt-24 lg:pb-24 px-4 lg:px-16 xl:px-0">
        <div className="gnotis--catalyze two--grid-section relative">
          <motion.div className="flex justify-center items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.4, once: true }}
          >
            <div className="flex flex-col items-center">
              <motion.h1 variants={childVariants} className="linear-text text-4xl lg:text-5xl font-bold text-center">Our People</motion.h1>

              <motion.div className="py-5 mx-auto"><Image
                className="w-auto top-0 h-full"
                src="/009930.png"
                alt="hero-image"
                width="500"
                height="500"
              /></motion.div>

              <motion.p variants={childVariants} className="mt-5 lg:mt-7 max-w-4xl mx-auto text-center dark:text-gray-400">We recruit only the best staff that have the right ability to deal with the jobs on hand. We know it's not just about IT and having people with a friendly and professional manner is equally valuable. All of our staff are highly technical and has got relevant industry recognised technical and management certifications. We look for people who enjoy what they do and enjoy to be contributing to helping our customer’s needs. People who feel pleased when the customers are happy.</motion.p>
            </div>
          </motion.div>
        </div>
      </div> */}

      {/* <motion.div className="embla" ref={emblaRef}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.4, once: true }}
      >
            <div className="embla__container">
                <motion.div className="embla__slide" variants={childVariants}>
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <div className="embla__slide_copy mt-4">
                        <h3 className="font-bold text-xl text-center dark:text-white/90">Michele Shoks</h3>
                        <p className="text-center dark:text-white/60">Core Members</p>
                    </div>
                </motion.div>
                <motion.div className="embla__slide" variants={childVariants}>
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <div className="embla__slide_copy mt-4">
                        <h3 className="font-bold text-xl text-center dark:text-white/90">Michele Shoks</h3>
                        <p className="text-center dark:text-white/60">Core Members</p>
                    </div>
                </motion.div>
                <motion.div className="embla__slide" variants={childVariants}>
                    <img src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <div className="embla__slide_copy mt-4">
                        <h3 className="font-bold text-xl text-center dark:text-white/90">Michele Shoks</h3>
                        <p className="text-center dark:text-white/60">Core Members</p>
                    </div>
                </motion.div>
                <motion.div className="embla__slide" variants={childVariants}>
                    <img src="https://images.unsplash.com/photo-1496203695688-3b8985780d6a?q=80&w=2795&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <div className="embla__slide_copy mt-4">
                        <h3 className="font-bold text-xl text-center dark:text-white/90">Michele Shoks</h3>
                        <p className="text-center dark:text-white/60">Core Members</p>
                    </div>
                </motion.div>
                <motion.div className="embla__slide" variants={childVariants}>
                    <img src="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <div className="embla__slide_copy mt-4">
                        <h3 className="font-bold text-xl text-center dark:text-white/90">Michele Shoks</h3>
                        <p className="text-center dark:text-white/60">Core Members</p>
                    </div>
                </motion.div>
                <motion.div className="embla__slide" variants={childVariants}>
                    <img src="https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <div className="embla__slide_copy mt-4">
                        <h3 className="font-bold text-xl text-center dark:text-white/90">Michele Shoks</h3>
                        <p className="text-center dark:text-white/60">Core Members</p>
                    </div>
                </motion.div>
                <motion.div className="embla__slide" variants={childVariants}>
                    <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2662&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <div className="embla__slide_copy mt-4">
                        <h3 className="font-bold text-xl text-center dark:text-white/90">Michele Shoks</h3>
                        <p className="text-center dark:text-white/60">Core Members</p>
                    </div>
                </motion.div>
            </div>
          </motion.div> */}


      {/* WHY GNOTIS */}
      <div className="container mx-auto pt-12 lg:pt-20 xl:pt-40 px-4 lg:px-16 xl:px-0">
      <h1 className="linear-text text-4xl lg:text-5xl font-bold !leading-[6.5rem]">Why Royal Construction?</h1>
<div className="flex justify-between items-center mt-5 lg:mt-7 lg:pb-16 pb-10 flex-col lg:flex-row">
  <p className="xl:max-w-4xl dark:text-gray-400">At Royal Construction Company, we believe in delivering nothing less than excellence. Our team is made up of highly skilled professionals who are experts in their respective fields. From engineers and architects to project managers and contractors, each member is committed to delivering projects with the utmost attention to detail, safety, and quality. We also prioritize strong communication and a customer-first mindset to ensure that each project is executed seamlessly, on time, and within budget.</p>
          <motion.div variants={childVariants}>
            <Link href="contact">
              <Button text="Contact Us" className={`${syne.className}`} />
            </Link>
          </motion.div>
</div>

      <motion.div
          className="grid lg:grid-cols-3 gap-5 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.4, once: true }}
        >
          {WhyGnotisItems.map((item) => (
            <SimpleBlueComponentItem item={item} key={item.id} />
          ))}
        </motion.div>
      </div>

    </div>
  );
}

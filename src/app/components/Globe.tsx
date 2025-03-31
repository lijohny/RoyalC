"use client"
import React, { useEffect, useState } from 'react';
import * as motion from "motion/react-client"
import Image from 'next/image';


interface GlobePosition {
  country: string;
  flag: string;
  address: string;
  position: {
    desktop: string;
    mobile: string;
  };
}

const globePositions: GlobePosition[] = [
  {
    country: 'India',
    flag: '/flags/india.webp',
    address: 'Balakrishna Menon Road, 3rd Lane, Kochi, Kerala 682024, IN',
    position: {
      desktop: '-380px 0px',
      mobile: '-280px 0px'
    }
  },
  {
    country: 'Australia',
    flag: '/flags/australia.webp',
    address: 'Collins St, Docklands, Victoria 3008, AU',
    position: {
      desktop: '-380px 0px',
      mobile: '-280px 0px'
    }
  },
  {
    country: 'UK',
    flag: '/flags/uk.webp',
    address: '',
    position: {
      desktop: '-250px 0px',
      mobile: '-150px 0px'
    }
  },
  {
    country: 'Belgium',
    flag: '/flags/belgium.webp',
    address: '',
    position: {
      desktop: '-250px 0px',
      mobile: '-200px 0px'
    }
  },
  {
    country: 'Ireland',
    flag: '/flags/ireland.webp',
    address: '13 Adelaide Road, Dublin 2, County Dublin IE',
    position: {
      desktop: '-180px 0px',
      mobile: '-180px 0px'
    }
  },
  {
    country: 'US',
    flag: '/flags/usa.webp',
    address: '',
    position: {
      desktop: '-20px 0px',
      mobile: '-20px 0px'
    }
  }
]

export default function Globe() {

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % globePositions.length)
    }, 4000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1200); // Adjust breakpoint if needed
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Check size on initial load

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const currentGlobePosition = globePositions[currentIndex];

  const position = (() => {
    if (currentGlobePosition.country === 'India') {
      return isMobile ? { top: '3rem', left: '9rem' } : { top: '6rem', left: '11.5rem' };
    } else if (currentGlobePosition.country === 'Australia') {
      return isMobile ? { top: '8rem', left: '8rem' } : { top: '12rem', left: '13rem' };
    } else if (currentGlobePosition.country === 'UK') {
      return isMobile ? { top: '1rem', left: '9rem' } : { top: '2rem', left: '9rem' };
    } else if (currentGlobePosition.country === 'Belgium') {
      return isMobile ? { top: '0.7rem', left: '6rem' } : { top: '1.25rem', left: '11rem' };
    } else if (currentGlobePosition.country === 'Ireland') {
      return isMobile ? { top: '1rem', left: '7rem' } : { top: '3rem', left: '12rem' };
    } else if (currentGlobePosition.country === 'US') {
      return isMobile ? { top: '4rem', left: '7rem' } : { top: '6rem', left: '9rem' };
    }
    return {}; // Default case
  })();

  return (
    <div className="globe lg:pt-20 pt-10 relative xl:pt-16">
      <div className="flex flex-col gap-20 globe-inner items-center lg:flex-row max-w-2xl mx-auto">
        <div className="bg-cover bg-slate-100 h-[300px] rounded-full w-[300px] globe-elem overflow-hidden relative xl:h-[400px] xl:mx-auto xl:w-[400px]"
        >
          <img src="/world-map.webp" style={{ objectPosition: isMobile ? currentGlobePosition.position.mobile as React.CSSProperties['objectPosition'] : currentGlobePosition.position.desktop as React.CSSProperties['objectPosition'] }} className="h-full w-full duration-500 object-cover transition-all" alt="globe" />

          <motion.div className="absolute left-32 pointer-elem top-32"
            animate={{
              top: position.top,
              left: position.left,
            }}
            transition={{
              duration: 0.5, // Animation duration
              ease: 'easeInOut', // Easing function
            }}
          >
            <div className="flex bg-white rounded-e-full rounded-tl-full shadow-lg country-item items-center px-3 py-1">
              <div className="country-label font-semibold mr-2">{currentGlobePosition.country}</div>
              <div className="h-5 rounded-full w-5 country-flag overflow-hidden">
                <Image src={currentGlobePosition.flag} className="h-full w-full object-cover" width="50" height="50" alt="globe" />
              </div>
            </div>
            <motion.div className={`pin inline-block relative`}
              // animate={currentGlobePosition.country==='Australia' ? {left: '85%'} : '' }
              animate={
                currentGlobePosition.country === 'Australia'
                  ? { left: '85%' }
                  : ''
              }
            >
              <svg
                className={`fill-white mt-1`}
                width="16" height="21" viewBox="0 0 16 21" fill="fill-white" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.73591 20.0849C4.65099 17.4788 0 11.2641 0 7.73575C0 3.48571 3.40805 0.0375645 7.69819 0.0375645C11.9482 0.0375645 15.3964 3.48571 15.3964 7.73575C15.3964 11.2641 10.7053 17.4788 8.62037 20.0849C8.13923 20.6863 7.21705 20.6863 6.73591 20.0849ZM7.69819 10.3018C9.1015 10.3018 10.2642 9.17916 10.2642 7.73575C10.2642 6.33244 9.1015 5.16969 7.69819 5.16969C6.25478 5.16969 5.13212 6.33244 5.13212 7.73575C5.13212 9.17916 6.25478 10.3018 7.69819 10.3018Z" />
              </svg>
            </motion.div>
          </motion.div>
        </div>

        <div className="w-[300px] relative right xl:-translate-y-1/2 xl:absolute xl:mt-8 xl:right-8 xl:top-1/2">
          <div className="flex gap-3 items-center location-title">
            <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className='dark:fill-gray-300' d="M6.73591 20.0849C4.65099 17.4788 0 11.2641 0 7.73575C0 3.48571 3.40805 0.0375645 7.69819 0.0375645C11.9482 0.0375645 15.3964 3.48571 15.3964 7.73575C15.3964 11.2641 10.7053 17.4788 8.62037 20.0849C8.13923 20.6863 7.21705 20.6863 6.73591 20.0849ZM7.69819 10.3018C9.1015 10.3018 10.2642 9.17916 10.2642 7.73575C10.2642 6.33244 9.1015 5.16969 7.69819 5.16969C6.25478 5.16969 5.13212 6.33244 5.13212 7.73575C5.13212 9.17916 6.25478 10.3018 7.69819 10.3018Z" fill="#072558" />
            </svg>
            <div className="text-gray-600 text-sm dark:text-gray-400 font-semibold title">Location</div>
          </div>
          <div className="copy mt-3 pl-6">
            <div className="flex justify-between">
              <div className="text-lg dark:text-gray-200 font-semibold location uppercase">{currentGlobePosition.country}</div>
              <div className="h-16 w-16 -top-2 absolute flag right-5">
                <Image src={currentGlobePosition.flag} className="h-full w-full object-cover" width="50" height="50" alt="globe" />
              </div>
            </div>
            <p className='text-sm dark:text-gray-400'>info@gnotis.io</p>
            <p className='text-sm dark:text-gray-400'>{currentGlobePosition.address}</p>
            {/* <button className='border border-gray-900 rounded text-sm dark:border-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-400 dark:text-gray-400 font-semibold hover:bg-gray-900 hover:text-white mt-2 px-3 py-1'>View in Map</button> */}
          </div>
        </div>


      </div>
    </div>
  )
}
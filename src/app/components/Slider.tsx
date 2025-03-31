import React, {useContext} from 'react';

import { ThemeContext } from './ThemeContext';

export default function Slider() {

  const { theme } = useContext(ThemeContext);

    return (
        <div className="slider">
          <div className="slide-track">
          <div className="slide flex items-center justify-center p-5 lg:px-4 xl:px-12 lg:py-5">
              <img
                src="./clients/aAndO.svg"
                height={100}
                width={250}
                alt=""
                className='invert  dark:invert-0'
              />
            </div>
            <div className="slide flex items-center justify-center p-5 lg:px-4 xl:px-12 lg:py-5">
              <img
                src="./clients/Acumant.webp"
                height={100}
                width={250}
                alt=""
              />
            </div>
            <div className="slide flex items-center justify-center p-5 lg:px-4 xl:px-12 lg:py-5">
              <img
                src="./clients/autointelli.webp"
                height={100}
                width={250}
                alt=""
              />
            </div>
            <div className="slide flex items-center justify-center p-5 lg:px-4 xl:px-12 lg:py-5">
              <img
                // src="./clients/beautomate.webp"
                src={theme === "dark" ? "./clients/beautomate.webp" : "./clients/beautomate-dark.webp"}
                height={100}
                width={250}
                alt=""
              />
            </div>
            <div className="slide flex items-center justify-center p-5 lg:px-4 xl:px-12 lg:py-5">
              <img
                src="./clients/EIL.png"
                height={100}
                width={250}
                alt=""
              />
            </div>
            <div className="slide flex items-center justify-center p-5 lg:px-4 xl:px-12 lg:py-5">
              <img
                src="./clients/Gox-Labs.png"
                height={100}
                width={250}
                alt=""
              />
            </div>
            <div className="slide flex items-center justify-center p-5 lg:px-4 xl:px-12 lg:py-5">
              <img
                src={theme === "dark" ? "./clients/Iron.png" : "./clients/Iron-dark.png"}
                height={100}
                width={250}
                alt=""
              />
            </div>
            <div className="slide flex items-center justify-center p-5 lg:px-4 xl:px-12 lg:py-5">
              <img
                src="./clients/PMDG-Technologies.png"
                height={100}
                width={250}
                alt=""
              />
            </div>
            <div className="slide flex items-center justify-center p-5 lg:px-4 xl:px-12 lg:py-5">
              <img
                src="./clients/wipro_new_logo.svg"
                height={100}
                width={250}
                alt=""
              />
            </div>
            {/* <div className="slide flex items-center justify-center p-5 lg:px-4 xl:px-12 lg:py-5">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png"
                height={100}
                width={250}
                alt=""
              />
            </div> */}
            <div className="slide flex items-center justify-center p-5 lg:px-4 xl:px-12 lg:py-5">
              <img
                src="./clients/aAndO.svg"
                height={100}
                width={250}
                alt=""
                className='invert  dark:invert-0'
              />
            </div>
            <div className="slide flex items-center justify-center p-5 lg:px-4 xl:px-12 lg:py-5">
              <img
                src="./clients/Acumant.webp"
                height={100}
                width={250}
                alt=""
              />
            </div>
            <div className="slide flex items-center justify-center p-5 lg:px-4 xl:px-12 lg:py-5">
              <img
                src="./clients/autointelli.webp"
                height={100}
                width={250}
                alt=""
              />
            </div>
            <div className="slide flex items-center justify-center p-5 lg:px-4 xl:px-12 lg:py-5">
              <img
                src={theme === "dark" ? "./clients/beautomate.webp" : "./clients/beautomate-dark.webp"}
                height={100}
                width={250}
                alt=""
              />
            </div>
            <div className="slide flex items-center justify-center p-5 lg:px-4 xl:px-12 lg:py-5">
              <img
                src="./clients/EIL.png"
                height={100}
                width={250}
                alt=""
              />
            </div>
            <div className="slide flex items-center justify-center p-5 lg:px-4 xl:px-12 lg:py-5">
              <img
                src="./clients/Gox-Labs.png"
                height={100}
                width={250}
                alt=""
              />
            </div>
            <div className="slide flex items-center justify-center p-5 lg:px-4 xl:px-12 lg:py-5">
              <img
                src={theme === "dark" ? "./clients/Iron.png" : "./clients/Iron-dark.png"}
                height={100}
                width={250}
                alt=""
              />
            </div>
            <div className="slide flex items-center justify-center p-5 lg:px-4 xl:px-12 lg:py-5">
              <img
                src="./clients/PMDG-Technologies.png"
                height={100}
                width={250}
                alt=""
              />
            </div>
            <div className="slide flex items-center justify-center p-5 lg:px-4 xl:px-12 lg:py-5">
              <img
                src="./clients/wipro_new_logo.svg"
                height={100}
                width={250}
                alt=""
              />
            </div>
          </div>
        </div>
    )
}
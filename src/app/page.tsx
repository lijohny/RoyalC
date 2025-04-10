"use client"
import Image from "next/image";
import {useState, useEffect} from 'react';
import HomeServices from "./components/homeServices";
import StatusComponentItem from "./components/statusComponentItem";
import SimpleBlueComponentItem from "./components/SimpleBlueComponent";
import { Syne } from 'next/font/google'
import Button from "./components/Button";
import Slider from "./components/Slider";
import Globe from "./components/Globe";
// import { motion } from "motion/react"
import * as motion from "motion/react-client"
import Link from "next/link";

const syne = Syne({
  weight: ['400', '700'],
  subsets: ['latin'],
})

const StatusComponentItems = [
  {
    id: 1,
    count: 10+'+',
    text: 'Accessible engineers'
  },
  {
    id: 2,
    count: 62+'+',
    text: 'No. of projects'
  },
  {
    id: 3,
    count: 12+'+',
    text: 'Years of Experience'
  },
  {
    id: 4,
    count: 3+'+',
    text: 'Products under development'
  }
]

const WhyGnotisItems = [
  {
    id:1,
    icon:'icons/sales-marketing.svg',
    title:'Total Cost of Ownership',
    description:'Moving to a single service facilitation hub through Gnotis reduces wait times and increase operational efficiency.',
  },
  {
    id:2,
    icon:'icons/sales-marketing.svg',
    title:'Global Support',
    description:'royal construction  is expanding to more places extending service offering worldwide - APAC, Europe and soon the Americas. Direct despatch of technicians to large businesses and other technology providers along with additional outsourcing capabilities are proven service offering by royal construction .',
  },
  {
    id:3,
    icon:'icons/sales-marketing.svg',
    title:'Consulting',
    description:'We are enabling clients and partners to uncover positive potentials and help shaping their product and service portfolio to grow. We review the IT estate and propose various cost effective and efficient model to small and medium businesses.',
  }
]


// Define variants for the container
const containerVariants = {
  hidden: {
    opacity: 0,
    y:100
  },
  visible: {
    opacity: 1,
    y:0,
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

export default function Home() {

  return (
    <div className="royal construction -labs">
      
      <div className="hero-container relative pt-10 lg:pt-12 xl:pt-0">

        <div className="hero-elems absolute">
          <div className="elem absolute left-1/2 -translate-x-1/2">
          <Image 
          src="/0cf99c.webp"
          alt="hero-elem"
          width={200}
          height={200}
          unoptimized={true}
          />
          </div>
          <div className="elem absolute left-0">
          <Image 
          src="/0cf99c.webp"
          alt="hero-elem"
          width={200}
          height={200}
          unoptimized={true}
          />
          </div>
        </div>

      <div className="container mx-auto xl:pt-1 px-4 lg:px-16 xl:px-0">
        <div className="hero--section relative">

        <svg className="absolute w-full xl:top-[-16rem] xl:left-[-26rem] pointer-events-none" width="750" height="395" viewBox="0 0 750 395" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.3">
          <path d="M518.44 364.648C486.464 364.648 452.458 362.327 416.781 357.701C358.362 350.124 298.009 336.653 237.39 317.663C176.77 298.674 119.519 275.305 67.2172 248.206C16.6925 222.027 -27.1056 193.478 -62.9638 163.363C-98.8421 133.233 -124.968 103.043 -140.616 73.6376C-156.843 43.135 -161.043 14.8122 -153.098 -10.5504C-145.153 -35.913 -125.542 -56.78 -94.8092 -72.5674C-65.1741 -87.791 -26.4913 -97.6783 20.1615 -101.957C66.7993 -106.232 119.056 -104.686 175.486 -97.3662C233.906 -89.7846 294.258 -76.318 354.878 -57.3287C415.497 -38.3395 472.749 -14.9705 525.051 12.129C575.575 38.3071 619.373 66.8564 655.232 96.9714C691.11 127.101 717.236 157.292 732.884 186.697C749.111 217.195 753.31 245.517 745.365 270.88C737.42 296.243 717.81 317.11 687.077 332.897C657.442 348.121 618.759 358.008 572.106 362.287C554.953 363.858 537.039 364.643 518.435 364.643L518.44 364.648ZM74.1602 -103.558C55.5212 -103.558 37.5065 -102.773 20.232 -101.192C-26.3252 -96.9232 -64.9123 -87.0611 -94.4567 -71.8828C-124.998 -56.191 -144.478 -35.48 -152.362 -10.3188C-160.247 14.8424 -156.063 42.9638 -139.936 73.2751C-124.333 102.595 -98.2681 132.71 -62.4704 162.774C11.1995 224.64 117.772 279.388 237.621 316.928C357.471 354.469 476.233 370.307 572.041 361.527C618.598 357.258 657.185 347.396 686.73 332.217C717.271 316.526 736.751 295.815 744.635 270.653C752.52 245.492 748.336 217.371 732.209 187.059C716.606 157.74 690.541 127.625 654.743 97.5604C581.073 35.6943 474.501 -19.0532 354.651 -56.5937C256.411 -87.3682 158.897 -103.558 74.1602 -103.558Z" fill="url(#paint0_linear_236_243)"/>
          <path d="M473.011 365.64C449.06 365.64 424.107 364.236 398.304 361.431C343.041 355.421 286.293 343.207 229.631 325.124C149.124 299.429 74.5783 263.495 14.0494 221.207C-44.9137 180.012 -88.0119 134.724 -110.593 90.2257C-119.56 72.5605 -125.184 55.142 -127.309 38.4584C-129.494 21.2916 -127.989 4.76411 -122.833 -10.6558C-113.715 -37.9315 -93.7466 -60.8374 -63.4872 -78.7291C-34.2952 -95.9916 3.20433 -107.893 47.9691 -114.095C92.7138 -120.297 142.468 -120.498 195.853 -114.694C251.115 -108.683 307.863 -96.4699 364.525 -78.3818C445.032 -52.6869 519.578 -16.7523 580.107 25.5355C639.065 66.7308 682.168 112.019 704.749 156.512C713.716 174.177 719.34 191.596 721.465 208.279C723.65 225.446 722.145 241.973 716.989 257.393C707.871 284.669 687.903 307.575 657.643 325.467C628.451 342.729 590.952 354.63 546.187 360.832C523.072 364.034 498.613 365.64 473.011 365.64ZM121.599 -118.162C96.0015 -118.162 71.3912 -116.567 48.0749 -113.335C-43.7305 -100.608 -104.169 -64.0542 -122.103 -10.4091C-132.303 20.0985 -128.2 53.8381 -109.908 89.8783C-87.3826 134.26 -44.3649 179.453 14.4925 220.573C74.9609 262.82 149.436 298.715 229.868 324.384C341.878 360.133 454.18 372.804 546.081 360.067C637.887 347.341 698.325 310.787 716.259 257.142C726.46 226.634 722.356 192.894 704.065 156.854C681.539 112.472 638.521 67.2796 579.664 26.1597C519.195 -16.0878 444.72 -51.9821 364.288 -77.6518C280.69 -104.333 196.92 -118.162 121.599 -118.162Z" fill="url(#paint1_linear_236_243)"/>
          <path d="M430.668 367.381C414.118 367.381 397.156 366.646 379.821 365.166C327.72 360.726 274.572 349.767 221.868 332.585C151.007 309.487 85.3479 276.271 31.9886 236.526C-19.8653 197.903 -58.7242 154.276 -80.3992 110.357C-90.7055 89.4702 -97.0243 68.6988 -99.1741 48.6272C-101.389 27.9314 -99.1691 7.95042 -92.5735 -10.7519C-82.2822 -39.9455 -61.9566 -64.8853 -32.1654 -84.8864C-3.41641 -104.188 32.8999 -118.097 75.7716 -126.233C118.628 -134.363 165.875 -136.311 216.209 -132.022C268.309 -127.582 321.457 -116.622 374.162 -99.4404C445.022 -76.3432 510.682 -43.1272 564.041 -3.3817C615.895 35.2411 654.754 78.8681 676.429 122.787C686.735 143.674 693.054 164.445 695.204 184.517C697.419 205.213 695.199 225.194 688.603 243.896C678.312 273.09 657.986 298.03 628.195 318.031C599.446 337.332 563.13 351.242 520.258 359.377C492.158 364.708 462.171 367.381 430.668 367.381ZM165.84 -133.512C134.448 -133.512 104.264 -130.854 75.9176 -125.478C-12.0059 -108.799 -71.5882 -67.9662 -91.8484 -10.4951C-104.753 26.109 -100.559 67.7826 -79.7145 110.02C-34.9345 200.768 80.7158 285.771 222.099 331.855C292.718 354.876 364.112 366.657 430.189 366.657C461.582 366.657 491.766 363.998 520.112 358.622C608.035 341.943 667.618 301.11 687.878 243.639C700.782 207.035 696.588 165.362 675.744 123.124C630.964 32.3767 515.314 -52.6268 373.93 -98.7104C303.311 -121.732 231.917 -133.512 165.84 -133.512Z" fill="url(#paint2_linear_236_243)"/>
          <path d="M391.426 369.793C381.518 369.793 371.493 369.496 361.338 368.902C312.389 366.032 262.851 356.326 214.099 340.046C182.843 329.609 152.749 316.702 124.655 301.679C97.3964 287.105 71.9855 270.527 49.1324 252.404C4.14101 216.726 -30.4383 175.395 -50.8596 132.876C-74.7097 83.2177 -78.6721 33.5194 -62.3189 -10.8576C-50.8546 -41.9643 -30.1715 -68.9479 -0.848534 -91.0533C27.4624 -112.394 62.5905 -128.317 103.569 -138.375C144.533 -148.434 189.277 -152.129 236.559 -149.355C285.508 -146.486 335.046 -136.78 383.798 -120.499C415.055 -110.063 445.148 -97.1549 473.242 -82.1326C500.501 -67.5585 525.907 -50.9806 548.765 -32.8573C593.757 2.82051 628.336 44.1518 648.757 86.6712C672.607 136.329 676.57 186.027 660.216 230.404C648.752 261.511 628.069 288.495 598.746 310.6C570.435 331.94 535.307 347.864 494.328 357.922C462.161 365.821 427.657 369.793 391.426 369.793ZM206.849 -149.536C170.915 -149.536 136.2 -145.589 103.76 -137.62C19.7188 -116.985 -39.0026 -71.8728 -61.5939 -10.5857C-77.8766 33.5899 -73.9243 83.0868 -50.1648 132.548C-7.73116 220.89 91.1481 298.186 214.341 339.316C310.672 371.479 410.045 377.818 494.142 357.172C578.184 336.537 636.905 291.425 659.497 230.138C675.779 185.962 671.827 136.465 648.067 87.0034C605.634 -1.33778 506.754 -78.6338 383.562 -119.764C324.387 -139.518 264.07 -149.531 206.849 -149.531V-149.536Z" fill="url(#paint3_linear_236_243)"/>
          <path d="M355.245 372.814C351.137 372.814 347.008 372.753 342.86 372.638C297.068 371.339 251.135 362.886 206.335 347.512C179.6 338.339 153.897 326.861 129.941 313.4C106.665 300.326 84.9196 285.313 65.3089 268.781C26.8729 236.385 -3.39656 197.974 -22.237 157.695C-35.2571 129.855 -42.7942 101.467 -44.637 73.3207C-46.5452 44.2076 -42.3109 15.8546 -32.0549 -10.9528C-19.4174 -43.9776 1.62317 -72.995 30.4829 -97.2098C58.3508 -120.589 92.2957 -138.521 131.376 -150.508C170.452 -162.494 212.689 -167.931 256.92 -166.683C302.712 -165.384 348.645 -156.931 393.445 -141.557C420.18 -132.384 445.883 -120.906 469.839 -107.444C493.115 -94.3705 514.86 -79.3584 534.471 -62.8258C572.907 -30.4304 603.176 7.98103 622.017 48.2602C635.037 76.0996 642.574 104.488 644.417 132.634C646.325 161.747 642.091 190.105 631.835 216.908C619.197 249.933 598.157 278.95 569.297 303.165C541.429 326.544 507.484 344.476 468.404 356.463C432.993 367.327 394.985 372.814 355.245 372.814ZM244.685 -166.159C205.479 -166.159 167.29 -160.712 131.608 -149.768C51.448 -125.18 -6.41748 -75.779 -31.3349 -10.6759C-51.5851 42.2492 -48.1966 100.355 -21.5371 157.373C17.8001 241.495 100.951 310.535 206.587 346.787C295.079 377.158 387.982 380.335 468.182 355.733C548.342 331.145 606.207 281.744 631.125 216.641C651.375 163.716 647.986 105.61 621.327 48.5924C581.99 -35.5301 498.844 -104.57 393.203 -140.822C344.083 -157.676 293.594 -166.159 244.685 -166.159Z" fill="url(#paint4_linear_236_243)"/>
          <path d="M322.046 376.378C280.202 376.378 238.674 369.179 198.572 354.972C153.908 339.15 114.107 315.781 80.278 285.525C64.0608 271.021 49.4245 255.032 36.777 238.016C24.2251 221.121 13.5714 203.134 5.11286 184.542C-9.13071 153.244 -17.0606 120.733 -18.4704 87.9098C-19.9254 53.9336 -14.3166 20.637 -1.78992 -11.0487C12.0207 -45.9915 33.4187 -77.0478 61.8153 -103.367C89.2401 -128.78 121.997 -148.721 159.184 -162.64C196.366 -176.555 236.101 -183.744 277.281 -184.006C319.906 -184.273 362.244 -177.079 403.092 -162.605C447.756 -146.782 487.557 -123.413 521.386 -93.1574C537.603 -78.6537 552.239 -62.6649 564.887 -45.6491C577.439 -28.7542 588.092 -10.7668 596.551 7.82477C610.795 39.1228 618.724 71.634 620.134 104.457C621.589 138.434 615.98 171.73 603.454 203.416C589.643 238.359 568.245 269.415 539.849 295.734C512.424 321.147 479.667 341.088 442.48 355.008C405.297 368.922 365.562 376.111 324.377 376.373C323.597 376.373 322.817 376.378 322.036 376.378H322.046ZM279.884 -183.17C155.076 -183.17 41.3889 -118.208 -1.07497 -10.7617C-25.6047 51.3057 -23.1578 120.557 5.81271 184.23C40.8502 261.234 111.202 323.206 198.828 354.252C365.306 413.234 546.505 345.442 602.744 203.139C627.274 141.072 624.827 71.8203 595.856 8.14696C560.819 -68.8571 490.467 -130.829 402.84 -161.875C362.053 -176.323 320.38 -183.165 279.884 -183.165V-183.17Z" fill="url(#paint5_linear_236_243)"/>
          <path d="M291.897 380.43C257.267 380.43 223.327 374.394 190.802 362.433C154.199 348.971 121.558 328.794 93.7859 302.46C66.9603 277.027 45.7535 246.922 30.7497 212.981C15.5042 178.496 7.43835 141.807 6.76368 103.934C6.06383 64.7219 13.3694 26.0034 28.4689 -11.1494C43.4526 -48.0103 65.2081 -81.1055 93.1414 -109.529C120.118 -136.976 151.692 -158.93 186.981 -174.773C222.27 -190.616 259.498 -199.552 297.632 -201.334C337.115 -203.176 375.838 -197.236 412.738 -183.663C449.342 -170.202 481.982 -150.025 509.755 -123.69C536.58 -98.2572 557.787 -68.1524 572.791 -34.2114C588.031 0.273315 596.102 36.963 596.777 74.8358C597.477 114.048 590.171 152.766 575.072 189.919C560.088 226.78 538.332 259.875 510.399 288.298C483.417 315.745 451.849 337.7 416.56 353.542C381.27 369.385 344.043 378.321 305.909 380.103C301.232 380.32 296.554 380.43 291.897 380.43ZM311.785 -200.825C192.026 -200.825 76.8235 -128.08 29.1788 -10.8574C-0.64258 62.5068 0.168032 141.892 31.4495 212.674C62.1973 282.232 118.885 335.162 191.064 361.713C224.047 373.846 258.088 379.6 291.756 379.6C411.515 379.6 526.717 306.855 574.362 189.632C604.183 116.268 603.373 36.8825 572.086 -33.8992C541.338 -103.458 484.651 -156.388 412.471 -182.939C379.488 -195.071 345.453 -200.825 311.785 -200.825Z" fill="url(#paint6_linear_236_243)"/>
          <path d="M264.598 384.916C236.373 384.916 209.029 379.887 183.039 369.894C153.832 358.662 127.771 341.662 105.578 319.37C84.1393 297.833 66.8547 271.932 54.2071 242.391C21.6317 166.303 23.2781 73.8591 58.7335 -11.2451C74.8852 -50.024 97.0083 -85.1632 124.478 -115.686C151.012 -145.172 181.397 -169.13 214.794 -186.901C248.19 -204.672 282.915 -215.359 317.998 -218.662C354.324 -222.08 389.452 -217.388 422.395 -204.722C451.602 -193.49 477.663 -176.49 499.856 -154.198C521.295 -132.661 538.579 -106.76 551.227 -77.2191C583.802 -1.13127 582.151 91.3129 546.701 176.417C530.549 215.196 508.426 250.335 480.955 280.858C454.422 310.344 424.037 334.302 390.645 352.073C357.249 369.843 322.524 380.531 287.441 383.834C279.773 384.554 272.155 384.916 264.598 384.916ZM340.921 -218.908C227.924 -218.908 112.38 -138.028 59.4383 -10.9481C24.0686 73.9648 22.4171 166.192 54.912 242.089C80.5948 302.077 126.195 347.214 183.316 369.179C209.587 379.283 236.982 384.085 264.508 384.085C377.505 384.095 493.049 303.205 545.991 176.13C581.36 91.2172 583.012 -1.01045 550.517 -76.907C524.834 -136.895 479.234 -182.032 422.113 -203.997C395.841 -214.101 368.447 -218.908 340.921 -218.908Z" fill="url(#paint7_linear_236_243)"/>
          <path d="M239.898 389.784C217.306 389.784 195.666 385.631 175.27 377.35C130.626 359.226 95.9413 322.793 74.9711 271.983C59.0963 233.511 51.7806 187.744 53.8197 139.632C54.8569 115.12 58.3007 90.0241 64.0505 65.0442C69.9715 39.3191 78.3596 13.6192 88.9881 -11.3457C106.313 -52.0427 128.794 -89.2207 155.801 -121.848C181.891 -153.367 211.088 -179.334 242.581 -199.028C274.084 -218.732 306.297 -231.162 338.329 -235.985C371.503 -240.979 403.032 -237.54 432.027 -225.775C476.671 -207.657 511.356 -171.219 532.326 -120.408C548.201 -81.9361 555.517 -36.1697 553.478 11.9428C552.441 36.4546 548.997 61.5504 543.247 86.5304C537.326 112.255 528.938 137.955 518.309 162.92C500.984 203.617 478.504 240.795 451.497 273.422C425.406 304.942 396.209 330.909 364.716 350.603C333.213 370.307 301 382.736 268.969 387.559C259.126 389.039 249.429 389.784 239.898 389.784ZM367.083 -237.48C326.89 -237.48 284.441 -224.29 242.999 -198.374C178.367 -157.953 123.925 -91.4257 89.7031 -11.0386C48.1455 86.5706 42.9092 192.265 75.6911 271.696C96.5807 322.31 131.12 358.602 175.567 376.645C232.693 399.833 299.727 390.353 364.319 349.963C428.951 309.543 483.393 243.015 517.615 162.628C559.172 65.019 564.408 -40.6753 531.627 -120.106C510.737 -170.72 476.198 -207.012 431.75 -225.055C411.279 -233.362 389.533 -237.48 367.083 -237.48Z" fill="url(#paint8_linear_236_243)"/>
          <path d="M217.577 395C199.89 395 183.139 391.602 167.506 384.816C142.457 373.947 121.789 355.038 106.086 328.618C90.9258 303.125 81.0021 271.741 76.5815 235.343C72.166 198.961 73.47 159.402 80.4684 117.753C87.7085 74.6447 100.759 31.1789 119.262 -11.4361C137.76 -54.0511 160.603 -93.268 187.147 -127.999C212.794 -161.553 240.803 -189.523 270.398 -211.145C300.008 -232.777 329.713 -246.959 358.689 -253.297C388.717 -259.867 416.64 -257.687 441.693 -246.818C466.742 -235.949 487.41 -217.04 503.113 -190.621C518.273 -165.127 528.197 -133.743 532.618 -97.3457C537.033 -60.9632 535.729 -21.3989 528.731 20.2445C521.491 63.3529 508.44 106.819 489.937 149.439C471.439 192.054 448.596 231.271 422.052 266.002C396.405 299.555 368.396 327.526 338.801 349.148C309.191 370.78 279.486 384.962 250.51 391.3C239.222 393.767 228.226 395 217.577 395ZM391.345 -256.272C353.599 -256.272 312.253 -240.782 270.846 -210.531C210.096 -166.149 156.51 -95.3371 119.962 -11.134C83.4088 73.069 68.274 160.569 77.3418 235.248C86.3995 309.855 118.532 362.72 167.813 384.106C217.094 405.496 277.658 392.855 338.348 348.519C399.099 304.137 452.684 233.325 489.232 149.122C525.78 64.9185 540.92 -22.582 531.852 -97.2602C522.795 -171.868 490.662 -224.733 441.381 -246.118C425.723 -252.914 408.922 -256.272 391.345 -256.272Z" fill="url(#paint9_linear_236_243)"/>
          </g>
          <defs>
          <linearGradient id="paint0_linear_236_243" x1="-588.408" y1="12.9265" x2="939.657" y2="29.0415" gradientUnits="userSpaceOnUse">
          <stop stopColor="#62D2FA"/>
          <stop offset="1" stopColor="#17ABE2"/>
          </linearGradient>
          <linearGradient id="paint1_linear_236_243" x1="-533.245" y1="2.23363" x2="901.184" y2="15.9772" gradientUnits="userSpaceOnUse">
          <stop stopColor="#62D2FA"/>
          <stop offset="1" stopColor="#17ABE2"/>
          </linearGradient>
          <linearGradient id="paint2_linear_236_243" x1="-478.941" y1="-8.83201" x2="863.315" y2="2.79225" gradientUnits="userSpaceOnUse">
          <stop stopColor="#62D2FA"/>
          <stop offset="1" stopColor="#17ABE2"/>
          </linearGradient>
          <linearGradient id="paint3_linear_236_243" x1="-425.592" y1="-20.2379" x2="826.131" y2="-10.4871" gradientUnits="userSpaceOnUse">
          <stop stopColor="#62D2FA"/>
          <stop offset="1" stopColor="#17ABE2"/>
          </linearGradient>
          <linearGradient id="paint4_linear_236_243" x1="-373.514" y1="-31.9397" x2="789.878" y2="-23.823" gradientUnits="userSpaceOnUse">
          <stop stopColor="#62D2FA"/>
          <stop offset="1" stopColor="#17ABE2"/>
          </linearGradient>
          <linearGradient id="paint5_linear_236_243" x1="-322.903" y1="-43.9152" x2="754.69" y2="-37.2091" gradientUnits="userSpaceOnUse">
          <stop stopColor="#62D2FA"/>
          <stop offset="1" stopColor="#17ABE2"/>
          </linearGradient>
          <linearGradient id="paint6_linear_236_243" x1="-274.188" y1="-56.1382" x2="720.873" y2="-50.6332" gradientUnits="userSpaceOnUse">
          <stop stopColor="#62D2FA"/>
          <stop offset="1" stopColor="#17ABE2"/>
          </linearGradient>
          <linearGradient id="paint7_linear_236_243" x1="-227.872" y1="-68.5786" x2="688.81" y2="-64.0811" gradientUnits="userSpaceOnUse">
          <stop stopColor="#62D2FA"/>
          <stop offset="1" stopColor="#17ABE2"/>
          </linearGradient>
          <linearGradient id="paint8_linear_236_243" x1="-184.684" y1="-81.2081" x2="658.999" y2="-77.5399" gradientUnits="userSpaceOnUse">
          <stop stopColor="#62D2FA"/>
          <stop offset="1" stopColor="#17ABE2"/>
          </linearGradient>
          <linearGradient id="paint9_linear_236_243" x1="-145.498" y1="-94" x2="632.13" y2="-90.9985" gradientUnits="userSpaceOnUse">
          <stop stopColor="#62D2FA"/>
          <stop offset="1" stopColor="#17ABE2"/>
          </linearGradient>
          </defs>
          </svg>

          <div className="grid lg:grid-cols-2 lg:items-center">
            <motion.div className="col max-w-10/12 xl:pr-32 order-2 lg:order-1 relative z-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.05 },
            }}
            >
              <motion.h1 variants={childVariants} className="linear-text text-4xl lg:text-5xl 2xl:text-6xl font-bold mb-8 capitalize">Your Home Partner 
                <br /><span className="bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#c3972c] to-[#f6d94b] bg-clip-text text-transparent">Royal Construction</span>
              </motion.h1>
              <motion.p variants={childVariants} className={`text-lg dark:text-gray-300 capitalize`} >Build Your Dream Home With Us</motion.p>
              <motion.p variants={childVariants} className="mt-5 lg:mt-7 dark:text-gray-400">Royal Construction is a premier construction company committed to delivering high-quality infrastructure and architectural excellence. With years of experience in the industry, we specialize in residential, commercial, and industrial projects, ensuring durability, innovation, and customer satisfaction. </motion.p>
              <motion.p variants={childVariants} className="mt-5 lg:mt-7 dark:text-gray-400"> Our skilled team of engineers, architects, and project managers work with precision, using modern technology and sustainable building practices to create structures that stand the test of time. </motion.p>
              <motion.div variants={childVariants}>
                  <Link href="contact">
                  <Button text="Contact Us" className={`${syne.className}`} />
                  </Link></motion.div> 
              </motion.div>

            <div className="col relative order-1 lg:order-2 lg:pl-5">
              
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}
              transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.25 },
              }}>
              <Image
                className="w-full mb-5 lg:mb-0 lg:w-10/12 object-contain rounded-2xl"
                src="/4df72new.jpeg"
                alt="hero-image"
                width="500"
                height="500"
                quality={100} 
                priority 
              />
              </motion.div>

              <motion.div className="elem absolute left-0 xl:-left-28 -translate-x-1/2 lg:w-[8rem]" initial={{  opacity:0, bottom:50 }} animate={{ opacity:0.2, bottom:-100 }}
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
                unoptimized={true}
              />
              </motion.div>

              <motion.div className="elem absolute -left-[50rem] xl:-bottom-32 lg:w-[12rem]" initial={{ scale: 0 }} animate={{ scale: 1 }}
              transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.25 },
              }}>
              <Image
                className="w-full blur opacity-60"
                src="/0cf99c.webp"
                alt="hero-image"
                width="500"
                height="500"
                unoptimized={true}
              />
              </motion.div>

              <motion.div className="elem absolute left-2/3 -translate-x-1/2 top-8 lg:w-[28rem]" style={{ zIndex:-1 }}
              initial={{ left: -500, opacity:0 }} animate={{ left: 350, opacity:0.6 }}
              transition={{
                duration: 0.75,
                left: { type: "spring", visualDuration: 0.4, bounce: 0.25 },
              }}>
              <Image 
              src="/0cf99c.webp"
              className="w-96 lg:w-full blur-md"
              alt="hero-elem"
              width={200}
              height={200}
              unoptimized={true}
              />
              </motion.div>

              <motion.div className="elem absolute top-8 lg:w-[30rem]" style={{ zIndex:-1 }}
              initial={{ left: -300, opacity:0, scale:1 }} animate={{ scale:0.3, left: -300, opacity:0.4, top:-250 }}
              transition={{
                duration: 0.6,
              }}>
              <Image 
              src="/c2121.png"
              className="w-96 lg:w-[30rem] blur-md"
              alt="hero-elem"
              width={200}
              height={200}
              unoptimized={true}
              />
              </motion.div>

            </div>
          </div>
        </div>
      </div>
      </div>

      <div className="container-fluid pt-12 pb-12 sm:pt-16 sm:pb-16 lg:pt-20 lg:pb-20 xl:pt-32 xl:pb-32">
        <Slider />
      </div>

      <div className="home-services mx-4 bg-gray-900 rounded-2xl py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-16 xl:px-0">
        <HomeServices />
      </div>
      </div>

      <div className="container mx-auto pt-20 lg:pt-36 lg:pb-32 px-4 lg:px-16 xl:px-0">
        <div className="col">
        <motion.h1 initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }} className="text-4xl lg:text-5xl font-bold text-center">
  <span className="linear-text">Royal Construction In Numbers</span>
</motion.h1>
<motion.p initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }} className="mt-5 lg:mt-7 xl:max-w-2xl mx-auto text-center dark:text-gray-400">
  Royal Construction has built a solid reputation in the industry, with decades of experience delivering large-scale infrastructure and construction projects across the globe. Our expertise spans countries like India, Singapore, Australia, Hong Kong, Malaysia, Indonesia, the Philippines, Ireland, the UK, and the Netherlands. We are committed to excellence in every phase, ensuring high-quality results and timely project delivery.
</motion.p>


          <motion.div className="column-grids grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-5 lg:gap-8 xl:gap-16 mt-5 lg:mt-14 lg:max-w-5xl mx-auto"
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
      </div>


      <div className="container mx-auto pt-20 pb-20 lg:pt-24 lg:pb-24 px-4 lg:px-16 xl:px-0 relative">

        <motion.div className="elem absolute left-0 xl:-left-5 lg:w-[8rem]" initial={{  opacity:0, bottom:50 }} whileInView={{ opacity:0.2, bottom:-100 }}
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
                  
                  
                                <motion.div className="elem absolute top-8 lg:w-[20rem]" style={{ zIndex:-1 }}
                                initial={{ right: 500, opacity:0, top:400 }} whileInView={{ right: 0, opacity:1, top:400 }}
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


      <div className="royal construction --catalyze two--grid-section relative">
        <motion.div className="grid lg:grid-cols-2 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.4, once: true }}
        >
          <motion.h1 variants={childVariants} 
          initial={{ x: -50 }}
          whileInView={{ x: -150 }}
          transition={{
              duration: 0.8,
              x: { type: "spring", visualDuration: 1.8, bounce: 0.25 },
          }}
          style={{zIndex:-1}}
          className={`text-4xl lg:text-5xl xl:text-[20rem] dark:!opacity-10 font-bold absolute text-gray-100 ${syne.className}`}>royal construction </motion.h1>
<div className="col max-w-10/12 xl:pr-32 order-2 lg:order-1">
  <motion.h1 variants={childVariants} className="linear-text text-4xl lg:text-5xl font-bold !leading-[1.2]">Royal Construction Catalyze</motion.h1>
  <motion.p variants={childVariants} className="mt-5 lg:mt-7 dark:text-gray-400">
    At Royal Construction, we are committed to helping startups and businesses unlock their full potential. Through Royal Construction Catalyze, we provide more than just guidance—we become true partners in your growth journey. By combining our industry expertise, resources, and strategic insight, we work hand-in-hand with your team to achieve sustainable success and overcome challenges. Our approach is personalized to fit your unique needs, ensuring that we deliver results that truly matter and accelerate your progress.
  </motion.p>
  <motion.div variants={childVariants}>
    <Link href="/royal-construction-catalyze">
      <Button text="Learn More" className={`${syne.className}`} />
    </Link>
  </motion.div>
</div>



            <motion.div className="col flex -space-x-10 justify-center h-[300px] xl:h-[470px] xl:max-h-[550px] order-1 lg:order-2 w-full mx-auto mb-5 lg:mb-0"
                initial={{ scale:0.5 }}
                whileInView={{ scale:1 }}
                transition={{
                  duration: 0.4,
                  scale: { type: "spring", visualDuration: 0.4, bounce: 0.25 },
              }}
            >



            <motion.div >
              <Image className="w-auto top-0 h-full object-contain" src="/girl3opnew.png" alt="hero-image" width={100} height={500} unoptimized={true} />
            </motion.div>

            {/* <motion.div >
              <Image
                className="w-auto top-0 h-full"
                src="/girl1.webp"
                alt="hero-image"
                width="500"
                height="500"
              />
            </motion.div> */}

            {/* <motion.div >
            <Image
              className="w-auto top-0 h-full"
              src="/girl2.webp"
              alt="hero-image"
              width="500"
              height="500"
            />
            </motion.div> */}


          </motion.div>
        </motion.div>
      </div>
      </div>


      <div className="container mx-auto pt-20 pb-20 lg:pt-24 lg:pb-24 px-4 lg:px-16 xl:px-0 overflow-hidden">
      <div className="royal construction --labs two--grid-section">
        <motion.div className="grid lg:grid-cols-2 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.4, once: true }}>
<div className="col max-w-10/12 xl:pr-32 order-2">
  <motion.h1 variants={childVariants} className="linear-text text-4xl lg:text-5xl font-bold">Royal Construction Labs</motion.h1>
  <motion.p variants={childVariants} className="mt-5 lg:mt-7 dark:text-gray-400">
    Royal Construction Labs is the research and innovation arm of Royal Construction. Dedicated to pushing the boundaries of design and technology, Royal Construction Labs focuses on developing cutting-edge construction solutions that integrate the latest advancements in materials, sustainability, and smart technology. Our team of engineers and designers collaborate to transform ideas into tangible, functional products that meet the evolving needs of the construction industry.
  </motion.p>
  <motion.p variants={childVariants} className="mt-5 lg:mt-7 dark:text-gray-400">
    We work closely with startups, entrepreneurs, and forward-thinking companies to bring innovative concepts to life. Whether it’s through the development of eco-friendly building materials or pioneering smart home systems, Royal Construction Labs is at the forefront of reshaping the future of construction and architecture.
  </motion.p>
  <motion.div variants={childVariants}>
    <Link href="royal-construction-labs">
      <Button text="Learn More" className={`${syne.className}`} />
    </Link>
  </motion.div>
</div>




          <motion.div className="col order-1 flex -space-x-2 lg:-space-x-8 items-baseline h-[300px] xl:h-[470px] xl:max-h-[550px] pl-2 lg:pl-0 mb-5 lg:mb-0"
          initial={{ scale:0.5 }}
          whileInView={{ scale:1 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.25 },
        }}
        >
            <motion.div className="h-full"><Image
              className="w-full h-full object-contain"
              src="/boy12new.png"
              alt="hero-image"
              width="500"
              height="500"
              unoptimized={true}
            /></motion.div>
            {/* <motion.div className="h-full"><Image
              className="w-full h-full object-contain"
              src="/girl4.webp"
              alt="hero-image"
              width="500"
              height="500"
            /></motion.div>
            <motion.div className="h-full"><Image
              className="w-full h-full object-contain relative lg:-left-4"
              src="/boy2.webp"
              alt="hero-image"
              width="500"
              height="500"
            /></motion.div>
            <motion.div className="h-full"><Image
              className="w-full h-full object-contain relative lg:-left-28"
              src="/girl5.webp"
              alt="hero-image"
              width="500"
              height="500"
            /></motion.div> */}


          </motion.div>
        </motion.div>
      </div>
      </div>

      <div className="container mx-auto pt-20 pb-20 lg:pt-24 lg:pb-24 px-4 lg:px-16 xl:px-0 relative">
      <div className="who--we-are two--grid-section">

      <svg className="absolute w-full xl:top-[4rem] xl:left-[-26rem] pointer-events-none" width="717" height="652" viewBox="0 0 717 652" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.2">
      <path d="M486.169 621.648C454.193 621.648 420.188 619.327 384.511 614.701C326.092 607.124 265.739 593.653 205.119 574.663C144.5 555.674 87.2486 532.305 34.9467 505.206C-15.578 479.027 -59.3761 450.478 -95.2343 420.363C-131.113 390.233 -157.238 360.043 -172.887 330.638C-189.114 300.135 -193.313 271.812 -185.368 246.45C-177.423 221.087 -157.812 200.22 -127.08 184.433C-97.4446 169.209 -58.7619 159.322 -12.109 155.043C34.5288 150.768 86.7854 152.314 143.216 159.634C201.635 167.215 261.988 180.682 322.607 199.671C383.227 218.661 440.478 242.03 492.78 269.129C543.305 295.307 587.103 323.856 622.961 353.971C658.839 384.101 684.965 414.292 700.614 443.697C716.841 474.195 721.04 502.517 713.095 527.88C705.15 553.243 685.539 574.11 654.807 589.897C625.171 605.121 586.489 615.008 539.836 619.287C522.682 620.858 504.768 621.643 486.164 621.643L486.169 621.648ZM41.8897 153.442C23.2507 153.442 5.23604 154.227 -12.0385 155.808C-58.5957 160.077 -97.1828 169.939 -126.727 185.117C-157.269 200.809 -176.748 221.52 -184.633 246.681C-192.518 271.842 -188.334 299.964 -172.207 330.275C-156.604 359.595 -130.539 389.71 -94.7409 419.774C-21.071 481.64 85.5015 536.388 205.351 573.928C325.2 611.469 443.962 627.307 539.77 618.527C586.328 614.258 624.915 604.396 654.459 589.217C685 573.526 704.48 552.815 712.365 527.653C720.249 502.492 716.065 474.371 699.939 444.059C684.336 414.74 658.271 384.625 622.473 354.56C548.803 292.694 442.23 237.947 322.381 200.406C224.141 169.632 126.626 153.442 41.8897 153.442Z" fill="url(#paint0_linear_520_218)"/>
      <path d="M440.74 622.64C416.789 622.64 391.837 621.236 366.033 618.431C310.771 612.421 254.023 600.207 197.361 582.124C116.854 556.429 42.3078 520.495 -18.2211 478.207C-77.1842 437.012 -120.282 391.724 -142.864 347.226C-151.831 329.56 -157.455 312.142 -159.579 295.458C-161.765 278.292 -160.259 261.764 -155.103 246.344C-145.985 219.069 -126.017 196.163 -95.7577 178.271C-66.5657 161.008 -29.0662 149.107 15.6986 142.905C60.4433 136.703 110.198 136.502 163.582 142.306C218.844 148.317 275.592 160.53 332.254 178.618C412.761 204.313 487.307 240.248 547.836 282.535C606.794 323.731 649.898 369.019 672.479 413.512C681.446 431.177 687.07 448.596 689.195 465.279C691.38 482.446 689.874 498.973 684.719 514.393C675.6 541.669 655.632 564.575 625.373 582.467C596.181 599.729 558.681 611.63 513.917 617.832C490.802 621.034 466.342 622.64 440.74 622.64ZM89.3282 138.838C63.731 138.838 39.1207 140.433 15.8044 143.665C-76.001 156.392 -136.439 192.946 -154.373 246.591C-164.574 277.098 -160.471 310.838 -142.179 346.878C-119.653 391.26 -76.6354 436.453 -17.778 477.573C42.6904 519.82 117.166 555.715 197.597 581.384C309.608 617.133 421.91 629.804 513.811 617.067C605.616 604.341 666.054 567.787 683.989 514.142C694.189 483.634 690.086 449.894 671.794 413.854C649.268 369.472 606.251 324.28 547.393 283.16C486.925 240.912 412.449 205.018 332.018 179.348C248.419 152.667 164.649 138.838 89.3282 138.838Z" fill="url(#paint1_linear_520_218)"/>
      <path d="M398.397 624.382C381.848 624.382 364.885 623.647 347.55 622.167C295.45 617.726 242.302 606.767 189.597 589.585C118.737 566.488 53.0774 533.272 -0.281906 493.526C-52.1358 454.903 -90.9947 411.276 -112.67 367.358C-122.976 346.47 -129.295 325.699 -131.445 305.627C-133.66 284.932 -131.44 264.951 -124.844 246.248C-114.553 217.055 -94.2271 192.115 -64.4359 172.114C-35.6869 152.812 0.629395 138.903 43.5011 130.767C86.3577 122.637 133.605 120.689 183.938 124.978C236.039 129.418 289.186 140.378 341.891 157.56C412.752 180.657 478.411 213.873 531.77 253.618C583.624 292.241 622.483 335.868 644.158 379.787C654.464 400.674 660.783 421.446 662.933 441.517C665.148 462.213 662.928 482.194 656.332 500.896C646.041 530.09 625.716 555.03 595.924 575.031C567.175 594.332 530.859 608.242 487.987 616.377C459.888 621.708 429.9 624.382 398.397 624.382ZM133.569 123.488C102.177 123.488 71.9933 126.146 43.6471 131.523C-44.2764 148.201 -103.859 189.034 -124.119 246.505C-137.023 283.109 -132.829 324.783 -111.985 367.02C-67.2051 457.768 48.4453 542.771 189.829 588.855C260.448 611.877 331.842 623.657 397.919 623.657C429.311 623.657 459.495 620.999 487.841 615.622C575.765 598.944 635.347 558.111 655.607 500.64C668.512 464.035 664.318 422.362 643.473 380.124C598.693 289.377 483.043 204.373 341.66 158.29C271.041 135.268 199.647 123.488 133.569 123.488Z" fill="url(#paint2_linear_520_218)"/>
      <path d="M359.156 626.793C349.247 626.793 339.223 626.496 329.068 625.902C280.119 623.033 230.581 613.326 181.829 597.046C150.572 586.61 120.479 573.702 92.3845 558.68C65.1259 544.105 39.715 527.528 16.8619 509.404C-28.1295 473.726 -62.7088 432.395 -83.1302 389.876C-106.98 340.218 -110.943 290.52 -94.5895 246.143C-83.1251 215.036 -62.442 188.052 -33.119 165.947C-4.80811 144.607 30.32 128.683 71.2986 118.625C112.262 108.566 157.007 104.871 204.289 107.645C253.238 110.515 302.776 120.221 351.528 136.501C382.784 146.937 412.878 159.845 440.972 174.868C468.231 189.442 493.636 206.02 516.495 224.143C561.486 259.821 596.065 301.152 616.487 343.671C640.337 393.329 644.299 443.027 627.946 487.405C616.482 518.511 595.798 545.495 566.476 567.6C538.165 588.941 503.036 604.864 462.058 614.922C429.89 622.821 395.387 626.793 359.156 626.793ZM174.578 107.464C138.645 107.464 103.929 111.411 71.4899 119.38C-12.5517 140.015 -71.2731 185.127 -93.8644 246.414C-110.147 290.59 -106.195 340.087 -82.4353 389.549C-40.0017 477.89 58.8776 555.186 182.07 596.316C278.402 628.48 377.775 634.818 461.872 614.172C545.913 593.537 604.635 548.425 627.226 487.138C643.509 442.962 639.556 393.465 615.797 344.004C573.363 255.662 474.484 178.366 351.291 137.236C292.117 117.482 231.799 107.469 174.578 107.469V107.464Z" fill="url(#paint3_linear_520_218)"/>
      <path d="M322.975 629.814C318.867 629.814 314.738 629.754 310.589 629.638C264.797 628.339 218.864 619.887 174.064 604.512C147.329 595.339 121.626 583.861 97.6707 570.4C74.3946 557.326 52.6491 542.314 33.0384 525.781C-5.39759 493.386 -35.6671 454.974 -54.5075 414.695C-67.5276 386.856 -75.0647 358.467 -76.9075 330.321C-78.8157 301.208 -74.5814 272.855 -64.3254 246.047C-51.688 213.023 -30.6473 184.005 -1.78761 159.79C26.0803 136.411 60.0252 118.479 99.1056 106.493C138.181 94.5061 180.418 89.0691 224.649 90.3176C270.441 91.6164 316.374 100.069 361.174 115.444C387.909 124.616 413.612 136.094 437.568 149.556C460.844 162.63 482.59 177.642 502.2 194.174C540.636 226.57 570.906 264.981 589.746 305.26C602.766 333.1 610.303 361.488 612.146 389.635C614.054 418.748 609.82 447.106 599.564 473.908C586.927 506.933 565.886 535.95 537.026 560.165C509.158 583.544 475.214 601.476 436.133 613.463C400.723 624.327 362.715 629.814 322.975 629.814ZM212.415 90.8411C173.208 90.8411 135.019 96.2882 99.3372 107.233C19.1775 131.82 -38.688 181.221 -63.6054 246.324C-83.8556 299.249 -80.4671 357.355 -53.8076 414.373C-14.4704 498.495 68.68 567.535 174.316 603.787C262.809 634.159 355.711 637.335 435.912 612.733C516.071 588.145 573.937 538.744 598.854 473.641C619.104 420.716 615.716 362.611 589.056 305.593C549.719 221.47 466.574 152.43 360.933 116.179C311.813 99.3239 261.323 90.8411 212.415 90.8411Z" fill="url(#paint4_linear_520_218)"/>
      <path d="M289.776 633.378C247.931 633.378 206.404 626.179 166.301 611.972C121.637 596.15 81.8367 572.781 48.0075 542.525C31.7903 528.021 17.154 512.032 4.50648 495.017C-8.04539 478.122 -18.6991 460.134 -27.1576 441.543C-41.4012 410.245 -49.3311 377.733 -50.7409 344.91C-52.1959 310.934 -46.5871 277.637 -34.0604 245.952C-20.2498 211.009 1.14824 179.952 29.5448 153.633C56.9696 128.22 89.7262 108.28 126.914 94.3599C164.096 80.4452 203.831 73.2562 245.011 72.9945C287.636 72.7276 329.974 79.9216 370.822 94.3951C415.486 110.218 455.286 133.587 489.115 163.843C505.333 178.346 519.969 194.335 532.616 211.351C545.168 228.246 555.822 246.233 564.281 264.825C578.524 296.123 586.454 328.634 587.864 361.458C589.319 395.434 583.71 428.73 571.183 460.416C557.373 495.359 535.975 526.415 507.578 552.734C480.153 578.147 447.397 598.088 410.209 612.008C373.027 625.922 333.292 633.111 292.107 633.373C291.326 633.373 290.546 633.378 289.766 633.378H289.776ZM247.614 73.8301C122.805 73.8301 9.1184 138.792 -33.3455 246.238C-57.8752 308.306 -55.4283 377.557 -26.4578 441.23C8.57968 518.235 78.9315 580.206 166.558 611.253C333.035 670.234 514.234 602.443 570.473 460.139C595.003 398.072 592.556 328.82 563.586 265.147C528.548 188.143 458.196 126.171 370.57 95.1251C329.783 80.6767 288.109 73.8352 247.614 73.8352V73.8301Z" fill="url(#paint5_linear_520_218)"/>
      <path d="M259.626 637.43C224.997 637.43 191.057 631.394 158.532 619.433C121.929 605.971 89.2876 585.794 61.5154 559.46C34.6898 534.027 13.483 503.922 -1.52084 469.981C-16.7663 435.496 -24.8322 398.807 -25.5068 360.934C-26.2067 321.722 -18.9011 283.003 -3.80161 245.851C11.1821 208.99 32.9376 175.894 60.8709 147.471C87.8476 120.024 119.421 98.0698 154.71 82.227C190 66.3842 227.227 57.4484 265.361 55.6663C304.844 53.8237 343.567 59.7642 380.468 73.3365C417.071 86.7981 449.712 106.975 477.484 133.31C504.31 158.743 525.517 188.848 540.52 222.789C555.761 257.273 563.832 293.963 564.506 331.836C565.206 371.048 557.901 409.766 542.801 446.919C527.818 483.78 506.062 516.875 478.129 545.298C451.147 572.745 419.578 594.7 384.289 610.542C349 626.385 311.772 635.321 273.638 637.103C268.961 637.32 264.284 637.43 259.626 637.43ZM279.514 56.1747C159.755 56.1747 44.553 128.92 -3.09171 246.143C-32.9131 319.507 -32.1025 398.892 -0.820992 469.674C29.9268 539.232 86.6141 592.162 158.794 618.713C191.777 630.846 225.817 636.6 259.485 636.6C379.244 636.6 494.446 563.855 542.091 446.632C571.913 373.268 571.102 293.882 539.815 223.101C509.068 153.542 452.38 100.612 380.201 74.0615C347.218 61.9289 313.182 56.1747 279.514 56.1747Z" fill="url(#paint6_linear_520_218)"/>
      <path d="M232.328 641.916C204.102 641.916 176.758 636.887 150.768 626.894C121.561 615.662 95.5007 598.661 73.3072 576.37C51.8688 554.833 34.5842 528.932 21.9366 499.391C-10.6388 423.303 -8.99242 330.859 26.463 245.755C42.6147 206.976 64.7378 171.837 92.2079 141.314C118.742 111.828 149.127 87.8703 182.523 70.0993C215.919 52.3284 250.644 41.6406 285.727 38.3382C322.054 34.9199 357.182 39.6118 390.125 52.278C419.332 63.5095 445.392 80.5102 467.586 102.802C489.024 124.338 506.309 150.24 518.956 179.781C551.532 255.869 549.88 348.313 514.43 433.417C498.278 472.196 476.155 507.335 448.685 537.858C422.151 567.343 391.766 591.301 358.375 609.072C324.979 626.843 290.254 637.531 255.171 640.833C247.503 641.553 239.885 641.916 232.328 641.916ZM308.651 38.0915C195.654 38.0915 80.1092 118.972 27.1678 246.052C-8.20195 330.965 -9.85337 423.192 22.6415 499.089C48.3243 559.077 93.9248 604.214 151.045 626.179C177.317 636.283 204.712 641.085 232.237 641.085C345.234 641.095 460.779 560.205 513.72 433.13C549.09 348.217 550.741 255.989 518.246 180.093C492.564 120.105 446.963 74.9674 389.843 53.003C363.571 42.8992 336.176 38.0915 308.651 38.0915Z" fill="url(#paint7_linear_520_218)"/>
      <path d="M207.627 646.784C185.036 646.784 163.396 642.631 143 634.35C98.3558 616.226 63.6708 579.793 42.7006 528.982C26.8258 490.511 19.5101 444.744 21.5492 396.632C22.5864 372.12 26.0302 347.024 31.78 322.044C37.701 296.319 46.0891 270.619 56.7176 245.654C74.0425 204.957 96.5231 167.779 123.53 135.152C149.621 103.633 178.818 77.666 210.311 57.9719C241.814 38.2678 274.027 25.8382 306.058 21.0154C339.233 16.0214 370.761 19.4598 399.757 31.2249C444.401 49.3432 479.086 85.7812 500.056 136.592C515.931 175.064 523.246 220.83 521.207 268.943C520.17 293.455 516.726 318.55 510.976 343.53C505.055 369.255 496.667 394.955 486.039 419.92C468.714 460.617 446.233 497.795 419.226 530.422C393.136 561.942 363.939 587.908 332.446 607.602C300.943 627.307 268.73 639.736 236.698 644.559C226.855 646.039 217.158 646.784 207.627 646.784ZM334.812 19.5202C294.619 19.5202 252.17 32.71 210.729 58.6264C146.096 99.0465 91.6544 165.574 57.4326 245.961C15.875 343.571 10.6387 449.265 43.4206 528.696C64.3102 579.31 98.8492 615.602 143.297 633.645C200.422 656.833 267.456 647.353 332.048 606.963C396.68 566.543 451.122 500.015 485.344 419.628C526.902 322.019 532.138 216.325 499.356 136.894C478.466 86.2796 443.927 49.9876 399.48 31.9448C379.008 23.6383 357.263 19.5202 334.812 19.5202Z" fill="url(#paint8_linear_520_218)"/>
      <path d="M185.307 652C167.619 652 150.868 648.602 135.235 641.816C110.187 630.947 89.5189 612.038 73.8152 585.618C58.6553 560.125 48.7316 528.741 44.311 492.343C39.8955 455.961 41.1995 416.402 48.1979 374.753C55.438 331.645 68.4883 288.179 86.9914 245.564C105.489 202.949 128.332 163.732 154.876 129.001C180.524 95.4473 208.533 67.4769 238.127 45.8548C267.737 24.2226 297.443 10.0411 326.418 3.70292C356.446 -2.86679 384.369 -0.686958 409.423 10.182C434.471 21.051 455.139 39.9597 470.843 66.3795C486.003 91.873 495.926 123.257 500.347 159.654C504.763 196.037 503.459 235.601 496.46 277.245C489.22 320.353 476.17 363.819 457.667 406.439C439.169 449.054 416.326 488.271 389.782 523.002C364.134 556.555 336.126 584.526 306.531 606.148C276.921 627.78 247.215 641.962 218.24 648.3C206.952 650.767 195.956 652 185.307 652ZM359.074 0.727669C321.328 0.727669 279.982 16.2181 238.575 46.469C177.825 90.851 124.239 161.663 87.6912 245.866C51.1382 330.069 36.0035 417.569 45.0713 492.248C54.1289 566.855 86.2613 619.72 135.542 641.106C184.823 662.496 245.388 649.855 306.078 605.519C366.828 561.137 420.414 490.325 456.962 406.122C493.51 321.919 508.65 234.418 499.582 159.74C490.524 85.1321 458.392 32.2673 409.111 10.8818C393.452 4.08552 376.651 0.727669 359.074 0.727669Z" fill="url(#paint9_linear_520_218)"/>
      </g>
      <defs>
      <linearGradient id="paint0_linear_520_218" x1="-620.679" y1="269.927" x2="907.387" y2="286.041" gradientUnits="userSpaceOnUse">
      <stop stopColor="#62D2FA"/>
      <stop offset="1" stopColor="#17ABE2"/>
      </linearGradient>
      <linearGradient id="paint1_linear_520_218" x1="-565.515" y1="259.234" x2="868.913" y2="272.977" gradientUnits="userSpaceOnUse">
      <stop stopColor="#62D2FA"/>
      <stop offset="1" stopColor="#17ABE2"/>
      </linearGradient>
      <linearGradient id="paint2_linear_520_218" x1="-511.212" y1="248.168" x2="831.045" y2="259.792" gradientUnits="userSpaceOnUse">
      <stop stopColor="#62D2FA"/>
      <stop offset="1" stopColor="#17ABE2"/>
      </linearGradient>
      <linearGradient id="paint3_linear_520_218" x1="-457.863" y1="236.762" x2="793.861" y2="246.513" gradientUnits="userSpaceOnUse">
      <stop stopColor="#62D2FA"/>
      <stop offset="1" stopColor="#17ABE2"/>
      </linearGradient>
      <linearGradient id="paint4_linear_520_218" x1="-405.785" y1="225.06" x2="757.608" y2="233.177" gradientUnits="userSpaceOnUse">
      <stop stopColor="#62D2FA"/>
      <stop offset="1" stopColor="#17ABE2"/>
      </linearGradient>
      <linearGradient id="paint5_linear_520_218" x1="-355.173" y1="213.085" x2="722.42" y2="219.791" gradientUnits="userSpaceOnUse">
      <stop stopColor="#62D2FA"/>
      <stop offset="1" stopColor="#17ABE2"/>
      </linearGradient>
      <linearGradient id="paint6_linear_520_218" x1="-306.459" y1="200.862" x2="688.602" y2="206.367" gradientUnits="userSpaceOnUse">
      <stop stopColor="#62D2FA"/>
      <stop offset="1" stopColor="#17ABE2"/>
      </linearGradient>
      <linearGradient id="paint7_linear_520_218" x1="-260.142" y1="188.421" x2="656.539" y2="192.919" gradientUnits="userSpaceOnUse">
      <stop stopColor="#62D2FA"/>
      <stop offset="1" stopColor="#17ABE2"/>
      </linearGradient>
      <linearGradient id="paint8_linear_520_218" x1="-216.954" y1="175.792" x2="626.729" y2="179.46" gradientUnits="userSpaceOnUse">
      <stop stopColor="#62D2FA"/>
      <stop offset="1" stopColor="#17ABE2"/>
      </linearGradient>
      <linearGradient id="paint9_linear_520_218" x1="-177.768" y1="163" x2="599.859" y2="166.001" gradientUnits="userSpaceOnUse">
      <stop stopColor="#62D2FA"/>
      <stop offset="1" stopColor="#17ABE2"/>
      </linearGradient>
      </defs>
      </svg>

        <motion.div className="grid lg:grid-cols-2 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.4, once: true }}>
<div className="col max-w-10/12 xl:pr-32 order-2 lg:order-1">
  <motion.h1 variants={childVariants} className="linear-text text-4xl lg:text-5xl font-bold">Who We Are</motion.h1>
  <motion.p variants={childVariants} className="mt-5 lg:mt-7 dark:text-gray-400">
    Royal Construction is a leading construction company with a commitment to delivering high-quality, innovative building solutions. With decades of experience in the construction industry, we specialize in residential, commercial, and industrial projects. Our expertise extends across design, development, project management, and construction, allowing us to bring complex ideas to life.
  </motion.p>
  <motion.p variants={childVariants} className="mt-5 lg:mt-7 dark:text-gray-400">
    At Royal Construction, we are dedicated to sustainable building practices, ensuring that each project we undertake not only meets the highest standards of safety and quality but also contributes positively to the environment. Our diverse portfolio includes landmark developments, infrastructure projects, and custom-built homes that reflect our passion for excellence.
  </motion.p>
  <motion.div variants={childVariants}>
    <Link href="about">
      <Button text="Learn More" className={`${syne.className}`} />
    </Link>
  </motion.div>
</div>


          <motion.div className="col order-1 lg:order-2"
          initial={{ scale:0.5 }}
          whileInView={{ scale:1 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.25 },
        }}>
            <Image
              className="w-full lg:w-10/12 lg:p-10"
              src="/5.webp"
              alt="who-we-are"
              width="500"
              height="500"
              quality={100}
              unoptimized={true}
            />
          </motion.div>
        </motion.div>
      </div>
      </div>


      {/* // GLOBE */}
      <div className="container mx-auto pt-20 pb-20 lg:pt-24 lg:pb-24 xl:pb-48 px-4 lg:px-16 xl:px-0">
        <div className="col">
          <h1 className="text-4xl lg:text-5xl font-bold text-center"><span className="linear-text">We Are In</span></h1>
          <p className="mt-5 lg:mt-7 xl:max-w-2xl mx-auto text-center dark:text-gray-400">We have multi geographic presence and it enables us to identify and respond swiftly to opportunities. Global presence is key element of our business strategy.</p>

          <Globe />
        </div>
      </div>


      {/* WHY royal construction  */}
      <div className="container mx-auto px-4 lg:px-16 xl:px-0 relative">


        <motion.div className="elem absolute left-0 xl:-left-5 lg:w-[8rem]" initial={{  opacity:0, bottom:50 }} whileInView={{ opacity:0.2, bottom:-100 }}
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
                                  unoptimized={true}
                                />
                                </motion.div>
                  
                  
                                <motion.div className="elem absolute top-8 lg:w-[20rem]" style={{ zIndex:-1 }}
                                initial={{ right: 500, opacity:0, top:400 }} whileInView={{ right: 0, opacity:1, top:400 }}
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
                                unoptimized={true}
                                />
                                </motion.div>

                                <h1 className="linear-text text-4xl lg:text-5xl font-bold !leading-[1.5]">Why Royal Construction?</h1>
<p className="mt-5 lg:mt-7 xl:max-w-4xl pb-10 lg:pb-16 dark:text-gray-400">
  At Royal Construction, we prioritize excellence and ensure that we recruit only the most skilled professionals to handle each project. We understand that construction is not just about technical expertise; it's also about providing a team that is friendly, professional, and dedicated to delivering quality results.
</p>


      <motion.div className="grid lg:grid-cols-3 gap-5 lg:gap-10"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.4, once: true }}>
      {WhyGnotisItems.map((item) => {
          return (
            <SimpleBlueComponentItem item={item} key={item.id} />
          )
        })}
      </motion.div>
      </div>

    </div>
  );
}

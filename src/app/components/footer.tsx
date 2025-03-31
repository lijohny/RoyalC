import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Syne } from 'next/font/google'
import * as motion from "motion/react-client"


const syne = Syne({
    weight: ['400', '700'],
    subsets: ['latin'],
})

export default function Footer() {
    return (
        <div className="gnotis-footer pt-20 lg:pt-40 relative">
            <div className="containers mx-auto">
                <div className="footer-top relative lg:absolute"
                    style={{ zIndex: -1 }}>
                    <motion.h2
                        className={`title lg:text-9xl xl:text-[20rem] font-bold linear-text relative ${syne.className}`}
                        initial={{ x: -1000 }}
                        // animate={{ left:0 }}
                        whileInView={{ x: 0 }}
                        transition={{
                            duration: 0.8,
                            x: { type: "spring", visualDuration: 1.8, bounce: 0.25 },
                        }}
                    >Gnotis</motion.h2>
                </div>
                <div className="footer-content pt-20 pb-12 lg:pt-40 xl:pt-96 2xl:pt-96 lg:pb-8 lg:pl-32 relative overflow-hidden 2xl:h-[95vh]">
                    <div className="container mx-auto grid lg:grid-cols-3 gap-14 relative px-4 lg:px-8 xl:px-0" style={{ zIndex: 1 }}>
                        <div className="footer-widget">
                            <h3 className='uppercase font-bold text-white mb-5'>ABOUT</h3>
                            <ul className='text-white space-y-5 uppercase text-xs'>
                                <li>
                                    <Link href="">Infrastructure Support & Service</Link>
                                </li>
                                <li>
                                    <Link href="">Sales & Marketing Outsourcing</Link>
                                </li>
                                <li>
                                    <Link href="">Products</Link>
                                </li>
                                <li>
                                    <Link href="">Services</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="footer-widget">
                            <h3 className='uppercase font-bold text-white mb-5'>Keep in touch</h3>

                            <div className='space-y-2 mb-7'>
                                {/* <p className='uppercase text-xs text-white'><span className='opacity-90'>Gnotis India:</span> <span className='font-semibold'> +91 8217541617</span></p> */}
                                {/* <p className='uppercase text-xs text-white'><span className='opacity-90'>Gnotis Ireland:</span> <span className='font-semibold'> 353 015394680</span></p> */}
                                <p className='uppercase text-xs text-white flex items-center'><span className='opacity-90'>
                                    <svg className='size-5 fill-white mr-2' width="792" height="792" viewBox="0 0 792 792" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M395.731 0.586182C176.807 0.586182 0.254883 178.903 0.254883 396.062C0.254883 614.986 178.572 791.538 395.731 791.538C614.655 791.538 791.207 613.221 791.207 396.062C791.207 178.903 614.655 0.586182 395.731 0.586182ZM641.138 586.738C630.545 622.048 582.876 673.248 538.738 673.248L535.207 671.483C469.882 667.952 379.841 606.159 296.862 505.524L266.848 468.448C183.869 367.814 139.731 268.945 150.324 205.386C157.386 159.483 224.476 122.407 263.317 122.407C282.738 122.407 289.8 131.234 291.565 138.297C312.751 177.138 341 244.228 341 268.945V272.476C335.703 284.834 325.11 291.897 316.282 297.193C303.924 304.255 296.862 309.552 295.096 321.91C295.096 325.441 298.627 344.862 353.358 411.952L376.31 440.2C431.041 505.524 448.696 512.586 452.227 512.586C466.351 514.352 471.648 509.055 482.241 498.462C489.303 489.634 498.131 480.807 510.489 479.041H514.02C538.738 484.338 598.765 523.179 634.076 553.193C639.372 554.959 648.2 563.786 641.138 586.738Z" />
                                    </svg>

                                </span> <span className='font-semibold'> +1 630 440 4477 </span></p>
                                {/* <p className='uppercase text-xs text-white'><span className='opacity-90'>Gnotis Australia:</span> <span className='font-semibold'> +61 (08) 7088 4865</span></p> */}
                            </div>

                            <h4 className='uppercase font-medium text-white mb-4 text-sm lg:pr-40'>Subscribe to receive Gnotis News & Updates</h4>
                            <div className="form-group relative inline-block">
                                <form action="" className='flex items-center'>
                                    <input className='form-control rounded-full min-w-60 indent-2 text-xs' type="text" placeholder='Enter Email' />
                                    <button className='bg-[#1E1E1E] ml-[-30px] flex justify-center items-center rounded-full w-12 h-12'><svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.9727 1.76172L13.2227 13.1094C13.1953 13.3828 13.0312 13.6289 12.7852 13.7656C12.6484 13.8203 12.5117 13.875 12.3477 13.875C12.2383 13.875 12.1289 13.8477 12.0195 13.793L8.68359 12.3984L7.28906 14.4766C7.17969 14.668 6.98828 14.75 6.79688 14.75C6.49609 14.75 6.25 14.5039 6.25 14.2031V11.5781C6.25 11.3594 6.30469 11.168 6.41406 11.0312L12.375 3.375L4.33594 10.6211L1.51953 9.44531C1.21875 9.30859 1 9.03516 1 8.67969C0.972656 8.29688 1.13672 8.02344 1.4375 7.85938L13.6875 0.886719C13.9609 0.722656 14.3438 0.722656 14.6172 0.914062C14.8906 1.10547 15.0273 1.43359 14.9727 1.76172Z" fill="#1690BC" />
                                    </svg>
                                    </button>
                                </form>
                            </div>
                        </div>

                        <div className="footer-widget">

                            <div className='mb-5'>
                                <h3 className='uppercase text-xs text-white'>Email</h3>
                                <p className='text-xs text-white'>info@gnotis.io</p>
                            </div>

                            <div className='mb-5'>
                                <h3 className='uppercase text-xs text-white'>Careers</h3>
                                <p className='text-xs text-white'>careers@gnotis.io</p>
                            </div>

                            <div className='mb-5'>
                                <h3 className='uppercase text-xs text-white'>Support</h3>
                                <p className='text-xs text-white'>support@gnotis.io</p>
                            </div>

                            <h3 className='uppercase text-xs text-white mb-2'>Follow us on</h3>
                            <ul className='flex items-center gap-4 lg:gap-6'>
                                <li className='inline-block'>
                                    <Link href="">
                                        <svg className="size-5" width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M24.6094 13.25C24.6094 6.56055 19.1895 1.14062 12.5 1.14062C5.81055 1.14062 0.390625 6.56055 0.390625 13.25C0.390625 19.2939 4.81885 24.3037 10.6079 25.2129V16.7505H7.53174V13.25H10.6079V10.582C10.6079 7.54736 12.4146 5.87109 15.1816 5.87109C16.5068 5.87109 17.8926 6.10742 17.8926 6.10742V9.08594H16.3652C14.8613 9.08594 14.3921 10.0195 14.3921 10.9771V13.25H17.7505L17.2134 16.7505H14.3921V25.2129C20.1812 24.3037 24.6094 19.2939 24.6094 13.25Z" fill="white" />
                                        </svg>
                                    </Link>
                                </li>
                                <li className='inline-block'>
                                    <Link href="https://x.com/teamgnotis"><svg className="size-5" width="29" height="26" viewBox="0 0 29 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.374 3.09375H22.8213L15.292 11.6973L24.1494 23.4062H17.2158L11.7812 16.3066L5.57031 23.4062H2.11816L10.1699 14.2021L1.67871 3.09375H8.78809L13.6953 9.58301L19.374 3.09375ZM18.1631 21.3457H20.0723L7.74805 5.04688H5.69727L18.1631 21.3457Z" fill="white" />
                                    </svg>
                                    </Link>
                                </li>
                                <li className='inline-block'>
                                    <Link href=""><svg className="size-5" width="29" height="26" viewBox="0 0 29 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M25.1396 13.25C25.1396 19.9395 19.7197 25.3594 13.0303 25.3594C11.7803 25.3594 10.5791 25.1689 9.44629 24.8174C9.93945 24.0117 10.6768 22.6934 10.9502 21.6436C11.0967 21.0771 11.7021 18.7627 11.7021 18.7627C12.0977 19.5146 13.25 20.1543 14.4756 20.1543C18.1279 20.1543 20.7598 16.7949 20.7598 12.6201C20.7598 8.62109 17.4932 5.62793 13.2939 5.62793C8.06934 5.62793 5.29102 9.13379 5.29102 12.957C5.29102 14.7344 6.23828 16.9463 7.74707 17.6494C7.97656 17.7568 8.09863 17.708 8.15234 17.4883C8.19141 17.3223 8.39648 16.4971 8.48926 16.1162C8.51855 15.9941 8.50391 15.8867 8.40625 15.7695C7.91309 15.1592 7.5127 14.0459 7.5127 13.0059C7.5127 10.335 9.53418 7.75195 12.9814 7.75195C15.9551 7.75195 18.04 9.77832 18.04 12.6787C18.04 15.9551 16.3848 18.2256 14.2314 18.2256C13.0449 18.2256 12.1514 17.2441 12.4395 16.0381C12.7812 14.5977 13.4404 13.0449 13.4404 12.0049C13.4404 11.0771 12.9424 10.3008 11.9072 10.3008C10.6914 10.3008 9.71484 11.5557 9.71484 13.2402C9.71484 14.3145 10.0762 15.0371 10.0762 15.0371C10.0762 15.0371 8.87988 20.1055 8.66016 21.0527C8.41602 22.0977 8.51367 23.5723 8.61621 24.5293C4.11426 22.7666 0.920898 18.3818 0.920898 13.25C0.920898 6.56055 6.34082 1.14062 13.0303 1.14062C19.7197 1.14062 25.1396 6.56055 25.1396 13.25Z" fill="white" />
                                    </svg>
                                    </Link>
                                </li>
                                <li className='inline-block'>
                                    <Link href="https://www.linkedin.com/company/teamgnotis/"><svg className="size-5" width="29" height="26" viewBox="0 0 29 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.13867 22.6255H2.60352V8.021H7.13867V22.6255ZM4.86865 6.02881C3.41846 6.02881 2.24219 4.82764 2.24219 3.37744C2.24219 2.68086 2.5189 2.01281 3.01146 1.52025C3.50402 1.02769 4.17207 0.750977 4.86865 0.750977C5.56523 0.750977 6.23329 1.02769 6.72584 1.52025C7.2184 2.01281 7.49512 2.68086 7.49512 3.37744C7.49512 4.82764 6.31836 6.02881 4.86865 6.02881ZM24.1123 22.6255H19.5869V15.5161C19.5869 13.8218 19.5527 11.6489 17.229 11.6489C14.8711 11.6489 14.5098 13.4897 14.5098 15.394V22.6255H9.97949V8.021H14.3291V10.0132H14.3926C14.998 8.86572 16.4771 7.65479 18.6836 7.65479C23.2734 7.65479 24.1172 10.6772 24.1172 14.603V22.6255H24.1123Z" fill="white" />
                                    </svg>
                                    </Link>
                                </li>

                                <li className='inline-block'>
                                    <Link href="https://www.instagram.com/teamgnotis/"><svg className="size-5" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.3445 7.63452C10.239 7.63452 7.73413 10.1394 7.73413 13.2449C7.73413 16.3503 10.239 18.8552 13.3445 18.8552C16.45 18.8552 18.9548 16.3503 18.9548 13.2449C18.9548 10.1394 16.45 7.63452 13.3445 7.63452ZM13.3445 16.8923C11.3376 16.8923 9.69702 15.2566 9.69702 13.2449C9.69702 11.2332 11.3328 9.59741 13.3445 9.59741C15.3562 9.59741 16.9919 11.2332 16.9919 13.2449C16.9919 15.2566 15.3513 16.8923 13.3445 16.8923ZM20.4929 7.40503C20.4929 8.13257 19.907 8.71362 19.1843 8.71362C18.4568 8.71362 17.8757 8.12769 17.8757 7.40503C17.8757 6.68237 18.4617 6.09644 19.1843 6.09644C19.907 6.09644 20.4929 6.68237 20.4929 7.40503ZM24.2087 8.73315C24.1257 6.98022 23.7253 5.42749 22.4412 4.14819C21.1619 2.8689 19.6091 2.46851 17.8562 2.38062C16.0496 2.27808 10.6345 2.27808 8.82788 2.38062C7.07983 2.46362 5.5271 2.86401 4.24292 4.14331C2.95874 5.42261 2.56323 6.97534 2.47534 8.72827C2.3728 10.5349 2.3728 15.95 2.47534 17.7566C2.55835 19.5095 2.95874 21.0623 4.24292 22.3416C5.5271 23.6208 7.07495 24.0212 8.82788 24.1091C10.6345 24.2117 16.0496 24.2117 17.8562 24.1091C19.6091 24.0261 21.1619 23.6257 22.4412 22.3416C23.7205 21.0623 24.1208 19.5095 24.2087 17.7566C24.3113 15.95 24.3113 10.5398 24.2087 8.73315ZM21.8748 19.6951C21.4939 20.6521 20.7566 21.3894 19.7947 21.7751C18.3542 22.3464 14.9363 22.2146 13.3445 22.2146C11.7527 22.2146 8.32983 22.3416 6.89429 21.7751C5.93726 21.3943 5.19995 20.657 4.81421 19.6951C4.24292 18.2546 4.37476 14.8367 4.37476 13.2449C4.37476 11.6531 4.2478 8.23022 4.81421 6.79468C5.19507 5.83765 5.93237 5.10034 6.89429 4.7146C8.33472 4.14331 11.7527 4.27515 13.3445 4.27515C14.9363 4.27515 18.3591 4.14819 19.7947 4.7146C20.7517 5.09546 21.489 5.83276 21.8748 6.79468C22.446 8.23511 22.3142 11.6531 22.3142 13.2449C22.3142 14.8367 22.446 18.2595 21.8748 19.6951Z" fill="white" />
                                    </svg></Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="copyright text-center lg:text-left text-xs text-white pt-5 lg:pt-10 xl:pt-12">
                        © {new Date().getFullYear()} Gnotis. All rights reserved.
                    </div>

                    <div className="globe absolute -right-40 -bottom-10 rotate-[-25deg]" style={{ zIndex: 0 }}>
                        <motion.div
                            initial={{ rotate: 0 }}
                            whileInView={{ rotate: -15 }}
                            viewport={{ amount: 0.4 }}
                            transition={{
                                duration: 1.5,
                                rotate: { type: "spring", visualDuration: 0.7, bounce: 0.25 },
                            }}
                        >
                            <Image
                                src="/globe-3d.webp"
                                className='w-60 lg:w-[450px]'
                                alt="globe"
                                height="500"
                                width="500"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}
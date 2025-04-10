"use client"
import Image from "next/image";
import { useState } from 'react';
import HomeServices from "../components/homeServices";
import StatusComponentItem from "../components/statusComponentItem";
import SimpleBlueComponentItem from "../components/SimpleBlueComponent";
import { Syne } from 'next/font/google'
import Button from "../components/Button";
import * as motion from "motion/react-client"
import Globe from "../components/Globe";
import emailjs from 'emailjs-com';

const syne = Syne({
    weight: ['400', '700'],
    subsets: ['latin'],
});

const containerVariants = {
    hidden: { y: 100 },
    visible: {
        y: 0,
        transition: {
            staggerChildren: 0.085,
        },
    },
};

const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4 },
    },
};

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        message: ""
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [loading, setLoading] = useState(false);
    const [successMsg, setSuccessMsg] = useState("");

    const validateForm = () => {
        const newErrors: any = {};
        if (!formData.name.trim()) newErrors.name = "Name is required.";
        if (!formData.email.trim()) newErrors.email = "Email is required.";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid.";
        if (!formData.mobile.trim()) newErrors.mobile = "Mobile number is required.";
        if (!formData.message.trim()) newErrors.message = "Message is required.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (!validateForm()) return;

        setLoading(true);
        emailjs.send(
            'service_pp2xojf',
            'template_aa98f9p',
            {
                name: formData.name,
                email: formData.email,
                mobile: formData.mobile,
                message: formData.message,
            },
            'ZfF4EpA0zjnKASr2i'
        )
            .then(() => {
                setSuccessMsg("Message sent successfully!");
                setFormData({ name: "", email: "", mobile: "", message: "" });
                setLoading(false);
                setTimeout(() => setSuccessMsg(""), 5000);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    };

    return (
        <div className="gnotis-labs">
            <div className="hero-container relative pt-10 lg:pt-12 xl:pt-0">
                <div className="hero-elems absolute">
                    <div className="elem absolute left-1/2 -translate-x-1/2">
                        <Image src="/0cf99c.webp" alt="hero-elem" width={200} height={200} />
                    </div>
                </div>

                <div className="container mx-auto xl:pt-5 px-4 lg:px-16 xl:px-0">
                    <div className="hero--section relative">

                        <motion.div>
                            <h2 className="font-medium text-3xl lg:text-3xl animate-text bg-gradient-to-r from-teal-600 via-cyan-700 to-blue-500 bg-clip-text text-transparent max-w-md mb-6 lg:mb-12">
                                We'd love to hear from you! Leave Us a Message
                            </h2>
                        </motion.div>

                        <div className="flex flex-col lg:flex-row-reverse w-full justify-between lg:gap-[39px]">
                            <motion.div className="col blue-box p-10 lg:p-12 rounded-3xl w-full"
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{
                                    duration: 0.4,
                                    scale: { type: "spring", visualDuration: 0.4, bounce: 0.05 },
                                }}
                            >
                                <motion.h1 variants={childVariants} className="text-2xl lg:text-3xl text-white font-semibold mb-5">
                                    Talk to us
                                </motion.h1>

                                <form onSubmit={handleSubmit} className="flex flex-col gap-5 lg:gap-10 items-end w-full">
                                    {['name', 'email', 'mobile', 'message'].map((field, index) => (
                                        <div key={index} className="form-group w-full group relative">
                                            <input
                                                type="text"
                                                name={field}
                                                value={(formData as any)[field]}
                                                onChange={handleChange}
                                                className="peer bg-transparent w-full border-0 border-b border-white focus:outline-none outline-none text-white placeholder-transparent pl-0.5"
                                                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                                            />
                                            <label htmlFor={field} className="absolute inline-block pointer-events-none text-white transition-all duration-300 peer-placeholder-shown:top-2 peer-placeholder-shown:left-1 text-xs opacity-80 uppercase peer-placeholder-shown:text-xs peer-placeholder-shown:opacity-100 -top-2.5 peer-focus:-top-2.5 -left-1 peer-focus:-left-1 peer-focus:text-xs peer-focus:opacity-80">
                                                {field === 'mobile' ? 'Mobile Number *' : `${field.charAt(0).toUpperCase() + field.slice(1)} *`}
                                            </label>
                                            {errors[field] && <p className="text-red-400 text-xs mt-1">{(errors as any)[field]}</p>}
                                        </div>
                                    ))}

                                    <div className="flex flex-col lg:flex-row items-center justify-between w-full h-full lg:h-full">
                                        {/* <div className="g-recaptcha  rounded-lg" data-sitekey="6Lc9AfcqAAAAAEj7D0OZMfigWj-76KWo1tFHZGVa"></div> */}
                                        <Button
                                            text={loading ? "Sending..." : "Send"}
                                            className={`${syne.className} !px-12 lg:!mt-0 !border-transparent`}
                                        />
                                    </div>
                                    {successMsg && <p className="text-green-400 text-sm mt-3">{successMsg}</p>}
                                </form>
                            </motion.div>

                            <div className="col relative w-full">
                                <motion.div className="block" variants={containerVariants}
                                    initial="hidden"
                                    animate="visible"
                                    transition={{
                                        duration: 0.4,
                                        scale: { type: "spring", visualDuration: 0.4, bounce: 0.05 },
                                    }}>
                                    <motion.div className="mt-5 lg:mt-0" variants={childVariants}>
                                        <iframe className="w-full h-[40vh] max-w-sm lg:max-w-full lg:w-full lg:h-full rounded-3xl overflow-hidden"
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.3232757766596!2d77.0010424!3d8.4679111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05b35b43c48fc9%3A0x5b108602ace67bce!2sRoyal%20construction!5e0!3m2!1sen!2sin!4v1744090198510!5m2!1sen!2sin"
                                            frameBorder="0"
                                            allowFullScreen
                                            loading="lazy"
                                        ></iframe>
                                    </motion.div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto pt-20 pb-20 lg:pt-24 lg:pb-24 xl:pb-32 px-4 lg:px-16 xl:px-0">
                <div className="col">
                    <h1 className="text-4xl lg:text-5xl font-bold text-center">
                        <span className="linear-text">We Are In</span>
                    </h1>
                    <p className="mt-5 lg:mt-7 xl:max-w-2xl mx-auto text-center dark:text-gray-400">
                        We have multi geographic presence and it enables us to identify and respond swiftly to opportunities. Global presence is key element of our business strategy.
                    </p>
                    <Globe />
                </div>
            </div>
        </div>
    );
}

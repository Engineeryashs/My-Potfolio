import React from "react"
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { ReactTyped } from "react-typed";

export function Home() {
    return (
        <>
            <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 mt-12 md:mt-24 space-y-3 order-2 md:order-1">
                        <span className="text-xl">Welcome in my feed</span>
                        <div className="flex text-2xl space-x-2 md:text-4xl">
                            <h1>Hello I'm a</h1>
                            <span className="text-red-500 font-bold">
                                <ReactTyped
                                    strings={["Coder", "Programmer", "Developer", "Engineer"]}
                                    typeSpeed={40}
                                    backSpeed={50}
                                    loop
                                /></span>
                        </div>
                        <br />
                        <p className="text-sm md:text-base text-justify">Hi! I'm Yash Saxena, a passionate MERN stack developer with a strong focus on building
                            scalable and efficient web applications. I recently completed my B.Tech in Information
                            Technology from Medicaps University. I enjoy working on projects that solve real-world
                            problems and make a positive impact.</p>
                        <br />
                        <div className="flex flex-col justify-center items-center space-y-6 md:space-y-0 md:flex-row justify-between">
                            <div className="space-y-2">
                                <h1 className="font-bold">Available on</h1>
                                <div className="flex space-x-6">
                                    <FaFacebook className="text-2xl cursor-pointer" />
                                    <FaLinkedin className="text-2xl cursor-pointer" />
                                    <FaTwitter className="text-2xl cursor-pointer" />
                                    <FaInstagram className="text-2xl cursor-pointer" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <h1 className="font-bold">Currently working on</h1>
                                <div className="flex space-x-6">
                                    <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200 border-[2px] rounded-full" />
                                    <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 border-[2px] rounded-full" />
                                    <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 border-[2px] rounded-full" />
                                    <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 border-[2px] rounded-full" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-10 flex flex-col items-center mt-8 md:w-1/2 md:mt-22 md:ml-48 order-1 md:order-2">
                        <img src="/photo.avif" alt="Engineer-Yash-Saxena" className="rounded-full md:h-[450px] md:w-[450px]" />
                        <a href="/Resume_YashSaxena_ITB.pdf"><button className="h-12 w-40 shadow-md shadow-gray-500 font-semibold text-gray-500 rounded-lg hover:scale-110 duration-200">Download CV</button></a>
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}
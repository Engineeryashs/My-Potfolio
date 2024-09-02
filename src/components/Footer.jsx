import React from "react"
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export function Footer(){
    return(
        <div>
            <hr />
            <footer className="py-12">
                <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
                    <div className="flex flex-col items-center justify-between">
                        <div className="flex space-x-4">
                        <FaFacebook size={24}/>
                        <FaLinkedin size={24}/>
                        <FaTwitter size={24}/>
                        <FaInstagram size={24}/>
                        </div>
                        <div className="mt-8 border-t border-gray-700 flex flex-col items-center pt-8">
                            <p className="text-sm">&copy; 2024 Your Company. All rights reserved.</p>
                            <p className="text-sm">Thank you for visiting my portfolio. I hope you enjoyed exploring my work!❤️</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useState } from "react";
import {Link} from "react-scroll"
export function NavBar() {
    const [menu, setMenu] = useState(false);
    const navItems = [
        {
            id: 1,
            text: "Home"
        },
        {
            id: 2,
            text: "About"
        },
        {
            id: 3,
            text: "Projects"
        },
        {
            id: 4,
            text: "Skills"
        },
        {
            id: 5,
            text: "Contact us"
        }
    ]
    return (
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md h-16 fixed top-0 left-0 right-0 bg-white z-50">
            <div className="flex justify-between h-16 items-center">
                <div className="flex space-x-2">
                    <img src="/photo.avif" className="h-12 w-12 rounded-full" alt="" />
                    <h1 className="font-semibold text-xl cursor-pointer">Yas<span className="text-2xl text-green-500 ">h</span>
                        <p className="text-sm">MERN Developer</p>
                    </h1>
                </div>
                <div>
                    <ul className="hidden md:flex space-x-8 cursor-pointer">
                    {
                        navItems.map(function ({ id, text }) {
                            return <li className="hover:scale-110 duration-200" key={id}><Link to={text} smooth={true} duration={500} offset={-70} activeClass="active">{text}</Link></li>
                        })
                   }
                    </ul>
                    <div className="sm:hidden" onClick={() => {
                        setMenu(!menu)
                    }}>{menu ? <AiOutlineCloseCircle size={24} /> : <AiOutlineMenu size={24} />}</div>
                </div>
            </div>
            {
                menu && (
                <div className="bg-white">
                    <ul className="md:hidden flex flex-col items-center justify-center h-screen text-xl space-y-3">
                        {
                        navItems.map(function ({ id, text }) {
                            return <li className="hover:scale-110 duration-200 font-semibold" key={id}><Link onClick={()=>{ setMenu(!menu)}} to={text} smooth={true} duration={500} offset={-70} activeClass="active">{text}</Link></li>
                        })
                        }
                    </ul>
                </div>)
            }
        </div>)
}
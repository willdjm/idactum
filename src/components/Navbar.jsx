import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../assets/logo-idactum.webp'
import { Link } from "react-scroll";
import { FaWhatsapp } from "react-icons/fa";

import './Navbar.css'

export const Navbar = () => {

const [click, setClick] = useState(false)
const handleClick = () => setClick(!click)

const closeMenu = () => setClick(false)

return (

<nav className='navbar justify-between flex justify-items-center w-full max-w-6xl py-5 md:py-0'>

    <a href='/' className='logo'>
        <img className='w-52 md:w-full' src={logo} alt='logo' />
    </a>

    <div className='flex items-center justify-center lg:hidden' onClick={handleClick}>
        {click ? (<FaTimes size={30} style={{ color: '#000000' }} />)
            : (<FaBars size={30} style={{ color: '#000000' }} />)}
    </div>

    <div className={click ? "nav-menu active flex flex-col text-center top-24 w-full left-0 bg-gray-500 text-white font-medium" : "nav-menu flex flex-col gap-5 text-gray-500"}>
        <ul className={click ? 'md:flex md:flex-col flex flex-col items-center gap-5 p-5' : "nav-menu flex gap-5 font-medium"}>
            <li>
                <Link className='cursor-pointer' to="/" spy={true} smooth={true} offset={-100} duration={500} delay={100} onClick={closeMenu}>Home</Link>
            </li>
            <li>
                <Link className='cursor-pointer' to="quemSomos" spy={true} smooth={true} offset={0} duration={500} delay={100} onClick={closeMenu}>Quem somos</Link>
            </li>
            <li>
                <Link className='cursor-pointer' to="contact" spy={true} smooth={true} duration={500} delay={100} onClick={closeMenu}>Contato</Link>
            </li>
            <li className='group'>
                <button className="relative h-7 w-40 overflow-hidden border md:border-gray-500 md:text-gray-500 rounded-full shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-green-500 before:duration-500 before:ease-out hover:before:h-40 hover:before:w-40">
                    <span className="relative z-10">Acessar <span className='text-green-500 group-hover:text-white'>i</span>Dactum</span>
                </button>
            </li>
            <li>
                <a className='flex gap-1 items-center justify-center text-sm cursor-pointer' href="https://wa.me/" target='_blank' rel="noreferrer"><FaWhatsapp className='text-green-500 cursor-pointer hover:text-base' size={25} /> (11) 99776-0614</a>
            </li>
        </ul>
        <ul className={click ? 'md:flex md:flex-col flex flex-col gap-5 p-5' : "nav-menu flex justify-end gap-9 font-semibold overline decoration-2 decoration-green-500 text-gray-500"}>
            <li>
                <Link className='cursor-pointer' to="OurSolutions" spy={true} smooth={true} duration={500} delay={100} onClick={closeMenu}>Nossas Soluções</Link>
            </li>
            <li>
                <Link className='cursor-pointer' to="DevelopersAndInvestors" spy={true} smooth={true} duration={500} delay={100} onClick={closeMenu}>Incorporadoras e Investidores</Link>
            </li>
            <li>
                <Link className='cursor-pointer' to="FinancialAgents2" spy={true} smooth={true} duration={500} delay={100} onClick={closeMenu}>Instituições financeiras</Link>
            </li>
        </ul>
    </div>
</nav>
)
}

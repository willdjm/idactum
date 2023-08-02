import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../assets/logo-idactum.webp'
import { Link } from "react-scroll";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { AiOutlineInstagram } from 'react-icons/ai';

import './Navbar.css'

export const Navbar = () => {

const [click, setClick] = useState(false)
const handleClick = () => setClick(!click)

const closeMenu = () => setClick(false)

return (

<div className='flex flex-col justify-center items-center pt-5'>
    <nav className='navbar justify-between flex justify-items-center w-full max-w-6xl'>

        <a href='/' className='logo'>
            <img className='' src={logo} alt='logo' />
        </a>

        <div className='block md:hidden' onClick={handleClick}>
            {click ? (<FaTimes size={30} style={{ color: '#000000' }} />)
                : (<FaBars size={30} style={{ color: '#000000' }} />)}
        </div>

        <div className={click ? "nav-menu active flex flex-col text-center top-20 w-full left-0 bg-gray-500 text-white font-medium" : "nav-menu flex flex-col gap-5 p-3 text-gray-500"}>
            <ul className={click ? 'flex flex-col' : "nav-menu flex gap-5 font-medium"}>
                <li>
                    <Link className='cursor-pointer' to="/" spy={true} smooth={true} offset={-100} duration={500} delay={100} onClick={closeMenu}>Home</Link>
                </li>
                <li>
                    <Link className='cursor-pointer' to="#" spy={true} smooth={true} offset={-100} duration={500} delay={100} onClick={closeMenu}>Quem somos</Link>
                </li>
                <li>
                    <Link className='cursor-pointer' to="contact" spy={true} smooth={true} duration={500} delay={100} onClick={closeMenu}>Contato</Link>
                </li>
                <li>
                    <Link
                        className='cursor-pointer rounded-full py-1 px-4 border md:border-gray-500 hover:bg-green-500 border-white'
                        to="#" spy={true} smooth={true} offset={-150} duration={500} delay={100} onClick={closeMenu} >Acessar <span className='text-green-500'>i</span>Dactum</Link>
                </li>
                <li>
                    <Link to="OurSolutions" spy={true} smooth={true} offset={-100} duration={500} delay={100} onClick={closeMenu} className='flex gap-1 items-center justify-center text-lg cursor-pointer'><FaWhatsapp className='md:text-emerald-500 text-white cursor-pointer' size={25} /> (11)-94567-1234</Link>
                </li>
                <li>
                    <Link className='cursor-pointer flex flex-col items-center justify-center' to="#" spy={true} smooth={true} offset={-100} duration={500} delay={100} onClick={closeMenu}><AiOutlineInstagram size={25} /></Link>
                </li>
                <li>
                    <Link className='cursor-pointer flex flex-col items-center justify-center' to="#" spy={true} smooth={true} offset={-100} duration={500} delay={100} onClick={closeMenu}><FaLinkedin size={25} /></Link>
                </li>
            </ul>
            <ul className={click ? 'flex flex-col' : "nav-menu flex justify-end gap-9 font-semibold overline decoration-2 decoration-green-500 text-gray-500"}>
                <li>
                    <Link className='cursor-pointer' to="OurSolutions" spy={true} smooth={true} duration={500} delay={100} onClick={closeMenu}>Nossas Soluções</Link>
                </li>
                <li>
                    <Link className='cursor-pointer' to="DevelopersAndInvestors" spy={true} smooth={true} duration={500} delay={100} onClick={closeMenu}>Incorporadoras e Investidores</Link>
                </li>
                <li>
                    <Link className='cursor-pointer' to="FinancialAgents" spy={true} smooth={true} duration={500} delay={100} onClick={closeMenu}>Agentes financeiros</Link>
                </li>
            </ul>
        </div>
    </nav>
</div>
)
}

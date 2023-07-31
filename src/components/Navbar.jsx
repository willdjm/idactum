import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../assets/logo-idactum.png'
import { Link } from "react-scroll";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { AiOutlineInstagram } from 'react-icons/ai';


import './Navbar.css'

export const Navbar = () => {

const [click, setClick] = useState(false)
const handleClick = () => setClick(!click)

const closeMenu = () => setClick(false)

return (

<div id='' className=' flex flex-col md:flex md:flex-col p-5 md:p-5'>
    <nav className=' navbar justify-between flex md:flex md:justify-center gap-5 md:items-center md:max-w-5xl md:m-auto md:h-full md:p-0  '>
        <a href='/' className='logo'>
            <img className='h-auto w-40 md:w-52' src={logo} alt='logo' />
        </a>
        <div className='block md:hidden' onClick={handleClick}>
            {click ? (<FaTimes size={30} style={{ color: '#000000' }} />)
                : (<FaBars size={30} style={{ color: '#000000' }} />)}
        </div>
        <div className={click ? "nav-menu active flex flex-col text-center top-20 w-full left-0  bg-CinzaEscuro-500 text-white font-medium " : "nav-menu flex flex-col  "}>
            <div className='flex  items-center justify-center md:p-2 p-5'>
            <ul className={click ? 'flex flex-col gap-5 md:gap-0': "nav-menu flex gap-3 text-xs"}>
                    <li>
                        <Link className='cursor-pointer' to="/" spy={true} smooth={true} offset={-100} duration={500} delay={100} onClick={closeMenu}>Home</Link>
                    </li>
                    <li>
                        <Link className='cursor-pointer' to="#" spy={true} smooth={true} offset={-100} duration={500} delay={100} onClick={closeMenu}>Quem Somos</Link>
                    </li>
                    <li>
                        <Link className='cursor-pointer' to="contact" spy={true} smooth={true}  duration={500} delay={100} onClick={closeMenu}>Contato</Link>
                    </li>
                    <li>
                        <Link
                            className='cursor-pointer rounded-full p-1.5 border md:border-black hover:bg-Verde-500 border-white'
                            to="#" spy={true} smooth={true} offset={-150} duration={500} delay={100} onClick={closeMenu} >Acessar <span className='text-Verde-500'>i</span>Dactum</Link>
                    </li>
                    <li> 
                        <Link  to="OurSolutions" spy={true} smooth={true} offset={-100} duration={500} delay={100} onClick={closeMenu} className='md:flex grid grid-flow-col gap-1 md:gap-0 items-center justify-center cursor-pointer'><FaWhatsapp className='md:text-emerald-500 text-white cursor-pointer' size={20} /> (11)-94567-1234</Link>
                    </li>
                    <li>
                        <Link className='cursor-pointer flex flex-col items-center justify-center'  to="#" spy={true} smooth={true} offset={-100} duration={500} delay={100} onClick={closeMenu}><AiOutlineInstagram size={20}  /></Link>
                    </li>
                    <li>
                        <Link className='cursor-pointer flex flex-col items-center justify-center' to="#" spy={true} smooth={true} offset={-100} duration={500} delay={100} onClick={closeMenu}><FaLinkedin size={20}/></Link>
                    </li>
                </ul>
            </div>
            <div className='flex items-center justify-center md:p-2 p-5'>
                <ul className={click ? 'flex flex-col gap-5 md:gap-0 ': "nav-menu flex gap-3 text-xs font-semibold overline decoration-2 decoration-Verde-500"}>
                    <li>
                        <Link className='cursor-pointer' to="OurSolutions" spy={true} smooth={true}  duration={500} delay={100} onClick={closeMenu}>Nossas Soluções</Link>
                    </li>
                    <li>
                        <Link className='cursor-pointer' to="DevelopersAndInvestors" spy={true} smooth={true}  duration={500} delay={100} onClick={closeMenu}>Incorporadoras e Investidores</Link>
                    </li>
                    <li>
                        <Link className='cursor-pointer' to="FinancialAgents" spy={true} smooth={true} duration={500} delay={100} onClick={closeMenu}>Agentes financeiros</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</div>

)
}

import { AiOutlineInstagram } from 'react-icons/ai';
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import logo from "../assets/logo.png";



export function Header(){
    return(
      <div className='flex items-center justify-center text-xs p-2'>
      <div className='flex gap-28 items-center'>
        <div>
        <img className='h-14' src={logo} alt="" />
        </div>
        <nav className='list-none'>
          <ul className='flex gap-5 items-center'>
            <li><a href="#">Home</a></li>
            <li><a href="#">Quem Somos</a></li>
            <li><a href="#">Contato</a></li>
            <button className='            border 
            border-gray-300 
            m-auto
            p-2 
            rounded-full 
            hover:bg-emerald-500'
            >
              Acessar <span className='
              text-emerald-500 
              hover:text-white'
              >
              i
              </span>
              Dactum
              </button>
              <div className='flex gap-1'>
              <li><a href="#"><FaWhatsapp className='text-emerald-500' size={20} /></a></li>
              <li><a href="#">(11)-94567-1234</a></li>
              </div>
            <li><a href="#"><AiOutlineInstagram size={20}/></a></li>
            <li><a href="#"><FaLinkedin size={20}/></a></li>
          </ul>
          <div className='flex p-2 items-center justify-center'>
          <ul className='flex gap-5 text-xs font-semibold overline decoration-2 decoration-emerald-500'>
            <li><a href="#">Nossas Soluções</a></li>
            <li><a href="#">Incorporadoras e Investidores</a></li>
            <li><a href="#">Agentes financeiros</a></li>
          </ul>
          </div>

        </nav>
      </div>
      </div>
    );
}
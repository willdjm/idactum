import { AiOutlineInstagram } from 'react-icons/ai';
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


export function Footer(){
    return(
            <div className="bg-gradient-to-b from-slate-600 bg-emerald-500 text-xs text-white items-center justify-items-center grid p-6">


                <nav className='flex items-start justify-items-center'>
                    <ul className='grid p-2 gap-5'>
                        <li><p className='font-bold'>Home</p></li>
                        <li><a href="#">Quem Somos</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                    <ul className='grid p-2 gap-5'>
                        <li><p className='font-bold'>i360</p></li>
                        <li><a href="#">Incorporadoras</a></li>
                        <li><a href="#">Investidores</a></li>
                    </ul>
                    <ul className='grid p-2 gap-5'>
                        <li><p className='font-bold'>iPatri</p></li>
                        <li><a href="#">Acessores de Investimento</a></li>
                        <li><a href="#">Indivíduos</a></li>
                    </ul>
                    <ul className='grid p-2 gap-3'>
                        <li><p className='font-bold'>Contato</p></li>
                        <div className='flex gap-1'>
                        <li><a href="#"><FaWhatsapp size={15}/></a></li>
                        <li><a href="#">(11)-94567-1234</a></li>
                        </div>
                        <div className='flex gap-5'>
                        <li><a href="#"><AiOutlineInstagram size={15}/></a></li>
                        <li><a href="#"><FaLinkedin size={15}/></a></li>
                        </div>
                        <div className='flex '>
                        <li><a href="#"><MdEmail size={15}/></a></li>
                        <li><a href="#">Envie E-mail</a></li>
                        </div>
                        <li><p>R. 24 de Outubro 1440 - Sala 1506 - Independência<br/>CEP 90510-001 - Porto Alegre - RS</p></li>
                    </ul>
                    <ul className='grid p-2 gap-5'>
                        <li><p className='font-bold'>Acesso</p></li>
                        <button className='bg-white text-black rounded-full p-1.5 hover:bg-emerald-500'>Acessar iDactum</button>
                    </ul>
                </nav>

                    <p className="text-left">Copyright 2023 - iDactum Tecnologia Imobiliária - Todos os direitos reservados.</p>

            </div>
    );
}
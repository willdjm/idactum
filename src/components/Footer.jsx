import { AiOutlineInstagram } from 'react-icons/ai';
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export function Footer() {
return (

<footer className="bg-gradient-to-b from-CinzaEscuro-500 bg-Verde-500 text-xs text-white md:justify-around md:flex md:items-center p-5 md:p-5 ">
    <div className='flex flex-col w-full md:flex md:max-w-5xl md:m-auto md:h-full md:items-center gap-5  '>
        <div className="mx-auto md:mx-auto md:w-3/4 w-full md:max-w-screen-xl max-w-screen-xl  ">
            <div className="md:grid md:grid-cols-5 grid grid-cols-2 gap-5 md:gap-0 ">
                <div>
                    <h2 className="mb-2 text-xs font-medium uppercase">Institucional</h2>
                    <ul className="">
                        <li className="mb-2">
                            <a href="#" className="hover:underline">Home</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:underline">Quem Somos</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contato</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-2 text-xs font-medium ">i360</h2>
                    <ul className="">
                        <li className="mb-2">
                            <a href="#" className="hover:underline">Incorporadoras</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:underline">Investidores</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-2 text-xs font-medium ">iPatri</h2>
                    <ul className="">
                        <li className="mb-2">
                            <a href="#" className="hover:underline ">Acessores de Investimento</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Indivíduos</a>
                        </li>
                    </ul>
                </div>
                       <div>
                    <h2 className="mb-2 text-xs font-medium ">Contato</h2>
                    <ul className="">
                        <div className='flex mb-2 gap-0.5 items-center'>
                            <a href="#" className="hover:underline"><FaWhatsapp size={18} /></a>
                            <li>
                                <a href="#">(11)9999-9999</a>
                            </li>
                        </div>
                        <div className='mb-2 flex gap-5 items-center'>
                            <li>
                                <a href="#"><AiOutlineInstagram size={18} /></a>
                            </li>
                            <li>
                                <a href="#"><FaLinkedin size={18} /></a>
                            </li>
                        </div>
                        <div className='flex mb-2 items-center'>
                            <li>
                                <a href="#"><MdEmail size={18} /></a>
                            </li>
                            <li>
                                <a href="#">Envie E-mail</a>
                            </li>
                        </div>
                        <li className="mb-2">
                            <p className='md:text-[10px] text-[8px]'>R. 24 de Outubro 1440 - Sala 1506 - Independência<br />CEP 90510-001 - Porto Alegre - RS</p>
                        </li>
                    </ul>
                </div>
                <div className='md:flex md:flex-col flex flex-col gap-0 md:gap-2 md:items-start md:justify-start md:justify-items-center justify-center items-center justify-items-center'>
                    <h2 className="mb-2 md:text-xs text-xs md:font-medium font-medium">Acesso</h2>
                    <ul className="">
                        <li className="mb-2">
                            <a href="#" className="bg-white text-CinzaEscuro-500 rounded-full p-1.5 hover:bg-Verde-500">Acessar iDactum</a>
                        </li>
                    </ul>
                </div>
            </div>
            <hr className=" border-gray-200" />
            <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-[9px] ">© 2023 iDactum Tecnologia Imobiliária - Todos os direitos reservados.</span>
            </div>
        </div>
    </div>
</footer>
);
}
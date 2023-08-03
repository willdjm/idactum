import { AiOutlineInstagram } from 'react-icons/ai';
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export function Footer() {

return (

<footer className='justify-between flex flex-col justify-items-center w-full max-w-6xl'>

    <div className="md:grid md:grid-cols-5 items-start justify-start justify-items-start">
        <div>
            <h1 className="mb-10 text-base font-semibold ">Institucional</h1>
            <ul className="">
                <li className="mb-5">
                    <a href="#" className="hover:underline">Home</a>
                </li>
                <li className="mb-5">
                    <a href="#" className="hover:underline">Quem Somos</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contato</a>
                </li>
            </ul>
        </div>
        <div>
            <h1 className="mb-10 text-base font-semibold">i360</h1>
            <ul className="">
                <li className="mb-5">
                    <a href="#" className="hover:underline">Incorporadoras</a>
                </li>
                <li className="mb-5">
                    <a href="#" className="hover:underline">Investidores</a>
                </li>
            </ul>
        </div>
        <div>
            <h1 className="mb-10 text-base font-semibold">iPatri</h1>
            <ul className="">
                <li className="mb-5">
                    <a href="#" className="hover:underline">Acessores de Investimento</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Indivíduos</a>
                </li>
            </ul>
        </div>
        <div>
            <h1 className="mb-10 text-base font-semibold">Contato</h1>
            <ul className="">
                <div className='flex mb-5 gap-2 items-center'>
                    <a href="#" className="hover:underline"><FaWhatsapp size={25} /></a>
                    <li>
                        <a href="#">(11) 9999-9999</a>
                    </li>
                </div>
                <div className='mb-5 flex gap-14 items-center'>
                    <li>
                        <a href="#"><AiOutlineInstagram size={30} /></a>
                    </li>
                    <li>
                        <a href="#"><FaLinkedin size={30} /></a>
                    </li>
                </div>
                <div className='flex mb-5 gap-3 items-center'>
                    <li>
                        <a href="#"><MdEmail size={30} /></a>
                    </li>
                    <li>
                        <a href="#">Envie E-mail</a>
                    </li>
                </div>
                <li className="mb-10">
                    <p className='text-base'>R. 24 de Outubro 1440 - Sala 1506 - Independência<br />CEP 90510-001 - Porto Alegre - RS</p>
                </li>
            </ul>
        </div>
        <div className='md:flex md:flex-col flex flex-col gap-0 md:gap-2 md:items-start md:justify-start md:justify-items-center justify-center items-center justify-items-center'>
            <h1 className="mb-10 text-base font-semibold ">Acesso</h1>
            <ul className="">
                <li className="mb-5">
                    <button className="relative h-7 w-40 overflow-hidden border md:border-white md:bg-white md:text-gray-500 rounded-full shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-green-500 before:duration-500 before:ease-out hover:text-white hover:before:h-40 hover:before:w-40 ">
                        <span className="relative z-10">Acessar iDactum</span>
                    </button>                    </li>
            </ul>
        </div>
    </div>
    <span className="text-sm ">© Copyrigth 2023 iDactum Tecnologia Imobiliária - Todos os direitos reservados.</span>
</footer>
);
}
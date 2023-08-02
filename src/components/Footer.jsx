import { AiOutlineInstagram } from 'react-icons/ai';
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export function Footer() {

return (

<footer className='flex flex-col justify-center items-center p-20 bg-gradient-to-b from-gray-500 bg-green-500 text-white'>
    <div className='justify-between flex flex-col justify-items-center w-full max-w-6xl'>
        <div className="grid grid-cols-5 items-start justify-start justify-items-start">
            <div>
                <h1 className="mb-10 text-base font-semibold">Institucional</h1>
                <ul>
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
                <ul>
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
                <ul>
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
                <ul>
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
                <ul>
                    <li className="mb-5">
                        <a href="#" className="bg-white text-gray-500 rounded-full py-1 px-4 hover:bg-green-500">Acessar iDactum</a>
                    </li>
                </ul>
            </div>
        </div>
        <span className="text-sm">© Copyrigth 2023 iDactum Tecnologia Imobiliária - Todos os direitos reservados.</span>
    </div>
</footer>
);
}
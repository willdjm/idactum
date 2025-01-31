import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-scroll";

export function Footer() {

return (

<footer className='flex justify-center items-center p-5 md:p-20 bg-gradient-to-b from-gray-500 bg-green-500 text-white'>

<div className='md:justify-between flex flex-col justify-items-center md:w-full md:max-w-6xl'>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
    <div>
        <h1 className="md:mb-10 text-base font-semibold ">Institucional</h1>
        <ul className="">
            <li className="md:mb-5">
                <Link className='cursor-pointer hover:underline text-sm' to="/" spy={true} smooth={true} offset={-100} duration={500} delay={100}>Home</Link>
            </li>
            <li className="md:mb-5">
                <Link className='cursor-pointer hover:underline text-sm' to="quemSomos" spy={true} smooth={true} offset={0} duration={500} delay={100}>Quem somos</Link>
            </li>
            <li className="md:mb-5">
                <Link className='cursor-pointer hover:underline text-sm' to="contact" spy={true} smooth={true} offset={50} duration={500} delay={100}>Contato</Link>
            </li>
        </ul>
    </div>
    <div>
        <h1 className="md:mb-10 text-base font-semibold">i360</h1>
        <ul className="">
            <li className="md:mb-5">
                <Link className='cursor-pointer hover:underline text-sm' to="DevelopersAndInvestors" spy={true} smooth={true} offset={0} duration={500} delay={100}>Incorporadoras</Link>
            </li>
            <li className="md:mb-5">
                <Link className='cursor-pointer hover:underline text-sm' to="DevelopersAndInvestors" spy={true} smooth={true} offset={0} duration={500} delay={100}>Investidores</Link>
                <a href="#" className="hover:underline text-sm"></a>
            </li>
        </ul>
    </div>
    <div>
        <h1 className="md:mb-10 text-base font-semibold">iPatri</h1>
        <ul className="">
            <li className="md:mb-5">
                <Link className='cursor-pointer hover:underline text-sm' to="FinancialAgents2" spy={true} smooth={true} offset={0} duration={500} delay={100}>Acessores de Investimento</Link>
            </li>
            <li>
                <Link className='cursor-pointer hover:underline text-sm' to="FinancialAgents2" spy={true} smooth={true} offset={0} duration={500} delay={100}>Indivíduos</Link>
            </li>
        </ul>
    </div>
    <div>
        <h1 className="md:mb-10 text-base font-semibold">Contato</h1>
        <ul className="">
            <div className='flex md:mb-5 md:gap-1 items-center'>
                <a className='flex gap-1 items-center justify-center text-sm cursor-pointer' href="https://wa.me/+5511997760614" target='_blank' rel="noreferrer"><FaWhatsapp className='text-white cursor-pointer hover:text-base' size={25} /> (11) 99776-0614</a>
            </div>

            <div className='flex md:mb-5 md:gap-1 items-center'>
                <li>
                    <Link to="contact" spy={true} smooth={true} duration={500} delay={0} className='flex gap-1 items-center justify-center text-sm cursor-pointer'><MdEmail className='text-white cursor-pointer hover:text-base' size={25} />Envie e-mail</Link>
                </li>
            </div>
        </ul>
    </div>
    <div className='flex md:flex-col flex-col md:gap-2 md:items-start items-center md:justify-start justify-center md:justify-items-center justify-items-center col-start-1 col-span-2 md:col-start-5 md:col-span-5'>
        <h1 className="md:mb-10 text-base font-semibold">Acesso</h1>
        <ul>
            <li className='group md:mb-5'>
                <button className="relative h-7 w-40 overflow-hidden bg-white border md:border-gray-500 hover:border-green-500 md:text-gray-500 text-gray-500 rounded-full shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-green-500 before:duration-500 before:ease-out hover:before:h-40 hover:before:w-40">
                    <span className="relative z-10">Acessar <span className='text-green-500 group-hover:text-white'>i</span>Dactum</span>
                </button>
            </li>
        </ul>
    </div>
</div>
<div className="flex md:items-end relative md:right-8 md:justify-end justify-center items-center md:justify-items-end">
    <p className='text-xs md:text-left text-center md:flex md:text-sm justify-center justify-items-center flex p-3 md:p-0'>Avenida da Aclimação 690 - Aclimação <br /> CEP 01531-000 - São Paulo</p>
</div>
<div className='grid lg:flex w-full lg:justify-between gap-3 lg:pt-5'>
<span className="md:text-xs text-xs md:text-left text-center p-2 mt-5">© Copyrigth 2023 iDactum Tecnologia Imobiliária - Todos os direitos reservados.</span>


            <div className='flex items-center justify-center gap-5 opacity-70'>
                <a className='ml-2' href="https://sacorp.tec.br/" target='_blank' rel="noreferrer">
                    <picture>
                        <img src="/logo-sacorp.svg" alt="logo Sacorp" width={100} height={100} loading="lazy" className='lg:w-16 w-14' />
                    </picture>
                </a>
                <a href="https://www.gukenz.com.br/" target='_blank' rel="noreferrer">
                    <picture>
                        <img src="/logo-gukenz.svg" alt="logo Gukenz" width={100} height={100} className='lg:w-16 w-14' />
                    </picture>
                </a>
            </div>

      
    </div>
</div>
</footer>
);
}
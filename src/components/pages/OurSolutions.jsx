import logo from "../../assets/logo-i360.webp";
import seta from "../../assets/seta-verde.webp";
import laptop from "../../assets/laptop.webp";
import icon1 from "../../assets/icone-agentes-financeiros.svg";
import icon2 from "../../assets/icone-incorporadoras.svg";
import divisao from "../../assets/sombra-divisao-verde2.webp";
import brilho from "../../assets/brilho-fundo-cinza.webp";
import { Link } from "react-scroll";


export const OurSolutions = () => {

return (

<div className='flex justify-center items-center bg-gray-500'>
    <div className='flex flex-col justify-between justify-items-center md:max-w-6xl'>
        {/* Título */}
        <div id="OurSolutions" className="flex items-end justify-items-center justify-center p-7 md:p-16 md:gap-10">
            <h1 className=" text-white text-center font-semibold text-2xl md:text-3xl">Multiplataforma de
                <span className="md:text-6xl text-2xl">
                    <span className="md:text-green-500 text-green-500"> i</span>nteligência de dados</span> <br />para eficiência de investimentos através de ativos imobiliários.
            </h1>
        </div>
        {/* Bloco1 */}
        <div className='flex flex-col'>
            <ol className="grid grid-cols md:flex justify-items-center justify-center items-center md:gap-14 md:p-20 text-white md:max-w-6xl rounded-full">
                <img className='flex invisible md:visible md:absolute z-20' src={seta} alt="" />
                <li className="flex items-center relative md:-bottom-5 md:left-0 z-20">
                    <span className="flex p-5 md:p-10 text-center items-center justify-center md:w-48 w-40 md:h-48 h-40 bg-gray-500 border border-whit rounded-full">
                        Verdadeira central de dados
                    </span>
                </li>
                <li className="flex items-center relative md:bottom-5 md:left-0 z-20">
                    <span className="flex p-5 md:p-10 text-center items-center justify-center md:w-48 w-40 md:h-48 h-40 bg-gray-500 border border-whit rounded-full">
                        Para empresas e indivíduos
                    </span>
                </li>
                <li className="flex items-center relative md:bottom-5 md:left-0 z-20">
                    <span className="flex p-5 md:p-10 text-center items-center justify-center md:w-48 w-40 md:h-48 h-40 bg-gray-500 border border-whit rounded-full">
                        Ajuda a realizar análises completas
                    </span>
                </li>
                <li className="flex items-center relative md:-bottom-5 md:left-0 z-10">
                    <span className="flex p-5 md:p-10 text-center items-center justify-center md:w-48 w-40 md:h-48 h-40 bg-gray-500 border border-whit rounded-full">
                        Tomadas de decisão mais eficazes
                    </span>
                </li>
            </ol>
        </div>
        {/* Bloco3 */}
        <div className='grid md:flex items-center justify-center justify-items-center p-5 md:p-0 md:pb-10'>
            <div className="md:max-w-lg grid md:flex md:flex-col md:items-start items-center justify-items-center justify-center md:gap-5">
                <img src={logo} alt="" />
                <span className="text-white text-center md:text-start font-light text-2xl md:text-3xl">PODEROSA FERRAMENTA PARA ENRIQUECIMENTO DE INFORMAÇÕES E TOMADA DE DECISÃO.</span>
            </div>
            <div className="items-center justify-center flex">
                <span className="flex bg-green-500 text-base text-center items-center justify-center md:w-44 w-40 p-10 text-white md:h-44 h-40 rounded-full relative md:bottom-5 -bottom-10 md:left-20 left-0 z-20">100% digital e rápida. Na palma da sua mão.</span>
            </div>
            <div className='md:flex items-center justify-center justify-items-center'>
                <img className="z-10" src={laptop} alt="" />
                <img className="hidden md:flex md:absolute z-0 md:h-[65rem]" src={brilho} alt="" />
            </div>
        </div>
        <div className="grid md:flex justify-items-center justify-center items-center max-w-6xl md:p-0 p-5">
            <div className="bg-white text-gray-500 items-center p-5 md:p-10 gap-5 justify-center flex flex-col justify-items-center md:rounded-s-2xl">
                <img className="items-center justify-center w-20 md:w-28" src={icon2} alt="" />
                <h1 className="text-center font-medium text-4xl "><span className="text-green-500 font-medium  text-4xl">i</span>ncorporadoras e <span className="text-green-500 font-medium  text-4xl">i</span>nvestidores</h1>
                <p className="text-center font-medium text-xl">
                    TENHA INFORMAÇÃO E VISÃO EXCLUSIVA <br />DOS IMÓVEIS EM TODOS OS ÂNGULOS</p>
                <p className="text-center font-medium md:text-sm">Amplie as possibilidades de incorporação imobiliária e investimento, desde a definição de landbanks até a viabilidade comercial.</p>
                <Link
                    to="DevelopersAndInvestors" spy={true} smooth={true} duration={500} delay={100}>
                    <button className=" border border-green-500 text-green-500 text-center p-2 w-44 text-base font-medium rounded-full">Saiba mais</button>
                </Link>
            </div>
            <div className="bg-green-500 text-gray-500  items-center p-5 md:p-10 gap-5 justify-center flex flex-col justify-items-center md:rounded-e-2xl">
                <img className=" items-center justify-center w-20 md:w-28 " src={icon1} alt="" />
                <p className="text-center font-medium text-4xl">Agentes f<span className="text-white font-medium text-4xl">i</span>nanceiros</p>
                <p className="text-center font-medium text-xl">
                    INVISTA EM DADOS PRIMEIRO, SUAS SOLUÇÕES <br /> FINANCEIRAS RENDEM MAIS DEPOIS
                </p>
                <p className="text-center font-medium md:text-sm text-white">Acesso à inteligência de dados para empresas e/ou indivíduos rentabilizarem ainda através de ativos imobiliários.</p>
                <Link
                    to="FinancialAgents" spy={true} smooth={true} duration={500} delay={100}>
                    <button className='cursor-pointer borderborder-white text-green-500 bg-white text-center p-2 w-44 text-base font-medium rounded-full' >Saiba mais</button>
                </Link>
            </div>
        </div>
        {/* Bloco4 */}
        <img src={divisao} alt="" />
    </div>
</div>
)
}
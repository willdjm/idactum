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

<div id="quemSomos" className='flex justify-center items-center bg-gray-500'>
    <div className='flex flex-col justify-between justify-items-center md:max-w-6xl'>
        {/* Título */}
<div className="flex flex-col items-center gap-2 font-semibold justify-items-center justify-center p-7 md:p-16">
<h1 className="text-green-500 md:text-6xl text-4xl text-center">i<span className="md:text-6xl text-center text-4xl text-white">
nteligência de dados imobiliários </span>
</h1>
<span className="text-white text-3xl font-semibold text-center">
para incorporadoras, bancos e assessorias de investimento.
</span>
</div>
        {/* Bloco1 */}
        <div className='flex flex-col'>
            <ol className="grid grid-cols-2 lg:flex justify-items-center justify-center items-center lg:gap-14 gap-5 lg:p-20 text-white md:max-w-6xl rounded-full">
                <img className='lg:flex hidden lg:absolute z-20' src={seta} alt="" />
                <li className="flex items-center lg:relative lg:-bottom-5 lg:left-0 z-20">
                    <span className="flex p-5 text-sm lg:text-base lg:p-5 text-center items-center justify-center lg:w-48 w-40 lg:h-48 h-40 bg-gray-500 border border-whit rounded-full">
                    Centenas de fontes e milhares de dados imobiliários
                    </span>
                </li>
                <li className="flex items-center relative lg:bottom-5 lg:left-0 z-20">
                    <span className="flex p-5 text-sm lg:text-base lg:p-5 text-center items-center justify-center lg:w-48 w-40 lg:h-48 h-40 bg-gray-500 border border-whit rounded-full">
                    Visão completa e com profundidade do ecossistema imobiliário
                    </span>
                </li>
                <li className="flex items-center relative lg:bottom-5 lg:left-0 z-20">
                    <span className="flex p-5 text-sm lg:text-base lg:p-5 text-center items-center justify-center lg:w-48 w-40 lg:h-48 h-40 bg-gray-500 border border-whit rounded-full">
                    Visualizações e insights inéditos
                    </span>
                </li>
                <li className="flex items-center relative lg:-bottom-5 lg:left-0 z-10">
                    <span className="flex p-5 text-sm lg:text-base lg:p-7 text-center items-center justify-center lg:w-48 w-40 lg:h-48 h-40 bg-gray-500 border border-whit rounded-full">
                    Tomada de decisão mais clara e madura
                    </span>
                </li>
            </ol>
        </div>
        {/* Bloco3 */}
        <div className='grid lg:flex items-center justify-center justify-items-center p-5 lg:p-0 lg:pb-10 lg:relative lg:-top-20 pt-10 lg:pt-0 z-0'>
            <div className="lg:max-w-lg grid lg:flex gap-5 lg:gap-0 lg:flex-col lg:items-start items-center justify-items-center justify-center lg:gap-5">
                <img src={logo} alt="" />
                <span className="text-white text-center lg:text-start font-light text-2xl lg:text-3xl max-w-2xl">PODEROSA FERRAMENTA PARA ENRIQUECIMENTO DE INFORMAÇÕES E TOMADA DE DECISÃO.</span>
            </div>
            <div className="items-center justify-center flex">
                <span className="flex bg-green-500 text-base text-center items-center justify-center lg:w-44 w-40 p-9 text-white lg:h-44 h-40 rounded-full relative lg:bottom-5 -bottom-10 lg:left-20 left-0 z-20">100% digital e rápida. Na palma da sua mão.</span>
            </div>
            <div className='md:flex items-center justify-center justify-items-center'>
                <img className="z-10" src={laptop} alt="" />
                <img className="hidden md:flex md:absolute z-0 md:h-[65rem]" src={brilho} alt="" />
            </div>
        </div>
        <div id="OurSolutions" className="grid lg:flex justify-items-center justify-center items-center max-w-6xl lg:p-0 p-5">
            <div className="bg-white text-gray-500 items-center p-5 md:p-10 gap-5 justify-center flex flex-col justify-items-center md:rounded-s-2xl">
                <img className="items-center justify-center w-20 md:w-28" src={icon2} alt="" />
                <h1 className="text-center font-medium text-4xl "><span className="text-green-500 font-medium  text-4xl">i</span>ncorporadoras e <span className="text-green-500 font-medium  text-4xl">i</span>nvestidores</h1>
                <p className="text-center font-medium text-xl">
                    TENHA INFORMAÇÃO E VISÃO EXCLUSIVA <br />DOS IMÓVEIS EM TODOS OS ÂNGULOS</p>
                <p className="text-center font-medium md:text-base">Amplie as possibilidades de incorporação imobiliária e investimento, desde a definição de landbanks até a viabilidade comercial.</p>
                <Link
                    to="DevelopersAndInvestors" spy={true} smooth={true} duration={500} delay={100}>
                    <button className=" border border-green-500 text-green-500 text-center p-2 w-44 text-base font-medium rounded-full">Saiba mais</button>
                </Link>
            </div>
            <div className="bg-green-500 text-gray-500  items-center p-5 md:p-10 gap-5 justify-center flex flex-col justify-items-center md:rounded-e-2xl">
                <img className=" items-center justify-center w-20 md:w-28 " src={icon1} alt="" />
                <p className="text-center font-medium text-4xl">Instituições f<span className="text-white font-medium text-4xl">i</span>nanceiros</p>
                <p className="text-center font-medium text-xl">
                    INVISTA EM DADOS PRIMEIRO, SUAS SOLUÇÕES <br /> FINANCEIRAS RENDEM MAIS DEPOIS
                </p>
                <p className="text-center font-medium md:text-base text-white">Acesso à inteligência de dados para empresas e/ou indivíduos rentabilizarem ainda através de ativos imobiliários.</p>
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
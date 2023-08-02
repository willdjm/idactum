import logo from "../../assets/logo-i360.webp";
import seta from "../../assets/seta-verde.webp";
import laptop from "../../assets/laptop.webp";
import icon1 from "../../assets/icone-agentes-financeiros.svg";
import icon2 from "../../assets/icone-incorporadoras.svg";
import divisao from "../../assets/sombra-divisao-verde2.webp";

export const OurSolutions = () => {

return (

<div className='flex flex-col justify-center items-center bg-gray-500'>
<div className='flex flex-col justify-between justify-items-center max-w-6xl'>
    <div id="OurSolutions" className="flex items-end justify-items-center justify-center p-16 gap-10">
        <h1 className=" text-white text-center font-semibold text-3xl">Multiplataforma de
            <span className="text-6xl">
                <span className="md:text-green-500 text-green-500"> i</span>nteligência de dados</span> <br />para eficiência de investimentos através de ativos imobiliários.
        </h1>
    </div>
    <div className='flex flex-col'>
        <ol className="flex justify-items-center justify-center items-center gap-14 p-20 text-white bg-gray-500 border-white max-w-6xl rounded-full">
            <img className='flex absolute z-10' src={seta} alt="" />
            <li className="flex items-center relative -bottom-5 left-0 z-20">
                <span className="flex p-10 text-center items-center justify-center w-48 h-48 bg-gray-500 border border-whit rounded-full">
                    Verdadeira central de dados
                </span>
            </li>
            <li className="flex items-center relative bottom-5 left-0 z-20">
                <span className="flex p-10 text-center items-center justify-center w-48 h-48 bg-gray-500 border border-whit rounded-full">
                    Para empresas e indivíduos
                </span>
            </li>
            <li className="flex items-center relative bottom-5 left-0 z-20">
                <span className="flex p-8 text-center items-center justify-center w-48 h-48 bg-gray-500 border border-whit rounded-full">
                    Ajuda a realizar análises completas
                </span>
            </li>
            <li className="flex items-center relative bottom-5 -left-5 md:-bottom-5 md:left-0">
                <span className="flex p-10 text-center items-center justify-center w-48 h-48 border rounded-full">
                    Tomadas de decisão mais eficazes
                </span>
            </li>
        </ol>
    </div>
    <div className='flex flex-col'>
        <div className="flex justify-items-center justify-center items-center gap-10 p-14 max-w-6xl">
            <div className="md:flex md:flex-col md:gap-2 gap-5 flex flex-col md:items-start items-center">
                <img className="md:flex md:w-28 flex w-28 items-center" src={logo} alt="" />
                <span className="md:flex flex md:text-[15px] text-base md:items-center items-center text-center md:text-left md:justify-center justify-center md:w-64 sm:w-3/4 text-white">PODEROSA FERRAMENTA PARA ENRIQUECIMENTO DE INFORMAÇÕES E TOMADA DE DECISÃO.</span>
            </div>
            <div className="items-center justify-center flex">
                <span className="md:flex flex md:bg-green-500 bg-green-500 md:text-[9px] text-xs md:text-center text-center md:items-center items-center md:justify-center justify-center md:w-24 w-32 md:p-3 p-5 md:h-24 h-32 md:rounded-full rounded-full md:relative relative md:bottom-5 -bottom-5 md:left-20 left-0">100% digital e rápida. Na palma da sua mão.</span>
            </div>
            <div className="items-center justify-center flex">
                <img className="md:flex md:w-72 flex w-72 items-center justify-center justify-items-center flex-col" src={laptop} alt="" />
            </div>
        </div>
    </div>
    <div className='flex flex-col'>
        <div className="flex justify-items-center justify-center items-center max-w-6xl">
            <div className="bg-white text-gray-500 items-center p-10 gap-5 justify-center flex flex-col justify-items-center rounded-s-2xl">
                <img className=" items-center justify-center w-28" src={icon2} alt="" />
                <h1 className="text-center font-medium  text-4xl"><span className="text-green-500 font-medium text-4xl">i</span>ncorporadoras e <span className="text-green-500 font-medium  text-4xl">i</span>nvestidores</h1>
                <p className="text-center font-medium text-xl">
                    TENHA INFORMAÇÃO E VISÃO EXCLUSIVA <br />DOS IMÓVEIS EM TODOS OS ÂNGULOS</p>
                <p className="text-center font-medium text-sm">Amplie as possibilidades de incorporação imobiliária e investimento, desde a definição de landbanks até a viabilidade comercial.</p>
                <button className="border border-green-500 text-green-500 text-center p-2 w-44 text-base font-medium rounded-full">Saiba mais</button>
            </div>
            <div className="bg-green-500 text-gray-500 items-center p-10 gap-5 justify-center flex flex-col justify-items-center rounded-e-2xl">
                <img className="items-center justify-center w-28" src={icon1} alt="" />
                <h1 className="text-center font-medium text-4xl ">Agentes f<span className="text-white font-medium text-4xl">i</span>nanceiros</h1>
                <p className="text-center font-medium text-xl">
                    INVISTA EM DADOS PRIMEIRO, SUAS SOLUÇÕES <br /> FINANCEIRAS RENDEM MAIS DEPOIS
                </p>
                <p className="text-center font-medium text-sm text-white">Acesso à inteligência de dados para empresas e/ou indivíduos rentabilizarem ainda através de ativos imobiliários.</p>
                <button className="border border-white text-green-500 bg-white text-center p-2 w-44 text-base font-medium rounded-full">Saiba mais</button>
            </div>
        </div>
    </div>
</div>
<img src={divisao} alt="" />
</div>
)
}
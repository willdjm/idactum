import logo from "../../assets/logo-i360.png";
import seta from "../../assets/seta-verde.png";
import laptop from "../../assets/laptop.png";
import icon1 from "../../assets/icone-agentes-financeiros.svg";
import icon2 from "../../assets/icone-incorporadoras.svg";

export const OurSolutions = () => {

return (
<div id="OurSolutions" className='bg-CinzaEscuro-500 flex flex-col md:flex md:flex-col text-white  justify-center items-center md:justify-center md:items-center p-5 md:p-5'>
    <div className='flex flex-col w-full md:flex md:max-w-5xl md:m-auto md:h-full md:items-center py-0 md:py-10 md:gap-10 gap-0'>
        {/* Título */}
        <div className='flex items-end justify-items-center sm:flex sm:flex-col sm:justify-center sm:justify-items-center sm:items-center'>
            <h1 className="md:text-white text-white md:text-center text-center md:font-semibold font-semibold md:text-xl text-xs">
                Multiplataforma de <span className="md:text-3xl text-xl">
                    <span className="md:text-Verde-500 text-Verde-500">i</span>nteligência de dados</span> <br />
                para eficiência de investimentos através de ativos imobiliários.
            </h1>
        </div>
        {/* Bloco1 */}


<div className='md:flex md:flex-col md:items-center sm:flex sm:flex-col sm:justify-center sm:justify-items-center sm:items-center  '>
<ol className="grid grid-cols-2 md:flex items-center md:items-center justify-items-center md:justify-items-center gap-7 md:gap-7">
<img className='absolute md:absolute invisible md:visible md:w-[480px] md:justify-center md:items-center md:z-10' src={seta} alt="" />
<li className=" md:flex flex md:items-center items-center md:text-white text-white md:relative relative md:-bottom-5 -bottom-5 md:left-0 left-8 md:z-20 z-30">
<span className="md:flex flex md:p-5 p-5 md:text-xs text-xs md:text-center text-center md:items-center items-center md:justify-center justify-center w-32 h-32 md:w-32 md:h-32 md:bg-CinzaEscuro-500 md:border border bg-CinzaEscuro-500 md:border-white border-white rounded-full md:rounded-full">Verdadeira central de dados</span>
</li>
<li className="flex md:flex  md:items-start items-center md:text-white text-white md:relative relative md:bottom-5 -bottom-5 -left-5 md:left-0 md:z-20 z-20">
<span className="flex md:flex md:p-6 text-xs md:text-xs text-center md:text-center items-center md:items-center justify-center md:justify-center w-32 h-32 md:w-32 md:h-32 md:bg-CinzaEscuro-500 border md:border border-white bg-CinzaEscuro-500 md:border-white rounded-full md:rounded-full">Para empresas e indivíduos</span>
</li>
<li className="flex md:flex items-center md:items-center text-white md:text-white relative md:relative bottom-5 left-8 md:bottom-5 md:left-0 z-10 md:z-20">
<span className="flex md:flex md:p-6 text-xs md:text-xs text-center md:text-center items-center md:items-center justify-center md:justify-center w-32 h-32 md:w-32 md:h-32 md:bg-CinzaEscuro-500 bg-CinzaEscuro-500 border md:border border-white md:border-white rounded-full md:rounded-full">
Ajuda a realizar análises completas
</span>
</li>
<li className="flex md:flex items-center md:items-center text-white md:text-white relative md:relative bottom-5 -left-5 md:-bottom-5 md:left-0  ">
<span className="flex md:flex md:p-6 text-xs md:text-xs text-center md:text-center items-center md:items-center justify-center md:justify-center w-32 h-32 md:w-32 md:h-32 md:bg-CinzaEscuro-500 bg-CinzaEscuro-500 border md:border border-white md:border-white rounded-full md:rounded-full">
Tomadas de decisão mais eficazes
</span>
</li>
</ol>
</div>




        {/* Bloco3 */}

<div className='md:flex md:flex-col md:w-full md:max-w-5xl md:m-auto md:h-full md:items-center md:justify-center md:justify-items-center'>
<div className='md:flex md:items-center md:justify-items-center'>
<div className="md:flex md:flex-col md:gap-2 gap-5 flex flex-col md:items-start items-center ">                    
<img className="md:flex md:w-28 flex w-28 items-center" src={logo} alt="" />
<span className="md:flex flex md:text-[15px] text-base md:items-center items-center text-center md:text-left md:justify-center justify-center md:w-64 sm:w-3/4">PODEROSA FERRAMENTA PARA ENRIQUECIMENTO DE INFORMAÇÕES E TOMADA DE DECISÃO.</span>
</div>
<div className="items-center justify-center flex">                    
<span className="md:flex flex md:bg-Verde-500 bg-Verde-500 md:text-[9px] text-xs md:text-center text-center md:items-center items-center md:justify-center justify-center md:w-24 w-32 md:p-3 p-5 md:h-24 h-32 md:rounded-full rounded-full md:relative relative md:bottom-5 -bottom-5 md:left-20 left-0">100% digital e rápida. Na palma da sua mão.</span>
</div>
<div className="items-center justify-center flex">                    
<img className="md:flex md:w-72 flex w-72 items-center justify-center justify-items-center flex-col" src={laptop} alt="" />
</div>
</div>
</div>

{/* Bloco4 */}
<div className='w-full md:w-full md:flex md:flex-col md:max-w-5xl max-w-5xl md:m-auto m-auto md:h-full h-full md:items-center items-center sm:flex sm:flex-col sm:justify-center sm:justify-items-center sm:items-center'>
<div className='flex md:flex md:p-3 p-0'>
<div className="bg-white md:bg-white text-CinzaEscuro-500 md:text-CinzaEscuro-500 md:grid grid gap-3 md:gap-3 p-3 md:p-3 w-80 md:w-80 justify-items-center md:justify-items-center rounded-s-2xl md:rounded-s-2xl">
<img className="w-16 md:w-16 items-center md:items-center justify-center md:justify-center" src={icon2} alt="" />
<h1 className="text-center md:text-center font-semibold md:font-semibold text-xl md:text-xl">incorporadoras e <span className="text-Verde-500 text-xl">i</span>nvestidores</h1>
<p className="text-center md:text-center md:text-xs text-xs">
    TENHA INFORMAÇÃO E VISÃO EXCLUSIVA <br />DOS IMÓVEIS EM TODOS OS ÂNGULOS</p>
<p className="text-center md:text-center  text-[10px] md:text-[10px]">Amplie as possibilidades de incorporação imobiliária e investimento, desde a definição de landbanks até a viabilidade comercial.</p>
<button className="w-28 md:w-28 md:border border md:border-b-Verde-500 border-Verde-500 text-Verde-500 md:text-Verde-500 text-center md:text-center p-1 md:p-1 text-xs md:text-xs rounded-full md:rounded-full">Saiba mais</button>
</div>
<div className="bg-Verde-500 md:bg-Verde-500 text-CinzaEscuro-500 md:text-CinzaEscuro-500 md:grid grid gap-3 md:gap-3 p-3 md:p-3 w-80 md:w-80 justify-items-center md:justify-items-center rounded-e-2xl md:rounded-e-2xl">
<img className="w-16 md:w-14 items-center md:items-center justify-center md:justify-center" src={icon1} alt="" />
<h1 className="text-center md:text-center font-semibold md:font-semibold text-xl md:text-xl">Agentes f<span className="text-white md:text-white text-xl">i</span>nanceiros</h1>
<p className="text-center md:text-center md:text-xs text-xs">
INVISTA EM DADOS PRIMEIRO, SUAS SOLUÇÕES <br /> FINANCEIRAS RENDEM MAIS DEPOIS
</p>
<p className="text-center md:text-center  text-[10px] md:text-[10px] text-white md:text-white">Acesso à inteligência de dados para empresas e/ou indivíduos rentabilizarem ainda através de ativos imobiliários.</p>
<button className="w-28 md:w-28 md:border border md:border-white border-white text-Verde-500 bg-white md:bg-white md:text-Verde-500 text-center md:text-center p-1 md:p-1 text-xs md:text-xs rounded-full md:rounded-full">Saiba mais</button>
</div>
</div>
</div>
</div>
</div>
)
}
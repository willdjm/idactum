import logo from "../../assets/logo-i360-cinza.png";
import video from "../../assets/video-incorporador2.mp4";

import incorporadoras from "../../assets/img-grafico-incorporadoras-1.png";
import incorporadoras2 from "../../assets/img-grafico-incorporadoras-2.png";
import incorporadoras3 from "../../assets/img-grafico-incorporadoras-3.png";


export const DevelopersAndInvestors = () => {

return (

<div id="DevelopersAndInvestors" className=' flex flex-col md:flex md:flex-col text-white  justify-center items-center  p-5 md:p-5'>
  <div className='flex flex-col w-full md:flex md:max-w-5xl md:m-auto md:h-full md:items-center py-5 md:py-10 gap-5 md:gap-10  '>
    {/* Título */}
    <div className='md:flex flex flex-col md:flex-row md:items-baseline items-center md:justify-items-center justify-items-center md:justify-center justify-center gap-2 md:gap-3'>
      <img className="md:w-28 w-28" src={logo} alt="" />
      <h1 className='font-medium md:font-medium tracking-wide md:tracking-wide md:text-CinzaEscuro-500 text-CinzaEscuro-500 text-xl md:text-3xl'><span className='text-Verde-500'>i</span>ncorporadoras e <span className='text-Verde-500'>i</span>nvestidores</h1>
    </div>
    {/* Bloco1 */}
    <div className="md:flex flex flex-col md:flex-row gap-3 md:gap-10 ">
      <div className="max-w-sm flex flex-col gap-3 md:max-w-sm md:flex md:flex-col md:gap-10 ">
        <h2 className="text-lg text-black font-semibold">Dê às suas incorporações imobiliárias a segurança que só os dados podem garantir.</h2>
        <p className=" text-sm text-justify text-black">A plataforma inteligente que compila e segmenta os dados oriundos do mercado imobiliário, abrindo terreno para incorporadoras tomarem decisões mais assertivas, viáveis e rentáveis.</p>
      </div>
      <div className="max-w-sm px-5 pt-5 pb-16 bg-CinzaClaro-300 opacity-75 rounded-lg ">
        <h2 className="mb-2 text-xs text-black ">Acesso a informações para visão estratégica:</h2>
        <ul className="max-w-md space-y-1 text-black text-xs list-disc list-inside ">
          <li>A maneira mais completa de enxergar o <br />desenvolvimento imobiliário de São Paulo</li>
          <li>Landbank, projetos em desenvolvimento, <br />lançamentos e empreendimentos prontos em<br /> uma só plataforma</li>
          <li>Características de empreendimentos e projetos,<br /> dados de transação e estimativa de valorização.</li>
        </ul>
      </div>
    </div>
    {/* Bloco2 */}
    <div className='flex flex-col md:flex md:flex-col text-black md:text-black justify-items-center items-center md:justify-center md:justify-items-center'>
      <div className='  '>
        <ol className="grid items-center w-full sm:flex gap-10">
          <li className="items-center md:items-center justify-center md:justify-center md:flex flex flex-col md:flex-col md:p-0 p-0 md:gap-1 gap-0 md:relative relative md:bottom-16 bottom-10 left-0 md:-left-10">
            <span className="flex text-[10px] font-semibold text-Verde-500 text-center items-center justify-center">Desde a prospecção
            </span>
            <span className="flex text-[10px] text-center items-center justify-center w-48">A inteligência i360 da iDactum identifica dados importantes para viabilidade e decisão de projetos de incorporação
            </span>
            <img className="flex w-40 h-40 rounded-full" src={incorporadoras} alt="" />
          </li>
          <li className="items-center md:items-center justify-center md:justify-center md:flex flex flex-col md:flex-col md:p-0 p-0 md:gap-1 md:relative relative md:bottom-0 bottom-10 md:left-0 left-0">
            <span className="flex text-[10px] font-semibold text-Verde-500 text-center items-center justify-center ">
              Com dados estratégicos
            </span>
            <span className="flex text-[10px] text-center items-center justify-center w-48">A ferramenta i360 colhe dados reais e atualizados com possibilidade de cruzamentos que fortalecem diferenciais comerciais para atrair investidores
            </span>
            <img className="flex w-40 h-40 rounded-full" src={incorporadoras2} alt="" />
          </li>
          <li className="items-center md:items-center justify-center md:justify-center md:flex flex flex-col md:flex-col md:p-0 p-0 md:gap-1 md:relative relative bottom-10 left-0 md:bottom-16 md:left-5 ">
            <img className="flex w-40 h-40 rounded-full" src={incorporadoras3} alt="" />
            <span className="flex text-[10px] font-semibold text-Verde-500 text-center items-center justify-center ">Otimiza a tomada de decisão
            </span>
            <span className="flex text-[10px] text-center items-center justify-center w-48 ">
              Com visão tridimensional do mercado que só o tratamento de dados da solução i360 pode garantir
            </span>
          </li>
        </ol>
      </div>
    </div>
    {/* Bloco3 */}
    <div className='items-center justify-center flex flex-col md:gap-10 md:py-20 '>
      <h1 className="font-semibold md:font-medium text-sm text-CinzaEscuro-500 md:text-CinzaEscuro-500 md:text-base text-center md:text-center">Veja como i360 é a solução ideal para sua atuação no mercado imobiliário</h1>
      <video className=" w-full ">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</div>
)
}
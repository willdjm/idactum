import logo from "../../assets/logo-i360-cinza.webp";

import incorporadoras from "../../assets/img-grafico-incorporadoras-1.webp";
import incorporadoras2 from "../../assets/img-grafico-incorporadoras-2.webp";
import incorporadoras3 from "../../assets/img-grafico-incorporadoras-3.webp";
import traco from "../../assets/traco-verde.webp";

export const DevelopersAndInvestors = () => {

return (

  <div className='flex justify-center items-center pt-5 md:pt-20 text-gray-500 relative z-10 px-5'>
<div className="flex flex-col justify-between justify-items-center max-w-6xl gap-5 md:gap-20">
<h1 className='text-center font-bold text-4xl md:text-5xl pt-8'>Conheça nossos produtos:</h1>
  <div id="DevelopersAndInvestors" className="grid lg:flex items-end gap-4 md:gap-8 justify-items-center justify-center max-w-6xl">
    <img src={logo} alt="" />
    <h1 className='text-center font-medium text-4xl md:text-5xl'><span className='text-green-500'>i</span>ncorporadoras e <span className='text-green-500'>i</span>nvestidores</h1>
  </div>
  <div className="grid lg:flex justify-items-center gap-2 lg:gap-10 lg:justify-between max-w-6xl">
    <div className="flex flex-col max-w-xl gap-5 md:gap-10 p-5 md:p-0">
      <h2 className="md:text-2xl max-w-lg text-xl text-center md:text-left font-bold">Dê às suas incorporações imobiliárias a segurança que só os dados podem garantir.</h2>
      <p className="md:text-xl text-xl md:text-left max-w-lg text-center">Reunimos de forma inédita informações desde a formação de áreas de futuros empreendimentos, passando pelo mapeamento exaustivo dos projetos, até os lançamentos e imóveis prontos. Tudo isso em uma única visão 360!</p>
    </div>
    <div className="flex flex-col max-w-xl md:py-10 py-10 p-10 md:px-10 md:pb-24 gap-5 bg-gray-300 bg-opacity-90 rounded-2xl">
      <h2 className="text-xl text-black text-center md:text-left">Acesso a informações para visão estratégica:</h2>
      <ul className="text-xl list-disc flex flex-col gap-3">
        <li>A maneira mais completa de enxergar o desenvolvimento imobiliário das cidades</li>
        <li>Landbank, projetos em desenvolvimento, lançamentos e empreendimentos prontos em uma só plataforma</li>
        <li>Características de empreendimentos e projetos, dados de transação e estimativa de valorização.</li>
      </ul>
    </div>
  </div>
  <ol className="grid lg:flex justify-items-center items-center justify-center max-w-6xl">
          <img className="hidden lg:flex lg:absolute  lg:items-center" src={traco} alt="" /> 
    <li className="items-center flex flex-col relative lg:bottom-40 lg:-left-5">
      <span className="flex text-base font-bold text-green-500 text-center items-center justify-center">
      Desde a formação de áreas
      </span>
      <span className="flex text-base text-center items-center justify-center font-medium max-w-xl">
      ter uma visão dos landbanks e projetos permite a incorporadora antecipar os futuros lançamentos de determinada região.
      </span>
      <img className="p-5" src={incorporadoras} alt="" />
    </li>
    <li className="items-center flex flex-col relative lg:bottom-12">
      <span className="flex text-base font-bold text-green-500 text-center items-center justify-center">
        Com dados estratégicos
      </span>
      <span className="flex text-base text-center items-center justify-center font-medium max-w-xl">
      A ferramenta i360 colhe dados reais e atualizados com possibilidade de cruzamentos que mitigam riscos nos empreendimentos.
      </span>
      <img src={incorporadoras2} alt="" />
    </li>
    <li className="items-center flex flex-col relative lg:bottom-40 lg:left-0 max-w-md w-full">
      <img className="p-5" src={incorporadoras3} alt="" />
      <span className="flex text-base font-bold text-green-500 text-center items-center justify-center">
        Otimiza a tomada de decisão
      </span>
      <span className="flex text-base text-center items-center justify-center font-medium max-w-xs w-64">
      Com visão profunda do mercado que só o tratamento de dados da solução i360 pode garantir.
      </span>
    </li>
  </ol>
</div>
</div>

)
}
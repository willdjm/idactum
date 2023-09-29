import logo from "../../assets/logo-i360-cinza.webp";
import ReactPlayer from 'react-player'



import incorporadoras from "../../assets/img-grafico-incorporadoras-1.webp";
import incorporadoras2 from "../../assets/img-grafico-incorporadoras-2.webp";
import incorporadoras3 from "../../assets/img-grafico-incorporadoras-3.webp";
import traco from "../../assets/traco-verde.webp";

export const DevelopersAndInvestors = () => {

return (

  <div id="DevelopersAndInvestors" className='flex justify-center items-center pt-5 md:pt-20 text-gray-500'>
<div className="flex flex-col justify-between justify-items-center max-w-6xl gap-5 md:gap-20">
  <div className="grid md:flex items-end gap-4 md:gap-8 justify-items-center justify-center max-w-6xl">
    <img src={logo} alt="" />
    <h1 className='text-center font-medium text-4xl md:text-5xl'><span className='text-green-500'>i</span>ncorporadoras e <span className='text-green-500'>i</span>nvestidores</h1>
  </div>
  <div className="grid md:flex justify-items-center gap-2 md:gap-10 justify-between max-w-6xl">
    <div className="flex flex-col max-w-xl gap-5 md:gap-10 p-5 md:p-0">
      <h2 className="md:text-[1.75rem] text-xl text-center md:text-left font-semibold">Dê às suas incorporações imobiliárias a segurança que só os dados podem garantir.</h2>
      <p className="md:text-xl text-xl md:text-justify text-center">A plataforma inteligente que compila e segmenta os dados oriundos do mercado imobiliário, abrindo terreno para incorporadoras tomarem decisões mais assertivas, viáveis e rentáveis.</p>
    </div>
    <div className="flex flex-col max-w-xl md:py-10 py-10 p-10 md:px-10 md:pb-24 gap-5 bg-gray-300 bg-opacity-90 rounded-2xl">
      <h2 className="text-xl text-black text-center md:text-left">Acesso a informações para visão estratégica:</h2>
      <ul className="text-xl list-disc flex flex-col gap-3">
        <li>A maneira mais completa de enxergar o desenvolvimento imobiliário de São Paulo</li>
        <li>Landbank, projetos em desenvolvimento, lançamentos e empreendimentos prontos em uma só plataforma</li>
        <li>Características de empreendimentos e projetos, dados de transação e estimativa de valorização.</li>
      </ul>
    </div>
  </div>
  <ol className="grid md:flex justify-items-center items-center justify-center max-w-6xl">
          <img className="hidden md:flex md:absolute  md:items-center" src={traco} alt="" /> 
    <li className="items-center flex flex-col relative md:bottom-40 md:-left-5">
      <span className="flex text-base font-bold text-green-500 text-center items-center justify-center">
        Desde a prospecção
      </span>
      <span className="flex text-base text-center items-center justify-center font-semibold">
        A inteligência i360 da iDactum identifica dados importantes para viabilidade e decisão de projetos de incorporação
      </span>
      <img className="p-5" src={incorporadoras} alt="" />
    </li>
    <li className="items-center flex flex-col relative md:bottom-12">
      <span className="flex text-base font-bold text-green-500 text-center items-center justify-center">
        Com dados estratégicos
      </span>
      <span className="flex text-base text-center items-center justify-center font-semibold">
        A ferramenta i360 colhe dados reais e atualizados com possibilidade de cruzamentos que fortalecem diferenciais comerciais para atrair investidores
      </span>
      <img src={incorporadoras2} alt="" />
    </li>
    <li className="items-center flex flex-col relative md:bottom-40 md:left-0">
      <img className="p-5" src={incorporadoras3} alt="" />
      <span className="flex text-base font-bold text-green-500 text-center items-center justify-center">
        Otimiza a tomada de decisão
      </span>
      <span className="flex text-base text-center items-center justify-center font-semibold">
        Com visão tridimensional do mercado que só o tratamento de dados da solução i360 pode garantir
      </span>
    </li>
  </ol>
  {/* Bloco3 */}
  <div className="flex items-center justify-center flex-col p-4 md:p-10">
    <h1 className="font-semibold text-gray-500 md:text-2xl text-center items-center">Veja como i360 é a solução ideal para sua atuação no mercado imobiliário</h1>
    <ReactPlayer url='https://vimeo.com/869521806?share=copy' controls width='1040px' height='660px' />
  </div>
</div>
</div>

)
}
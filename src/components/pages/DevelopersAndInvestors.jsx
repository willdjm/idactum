import logo from "../../assets/logo-i360-cinza.webp";
import video from "../../assets/video-incorporador2.mp4";


import incorporadoras from "../../assets/img-grafico-incorporadoras-1.webp";
import incorporadoras2 from "../../assets/img-grafico-incorporadoras-2.webp";
import incorporadoras3 from "../../assets/img-grafico-incorporadoras-3.webp";

export const DevelopersAndInvestors = () => {

return (

<div className="flex flex-col justify-between justify-items-center max-w-6xl md:gap-20">
  <div className="grid md:flex items-end md:gap-8 justify-items-center justify-center max-w-6xl">
    <img src={logo} alt="" />
    <h1 className='text-center font-medium text-xl md:text-5xl'><span className='text-green-500'>i</span>ncorporadoras e <span className='text-green-500'>i</span>nvestidores</h1>
  </div>
  <div className="grid md:flex justify-items-center md:gap-10 justify-between max-w-6xl">
    <div className="flex flex-col max-w-xl gap-2 md:gap-10">
      <h2 className="md:text-[1.75rem] font-semibold">Dê às suas incorporações imobiliárias a segurança que só os dados podem garantir.</h2>
      <p className="md:text-xl text-justify ">A plataforma inteligente que compila e segmenta os dados oriundos do mercado imobiliário, abrindo terreno para incorporadoras tomarem decisões mais assertivas, viáveis e rentáveis.</p>
    </div>
    <div className="flex flex-col max-w-xl py-10 px-10 pb-24 gap-5 bg-gray-300 bg-opacity-90 rounded-2xl">
      <h2 className="text-xl text-black">Acesso a informações para visão estratégica:</h2>
      <ul className="text-xl list-disc flex flex-col gap-3">
        <li>A maneira mais completa de enxergar o desenvolvimento imobiliário de São Paulo</li>
        <li>Landbank, projetos em desenvolvimento, lançamentos e empreendimentos prontos em uma só plataforma</li>
        <li>Características de empreendimentos e projetos, dados de transação e estimativa de valorização.</li>
      </ul>
    </div>
  </div>
  <ol className="grid md:flex justify-items-center items-center justify-center max-w-6xl">
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
    <video className="w-full" controls>
      <source src={video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</div>
)
}
import { Swiper, SwiperSlide } from "swiper/react";

import logo from "../../assets/logo-i360-cinza-branco.png";
import divisao from "../../assets/brilho-branco-bg.png";
import seta from "../../assets/seta-cinza.png";
import cidadebg from "../../assets/cidade-bg.jpg";

import imagem1 from "../../assets/1-tela-imoveis-prontos.jpg";
import imagem2 from "../../assets/2-tela-imoveis-projetos.jpg";
import imagem3 from "../../assets/3-tela-imoveis-projetos-detalhes.jpg";
import imagem4 from "../../assets/4-tela-valores.jpg"
import imagem5 from "../../assets/5-tela-landbanks.jpg";
import imagem6 from "../../assets/6-tela-landbanks-detalhes.jpg";
import imagem7 from "../../assets/7-tela-landbanks-detalhes-2.jpg";

export const FinancialAgents = () => {
return (


<div id="FinancialAgents" className='bg-Verde-500 md:bg-Verde-500 flex flex-col md:flex  md:flex-col text-white md:text-white justify-center md:justify-center items-center md:items-center md:p-0 p-0 px-8 md:px-0'>
<img className='flex md:flex md:w-3/4 w-full justify-center md:justify-center items-center md:items-center' src={divisao} alt="" />

<div className='flex flex-col md:flex-col justify-center md:justify-center w-full md:w-full md:flex md:max-w-5xl md:m-auto md:h-full md:items-center md:pb-10 pb-0 gap-0 md:gap-10'>
        {/* Título */}
    <div className='md:flex flex flex-col md:flex-row md:items-baseline items-center md:justify-items-center justify-items-center md:justify-center justify-center gap-2 md:gap-3'>
      <img className="md:w-28 w-28" src={logo} alt="" />
      <h1 className='font-medium md:font-medium tracking-wide md:tracking-wide md:text-CinzaEscuro-500 text-CinzaEscuro-500 text-2xl md:text-3xl'>agentes f<span className='text-white'>i</span>nanceiros</h1>
    </div>

        {/* Bloco1 */}
        <div className="flex flex-col md:flex md:flex-row md:gap-10 gap-5  ">
            <div className="max-w-sm md:flex md:flex-col flex flex-col   ">
                <h2 className="mb-2 md:text-lg text-sm md:pb-5 pb-3 text-black font-semibold">Tenha uma visão ampliada do mercado e fortaleça a rentabilidade dos investimentos imobiliários dos seus clientes</h2>
                <p className="mb-2 text-xs">Inteligência dados e tecnologias para ajudar agentes financeiros a entendem a realidade imobiliária e explorar as oportunidades que o patrimônio imobiliário dos clientes, oferecendo soluções econômicas com mais rentabilidade: </p>
                <ul className="max-w-md  list-disc list-inside text-xs">
                    <li>Financiamento imobiliário </li>
                    <li>Home equity</li>
                    <li>Investimentos</li>
                    <li>Seguros.</li>
                </ul>
            </div>
            <div className="max-w-sm gap-5 flex flex-col px-5 py-5 bg-CinzaClaro-300 opacity-40 rounded-lg ">
                <h2 className="text-xs text-black ">Conte com a solução i360, e tenha visão ampla do:</h2>
                <ul className="max-w-md space-y-1 text-black text-xs list-disc list-inside ">
                    <li>Desenvolvimento imobiliário</li>
                    <li>Formação de landbanks </li>
                    <li>Oferta de empreendimentos e preços</li>
                    <li>Lançamento e performance comercial</li>
                </ul>
            </div>
        </div>
        {/* Bloco2 */}

<div className=' flex flex-col  justify-items-center items-center md:py-20'>
<img className='absolute invisible md:flex md:flex-col md:justify-items-center md:visible md:w-[500px] md:justify-end md:items-center  md:z-10' src={seta} alt="" />
<ol className="items-center  sm:flex">
<li className=" md:flex flex md:items-center items-center md:text-white text-white md:relative relative md:bottom-16 -bottom-5 md:-left-44 left-0 md:z-20 z-30">
<span className="md:flex flex md:p-5 p-5 md:text-[10px] text-xs md:text-center text-center md:items-center items-center md:justify-center justify-center w-40 h-40 md:w-32 md:h-32 md:bg-Verde-500 md:border border bg-Verde-500 md:border-white border-white rounded-full md:rounded-full">
Ative o patrimônio imobiliário na vida dos seus clientes
</span>
</li>
<li className="flex md:flex items-center md:items-center text-white md:text-white relative md:relative bottom-0 left-0 md:bottom-7 md:left-0 z-10 md:z-20">
<span className="flex md:flex md:p-6 text-xs md:text-[10px] text-center md:text-center items-center md:items-center justify-center md:justify-center w-40 h-40 md:w-32 md:h-32 md:bg-Verde-500 bg-Verde-500 border md:border border-white md:border-white rounded-full md:rounded-full">
Imóveis são a maior classe de ativos do brasil
</span>
</li>
<li className=" md:flex flex md:items-center items-center md:text-white text-white md:relative relative md:bottom-16 bottom-5 md:left-44 left-0 md:z-0 z-0">
<span className="md:flex flex md:p-5 p-5 md:text-[10px] text-xs md:text-center text-center md:items-center items-center md:justify-center justify-center w-40 h-40 md:w-32 md:h-32 md:bg-Verde-500 md:border border bg-bg-Verde-500 md:border-white border-white rounded-full md:rounded-full">
Para cada real em papel brasileiro, existem mais de 2 em patrimônio imobiliário
</span>
</li>
</ol>
</div>



        {/* Bloco3 */}
        <div className='flex flex-col md:flex md:flex-col md:justify-center md:justify-items-center md:items-center justify-items-center items-center'>
            <img className='flex top-0 justify-center items-center' src={divisao} alt="" />
            <p className='text-center text-xs md:text-lg'>ACESSE DADOS ESTRATÉGICOS REAIS</p>
        </div>
        <div className='flex flex-col md:flex md:flex-col md:justify-items-center justify-items-center items-start md:items-start gap-2 md:gap-2 py-5'>
            <p className='font-bold text-xs md:text-xs'>Projetos imobiliários</p>
            <p className='text-xs md:text-xs'>Exibição de todos os imóveis da cidade da localização estipulada, com: </p>
            <ul className="text-xs space-y-1 list-disc list-inside ">
                <ul className="md:list-disc list-disc text-left md:text-justify text-xs md:text-xs" >
                    <li>Tipologias de imóveis (Recém-lançados, lançamentos, projetos e landbanks)</li>
                    <li>Oferta de imóveis</li>
                    <li>Dados oficiais de transação </li>
                    <li>Estimativa de valorização.</li>
                </ul>
            </ul>
        </div>
        {/* Bloco5 */}
        <div className='flex flex-col md:flex md:flex-col md:justify-items-center justify-items-center items-center md:items-center'>
            <Swiper className="md:w-2/4 w-full"
                slidesPerView={'auto'}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}>
                <SwiperSlide key={imagem1}>
                    <img src={imagem1} alt="slider" />
                </SwiperSlide>
                <SwiperSlide key={imagem2}>
                    <img src={imagem2} alt="slider" />
                </SwiperSlide>
                <SwiperSlide key={imagem3}>
                    <img src={imagem3} alt="slider" />
                </SwiperSlide>
                <SwiperSlide key={imagem4}>
                    <img src={imagem4} alt="slider" />
                </SwiperSlide>
            </Swiper>
        </div>
        {/* Bloco6 */}
        <div className=' flex flex-col justify-items-center items-start gap-2 py-5'>
            <p className='text-center font-bold text-xs md:text-xs'>Landbanks</p>
            <p className='md:w-96 text-xs md:text-xs'>Mapeamento de landbanks e de projetos em desenvolvimento das incorporadoras, incluindo valor da aquisição dos terrenos. (nome da incorporadora, movimentações e valores de transação do terreno)</p>
            <ul className="text-xs space-y-1 list-disc list-inside ">
                <ul className="list-disc text-justify text-xs" >
                    <ul className="text-xs space-y-1 list-disc list-inside ">
                        <li>Análise de cada região da cidade (segmentos e valorização)</li>
                        <li>Perfil dos imóveis encontrados</li>
                        <li>Valorização durante os anos.</li>
                    </ul>
                </ul>
            </ul>
        </div>
        {/* Bloco7 */}
        <div className='flex flex-col md:flex md:flex-col md:justify-items-center justify-items-center items-center md:items-center'>
            <Swiper className="md:w-2/4 w-full"
                slidesPerView={'auto'}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}>
                <SwiperSlide key={imagem5}>
                    <img src={imagem5} alt="slider" />
                </SwiperSlide>
                <SwiperSlide key={imagem6}>
                    <img src={imagem6} alt="slider" />
                </SwiperSlide>
                <SwiperSlide key={imagem7}>
                    <img src={imagem7} alt="slider" />
                </SwiperSlide>
                <SwiperSlide key={imagem4}>
                    <img src={imagem4} alt="slider" />
                </SwiperSlide>
            </Swiper>
        </div>
        {/* Bloco8 */}
        <p className='md:font-bold font-semibold text-CinzaEscuro-500 md:text-CinzaEscuro-500 text-center md:text-center text-base md:text-2xl py-5 md:py-5 relative md:relative md:-bottom-14 md:left-4 -bottom-10 left-0'>
            Faça a diferença na oferta de investimentos, construa oportunidades
            <br />com o <span className="md:text-3xl text-lg">at<span className="text-white md:text-2xl text-sm">i</span>vo imobiliário</span> dos seus clientes</p>
    </div>
    {/* Bloco9 */}
    <img className='flex justify-center items-center' src={cidadebg} alt="" />
   
</div>


)
}
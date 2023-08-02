import { Swiper, SwiperSlide } from "swiper/react";
import logo from "../../assets/logo-i360-cinza-branco.webp";
import divisao from "../../assets/brilho-branco-bg.webp";
import seta from "../../assets/seta-cinza.webp";
import cidadebg from "../../assets/cidade-bg.webp";
import imagem1 from "../../assets/1-tela-imoveis-prontos.webp";
import imagem2 from "../../assets/2-tela-imoveis-projetos.webp";
import imagem3 from "../../assets/3-tela-imoveis-projetos-detalhes.webp";
import imagem4 from "../../assets/4-tela-valores.webp"
import imagem5 from "../../assets/5-tela-landbanks.webp";
import imagem6 from "../../assets/6-tela-landbanks-detalhes.webp";
import imagem7 from "../../assets/7-tela-landbanks-detalhes-2.webp";

export const FinancialAgents = () => {

return (

<div id="FinancialAgents" className='flex flex-col justify-center items-center bg-green-500 text-gray-500'>
    <div className="flex flex-col justify-between justify-items-center max-w-6xl">
        <img src={divisao} alt="" />
        <div className="flex items-end justify-items-center justify-center top-0 pb-16 gap-10 ">
            <img className="" src={logo} alt="" />
            <h1 className='font-medium  text-gray-500 text-5xl'>agentes f<span className='text-gray-50'>i</span>nanceiros</h1>
        </div>
        <div className="flex justify-items-center justify-between ">
            <div className="flex flex-col max-w-lg">
                <h2 className="text-2xl font-bold pb-10">Tenha uma visão ampliada do mercado e fortaleça a rentabilidade dos investimentos imobiliários dos seus clientes.</h2>
                <p className=" text-lg text-white text-justify ">Inteligência dados e tecnologias para ajudar agentes financeiros a entendem a realidade imobiliária e explorar as oportunidades que o patrimônio imobiliário dos clientes, oferecendo soluções econômicas com mais rentabilidade:</p>
                <ul className="text-white pb-0  list-disc list-inside text-base">
                    <li>Financiamento imobiliário </li>
                    <li>Home equity</li>
                    <li>Investimentos</li>
                    <li>Seguros.</li>
                </ul>
            </div>
            <div className="flex flex-col items-start justify-center max-w-xl  pt-10 p-10 gap-7 bg-gray-300 opacity-40 rounded-3xl font-medium ">
                <p className=" text-xl text-justify ">Conte com a solução i360, e tenha visão ampla do:</p>
                <ul className="text-xl list-disc list-inside gap-1 flex flex-col">
                    <li>Desenvolvimento imobiliário</li>
                    <li>Formação de landbanks </li>
                    <li>Oferta de empreendimentos e preços</li>
                    <li>Lançamento e performance comercial</li>
                </ul>
            </div>
        </div>
        <div className='flex flex-col p-20'>
            <ol className="flex justify-items-center justify-center items-center max-w-6xl">
                <img className='flex absolute items-center justify-center justify-items-center z-10' src={seta} alt="" />
                <li className=" flex items-center text-white relative bottom-8 -left-52 z-30">
                    <span className="flex p-7 text-base text-center items-center justify-center w-56 h-56 bg-green-500 border border-white rounded-full">
                        Ative o patrimônio imobiliário na vida dos seus clientes
                    </span>
                </li>
                <li className=" flex items-center text-white relative -bottom-0 left-0 z-30">
                    <span className="flex p-10 text-base text-center items-center justify-center w-56 h-56 bg-green-500 border border-white rounded-full">
                        Imóveis são a maior classe de ativos do brasil
                    </span>
                </li>
                <li className=" flex items-center text-white relative bottom-8 left-52 z-0">
                    <span className="flex p-8 text-base text-center items-center justify-center w-56 h-56 bg-green-500 border border-white rounded-full">
                        Para cada real em papel brasileiro, existem mais de 2 em patrimônio imobiliário
                    </span>
                </li>
            </ol>
            <img className='flex relative items-center justify-center justify-items-center left-0 bottom-7 z-0' src={divisao} alt="" />
        </div>
        <div className='flex items-center justify-center p-20 pt-0'>
            <p className='text-center font-medium text-3xl text-white'>ACESSE DADOS ESTRATÉGICOS REAIS</p>
        </div>
        <div className="flex items-center justify-center justify-items-center pb-20">
            <div className="flex flex-col justify-items-center items-start justify-center gap-1 text-white max-w-6xl">
                <p className=" text-lg text-white text-justify ">Projetos imobiliários</p>
                <p className=" text-lg text-white text-justify ">Exibição de todos os imóveis da cidade da localização estipulada, com:</p>
                <ul className="text-white pb-0  list-disc list-inside text-base">
                    <li>Tipologias de imóveis (Recém-lançados, lançamentos, projetos e landbanks)</li>
                    <li>Oferta de imóveis</li>
                    <li>Dados oficiais de transação </li>
                    <li>Estimativa de valorização.</li>
                </ul>
            </div>
        </div>
        {/* Bloco5 */}
        <div className="flex flex-col justify-items-center items-start justify-center gap-1 text-white max-w-6xl pb-20">
            <Swiper className=""
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
        <div className="flex items-center justify-center justify-items-center pb-10">
            <div className="flex flex-col justify-items-center items-start justify-start gap-3 text-white max-w-xl">
                <p className=" text-xl font-medium text-white">Landbanks</p>
                <p className=" text-lg text-white ">Mapeamento de landbanks e de projetos em desenvolvimento <br />
                    das incorporadoras, incluindo valor da aquisição dos terrenos. <br />
                    (nome da incorporadora, movimentações e valores de transação do terreno)</p>
                <ul className="text-white flex flex-col pb-0 gap-2  list-disc list-inside text-base">
                    <li>Análise de cada região da cidade (segmentos e valorização)</li>
                    <li>Perfil dos imóveis encontrados</li>
                    <li>Valorização durante os anos.</li>
                </ul>
            </div>
        </div>
        {/* Bloco7 */}
        <div className="flex flex-col justify-items-center items-start justify-center gap-1 text-white max-w-6xl pb-20">
            <Swiper className=""
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
        <div className="flex items-end gap-5 justify-items-center justify-center max-w-6xl">
            <p className='font-bold text-gray-500 text-center text-3xl'>
                Faça a diferença na oferta de investimentos, construa oportunidades
                <br />com o <span className="text-5xl font-bold">at<span className="text-white text-5xl">i</span>vo imobiliário</span> dos seus clientes</p>
        </div>
    </div>
    {/* Bloco9 */}
    <img className='flex justify-center items-center' src={cidadebg} alt="" />
</div>
)
}
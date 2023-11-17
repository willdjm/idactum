import { Swiper, SwiperSlide } from "swiper/react";
import imagem1 from "../../assets/1-tela-imoveis-prontos.webp";
import imagem2 from "../../assets/2-tela-imoveis-projetos.webp";
import imagem3 from "../../assets/3-tela-imoveis-projetos-detalhes.webp";
import imagem4 from "../../assets/4-tela-valores.webp"
import imagem5 from "../../assets/5-tela-landbanks.webp";
import imagem6 from "../../assets/6-tela-landbanks-detalhes.webp";
import imagem7 from "../../assets/7-tela-landbanks-detalhes-2.webp";
import ReactPlayer from 'react-player'

export const FinancialAgents = () => {

return (

<div className='flex justify-center flex-col items-center bg-gray-300 text-gray-500 pt-32 relative -top-24 z-0'>
    <div className="flex flex-col justify-between justify-items-center md:max-w-6xl pb-20">
        <div className='flex items-center justify-center p-5 pb-0 md:p-20 md:pt-0'>
            <p className='text-center text-lg md:text-3xl text-black font-semibold'>ACESSE DADOS ESTRATÉGICOS REAIS</p>
        </div>
        <div className="flex items-center justify-center justify-items-center p-4 pb-5 md:pb-20">
            <div className="flex flex-col justify-items-center md:items-start items-center justify-center gap-3 md:gap-1 text-white max-w-6xl">
                <p className="text-xl text-black font-bold">Projetos imobiliários</p>
                <p className="text-lg text-black md:text-justify font-semibold">Exibição de todos os imóveis da cidade da localização estipulada, com:</p>
                <ul className="text-black pb-0 list-disc list-inside text-base font-semibold">
                    <li>Tipologias de imóveis (Recém-lançados, lançamentos, projetos e landbanks)</li>
                    <li>Oferta de imóveis</li>
                    <li>Dados oficiais de transação </li>
                    <li>Estimativa de valorização.</li>
                </ul>
            </div>
        </div>
        {/* Bloco5 */}
        <div className='md:w-full md:flex hidden items-start justify-between'>
            <Swiper className="md:w-4/5 w-80"
                slidesPerView={'auto'}
                grabCursor={true}
                centeredSlides={true}
                pagination={true}
                spaceBetween={-50}
            >
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
        <div className='md:w-full flex md:hidden items-start justify-between'>
            <Swiper className="md:w-4/5 w-80"
                slidesPerView={'auto'}
                grabCursor={true}
                centeredSlides={true}
                pagination={true}
                spaceBetween={50}
            >
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
        <div className="flex md:items-center md:justify-center md:justify-items-center p-4 md:pb-10 md:pt-20">
            <div className="flex flex-col md:justify-items-center md:items-start items-center md:justify-start gap-5 md:gap-3 text-black max-w-xl">
                <p className="md:text-xl font-bold text-black">Landbanks</p>
                <p className="md:text-lg text-black font-semibold">Mapeamento de landbanks e de projetos em desenvolvimento <br />
                    das incorporadoras, incluindo valor da aquisição dos terrenos. <br />
                    (nome da incorporadora, movimentações e valores de transação do terreno)</p>
                <ul className="text-black flex flex-col md:pb-0 md:gap-2 list-disc list-inside text-base font-semibold">
                    <li>Análise de cada região da cidade (segmentos e valorização)</li>
                    <li>Perfil dos imóveis encontrados</li>
                    <li>Valorização durante os anos.</li>
                </ul>
            </div>
        </div>
        {/* Bloco7 */}
        <div className='md:w-full md:flex items-start justify-between hidden'>
            <Swiper className="md:w-4/5 w-80"
                slidesPerView={'auto'}
                grabCursor={true}
                centeredSlides={true}
                pagination={true}
                spaceBetween={-50}
            >
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
        <div className='md:w-full flex md:hidden items-start justify-between'>
            <Swiper className="md:w-4/5 w-80"
                slidesPerView={'auto'}
                grabCursor={true}
                centeredSlides={true}
                pagination={true}
                spaceBetween={50}
            >
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
     </div>
         {/* Bloco3 */}
         <div className="lg:flex hidden items-center justify-center flex-col p-4 lg:p-10 w-full bg-white">
    <h1 className="font-semibold text-gray-500 md:text-3xl text-center items-center uppercase pt-14">Veja como i360 é a solução ideal para sua atuação no mercado imobiliário</h1>
    <ReactPlayer url='https://vimeo.com/869521806?share=copy' controls width='1340px' height='860px' />
  </div>
  <div className="md:flex lg:hidden items-center justify-center flex-col p-4 md:p-10 w-full bg-white">
    <h1 className="font-semibold text-gray-500 md:text-3xl text-center items-center uppercase pt-14">Veja como i360 é a solução ideal para sua atuação no mercado imobiliário</h1>
    <ReactPlayer url='https://vimeo.com/869521806?share=copy' controls width='650px' height='460px' />
  </div>
  <div className="flex md:hidden items-center justify-center flex-col p-4 md:p-10 w-full bg-white">
    <h1 className="font-semibold text-gray-500 md:text-3xl text-center items-center uppercase pt-5">Veja como i360 é a solução ideal para sua atuação no mercado imobiliário</h1>
    <ReactPlayer url='https://vimeo.com/869521806?share=copy' controls width='20rem' height='20rem' />
  </div>
</div>
)
}
import { Swiper, SwiperSlide } from "swiper/react";


import imagem1 from "../../assets/1.png";
import imagem2 from "../../assets/2.png";
import imagem3 from "../../assets/3.png";
import imagem4 from "../../assets/4.png";
import imagem5 from "../../assets/5.png";
import imagem6 from "../../assets/6.png";
import imagem7 from "../../assets/7.png";
import imagem8 from "../../assets/8.png";



import logo3 from "../../assets/logo3.png";


export function Agentes (){

    return(
        <div className="bg-gradient-to-b from-emerald-500 from-10% via-emerald-300 via-30% to-emerald-600 to-90% text-white grid justify-items-center p-14 gap-10">

        {/* Bloco 1 */}  
            <div>
            <div className="flex gap-3 items-center justify-center">
            <img className="w-28" src={logo3} alt="" />
            <h1 className="text-black text-center font-semibold text-4xl">agentes f<span className="text-white">i</span>nanceiros</h1>
            </div>

        {/* fomulário */}  
            <div className="flex items-start p-10 gap-5">
                <div>
                <p className="text-justify text-black font-semibold">Tenha um visão ampliada do mercado e <br />
                fortaleça a rentabilidade dos investimentos <br />
                imobiliários dos seus clientes</p>
                <ul className="list-disc text-justify p-2 text-xs" >
                    <p className="text-justify">Inteligência dados e tecnologias para ajudar agentes financeiros a <br />
                    entenderem a realiadade imobiliária e explorar as oportunidades que <br />
                    o patrimônio dos clientes, oferecendo soluções <br />
                    econômicas com mais rentabilidades:</p>
                    <li>Financiamento imobiliário</li>
                    <li>Home equity</li>
                    <li>Investimentos</li>
                    <li>Seguros</li>
                </ul>
                </div>

        {/* fomulário */}  
                <div className="bg-gray-50 p-5 rounded-xl">
                <p className="text-justify text-black text-xs">Conte com a solução i360, e tenha visão ampla do:</p>
                <ul className="list-disc text-justify p-2 text-xs text-black" >
                    <li>Desenvolvimento imobiliário</li>
                    <li>Formação de landbanks</li>
                    <li>Oferta de empreendimentos e preços</li>
                    <li>Lançamento e performance comercial</li>
                </ul>
                </div>
            </div>

        {/* fomulário */}  
            <div className="flex items-center justify-center gap-5 p-5 text-center">
                <p className="border p-10 w-28 h-28 rounded-full border-gray-50"></p>
                <p className="border p-10 w-28 h-28 rounded-full border-gray-50"></p>
                <p className="border p-10 w-28 h-28 rounded-full border-gray-50"></p>
            </div>
            </div>

        {/* Bloco 1 */}  
            <div>
            <h1 className="font-semibold text-center">ACESSE DADOS ESTRATÉGICOS REAIS</h1>
            </div>
        
        {/* Bloco 1 */}  
            <div className="w-96 text-xs"> 
                <h1 className="text-center font-semibold">Projetos imobiliários</h1>
                <p className="text-justify">Exibição de todos imóveis da cidade da localização estipulada, com:</p>
                <ul className="list-disc text-justify text-xs" >
                    <li>Tipologias de imóveis (Recém-lançados, lançamentos, projetos e landbanks)</li>
                    <li>Oferta de imóveis</li>
                    <li>Dados oficiais de transação</li>
                    <li>Estimativa de valorização</li>
                </ul>
            </div>

        {/* Bloco 1 */}
        <div className="">
            <Swiper className="w-2/4 rounded-xl"
             slidesPerView={'auto'}
             effect={'coverflow'}
             grabCursor={true}
             centeredSlides={true}

             >
                    <SwiperSlide key={imagem5}>
                        <img src={imagem5} alt="slider"/>
                    </SwiperSlide>
                    <SwiperSlide key={imagem6}>
                        <img src={imagem6} alt="slider"/>
                    </SwiperSlide>
                    <SwiperSlide key={imagem7}>
                        <img src={imagem7} alt="slider"/>
                    </SwiperSlide>
                    <SwiperSlide key={imagem8}>
                        <img src={imagem8} alt="slider"/>
                    </SwiperSlide>
            </Swiper>
            </div>

        {/* Bloco 1 */}  
            <div className="w-96 text-xs"> 
                <h1 className="text-center font-semibold">Landbanks</h1>
                <p className="text-justify">Mapeamento de landbanks e de projetos em desenvolvimento das incorporadoras, incluindo valor da aquisição dos terrenos. (nome da incorporadora, movimentações e valores de transção do terreno)</p>
                <ul className="list-disc text-justify text-xs" >
                    <li>Análise de cada região da cidade ( segmentos e valorização )</li>
                    <li>Perfil dos imóveis encontrados</li>
                    <li>Valorização durante os anos</li>
                </ul>
            </div>

        {/* Bloco 1 */}  
        <div>
            <Swiper className="w-2/4 rounded-3xl"
             slidesPerView={'auto'}
             effect={'coverflow'}
             grabCursor={true}
             centeredSlides={true}

             >
                    <SwiperSlide key={imagem1}>
                        <img src={imagem1} alt="slider"/>
                    </SwiperSlide>
                    <SwiperSlide key={imagem2}>
                        <img src={imagem2} alt="slider"/>
                    </SwiperSlide>
                    <SwiperSlide key={imagem3}>
                        <img src={imagem3} alt="slider"/>
                    </SwiperSlide>
                    <SwiperSlide key={imagem4}>
                        <img src={imagem4} alt="slider"/>
                    </SwiperSlide>
            </Swiper>
            </div>

        {/* Bloco 1 */}  
            <div>
            <p className='font-bold text-black text-center'>Faça a diferença na oferta de investimentos, construa oportunidades <br />
            com o <span className="text-3xl">at<span className="text-white">i</span>vo imobiliário</span> dos seus clientes</p>
            </div>
            
            </div>
    );
}
import logoIPatri from "../../assets/logo-ipatri-cinza-branco.webp";
import divisao from "../../assets/brilho-branco-bg.webp";
import seta from "../../assets/seta-cinza.webp";
import cidadebg from "../../assets/cidade-bg.webp";

export const FinancialAgents2 = () => {

return (

<div id="FinancialAgents2" className='flex justify-center flex-col items-center bg-green-500 text-gray-500 relative -top-32'>
    <div className="flex flex-col justify-between justify-items-center md:max-w-6xl">
        <img className="flex" src={divisao} alt="" />
        <div className="md:flex md:flex-row flex flex-col md:items-end items-center justify-items-center justify-center md:top-0 md:pb-16 p-3 gap-3 md:gap-10">
            <img className="md:flex items-center" src={logoIPatri} alt="" />
            <h1 className='font-medium text-gray-500 text-3xl md:text-5xl'>instituições f<span className='text-white text-3xl md:text-5xl'>i</span>nanceiras</h1>
        </div>
        <div className="grid lg:flex justify-items-center lg:justify-center p-5 gap-5 w-full">
            <div className="flex flex-col md:max-w-lg">
                <h2 className="text-xl md:text-2xl font-bold pb-5 md:pb-10 text-center md:text-left">Tenha uma visão ampliada do mercado e fortaleça a rentabilidade dos investimentos imobiliários dos seus clientes.</h2>
                <p className="text-lg text-white md:text-justify text-center">Conte com a solução iPatri, e tenha visão ampla do:</p>
                <ul className="text-white md:pb-0 pt-5 md:pt-0 pb-5 list-disc list-inside text-base">
                    <li>Patrimônios Imobiliários de seus clientes </li>
                    <li>Precificação dos imóveis</li>
                    <li>Oportunidades imobiliárias vs. Investimentos</li>
                    <li>Momentos de venda e de compra.</li>
                </ul>
            </div>

        </div>
        <div className='flex flex-col p-5 md:p-20'>
            <ol className="grid gap-5 md:gap-0 lg:flex justify-items-center justify-center items-center max-w-6xl">
                <img className='hidden lg:flex md:absolute items-center justify-center justify-items-center z-10' src={seta} alt="" />
                <li className="flex items-center text-white relative lg:bottom-8 lg:-left-52 z-30">
                    <span className="flex p-5 md:p-7 text-sm md:text-base text-center items-center justify-center w-48 h-48 md:w-56 md:h-56 bg-green-500 border border-white rounded-full">
                        Ative o patrimônio imobiliário na vida dos seus clientes
                    </span>
                </li>
                <li className="flex items-center text-white relative mlg-bottom-0 lg:left-0 z-30">
                    <span className="flex p-5 md:p-10 text-sm md:text-base text-center items-center justify-center w-48 h-48 md:w-56 md:h-56 bg-green-500 border border-white rounded-full">
                        Imóveis são a maior classe de ativos do brasil
                    </span>
                </li>
                <li className="flex items-center text-white relative lg:bottom-8 lg:left-52 z-0">
                    <span className="flex p-5 md:p-10 text-sm md:text-base text-center items-center justify-center w-48 h-48 md:w-56 md:h-56 bg-green-500 border border-white rounded-full">
                        Para cada real em papel brasileiro, existem mais de 2 em patrimônio imobiliário
                    </span>
                </li>
            </ol>
        </div>
        <div className="flex items-end gap-5 justify-items-center justify-center max-w-6xl pt-5 lg:pt-20 px-2">
            <p className='font-bold text-gray-500 text-center text-xl md:text-3xl max-w-5xl'>
                Faça a diferença na oferta de investimentos, construa oportunidades
                com o <span className="md:text-5xl text-xl font-bold">at<span className="text-white text-xl md:text-5xl">i</span>vo imobiliário</span> dos seus clientes</p>
        </div>
    </div>
    <img className='flex justify-center items-center' src={cidadebg} alt="" />
</div>
)
}
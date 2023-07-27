import { MdAttachMoney } from "react-icons/md";
import { FaCity } from "react-icons/fa";

export function Nossassolucoes (){
    return(
        
        <div className="bg-zinc-700 grid justify-items-center p-14 gap-10">
        {/* Bloco 1 */}
            <div>
            <h1 className="text-white text-center font-semibold text-xl">Multiplataforma de <span className="text-3xl"><span className="text-emerald-500">i</span>nteligencia de dados</span> <br />
            para eficência de investimento através de ativos imobiliários</h1>
            </div>

        {/* Bloco 1 */}
        <main className="flex">
            <div className="bg-white grid p-5 gap-4 w-80 justify-items-center rounded-s-2xl">
            <FaCity size={50}/>
            <h1 className="text-center font-semibold text-xl">incorporadoras e <span className="text-emerald-500 text-sm">i</span>nvestidores</h1>
            <p className="text-center text-xs">TENHA INFORMAÇÕES E VISÃO EXCLUSIVA <br />DOS IMÓVEIS EM TODOS OS ÂNGULOS</p>
            <p className="text-center text-xs">Amplie as possbilidades de incorporação imobiliária e investimento, desde a definição de landbanks até a viabilidade comercial.</p>
            <button className="w-28 border border-emerald-500 text-emerald-500 text-center p-1 text-xs rounded-full">Saiba mais</button>
            </div>
            <div className="bg-emerald-500 grid p-5 gap-4 w-80 justify-items-center rounded-e-2xl">
            <MdAttachMoney className="text-white" size={50}/>
            <h1 className="text-center font-semibold text-xl">Agentes f<span className="text-white text-sm">i</span>nanceiros</h1>
            <p className="text-center text-xs">INVISTA EM DADOS PRIMEIRO, SUAS SOLUÇÕES FINANCEIRAS RENDEM MAIS DEPOIS</p>
            <p className="text-center text-xs text-white">Acesso à inteligência de dados para empresas e/ou indivíduos rentabilizarem ainda através de ativos imobiliários.</p>
            <button className=" w-28 bg-white text-emerald-500 text-center p-1 text-xs rounded-full">Saiba mais</button>
            </div>
            </main>
        </div>
    );
}
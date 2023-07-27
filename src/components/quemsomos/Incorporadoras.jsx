import ReactPlayer from 'react-player'
import logo2 from "../../assets/logo2.png";


export function Incorporadoras (){
    return(
        <div className="bg-white grid justify-items-center p-14 gap-10">
          {/* Bloco 1 */}  
            
            <div className="flex items-center gap-3">
            <img className="w-32" src={logo2} alt="" />
                <h1 className='text-center font-semibold text-3xl'><span className='text-emerald-500'>i</span>ncorporadoras e <span className='text-emerald-500'>i</span>nvestidores</h1>
            </div>

          {/* Bloco 1 */}  
            <div className="flex items-start gap-20">
                <div className="grid gap-10">
                <p className="font-semibold text-justify">Dê ás suas incorporações imobiliárias a <br />
                segurança que só os dados podem garantir.</p>
                <p className="text-xs text-justify">A plataforma inteligente que compila e segmenta os <br />
                dados oriundos do mercado imobiliário, abrindo terreno <br />
                para incorporadoras tomarem decisões mais assertivas, <br />
                viáveis e rentáveis.</p>
                </div>
                <div className="bg-gray-100 p-5 rounded-xl">
                <p className="text-justify">Acesso à informações para visão estratégica:</p>
                <ul className="list-disc p-4 text-xs" >
                    <li>A maneira mais completa de enxergar o <br />desenvolvimento imobiliário de São Paulo.</li>
                    <li>Landbank, projetos em desenvolvimento, <br />lançamentos e empreendimentos prontos em<br /> uma só plataforma.</li>
                    <li>Características de empreendimentos e projetos,<br /> dados de transação e estimativa de valorização.</li>
                </ul>
                </div>
            </div>
        
        {/* Bloco 1 */}  
            <div className="flex gap-10">
                <p className="border p-10 w-28 h-28 rounded-full border-black"></p>
                <p className="border p-10 w-28 h-28 rounded-full border-black"></p>
                <p className="border p-10 w-28 h-28 rounded-full border-black"></p>
            </div>

        {/* Bloco 1 */}  
            <div className="grid gap-5">
                <h1 className="font-semibold text-sm text-center">Veja como i360 é a solução ideal para sua atuação no mercado imobiliário</h1>
                <ReactPlayer url='https://youtu.be/mUYf2yu78Ts' controls/>
            </div>
        </div>


    );
}
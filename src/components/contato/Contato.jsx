export function Contato(){
    return (
        <div className="grid items-center justify-items-center p-20 gap-10">
        {/* Bloco 1 */}

          <div>
          <p className='text-center font-bold'>iDactum é a multiplataforma 100% digital que viabiliza a identificação de <br />
          <span className="text-3xl">dados estratég<span className="text-emerald-500">i</span>cos</span> inerentes ao imóvel.</p>
          </div>
        {/* fomulário */} 
          <div className='bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-200 via-white via-50% ...'>
            <h1 className='text-center font-bold p-5'>Contato</h1>

            <form>
              <div className="flex gap-3">
                <div className="grid justify-start">
                  <input className="w-80 h-8 rounded border border-gray-400 p-1" type="text" placeholder="Nome" required/>
                  <input className="w-80 h-8 rounded border border-gray-400 p-1" type="text" placeholder="Digite seu email" required/>
                  <input className="w-80 h-8 rounded border border-gray-400 p-1" type="text" placeholder="(xx) xxxxx-xxxx" required/>
                </div>
                <div className="grid justify-items-end gap-2">
                  <textarea className="h-28 p-2 resize-none rounded border border-gray-400" placeholder="Mensagem" cols="40" required></textarea>
                  <button className="bg-emerald-500 hover:bg-emerald-400 w-28 p-1 text-white text-xs rounded">Enviar</button>
                </div>
            </div>
            </form>
          </div>
        {/* fomulário */}  
        </div>
      );
}


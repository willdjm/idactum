import { useState } from 'react';
import emailjs from "@emailjs/browser";

import divisao from "../../assets/sombra-divisao-verde.png";

export function Contact() {
const [name, setName] = useState('')
const [phohe, setPhone] = useState('')
const [email, setEmail] = useState('')
const [message, setMessage] = useState('')

function sendEmail(e) {
e.preventDefault();

if (name === '' || phohe === '' || email === '' || message === '') {
  alert("Preencha todos os campos!");
  return;
}

const templateParams = {
  from_name: name,
  phohe: phohe,
  email: email,
  message: message
}

emailjs.send("service_ouz7tiv", "template_ce6ttz4", templateParams, "pOINiBmviTKEAASav")
  .then((response) => {
    console.log("EMAIL ENVIADO", response.status, response.text)
    setName('')
    setPhone('')
    setEmail('')
    setMessage('')
  }, (err) => {
    console.log("ERRO", err)
  })
}

return (

<div id="contact" className='flex flex-col md:flex md:flex-col  justify-center items-center  p-5 md:p-5'>
  <div className='flex flex-col w-full md:flex md:max-w-5xl md:m-auto md:h-full md:items-center gap-5 py-10'>
    {/* Título */}
    <div className='flex flex-col md:flex md:flex-col md:justify-items-center justify-items-center md:justify-center justify-center items-center md:items-center md:py-3 py-3'>
    <h1 className="md:text-center text-center md:font-bold font-medium md:text-xl text-sm ">iDactum é a multiplataforma 100% digital que viabiliza a identificação de <br />
    <span className="text-xl md:text-3xl">dados estratég<span className="text-Verde-500 md:text-Verde-500">i</span>cos</span> inerentes ao imóvel.</h1>
    </div>
    {/* Bloco1 */}
    <div className=' flex flex-col md:flex-col justify-items-center justify-center items-center '>
      <img className='flex h-auto top-full justify-center items-center' src={divisao} alt="" />
      <h1 className='md:font-bold font-medium tracking-wide md:tracking-wide text-2xl md:text-lg'>Contato</h1>
    </div>
    {/* Formulario */}





    <form className='flex flex-col md:flex-row md:gap-10 gap-2 items-center justify-items-center justify-center md:items-start md:w-3/4 ' onSubmit={sendEmail}>
      <div className='flex flex-col md:flex-auto  w-full md:w-auto'>
        <div className="mb-1.5">
          <input
            className=" border border-CinzaClaro-600 text-gray-900 text-sm rounded-md focus:ring-Verde-500 focus:border-Verde-500 block w-full p-1.5"
            id="name"
            type="text"
            placeholder="Nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </div>
        <div className="mb-1.5">
          <input
            className=" border border-CinzaClaro-600 text-gray-900 text-sm rounded-md focus:ring-Verde-500 focus:border-Verde-500 block w-full p-1.5"
            id="email"
            type="email"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>
        <div className="mb-1.5">
          <input
            className=" border border-CinzaClaro-600 text-gray-900 text-sm rounded-md focus:ring-Verde-500 focus:border-Verde-500 block w-full p-1.5"
            id="phohe"
            type="tel"
            placeholder="DDD + Celular"
            onChange={(e) => setPhone(e.target.value)}
            value={phohe}
            required
          />
        </div>
      </div>
      <div className='flex flex-col md:flex-auto w-full md:w-auto'>
        <div className="mb-1 items-end gap-2 justify-end justify-items-end flex flex-col"  >
          <textarea
            className=" border border-CinzaClaro-600 text-gray-900 text-sm rounded-md focus:ring-Verde-500 focus:border-Verde-500 block w-full p-2.5"
            id="message"
            rows="5"
            placeholder="Mensagem..."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <button
            type="submit"
            className="text-white bg-Verde-500 hover:bg-Verde-400 focus:ring-4 focus:outline-none focus:ring-Verde-500  rounded-md text-sm    py-1.5 px-8 text-center ">ENVIAR</button>
        </div>
      </div>
    </form>
  </div>
</div>
);
}
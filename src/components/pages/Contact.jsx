import { useState } from 'react';
import emailjs from "@emailjs/browser";

import divisao from "../../assets/sombra-divisao-verde.webp";

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

<div className='flex flex-col justify-center items-center py-36'>
  <div className="flex flex-col justify-center items-center justify-items-center max-w-6xl">
    <div className="flex flex-col items-center justify-items-center justify-center">
      <p className='font-bold text-gray-500 text-center text-3xl pb-28'>
        iDactum é a multiplataforma 100% digital que viabiliza a identificação de
        <span className="text-6xl font-bold"> dados estratég<span className="text-green-500 text-6xl">i</span>cos</span> inerentes ao imóvel.</p>
      <img src={divisao} alt="" />
      <h1 id="contact" className='font-bold text-gray-500 text-3xl pb-10'>Contato</h1>
    </div>
    <form className='flex justify-center items-start w-full gap-24' onSubmit={sendEmail}>
      <div className='flex flex-col flex-auto gap-3 w-auto'>
        <div className="mb-1.5">
          <input
            className="border border-gray-600 text-gray-600 text-base rounded-md focus:ring-green-500 focus:border-green-500 block w-full p-3 placeholder:font-semibold"
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
            className="border border-gray-600 text-gray-600 text-base rounded-md focus:ring-green-500 focus:border-green-500 block w-full p-3 placeholder:font-semibold"
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
            className="border border-gray-600 text-gray600 text-base rounded-md focus:ring-green-500 focus:border-green-500 block w-96 p-3 placeholder:font-semibold"
            id="phohe"
            type="tel"
            placeholder="DDD + Celular"
            onChange={(e) => setPhone(e.target.value)}
            value={phohe}
            required
          />
        </div>
      </div>
      <div className='flex flex-col flex-auto gap-3 w-auto'>
        <div className="items-end gap-2 justify-end justify-items-end flex flex-col"  >
          <textarea
            className="border border-gray-600 text-gray-600 text-base rounded-md focus:ring-green-500 focus:border-green-500 block w-full font-medium p-9 placeholder:font-semibold"
            id="message"
            rows="5"
            placeholder="Mensagem..."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <button
            type="submit"
            className="text-white bg-green-500 hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-green-500 rounded-md text-base p-2 w-44 text-center ">
            ENVIAR
          </button>
        </div>
      </div>
    </form>
  </div>
</div>
);
}
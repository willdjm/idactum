import * as yup from 'yup';
import { Field, Form, Formik } from 'formik';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import divisao from "../../assets/sombra-divisao-verde.webp";

export function Contact() {

const [failMessage, setFailMessage] = useState(false);
const [successMessage, setSuccessMessage] = useState(false);

const notifySucess = () => toast.success('Mensagem enviada com sucesso!', {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
});

return (

<section id="Contact" className='flex justify-center flex-col items-center '>
<ToastContainer
    position="bottom-center"
    autoClose={5000}
    limit={1}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
/>
<div className='flex flex-col justify-between justify-items-center lg:max-w-6xl w-full lg:py-28 py-5'>
<div className="flex flex-wrap justify-center">

  {/* Título */}
  <div className="flex flex-col items-center justify-items-center justify-center">
    <p className='font-bold text-gray-500 text-center text-xl md:text-3xl md:pb-28'>
      iDactum é a multiplataforma 100% digital que viabiliza a identificação de
      <span className="md:text-6xl  font-bold"> dados estratég<span className="text-green-500 md:text-6xl">i</span>cos</span> inerentes ao imóvel.</p>
    <img className='w-full md:flex hidden' src={divisao} alt="" />
    <h1 id="contact" className='font-bold text-gray-500 text-xl md:text-3xl p-3 md:p-16 py-5'>Contato</h1>
  </div>

<div className="w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:max-w-full lg:w-full p-5">

        <Formik
            initialValues={{
                nome: '',
                telefone: '',
                email: '',
                mensagem: ''
            }}
            validationSchema={yup.object({
                nome: yup.string().min(3, 'O campo nome deve ter no mínimo 3 caracteres').required('Campo obrigatório'),
                email: yup.string().email('E-mail inválido').required('Campo obrigatório'),
                telefone: yup.string().required('Campo obrigatório'),
                mensagem: yup.string().required('Campo obrigatório')
            })}
            onSubmit={async (values, { resetForm }) => {
                await new Promise((r) => setTimeout(r, 1500));
                notifySucess();
                fetch('/sendmail.php', {
                    method: 'POST',
                    body: JSON.stringify(values)  
                }).then(res => {
                    res.status === 200 ? setSuccessMessage(true) : setFailMessage(true);
                    resetForm({});
                })
            }}
        >
            {({ errors, values, touched, isSubmitting }) => (
                <Form className='lg:flex w-full items-start justify-between gap-20'>

                  <div className='lg:flex lg:flex-col w-full'>
                  <ul className='flex mb-4'>
                        <li className='w-full'>
                            <Field
                                className={`${errors.nome ? 'bg-baby-gray' : 'bg-white'} peer block min-h-[auto] w-full rounded-md focus:border-black border py-2 px-3 outline-none shadow-md`}
                                name='nome'
                                placeholder='Nome'
                                type='text'
                                value={values.nome}
                            />
                            {errors.nome && touched.nome && <p className='text-sm italic text-red-500 flex flex-1 pl-1'>{errors.nome}</p>}
                        </li>
                    </ul>
                    <ul className='flex mb-4'>
                        <li className='w-full'>
                            <Field
                                className={`${errors.telefone ? 'border-gray-300' : 'bg-white'} peer block min-h-[auto] w-full rounded-md focus:border-black border py-2 px-3 outline-none shadow-md`}
                                name='telefone'
                                placeholder='Telefone'
                                type='text'
                                value={values.telefone}
                            />
                            {errors.telefone && touched.telefone && <p className='text-sm italic text-red-500 flex flex-1 pl-1'>{errors.telefone}</p>}
                        </li>
                    </ul>
                    <ul className='flex mb-4'>
                        <li className='w-full'>
                            <Field
                                className={`${errors.email ? 'bg-baby-gray' : 'bg-white'} peer block min-h-[auto] w-full rounded-md focus:border-black border py-2 px-3 outline-none shadow-md`}
                                name='email'
                                placeholder='E-mail'
                                type='email'
                                value={values.email}
                            />
                            {errors.email && touched.email && <p className='text-sm italic text-red-500 flex flex-1 pl-1'>{errors.email}</p>}
                        </li>
                    </ul>
                  </div>
                  <div className='lg:flex lg:flex-col w-full'>
                  <ul className='flex mb-4'>
                        <li className='w-full'>
                            <Field
                                as='textarea'
                                className={`${errors.mensagem ? 'bg-baby-gray' : 'bg-white'} peer block min-h-[auto] w-full rounded-md focus:border-black border py-2 px-3 outline-none shadow-lg place`}
                                name='mensagem'
                                placeholder='Mensagem:'
                                rows={6}
                                value={values.mensagem}
                            />
                            {errors.mensagem && touched.mensagem && <p className='text-sm italic text-red-500 flex flex-1 pl-1'>{errors.mensagem}</p>}
                        </li>
                    </ul>
                    {successMessage}
                    {failMessage &&
                        <ul className='flex pb-8'>
                            <li>
                                <div className="border shadow-md border-gray-600 text-gray-600 text-base rounded-md focus:ring-green-500 focus:border-green-500  w-full font-medium p-3 placeholder:font-semibold"
                                id="message" 
                                role="alert">
                                    <span className="font-medium">Houve um erro em sua tentativa, tente novamente mais tarde!</span>
                                </div>
                            </li>
                        </ul>
                    }
                    <ul className='flex pb-20'>
                        <li className='flex w-full justify-end'>
                            <button
                                className='text-white bg-green-500 hover:bg-teal-500 focus:ring-4 focus:outline-none focus:ring-green-500 rounded-md text-base p-3 w-full md:w-48 text-center'
                                type='submit'
                                disabled={isSubmitting}
                            >
                                <span>ENVIAR</span>
                            </button>
                        </li>
                    </ul>
                  </div>


                </Form>
            )}
        </Formik>
</div>
</div>
</div>
</section>
);
}

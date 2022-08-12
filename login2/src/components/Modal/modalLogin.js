import React from "react";
import Title from "../title/title";
import Label from '../label/label'
import Input from '../input/input'
import Boton from '../botones/boton'
import BotonClose from "../botones/botonclose";
import Close from '../../assets/close.svg';
import Google from '../../assets/google.svg';
import { Link } from "react-router-dom";

function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="bg-pink-500 text-black active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Iniciar sesión
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center w-full h-screen flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-sm">
              
                  <div className=' bg-white  rounded-3xl border-4 border-main-blue' >

                  <Link to='/Home'><BotonClose close={Close} alt='Close icon' className='float-right' onclick={() => setShowModal(false)} /></Link>

                    <div className=' px-10 py-3' >
                      <br />
                      <Title text='Iniciar Sesión' className='text-4xl font-bold text-main-blue tracking-tighter grid place-items-center' />
                      <br />
                      <Label text='Usuario' className='text-lg font-bold' />
                      <Input text='Ingrese su correo electrónico' className='w-full border border-black rounded-xl p-2 bg-transparent' />

                      <br />
                      <Label text='Contraseña' className='text-lg font-bold' />
                      <Input text='Ingrese su contraseña' types='password' className='w-full border border-black rounded-xl p-2 bg-transparent' />

                      <Label text='Recupera tu contraseña' className='text-decoration-line: underline cursor-pointer' />
                      <br />

                      <Boton className='flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-2  rounded-full text-white font-semibold text-lg   w-full bg-main-blue m-2' text='Iniciar sesión' />

                      <div className="grid place-items-center ">
                        <Label className='text-lg font-bold' text='O' />
                      </div>

                      <Boton className='flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-2  rounded-full text-black font-semibold text-lg  border-white w-full bg-main-gray m-2' google={Google} alt='Google icon' text='Continuar con Google' />
                    </div>
                  </div>
            </div>

          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default Modal;
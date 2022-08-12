import React, { useState } from "react";
import Title from "../title/title";
import Label from '../label/label';
import Input from "../input/input";
import Boton from '../botones/boton'
import BotonClose from "../botones/botonclose";
import Close from '../../assets/close.svg';
import { Link } from "react-router-dom";

function Modal() {
  const [showModal, setShowModal] = useState(true);

  
  return (
    <>

      {showModal ? (
        <>
          <div className="justify-center items-center w-full h-screen flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-sm">

            <div className=' bg-white  rounded-3xl border-4 border-main-blue' >

              <Link to='/Home'><BotonClose close={Close} alt='Close icon' className='float-right' onclick={() => setShowModal(false)} /></Link>

              <div className=' px-10 py-4' >

                <Title text='Registro' className='text-4xl font-bold text-main-blue tracking-tighter grid place-items-start'/>
                <br />

                <Label text='Usuario' className='text-lg font-bold' />
                <Input className='w-full border border-black rounded-xl p-2 bg-transparent' text='Ingrese su correo electrónico'  />

                <br />
                <Label text='Contraseña' className='text-lg font-bold' />
                <Input className='w-full border border-black rounded-xl p-2 bg-transparent' text='Ingrese su contraseña' types='password' />

                <br />
                <Label text='Confirma tu contraseña' className='text-lg font-bold' />
                <Input className='w-full border border-black rounded-xl p-2 bg-transparent' text='Ingrese su contraseña' types='password' />

                <br />
                <Label text='Ingrese su nombre de usuario' className='text-lg font-bold' />
                <Input className='w-full border border-black rounded-xl p-2 bg-transparent' text='Ingrese su usuario'  />

                <div className="text-xs m-2">
                <Label text='Al registrarte, confirmas que aceptas nuestros Términos ' className='text-decoration-line: underline cursor-pointer' />
                <Label text='y Condiciones, así como nuestra Política de Privacidad. ' className='text-decoration-line: underline cursor-pointer' />
                </div>

                <Boton className='flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-2  rounded-full text-white font-semibold text-lg   w-full bg-main-blue m-2' text='Registrarme' />
              </div>
            </div>
          </div>

        </>
      ) : null}
    </>
  );
}

export default Modal;
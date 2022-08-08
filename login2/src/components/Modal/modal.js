import React from "react";
import Title from "../title/title";
import Label from '../label/label'
import Input from '../input/input'
import Boton from '../botones/boton'
import BotonClose from "../botones/botonclose";
import Close from '../../assets/close.svg';
import Google from '../../assets/google.svg';

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
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-sm">
            {/*body*/}

              <div class="flex flex-col justify-center items-center  ">
                <div className='flex w-full h-screen items-center justify-center  '>
                  <div className=' bg-white  rounded-3xl border-4 border-main-blue' >

                    <BotonClose text='' close={Close} alt='Close icon' onclick={() => setShowModal(false)} />

                    <div className=' px-10 py-3' >
                      <br />
                      <Title text='Iniciar Sesión' className='text-lg font-medium' />
                      <br />
                      <Label text='Usuario' tipo={true} />
                      <Input text='Ingrese su correo electrónico' />

                      <br />
                      <Label text='Contraseña' tipo={true} />
                      <Input text='Ingrese su contraseña' types='password' />

                      <Label text='Recupera tu contraseña' tipo={false} />
                      <br />

                      <Boton tipoBoton={true} text='Iniciar sesión' />

                      <div className="grid place-items-center ">
                        <Label tipo='true' text='O' />
                      </div>

                      <Boton tipoBoton={false} google={Google} alt='Google icon' text='Continuar con Google' />
                    </div>
                  </div>
                </div>
              </div>
              {/*footer*/}
            </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default Modal;
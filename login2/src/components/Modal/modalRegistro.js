import React from "react";
import Title from "../title/title";
import Label from '../label/label'
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
        Registrarme
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center w-full h-screen flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-sm">

            <div className=' bg-white  rounded-3xl border-4 border-main-blue' >

              <BotonClose text='' close={Close} alt='Close icon' onclick={() => setShowModal(false)} />

              <div className=' px-10 py-14' >


                <Title text='¡Te damos la más ' titulo={true}/>
                <Title text='cordial bienvenida!' titulo={true}/>
                <br />

                <Link to='/Registro'><Boton tipoBoton={true} text='Registrate con tu email' onclick={() => setShowModal(true)} /></Link>

                <Boton tipoBoton={false} text='Continuar con Google' google={Google} alt='Google icon' />
                <br />

                <div className="font-bold text-xl">
                  <Link to='/Login' ><Label text='¿Ya tienes cuenta? Iniciar sesión' tipo={false} /></Link>
                </div>
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
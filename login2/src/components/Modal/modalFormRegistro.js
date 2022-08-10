import React, { useState } from "react";
import Title from "../title/title";
import Label from '../label/label'
import Input from '../input/input'
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

              <Link to='/Home'><BotonClose text='' close={Close} alt='Close icon' onclick={() => setShowModal(false)} /></Link>

              <div className=' px-10 py-4' >

                <Title text='Registro' titulo={false} />
                <br />

                <Label text='Usuario' tipo={true} />
                <Input text='Ingrese su correo electrónico' />

                <br />
                <Label text='Contraseña' tipo={true} />
                <Input text='Ingrese su contraseña' types='password' />

                <br />
                <Label text='Confirma tu contraseña' tipo={true} />
                <Input text='Ingrese su contraseña' types='password' />

                <br />
                <Label text='Ingrese su nombre de usuario' tipo={true} />
                <Input text='Ingrese su usuario'  />

                <div className="text-xs m-2">
                <Label text='Al registrarte, confirmas que aceptas nuestros Términos ' tipo={false} />
                <Label text='y Condiciones, así como nuestra Política de Privacidad. ' tipo={false} />
                </div>

                <Boton tipoBoton={true} text='Registrarme' />
              </div>
            </div>
          </div>

        </>
      ) : null}
    </>
  );
}

export default Modal;
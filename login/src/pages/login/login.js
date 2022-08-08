import React from "react";
import Title from '../componentes/title/title'
import Label from '../componentes/label/label'
import Input from '../componentes/input/input'
import Boton from '../componentes/botones/boton'
import BotonClose from '../componentes/botones/botonclose'
import Google from '../../assets/google.svg'
import Close from '../../assets/close.svg'

const login = () => {
  return (

    <div className='flex w-full h-screen items-center justify-center  '>

      <div className=' bg-white  rounded-3xl border-4 border-prsblue' >

        <BotonClose text='' close={Close} alt='Close icon' />


        <div className=' px-10 py-3' >
          <br />
          <Title text='Iniciar Sesion' className='text-lg font-medium' />
          <br />
          <Label text='Usuario' tipo={true} />
          <Input text='Ingrese su correo electrónico'/>

          <br />
          <Label text='Contraseña' tipo={true} />
          <Input text='Ingrese su contraseña' types='password'/>

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
  );
}

export default login;
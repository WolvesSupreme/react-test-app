import React from 'react'

import { Contenido } from '../../components/InfoSection/Contacto/InfoContenidoContact';
import { ContactObjTwo,ContenidoObjThree, FormObjFour } from '../../data/DataContacto'
import { Form } from '../../components/Form/Form';


export const Contactenos = () => {
    return (
        <>
          
            <Contenido {...ContactObjTwo}/>
            <Contenido {...ContenidoObjThree} />
            <Contenido {...FormObjFour} />
            <Form/>
        </>
    )
}

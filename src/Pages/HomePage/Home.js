import React from 'react'
import {  homeObjOne } from '../../data/DataHome';
import { InfoSection  } from '../../components/InfoSection/Home/InfoSection';
import { Servicios } from '../../components/InfoSection/Home/Servicios/Servicios';
import { MessageWelcom } from '../../components/InfoSection/Home/Message/MessageWelcom';
import { heroTwo } from '../../components/InfoSection/Home/Message/DataMessage';

export const Home = () => {
    return (
        <>
            <InfoSection {...homeObjOne} />
            <MessageWelcom {...heroTwo} />
            <Servicios/>
            
        </>
    )
}

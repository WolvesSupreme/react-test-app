import React, { useState } from 'react';
import { Heading, Row, Section } from '../../../../globalStyles';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { serviciosData, sliderSettings } from './DataServicios';
import { IconContext } from 'react-icons';
import {
    ServiciosContainer,
    ServiciosWrapper,
    ServiciosImg,
    ServiciosTitle,
    ServiciosDescrip,
    ServiciosButton,
    ButtonContainer
} from './ServicioStyles';
import { Link } from 'react-router-dom';

export const Servicios = () => {
    const [sliderRef, setSliderRef] = useState(null);



    return (

        <Section margin="auto" maxWidth="1280px" padding="50px 70px" inverse>
            <Row justify="space-between" margin="1rem" wrap="wrap">
                <Heading width="auto" inverse>
                    Servicios
                </Heading>
                <ButtonContainer>
                    <IconContext.Provider value={{ size: '3rem', color: '#295135' }}>
                        <FaArrowCircleLeft onClick={sliderRef?.slickPrev} />
                        <FaArrowCircleRight onClick={sliderRef?.slickNext} />
                    </IconContext.Provider>
                </ButtonContainer>
            </Row>


            <ServiciosContainer {...sliderSettings} ref={setSliderRef}>
                {serviciosData.map((service, index) => (
                    <ServiciosWrapper key={index}>

                        <ServiciosImg src={service.img}></ServiciosImg>
                        <ServiciosTitle>{service.name}</ServiciosTitle>
                        <ServiciosDescrip>{service.desc}</ServiciosDescrip>
                        <Link to='/servicios'>
                            <ServiciosButton>
                                {service.button}
                            </ServiciosButton>
                        </Link>



                    </ServiciosWrapper>
                ))}


            </ServiciosContainer>

        </Section>
    )
};

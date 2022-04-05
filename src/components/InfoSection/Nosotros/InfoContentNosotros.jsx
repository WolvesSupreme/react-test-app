import React from 'react';
import { Container, Section } from '../../../globalStyles';
import { DataNosotros } from '../../../data/DataNosotros';
import {
    AboutTextWrapper,
    AboutTitle,
    AboutSubTitle,
    AboutWrapper,
    AboutColumn,
    AboutImageWrapper,
    AboutName,
    AboutText,

} from '../../../styles/NosotrosStyle';


export const InfoContentNosotros = () => {

    const initial = {
        y: 40,
        opacity: 0,
    };
    const animate = {
        y: 0,
        opacity: 1,
    };

    return (
        <Section smPadding="50px 10px" position="relative" inverse id="about">
            <Container>
                <AboutTextWrapper>
                    <AboutTitle>Nosotros</AboutTitle>
                    <AboutSubTitle>Brinda atención y cuidado quiropráctico en beneficio de la salud integral de las personas</AboutSubTitle>
                </AboutTextWrapper>

                <AboutWrapper>
                    {DataNosotros.map((el, index) => (
                        <AboutColumn
                            initial={initial}
                            animate={animate}
                            transition={{ duration: 0.5 + index * 0.1 }}
                            key={index}
                        >

                            <AboutImageWrapper className={el.imgClass} src={el.img}></AboutImageWrapper>
                            <AboutName>{el.name}</AboutName>
                            <AboutText>{el.description}</AboutText>
                        </AboutColumn>
                    ))}
                </AboutWrapper>

            </Container>
        </Section>
    )
}

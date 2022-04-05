import React from 'react'
import { Container } from '../../../globalStyles';
import {
    //contenido
    ContactContenido,
    HeadingC,
    SubtitleC,

    TextWrapperContenido,
    TextColum,
    ColumTitle,
    ColumDescription,

    FromTitle
} from '../../../styles/ContactoStyle';

export const Contenido = ({
    //contenido
    lighText,//titulo
    headLine,//nameTitulo
    lighTextDescr,//description
    description, //nameDescription
    contentTitle,
    CTitle,
    contentDescription,
    CDescription,
    contentTitle2,
    CTitle2,
    contentDescription2,
    CDescription2,
    contentTitle3,
    CTitle3,
    contentDescription3,
    CDescription3,
    // Formulario
    formtitle,
    formhead
}) => {
    return (
        <>
            {/*contenido*/}
            <ContactContenido>
                <Container>
                    <HeadingC lighText={lighText}>{headLine}</HeadingC>
                    <SubtitleC lighTextDescr={lighTextDescr}>{description}</SubtitleC>
                    <TextWrapperContenido>
                        <TextColum>
                            <ColumTitle contentTitle2={contentTitle}>{CTitle}</ColumTitle>
                            <ColumDescription contentDescription={contentDescription}>{CDescription}</ColumDescription>
                        </TextColum>

                        <TextColum>
                            <ColumTitle contentTitle2={contentTitle2}>{CTitle2}</ColumTitle>
                            <ColumDescription contentDescription2={contentDescription2}>{CDescription2}</ColumDescription>
                        </TextColum>

                        <TextColum>
                            <ColumTitle contentTitle3={contentTitle3}>{CTitle3}</ColumTitle>
                            <ColumDescription contentDescription3={contentDescription3}>{CDescription3}</ColumDescription>
                        </TextColum>


                    </TextWrapperContenido>
                    {/* formulario */}
                    <FromTitle formtitle={formtitle}>{formhead}</FromTitle>
                
                </Container>
            </ContactContenido>
        </>
    )
}

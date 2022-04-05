import React from 'react';
import { Button, Container } from '../../../globalStyles';
import { Link } from 'react-router-dom';
import {
    //Primer banner
    InfoSec,
    InfoRow,
    InfoColumn,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ImgWrapper,
    Img,
    //Segundo banner
} from '../../../styles/styleHomeSection';

// * Para editar los datos dirigirte a Data *
export const InfoSection = ({
    primary,
    lighbg,
    imgStart,
    lightTopLine,
    lighText,
    lighTextDescr,
    buttonLabel,
    description,
    headLine,
    topLine,
    start,
    img,
    alt
}) => {
    return (
        <>
            <InfoSec lighbg={lighbg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                                <Heading lighText={lighText}>{headLine} </Heading>
                                <Subtitle lighTextDescr={lighTextDescr}>{description}</Subtitle>
                                <Link to='/contactenos'> {/* A donde quieres que se diriga el button */}
                                    <Button big fontBig primary={primary}>
                                        {buttonLabel}
                                    </Button>

                                </Link>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start={start}>
                                <Img src={img} alt={alt}></Img>
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

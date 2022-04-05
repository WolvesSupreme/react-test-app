import React, { useState } from 'react';
import { Buttons, Heading, Row, Section } from '../../../globalStyles';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import {
    PricingContainer,
    PricingCardInfo,
    PricingCardPlan,
    PricingCardCost,
    PricingCardFeatures,
    PricingCardText,
    PricingCardFeature,
    PricingCard,
    ButtonContainer,

} from '../../../styles/StylePaquete';
import { pricingData } from '../../../data/DataPaquete';
import { sliderSettings } from '../Home/Servicios/DataServicios';

export const Container = () => {
    const [sliderRef, setSliderRef] = useState(null);

    return (
        <Section margin="auto" maxWidth="1280px" padding="50px 70px" inverse>
            <Row justify="center" margin="1rem" wrap="wrap"> {/*Se modifica acá*/}
                <Heading width="auto" inverse>
                    Pick Your Best Option
                </Heading>
            </Row>

            <ButtonContainer>
                <FaAngleLeft size={40} color='#fff' onClick={sliderRef?.slickPrev} className='slider-icon left' />
                <FaAngleRight size={40} color='#fff'  onClick={sliderRef?.slickNext} className='slider-icon rigth' />
            </ButtonContainer>

            <PricingContainer id="pricing" {...sliderSettings} ref={setSliderRef}>
                {pricingData.map((card, index) => (
                    <PricingCard key={index}>
                        <PricingCardInfo>
                            <PricingCardPlan>{card.title}</PricingCardPlan>
                            <PricingCardCost>{card.price}</PricingCardCost>
                            <PricingCardText>{card.description}</PricingCardText>
                            <PricingCardFeatures>
                                {card.features.map((feature, index) => (
                                    <PricingCardFeature key={index}>
                                        {feature}
                                    </PricingCardFeature>
                                ))}
                            </PricingCardFeatures>
                            <Buttons>Get Started</Buttons>
                        </PricingCardInfo>

                    </PricingCard>
                ))}

            </PricingContainer>
        </Section>
    )
};

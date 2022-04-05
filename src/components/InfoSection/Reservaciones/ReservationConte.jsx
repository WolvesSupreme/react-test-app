import React from 'react'
import { Colum1, DataContenido } from '../../../data/DataReservacion'
import { Container } from '../../../globalStyles'
import {
  ReservationContainer,
  ReservationTextContainer,
  ReservationColum,
  ReservationName,
  ReservationDescription,
  ReservationRow,
  ReservationSubTitle,
  ReservationWrapper,
  ColumTitle,
  ColumDescription,



} from '../../../styles/ReservationStyle'

export const ReservationConte = () => {
  return (
    <ReservationContainer>
      <Container>
        <ReservationTextContainer>
          {DataContenido.map((item, index) => (
            <ReservationColum key={index}>
              <ReservationName>{item.title}</ReservationName>
              <ReservationDescription>{item.description}</ReservationDescription>
              <ReservationSubTitle>{item.subtitle}</ReservationSubTitle>
            </ReservationColum>
          ))}
        </ReservationTextContainer>

        <ReservationWrapper>
          {Colum1.map((el, index) => (
            <ReservationRow key={index}>
              <ColumTitle>{el.name}</ColumTitle>
              <ColumDescription>{el.text}</ColumDescription>
            </ReservationRow>
          ))}
        </ReservationWrapper>

        <ReservationWrapper>
          {Colum1.map((el, index) => (
            <ReservationRow key={index}>
              <ColumTitle>{el.name}</ColumTitle>
              <ColumDescription>{el.text}</ColumDescription>
            </ReservationRow>
          ))}
        </ReservationWrapper>

        <ReservationWrapper>
          {Colum1.map((el, index) => (
            <ReservationRow key={index}>
              <ColumTitle>{el.name}</ColumTitle>
              <ColumDescription>{el.text}</ColumDescription>
            </ReservationRow>
          ))}
        </ReservationWrapper>
      </Container>
    </ReservationContainer>
  )
}

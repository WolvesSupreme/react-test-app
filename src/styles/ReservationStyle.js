import styled from "styled-components";

export const ReservationContainer = styled.div`
display:flex;
margin:2rem;
padding: 2.5rem;
@media screen and (min-width: 260px) and (max-width: 1080px) {
    flex-wrap:wrap;
}
`;
export const ReservationTextContainer = styled.div`
//border:1px solid #0C4577;
`;

export const ReservationColum = styled.div`
//border:1px solid;
`;

export const ReservationName = styled.h1`
text-align:center;
display:flex;
font-size:1.9rem;
text-transform:uppercase;
padding:0 10vw;
gap:2rem;
justify-content:center;
`;

export const ReservationDescription = styled.p`
padding: 0 10vw;
font-size:1.2rem;
line-height:2rem;
margin-top:1.1rem;
letter-spacing:0.1rem;  
`;

export const ReservationRow = styled.div`
width: 30%;
display: flex !important;
justify-content: center;
flex-direction: column;
align-items: center;
border-radius: 10px;
outline: none;
border: 1px solid #295135;
`;

export const ReservationSubTitle = styled.h2`
margin-top:2.3rem;
text-align:center;
margin-bottom:2rem;
`;

export const ReservationWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
//flex-flow:wrap;
margin:0.7rem;
`;

export const ColumTitle = styled.h3`
margin-bottom:1rem;
margin-top:1rem;
font-size:1.3rem;
`;
export const ColumDescription = styled.p`
font-size:1.1rem;
margin: 0.4rem 0 1.3rem;
color: #3b3b3b;
`;
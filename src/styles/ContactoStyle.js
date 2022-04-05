import styled from 'styled-components';


//#region banner de contacto
export const ContactBanner = styled.div`  
background-color: #F8F6F4;
height: auto;
padding: 20px 0;
@media screen and (min-width: 260px) and (max-width: 1080px)  {
    
    width:100%;
    height: auto;
}
`;

export const ContactTitle = styled.h1`
    font-size: clamp(2.3rem, 6vw, 4.5rem);
    margin-bottom: 0.5rem;
    color: #000;
    width: 100%;
    letter-spacing: 4px;
    text-align: center;
    color:#728B78;
`;
//#endregion

//#region contenido de contacto

export const ContactContenido = styled.section`
/* margin: 2rem 4rem; */
color: #101522;
padding: 22px 0;
display: flex;

@media screen and (min-width: 260px) and (max-width: 1080px) {
    /* margin: 1rem; */
    flex-wrap:wrap;
}
`;
//#region Titulo e subtitulo
export const HeadingC = styled.h1`
text-align: center;
display: flex;
flex-direction: column;
font-size: 1.1rem;
gap: 2rem;
padding: 15px 0;
text-transform: uppercase;

@media screen and (min-width: 260px) and (max-width: 1080px) {
    padding: 0 1vw;
    gap: 1rem;
}
`;

export const SubtitleC = styled.p`
padding: 0 10vw;
font-size: 1.1rem;
line-height: 2rem;
letter-spacing: 0.1rem;
margin-top:12px;
font-size: 1.9rem;
text-align:center;
letter-spacing: 0.1rem;

@media screen and (min-width: 260px) and (max-width: 1080px) {
    padding: 0 1vw;
    gap: 1rem;
}
`;
//#endregion

export const TextWrapperContenido = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);

@media screen and (min-width: 260px) and (max-width: 1080px) {
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    text-align:center;
    grid-template-columns: 1fr;
    /* padding: 20px 0; */
    /* margin: 10px; */
    gap: 1rem;
}
`;
export const TextColum = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 0 3px;

@media screen and (min-width: 260px) and (max-width: 1080px) {
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    text-align:center;
    grid-template-columns: 1fr;
    padding: 0 3px;
    gap: 1rem;
}
`;
export const ColumTitle = styled.h2`
display: flex;
flex-direction: column;
text-align:center;
gap: 1.5px;
padding: 0 3px;

@media screen and (min-width: 260px) and (max-width: 1080px) {
    display: flex;
    flex-wrap:wrap;
    justify-content:space-between;
    text-align:center;
    align-items:center;
    grid-template-columns: 1fr;
    padding: 0 3px;
    gap: 1rem;
}
`;
export const ColumDescription = styled.p`
text-align: center;
line-height: 2rem;
font-size: 1.1rem;
display:flex;
letter-spacing: 0.1rem;

@media screen and (min-width: 260px) and (max-width: 1080px) {
    grid-template-columns: 1fr;
}
`;


//#endregion

//#region formulario
export const ContactoFrom = styled.div`
/* color: #fff; */
padding: 160px 0;
	/* background: ${({ inverse }) => (inverse ? '#101522' : '#fff')}; */
background: #fff;
`;

export const FromTitle = styled.h2`
display: flex;
flex-direction: column;
text-align:center;
gap: 1.5px;
font-size: 2rem;

@media screen and (min-width: 260px) and (max-width: 1080px) {
    display: flex;
    flex-wrap:wrap;
    justify-content:space-between;
    text-align:center;
    align-items:center;
    grid-template-columns: 1fr;
    gap: 1rem;
}`;

//#endregion

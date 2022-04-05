import { motion } from "framer-motion";
import styled from "styled-components";


//#region banner de nosotros

export const AboutTextWrapper = styled.div`
    position:relative;
    padding: 0 0 20px;
    margin-bottom:4rem;
`;

export const AboutTitle = styled.h2`
    text-align: center;
	font-size: clamp(1.3rem, 13vw, 3.1rem);
	line-height: 1.06;
	letter-spacing: 0.4rem;
	margin: auto;
	
`;

export const AboutSubTitle = styled.p`
    text-align: center;
    font-size: 1.3rem;
	line-height: 1.9;
	letter-spacing: 0.4rem;
	margin: auto;
	
`;

export const AboutWrapper = styled.div`
    display: grid;
	grid-template-columns: repeat(3, 1fr);
	margin-top: 4rem;
	grid-gap: 2rem;
	@media screen and (max-width: 1100px) {
		grid-template-columns: repeat(2, 1fr);
		grid-row-gap: 3rem;
	}
	@media screen and (max-width: 568px) {
		grid-template-columns: repeat(1, 1fr);
	}

`;
export const AboutColumn = styled(motion.div)`
    display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;
	background: #fff;
	border: 1px solid #3b3b3b;//color
	padding: 10px;
	box-shadow: 0 0 32px 8px #fff; //color
	border-radius: 20px;

`;


export const AboutImageWrapper = styled.img`
	width: 50%;
	height:auto;
	display:block;
    margin-bottom: 1rem;
	border-radius: 50%;
	border: 2px solid #000;//color
	padding: 30px;  

`;

export const AboutName = styled.h3`
    font-weight: 600;
	font-size: 1.3rem;
	letter-spacing: 2px;
	@media screen and (max-width: 768px) {
		font-weight: 400;
		font-size: 1rem;
		letter-spacing: 1.3px;
	}

`;

export const AboutText = styled.p`
    margin: 1rem 0 auto;
	text-align: center;
	font-size: 0.9rem;
	line-height: 1.73;
	letter-spacing: 0.5px;
	color: #626881;
	padding: 10px;
	@media screen and (max-width: 768px) {
		display: none;
    }
`;
//#endregion
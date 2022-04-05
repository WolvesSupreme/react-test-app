import Slider from "react-slick";
import styled from "styled-components";
import { Buttons} from "../globalStyles";

//#region container

export const PricingContainer = styled(Slider)`
	display: flex;
 	justify-content: center;
 	flex-flow: wrap;
 	> div {
 		margin: 0.7rem;
 	}
 	@media screen and (max-width: 768px) {
 		display: flex;
 		flex-direction: column;
 		justify-content: center;
 		align-items: center;
 		width: 100%;
 		> div {
 			width: 90%;
 		}
	}
	
	width:100%;
	.slick-track {
		display: flex;
		padding: 30px;
		gap: 3rem;
	}
	.slick-slide {
		display: flex;
		justify-content: center;
		margin-bottom: 1;
		outline: none;
	}
	.slick-list {
		overflow: hidden;
	}
`;

export const PricingCard = styled.div`
	width: 90%;
	display: flex !important;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	border-radius: 10px;
	outline: none;
	height: 620px;

@media screen and (min-width: 440px) {
	border: 1px solid #bebebe;
}
	
	&:hover {
		transform: scale(1.06);
		transition: all 0.3s ease-out;
	}
`;

export const PricingCardInfo = styled.div`
	background: #fff;//color
	box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
	width: 280px;
	text-decoration: none;
	border-radius: 4px;
    border: 1px solid #295135;
	height: 100%;
	display: flex;
	flex-direction: column;
	padding: 24px;
	color: #3b3b3b;//color de letras
	margin: auto;
	> button {
		margin-top: auto;
		&:hover {
			color: #fff;
			background: #295135;
			transition: background 0.3s ease;
		}
	}
	@media screen and (max-width: 768px) {
		width: 90%;
		&:hover {
			transform: none;
		}
	}
`;

export const PricingCardPlan = styled.h3`
	margin-bottom: 5px;
	font-size: 2rem;
`;

export const PricingCardCost = styled.h4`
	font-size: 1.2rem;
`;

export const PricingCardText = styled.p`
	font-size: 1.1rem;
	margin: 0.4rem 0 1.3rem;
	color: #a9b3c1;
`;

export const PricingCardFeatures = styled.ul`
	margin: 16px 0 32px;
	list-style: none;
	display: flex;
	flex-direction: column;
	color: #a9b3c1;
`;

export const PricingCardFeature = styled.li`
	margin-bottom: 1rem;
	display: flex;
	font-size: 0.94rem;
	&:before {
		content: '🎧';
		margin-right: 0.4rem;
	}
`;

export const ButtonContainer = styled.div`
	position:relative;
	display:flex;
	align-items:center;
	.slider-icon.left, .slider-icon.rigth{
		background:#295135;
		border-radius:100%;
		position:absolute;
		border:3px solid #000;
		z-index:1;
		margin-top:50%;
		margin-left:2rem;
		margin-right:2rem;
	}
	.slider-icon.left{
		left:0;
	}
	.slider-icon.rigth{
		right:0;
	}
	& svg {
		margin: 0 1rem;
		cursor: pointer;
	}
	& svg:hover {
		opacity: 0.7;
		transition: opacity 0.2s ease-in;
	}
	@media screen and (max-width: 960px) {
		margin: 0 auto;
	}
`;


export const ButtonsContainer = styled(Buttons)`
	display:flex;
	flex-direction: column;
	padding: 24px;
	margin-top: auto;
	&:hover {
		color: #fff;
		background: #295135;
		transition: background 0.3s ease;
	}
`;


//#endregion
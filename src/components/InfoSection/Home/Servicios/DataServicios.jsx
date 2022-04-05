import servicio1 from '../../../../images/Massage1.jpg';
import servicio2 from '../../../../images/Massage1.jpg';
import servicio3 from '../../../../images/Massage1.jpg';
import servicio4 from '../../../../images/Massage1.jpg';
import servicio5 from '../../../../images/Massage1.jpg';
import servicio6 from '../../../../images/Massage1.jpg';

export const serviciosData = [
    {
        img: servicio1,
        name: 'Masaje Relajante',
        desc: 'Un buen Masaje Relajante produce una agradable sensación de bienestar sumiendo a la persona en una agradable sensación de placentera.',
        button: 'Más información',
        url: '/servicios'
    },
    {
        img: servicio2,
        name: 'Masaje Terapéutico',
        desc: 'El masaje es una técnica ancestral y se basa en el uso de las manos para conseguir algún tipo de beneficio corporal.',
        button: 'Más información',
        url: '/servicios' 
    },
    {
        img: servicio3,
        name: 'Masaje Shiatsu',
        desc: 'La terapia que hoy en día se conoce en gran parte de Occidente como Shiatsu. Es un arte terapéutico.',
        button: 'Más información',
        url: '/servicios'
    },
    {
        img: servicio4,
        name: 'Reflexología',
        desc: 'La reflexología utiliza mapas de los pies, manos y otras zonas para guiar los movimientos con los que se aplica presión en las áreas específicas.',
        button: 'Más información',
        url: '/servicios'
    },
    {
        img: servicio5,
        name: 'Chequeo Estructural',
        desc: 'Utilizada para solucionar disfunciones de origen musculo-esquelético principalmente. Evaluación de postura y distribución del peso.',
        button: 'Más información',
        url: '/servicios'
    },
    {
        img: servicio6,
        name: 'Quiropraxia',
        desc: 'La Quiropraxia es una disciplina muy antigua y otorga múltiples beneficios para nuestra salud. El principal beneficio de la Quiropraxia es que no es un método invasivo.',
        button: 'Más información',
        url: '/servicios'
    },
];

export const sliderSettings = {
	arrows: false,
	slidesToShow: 3,
	focusOnselect: false,
	accessability: false,
	responsive: [
		{
			breakpoint: 1280,
			settings: {
				slidesToShow: 2,
			},
		},

		{
			breakpoint: 900,
			settings: {
				slidesToShow: 1,
			},
		},
	],
};
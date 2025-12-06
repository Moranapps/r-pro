import './offer.css';
import constructionSafety from '../assets/construction-safety.png';
import drill from '../assets/drill.png';
import measuring from '../assets/measuring.png';

function Offer() {
	const sections = [
		{
			title: 'Jakość i Bezpieczeństwo',
			description:
				'Dbamy o każdy detal – od projektu po ostatnie wykończenia. Pracujemy zgodnie z najwyższymi standardami oraz przepisami BHP.',
			icon: <img src={drill} alt="Drill" />,
		},
		{
			title: 'Doświadczeni Specjaliści',
			description:
				'Nasz zespół składa się z ekspertów z wieloletnim doświadczeniem w realizacji powierzchni biurowych klasy A i B.',

			icon: <img src={constructionSafety} alt="Construction Safety" />,
		},
		{
			title: 'Terminowość i Elastyczność',
			description:
				'Realizujemy projekty na czas, dopasowując harmonogram do potrzeb klienta i pracy jego zespołu.',
			icon: <img src={measuring} alt="Measuring" />,
		},
	];

	return (
		<section className="offer-section">
			<div className="offer-container">
				{sections.map((section, index) => (
					<div key={index} className="offer-item">
						<div className="offer-icon">{section.icon}</div>
						<h3 className="offer-title">{section.title}</h3>
						<p className="offer-description">{section.description}</p>
						{index < sections.length - 1 && (
							<div className="offer-divider"></div>
						)}
					</div>
				))}
			</div>
		</section>
	);
}

export default Offer;

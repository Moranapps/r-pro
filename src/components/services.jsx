import './services.css';
import officeImage2 from '../assets/photos/photo20.jpeg';
import officeImage3 from '../assets/photos/photo16.jpeg';
import officeImage4 from '../assets/house.jpg';

function Services() {
	const services = [
		{
			title: 'Kompleksowe Prace Wykończeniowe',
			description:
				'Kompleksowe prace wykończeniowe: kafelki, sufity, ściany działowe i zabudowy g-k. Realizujemy projekty sprawnie, estetycznie i zgodnie z dokumentacją.',
			image: officeImage2,
		},
		{
			title: 'Stolarka i prace specjalistyczne',
			description:
				'Wykonujemy zabudowy stolarskie, organizujemy lustra oraz koordynujemy wylewki i prace specjalistyczne. Jeden wykonawca - pełna odpowiedzialność.',
			image: officeImage3,
		},
		{
			title: 'Budowa domków jednorodzinnych od podstaw',
			description:
				'Budujemy domy od podstaw - od stanu zerowego po deweloperski lub pod klucz. Prowadzimy inwestycję kompleksowo i terminowo.',
			image: officeImage4,
		},
	];

	return (
		<section className="services-section">
			<div className="services-container">
				<h2 className="services-header">Czym się zajmujemy</h2>
				<div className="services-grid">
					{services.map((service, index) => (
						<div key={index} className="service-item">
							<div className="service-image-wrapper">
								<img
									src={service.image}
									alt={service.title}
									className="service-image"
								/>
							</div>
							<h3 className="service-title">{service.title}</h3>
							<p className="service-description">{service.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Services;

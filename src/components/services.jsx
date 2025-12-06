import './services.css';
import officeImage2 from '../assets/pexels-kseniachernaya-5691622.jpg';
import officeImage3 from '../assets/pexels-reneterp-2505120.jpg';
import officeImage4 from '../assets/pexels-thirdman-8482816.jpg';

function Services() {
	const services = [
		{
			title: 'Modernizacja i Rewitalizacja',
			description:
				'Odświeżamy starsze przestrzenie, podnosząc ich funkcjonalność, komfort oraz nowoczesny charakter.',
			image: officeImage2,
		},
		{
			title: 'Prace Wykończeniowe',
			description:
				'Malowanie, gładzie, montaż wykładzin, zabudowy g-k, kuchnie, recepcje i strefy wspólne.',
			image: officeImage3,
		},
		{
			title: 'Space Planning i Projekt Wnętrz',
			description:
				'Pomagamy zaplanować idealne biuro — ergonomiczne, estetyczne i dopasowane do stylu pracy firmy.',
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

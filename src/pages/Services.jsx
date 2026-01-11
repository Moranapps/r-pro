import './Services.css';
import service1 from '../assets/photos/photo20.jpeg';
import service2 from '../assets/photos/photo16.jpeg';
import service3 from '../assets/house3.jpg';

function Services() {
	const services = [
		{
			image: service1,
			title: 'Wykończenia wnętrz',
			description:
				'Realizujemy kompleksowe wykończenia wnętrz w obiektach biurowych, komercyjnych oraz prywatnych. Zakres prac obejmuje m.in. układanie kafelków, montaż sufitów podwieszanych, ścian działowych, przyścianek oraz zabudów gipsowo-kartonowych. Dbamy o wysoką jakość wykonania, estetykę detali oraz zgodność z projektem i obowiązującymi normami.',
		},
		{
			image: service2,
			title: 'Stolarka i prace specjalistyczne',
			description:
				'Zapewniamy realizację prac stolarskich, w tym zabudów na wymiar, a także organizację i montaż luster. Koordynujemy również wykonanie wylewek oraz innych robót specjalistycznych, współpracując ze sprawdzonymi podwykonawcami. Klient otrzymuje jednego partnera odpowiedzialnego za całość prac i ich terminową realizację.',
		},
		{
			image: service3,
			title: 'Budowa domów od podstaw',
			description:
				'Na zlecenie klientów realizujemy budowę domów jednorodzinnych od stanu zerowego po stan deweloperski lub „pod klucz”. Prowadzimy inwestycję kompleksowo – od przygotowania terenu, przez prace konstrukcyjne, aż po finalne wykończenie. Zapewniamy rzetelne wykonanie, transparentną współpracę i stały nadzór nad realizacją.',
		},
	];

	return (
		<div className="services-page">
			<div className="services-container">
				<h1 className="services-header">Usługi</h1>
				<div className="services-list">
					{services.map((service, index) => (
						<div
							key={index}
							className={`service-page-item ${index % 2 === 0 ? 'left' : 'right'}`}>
							<div className="service-image">
								<img src={service.image} alt={service.title} />
							</div>
							<div className="service-content">
								<h2>{service.title}</h2>
								<p>{service.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Services;

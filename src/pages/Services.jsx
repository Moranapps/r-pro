import './Services.css';
import service1 from '../assets/construction-safety.png';
import service2 from '../assets/drill.png';
import service3 from '../assets/measuring.png';

function Services() {
	const services = [
		{
			image: service1,
			title: 'Bezpieczeństwo Budowy',
			description:
				'Zapewniamy kompleksowe usługi związane z bezpieczeństwem na budowie. Nasz zespół specjalistów dba o przestrzeganie wszystkich norm i przepisów BHP, zapewniając bezpieczne warunki pracy dla wszystkich zaangażowanych w projekt.',
		},
		{
			image: service2,
			title: 'Wiercenie i Montaż',
			description:
				'Profesjonalne usługi wiercenia i montażu w różnych materiałach. Posiadamy nowoczesny sprzęt i doświadczony zespół, który zapewnia precyzyjne wykonanie prac zgodnie z najwyższymi standardami jakości.',
		},
		{
			image: service3,
			title: 'Pomiary i Analizy',
			description:
				'Dokładne pomiary i analizy techniczne dla projektów budowlanych. Wykonujemy kompleksowe badania i pomiary, które są niezbędne do prawidłowego planowania i realizacji inwestycji budowlanych.',
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

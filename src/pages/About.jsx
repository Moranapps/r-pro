import './About.css';
import aboutImage from '../assets/pexels-life-of-pix-8092.jpg';

function About() {
	return (
		<div className="about-page">
			<div className="about-container">
				<div className="about-image">
					<img src={aboutImage} alt="About R-PRO" />
				</div>
				<div className="about-content">
					<h1>O Nas</h1>
					<p>
						RPRO Sp. z o.o. to firma budowlano-wykończeniowa oparta na ponad
						9-letnim doświadczeniu zdobytym pod szyldem Remonty Pro. W tym
						czasie zrealizowaliśmy dziesiątki projektów obejmujących wykończenia
						biurowców, hal przemysłowych, galerii handlowych, a także inwestycje
						dla klientów indywidualnych. Każde zlecenie traktujemy z taką samą
						starannością niezależnie od jego skali.
					</p>
					<p>
						Współpracujemy zarówno z klientami prywatnymi, jak i
						instytucjonalnymi, w tym w ramach dużych przetargów i inwestycji
						publicznych. Zapewniamy kompleksową obsługę, jasne zasady współpracy
						i pełną odpowiedzialność za realizację projektu - od planowania po
						finalne wykończenie. Naszym celem jest dostarczanie trwałych,
						funkcjonalnych i estetycznych rozwiązań, które spełniają realne
						potrzeby inwestorów.
					</p>
				</div>
			</div>
		</div>
	);
}

export default About;

import './Contact.css';
import contactImage from '../assets/pexels-thirdman-8482816.jpg';

function Contact() {
	return (
		<div className="contact-page">
			<div className="contact-container">
				<div className="contact-image">
					<img src={contactImage} alt="Contact" />
				</div>
				<div className="contact-info">
					<h1>Kontakt</h1>
					<div className="contact-details">
						<div className="contact-item">
							<h3>Telefon</h3>
							<p>+48 123 456 789</p>
							<p>+48 987 654 321</p>
						</div>
						<div className="contact-item">
							<h3>Email</h3>
							<p>kontakt@r-pro.pl</p>
							<p>info@r-pro.pl</p>
						</div>
						<div className="contact-item">
							<h3>Adres</h3>
							<p>ul. Przykładowa 123</p>
							<p>00-000 Warszawa</p>
							<p>Polska</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;

import './Contact.css';
import contactImage from '../assets/photos/main/photo25.jpg';

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
							<p>Biuro: +48 537 577 383</p>
						</div>
						<div className="contact-item">
							<h3>Email</h3>
							<p>biuro@r-pro.pl</p>
							<p>remonty-pro@onet.pl</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;

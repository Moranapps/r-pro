import { Link } from 'react-router-dom';
import './footer.css';
import reactLogo from '../assets/logoani.png';

function Footer() {
	const navItems = [
		{ to: '/o-nas', label: 'o nas' },
		{ to: '/realizacje', label: 'realizacje' },
		{ to: '/uslugi', label: 'usługi' },
		{ to: '/kontakt', label: 'kontakt' },
	];

	return (
		<footer className="footer">
			<div className="footer-container">
				<div className="footer-left">
					<div className="footer-logo-section">
						<img src={reactLogo} alt="R-PRO Logo" className="footer-logo" />
						{/* <span className="footer-name">R-PRO</span> */}
					</div>
					<div className="footer-info">
						R-PRO sp. z o.o. NIP: 6832135771 KRS: 0001090491 BDO: 000611654 UL.
						SENATORSKA 23 / 24, 93-192 Łódź, Nr rachunku bankowego (ING Bank
						Śląski): 33 1050 1445 1000 0090 8344 4753
					</div>
				</div>
				<div className="footer-right">
					<nav className="footer-nav">
						{navItems.map((item, index) => (
							<Link key={index} to={item.to} className="footer-nav-link">
								{item.label}
							</Link>
						))}
					</nav>
				</div>
			</div>
		</footer>
	);
}

export default Footer;

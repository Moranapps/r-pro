import './footer.css';
import reactLogo from '../assets/logo-white.png';

function Footer() {
	const navItems = [
		{ href: '#o-nas', label: 'o nas' },
		{ href: '#projekty', label: 'projekty' },
		{ href: '#uslugi', label: 'usługi' },
		{ href: '#kontakt', label: 'kontakt' },
	];

	return (
		<footer className="footer">
			<div className="footer-container">
				<div className="footer-left">
					<div className="footer-logo-section">
						<img src={reactLogo} alt="R-PRO Logo" className="footer-logo" />
						<span className="footer-name">R-PRO</span>
					</div>
					<div className="footer-info">
						<p className="footer-company-details">
							R-PRO sp. z o.o. NIP: 6832135771 UL. SENATORSKA 23 / 24, 93-192 Nr
							rachunku bankowego (ING Bank Śląski): 66 6666 6666 0000 6666 6666
						</p>
					</div>
				</div>
				<div className="footer-right">
					<nav className="footer-nav">
						{navItems.map((item, index) => (
							<a key={index} href={item.href} className="footer-nav-link">
								{item.label}
							</a>
						))}
					</nav>
				</div>
			</div>
		</footer>
	);
}

export default Footer;

import { useState } from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';
import reactLogo from '../assets/logo-green.png';

function Navigation() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	return (
		<>
			<nav className="navigation">
				<Link to="/" className="nav-left" onClick={closeMenu}>
					<img src={reactLogo} alt="R-PRO Logo" className="nav-logo" />
					<div className="nav-name-container">
						<span className="nav-name">R-PRO</span>
						<span className="nav-slogan">EST 2017</span>
					</div>
				</Link>
				<button
					className={`burger-menu ${isMenuOpen ? 'active' : ''}`}
					onClick={toggleMenu}
					aria-label="Toggle menu">
					<span></span>
					<span></span>
					<span></span>
				</button>
				<div className={`nav-right ${isMenuOpen ? 'active' : ''}`}>
					<Link to="/o-nas" className="nav-link" onClick={closeMenu}>
						o nas
					</Link>
					<Link to="/projekty" className="nav-link" onClick={closeMenu}>
						projekty
					</Link>
					<Link to="/uslugi" className="nav-link" onClick={closeMenu}>
						usługi
					</Link>
					<Link to="/kontakt" className="nav-link" onClick={closeMenu}>
						kontakt
					</Link>
				</div>
			</nav>
			{isMenuOpen && <div className="menu-backdrop" onClick={closeMenu}></div>}
		</>
	);
}

export default Navigation;

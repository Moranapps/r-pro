import { useState } from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';
import reactLogo from '../assets/logoani.png';

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
					<Link to="/realizacje" className="nav-link" onClick={closeMenu}>
						realizacje
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

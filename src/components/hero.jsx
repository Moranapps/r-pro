import './hero.css';
import heroImage from '../assets/hero.jpg';

function Hero({ imageUrl, children }) {
	return (
		<div className="hero-container">
			<img src={imageUrl || heroImage} alt="Hero" className="hero-image" />
			<div className="hero-overlay"></div>
			{children && <div className="hero-content">{children}</div>}
		</div>
	);
}

export default Hero;

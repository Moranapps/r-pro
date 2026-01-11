import { useState, useEffect } from 'react';
import './latest.css';
import image1 from '../assets/photos/main/photo14.jpg';
import image2 from '../assets/photos/latest3.jpeg';
import image3 from '../assets/photos/latest4.jpeg';
import image4 from '../assets/photos/main/photo17.jpg';
import image5 from '../assets/photos/photo3.jpeg';
import image6 from '../assets/photos/main/photo15.jpg';
import image7 from '../assets/photos/photo16.jpeg';
import image8 from '../assets/photos/latest1.jpeg';

function Latest() {
	const images = [
		image1,
		image2,
		image3,
		image4,
		image5,
		image6,
		image7,
		image8,
	];

	const [currentIndex, setCurrentIndex] = useState(0);
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const getVisibleImages = () => {
		const visibleCount = isMobile ? 1 : 3;
		const visibleImages = [];

		for (let i = 0; i < visibleCount; i++) {
			const index = (currentIndex + i) % images.length;
			visibleImages.push({
				image: images[index],
				key: `img-${index}-${i}`,
			});
		}

		return visibleImages;
	};

	const handleNext = () => {
		const step = isMobile ? 1 : 1;
		setCurrentIndex((prev) => (prev + step) % images.length);
	};

	const handlePrev = () => {
		const step = isMobile ? 1 : 1;
		setCurrentIndex((prev) => (prev - step + images.length) % images.length);
	};

	return (
		<section className="latest-section">
			<div className="latest-container">
				<h2 className="latest-header">Ostatnie realizacje</h2>
				<div className="latest-grid">
					{getVisibleImages().map((item) => (
						<div key={item.key} className="latest-image-wrapper">
							<img
								src={item.image}
								alt="Ostatnie realizacje"
								className="latest-image"
							/>
						</div>
					))}
				</div>
				<div className="latest-navigation">
					<button
						className="latest-arrow latest-arrow-left"
						onClick={handlePrev}
						aria-label="Poprzednie zdjęcie">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round">
							<polyline points="15 18 9 12 15 6" />
						</svg>
					</button>
					<button
						className="latest-arrow latest-arrow-right"
						onClick={handleNext}
						aria-label="Następne zdjęcie">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round">
							<polyline points="9 18 15 12 9 6" />
						</svg>
					</button>
				</div>
			</div>
		</section>
	);
}

export default Latest;

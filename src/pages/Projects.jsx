import { useState, useEffect, useCallback } from 'react';
import './Projects.css';
import project1 from '../assets/photos/main/photo14.jpg';
import project2 from '../assets/photos/main/photo25.jpg';
import project3 from '../assets/photos/photo9.jpeg';
import project4 from '../assets/photos/main/photo17.jpg';
import project5 from '../assets/photos/main/photo18.jpg';
import project6 from '../assets/photos/main/photo15.jpg';
import project7 from '../assets/1.jpg';
import project8 from '../assets/2.jpg';
import project9 from '../assets/3.jpg';
import project10 from '../assets/4.jpg';
import project11 from '../assets/5.jpg';
import project12 from '../assets/photos/photo21.jpeg';
import project13 from '../assets/photos/photo17.jpeg';
import project14 from '../assets/photos/photo18.jpeg';
import project15 from '../assets/photos/photo19.jpeg';

function Projects() {
	const [selectedImageIndex, setSelectedImageIndex] = useState(null);

	const projects = [
		project1,
		project2,
		project3,
		project4,
		project5,
		project6,
		project12,
		project7,
		project8,
		project9,
		project10,
		project11,
		project13,
		project14,
		project15,
	];

	const openModal = (index) => {
		setSelectedImageIndex(index);
	};

	const closeModal = useCallback(() => {
		setSelectedImageIndex(null);
	}, []);

	const goToPrevious = useCallback(() => {
		setSelectedImageIndex((currentIndex) => {
			if (currentIndex === null) return null;
			return currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
		});
	}, [projects.length]);

	const goToNext = useCallback(() => {
		setSelectedImageIndex((currentIndex) => {
			if (currentIndex === null) return null;
			return currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
		});
	}, [projects.length]);

	useEffect(() => {
		if (selectedImageIndex !== null) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}

		const handleKeyDown = (e) => {
			if (selectedImageIndex === null) return;

			if (e.key === 'Escape') {
				closeModal();
			} else if (e.key === 'ArrowLeft') {
				goToPrevious();
			} else if (e.key === 'ArrowRight') {
				goToNext();
			}
		};

		if (selectedImageIndex !== null) {
			window.addEventListener('keydown', handleKeyDown);
		}

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
			document.body.style.overflow = 'unset';
		};
	}, [selectedImageIndex, goToPrevious, goToNext, closeModal]);

	return (
		<div className="projects-page">
			<div className="projects-container">
				<h1 className="projects-header">Realizacje</h1>
				<div className="projects-grid">
					{projects.map((project, index) => (
						<div
							key={index}
							className="project-item"
							onClick={() => openModal(index)}>
							<img src={project} alt={`Project ${index + 1}`} />
						</div>
					))}
				</div>
			</div>
			{selectedImageIndex !== null && (
				<div className="modal-overlay" onClick={closeModal}>
					<button className="modal-close" onClick={closeModal}>
						×
					</button>
					<button
						className="modal-nav modal-nav-prev"
						onClick={(e) => {
							e.stopPropagation();
							goToPrevious();
						}}
						aria-label="Previous image">
						‹
					</button>
					<button
						className="modal-nav modal-nav-next"
						onClick={(e) => {
							e.stopPropagation();
							goToNext();
						}}
						aria-label="Next image">
						›
					</button>
					<div className="modal-content" onClick={(e) => e.stopPropagation()}>
						<img
							src={projects[selectedImageIndex]}
							alt={`Project ${selectedImageIndex + 1}`}
						/>
					</div>
				</div>
			)}
		</div>
	);
}

export default Projects;

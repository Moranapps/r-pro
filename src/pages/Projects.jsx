import { useState, useEffect, useCallback } from 'react';
import './Projects.css';
import project1 from '../assets/pexels-karola-g-4977399.jpg';
import project2 from '../assets/pexels-kseniachernaya-5691622.jpg';
import project3 from '../assets/pexels-kseniachernaya-5691686.jpg';
import project4 from '../assets/pexels-life-of-pix-8092.jpg';
import project5 from '../assets/pexels-pavel-danilyuk-7937304.jpg';
import project6 from '../assets/pexels-reneterp-2505120.jpg';
import project7 from '../assets/pexels-reneterp-3990359.jpg';
import project8 from '../assets/pexels-shkrabaanthony-5493670.jpg';
import project9 from '../assets/pexels-shox-27440327.jpg';

function Projects() {
	const [selectedImageIndex, setSelectedImageIndex] = useState(null);

	const projects = [
		project1,
		project2,
		project3,
		project4,
		project5,
		project6,
		project7,
		project8,
		project9,
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
				<h1 className="projects-header">Projekty</h1>
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

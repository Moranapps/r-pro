import './About.css';
import aboutImage from '../assets/pexels-life-of-pix-8092.jpg';

function About() {
	return (
		<div className="about-page">
			<div className="about-container">
				<div className="about-image">
					<img src={aboutImage} alt="About R-PRO" />
				</div>
				<div className="about-content">
					<h1>O Nas</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur.
					</p>
					<p>
						Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
						officia deserunt mollit anim id est laborum. Sed ut perspiciatis
						unde omnis iste natus error sit voluptatem accusantium doloremque
						laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
						veritatis et quasi architecto beatae vitae dicta sunt explicabo.
					</p>
				</div>
			</div>
		</div>
	);
}

export default About;

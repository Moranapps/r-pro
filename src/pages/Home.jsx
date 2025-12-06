import Hero from '../components/hero';
import Offer from '../components/offer';
import Services from '../components/services';
import Stats from '../components/stats';
import Latest from '../components/latest';

function Home() {
	return (
		<>
			<Hero>
				<h1>R-PRO</h1>
				<p>Your Trusted Partner in the Real Estate Industry</p>
			</Hero>
			<Offer />
			<Services />
			<Stats />
			<Latest />
		</>
	);
}

export default Home;

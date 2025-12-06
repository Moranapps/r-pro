import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation';
import Footer from './components/footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Contact from './pages/Contact';
import './App.css';

function App() {
	return (
		<Router>
			<Navigation />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/o-nas" element={<About />} />
				<Route path="/projekty" element={<Projects />} />
				<Route path="/uslugi" element={<Services />} />
				<Route path="/kontakt" element={<Contact />} />
			</Routes>
			<Hero>
				<h1>R-PRO</h1>
				<p>Your Trusted Partner in the Real Estate Industry</p>
			</Hero>
			<Offer />
			<Services />
			<Stats />
			<Latest />
			<Footer />
		</Router>
	);
}

export default App;

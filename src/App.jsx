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
				<Route path="/r-pro/" element={<Home />} />
				<Route path="/r-pro/o-nas" element={<About />} />
				<Route path="/r-pro/projekty" element={<Projects />} />
				<Route path="/r-pro/uslugi" element={<Services />} />
				<Route path="/r-pro/kontakt" element={<Contact />} />
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

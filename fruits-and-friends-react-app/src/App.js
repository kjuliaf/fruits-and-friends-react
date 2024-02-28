import { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import LunchMenu from "./pages/LunchMenu";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
	const [scroll, setScroll] = useState(false);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			setScroll(window.scrollY > 50);
		});
	}, []);

	const [lunchMenuActive, setLunchMenuActive] = useState(false);
	useEffect(() => {
		let lunchMenuElement = document.getElementById("lunch-menu-link");
		window.addEventListener("click", () => {
			setLunchMenuActive(lunchMenuElement.classList.contains("active"));
		});
	}, []);

	const [menuActive, setMenuActive] = useState(false);
	useEffect(() => {
		let menuElement = document.getElementById("menu-link");
		window.addEventListener("click", () => {
			setMenuActive(menuElement.classList.contains("active"));
		});
	}, []);
	return (
		<div>
			<Router>
				<Header scrollingClass={scroll} lunchMenuClass={lunchMenuActive} menuClass={menuActive} />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/about-us" element={<About />} />
					<Route path="/lunch-menu" element={<LunchMenu />} />
					<Route path="/menu" element={<Menu />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
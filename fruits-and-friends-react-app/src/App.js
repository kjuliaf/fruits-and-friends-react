import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import LunchMenu from "./pages/LunchMenu";
import Menu from "./pages/Menu";
import Order from "./pages/Order/Order";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
	return (
		<div>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about-us" element={<About />} />
				<Route path="/lunch-menu" element={<LunchMenu />} />
				<Route path="/menu" element={<Menu />} />
				<Route path="/order" element={<Order />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;

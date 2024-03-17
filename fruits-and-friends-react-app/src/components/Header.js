import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
	const [scroll, setScroll] = useState(false);
	const [menuActive, setMenuActive] = useState(false);
	const { pathname } = useLocation();

	/**
	 * Checks if user has scrolled down on the website.
	 */
	useEffect(() => {
		window.addEventListener("scroll", () => {
			setScroll(window.scrollY > 50);
		});
	}, []);

	/**
	 * Checks if user has entered lunch menu or menu page to set menu active.
	 */
	useEffect(() => {
		const lunchMenuElement = document.getElementById("lunch-menu-link");
		const menuElement = document.getElementById("menu-link");

		setMenuActive(
			lunchMenuElement.classList.contains("active") ||
			menuElement.classList.contains("active")
		);
	}, [pathname]);

	/**
	 * Hides hamburger menu when user changes page.
	 */
	useEffect(() => {
		document.getElementsByClassName("checkbox")[0].checked = false;
	}, [pathname])

	return (
		<header className={scroll ? "scrolling" : "none"} id="index-header">
			<NavLink to="/" ><img src="resources/content/home-logo-light.png" alt="Logga och hemknapp" className="home-logo" id="home-logo-light" /></NavLink>
			<NavLink to="/" ><img src="resources/content/home-logo-dark.png" alt="Logga och hemknapp" className="home-logo" id="home-logo-dark" /></NavLink>

			<nav id="navbar">
				<ul id="main-navbar">
					<li><NavLink to="about-us" className={({ isActive }) => (isActive ? "active" : "none")}>OM OSS</NavLink></li>

					<li id="dropdown">
						<div id="dropdown-button">
							<div id="menu-name" className={(menuActive ? "active" : "none")}>MENY</div>
							<div className="arrow" id="arrow-down"></div>
							<div className="arrow" id="arrow-up"></div>
						</div>

						<ul id="dropdown-navbar">
							<li><NavLink id="lunch-menu-link" to="lunch-menu" className={({ isActive }) => (isActive ? "active" : "none")}>LUNCHMENY</NavLink></li>
							<li><NavLink id="menu-link" to="menu" className={({ isActive }) => (isActive ? "active" : "none")}>MENY</NavLink></li>
						</ul>
					</li>

					<li><NavLink to="order" className={({ isActive }) => (isActive ? "active" : "none")}>BESTÄLL</NavLink></li>
					<li><NavLink to="contact" className={({ isActive }) => (isActive ? "active" : "none")}>KONTAKT</NavLink></li>
				</ul>
			</nav>

			<div id="hamburger-menu">
				<input className="checkbox" type="checkbox" name="hamburger-navbar-checkbox" id="hamburger-navbar-checkbox" />
				<div id="hamburger-navbar-icon">
					<span className="line" id="line1"></span>
					<span className="line" id="line2"></span>
					<span className="line" id="line3"></span>
				</div>

				<nav id="hamburger-navbar">
					<ul id="hamburger-main-navbar">
						<li><NavLink to="about-us" className={({ isActive }) => (isActive ? "active" : "none")}>OM OSS</NavLink></li>

						<li id="hamburger-dropdown" tabIndex="0">
							<div className={(menuActive ? "show-hamburger-submenu" : "none")}>
								<div id="hamburger-dropdown-button">
									<div className={(menuActive ? "active" : "none")}>MENY</div>
									<div className="hamburger-arrow" id="hamburger-arrow-down"></div>
									<div className="hamburger-arrow" id="hamburger-arrow-up"></div>
								</div>

								<div id="dropdown-hover">
									<ul id="hamburger-dropdown-navbar">
										<li><NavLink to="lunch-menu" className={({ isActive }) => (isActive ? "active" : "none")}>LUNCHMENY</NavLink></li>
										<li><NavLink to="menu" className={({ isActive }) => (isActive ? "active" : "none")}>MENY</NavLink></li>
									</ul>
								</div>
							</div>
						</li>
						<li><NavLink to="order" className={({ isActive }) => (isActive ? "active" : "none")}>BESTÄLL</NavLink></li>
						<li><NavLink to="contact" className={({ isActive }) => (isActive ? "active" : "none")}>KONTAKT</NavLink></li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Header;
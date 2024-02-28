import React from "react";

class Home extends React.Component {
	render() {
		return (
			<div>
				<div className="hero-img" id="hero-index">
					<div id="hero">
						<img src="resources/index-content/logo.png" alt="Logga" id="logo" />
						<h1>JUICEBAR OCH HÄLSOCAFÉ</h1>
					</div>
				</div>
				<main id="content-index">
					<div id="welcome">
						<div id="welcome-msg">
							<h2>VÄLKOMMEN</h2>
							<p>En sallad, wrap, juice eller bowl - vad är du sugen på idag? Fräsch, god och nyttig - det är fast food när den är som allra bäst. Välkommen in till oss på <a href="https://www.google.com/maps/place/All%C3%A9gatan+48,+503+37+Bor%C3%A5s/@57.7200311,12.9395654,17z/data=!3m1!4b1!4m6!3m5!1s0x465aa0ae0dc2c4f5:0x7c3b6024d5ed61ba!8m2!3d57.7200311!4d12.9421403!16s%2Fg%2F11cshmswnh?entry=ttu" target="_blank" rel="noreferrer">Allégatan 48, 503 37 Borås</a>.</p>
							<p><b>NYTT!</b> Nu kan du beställa från oss och få din beställning levererad till dörren med Foodora.</p>

							<div id="opening-msg">
								<h3>ÖPPETTIDER</h3>
								<p><b>Måndag-fredag:</b> 9:00-17:00</p>
								<p><b>Lördag:</b> 11:00-14:00</p>
							</div>
						</div>
						<img src="resources/index-content/index-img1.jpg" alt="Tilltalande bild på mat" className="index-img" id="index-img1" />
					</div>

					<div id="business">
						<div id="business-msg">
							<h2>FOKUS OCH ENERGI</h2>
							<p>Låt oss ordna maten till mötet - då får ni garanterad energipåfyllning! Matiga sallader, wraps, eller en energifylld pausfika.</p>
							<p>Eller varför inte bjuda dina kollegor på en riktig kickstart på dagen?</p>
							<p>Kontakta oss på <a href="tel:0735-136226">0735-136226</a> för förslag.</p>
						</div>
						<img src="resources/index-content/index-img2.jpg" alt="Tilltalande bild på mat" className="index-img" id="index-img2" />
					</div>
				</main>
			</div>
		);
	}
}

export default Home;
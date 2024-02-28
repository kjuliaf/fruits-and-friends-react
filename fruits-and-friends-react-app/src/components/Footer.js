import React from "react";

class Footer extends React.Component {
	render() {
		return (
			<footer>
				<div>
					<h4>ÖPPETTIDER</h4>
					<ul>
						<li><b>Måndag-fredag:</b> 9:00-17:00</li>
						<li><b>Lördag:</b> 11:00-14:00</li>
					</ul>
				</div>

				<div>
					<h4>FÖLJ OSS</h4>
					<ul>
						<li className="icon-and-info">
							<img src="resources/content/instagram-icon.png" alt="Instagram-ikon" className="icon" />
							<div><a href="https://www.instagram.com/fruitsandfriends/" target="_blank" rel="noreferrer">@fruitsandfriends</a></div>
						</li>

						<li className="icon-and-info">
							<img src="resources/content/facebook-icon.png" alt="Facebook-ikon" className="icon" />
							<div><a href="https://www.facebook.com/Fruitsandfriendsjuicebar/" target="_blank" rel="noreferrer">@fruitsandfriendsjuicebar</a></div>
						</li>
					</ul>
				</div>

				<div>
					<h4>KONTAKTA OSS</h4>
					<ul>
						<li className="icon-and-info">
							<img src="resources/content/map-icon.png" alt="Karta-ikon" className="icon" />
							<div><a href="https://www.google.com/maps/place/All%C3%A9gatan+48,+503+37+Bor%C3%A5s/@57.7200311,12.9395654,17z/data=!3m1!4b1!4m6!3m5!1s0x465aa0ae0dc2c4f5:0x7c3b6024d5ed61ba!8m2!3d57.7200311!4d12.9421403!16s%2Fg%2F11cshmswnh?entry=ttu" target="_blank" rel="noreferrer">Allégatan 48, 503 37 Borås</a></div>
						</li>

						<li className="icon-and-info">
							<img src="resources/content/phone-icon.png" alt="Telefon-ikon" className="icon" />
							<div><a href="tel:0735-136226">0735-136226</a></div>
						</li>

						<li className="icon-and-info">
							<img src="resources/content/mail-icon.png" alt="Mail-ikon" className="icon" />
							<div><a href="mailto:info@fruitsandfriends.se">info@fruitsandfriends.se</a></div>
						</li>
					</ul>
				</div>
			</footer>
		);
	}
}

export default Footer;
import React from "react";

const Contact = () => {
	return (
		<div>
			<div className="hero-img" id="hero-contact">
				<div id="hero">
					<h1>KONTAKT</h1>
				</div>
			</div>
			<main id="content-contact">
				<div id="find-us-msg">
					<h2>HITTA TILL OSS</h2>
					<p>Ni finner oss på adressen <a href="https://www.google.com/maps/place/All%C3%A9gatan+48,+503+37+Bor%C3%A5s/@57.7200311,12.9395654,17z/data=!3m1!4b1!4m6!3m5!1s0x465aa0ae0dc2c4f5:0x7c3b6024d5ed61ba!8m2!3d57.7200311!4d12.9421403!16s%2Fg%2F11cshmswnh?entry=ttu" target="_blank" rel="noreferrer">Allégatan 48, 503 37 Borås</a>.</p>
				</div>

				<div id="map">
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2130.7896282573115!2d12.942140300000002!3d57.7200311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465aa0ae0dc2c4f5%3A0x7c3b6024d5ed61ba!2sAll%C3%A9gatan%2048%2C%20503%2037%20Bor%C3%A5s!5e0!3m2!1ssv!2sse!4v1706707651245!5m2!1ssv!2sse"
						width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="karta"></iframe>
				</div>

				<div id="contact-us-msg">
					<h2>KONTAKTA OSS</h2>
					<p>Ni kan ringa till oss på <a href="tel:0735-136226">0735-136226</a>, maila oss på <a href="mailto:info@fruitsandfriends.se">info@fruitsandfriends.se</a> eller använda kontaktformuläret nedan.</p>
					<br />

					<div className="contact-form">
						<form action="mailto:name@example.com" method="post">
							<div className="input-container">
								<label htmlFor="name">Namn</label>
								<input type="text" className="input" id="name" name="name" />
							</div>

							<div className="input-container">
								<label htmlFor="mail">Mailadress</label>
								<input type="text" className="input" id="mail" name="mail" />
							</div>

							<div className="input-container">
								<label htmlFor="phone">Telefonnummer</label>
								<input type="tel" className="input" id="phone" name="phone" />
							</div>

							<div className="input-container">
								<label htmlFor="message">Meddelande</label>
								<textarea className="input" id="message" name="message"></textarea>
							</div>

							<input type="submit" value="Skicka" />
						</form>
					</div>
				</div>
			</main>
		</div>
	);
}

export default Contact;
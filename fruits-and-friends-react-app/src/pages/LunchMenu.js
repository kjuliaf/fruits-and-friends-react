import React from "react";

class LunchMenu extends React.Component {
	render() {
		return (
			<div>
				<div className="hero-img" id="hero-lunch-menu">
					<div id="hero">
						<h1>LUNCHMENY</h1>
					</div>
				</div>
				<main id="content-lunch-menu">
					<div id="lunch-info-msg">
						<h2>LUNCH</h2>
						<p>Vi serverar vår lunchmeny måndag till fredag klockan 11-14. Välkommen in!
							Dagens juice och dagens wrap för <b>129:-</b></p>
					</div>

					<table>
						<thead>
							<tr>
								<th id="empty"></th>
								<th>DAGENS WRAP</th>
								<th>DAGENS JUICE</th>
							</tr>
						</thead>

						<tbody>
							<tr>
								<td className="day"><b>MÅNDAG</b></td>
								<td><b>Avokado:</b> Sallad, basilikaolja och rivna rödbetor</td>
								<td><b>Immun:</b> Morot, apelsin, äpple och ingefära</td>
							</tr>
							<tr>
								<td className="day"><b>TISDAG</b></td>
								<td><b>Tonfiskröra:</b> (tonfisk, turkisk yoghurt, kapris och rödlök): sallad, rivna morötter och rödbetor och avokado.</td>
								<td><b>Very Berry:</b> Jordgubb, hallon, blåbär och äpple.</td>
							</tr>
							<tr>
								<td className="day"><b>ONSDAG</b></td>
								<td><b>Fetaost:</b> Sallad, rivna morötter och rödbetor agaverostade mandlar och äpple.</td>
								<td><b>L.O.L</b> (lemon, orange, lime) - Citron, apelsin, lime, äpple och mynta.</td>
							</tr>
							<tr>
								<td className="day"><b>TORSDAG</b></td>
								<td><b>Oumph:</b> Sallad, rivna morötter och rödbetor, mango och avokado.</td>
								<td><b>Passion:</b> Passionsfrukt, mango, hallon och apelsin.</td>
							</tr>
							<tr>
								<td className="day"><b>FREDAG</b></td>
								<td><b>Falafel:</b> Sallad, pico de gallo, rödbetor, tahinisås, sirachasås.</td>
								<td><b>Summerbreeze:</b> Jordgubbar, äpple, lime och mynta.</td>
							</tr>
						</tbody>
					</table>
				</main>
			</div>
		);
	}
}

export default LunchMenu;
import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

class About extends React.Component {
	render() {
		return (
			<div>
				<div className="hero-img" id="hero-about-us">
					<div id="hero">
						<h1>OM OSS</h1>
					</div>
				</div>
				<main id="about-us-content">
					<div id="about-us">
						<div id="about-us-msg">
							<h2>FRUITS & FRIENDS</h2>
							<p>Vi är en juicebar och ett hälsocafé med ditt, naturens
							och djurens välmående i fokus. Här serverar vi frukost,
							lunch och mellanmål med ett genomtänkt innehåll som
							du ska känna dig både mätt och rätt på.</p>

							<p>Härliga matiga sallader och wraps du kan hugga i farten eller
							smoothiebowls toppade med vår egna granola för att
							bara nämna några godsaker vi har på menyn.</p>

							<p>Vi försöker också jobba med att minska användningen
							av plast - därför får du t ex rabatt om du tar med dig
							en egen mugg till juicen.</p>

							<p>Vi älskar hundar så självklart är din fyrbenta kompis
							också välkommen!</p>
						</div>
					</div>

					<Splide id="image-carousel"
						options={{
							perPage: 4,
							perMove: 1,
							heightRatio: 0.25,
							gap: 12,
							pagination: false,
							breakpoints: {
								1024: {
									perPage: 3,
									heightRatio: 0.33,
								},
								768: {
									perPage: 2,
									heightRatio: 0.5,
								},
								568: {
									perPage: 1,
									heightRatio: 1,
								}
							}
						}}>
						<SplideSlide>
							<img src="resources/about-us-content/carousel1.jpg" alt="" />
						</SplideSlide>
						<SplideSlide>
							<img src="resources/about-us-content/carousel2.jpg" alt="" />
						</SplideSlide>
						<SplideSlide>
							<img src="resources/about-us-content/carousel3.jpg" alt="" />
						</SplideSlide>
						<SplideSlide>
							<img src="resources/about-us-content/carousel4.jpg" alt="" />
						</SplideSlide>
						<SplideSlide>
							<img src="resources/about-us-content/carousel5.jpg" alt="" />
						</SplideSlide>
						<SplideSlide>
							<img src="resources/about-us-content/carousel6.png" alt="" />
						</SplideSlide>
						<SplideSlide>
							<img src="resources/about-us-content/carousel7.png" alt="" />
						</SplideSlide>
						<SplideSlide>
							<img src="resources/about-us-content/carousel8.jpg" alt="" />
						</SplideSlide>
					</Splide>
				</main>
			</div>
		);
	}
}

export default About;
import React from "react";

class Hero extends React.Component {
	render() {
		return (
			<div className="hero-img" id={this.props.id}>
				<div id="hero">
					<img src="resources/index-content/logo.png" alt="Logga" id="logo" />
					<h1>JUICEBAR OCH HÄLSOCAFÉ</h1>
				</div>
			</div>
		);
	}
}

export default Hero;
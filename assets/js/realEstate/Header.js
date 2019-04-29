import React, { Component } from 'react';

export default class Header extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Burns'
		};
	}
	render() {
		return (
			<header>
				<div className="header-container">
					<div className="logo" />
					<div className="register-btn">
						<a href="#">Register</a>
					</div>
					<div className="nav1">
						<a href="#">Create Ads</a>
						<a href="#">About Us</a>
						<a href="#">Log In</a>
					</div>
				</div>
			</header>
		);
	}
}

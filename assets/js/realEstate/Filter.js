import React, { Component } from 'react';

export default class Filter extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Burns'
		};
		this.cities = this.cities.bind(this);
		this.homeTypes = this.homeTypes.bind(this);
		this.bedrooms = this.bedrooms.bind(this);
	}

	componentWillMount() {
		this.props.populateAction();
	}

	cities() {
		if (this.props.globalState.populateFormsData.cities != undefined) {
			var { cities } = this.props.globalState.populateFormsData;

			console.log(cities);

			return cities.map(item => {
				return (
					<option key={item} value={item}>
						{item}
					</option>
				);
			});
		}
	}

	homeTypes() {
		if (this.props.globalState.populateFormsData.homeTypes != undefined) {
			var { homeTypes } = this.props.globalState.populateFormsData;

			console.log(homeTypes);

			return homeTypes.map(item => {
				return (
					<option key={item} value={item}>
						{item}
					</option>
				);
			});
		}
	}

	bedrooms() {
		if (this.props.globalState.populateFormsData.bedrooms != undefined) {
			var { bedrooms } = this.props.globalState.populateFormsData;

			console.log(bedrooms);

			return bedrooms.map(item => {
				return (
					<option key={item} value={item}>
						{item}+ BR
					</option>
				);
			});
		}
	}

	render() {
		return (
			<section id="filter">
				<div className="inside">
					<h4>Filter</h4>
					<label for>City</label>
					<select
						name="city"
						className="filters city"
						onChange={this.props.change}
					>
						<option value="All">All</option>
						{this.cities()}
					</select>
					<label for>House Type</label>
					<select
						name="homeType"
						className="filters homeType"
						onChange={this.props.change}
					>
						<option value="All">All</option>
						{this.homeTypes()}
					</select>
					<label for>Rooms</label>
					<select name="rooms" className="rooms" onChange={this.props.change}>
						{this.bedrooms()}
					</select>
					<div className="filters price">
						<span className="title">Price</span>
						<input
							type="text"
							name="min_price"
							className="min_price"
							onChange={this.props.change}
							value={this.props.globalState.min_price}
						/>
						<input
							type="text"
							name="max_price"
							className="max-price"
							onChange={this.props.change}
							value={this.props.globalState.max_price}
						/>
					</div>
					<div className="filters floor-space">
						<span className="title">Floor Space</span>
						<input
							type="text"
							name="min_floor_space"
							className="min_floor_space"
							onChange={this.props.change}
							value={this.props.globalState.min_floor_space}
						/>
						<input
							type="text"
							name="max_floor_space"
							className="max_floor_space"
							onChange={this.props.change}
							value={this.props.globalState.max_floor_space}
						/>
					</div>

					<div className="filters extras">
						<span className="title">Extras</span>
						<label for="extras">
							<span>Elevators</span>{' '}
							<input
								name="elevator"
								value="elevator"
								type="checkbox"
								onChange={this.props.change}
							/>
						</label>
						<label for="extras">
							<span>Swimming Pool</span>{' '}
							<input
								name="swimming_pool"
								value="swimming_pool"
								type="checkbox"
								onChange={this.props.change}
							/>
						</label>
						<label for="extras">
							<span>Gym</span>{' '}
							<input
								name="gym"
								value="Gym"
								type="checkbox"
								onChange={this.props.change}
							/>
						</label>
					</div>
				</div>
			</section>
		);
	}
}

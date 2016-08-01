import React from 'react';
import ReactDOM from 'react-dom';
import "!style!css!resolve-url!sass?sourceMap!../scss/index.scss";


import SwingWatchSection from "./swingWatchSection.js";
import Team from "./team.js";
import Footer from "./footer.js";
import Header from "./header.js";

import howIcon1 from "../image/howItWork/how_icon1.png";
import howIcon2 from "../image/howItWork/how_icon2.png";
import howIcon3 from "../image/howItWork/how_icon3.png";

var Index = React.createClass({
	getInitialState: function(){
		return {
			user: {},
			watchList: [],
			showSignUserDialog: false
		}
	},

	componentDidMount: function(){
		this.$topSection = $('div.top_section');
		this.$topSection_container = $('div.container', this.$topSection);


		this.$topSection.css("height", this.getScreenSize().height);
		this.setCenter(this.$topSection_container);

	},

	getScreenSize: function(){
		return {
			height: $(window).height(),
			width: $(window).width()
		};
	},

	setCenter: function($element) {
		var screen = this.getScreenSize();
		var top = (screen.height / 2) - ($element.height() / 2);
		$element.css({
			'top': top
		})
	},

	render: function(){
		var separateSection = (text) => {
			return(
				<div className="separateLine row">
					<p className="columns eight">
						{text}
					</p>
				</div>
			)
		};

		var howItWork = () => {
			return (
				<div id="howItWork">
					<div className="title row">
						How It Works
					</div>

					<div className="row">
						<div className="column">
							<img src={howIcon1} />
						</div>
					</div>
					<div className="row description">
						<div className="title">Swing App</div>
						<div className="sub-title">Data Analysis Calendar Message Bluetooth</div>
					</div>

					<div className="row">
						<div className="greyLine"></div>
					</div>


					<div className="row">
						<div className="column">
							<img src={howIcon2} />
						</div>
					</div>

					<div className="row description">
						<div className="title">Cloud</div>
						<div className="sub-title">Big Data Analysis Cloud Security</div>
					</div>

					<div className="greyLine row"> </div>

					<div className="row">
						<div className="column">
							<img src={howIcon3} />
						</div>
					</div>

					<div className="row description">
						<div className="title">Swing Watch</div>
						<div className="sub-title">Educational Time UV & Activity Sensor</div>
					</div>
				</div>
			)
		};

		return (
			<div className="home">
				<Header/>
				<div className="top_section u-full-width">
					<div className="container">
						<div className="row">
							<div className="title column">
								The First Educational Smart Watch for Kids!
							</div>
						</div>
						<div className="row">
							<div className="sub-title column">
								Five functions to help children, development and giving them the best time to play, grow, and explore the world!
							</div>
						</div>
					</div>


				</div>
				<SwingWatchSection/>

				{separateSection("Simply turn on your Swing Watch, connect to your Swing app, and you are done")}

				{howItWork()}

				<div className="separateLine row preOrder">
				</div>

				<Team/>

				<Footer/>

			</div>
		)
	}
});


ReactDOM.render(<Index/>, document.getElementById('app'));

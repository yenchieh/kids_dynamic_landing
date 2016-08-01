import React from 'react';
import ReactDOM from 'react-dom';
import _ from "underscore";
import "!style!css!resolve-url!sass?sourceMap!../scss/index.scss";

import logo from "../image/main_logo_grey.png";

var Header = React.createClass({
	componentDidMount: function(){
		this.$header = $('div.header');
		var headerHeight = this.$header.height();
		$('span.swingWatchLink').on('click', this.$header, function(){
			$('html, body').animate({
				scrollTop: $('#swingWatch').offset().top - headerHeight
			});
		});

		$('span.howitworkLink').on('click', this.$header, function(){
			$('html, body').animate({
				scrollTop: $('#howItWork').offset().top - headerHeight
			});
		});

		$('span.outTeamLink').on('click', this.$header, function(){
			$('html, body').animate({
				scrollTop: $('#team').offset().top - headerHeight
			});
		});
	},

	render: function () {
		return (
			<div className="header row">
				<div>
					<div className="column">
						<img src={logo} />
					</div>
					<div className="">
						<span className="swingWatchLink">
							Swing Watch
						</span>
						<span className="howitworkLink">
							How It Works
						</span>
						<span className="outTeamLink">
							Our Team
						</span>
					</div>
				</div>
			</div>
		)
	}
});

export default Header;
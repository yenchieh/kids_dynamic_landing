import React from 'react';
import ReactDOM from 'react-dom';
import _ from "underscore";
import "!style!css!resolve-url!sass?sourceMap!../scss/index.scss";

var Team = React.createClass({
	getInitialState: function(){
		return {
			profiles: ['spencer', 'sean', 'peter', 'dan', 'kc', 'ava', 'bart', 'jeremy', 'jay', 'cyan', 'lena', 'shao wen']
		}
	},

	render: function(){
		var profile = this.state.profiles.map(function (profile, i) {

			var path = "http://www.kidsdynamic.com/image/profiles/" + profile.replace(' ', '') + ".png";
			return (
				<div className="profile">
					<img width="150px" src={path} />
					<div className="name">{profile}</div>
				</div>
			)
		}.bind(this));

		return (
			<div className="team" id="team">
				<div className="title row">Team</div>
				<div className="sub-title row">
					<p className="columns eight">Kids Dynamic is design for kids. Between parents and children, Swing creates new ways of time learning and kid's health tracking by a smart watch and service. Not only delivers a number also gives you the daily care and any growing needed.</p>
				</div>

				<div className="profiles row">
					{profile}
				</div>
				<div className="u-cf"></div>
			</div>
		)
	}
});

export default Team;
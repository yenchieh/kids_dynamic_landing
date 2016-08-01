import React from 'react';
import ReactDOM from 'react-dom';
import _ from "underscore";
import "!style!css!resolve-url!sass?sourceMap!../scss/index.scss";

var slides = {
	analysis: {
		title: "Data Analysis",
		"subTitle": "Provide analysis of your kid's activities and development milestones with Swing app and online platform"
	},
	activity: {
		title: "Activity Sensor",
		subTitle: "Monitor kid's activities and help you guide your little one to develop an active lifestyle"
	},
	uv: {
		title: "UV Sensor",
		subTitle: "Track UV exposure and help kids enjoy outdoor activities and the sunshine"
	},
	time: {
		title: "Educational Time",
		subTitle: "Help kids learn the concept of time and time management through Swing Watch and Swing App"
	},
	reminder: {
		title: "Reminder",
		subTitle: "Receive alert on your mobile device regarding if your kid is meeting certain goals, including level of activity and UV exposure"
	}
};

var SwingWatchSection = React.createClass({
	getInitialState: function(){
		return {
			slideShow: "activity",
			slide: {}
		}
	},

	componentDidMount: function(){
		this.$slideShow = $('div.slideShow');
		this.$options = $('div.options');
		this.$slideOption = $('div.option', this.$options);
		$("div.analysis", this.$options).trigger('click');
	},

	slideButtonClicked: function(e) {
		var slide = e.target.attributes["data-main"].value;
		this.setState({
			slide: slides[slide]
		});

		_.each($('div.active', this.$options), function(ele){
			$(ele).removeClass('active');
		});
		$(e.target).addClass('active');

		$("div.image", this.$slideShow).removeClass().addClass("image columns six").addClass(slide);

	},


	render: function(){
		var slideShow = () => {
			return (
				<div className="slideShow container">

					<div className="row">
						<div className="image columns six"></div>
						<div className="columns five description">
							<div className="title">
								{this.state.slide.title}
							</div>
							<div className="sub-title">
								{this.state.slide.subTitle}
							</div>
						</div>
					</div>

					</div>
			)
		};

		return (
				<div className="swingWatchSection u-full-width" id="swingWatch">
					<div className="container">
							<div className="row options">
								<div className="icon option analysis column u-pull-left" onClick={this.slideButtonClicked} data-main="analysis">
								</div>
								<div className="icon option activity column u-pull-left" onClick={this.slideButtonClicked} data-main="activity">
								</div>
								<div className="icon uv option column u-pull-left " onClick={this.slideButtonClicked} data-main="uv">
								</div>
								<div className="icon time option column u-pull-left" onClick={this.slideButtonClicked} data-main="time">
								</div>
								<div className="icon reminder option column u-pull-left" onClick={this.slideButtonClicked} data-main="reminder">
								</div>
								<div className="u-cf"></div>
							</div>
						</div>

					{slideShow()}

				</div>
		)
	}
});

export default SwingWatchSection;
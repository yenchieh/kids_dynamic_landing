import React from 'react';
import ReactDOM from 'react-dom';
import _ from "underscore";
import "!style!css!resolve-url!sass?sourceMap!../scss/index.scss";

import mailIcon from "../image/emailAddress.png";
import twitterIcon from "../image/social/twitter.png";
import instagramIcon from "../image/social/instagram.png";
import facebookIcon from "../image/social/facebook.png";
import linkinIcon from "../image/social/linkin.png";

var Footer = React.createClass({

	render: function(){
		return (
			<div className="footer row separateLine">
				<div className="columns five">
					Kids Dynamics All Rights Reserved. | Tech Support
				</div>
				<div className="columns three">
					<img src={mailIcon} /><a href="mailto:info@kidsdynamic.com">info@kidsdynamic.com</a>
				</div>

				<div className="columns three u-pull-right">
					<a href="https://www.facebook.com/kidsDynamic/" target="_blank"><img src={facebookIcon} /></a>
					<img src={twitterIcon} />
					<img src={instagramIcon} />
					<a href=" https://www.linkedin.com/company/6644283" target="_blank"><img src={linkinIcon}/></a>
				</div>
			</div>
		)
	}
});

export default Footer;
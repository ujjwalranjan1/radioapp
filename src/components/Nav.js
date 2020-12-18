import React, { Component } from 'react';
import './temp.css'; // Tell webpack that Button.js uses these styles

class Nav extends Component {
  render() 
  {
  	return(
  		<div>
			<img  className="left" src="./icons/left.svg"></img>
			<img  className="right" src="./icons/right.svg"></img>
			<img  className="bell" src="./icons/bell.svg"></img>
			<img  className="settings" src="./icons/settings.svg"></img>
			<div className="search"></div>
			<div className="toptest">Search for track, artist or album…</div>
		  </div>
  		);
  	}
  }
  export default Nav
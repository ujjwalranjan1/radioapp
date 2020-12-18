import React, { Component } from 'react';
import './temp.css'; // Tell webpack that Button.js uses these styles

class Foot extends Component {
  render() 
  {
  	return(
  		<div>
			<div className="foot"></div>
			<div className="write"></div>
			<div className="moon">Moon Gazing</div>
			<div className="helen">Helen Stone</div>
			<img  className="rotate" src="./icons/rotate.svg"></img>
			<img  className="rewind" src="./icons/rewind.svg"></img>
		 	<img className="oval" src="./icons/oval.svg"></img>
			<img className="pause" src="./icons/pause.svg"></img>
			<img className="fast" src="./icons/fast.svg"></img>
			<img className="shuffle" src="./icons/shuffle.svg"></img>
			<div className="timer"></div>
			<div className="one">1:50</div>
			<div className="line2"></div>
			<div className="line1"></div>
			<img className="ovalsmall" src="./icons/oval.svg"></img>
			<div className="two">2:50</div>
			<div className="up">Up Next</div>
			<div className="winnie">Winnie Gordon</div>
		</div>

		);
  	}
  }
  export default Foot
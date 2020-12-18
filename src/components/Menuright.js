import React, { Component } from 'react';
import './temp.css'; // Tell webpack that Button.js uses these styles

class Menuright extends Component {
  render() {


    return(
 
    	<div className="happydoing">
    	<div className="box"></div>
		<div className="siderec"></div>
		<div className="free">FREE</div>
		<div className="user"></div>
		<div className="michel">Michelle Dunkin</div>
		<div className="los">Los Angeles</div>
		<img  className="ovalbg" src="./icons/oval.svg"></img>
		<img  className="users" src="./icons/artist.svg"></img>
		<img  className="ovalbg1" src="./icons/ovalbg1.svg"></img>
		<img  className="likes" src="./icons/heartorange.svg"></img>
		<img  className="ovalbg2" src="./icons/ovalbg2.svg"></img>
		<img  className="music" src="./icons/albums.svg"></img>
		<div className="friends">Friends</div>
		<div className="liketext">Likes</div>
		<div className="playtest">Playlist</div>
		<img  className="folder" src="./icons/Folder.svg"></img>
		<div className="recfol"></div>
		<div className="upgradeline">Upgrade to PRO for more benefits</div>
		<div className="upgraderec"></div>
		<div className="upgradetext">Upgrade</div>
    </div>
    );
  }
}

export default Menuright
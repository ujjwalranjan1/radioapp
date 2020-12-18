import React, { Component } from 'react';
import './temp.css'; // Tell webpack that Button.js uses these styles

class Menu extends Component {
  render() {


    return(
    <div>
    <div className="navback">
    <div className="box1">
     <img  src={"icons/Logo.svg"}></img>
    
   
    </div>
    <img  className="home" src="./icons/Home.svg"></img>
    <div className="b1a same">Home</div>
    <img  className="globe" src="./icons/globe.svg"></img>
    <div className="b1b same">Browse</div>
    <img  className="rad" src="./icons/radio.svg"></img>
    <div className="b1c same">Radio</div>
    <img  className="artist" src="./icons/artist.svg"></img>
    <div className="b1d same">Artist</div>
    <img  className="albums" src="./icons/albums.svg"></img>
    <div className="b1e same">Albums</div>

    <div className="box2">My Music</div>
    <img  className="recent" src="./icons/recent.svg"></img>
    <div className="box2a same">Recently Played</div>
    <img  className="fav" src="./icons/fav.svg"></img>
    <div className="box2b same">Favourite</div>
    <img  className="download" src="./icons/download.svg"></img>
    <div className="box2c same">Downloaded</div>
    
    <div className="box3">Playlist</div>
    <img  className="workout" src="./icons/workout.svg"></img>
    <div className="box3a same">Workout</div>
    <img  className="yoga" src="./icons/yoga.svg"></img>
    <div className="box3b same">Yoga</div>
    <img  className="commute" src="./icons/commute.svg"></img>
    <div className="box3c same">Commute</div>
    <img  className="add" src="./icons/add.svg"></img>
    <div className="box4">Add New Playlist</div>
   </div>
     
    </div>
    );
  }
}

export default Menu
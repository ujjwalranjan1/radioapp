import React, { Component } from 'react';
import ReactDOM from "react-dom";
import './temp.css'; // Tell webpack that Button.js uses these styles
import Content2 from './Content2';
import Menuright from './Menuright';
class Content extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.myMethod=this.myMethod.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.myMethod();
  }
  myMethod() {
      const pk=document.querySelectorAll('.masterstroke');
      const ck=document.querySelectorAll('.gamechanger');
      pk.forEach(item => {
        item.classList.add('notshow');
      });

      ck.forEach(item => {
        item.classList.add('show');
      });
    }

  render() {
    return(
    <div>
      <Content2 />
       <Menuright />
      <div className="masterstroke">
      <div className="head1">Radio</div>

      <div className="card card1">
        <div className="rectangle rectangle1" onClick={this.handleClick}>
          <div className="radio">Radio</div>
        </div>
        <div className="text">Home Radio</div>
      </div>

      <div className="card card2">
        <div className="rectangle rectangle2">
          <div className="radio">Radio</div>
       </div>
        <div className="text textbroadcast">Broadcast Radio</div>
      </div>

      <div className="card card3">
        <div className="rectangle rectangle3">
          <div className="radio">Radio</div>
        </div>
        <div className="text">Home Radio</div>
      </div>

      <div className="card card4">
        <div className="rectangle rectangle4">
          <div className="radio">Radio</div>
        </div>
        <div className="text">Space Radio</div>
      </div>

      <div className="card card5">
        <div className="rectangle rectangle5">
         <div className="radio">Radio</div>
        </div>
        <div className="text textbroadcast">Broadcast Radio</div>
      </div> 
    </div>
    </div>
    );
  }
}

export default Content
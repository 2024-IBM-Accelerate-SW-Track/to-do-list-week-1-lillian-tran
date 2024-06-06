import "./About.css";
import lillianImage from "../assets/lillian.jpg";

import React, { Component } from 'react';
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div className="split left">
          <div className="centered">
          <img className="profile_image"
            src={lillianImage}
          alt="Profile Pic"></img>
        </div>
        </div>
        <div className="split right">
        <div className="centered">
        <div className="name_title">Lillian Tran</div>
        <div className="brief_description">
          Hi! My name is Lillian and I'm a born and raised New Yorker 
          currently studying computer science @ Tufts. 
        </div>
        </div>
        </div>
        </div>
    )
  }
}
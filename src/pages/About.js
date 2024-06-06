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
          Hi - nice to meet you, my name is Lillian! I'm a born and raised 
          New Yorker currently studying computer science @ Tufts (as a rising 
          junior). 
          My interests include cafe hopping and exploring museums! A fun 
          fact about me is that I don't have my driver's license yet (but I'm 
          working on it)! 
          <br></br>
          :) 
        </div>
        </div>
        </div>
        </div>
    )
  }
}
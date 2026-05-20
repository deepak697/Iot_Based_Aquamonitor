import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';  // Import Link
import smart from './../images/logo.png';

function myFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") === -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

const Nav = () => (
  <div>
    <div className="w3-top">
      <div className="w3-bar w3-black w3-card">
        <a className="w3-bar-item w3-button w3-padding-large w3-hide-medium w3-hide-large w3-left" href="javascript:void(0)" onClick={myFunction} title="Toggle Navigation Menu">
          <i className="fa fa-bars"></i>
        </a>
        <Link to="/" className="w3-bar-item w3-button w3-padding-large w3-hide-small">
          <i className='col'>IoT Based AquaMonitor</i>
        </Link>
        <Link to="/" className="w3-bar-item w3-button w3-padding-large w3-hide-small">HOME</Link>
        <Link to="/feed" className="w3-bar-item w3-button w3-padding-large w3-hide-small">Feed</Link>
        <div className="w3-dropdown-hover w3-hide-small">
          <button className="w3-padding-large w3-button" title="More">MORE <i className="fa fa-caret-down"></i></button>     
          <div className="w3-dropdown-content w3-bar-block w3-card-4">
            <Link to="/WaterMonitor" className="w3-bar-item w3-button">Water Monitoring</Link>
            <Link to="/alerts" className="w3-bar-item w3-button w3-padding-large">Alerts</Link>
          </div>
        </div>
        
        <a href="javascript:void(0)" className="w3-padding-large w3-hover-red w3-right">
          <i className="fa fa-search"></i>
        </a>
      </div>
    </div>

    <div id="navDemo" className="w3-bar-block w3-black w3-hide w3-hide-large w3-hide-medium w3-top">
    <Link to="/" className="w3-bar-item w3-button w3-padding-large" onClick={myFunction}>HOME</Link>
      <Link to="/feed" className="w3-bar-item w3-button w3-padding-large" onClick={myFunction}>Feed</Link>
      <Link to="/WaterMonitor" className="w3-bar-item w3-button w3-padding-large" onClick={myFunction}>Water Monitoring</Link>
      <Link to="/alerts" className="w3-bar-item w3-button w3-padding-large" onClick={myFunction}>Alerts</Link>
      
    </div>
  </div>
);

export default Nav;

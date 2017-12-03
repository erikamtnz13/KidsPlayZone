import React from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../imgs/home-icon.png';
import profileIcon from '../imgs/profile-icon.png';
import memberIcon from '../imgs/member-icon.png';
import gameIcon from '../imgs/game-icon.png';
import videoIcon from '../imgs/video-icon.png';
import logoutIcon from '../imgs/logout-icon.png';
import "./navpills.css";
console.log(homeIcon)

const Navpills = ({children}) =>
  <div className="container">
    <ul className="nav nav-tabs">
      <li className={window.location.pathname === "/home" ? "active" : ""}>
        <Link to="/home">    <img src={homeIcon} alt={"logo"}/></Link>
      </li>
      <li className={window.location.pathname === "/profile" ? "active" : ""}>
        <Link to="/profile"><img src={profileIcon} alt={"logo"}/></Link>
      </li>
      <li className={window.location.pathname === "/members" ? "active" : ""}>
        <Link to="/members"><img src={memberIcon} alt={"logo"}/></Link>
      </li>
      <li className={window.location.pathname === "/games" ? "active" : ""}>
        <Link to="/games"><img src={gameIcon} alt={"logo"}/></Link>
      </li>
      <li
        className={window.location.pathname === "/videos" ? "active" : ""}
      >
        <Link to="/videos"><img src={videoIcon} alt={"logo"}/></Link>
      </li>
      <li className={window.location.pathname === "/logout" ? "active" : ""}>
        <Link to="/logout"><img src={logoutIcon} alt={"logo"}/></Link>
      </li>
    </ul>
  {children}
  </div>;

export default Navpills;
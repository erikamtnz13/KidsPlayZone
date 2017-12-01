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

      <div class="ih-item circle effect15 left_to_right">
        <li className={window.location.pathname === "/" ? "active" : ""}>
          <Link to="/"><div class="img"><img src={homeIcon} alt={"logo"}/></div><div class="info"><h3 class="iconName">Home</h3></div></Link>
        </li>
      </div>

      <div class="ih-item circle effect15 left_to_right">
        <li className={window.location.pathname === "/profile" ? "active" : ""}>
          <Link to="/profile"><div class="img"><img src={profileIcon} alt={"logo"}/></div><div class="info"><h3 class="iconName">Profile</h3></div></Link>
        </li>
      </div>

      <div class="ih-item circle effect15 left_to_right">
        <li className={window.location.pathname === "/members" ? "active" : ""}>
          <Link to="/members"><div class="img"><img src={memberIcon} alt={"logo"}/></div><div class="info"><h3 class="iconName">Members</h3></div></Link>
        </li>
      </div>

      <div class="ih-item circle effect15 left_to_right">
        <li className={window.location.pathname === "/games" ? "active" : ""}>
          <Link to="/games"><div class="img"><img src={gameIcon} alt={"logo"}/></div><div class="info"><h3 class="iconName">Games</h3></div></Link>
        </li>
      </div>

      <div class="ih-item circle effect15 left_to_right">
        <li
          className={window.location.pathname === "/videos" ? "active" : ""}
        >
          <Link to="/videos"><div class="img"><img src={videoIcon} alt={"logo"}/></div><div class="info"><h3 class="iconName">Videos</h3></div></Link>
        </li>
      </div>

      <div class="ih-item circle effect15 left_to_right">
        <li className={window.location.pathname === "/logout" ? "active" : ""}>
          <Link to="/logout"><div class="img"><img src={logoutIcon} alt={"logo"}/></div><div class="info"><h3 class="iconName">Log Out</h3></div></Link>
        </li>
      </div>
    </ul>
  {children}
  </div>;

export default Navpills;
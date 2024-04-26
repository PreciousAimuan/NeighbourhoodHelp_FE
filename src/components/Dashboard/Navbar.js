import React from 'react'
import './Navbar.css'
import profile_img from "../../assets/images/Ellipse.png";
import notification_logo from "../../assets/images/notification.png";
const Navbar = () => {
  return (
    <div className='navbarr'>
       <div className="profile-pic-notification-logo">
        <a href="/">
        <img src={notification_logo} alt="notification-logo" className="notification-logo"/>
        </a>
        <a href="/">
        <img src={profile_img} alt="profile-pic" />
        </a>
      </div> 
    </div>
  );
}

export default Navbar
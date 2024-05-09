import React from 'react'
import './Navbar.css'
import profile_img from "../../assets/images/Ellipse.png";
import notification_logo from "../../assets/images/notification.png";
const Navbar = ({userImage}) => {
  return (
    <div className='navbarr'>
       <div className="profile-pic-notification-logo">
        
        <img src={notification_logo} alt="notification-logo" className="notification-logo"/>
        
        
        {/* <img src={userImage} alt="profile-pic" className="profile-pic" /> */}
        
      </div> 
    </div>
  );
}

export default Navbar
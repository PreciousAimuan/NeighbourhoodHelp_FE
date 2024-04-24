import React from "react";
import "./Dashboard_sidebar.css";
import Dashboard_logo from "../../assets/images/home.png";
import Logout_logo from "../../assets/images/logout.png";
import folder_logo from "../../assets/images/folder.png";
import Discover_logo from "../../assets/images/discover.png";
import Profile_logo from "../../assets/images/profile.png";
import profile_img from "../../assets/images/Ellipse.png";
import notification_logo from "../../assets/images/notification.png";

const Dashboard_sidebar = () => {
  return (
    <div className="containerss">
      <div className="dashboard-sidebar">
        <div className="dsh">
          <h3 className="logo-footer">Neighbourhood Help</h3>
        </div>
        <div className="dashboard-left-nav">
          <div className="overview">
            <p>Overview</p>
            <div className="overview-menu">
              <div className="dash">
                <img src={Dashboard_logo} alt="Dashboard logo" />
                <h4>
                  <a href="/">Dashboard</a>
                </h4>
              </div>
              <div className="dash">
                <img src={Discover_logo} alt="Track logo" />
                <h4>
                  <a href="/">Track</a>
                </h4>
              </div>
              <div className="dash">
                <img src={folder_logo} alt="History logo" />
                <h4>
                  <a href="/">History</a>
                </h4>
              </div>
            </div>
          </div>

          <div className="others">
            <p>Others</p>

            <div className="others-menu">
              <div className="dash">
                <img src={Profile_logo} alt="Profile logo" />
                <h4>
                  <a href="/">Profile</a>
                </h4>
              </div>
              <div className="dash">
                <img src={Logout_logo} alt="Logout logo" />
                <h4>
                  <a href="/">Logout</a>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="profile-pic-notification-logo">
        <a href="/">
        <img src={notification_logo} alt="notification-logo" className="notification-logo"/>
        </a>
        <a href="/">
        <img src={profile_img} alt="profile-pic" />
        </a>
      </div> */}
    </div>
  );
};
export default Dashboard_sidebar;

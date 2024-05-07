import React from "react";
import "./Dashboard_sidebar.css";
import Dashboard_logo from "../../assets/images/home.png";
import Logout_logo from "../../assets/images/logout.png";
import folder_logo from "../../assets/images/folder.png";
import Discover_logo from "../../assets/images/discover.png";
import Profile_logo from "../../assets/images/profile.png";
import { Link, useNavigate } from "react-router-dom";
import profile_img from "../../assets/images/Ellipse.png";
import notification_logo from "../../assets/images/notification.png";

const Dashboard_sidebar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Logic to handle logout, such as clearing local storage, redirecting to login page, etc.
    // localStorage.clear();
    navigate("/login");
  };
  return (
    <div className="containerss">
      <div className="dashboard-sidebar">
        <div className="dsh">
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
                    <a href="/user-dashboard">Dashboard</a>
                  </h4>
                </div>
                {/* <div className="dash">
                  <img src={Discover_logo} alt="Track logo" />
                  <h4>
                    <a href="/">Track</a>
                  </h4>
                </div> */}
                <div className="dash">
                  <img src={folder_logo} alt="History logo" />
                  <h4>
                    <a href="/agent-dashboard/history">History</a>
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
                    <a href="/userProfileUpdate">Profile</a>
                  </h4>
                </div>
                <div className="dash">
                  <img src={Logout_logo} alt="Logout logo" />
                  <h4>
                    <a onClick={handleLogout} id="logout-btn-cursor">Logout</a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard_sidebar;

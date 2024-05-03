
import React from "react";
import Pic from "../../assets/images/pic.jpg";
import Star from "../../assets/images/star.svg";
import Box from "../../assets/images/box.svg";
import "./AgentDetails.css";

const UserDetails = ({ agent }) => {

    const userFirstname = JSON.parse(localStorage.getItem('userFirstname'))
    const userLastname = JSON.parse(localStorage.getItem('userLastname'))
    const userPhoneNumber = JSON.parse(localStorage.getItem('userPhoneNumber'))
    const userEmail = JSON.parse(localStorage.getItem('userEmail'))
    //const price = JSON.parse(localStorage.getItem('price'))

  return (
    <div>
      <div className="trackingdiv">
        <div className="tracking">
          <div className="boxx">
            <div className="vuesaxbulkbox-search">
              <img className="box-search" src={Box} alt="" />
            </div>
          </div>
          <span className="tracking-activity">Tracking Activity</span>
        </div>
        <div className="view-progress">View Progress</div>
      </div>
      <div className="top-half">
        <div className="blue-left">
          <div className="agent-pic">
            <img className="vector" src={Pic} alt="" />
          </div>
          <div className="more">
            <div className="agent-name">{userFirstname} {userLastname}</div>
            <div className="group-3105">
              <span className="tell-us-more-1">3</span>
              <img className="star" src={Star} alt="" />
            </div>
          </div>
        </div>
        <div className="price">
            Amount: {agent.message.price}
        </div>
        <div className="bright">
          <div className="tell-us-more-7">{userPhoneNumber}</div>
          <div className="brg">
            <div className="tell-us-more-8">{userEmail}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;


// import React from "react";
// import Pic from "../../assets/images/pic.jpg";
// import Star from "../../assets/images/star.svg";
// //import Copy from "../../assets/images/copy.svg";
// import Box from "../../assets/images/box.svg";
// import "./AgentDetails.css";

// //const agentName = "flo"

// const agent = JSON.parse(localStorage.getItem('agent'))
// const rating = JSON.parse(localStorage.getItem('rating'))

// const AgentDetails = () => {
//   return (
//     <div>
//       <div className="trackingdiv">
//         <div className="tracking">
//           <div className="boxx">
//             <div className="vuesaxbulkbox-search">
//               <img className="box-search" src={Box} alt="" />
//             </div>
//           </div>
//           <span className="tracking-activity">Tracking Activity</span>
//         </div>
//         <div className="view-progress">View Progress</div>
//       </div>
//       <div className="top-half">
//         <div className="blue-left">
//           <div className="agent-pic">
//             <img className="vector" src={Pic} alt="" />
//           </div>
//           <div className="more">
//             <div className="agent-name">{agent.firstName + " " + agent.lastName}</div>
//             <div className="group-3105">
//               <span className="tell-us-more-1">{rating}</span>
//               <img className="star" src={Star} alt="" />
//               {/* <span className="tell-us-more-2">(23)</span> */}
//             </div>
//           </div>
//         </div>
//         <div className="bright">
//           <div className="tell-us-more-7">{agent.phoneNumber}</div>
//           <div className="brg">
//             <div className="tell-us-more-8">{agent.email}</div>
//             {/* <div className="vuesaxbulkcopy">
//               <img className="copy" src={Copy} alt="" />
//             </div> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AgentDetails;

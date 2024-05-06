
import React, { useState, useEffect } from 'react';
import Sidebar from "../../components/Dashboard/Dashboard_sidebar";
import UserDetails from "../../components/ActivityTracking/UserDetails";
import AgentNegotiatePrice from "../../components/NegotiatePrice/AgentNegotiatePrice";

import Dashboardrecenterrands from '../../components/Dashboardrecenterrands/Dashboardrecenterrands'
import "../Recenterrands/Recenterrands.css"


const AgentDashboard = () => {
  const [errandCreated, setErrandCreated] = useState(false);
  const [responseData2, setResponseData2] = useState(null);

  useEffect(() => {
    const errandCreatedFromStorage = JSON.parse(localStorage.getItem('errandCreated'));
    setErrandCreated(errandCreatedFromStorage);

    // Fetch response data if an errand has been created
    if (errandCreatedFromStorage) {
      const responseDataFromStorage = JSON.parse(localStorage.getItem('responseData2'));
      setResponseData2(responseDataFromStorage);
    }
  }, []);

  return (
    <div className="dashboard">
      <Sidebar />
      <div>

        
        <Dashboardrecenterrands/>
        <div className="activity">

        {errandCreated && (
          <React.Fragment>
            <UserDetails />
            <AgentNegotiatePrice />
          </React.Fragment>
        )}

        </div>

      </div>
    </div>
  );
}

export default AgentDashboard;



// import React, { useState, useEffect } from 'react';
// import Sidebar from "../../components/Dashboard/Dashboard_sidebar";
// import UserDetails from "../../components/ActivityTracking/UserDetails";
// import AgentNegotiatePrice from "../../components/NegotiatePrice/AgentNegotiatePrice";

// const AgentDashboard = () => {
//   const [errandCreated, setErrandCreated] = useState(false);
//   const [responseData2, setResponseData2] = useState(null);
//   const [negotiateVisible, setNegotiateVisible] = useState(true); // State to control visibility

//   useEffect(() => {
//     const errandCreatedFromStorage = JSON.parse(localStorage.getItem('errandCreated'));
//     setErrandCreated(errandCreatedFromStorage);

//     // Fetch response data if an errand has been created
//     if (errandCreatedFromStorage) {
//       const responseDataFromStorage = JSON.parse(localStorage.getItem('responseData2'));
//       setResponseData2(responseDataFromStorage);
//     }
//   }, []);

//   // Function to handle acceptance or decline
//   const handleAcceptDecline = () => {
//     setNegotiateVisible(false); // Hide the negotiation component
//   };

//   return (
//     <div className="dashboard">
//       <Sidebar />
//       <div>
//         {errandCreated && (
//           <React.Fragment>
//             <UserDetails />
//             {negotiateVisible && <AgentNegotiatePrice onAcceptDecline={handleAcceptDecline} />}
//           </React.Fragment>
//         )}
//       </div>
//     </div>
//   );
// }

// export default AgentDashboard;


// // AgentDashboard.js
// import React, { useState, useEffect } from 'react';
// import Sidebar from "../../components/Dashboard/Dashboard_sidebar";
// import UserDetails from "../../components/ActivityTracking/UserDetails";
// import AgentNegotiatePrice from "../../components/NegotiatePrice/AgentNegotiatePrice";

// const AgentDashboard = () => {
//   const [errandCreated, setErrandCreated] = useState(false);
//   const [responseData2, setResponseData2] = useState(null);
//   const [showNegotiatePrice, setShowNegotiatePrice] = useState(true);

//   useEffect(() => {
//     const errandCreatedFromStorage = JSON.parse(localStorage.getItem('errandCreated'));
//     setErrandCreated(errandCreatedFromStorage);

//     // Fetch response data if an errand has been created
//     if (errandCreatedFromStorage) {
//       const responseDataFromStorage = JSON.parse(localStorage.getItem('responseData2'));
//       setResponseData2(responseDataFromStorage);
//     }
//   }, []);

//   const handleAcceptDecline = () => {
//     setShowNegotiatePrice(false); // Set to false when accept or decline button is clicked
//   };

//   return (
//     <div className="dashboard">
//       <Sidebar />
//       <div>
//         {errandCreated && showNegotiatePrice && (
//           <React.Fragment>
//             <UserDetails />
//             <AgentNegotiatePrice onAcceptDecline={handleAcceptDecline} />
//           </React.Fragment>
//         )}
//         {errandCreated && !showNegotiatePrice && <UserDetails />}
//       </div>
//     </div>
//   );
// }

// export default AgentDashboard;


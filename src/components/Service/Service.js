import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Service.css";
import DeleteIcon from "../../assets/images/delete_icon.png";
import ExportIcon from "../../assets/images/export_icon.png";

const ServiceTable = ({ agentId }) => {
  const [errands, setErrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedUserId = localStorage.getItem("userId");
        const storedRole = localStorage.getItem("role");

        if (storedUserId) {
          const response = await axios.get(
            `https://localhost:7198/api/Errand/get-errands-by-agentId/${agentId}`,
            {
              params: {
                pageNumber: 1,
                pageSize: 10,
              },
            }
          );
          setErrands(response.data);
        }
      } catch (error) {
        console.error("Error fetching errands:", error);
        setError("No Errands founds");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [agentId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="service-table-container">
      <div className="header">
        <div className="left-texts">
          <h2 className="header-text">Log Of Completed and Canceled Errands</h2>
          <p className="sub-header-text">
            This table provides a clear overview of the agent's errand history
          </p>
        </div>
        <div className="action-buttons">
          <div className="action-button">
            <img src={DeleteIcon} alt="Delete" className="icon" />
            <span>Delete</span>
          </div>
          <div className="action-button">
            <img src={ExportIcon} alt="Export" className="icon" />
            <span>Export</span>
          </div>
        </div>
      </div>
      <hr className="separator" />
      <table className="service-table">
        <thead>
          <tr>
            <th>User name</th>
            <th>Pickup Location</th>
            <th>Delivery Location</th>
            <th>Completion Date & Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {errands.map((item, index) => (
            <tr key={index}>
              <td>{item.username}</td>
              <td>{item.pickupLocation}</td>
              <td>{item.deliveryLocation}</td>
              <td>{item.completionDateTime}</td>
              <td
                style={{
                  color: item.status === "Completed" ? "green" : "inherit",
                }}
              >
                {item.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServiceTable;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./Service.css";
// import DeleteIcon from "../../assets/images/delete_icon.png";
// import ExportIcon from "../../assets/images/export_icon.png";

// const ServiceTable = ({agentId}) => {
//   const [errands, setErrands] = useState([]);
// const[userId, setUserId] = useState("");
// const[role, setRole] = useState("");
//   useEffect(() => {
//     const agentId = localStorage.getItem("userId");
//     const role = localStorage.getItem("role");
//     if (userId && (role === "Agent")) {
//       setUserId(agentId);
//       setRole(role);
//     }
//   }, []);
//     const fetchErrands = async () => {
//       try {
//         const response = await axios.get(
//           `https://localhost:7198/api/Errand/get-errands-by-agentId/`,
//           {
//             // Pass pagination parameters if needed
//             params: {
//                 agentId: agentId,
//               pageNumber: 1,
//               pageSize: 10,
//             },
//           }
//         );
//         setErrands(response.data);
//       } catch (error) {
//         console.error("Error fetching errands:", error);
//       }
//     };

//     fetchErrands();
//   }, []); // Empty dependency array to fetch errands only once on component mount

//   return (
//     <div className="service-table-container">
//       <div className="header">
//         <div className="left-texts">
//           <h2 className="header-text">Log Of Completed and Canceled Errands</h2>
//           <p className="sub-header-text">
//             This table provides a clear overview of the agents errand history
//           </p>
//         </div>
//         <div className="action-buttons">
//           <div className="action-button">
//             <img src={DeleteIcon} alt="Delete" className="icon" />
//             <span>Delete</span>
//           </div>
//           <div className="action-button">
//             <img src={ExportIcon} alt="Export" className="icon" />
//             <span>Export</span>
//           </div>
//         </div>
//       </div>
//       <hr className="separator" />
//       <table className="service-table">
//         <thead>
//           <tr>
//             <th>User name</th>
//             <th>Pickup Location</th>
//             <th>Delivery Location</th>
//             <th>Completion Date & Time</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {errands.map((item, index) => (
//             <tr key={index}>
//               <td>
//                 <b>{item.username}</b>
//               </td>
//               <td>
//                 <b>{item.pickupLocation}</b>
//               </td>
//               <td>
//                 <b>{item.deliveryLocation}</b>
//               </td>
//               <td>
//                 <b>{item.completionDateTime}</b>
//               </td>
//               <td
//                 style={{
//                   color: item.status === "Completed" ? "green" : "inherit",
//                 }}
//               >
//                 {item.status}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ServiceTable;

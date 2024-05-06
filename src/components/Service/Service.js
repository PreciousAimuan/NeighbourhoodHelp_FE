import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Service.css";
import DeleteIcon from "../../assets/images/delete_icon.png";
import ExportIcon from "../../assets/images/export_icon.png";

const ServiceTable = () => {
  const [errands, setErrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [agentId, setAgentId] = useState("");
  useEffect(() => {
    const storedAgentId = localStorage.getItem("agentId");
    const agentId = storedAgentId ? JSON.parse(storedAgentId) : null;
    if (storedAgentId) {
      setAgentId(storedAgentId);
    }

    const fetchData = async () => {
      try {
        const storedUserId = localStorage.getItem("userId");
        const storedRole = localStorage.getItem("role");

        if (storedUserId) {
          const response = await axios.get(
            `https://localhost:7198/api/Errand/get-errands-by-agentId?agentId=${agentId}`,
            {
              params: {
                pageNumber: 1,
                pageSize: 10,
              },
            }
          );
          if (response.data.$values) {
            setErrands(response.data.$values);
            console.log(response.data.$values);
          } else {
            setErrands([]); // Handle case when $values is not present
            console.error("Invalid response format: $values not found");
            setError("Invalid response format");
          }
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
          <h2 className="header-text">Errand Log</h2>
          <p className="sub-header-text">
            History of errands assigned to this agent
          </p>
        </div>
        {/* <div className="action-buttons">
          <div className="action-button">
            <img src={DeleteIcon} alt="Delete" className="icon" />
            <span>Delete</span>
          </div>
          <div className="action-button">
            <img src={ExportIcon} alt="Export" className="icon" />
            <span>Export</span>
          </div>
        </div> */}
      </div>
      <hr className="separator" />
      <table className="service-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Postal Code</th>
            <th>Price</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {errands.map((item, index) => (
            <tr key={index}>
              <td>{item.itemName}</td>
              <td>{item.quantity}</td>
              <td>{item.postalCode}</td>
              <td>{item.price}</td>
              <td
                style={{
                  color: item.status === "Completed" ? "green" : "inherit",
                }}
              >
                {item.date}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServiceTable;

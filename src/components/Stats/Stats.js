import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Stats.css";

const Stats = () => {
  const [totalMoney, setTotalMoney] = useState(0);
  const [totalErrands, setTotalErrands] = useState(0);
  const [agentId, setAgentId] = useState("");

  useEffect(() => {
    // const agentId = JSON.parse(localStorage.getItem("agentId"));
    const storedAgentId = localStorage.getItem("agentId");
    const agentId = storedAgentId ? JSON.parse(storedAgentId) : null;

    if (storedAgentId) {
      setAgentId(storedAgentId);
    }
    const fetchStats = async () => {
      try {
        console.log(agentId);
        const errandsResponse = await axios.get(
          `https://localhost:7198/api/Errand/completed-errands/${agentId}`
        );
        console.log(agentId);
        const errandsData = errandsResponse.data;
        setTotalErrands(errandsData);

        console.log(errandsData);

        const earningsResponse = await axios.get(
          `https://localhost:7198/api/Errand/total-earned/${agentId}`
        );
        const earningsData = earningsResponse.data;
        setTotalMoney(earningsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchStats();
  }, [agentId]);

  return (
    <div className="stats">
      <div className="totalerrands">
        <p>Total number of errands</p>
        <p className="total">{totalErrands}</p>
      </div>
      <div className="totalmoney">
        <p>Total amount made</p>
        <p className="total">₦{totalMoney}</p>
      </div>
    </div>
  );
};

export default Stats;

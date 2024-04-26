import React from 'react';
import './Service.css';
import DeleteIcon from '../../assets/images/delete_icon.png';
import ExportIcon from '../../assets/images/export_icon.png';

const ServiceTable = () => {
  const data = [
    { username: 'john Blo', pickupLocation: '32,usmar,umar', deliveryLocation: '32,usmar,umar', completionDateTime: 'jan 12th,2025 10:30', status: 'Completed' },
    { username: 'john Blo', pickupLocation: '32,usmar,umar', deliveryLocation: '32,usmar,umar', completionDateTime: 'jan 12th,2025 10:30', status: 'Canceled' },
    { username: 'john Blo', pickupLocation: '32,usmar,umar', deliveryLocation: '32,usmar,umar', completionDateTime: 'jan 12th,2025 10:30', status: 'Completed' },
    { username: 'john Blo', pickupLocation: '32,usmar,umar', deliveryLocation: '32,usmar,umar', completionDateTime: 'jan 12th,2025 10:30', status: 'Completed' }
  ];

  return (
    <div className="service-table-container">
      <div className="header">
        <div className="left-texts">
          <h2 className="header-text">Log Of Completed and Canceled Errands</h2>
          <p className="sub-header-text">This table provides a clear overview of the agents errand history</p>
        </div>
        <div className="action-buttons">

          {/* <div className="action-button">
            <img src={DeleteIcon} alt="Delete" className="icon" />
            <span>Delete</span>
          </div> */}
           <img src={DeleteIcon} alt="Delete" className="icon" />
            <span>Delete</span>

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
          {data.map((item, index) => (
            <tr key={index}>
              <td><b>{item.username}</b></td>
              <td><b>{item.pickupLocation}</b></td>
              <td><b>{item.deliveryLocation}</b></td>
              <td><b>{item.completionDateTime}</b></td>
              <td style={{ color: item.status === 'Completed' ? 'green' : 'inherit' }}>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ServiceTable;

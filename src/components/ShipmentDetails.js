import React from 'react';
import { useLanguage } from '../context/LanguageContext';
const ShipmentDetails = ({ shipment }) => {
  const { t } = useLanguage(); 
  const { state } = shipment.CurrentStatus;

  const getProgressBarColor = () => {
    switch (state.toLowerCase()) {
      case 'delivered':
        return 'green';
      case 'cancelled':
        return 'red';
      default:
        return 'orange'; 
    }
  };

  return (
    <div>
      <h2>{t.trackYourShipment} #{shipment.TrackingNumber}</h2> 
      <p>{t.currentStatus}: {shipment.CurrentStatus.state}</p> 
      <p>{t.promisedDate}: {shipment.PromisedDate}</p> 

      <div className="shipment-progress-bar">
        <div
          className="shipment-progress-bar-fill"
          style={{ backgroundColor: getProgressBarColor() }}
        ></div>
      </div>

      <table>
        <thead>
          <tr>
            <th>{t.status}</th> 
            <th>{t.timestamp}</th> 
            <th>{t.hub}</th> 
            <th>{t.reason}</th> 
          </tr>
        </thead>
        <tbody>
          {shipment.TransitEvents.map((event, index) => (
            <tr key={index}>
              <td>{event.state}</td>
              <td>{new Date(event.timestamp).toLocaleString()}</td>
              <td>{event.hub || 'N/A'}</td>
              <td>{event.reason || 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShipmentDetails;

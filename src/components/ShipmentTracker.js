import React, { useState } from 'react';
import { getShipmentDetails } from '../services/trackingServices';
import ShipmentDetails from './ShipmentDetails';
import { useLanguage } from '../context/LanguageContext';

const ShipmentTracker = () => {
  const { t } = useLanguage();  
  const [trackingNumber, setTrackingNumber] = useState('');
  const [shipment, setShipment] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);  

  const fetchShipment = async () => {
    setLoading(true);
    setShipment(null);
    setError(null);  
    try {
      const data = await getShipmentDetails(trackingNumber);
      setShipment(data);
    } catch (error) {
      setError(t.shipmentNotFound);  
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="tracker">
      <h1>{t.trackYourShipment}</h1>
      <input
        type="text"
        value={trackingNumber}
        onChange={(e) => setTrackingNumber(e.target.value)}
        placeholder={t.enterTrackingNumber}
      />
      <button onClick={fetchShipment}>{t.track}</button>

      {loading && <progress max="50"></progress>}  
      {error && <p style={{ color: 'red' }}>{error}</p>}  
      {shipment && <ShipmentDetails shipment={shipment} />}
    </div>
  );
};

export default ShipmentTracker;


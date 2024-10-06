import axios from 'axios';

export const getShipmentDetails = async (trackingNumber) => {
  try {
    const response = await axios.get(`https://tracking.bosta.co/shipments/track/${trackingNumber}`);
    return response.data;
  } catch (err) {
    console.err('Error fetching shipment details', err);
    throw err;
  }
};

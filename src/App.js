import React from 'react';
import { LanguageProvider } from '../src/context/LanguageContext';
import ShipmentTracker from '../src/components/ShipmentTracker';
import Navbar from '../src/components/Navbar';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <ShipmentTracker />
    </LanguageProvider>
  );
}

export default App;

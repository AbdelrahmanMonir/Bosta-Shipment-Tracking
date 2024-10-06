import React from 'react';
import { useLanguage } from '../context/LanguageContext';
const Navbar = () => {
  const { t, toggleLanguage, language } = useLanguage();  

  return (
    <nav className="navbar">
      <ul>
        <li>{t.home}</li>
        <li>{t.trackShipment}</li>
        <li>{t.prices}</li>
        <li>{t.callUs}</li>
        <li>{t.login}</li>
      </ul>
      <button onClick={toggleLanguage}>
        {language === 'en' ? t.changeToArabic : t.changeToEnglish}
      </button>
    </nav>
  );
};

export default Navbar;

import React, { createContext, useState, useContext } from 'react';

const translations = {
  en: {
    home: 'Home',
    trackShipment: 'Track Shipment',
    prices: 'Prices',
    callUs: 'Call Us',
    login: 'Login',
    enterTrackingNumber: 'Enter tracking number',
    track: 'Track',
    changeToArabic: 'Change to Arabic',
    changeToEnglish: 'Change to English',
    loading: 'Loading...',
    shipmentNotFound: 'Shipment number does not exist',
    trackYourShipment: 'Track Your Shipment',
    currentStatus: 'Current Status',
    promisedDate: 'Promised Date',
    showDetails: 'Show Details',
    hideDetails: 'Hide Details',
    status: 'Status',
    timestamp: 'Timestamp',
    hub: 'Hub',
    reason: 'Reason'
  },
  ar: {
    home: 'الصفحة الرئيسية',
    trackShipment: 'تتبع الشحنة',
    prices: 'الأسعار',
    callUs: 'اتصل بنا',
    login: 'تسجيل الدخول',
    enterTrackingNumber: 'أدخل رقم التتبع',
    track: 'تتبع',
    changeToArabic: 'التغيير إلى الإنجليزية',
    changeToEnglish: 'التغيير إلى العربية',
    loading: 'جاري التحميل...',
    shipmentNotFound: 'رقم الشحنة غير موجود',
    trackYourShipment: 'تتبع شحنتك',
    currentStatus: 'الحالة الحالية',
    promisedDate: 'تاريخ الوعد',
    showDetails: 'عرض التفاصيل',
    hideDetails: 'إخفاء التفاصيل',
    status: 'الحالة',
    timestamp: 'التوقيت',
    hub: 'المركز',
    reason: 'السبب'
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'ar' : 'en'));
  };

  const t = translations[language]; 

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

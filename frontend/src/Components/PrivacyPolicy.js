import React from 'react';
import background from '../Images/items.jpg';

const PrivacyPolicy = () => {
  return (
    <div
      className="privacy-policy-page"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        padding: '20px',

      }}
    >
      <div className="container mt-5 privacy-policy">
        <h2 className="text-center mb-4 privacy-heading">Privacy Policy</h2>
        <div className="privacy-section">
          <h3>Introduction</h3>
          <p>Welcome to Bid Create! This Privacy Policy describes how we collect, use, and disclose information when you use our bidding platform.</p>
        </div>
        <div className="privacy-section">
          <h3>Personal Information</h3>
          <p>We collect personal information when you register as a seller or buyer on our platform. This includes your name, email address, contact information, and payment details. We use this information to facilitate transactions, communicate with you, and improve our services.</p>
        </div>
        <div className="privacy-section">
          <h3>Usage Information</h3>
          <p>We may collect information about how you interact with our platform, including the items you view, bid on, or purchase. This helps us understand your preferences and tailor our services to better meet your needs.</p>
        </div>
        <div className="privacy-section">
          <h3>Security</h3>
          <p>We take appropriate measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, so we cannot guarantee absolute security.</p>
        </div>
        <div className="privacy-section">
          <h3>Third-party Services</h3>
          <p>We may use third-party services to assist us in operating our platform or provide services on our behalf. These third parties may have access to your personal information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>
        </div>
        <div className="privacy-section">
          <h3>Changes to this Privacy Policy</h3>
          <p>We reserve the right to update or change our Privacy Policy at any time. Your continued use of our platform after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

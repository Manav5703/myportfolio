// src/components/Footer.js
import React from 'react';

function Footer({ footerText }) {
  return (
    <footer className="footer">
      <p>&copy; 2024 {footerText}. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;

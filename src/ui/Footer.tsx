import React from 'react';
import { Row } from 'react-grid-system';
import './styles/Footer.css';

const Footer = () => (
  <div style={{ marginTop: 100 }}>
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        backgroundColor: 'white',
        borderTop: 'rgba(0,0,0,0.5)',
      }}
    >
      <Row style={{ width: '100%', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p className="footer-text">Copyright © DKT, ALL RIGHTS RESERVED</p>
      </Row>
    </div>
  </div>
);

export default Footer;

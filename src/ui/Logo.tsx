import React from 'react';
import { Col } from 'react-grid-system';
import './styles/Logo.css';

const Logo = () => (
  <Col xs={2} md={5} offset={{ xs: 0, md: 1 }}>
    <div className="logo-bg">
      <span className="logo-text">DKT</span>
    </div>
  </Col>
);

export default Logo;

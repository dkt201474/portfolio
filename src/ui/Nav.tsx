import React from 'react';
import { Col } from 'react-grid-system';
import './styles/Nav.css';

const Nav = ({ navigateTo }: any) => (
  <Col xs={10} md={4} offset={{ xs: 0, sm: 2, md: 1 }}>
    <div className="menu">
      <a
        className="menu-text"
        href=""
        onClick={(e) => {
          e.preventDefault();
          navigateTo('welcome');
        }}
      >
        ME
      </a>

      <a
        className="menu-text"
        href=""
        onClick={(e) => {
          e.preventDefault();
          navigateTo('design');
        }}
      >
        DESIGN
      </a>

      <a
        className="menu-text"
        href=""
        onClick={(e) => {
          e.preventDefault();
          navigateTo('web');
        }}
      >
        WEB
      </a>

      <a
        className="menu-text"
        href=""
        onClick={(e) => {
          e.preventDefault();
          navigateTo('mobile');
        }}
      >
        MOBILE
      </a>
    </div>
  </Col>
);

export default Nav;

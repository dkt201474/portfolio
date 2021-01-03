import React, { useState } from 'react';
import { Container, Row, Visible } from 'react-grid-system';

import './App.css';
import Logo from './ui/Logo';
import Nav from './ui/Nav';
import Footer from './ui/Footer';
import Content from './ui/Content';

const App = () => {
  const [visible, setVisible] = useState('welcome');

  return (
    <div>
      <div className="header-top-bar" />
      <Container fluid>
        <Row>
          <Logo />
          <Nav navigateTo={(screen: string) => setVisible(screen)} />
        </Row>

        <Visible xs sm>
          <div className="content-margin-top-xs" />
        </Visible>

        <Visible md lg xl>
          <div className="content-margin-top" />
        </Visible>

        <Content visible={visible} />
      </Container>

      <Footer />
    </div>
  );
};

export default App;

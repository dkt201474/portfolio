import React from 'react';
import { Col, Visible } from 'react-grid-system';
import './styles/BigLetter.css';

const BigLetter = ({ letter }: any) => (
  <Col md={2} xs={4} sm={3} offset={{ md: 1, lg: 0, xs: 0, sm: 0 }}>
    <Visible xs>
      <h1 className="big-letter-xs">{letter}</h1>
    </Visible>

    <Visible sm>
      <h1 className="big-letter-sm">{letter}</h1>
    </Visible>

    <Visible md>
      <h1 className="big-letter-md">{letter}</h1>
    </Visible>

    <Visible lg>
      <h1 className="big-letter-lg">{letter}</h1>
    </Visible>

    <Visible xl>
      <h1 className="big-letter-xl">{letter}</h1>
    </Visible>
  </Col>
);

export default BigLetter;

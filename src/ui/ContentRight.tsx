import React from 'react';
import { Col, Visible } from 'react-grid-system';
import './styles/ContentRight.css';

const ContentRight = ({ text, linkText, linkUrl }: any) => (
  <Col md={5} lg={3} xs={7} offset={{ md: 3, lg: 1, sm: 1, xl: 1, xs: 1 }}>
    <Visible md lg xl>
      <p className="right-quote-text">{text}</p>
      <a target="_blank" href={linkUrl} className="right-quote-link">
        <span className="right-quote-link-text">{linkText}</span>
      </a>
    </Visible>

    <Visible sm xs>
      <p className="right-quote-text-xs">{text}</p>
      <a target="_blank" href={linkUrl} className="right-quote-link">
        <span className="right-quote-link-text">{linkText}</span>
      </a>
    </Visible>
  </Col>
);

export default ContentRight;

import React from 'react';
import { Col, Visible } from 'react-grid-system';

// App imports
import './styles/ContentLeft.css';
import quoteIcon from '../assets/images/left-quote.svg';

const ContentLeft = ({ quote, author, text }: any) => (
  <Col lg={4} md={10} xs={12} sm={12} offset={{ md: 1, lg: 1 }}>
    {!text ? (
      <div>
        <img src={quoteIcon} alt="quote text" />
      </div>
    ) : null}

    <Visible xs sm>
      <p className="quote-text-xs">{quote || text}</p>
      <p className="quote-author-xs">{author}</p>
    </Visible>

    <Visible md lg xl>
      <p className="quote-text-md">{quote || text}</p>
      <p className="quote-author-md">{author}</p>
    </Visible>
  </Col>
);

export default ContentLeft;

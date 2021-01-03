import React from 'react';
import { Row } from 'react-grid-system';

// App import
import './styles/BigLetter.css';
import ContentLeft from './ContentLeft';
import BigLetter from './BigLetter';
import BigImage from './BigImage';
import ContentRight from './ContentRight';
import welcome1 from '../assets/images/welcome1.svg';

const Content = ({ visible }: any) => (
  <div>
    {visible === 'design' ? (
      <Row>
        <ContentLeft
          quote="PERFECTION IS ACHIEVED, NOT WHEN THERE IS NOTHING MORE TO ADD, BUT WHEN THERE IS NOTHING LEFT TO TAKE AWAY."
          author="— Antoine de Saint-Exupery"
        />
        <BigLetter letter="D" />
        <ContentRight
          text="I can't talk about my life without mentionning Design. I fell in love with that craft back in 2012. And since then I still enjoy and learn new things. Here is a sneak peak of some work I did for my clients."
          linkText="View Galery"
          linkUrl="https://github.com/dkt201474/design"
        />
      </Row>
    ) : null}

    {visible === 'web' ? (
      <Row>
        <ContentLeft quote="Websites promote you 24/7: No employee will do that." author="— Paul Cookson" />
        <BigLetter letter="W" />
        <ContentRight
          text="As a self taught explorer I did it all: ReactJS, NextJS, Redux, Redux-Saga, AngularJS (...), you name it! But I think ReactJS tastes better and so I dedicated the last 5 years of my live to learning good technologies to products that matter for people who care. Here is one of a project I did for a client"
          linkText="Latest Project"
          linkUrl="https://yummi.instacuisines.com/"
        />
      </Row>
    ) : null}

    {visible === 'mobile' ? (
      <Row>
        <ContentLeft quote="The future of mobile is the future of online. It is how people access online content now." author="— Phil Nickinson" />
        <BigLetter letter="M" />
        <ContentRight
          text="I have been a React Native Freelancer for more than 4 years. I help small companies create simple but elegant mobile applications for their customers"
          linkText="Lastest Project"
          linkUrl="https://play.google.com/store/apps/details?id=com.enanly"
        />
      </Row>
    ) : null}

    {visible === 'welcome' ? (
      <Row>
        <ContentLeft text={`Hello, welcome to my website. My name is Sadeck. It's a great pleasure to see you here.`} />
        <BigImage link={welcome1} alt="by matias porta lezcano from the thenounproject.com " />
        <ContentRight
          text="Thank you for taking your precious time to visit my website. Want to know more about me ?"
          linkText="VIEW RESUME"
          linkUrl="https://github.com/dkt201474/resume"
        />
      </Row>
    ) : null}
  </div>
);

export default Content;

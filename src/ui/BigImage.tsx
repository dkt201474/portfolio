import { Col, Visible } from 'react-grid-system';
import './styles/BigImage.css';

const BigImage = ({ link }: any) => (
  <Col md={2} xs={4} sm={3} offset={{ md: 1, lg: 0, xs: 0, sm: 0 }}>
    <Visible xs>
      <h1>
        <img src={link} alt="big-xs" className="big-image-xs" />
      </h1>
    </Visible>

    <Visible sm>
      <h1>
        <img src={link} alt="big-sm" className="big-image-sm" />
      </h1>
    </Visible>

    <Visible md>
      <h1>
        <img src={link} alt="big-md" className="big-image-md" />
      </h1>
    </Visible>

    <Visible lg>
      <h1>
        <img src={link} alt="big-lg" className="big-image-lg" />
      </h1>
    </Visible>

    <Visible xl>
      <h1>
        <img src={link} alt="big-xl" className="big-image-xl" />
      </h1>
    </Visible>
  </Col>
);

export default BigImage;

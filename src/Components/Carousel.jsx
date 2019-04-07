import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import logo1 from '../onmon-1.svg';
import './custom-carousel.css';

class CustomCarousel extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
      >
        <Carousel.Item>
          <img style={{height: '20vh'}}
            className="d-block w-100 App-logo carousel-custom-img"
            src={logo1}
            alt="First slide"
          />
          <Carousel.Caption style={{color: 'black'}}>
            <h3 style={{align: 'left'}}>First slide label</h3>
            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{height: '20vh'}}
            className="d-block w-100 App-logo carousel-custom-img"
            src={logo1}
            alt="Second slide"
          />
          <Carousel.Caption style={{color: 'black'}}>
            <h3 style={{align: 'left'}}>First slide label</h3>
            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{height: '20vh'}}
            className="d-block w-100 App-logo carousel-custom-img"
            src={logo1}
            alt="Third slide"
          />
          <Carousel.Caption style={{color: 'black'}}>
            <h3 style={{align: 'left'}}>First slide label</h3>
            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

// render(<CustomCarousel />);
export default CustomCarousel;

import React from 'react';
import style from './style.css';

import 'animate.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Card, Button } from '@material-ui/core';

import stock1 from 'assets/images/stock-photos/stock-1.jpg';

import stock2 from 'assets/images/stock-photos/nine.jpg';

import stock3 from 'assets/images/stock-photos/nano.jpg';

import stockX from 'assets/images/stock-photos/score.png';


import Slider from 'react-slick';

function SliderArrowNext(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FontAwesomeIcon icon={['fas', 'chevron-right']} />
    </div>
  );
}

function SliderArrowPrev(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FontAwesomeIcon icon={['fas', 'chevron-left']} />
    </div>
  );
}

export default function Carosel() {
  const widgetsCarousels2A = {
    dots: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SliderArrowNext />,
    prevArrow: <SliderArrowPrev />,
    responsive: [
      {
        breakpoint: 1450,
        settings: { slidesToShow: 2, slidesToScroll: 1 }
      },
      {
        breakpoint: 1300,
        settings: { slidesToShow: 1, slidesToScroll: 1 }
      }
    ]
  };

  return (
    <>
      <div>
          <Container className="jeez animate__animated animate__slideInUp mb-spacing-6-x2">
            <Slider className="overflow-hidden" {...widgetsCarousels2A}>
              <div className="px-3">
                <a
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="card-img-wrapper rounded">
                  <div className="img-wrapper-overlay">
                    <div className="overlay-btn-wrapper">
                      {/* <Button className="btn-facebook m-2 btn-icon hover-scale-lg btn-animated-icon d-50 p-0 border-0 rounded-lg">
                        <span className="btn-wrapper--icon d-flex">
                          <FontAwesomeIcon
                            icon={['fab', 'facebook']}
                            className="font-size-lg"
                          />
                        </span>
                      </Button> */}
                      {/* <Button className="btn-twitter m-2 btn-icon hover-scale-lg btn-animated-icon d-50 p-0 border-0 rounded-lg">
                        <span className="btn-wrapper--icon d-flex">
                          <FontAwesomeIcon
                            icon={['fab', 'twitter']}
                            className="font-size-lg"
                          />
                        </span>
                      </Button> */}
                    </div>
                  </div>
                  <div className="card-badges card-badges-bottom">
                    <div className="badge badge-pill badge-warning">
                      Visit
                    </div>
                  </div>
                  <img
                    src={stock3}
                    className="card-img-top rounded"
                    alt="..."
                  />
                </a>
              </div>
             
              <div className="px-3">
                <a
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="card-img-wrapper rounded">
                  <div className="img-wrapper-overlay">
                    <div className="overlay-btn-wrapper">
                      
                    </div>
                  </div>
                  <div className="card-badges card-badges-bottom">
                    <div className="badge badge-pill badge-warning">
                      Visit
                    </div>
                  </div>
                  <img
                    src={stock2}
                    className="card-img-top rounded"
                    alt="..."
                  />
                </a>
              </div>

              <div className="px-3">
                <a
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="card-img-wrapper rounded">
                  <div className="img-wrapper-overlay">
                    <div className="overlay-btn-wrapper">
                      
                    </div>
                  </div>
                  <div className="card-badges card-badges-bottom">
                    <div className="badge badge-pill badge-warning">
                      Visit
                    </div>
                  </div>
                  <img
                    src={stockX}
                    className="card-img-top rounded"
                    alt="..."
                  />
                </a>
              </div>

            </Slider>
          </Container>
        {/* </Card> */}
      </div>
    </>
  );
}

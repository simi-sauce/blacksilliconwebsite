import React from 'react';

import 'animate.css';

import style from './style.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, Container, Button } from '@material-ui/core';

import stock6 from 'assets/images/businessman.svg';

export default function Getintouch() {
  return (
    <>
      <div className="hero-wrapper bg-composed-wrapper " id="getintouch">
        <div className="bg-composed-wrapper--bg " />
        <div className="bg-composed-wrapper--bg " />
        <Container className="header-top-section py-2"></Container>
        <div className="hero-wrapper--content">
          <div className="bg-composed-wrapper--content">
            <Container className="text-second pb-0 pb-lg-5">
              <Grid
                container
                spacing={6}
                className="animate__animated animate__slideInLeft py-5">
                <Grid item lg={6} className="d-flex align-items-center">
                 
                  <img
                    alt="..."
                    className="rounded img-fit-container"
                    src={stock6}
                  />
                </Grid>

                <Grid item lg={6} className="d-flex align-items-center">
                  <div className="text-center text-lg-left">
                    <h1 className="display-3 text-white font-weight-bold">GET IN TOUCH</h1>
                   
                    <h4 className='line text-white font-size-xxl py-3'>
                    Have an idea or an epic project in mind? Talk to us. Let’s work together and make something great. 
                    </h4>
                    <div className="pt-3">
                      <Button
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        size="large"
                        className="btn-outline-primary botonoutline">
                        <span className="btn-wrapper--icon">
                          <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                        </span>
                        <span className="btn-wrapper--label">Get in touch</span>
                      </Button>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}

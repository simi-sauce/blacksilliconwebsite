import React from 'react';

import style from './style.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, Container, Card, Button } from '@material-ui/core';

import 'animate.css';

import illustration1 from 'assets/images/about.svg';

import illustration2 from 'assets/images/handshake.svg';

export default function LivePreviewExample() {
  return (
    <>
      <Container className="abo py-xl-3" id="about">
        {/* <Card className="card-box p-0"> */}
        <Grid container spacing={0}>
          <Grid item lg={6} className="d-flex align-items-center">
            {/* <img alt="..." className="w-100" src={illustration2} /> */}
            <img alt="..." className="w-100" src={illustration1} />
          </Grid>

          <Grid item lg={6} className="d-flex align-items-center">
            <div className="animate__animated animate__slideInRight p-4 text-center text-lg-center">
              <div className="mb-4">
                {/* <div className="badge badge-pill badge-warning">
                  Latest release
                </div> */}
                <h1 className="faq display-3 my-3 text-capitalize font-weight-bold">
                  ABOUT US
                </h1>

                <p className="sil">
                  Black Silicon Ltd is an information technology solution
                  provider with head quarter in Lagos, Nigeria. We are a
                  Nigerian registered company with a branch office in London,
                  United Kingdom in a view to influencing innovation on an
                  international scale. The company name is coined from African
                  efforts in revolutionizing IT with passion and drive. We
                  represent power, strength and authority.
                </p>
              </div>
              <div>
                <Button
                  variant="outline"
                  size="large"
                  className="btn-outline-primary botonoutline">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['far', 'question-circle']} />
                  </span>
                  <span className="btn-wrapper--label">Read more</span>
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>
        {/* </Card> */}
      </Container>
    </>
  );
}


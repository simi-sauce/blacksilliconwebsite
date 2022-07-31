import React from 'react';
import SimpleDialog from 'layout/modals';

import style from './style.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, Container, Card, Button, Tooltip } from '@material-ui/core';

import particles2 from 'assets/images/hero-bg/particles-2.svg';
import illustration1 from 'assets/images/illustrations/pack1/time.svg';

import 'animate.css';

export default function kads() {
  const vap = () => {
    console.log('consoled');
  };

  return (
    <>
      <div className="missio hero-wrapper bg-composed-wrapper " id="services">
        <Container className="pt-3">
          <h1 className="fa display-3 my-3 text-center text-capitalize font-weight-bold">
            OUR SERVICES
          </h1>
        </Container>

        <div onScroll={vap} className="simp hero-footer py-3 py-xl-5">
          <Container>
            <Grid container spacing={6}>
              <Grid
                className="animate__animated animate__slideInLeft"
                item
                md={4}
                xl={4}>
                <Card className="card-box-hover-rise card-box-hover card-box-alt card-border-top border-first mb-5 pb-4 bg-secondary shadow-xxl">
                  <h3 className="font-size-lg font-weight-bold mt-5 mb-4">
                  Electronic Payment Services
                  </h3>
                  <p className="text-dark px-4 mb-4">
                  Electronic payment system has grown increasingly over the last decades due to the growing spread of internet-based banking and shopping.
                  </p>
                  <Button
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    className="mb-2 p-0"
                    title="">
                    <SimpleDialog />
                  </Button>
                </Card>
              </Grid>
              <Grid item md={4} xl={4}>
                <Card className="card-box-hover-rise card-box-hover card-box-alt card-border-top border-success mb-5 pb-4 bg-secondary shadow-xxl">
                  <h3 className="font-size-lg font-weight-bold mt-5 mb-4">
                  E-payment Advisory and Compliance
                  </h3>
                  <p className="text-dark px-4 mb-4">
                  Black Silicon, having vast knowledge in epayment solution services, helps to ensure proper companies adhere to the necessary compliance with regulatory requirements.
                  </p>
                  <Button
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    className="mb-2 p-0"
                    title="">
                    <SimpleDialog />
                  </Button>
                </Card>
              </Grid>
              <Grid item md={4} xl={4}>
                <Card className="card-box-hover-rise card-box-hover card-box-alt card-border-top border-first mb-5 pb-4 bg-secondary shadow-xxl">
                  <h3 className="font-size-lg font-weight-bold mt-5 mb-4">
                    Research And Development
                  </h3>
                  <p className="text-dark px-4 mb-4">
                  Black Silicon helps companies seeking to go into the e-payment sector with adequate research and development, advising them on the required steps and procedures to take.
                  </p>
                  <Button
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    className="mb-2 p-0"
                    title="">
                    <SimpleDialog />
                  </Button>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    </>
  );
}

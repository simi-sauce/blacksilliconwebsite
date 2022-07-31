import React from 'react';
import style from './style.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, Container, Card, Button } from '@material-ui/core';

import illustration1 from 'assets/images/illustrations/pack2/video_call.svg';

export default function Values() {
  return (
    <>
      <div className="port bg-white py-5 py-xl-5" id="project">
        <Container className="this back py-3 py-xl-5">
          <Grid container spacing={6}>
            <Grid
              item
              xl={8}
              className="portfolio">
                <div className='kip' >
                  <h1 className="folio display-3  text-capitalize font-weight-bold">
                    OUR PORTFOLIO
                  </h1>
                  <p className='take'>
                  Take a look at some of our amazing project
                   </p>

                </div>
            </Grid>
            <Grid item xl={4} className="d-none d-xl-flex align-items-center">
              <Card className="shadow-xxl rounded-circle overflow-visible p-3 w-100">
                <img src={illustration1} className="img-fluid" alt="..." />
              </Card>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}

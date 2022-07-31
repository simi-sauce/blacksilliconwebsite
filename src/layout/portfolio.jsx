import React from 'react';
import style from './style.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, Container, Card, Button } from '@material-ui/core';

import illustration1 from 'assets/images/illustrations/pack2/video_call.svg';

export default function LivePreviewExample() {
  return (
    <>
      <div className="port text-center  py-5 py-xl-5" id="project">
        <Container className="him this back py-3 py-xl-5">
          <Grid container spacing={6}>
            <Grid
              item
              xl={12}
              className="portfolio text-center">
                <div className='kip' >
                  <h1 className="folio display-3 text-capitalize font-weight-bold">
                    OUR PORTFOLIO
                  </h1>
                  <p className='take'>
                  Take a look at some of our amazing project
                   </p>
                </div>
            </Grid>
           
          </Grid>
        </Container>
      </div>
    </>
  );
}

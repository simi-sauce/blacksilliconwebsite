import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, Card } from '@material-ui/core';

import style from './style.css';

export default function Mission() {
  return (
    <>
    <div className='missioN'>
      <div className="mb-spacing-6 flex">
        <Grid container className="py-2" spacing={6}>
          <Grid item xl={2} md={1} />
          <Grid item xl={4} md={5}>
            <Card className="card-border-top border-success card-box-hover bg p-4 shadow-xxl card-box-hover-rise">
              <div className="d-flex align-items-center">
                <div className="d-50 bg-success rounded-circle btn-icon   text-center font-size-lg mr-3">
                  <FontAwesomeIcon icon={['fas', 'road']} />
                </div>
                <div className="text-black font-weight-bold font-size-xl">
                  OUR MISSION
                </div>
              </div>
              <div className="display-3 text-center line-height-sm text-black text-center d-flex align-items-center pt-3 justify-content-center">
                <h6 className="ensure">
                  To ensure that top-notch products are developed using the best
                  and secure technology.
                </h6>
              </div>
            </Card>
          </Grid>
          <Grid item xl={4} md={5}>
            <Card className="card-border-top border-first card-box-hover bg p-4 shadow-xxl card-box-hover-rise">
              <div className="d-flex align-items-center">
                <div className="d-50 bg-first rounded-circle btn-icon  text-center font-size-lg mr-3">
                  <FontAwesomeIcon icon={['fas', 'binoculars']} />
                </div>
                <div className="text-black font-weight-bold font-size-xl">
                  OUR VISION
                </div>
              </div>
              <div className="display-3 text-center line-height-sm text-black text-center d-flex align-items-center pt-3 justify-content-center">
                <h6 className="ensure">
                  To be a leading Payment Service Solution Provider, bringing
                  ease and transparency in our dealings
                </h6>
              </div>
            </Card>
          </Grid>
          <Grid item xl={2} md={1} />
        </Grid>
      </div>
      </div>
    </>
  );
}

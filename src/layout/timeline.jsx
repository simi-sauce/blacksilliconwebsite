import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid } from '@material-ui/core';

export default function Timeline() {
  return (
    <>
      <Grid container spacing={6}>
        <Grid item md={6} lg={3}>
          <div className="timeline-list mb-5 timeline-list--primary">
            <div className="timeline-item">
              <div className="timeline-item--content">
                <div className="timeline-item--icon" />
                <h4 className="timeline-item--label">
                  Business investor meeting
                </h4>
                <small className="mt-2 d-block">
                  <FontAwesomeIcon icon={['far', 'clock']} className="mr-1" />
                  17<sup>th</sup> September
                </small>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-item--content">
                <div className="timeline-item--icon" />
                <h4 className="timeline-item--label font-weight-bold">
                  Learning round table gathering
                </h4>
                <small className="mt-2 d-block">
                  <FontAwesomeIcon icon={['far', 'clock']} className="mr-1" />
                  18<sup>th</sup> September
                </small>
                <p className="mt-3">
                  The World Wide Web goes live with its first web page.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-item--content">
                <div className="timeline-item--icon" />
                <h4 className="timeline-item--label">Java exam day</h4>
                <small className="mt-2 d-block">
                  <FontAwesomeIcon icon={['far', 'clock']} className="mr-1" />
                  19<sup>th</sup> September
                </small>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item md={6} lg={3}>
          <div className="timeline-list mb-5 timeline-list--dark">
            <div className="timeline-item">
              <div className="timeline-item--content">
                <div className="timeline-item--icon" />
                <h4 className="timeline-item--label font-weight-bold">
                  Business investor meeting
                </h4>
                <small className="mt-2 d-block">
                  <FontAwesomeIcon icon={['far', 'clock']} className="mr-1" />
                  17<sup>th</sup> September
                </small>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-item--content">
                <div className="timeline-item--icon" />
                <h4 className="timeline-item--label">
                  Learning round table gathering
                </h4>
                <small className="mt-2 d-block">
                  <FontAwesomeIcon icon={['far', 'clock']} className="mr-1" />
                  18<sup>th</sup> September
                </small>
                <p className="mt-3">
                  The World Wide Web goes live with its first web page.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-item--content">
                <div className="timeline-item--icon" />
                <h4 className="timeline-item--label">Java exam day</h4>
                <small className="mt-2 d-block">
                  <FontAwesomeIcon icon={['far', 'clock']} className="mr-1" />
                  19<sup>th</sup> September
                </small>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item md={6} lg={3}>
          <div className="timeline-list mb-5 timeline-list--first">
            <div className="timeline-item">
              <div className="timeline-item--content">
                <div className="timeline-item--icon" />
                <h4 className="timeline-item--label">
                  Business investor meeting
                </h4>
                <small className="mt-2 d-block">
                  <FontAwesomeIcon icon={['far', 'clock']} className="mr-1" />
                  17<sup>th</sup> September
                </small>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-item--content">
                <div className="timeline-item--icon" />
                <h4 className="timeline-item--label">
                  Learning round table gathering
                </h4>
                <small className="mt-2 d-block">
                  <FontAwesomeIcon icon={['far', 'clock']} className="mr-1" />
                  18<sup>th</sup> September
                </small>
                <p className="mt-3">
                  The World Wide Web goes live with its first web page.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-item--content">
                <div className="timeline-item--icon" />
                <h4 className="timeline-item--label font-weight-bold">
                  Java exam day
                </h4>
                <small className="mt-2 d-block">
                  <FontAwesomeIcon icon={['far', 'clock']} className="mr-1" />
                  19<sup>th</sup> September
                </small>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item md={6} lg={3}>
          <div className="timeline-list mb-5 timeline-list--second">
            <div className="timeline-item">
              <div className="timeline-item--content">
                <div className="timeline-item--icon" />
                <h4 className="timeline-item--label">
                  Business investor meeting
                </h4>
                <small className="mt-2 d-block">
                  <FontAwesomeIcon icon={['far', 'clock']} className="mr-1" />
                  17<sup>th</sup> September
                </small>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-item--content">
                <div className="timeline-item--icon" />
                <h4 className="timeline-item--label font-weight-bold">
                  Learning round table gathering
                </h4>
                <small className="mt-2 d-block">
                  <FontAwesomeIcon icon={['far', 'clock']} className="mr-1" />
                  18<sup>th</sup> September
                </small>
                <p className="mt-3">
                  The World Wide Web goes live with its first web page.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-item--content">
                <div className="timeline-item--icon" />
                <h4 className="timeline-item--label">Java exam day</h4>
                <small className="mt-2 d-block">
                  <FontAwesomeIcon icon={['far', 'clock']} className="mr-1" />
                  19<sup>th</sup> September
                </small>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

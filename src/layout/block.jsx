import React from 'react';
import style from './style.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, Container, Card, Button } from '@material-ui/core';

import stock1 from 'assets/images/stock-photos/stock-1.jpg';
// import stock2 from 'assets/images/stock-photos/stock-2.jpg';
// import stock3 from 'assets/images/stock-photos/stock-3.jpg';
// import avatar5 from 'assets/images/avatars/avatar5.jpg';

export default function Block() {
  return (
    <>
      <div className="hero-footer py-3 py-xl-5">
        <Container>
          <Grid>
            <Grid item md={6} xl={4} className="d-none d-xl-block">
              <Card className="card-box-hover-rise card-box-hover card-box-alt card-border-top border-warning mb-5 pb-4 bg-secondary shadow-xxl">
                <h3 className="font-size-lg font-weight-bold mt-5 mb-4">
                  Starter Templates
                </h3>
                <p className="text-dark px-4 mb-4">
                  View any of the 5+ live previews we&#39;ve set up to learn why
                  this dashboard template is the last one you&#39;ll ever need!
                </p>
                <Button
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="btn-link btn-link-warning mb-2 p-0"
                  title="Find out more">
                  <span>Find out more</span>
                </Button>
              </Card>
            </Grid>
          </Grid>
          <Grid container spacing={6}>
            <Grid className="fin" item md={6} xl={4}>
              <a
                href="#/"
                onClick={(e) => e.preventDefault()}
                className="card-img-wrapper rounded">
                <div className="img-wrapper-overlay">
                  <div className="overlay-btn-wrapper">
                    <Button className="btn-facebook m-2 btn-icon hover-scale-lg btn-animated-icon d-50 p-0 border-0 rounded-lg">
                      <span className="btn-wrapper--icon d-flex">
                        <FontAwesomeIcon
                          icon={['fab', 'facebook']}
                          className="font-size-lg"
                        />
                      </span>
                    </Button>
                    <Button className="btn-twitter m-2 btn-icon hover-scale-lg btn-animated-icon d-50 p-0 border-0 rounded-lg">
                      <span className="btn-wrapper--icon d-flex">
                        <FontAwesomeIcon
                          icon={['fab', 'twitter']}
                          className="font-size-lg"
                        />
                      </span>
                    </Button>
                  </div>
                </div>
                <div className="card-badges card-badges-bottom">
                  <div className="badge badge-pill badge-warning">Pending</div>
                </div>
                <img src={stock1} className="card-img-top rounded" alt="..." />
              </a>
            </Grid>


            <Grid className="fin" item md={6} xl={4}>
              <a
                href="#/"
                onClick={(e) => e.preventDefault()}
                className="card-img-wrapper rounded">
                <div className="img-wrapper-overlay">
                  <div className="overlay-btn-wrapper">
                    <Button className="btn-facebook m-2 btn-icon hover-scale-lg btn-animated-icon d-50 p-0 border-0 rounded-lg">
                      <span className="btn-wrapper--icon d-flex">
                        <FontAwesomeIcon
                          icon={['fab', 'facebook']}
                          className="font-size-lg"
                        />
                      </span>
                    </Button>
                    <Button className="btn-twitter m-2 btn-icon hover-scale-lg btn-animated-icon d-50 p-0 border-0 rounded-lg">
                      <span className="btn-wrapper--icon d-flex">
                        <FontAwesomeIcon
                          icon={['fab', 'twitter']}
                          className="font-size-lg"
                        />
                      </span>
                    </Button>
                  </div>
                </div>
                <div className="card-badges card-badges-bottom">
                  <div className="badge badge-pill badge-warning">ending</div>
                </div>
                <img src={stock1} className="card-img-top rounded" alt="..." />
              </a>
            </Grid>

          </Grid>
        </Container>
      </div>
    </>
  );
}

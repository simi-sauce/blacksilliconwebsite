import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Grid,
  Container,
  Card,
  Button,
  List,
  ListItem
} from '@material-ui/core';

import hero1 from 'assets/images/hero-bg/ror.jpg';

import vvo from 'assets/images/online.png';

import MarketingHeaders1 from 'common/headers/Header1';

import { Link } from 'react-scroll';

import style from '../style.css';

import 'animate.css';

export default function LivePreviewExample() {
  return (
    <>
      <div
        className="serv animate__animated animate__slideInUp hero-wrapper bg-composed-wrapper bg-second"
        id="home">
        <Container className="py-2">
          <MarketingHeaders1 />
        </Container>
        {/* <div className="divider bg-white-5" /> */}
        <div className="hero-wrapper--content">
          <div
            className="bg-composed-wrapper--image"
            style={{ backgroundImage: 'url(' + hero1 + ')' }}
          />
          <div className="bg-composed-wrapper--bg bg-premium-dark" />
          <div className="bg-composed-wrapper--content">
            <Container className="z-over text-white py-0 py-xl-5">
              <Grid container spacing={6} className="py-5">
                <Grid item lg={6}>
                  <div className="animate__animated animate__fadeInLeft text-center text-lg-left py-0 pr-0 pr-xl-3 py-xl-5">
                    <div className="pr-0 pr-xl-5 text-white">
                      {/* <h1 className="display-3 mb-3 font-weight-bold">
                        BLACK SILICON
                      </h1> */}
                      <p className="pass m-0 py-3 text-white">
                        WITH PASSION WE USE I.T TO CHANGE THE WORLD
                      </p>
                      {/* <p className="font-size-lg m-0 py-2 text-white opacity-7">
                        View any of the 5+ live previews we&#39;ve set up to
                        learn why this dashboard template is the last one
                        you&#39;ll ever need!
                      </p> */}
                      <div className="d-block mt-4">
                        <Link
                          to="services"
                          spy={true}
                          smooth={true}
                          offset={70}
                          duration={500}
                          className="botonoutline2 px-5 py-3 font-size-sm font-weight-bold  btn-animated-icon text-uppercase rounded shadow-none  hover-scale-sm hover-scale-lg mr-3 .bg-pastel-orange"
                          onClick={(e) => e.preventDefault()}>
                          Our Services
                          <span
                            className="px-2 btn-wrapper--icon"
                            style={{ color: '#ffb347' }}>
                            <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item lg={6} className="d-flex align-items-center">
                  <Card
                    className=" object-skew hover-scale-lg  w-100 "
                    style={{ background: 'none' }}>
                    <img alt="..." className="bgi w-100" src={vvo} />
                  </Card>
                </Grid>
              </Grid>
            </Container>
            {/* <div className="shape-container-top-1 z-below">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  className="svg"
                  fillOpacity="1"
                  d="M0,96L48,112C96,128,192,160,288,176C384,192,480,192,576,202.7C672,213,768,235,864,213.3C960,192,1056,128,1152,133.3C1248,139,1344,213,1392,250.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
              </svg>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

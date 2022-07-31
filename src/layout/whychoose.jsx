import React from 'react';

import style from './style.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Grid,
  Container,
  List,
  ListItem,
  Card,
  Button
} from '@material-ui/core';

import 'animate.css';

import illustration1 from 'assets/images/fa.svg';
export default function Why() {
  return (
    <>
      <div className="thi chose simp py-1 py-xl-3">
        <h1 className="fam py-3 display-3 my-3 text-capitalize font-weight-bold">
          WHY CHOOSE US
        </h1>
        <Grid container spacing={0}>
          <Grid item lg={6} className="d-flex align-items-center">
            <div className="p-4 text-center text-lg-left p-lg-5">
              <div className="mb-4">
                <List component="div" className="list-group-flush mb-2">
                  <ListItem className="py-3 border-0">
                    <div className="specialize align-box-row w-100">
                      <div className="mx-3">
                        <div className="ico bg text-primary text-center font-size-xl d-60 rounded-sm">
                          <FontAwesomeIcon
                            icon={['fas', 'fa-money-bill-transfer']}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="whi py-3">
                          We specialize in the deployment of Carrier Grade
                          Payment and Mobile VAS Technology Solutions which
                          powers large platforms around the world.
                        </div>
                      </div>
                    </div>
                  </ListItem>
                  <div className="divider" />
                  <ListItem className="py-3 border-0">
                    <div className="specialize align-box-row w-100">
                      <div className="mx-3">
                        <div className="bg text-primary text-center font-size-xl d-60 rounded-sm">
                          <FontAwesomeIcon icon={['far', 'bell']} />
                        </div>
                      </div>
                      <div>
                        <div className="whi py-3">
                          Our Core Team of Software Engineers have over 20 years
                          experience in the electronic payment and VAS Services
                          space.
                        </div>
                      </div>
                    </div>
                  </ListItem>
                  <div className="divider" />
                  <ListItem className="py-3 border-0">
                    <div className="specialize align-box-row w-100">
                      <div className="mx-3">
                        <div className="bg text-primary text-center font-size-xl d-60 rounded-sm">
                          <FontAwesomeIcon icon={['far', 'chart-bar']} />
                        </div>
                      </div>
                      <div>
                        
                        <div className="whi py-3">
                          At Black Silicon, we deliver Technology Solutions
                          through innovations and strategic collaborations with
                          clients to address challenges.
                        </div>
                      </div>
                    </div>
                  </ListItem>
                  <ListItem className="py-3 border-0">
                    <div className="specialize align-box-row w-100">
                      <div className="mx-3">
                        <div className="bg text-primary text-center font-size-xl d-60 rounded-sm">
                          <FontAwesomeIcon
                            icon={['fas', 'fa-arrows-split-up-and-left']}
                          />
                        </div>
                      </div>
                      <div>
                       
                        <div className="whi py-3">
                          Our solutions are designed to be easy to use and work
                          seamlessly with specified hardware to provide a
                          platform for agile execution of objectives.
                        </div>
                      </div>
                    </div>
                  </ListItem>
                </List>
              </div>
            </div>
          </Grid>
          <Grid item lg={6} className="d-flex align-items-center">
            <img alt="..." className="w-100" src={illustration1} />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

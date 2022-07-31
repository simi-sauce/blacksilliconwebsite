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
import Accordion from './accordion';

import 'animate.css';

import illustration1 from 'assets/images/question.svg';
export default function Faq() {
  return (
    <>
      <Container className="py-1 py-xl-3">
        <Grid container spacing={0}>
          <Grid item lg={6} className="d-flex align-items-center">
            <img alt="..." className="w-100" src={illustration1} />
          </Grid>
          <Grid item lg={6} className="d-flex align-items-center">
            <div className="p-4 text-center text-lg-left p-lg-5">
              <div className="mb-4">
                <h1 className="faq pb-5 display-3  text-capitalize font-weight-bold">
                  FREQUENTLY ASKED QUESTION?
                </h1>
                <Accordion />
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

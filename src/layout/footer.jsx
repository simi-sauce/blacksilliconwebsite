import React from 'react';

import style from './style.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Grid,
  Container,
  List,
  ListItem,
  InputAdornment,
  Card,
  CardContent,
  TextField,
  Button
} from '@material-ui/core';

import EmailTwoToneIcon from '@material-ui/icons/EmailTwoTone';

import projectLogo from 'assets/images/react.svg';

export default function Footer() {
  return (
    <>
      <div className="foot py-5">
        <Container className="py-0 text-center text-xl-left py-xl-5">
          <Grid className="">
            <Grid item xl={12} className=" d-none d-md-flex align-items-center">
              <Grid container className="w-100">
                <Grid className="mid" item md={6}>
                  <div className="divider-v divider-v-lg opacity-1 d-none d-xl-block" />
                  <div className="pl-0 pl-lg-3">
                    <List
                      component="div"
                      className="nav-transparent-alt flex-column">
                      <ListItem>
                        <h6 className="text-white font-weight-bold mb-3">
                          Contact
                        </h6>
                      </ListItem>

                      <ListItem
                        button
                        className="text-white-50"
                        href="#/"
                        onClick={(e) => e.preventDefault()}>
                        {/* <FontAwesomeIcon
                            icon={['fab', 'linkedin']}
                            className="font-size-lg"
                        /> */}
                        <FontAwesomeIcon icon={['fas', 'location-dot']} />
                        <span className="px-2">
                          73, Jubilee Road, Magodo Phase II, Ikosi Ketu, Lagos
                        </span>
                      </ListItem>

                      <ListItem
                        button
                        className="text-white-50"
                        href="#/"
                        onClick={(e) => e.preventDefault()}>
                        <FontAwesomeIcon
                          icon={['fas', 'envelope']}
                          className="font-size-lg"
                        />

                        <a className="px-2" href="mailto: abc@example.com">
                          support@blacksillicon.com
                        </a>
                      </ListItem>

                      <ListItem
                        button
                        className="text-white-50"
                        href="#/"
                        onClick={(e) => e.preventDefault()}>
                        <FontAwesomeIcon
                          icon={['fas', 'phone']}
                          className="font-size-lg"
                        />
                        <a
                          className="d-block d-xl-flex px-2 py-1 text-white-50"
                          href="tel:+4733378901">
                          +234 803 457 4378
                        </a>
                      </ListItem>
                    </List>
                  </div>
                </Grid>

                <Grid className="mid" item md={6}>
                  <div className="pl-0 pl-lg-3">
                    <List
                      component="div"
                      className="nav-transparent-alt flex-column">
                      <ListItem>
                        <h6 className="text-white font-weight-bold mb-3">
                          Products
                        </h6>
                      </ListItem>

                      <ListItem
                        component="a"
                        button
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="d-block d-xl-flex px-0 py-1 text-white-50">
                        9food
                      </ListItem>
                      <ListItem
                        component="a"
                        button
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="d-block d-xl-flex px-0 py-1 text-white-50">
                        NetApps
                      </ListItem>
                      <ListItem
                        component="a"
                        button
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="d-block d-xl-flex px-0 py-1 text-white-50">
                        Card Master
                      </ListItem>
                    </List>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <div className="divider border-2 d-none d-md-block rounded-circle border-white bg-white opacity-2 mx-auto my-5 w-50" />
          <List
            component="div"
            className="nav-transparent-alt text-nowrap d-flex justify-content-center">
            <ListItem
              button
              className="text-white-50"
              href="#/"
              onClick={(e) => e.preventDefault()}>
              <FontAwesomeIcon
                icon={['fab', 'facebook']}
                className="font-size-lg"
              />
            </ListItem>
            <ListItem
              button
              className="text-white-50"
              href="#/"
              onClick={(e) => e.preventDefault()}>
              <FontAwesomeIcon
                icon={['fab', 'twitter']}
                className="font-size-lg"
              />
            </ListItem>
            <ListItem
              button
              className="text-white-50"
              href="#/"
              onClick={(e) => e.preventDefault()}>
              <FontAwesomeIcon
                icon={['fab', 'linkedin']}
                className="font-size-lg"
              />
            </ListItem>
          </List>
        </Container>
      </div>
    </>
  );
}

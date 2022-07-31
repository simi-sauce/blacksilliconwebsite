import React, { useState } from 'react';

import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Collapse, Grid, Button, List, ListItem } from '@material-ui/core';

import projectLogo from 'assets/images/react.svg';

import NotificationsActiveTwoToneIcon from '@material-ui/icons/NotificationsActiveTwoTone';
import SettingsTwoToneIcon from '@material-ui/icons/SettingsTwoTone';

import PeopleAltTwoToneIcon from '@material-ui/icons/PeopleAltTwoTone';
import BusinessCenterTwoToneIcon from '@material-ui/icons/BusinessCenterTwoTone';
import LocalLibraryTwoToneIcon from '@material-ui/icons/LocalLibraryTwoTone';
import GridOnTwoToneIcon from '@material-ui/icons/GridOnTwoTone';

import stock20 from 'assets/images/blacklogo.png';

import Search from 'layout/search';

import { Link } from 'react-scroll';

import style from '../../layout/style.css'

export default function LivePreviewExample() {
  const [collapse, setCollapse] = useState(false);
  const toggle = () => setCollapse(!collapse);

  return (
    <>
      <div className=" header-nav-wrapper header-nav-wrapper-lg rounded navbar-dark">
        <div className="log app-nav-logo">
          <a
            href="#/"
            onClick={(e) => e.preventDefault()}
            title="Bamburgh React Admin Dashboard with Material-UI PRO"
            className="app-nav-logo">
              
            <div className="logo">
            <img src={stock20} />
            </div>
          </a>
        </div>
        <div className="vil header-nav-menu d-none d-lg-block">
          <ul className="d-flex justify-content-center">
            <li>
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                className="botonoutline22 rounded-pill"
                onClick={(e) => e.preventDefault()}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="vil rounded-pill"
                onClick={(e) => e.preventDefault()}>
                About
              </Link>
            </li>
            <li>
              <Link
                to="services"
                spy={true}
                smooth={true}
                offset={-10}
                duration={500}
                className="rounded-pill"
                onClick={(e) => e.preventDefault()}>
                Services
              </Link>
            </li>
            <li>
              <Link
                to="project"
                spy={true}
                smooth={true}
                offset={-180}
                duration={500}
                className="rounded-pill"
                onClick={(e) => e.preventDefault()}>
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="patna"
                spy={true}
                smooth={true}
                offset={150}
                duration={500}
                className="rounded-pill"
                onClick={(e) => e.preventDefault()}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
       
        <div className="d-flex d-lg-none">
          <Collapse
            in={collapse}
            className="nav-collapsed-wrapper navbar-collapse">
            <div className="nav-inner-wrapper">
              <Button
                onClick={toggle}
                className="btn-danger btn-icon d-40 shadow-sm hover-scale-lg btn-animated-icon-sm nav-toggle-inner-btn p-0">
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={['fas', 'times']} />
                </span>
              </Button>
            </div>
          </Collapse>
        </div>
      </div>
      <div
        className={clsx('collapse-page-trigger', { 'is-active': collapse })}
        onClick={toggle}
      />
    </>
  );
}

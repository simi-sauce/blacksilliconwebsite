import React from 'react';

import style from './style.css';

import 'animate.css';

import logo1 from 'assets/images/stock-logos/eTranzact.svg';
import logo2 from 'assets/images/stock-logos/airbnb.svg';
import logo3 from 'assets/images/stock-logos/Scoremee.svg';
import logo4 from 'assets/images/stock-logos/slack.svg';
import logo5 from 'assets/images/stock-logos/google.svg';
import logo7 from 'assets/images/stock-logos/residnt.jpg';
import logo9 from 'assets/images/stock-logos/NET.png';
import logo8 from 'assets/images/stock-logos/ICNlogo.svg';
import logoX from 'assets/images/stock-logos/etranz.png';
import logo6 from 'assets/images/stock-logos/stripe.svg';

export default function Partners() {
  return (
    <>
      <div className="patna animate__animated animate__slideInLeft" id="patna">
        <div className="py-5">
        
          <h1 className="rup display-2 mb-2 px-4 display-3 font-weight-bold">
            OUR PARTNERS
          </h1>

          <div className="d-flex align-items-center justify-content-center flex-wrap">
            
            <div className="p-3 m-3 d-flex align-self-stretch">
              <div className="hover-scale-rounded object-skew shadow-sm bg-white opacity-9 rounded-sm p-4">
                <img
                  src={logo8}
                  style={{ height: 40 }}
                  className="m-auto img-fluid text-white"
                  alt="..."
                />
              </div>
            </div>

            <div className="p-3 m-3 d-flex align-self-stretch">
              <div className="hover-scale-rounded object-skew shadow-sm bg-white opacity-9 rounded-sm p-4">
                <img
                  src={logoX}
                  style={{ height: 40 }}
                  className="m-auto img-fluid text-white"
                  alt="..."
                />
              </div>
            </div>
            
            <div className="p-3 m-3 d-flex align-self-stretch">
              <div className="hover-scale-rounded object-skew shadow-sm bg-white opacity-9 rounded-sm p-4">
                <img
                  src={logo9}
                  style={{ height: 40 }}
                  className="m-auto img-fluid text-white"
                  alt="..."
                />
              </div>
            </div>
            <div className="p-3 m-3 d-flex align-self-stretch">
              <div className="hover-scale-rounded object-skew shadow-sm bg-white opacity-9 rounded-sm p-4">
                <img
                  src={logo7}
                  style={{ height: 40 }}
                  className="m-auto img-fluid text-white"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

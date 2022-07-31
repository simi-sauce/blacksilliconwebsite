import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, Card } from '@material-ui/core';

import CountUp from 'react-countup';

export default function Count() {
  return (
    <>
      <div className="">
        <Grid container spacing={6}>
          <Grid className="" item xl={6}>
            {/* <Card> */}
            <Grid className='py-2' container spacing={0}>
              <Grid item lg={4} className="p-3">
                <div className="text-center">
                  <div>
                    <FontAwesomeIcon
                      icon={['fas', 'fa-diagram-project']}
                      className="bul"
                    />
                  </div>
                  <div className="mt-2 line-height-sm">
                    <b className="num font-size-lg">
                      <CountUp
                        start={0}
                        end={170}
                        duration={12}
                        deplay={2}
                        separator=" "
                        decimals={0}
                        decimal=","
                        // prefix="$ "
                        suffix=""
                      />
                    </b>
                    <span className="cl text-black d-block">Projects</span>
                  </div>
                </div>
              </Grid>
              <Grid item lg={4} className="p-3">
                <div className="text-center">
                  <div>
                    <FontAwesomeIcon
                      icon={['fas', 'user-group']}
                      className="bul"
                    />
                  </div>
                  <div className="mt-2 line-height-sm">
                    <b className="num font-size-lg">
                      <CountUp
                        start={0}
                        end={63}
                        duration={12}
                        deplay={2}
                        separator=""
                        decimals={0}
                        decimal=","
                        prefix=""
                        suffix=""
                      />
                    </b>
                    <span className="cl text-black d-block">Clients</span>
                  </div>
                </div>
              </Grid>
              <Grid item lg={4} className="p-3">
                <div className="text-center">
                  <div>
                    <FontAwesomeIcon
                      icon={['fas', 'fa-medal']}
                      className="bul"
                    />
                  </div>
                  <div className="mt-2 line-height-sm">
                    <b className="num font-size-lg">
                      <CountUp
                        start={0}
                        end={21}
                        duration={9}
                        separator=""
                        decimals={0}
                        decimal=","
                        prefix=""
                        suffix=""
                      />
                    </b>
                    <span className="cl text-black d-block">
                      Years Of Experience
                    </span>
                  </div>
                </div>
              </Grid>
            </Grid>
            {/* </Card> */}
          </Grid>
        </Grid>
      </div>
    </>
  );
}

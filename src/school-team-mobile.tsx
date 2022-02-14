import React, {FunctionComponent} from 'react';
import './school-team.css';
import Grid from '@mui/material/Grid';
import Tigor from "./assets/tigor-small.png";
import Shino from "./assets/shino-small.png";
import Aoi from "./assets/aoi-small.png";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const SchoolTeamMobile: FunctionComponent = ()=>{

    return (
        <Grid container
                direction="column"
                justifyContent="center"
                alignItems="center"
                sx={{
                    paddingBottom: "15vh",
                    margin:0,
                    overflow: "hidden"
                }}>

            <Grid container
                  spacing={2}
                  alignItems="center"
                  justifyContent="center"
                  sx={{
                      height: "auto",
                      fontFamily: "BaksoSapi",
                      paddingTop: "5vh",
                  }}
                  >
                <Grid item xs={12}
                      sx={
                          {
                              textAlign: "center",
                              fontSize: "10vw"
                          }
                      }
                >
                    SCHOOL TEAM
                    <br/>
                </Grid>
                <Grid item xs={12}
                      sx={
                          {
                              textAlign: "center",
                              fontSize: "3vh"
                          }
                      }
                >
                    <img src={Shino} alt={"Shino"} style={{
                        height: "30vh"
                    }} />
                    <p>Shino</p>
                    <p>Gakuen Cho</p>
                </Grid>
                <Grid item xs={12}
                      sx={
                          {
                              textAlign: "center",
                              fontSize: "3vh"
                          }
                      }
                >
                    <img src={Tigor} alt={"tigor"} style={{
                        height: "30vh"
                    }} />
                    <p>Tigor Cendarma</p>
                    <p>School Manager</p>
                </Grid>
                <Grid item xs={12}
                      sx={
                          {
                              textAlign: "center",
                              fontSize: "3vh"
                          }
                      }
                >
                    <img src={Aoi} alt={"aoi"} style={{
                        height: "30vh"
                    }} />
                    <p>Murakami Aoi</p>
                    <p>Art Teacher</p>
                </Grid>
                <Grid item xs={12}
                      sx={
                          {
                              textAlign: "center",
                              fontSize: "3vh",
                              height: "10vh",
                          }
                      }
                      className={"joinNow"}
                >
                    <p>Join Our Community Now!</p>
                    <p ><ArrowDownwardIcon sx={{paddingLeft:"0vw",paddingRight: "26vw"}}/><ArrowDownwardIcon sx={{paddingRight: "26vw"}}/><ArrowDownwardIcon/></p>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default SchoolTeamMobile;
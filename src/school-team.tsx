import React, {FunctionComponent} from 'react';
import './school-team.css';
import Grid from '@mui/material/Grid';
import Tigor from "./assets/tigor-small.png";
import Shino from "./assets/shino-small.png";
import Aoi from "./assets/aoi-small.png";

const SchoolTeam: FunctionComponent = ()=>{

    return (
        <Grid container
                direction="column"
                justifyContent="center"
                alignItems="center"
                className="schoolTeamContainer">

            <Grid container
                  id="team"
                  spacing={2}
                  alignItems="center"
                  justifyContent="center"
                  className="schoolTeamTitle"
                  >
                <Grid item xs={12}>
                    SCHOOL TEAM
                    <br/>
                </Grid>
            </Grid>
            <Grid container
                  spacing={2}
                  alignItems="center"
                  justifyContent="center"
                  className="schoolTeamDetail"
            >
                <Grid item xs={4} className="member">
                    <Grid item xs={12} className="gridcard">
                        <img src={Tigor} alt={"cards"} className="cards" />
                    </Grid>
                    <Grid item xs={12} className="name">
                        Tigor Cendarma
                    </Grid>
                    <Grid item xs={12} className="title">
                        School Manager
                    </Grid>
                </Grid>
                <Grid item xs={4} className="member">
                    <Grid item xs={12} className="gridcard">
                        <img src={Shino} alt={"Cho"} className="cards" />
                    </Grid>
                    <Grid item xs={12} className="name">
                        Shino
                    </Grid>
                    <Grid item xs={12} className="title">
                        Gakuen Cho
                    </Grid>
                </Grid>
                <Grid item xs={4} className="member">
                    <Grid item xs={12} className="gridcard">
                        <img src={Aoi} alt={"cards"} className="cards" />
                    </Grid>
                    <Grid item xs={12} className="name">
                        Murakami Aoi
                    </Grid>
                    <Grid item xs={12} className="title">
                        Art Teacher
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default SchoolTeam;
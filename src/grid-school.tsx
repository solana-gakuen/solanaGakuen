import {Button, Grid, Box} from '@material-ui/core';
import React, { FunctionComponent, useEffect} from 'react';
import './grid-school.css';
 import IconImage from "./assets/solana_school_icon-min.png";
import {ParallaxBanner, useParallax} from 'react-scroll-parallax';
import Background from './assets/solana_school_backdrop_v2.png';
import Gate from './assets/solana_school_gate_v2.png';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const GridSchool: FunctionComponent = ()=>{

    const logo = useParallax<HTMLDivElement>({
        easing: 'easeOutQuad',
        translateY: [-25, 0],
    });

    const opacity = useParallax<HTMLDivElement>({
        speed: -5,
        opacity: [2, -2],
    });

    const scale = useParallax<HTMLDivElement>({
        speed: -20,
        scale: [0, 2, 'easeInOutCubic'],
        opacity: [5, -2]
    });


    return (
        <Grid   container
                id="home"
                direction="column"
                alignItems="center"
                className="gridSchoolContainer">
            <span  className="background">
                <ParallaxBanner
                    layers={[
                        {
                            image: Background,
                            speed: -15,
                            scale: [1, 2],
                            translateY: [0, 5],
                            opacity: [1.5, -2],
                            easing: 'easeInCubic',
                        },
                        {
                            image: Gate,
                            speed: -5,
                            scale: [1, 2.5],
                            translateY: [5, 5],
                            translateX: [-3, -3],
                            opacity: [1.5, -2],
                            easing: 'easeInCubic',
                        },
                    ]}
                    style={{ aspectRatio: '2 / 1', opacity: "0.8", zIndex: -1, height: "100vh" }}
                />
            </span>
            <Grid className="buttonlogo">
                <Grid container direction="column">
                    <div ref={logo.ref}>
                        <img src={IconImage} className="iconImage" alt={"icon image"}/>
                    </div>
                </Grid>
                <Grid container direction="column" className="topic" ref={scale.ref}>
                    <h2>Solana Gakuen</h2>
                    A Hand Drawn NFT Project in Solana
                </Grid>
                <Grid container direction="column"
                      className={" object"}
                      ref={opacity.ref}
                >
                    <div style={{
                        height: "auto",
                        textAlign: "center",
                        fontFamily: "BaksoSapi",
                        position: "absolute",
                        bottom: "5vh",
                        width: "100%",
                        color: "#3A3A70",
                        fontSize: "1.5em",
                        textShadow: "2px 2px 5px white"
                    }}>
                        Read More
                        <br/>
                        <ArrowDropDownIcon/>
                    </div>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default GridSchool;
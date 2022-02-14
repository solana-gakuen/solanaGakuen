import React, { FunctionComponent, useEffect} from 'react';
import IconImage from "./assets/solana_school_icon-min.png";
import Background from './assets/solana_school_full_v2_mobile_v2-min.png';
import Grid from '@mui/material/Grid';
import {ParallaxBanner, useParallax} from "react-scroll-parallax";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './grid-school.css';

const GridSchool: FunctionComponent = ()=>{
    useEffect(() => {

    });

    const opacity = useParallax<HTMLDivElement>({
        speed: -10,
        opacity: [2, -5],
    });

    const scale = useParallax<HTMLDivElement>({
        speed: -20,
        scale: [1, 1, 'easeInOutCubic'],
        opacity: [5, -3],
        style: {
            overflow: "hidden",
        }
    });

    return (
        <Grid container spacing={2} sx={{
            height: "auto",
            minHeight: "100vh",
            margin:0,
        }}>
            <span style={{
            }}>
                <ParallaxBanner
                    layers={[
                        {
                            image: Background,
                            speed: -35,
                            scale: [0.9, 3],
                            translateY: [0, 5],
                            // translateX: [3, 3],
                            opacity: [1, 0],
                            easing: 'easeInCubic',
                        },
                    ]}
                    style={{ aspectRatio: '2 / 1', position: "absolute", height: "100vh", zIndex: -1}}
                />
            </span>
            <Grid item xs={12} sx={{
                height: "20vh",
            }}>
                <img src={IconImage} className="iconImage" alt={"icon image"} style={{
                    display: "block",
                    marginTop: "auto",
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "50%",
                    maxWidth: "300px",
                }}/>
            </Grid>
            <Grid item xs={12} ref={scale.ref} sx={{
                    height: "60vh",
                    textAlign: "center",
                    fontFamily: "BaksoSapi",
                    width: "100%",
                    fontSize: "3vh",
                    top: "10vh",
                    margin: "0 5vw 0 5vw",
                    color: "#3A3A70",
                    textShadow: "0px 0px 20px #FFFFFF",
                }}
                // className={"mobileText"}
            >
                <h2>Solana Gakuen</h2>
                A Hand Drawn NFT Project In Solana
            </Grid>
            <Grid item xs={12} ref={opacity.ref} sx={{
                height: "auto",
                textAlign: "center",
                fontFamily: "BaksoSapi",
                position: "absolute",
                bottom: "10vh",
                width: "100%",
                color: "#3A3A70"
            }}
                  className={" object"}>
                Read More
                <br/>
                <ArrowDropDownIcon/>
            </Grid>
        </Grid>
    );
}

export default GridSchool;
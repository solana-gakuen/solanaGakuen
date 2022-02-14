import React, {FunctionComponent, useEffect, useState} from 'react';
import './roadmap.css';
import IconImage from "./assets/solana_road_map_icon.jpg";
import "./assets/font/kghappy.ttf";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {useParallax} from "react-scroll-parallax";
import { Fade, Slide } from '@material-ui/core';
import ReactDOM from 'react-dom';

const GridRoadmap: FunctionComponent = ()=>{

    const [show, setShow] = useState(false);

    useEffect(() => {
        // setShow(true);
    }, []);

    const title = useParallax<HTMLDivElement>({
        translateY: [100, 0, 'easeOutQuint'],
    });

    const progress25 = useParallax<HTMLDivElement>({
        translateX: [0, 25, 'easeOutQuint'],
    });

    const progress50 = useParallax<HTMLDivElement>({
        translateX: [0, 25, 'easeOutQuint'],
    });

    const progress75 = useParallax<HTMLDivElement>({
        translateX: [0, 25, 'easeOutQuint'],
    });

    const progress100 = useParallax<HTMLDivElement>({
        translateX: [0, 25, 'easeOutQuint'],
    });

    const content25 = useParallax<HTMLDivElement>({
        translateX: [70, 10, 'easeOutQuint'],
    });

    const content50 = useParallax<HTMLDivElement>({
        translateX: [70, 10, 'easeOutQuint'],
    });

    const content75 = useParallax<HTMLDivElement>({
        translateX: [70, 10, 'easeOutQuint'],
    });

    const content100 = useParallax<HTMLDivElement>({
        translateX: [70, 10, 'easeOutQuint'],
    });

    return (
        <Grid container
                id="roadmap"
                direction="column"
                justifyContent="center"
                alignItems="center"
                className="gridRoadmapContainer">
            <div className="background"></div>
            <Grid container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  className="gridRoadmapTitle">
                <div ref={title.ref}>
                    School Calendar
                </div>
            </Grid>
            <Grid container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  className="gridRoadmapDetail">
                <Box sx={{ flexGrow: 1 }}>
                    {/*<Grid item xs={12} sx={{*/}
                    {/*    height: "auto",*/}
                    {/*    minHeight: "5vh",*/}
                    {/*    fontFamily: "FuturaHandwritten",*/}
                    {/*    fontSize: "2em",*/}
                    {/*    textAlign: "center",*/}
                    {/*    textShadow: "5px 8px 7px #0b2242",*/}
                    {/*    marginLeft: "15vw"*/}
                    {/*}}>*/}
                    {/*    <h3>*/}
                    {/*        1st Semester: Solana Gakuen Opening Ceremony!*/}
                    {/*    </h3>*/}
                    {/*    <h3>*/}

                    {/*    </h3>*/}
                    {/*</Grid>*/}
                    {/*<Grid item xs={12} sx={{*/}
                    {/*    height: "auto",*/}
                    {/*    minHeight: "40vh",*/}
                    {/*    fontFamily: "FuturaHandwritten",*/}
                    {/*    fontSize: "1em",*/}
                    {/*    textAlign: "justify",*/}
                    {/*    marginLeft: "15vw"*/}
                    {/*    // textShadow: "2px 2px 5px black"*/}
                    {/*}}>*/}
                    {/*    <ul style={{fontSize: "1.5em", textAlign: "justify", padding: "10vh 15vw 0 15vw"}}>*/}
                    {/*        <li  style={{paddingBottom: "10%"}}>*/}
                    {/*            10,000 unique student cards will be minted.*/}
                    {/*        </li>*/}
                    {/*        <li style={{paddingBottom: "10%"}}>*/}
                    {/*            Besides the student card in wallet, owners will also be able to visit their Solana Girls through this site.*/}
                    {/*        </li>*/}
                    {/*    </ul>*/}
                    {/*</Grid>*/}
                    <Grid container spacing={5}>
                        <Grid item xs={4} className="roadmapPercentage" ref={progress25.ref}>
                            1st Semester:<br/><br/>
                        </Grid>
                        <Grid item xs={8}  className="roadmapContent" ref={content25.ref}>
                            <h1>Solana Gakuen Opening Ceremony!</h1>
                            <br/>
                            <ul style={{fontSize: "1.5em", textAlign: "justify", fontFamily: "FuturaHandwritten",}}>
                                <li  style={{paddingBottom: "5%"}}>
                                    10,000 unique student cards will be minted.
                                </li>
                                <li style={{paddingBottom: "5%"}}>
                                    Besides the student card in wallet, owners will also be able to visit their Solana Girls through this site.
                                </li>
                            </ul>
                        </Grid>
                        <Grid item xs={4} className="roadmapPercentage" ref={progress50.ref}>
                            2nd Semester
                        </Grid>
                        <Grid item xs={8}  className="roadmapContent" ref={content50.ref}>
                            <h1>Seasonal & animated NFTs are coming!</h1>
                            <br/>
                            <ul style={{fontSize: "1.5em", textAlign: "justify", fontFamily: "FuturaHandwritten",}}>
                                <li  style={{paddingBottom: "5%"}}>
                                    Seasonal items and clothes are coming!
                                </li>
                                <li style={{paddingBottom: "5%"}}>
                                    SOLGs from the student council will be animated one by one!
                                </li>
                                <li style={{paddingBottom: "5%"}}>
                                    You can change your SOLG decorations!
                                </li>
                            </ul>
                        </Grid>
                        <Grid item xs={4} className="roadmapPercentage" ref={progress75.ref}>
                            3rd Semester
                        </Grid>
                        <Grid item xs={8}  className="roadmapContent" ref={content75.ref}>
                            <h1>Seasonal & animated NFTs are coming!</h1>
                            <br/>
                            <ul style={{fontSize: "1.5em", textAlign: "justify", fontFamily: "FuturaHandwritten",}}>
                                <li  style={{paddingBottom: "5%"}}>
                                    School acitivities such as the sport day and the election of student council will be held.
                                </li>
                                <li style={{paddingBottom: "5%"}}>
                                    Win awsome prizes by joining the events!
                                    <br/><br/>
                                    <ul>
                                        <li style={{paddingBottom: "5%"}}>Get extra clothes and accessories NFTs to dress your SOLG!</li>
                                        <li style={{paddingBottom: "5%"}}>Allow your SOLG to gain a role in the Solana Gakuen comics!</li>
                                        <li style={{paddingBottom: "5%"}}>Earn physical goods such as figures!</li>
                                    </ul>
                                </li>
                            </ul>
                        </Grid>
                        <Grid item xs={4} className="roadmapPercentage" ref={progress100.ref}>
                            4th Semester
                        </Grid>
                        <Grid item xs={8} className="roadmapContent" ref={content100.ref}>
                            <h1>Cross Chain Gakuens on live!</h1>
                            <br/>
                            <p  style={{fontSize: "1.5em", textAlign: "justify", fontFamily: "FuturaHandwritten",}}>The more awakened tokens, the more GAKUEN are needed, who knows?</p>
                            <ul style={{fontSize: "1.5em", textAlign: "justify", fontFamily: "FuturaHandwritten",}}>
                                <li style={{paddingBottom: "5%"}}>Etherum?</li>
                                <li style={{paddingBottom: "5%"}}>Cronos?</li>
                                <li style={{paddingBottom: "5%"}}>Avalanche?</li>
                            </ul>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    );
}

export default GridRoadmap;
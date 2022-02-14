import React, {FunctionComponent, useEffect, useState} from 'react';
import './roadmap.css';
import "./assets/font/kghappy.ttf";
import Grid from '@mui/material/Grid';
import Background from "./assets/solana_roadmap_blackboard_new.png";
import {useParallax} from "react-scroll-parallax";

const GridRoadmapMobile: FunctionComponent = ()=>{

    const [show, setShow] = useState(false);

    useEffect(() => {
        // setShow(true);
    }, []);

    const title = useParallax<HTMLDivElement>({
        translateY: [100, 0, 'easeOutQuint'],
        opacity: [0, 2],
    });
    const content_sem_1 = useParallax<HTMLDivElement>({
        translateY: [100, 0, 'easeOutQuint'],
        opacity: [0, 2],
    });

    const content_sem_2 = useParallax<HTMLDivElement>({
        translateY: [100, 0, 'easeOutQuint'],
        opacity: [0, 2],
    });


    const content_sem_3 = useParallax<HTMLDivElement>({
        translateY: [100, 0, 'easeOutQuint'],
        opacity: [0, 2],
    });

    const content_sem_4 = useParallax<HTMLDivElement>({
        translateY: [100, 0, 'easeOutQuint'],
        opacity: [0, 2],
    });

    return (
        <div style={{
            backgroundImage: "url("+Background+")",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height:"auto",
            margin:0,
            overflow: "hidden",

        }}>
            <Grid container spacing={2}
            sx={
                {
                    backgroundColor: "rgba(137,215,215,0)",
                    paddingTop: "5vh",
                    paddingBottom: "5vh",
                    color: "white",
                    marginTop: "0vh",
                }
            }>
                <Grid item xs={12} ref={title.ref} sx={{
                    height: "auto",
                    fontFamily: "KgHappy",
                    fontSize: "15vw",
                    textAlign: "center",
                }} >
                    School Calendar
                </Grid>
                <span ref={content_sem_1.ref} style={{margin: "0 5vw 0 5vw"}}>
                    <Grid item xs={12} sx={{
                        height: "auto",
                        minHeight: "20vh",
                        fontFamily: "FuturaHandwritten",
                        fontSize: "6vw",
                        textAlign: "center",
                        textShadow: "5px 8px 7px #0b2242",
                    }}>
                        <h3>
                                1st Semester:<br/><br/>Solana Gakuen Opening Ceremony!
                        </h3>
                        <h3>

                        </h3>
                    </Grid>
                    <Grid item xs={12} sx={{
                        height: "auto",
                        minHeight: "40vh",
                        fontFamily: "FuturaHandwritten",
                        fontSize: "6vw",
                        textAlign: "justify",
                        marginTop: "-3vh",
                        marginLeft: "5vw",
                        // textShadow: "2px 2px 5px black"
                    }}>
                        <ul style={{fontSize: "5vw", textAlign: "justify", padding: "7vw"}}>
                            <li  style={{paddingBottom: "10%"}}>
                                10,000 unique student cards will be minted.
                            </li>
                            <li style={{paddingBottom: "10%"}}>
                                Besides the student card in wallet, owners will also be able to visit their Solana Girls through this site.
                            </li>
                        </ul>
                    </Grid>
                </span>
                <span ref={content_sem_2.ref} style={{margin: "0 5vw 0 5vw"}}>
                    <Grid item xs={12} sx={{
                        height: "auto",
                        minHeight: "15vh",
                        fontFamily: "FuturaHandwritten",
                        fontSize: "6vw",
                        textAlign: "center",
                        marginLeft: "5vw",
                        textShadow: "5px 8px 7px #0b2242",
                    }}>
                        <h3>2nd Semester:<br/><br/>Seasonal & animated NFTs are coming!</h3>
                    </Grid>
                    <Grid item xs={12} sx={{
                        height: "auto",
                        minHeight: "40vh",
                        fontFamily: "FuturaHandwritten",
                        fontSize: "6vw",
                        textAlign: "center",
                        marginTop: "-3vh",
                        marginLeft: "5vw",
                        // textShadow: "2px 2px 5px black"
                        // marginRight: "5vw",
                    }}>
                        <ul style={{fontSize: "5vw", textAlign: "justify", padding: "7vw"}}>
                            <li  style={{paddingBottom: "10%"}}>
                                Seasonal items and clothes are coming!
                            </li>
                            <li style={{paddingBottom: "10%"}}>
                                SOLGs from the student council will be animated one by one!
                            </li>
                            <li style={{paddingBottom: "10%"}}>
                                You can change your SOLG decorations!
                            </li>
                        </ul>
                    </Grid>
                </span>
                <span ref={content_sem_3.ref} style={{margin: "0 5vw 0 5vw"}}>
                    <Grid item xs={12} sx={{
                        height: "auto",
                        minHeight: "15vh",
                        fontFamily: "FuturaHandwritten",
                        fontSize: "6vw",
                        textAlign: "center",
                        textShadow: "5px 8px 7px #0b2242",
                        marginLeft: "5vw",
                    }}>
                            <h3>
                                3rd Semester:<br/><br/>Join School Activities to win surprising items!
                            </h3>
                    </Grid>
                    <Grid item xs={12} sx={{
                        height: "auto",
                        minHeight: "40vh",
                        fontFamily: "FuturaHandwritten",
                        textAlign: "center",
                        marginTop: "-3vh",
                        marginLeft: "5vw",
                    }}>
                        <ul style={{fontSize: "5vw", textAlign: "justify", padding: "7vw"}}>
                            <li  style={{paddingBottom: "10%"}}>
                                School acitivities such as the sport day and the election of student council will be held.
                            </li>
                            <li style={{paddingBottom: "10%"}}>
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
                </span>
                <span ref={content_sem_4.ref} style={{margin: "0 5vw 0 5vw"}}>
                    <Grid item xs={12} sx={{
                        height: "auto",
                        minHeight: "15vh",
                        fontFamily: "FuturaHandwritten",
                        fontSize: "6vw",
                        textAlign: "center",
                        marginLeft: "2vw",
                        textShadow: "5px 8px 7px #0b2242",
                    }}>
                        <h3>4th Semester:<br/><br/>Cross Chain Gakuens on live!</h3>
                    </Grid>
                    <Grid item xs={12} sx={{
                        height: "auto",
                        minHeight: "40vh",
                        fontFamily: "FuturaHandwritten",
                        fontSize: "5vw",
                        textAlign: "center",
                        marginTop: "-3vh",
                        marginLeft: "5vw",
                    }}>
                        <p  style={{fontSize: "5vw", textAlign: "justify", padding: "7vw"}}>The more awakened tokens, the more GAKUEN are needed, who knows?
                                <ul>
                                    <li style={{paddingBottom: "5%"}}>Etherum?</li>
                                    <li style={{paddingBottom: "5%"}}>Cronos?</li>
                                    <li style={{paddingBottom: "5%"}}>Avalanche?</li>
                                </ul>
                        </p>
                    </Grid>
                </span>
            </Grid>
        </div>
    );
}

export default GridRoadmapMobile;
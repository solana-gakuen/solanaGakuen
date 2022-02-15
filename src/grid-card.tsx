import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React, {FunctionComponent, useEffect} from 'react';
import './grid-card.css';
import Cards from './assets/solana_student_card_x6_v3.png';
import Bar from './assets/dot_bar.png';
import {ParallaxBanner, useParallax} from "react-scroll-parallax";
import DialogGirlImage from "./assets/solana_chan_live2d_v4.gif";

const GridCard: FunctionComponent = ()=>{

    useEffect(() => {

    });
    const card = useParallax<HTMLDivElement>({
        translateX: [-50, 0, 'easeInQuad'],
        translateY: [-25, -25, 'easeInQuad'],
        opacity: [0.8, 0.8],
    });
    const bar = useParallax<HTMLDivElement>({
        translateX: [0, -50, 'easeInQuad'],
        translateY: [100, 100, 'easeInQuad'],
        opacity: [0, 5],
    });

    const girl = useParallax<HTMLDivElement>({
        easing: 'easeOutQuint',
        translateX: [-100, 10],
        translateY: [50, 0],
        opacity: [-1, 1],
    });

    const dialog = useParallax<HTMLDivElement>({
        easing: 'easeOutQuint',
        translateX: [100, -10],
        translateY: [50, 0],
        opacity: [-1, 1],
    });

    return (

        <Box sx={{ position: "relative", flexGrow: 1, width: "100%", overflow: "hidden"}}>
            <Grid container spacing={2}>
                <Grid item xs={6} sx={{height: "100vh", margin: "auto"}}>
                    <div ref={girl.ref} style={{height: "70%",margin: "15%"}}>
                        <img src={DialogGirlImage} alt={"dialogGirl"} style={{
                            height: "100%",
                            zIndex: 1,
                            borderRadius: "50vw",
                        }} />
                    </div>
                </Grid>
                <Grid item xs={6} sx={{margin: "auto"}}>
                    <div ref={dialog.ref} style={{position: "relative"}}>
                        <Box sx={{
                            margin: "auto",
                            width: "80%",
                            fontFamily: "BaksoSapi",
                            padding:"5% 3% 5% 7%",
                            zIndex: 100,
                            lineHeight: 1.8,
                            fontSize: "1.5vw",
                            color: 'rebeccapurple',
                            borderRadius: "25px",
                            boxShadow: "1px 2px 5px 3px #AA99D6",
                            backgroundColor: "white",
                        }}>
                            <p id="dialogTitle">10,000 Unique Solana Girls are waiting for you!</p>
                            <p style={{fontFamily: "FuturaHandwritten"}}>
                                Someday in 2022, the tokens in your wallet realised their own consciousness and become a Solana Girl (SOLG). You decided to send her to Solana Gakuen, developing her talent by joining lots of different activities and experience a happy school life. What incredible things are waiting for her?
                            </p>
                        </Box>
                    </div>
                    <div
                        ref={bar.ref}
                        style={{
                            position: "absolute",
                            left: 0,
                            top: "10%",
                            zIndex: -10,
                        }}
                    >
                        <img src={Bar} alt={"bar"} style={{
                            transform: "rotate(20deg)",
                        }} />
                    </div>
                </Grid>


                <Grid xs={12} sx={{height: "50vh"}}>
                    <div
                        ref={card.ref}
                    >
                        <img src={Cards} alt={"cards"} style={{
                            transform: "rotate(-10deg)",
                        }} />
                    </div>
                </Grid>
            </Grid>
        </Box>
    );
}

export default GridCard;
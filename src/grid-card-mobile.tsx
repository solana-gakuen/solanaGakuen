import React, { FunctionComponent, useEffect} from 'react';
import {ParallaxBanner, useParallax} from 'react-scroll-parallax';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Bar from "./assets/dot_bar.png";
import DialogGirlImage from './assets/solana_chan_live2d_v4.gif';
import "./assets/font/Nunito-Italic-VariableFont_wght.ttf";

const GridCardMobile: FunctionComponent = ()=>{

    useEffect(() => {

    });

    const opacity = useParallax<HTMLDivElement>({
        speed: -10,
        opacity: [-1, 5],
        translateY: [-20, -10, 'easeOutQuint'],
        translateX: [0, 0, 'easeOutQuint'],
    });

    const opacityGirl = useParallax<HTMLDivElement>({
        speed: -10,
        opacity: [-1, 3],
    });

    const bar = useParallax<HTMLDivElement>({
        translateX: [-50, 50, 'easeOutQuint'],
        translateY: [270, 270, 'easeOutQuint'],
        scale: [6,6],
    });

    return (
        <Grid container spacing={2} sx={
            {
                height: "100vh",
                overflow: "hidden",
                backgroundColor: "#fAfAfA",
                zIndex: -2,
            }
        }>
            <Grid item xs={12} ref={opacityGirl.ref} sx={{
                height: "auto",
            }}>
                <img src={DialogGirlImage} alt={"dialogGirl"} style={{
                    width: "100vw",
                    zIndex: 1,
                }}/>
            </Grid>
            <div ref={bar.ref} style={{
                zIndex: -100,
                overflow: "hidden"
            }}>
                <img src={Bar} alt={"bar"}
                     style={{
                         height: "10vh",
                         zIndex: -1,
                     }}/>
            </div>
            <Grid item xs={12} sx={{
                height: "auto",
                marginTop: "-6vh",
                zIndex: 100,
            }}>
                <Box ref={opacity.ref}  sx={
                    {
                        border: 1,
                        backgroundColor: "white",
                        fontFamily: "FuturaHandwritten",
                        width: "85%",
                        zIndex: 1,
                        lineHeight: 2,
                        fontSize: "4vw",
                        color: "#3A3A70",
                        borderRadius: "25px",
                        textShadow: "2px 2px white",
                        boxShadow: "1px 2px 5px 3px #AA99D6",
                        marginLeft: "7.5vw",
                    }
                }>
                    <p id="dialogTitle" style={{
                        fontSize: "5vw",
                        color: "#3A3A70",
                        paddingLeft: "5vw",
                        paddingRight: "5vw",
                        fontFamily: "BaksoSapi",
                    }}>10,000 Unique Solana Girls are waiting for You!</p>
                    <p style={
                        {
                            paddingLeft: "5vw",
                            paddingRight: "5vw",
                            lineHeight: "1.5",
                            textAlign: "justify"
                        }
                    }>
                        Someday in 2022, the tokens in your wallet realised their own consciousness and become a Solana Girl (SOLG). You decided to send her to Solana Gakuen, developing her talent by joining lots of different activities and experience a happy school life. What incredible things are waiting for her?
                    </p>
                </Box>

            </Grid>

        </Grid>
    );
}

export default GridCardMobile;
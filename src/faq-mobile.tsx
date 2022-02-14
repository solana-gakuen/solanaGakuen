import React, {FunctionComponent, useEffect} from 'react';
import './faq.css';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import {ParallaxBanner, useParallax} from "react-scroll-parallax";
import FAQImg from "./assets/faq_bg.png";
import "./assets/font/FuturaHandwritten.ttf";
import Divider from '@mui/material/Divider';


const FaqMobile: FunctionComponent = ()=>{

    const [open_faq_1, set_open_faq_1] = React.useState(true);
    const [open_faq_2, set_open_faq_2] = React.useState(false);
    const [open_faq_3, set_open_faq_3] = React.useState(false);

    const handle_click_faq = (index: string) => {
        switch (index) {
            case "1":
                set_open_faq_1(!open_faq_1);
                break;
            case "2":
                set_open_faq_2(!open_faq_2);
                break;
            case "3":
                set_open_faq_3(!open_faq_3);
                break;
        }
    };

    return (
        <Grid container
                id="faq"
                direction="column"
                justifyContent="center"
                alignItems="center"
                className="faqContainer">
            <div>
                <span  style={{
                    position: "absolute",
                    width: "300%",
                    right: 0,
                    zIndex: -1
                }}>
                <ParallaxBanner
                    layers={[
                        {
                            image: FAQImg,
                            speed: -10,
                            translateY: [0, 100],
                            easing: 'easeInOut',
                        },
                    ]}
                    style={{ aspectRatio: '2 / 1', height: "300vh", opacity: "0.6" }}
                />
            </span>
            </div>
            <Grid direction="column" sx={{
                marginTop:"10%",
                padding: "10px 0% 10px 0%",
                background: "#f6b0bb",
                width:"30vw",
                marginBottom: "3vh",
                fontSize: "250%",
                textAlign: "center",
                color: "white",
                borderRadius: "50px",
                fontFamily: "BaksoSapi",
                textShadow: "2px 2px 5px #8c6068"
            }}>
                FAQ
            </Grid>
            <Grid direction="column" sx={{
                padding:" 1% 0% 10% 0%",
                width:"90vw",
            }}>
                <List
                    sx={{width: '100%', backgroundColor: "#f6b0bb", borderRadius: "25px",}}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                >
                    <ListItemButton onClick={()=>handle_click_faq("1")} >
                        <ListItemText>
                            <div style={{fontSize: "5vw", textShadow: "2px 2px 5px #8c6068"}}>What Is Solana Gakuen Aim For? Why so special?</div>
                        </ListItemText>
                        {open_faq_1 ?  <ExpandLess  sx={{
                            color: "white"
                        }} /> : <ExpandMore sx={{
                            color: "white"
                        }} />}
                    </ListItemButton>
                    <Collapse in={open_faq_1} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton >
                                <ListItemText sx={{  backgroundColor: "#ffcccc", borderRadius: "25px", padding:"0"}} >
                                    <p style={{padding: "0 5% 0 5%", textAlign: "justify", fontSize: "4vw", textShadow: "2px 2px 5px #8c6068"}}>Solana Gakuen is a long term project. It aims for building a school simulation universe while acting as a bridge between the anime industry and the crypto world.</p>

                                    <p style={{padding: "0 5% 0 5%", textAlign: "justify", fontSize: "4vw", textShadow: "2px 2px 5px #8c6068"}}>
                                        We focus on providing a new platform in the crypto world for anime artists, especially "doujin" artists to gain exposure and earn extra incomes.
                                    </p>

                                    <p style={{padding: "0 5% 0 5%", textAlign: "justify", fontSize: "4vw", textShadow: "2px 2px 5px #8c6068"}}>
                                        Stories, comics, physical goods and even a Gakuen Metaverse will be created by collaborating with artists and the community.
                                    </p>
                                </ListItemText>
                            </ListItemButton>
                        </List>
                    </Collapse>
                    <Divider/>
                    <ListItemButton onClick={()=>handle_click_faq("2")}>
                        <ListItemText>
                            <div style={{fontSize: "5vw", textShadow: "2px 2px 5px #8c6068"}}> What is doujin and why?</div>
                        </ListItemText>
                        {open_faq_2 ? <ExpandLess  sx={{
                            color: "white"
                        }} /> : <ExpandMore sx={{
                            color: "white"
                        }} />}
                    </ListItemButton>
                    <Collapse in={open_faq_2} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton>
                                <ListItemText sx={{  backgroundColor: "#ffcccc", borderRadius: "25px", padding:"0"}}>
                                    <p style={{padding: "0 5% 0 5%", textAlign: "justify", fontSize: "4vw", textShadow: "2px 2px 5px #8c6068"}}>
                                        Many anime events, especially doujin (self-published creative works) conventions are cancelled around the world due to the covid pandemic,
                                        causing damage to the income for doujin artists.
                                    </p>
                                    <p style={{padding: "0 5% 0 5%", textAlign: "justify", fontSize: "4vw", textShadow: "2px 2px 5px #8c6068"}}>
                                        Therefore, we would like to create an extra platform to share their artworks and to provide freelance opportunities.
                                    </p>
                                </ListItemText>
                            </ListItemButton>
                        </List>
                    </Collapse>
                    <Divider/>
                    <ListItemButton onClick={()=>handle_click_faq("3")}>
                        <ListItemText>
                            <div style={{fontSize: "5vw", textShadow: "2px 2px 5px #8c6068"}}> What is the meaning of cross chain Gakuen?</div>
                        </ListItemText>
                        {open_faq_3 ? <ExpandLess  sx={{
                            color: "white"
                        }} /> : <ExpandMore sx={{
                            color: "white"
                        }} />}
                    </ListItemButton>
                    <Collapse in={open_faq_3} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding  >
                            <ListItemButton sx={{}}>
                                <ListItemText sx={{  backgroundColor: "#ffcccc", borderRadius: "25px", padding:"0"}}>
                                    <p style={{padding: "5%", textAlign: "justify", fontSize: "4vw", textShadow: "2px 2px 5px #8c6068"}}>We are aim for develop a cross crypto networks project that we will not be limited to only one crypto network. We are targeting to become a pioneer to connect users between different networks and provide a extendable and scalable community & universe to our school students!</p>
                                </ListItemText>
                            </ListItemButton>
                        </List>
                    </Collapse>
                </List>
            </Grid>
        </Grid>
    );
}

export default FaqMobile;
import {AppBar, Button, Grid, IconButton, Toolbar, Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React, {FunctionComponent} from 'react';
import './header.css';
import LogoImg from './assets/solana-gakuen-logo-01.png'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import HomeIcon from '@mui/icons-material/Home';

const Header: FunctionComponent = ()=>{
    const handleGotoSection = () => {
        window.scrollTo({
            top: 500 ,
            behavior: 'smooth'
        })
    }

    return (
        <Grid className="headerContainer">
            <AppBar position="static">
                <Toolbar>
                    {/*<IconButton edge="start" className="menuButton"  aria-label="menu">*/}
                    {/*    <MenuIcon />*/}
                    {/*</IconButton>*/}
                    <img src={LogoImg} className="logoImg" alt={"Logo image"} />
                    <Typography className="title">Solana Gakuen</Typography>
                    <Button color="inherit" className="navigate" href="#roadmap">Calendar</Button>
                    <Button color="inherit" className="navigate" href="#faq">FAQ</Button>
                    <Button color="inherit" className="navigate" href="#team">Team</Button>
                    <Button color="inherit"
                            className="navigate social"
                            href={"https://discord.gg/RAjAVpZkWN"}
                            target={"_blank"}>
                        <SportsEsportsIcon/>DC
                    </Button>
                    <Button
                        color="inherit"
                        className="navigate social"
                        href={"https://twitter.com/SolanaGakuen"}
                        target={"_blank"}>
                        <TwitterIcon/>TW</Button>
                    <Button color="inherit"
                            className="navigate social"
                            href={"https://www.instagram.com/solana_gakuen"}
                            target={"_blank"}><InstagramIcon/>IG</Button>

                </Toolbar>
            </AppBar>
        </Grid>
    );
}

export default Header;
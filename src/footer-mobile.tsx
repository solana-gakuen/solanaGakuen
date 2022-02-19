import React, {FunctionComponent} from 'react';
import './footer.css';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import HomeIcon from '@mui/icons-material/Home';

const FooterMobile: FunctionComponent = ()=>{

    const [value, setValue] = React.useState('recents');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <BottomNavigation showLabels value={value} onChange={handleChange} sx={{
            fontFamily: "KgHappy",
            // padding: "2% 2% 2% 2%",
            width: "100%",
            position: "fixed",
            bottom: 0,
            zIndex: 1000,
        }}>
            {/*<BottomNavigationAction*/}
            {/*    color="inherit"*/}
            {/*    label="Home"*/}
            {/*    value="home"*/}
            {/*    href={"#home"}*/}
            {/*    icon={<HomeIcon />}*/}
            {/*/>*/}
            <BottomNavigationAction
                color="inherit"
                label=""
                value="twitter"
                href={"https://twitter.com/SolanaGakuen"}
                target={"_blank"}
                icon={<TwitterIcon />}
            />
            <BottomNavigationAction
                color="inherit"
                label=""
                value="instagram"
                href={"https://www.instagram.com/solana_gakuen"}
                target={"_blank"}
                icon={<InstagramIcon />}
            />
            <BottomNavigationAction
                color="inherit"
                label=""
                value="Discord"
                icon={<SportsEsportsIcon />}
                href={"http://discord.gg/EhdeGYyYx2"}
                target={"_blank"}
            />
        </BottomNavigation>
    );
}

export default FooterMobile;
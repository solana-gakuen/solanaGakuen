import React, {FunctionComponent} from 'react';
import './footer.css';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import HomeIcon from '@mui/icons-material/Home';

const Footer: FunctionComponent = ()=>{

    const [value, setValue] = React.useState('recents');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <BottomNavigation showLabels sx={{ width: "100%" }} value={value} onChange={handleChange} className="footer">
            <BottomNavigationAction
                color="inherit"
                label="Home"
                value="home"
                href={"#home"}
                icon={<HomeIcon />}
            />
            <BottomNavigationAction
                color="inherit"
                label="Twitter"
                value="twitter"
                href={"https://twitter.com/SolanaGakuen"}
                target={"_blank"}
                icon={<TwitterIcon />}
            />
            <BottomNavigationAction
                color="inherit"
                label="Instagram"
                value="instagram"
                href={"https://www.instagram.com/solana_gakuen"}
                target={"_blank"}
                icon={<InstagramIcon />}
            />
            <BottomNavigationAction
                color="inherit"
                label="Discord"
                value="Discord"
                icon={<SportsEsportsIcon />}
                href={"http://discord.gg/EhdeGYyYx2"}
                target={"_blank"}
            />
        </BottomNavigation>
    );
}

export default Footer;
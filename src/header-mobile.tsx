import './header-mobile.css';
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Divider from '@mui/material/Divider';
import {FunctionComponent} from "react";

const options = [
    'Homepage',
    'Roadmap',
    'FAQ',
    'School Team',
];

const ITEM_HEIGHT = 50;

const HeaderMobile: FunctionComponent = ()=> {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton
                aria-label="more"
                id="icon"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
                sx={{
                    width: "15vw",
                    height: "15vw"
                }}
            >
                <MoreVertIcon sx={{ fontSize: "12.5vw", color:"white"}}/>
            </IconButton>
            <Menu
                id="menu"
                MenuListProps={{
                    'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        height: "25vh",
                        width: '50vw',
                        fontFamily: "BaksoSapi",
                        backgroundImage: "linear-gradient(-45deg, #0FF4B8 0%, #76D6FB 50%, #AF71FF 80%, #698BF4 100%)",
                        borderRadius: "25px",
                    },
                }}
            >
                {options.map((option) => (
                    <MenuItem key={option} onClick={handleClose} sx={
                        {
                            fontFamily: "BaksoSapi",
                            fontSize:"5vw",
                            color:"white"}
                    }>
                        {option}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}

export default HeaderMobile;
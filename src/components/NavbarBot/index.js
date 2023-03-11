import React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';

import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import { Container, } from "@material-ui/core";
import SearchBar from "material-ui-search-bar";
import { UTLogoBlack, Profile, BuluBulu } from "../../assets/images";
import { Phone, Bell } from "../../assets/icons";
import { getFromLocalStorage } from "utils/userLocalServices";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Lok from 'components/Lokasi';
import { NavLink } from 'react-router-dom';
import style from "./NavbarBot.module.scss"
import { DATADIRI, LOGIN } from 'constants/routes';

const styles = {
    position: 'absolute',
    top: '150%',
    left: '88%',
    transform: 'translate(-50%, -50%)',
    width: 170,
    height: "auto",
    bgcolor: 'background.paper',
    borderRadius: 4,
    boxShadow: 24,
    p: 4,
};
const styling = {
    position: 'absolute',
    top: '130%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 280,
    height: "auto",
    bgcolor: 'background.paper',
    borderRadius: 4,
    boxShadow: 24,
    p: 4,
};

const NavbarBot = () => {

    const isUserLog = getFromLocalStorage();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [open2, setOpen2] = React.useState(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);
    // const [anchorEl, setAnchorEl] = React.useState(null);
    // const [open, setOpen] = React.useState(false);
    // const [placement, setPlacement] = React.useState();

    // const handleClick = (newPlacement) => (event) => {
    //     setAnchorEl(event.currentTarget);
    //     setOpen((prev) => placement !== newPlacement || !prev);
    //     setPlacement(newPlacement);
    // };

    return (

        <Grid className={style["content"]}>

            <img className={style["logo"]} src={BuluBulu} alt="Logo Kami" />

            <SearchBar
                className={style["bar"]}
            // value={this.state.value}
            // onChange={(newValue) => this.setState({ value: newValue })}
            // onRequestSearch={() => doSomethingWith(this.state.value)}
            />
            {
                open2 ?
                    <Grid className={style["cart"]}>
                        <ShoppingCartIcon  onClick={handleClose2} />
                        <Box sx={styling} open={open2}
                            onClose={handleClose2}>
                            hallo
                        </Box>
                    </Grid>
                    :
                    <Grid className={style["cart"]}>
                        <ShoppingCartIcon onClick={handleOpen2} />

                    </Grid>
            }




            {/* <Grid className={style["icon"]}>
                <Lok />
            </Grid> */}

            {
                open ?
                    <Grid className={style["profile"]}>

                        <img onClick={handleClose} className={style["profile2"]} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRudDbHeW2OobhX8E9fAY-ctpUAHeTNWfaqJA&usqp=CAU' />
                        <Box sx={styles} open={open}
                            onClose={handleClose}>
                            <Typography className={style["hpro"]}>Yusuf Maulana</Typography>
                            <Grid className={style["btn"]}>

                                <NavLink className={style["btn1"]} onClick={handleClose} to={`${DATADIRI}`}>
                                    <Button >
                                        <Typography className={style["font-btn1"]}>Profile</Typography>
                                    </Button>
                                </NavLink>
                                <NavLink onClick={handleClose} to={`${LOGIN}`} className={style["btn2"]}>
                                    <Button >
                                        <Typography className={style["font-btn2"]}>Log Out</Typography>
                                    </Button>
                                </NavLink>


                            </Grid>
                        </Box>
                    </Grid >
                    :

                    <Grid className={style["profile"]}>

                        <img onClick={handleOpen} className={style["profile2"]} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRudDbHeW2OobhX8E9fAY-ctpUAHeTNWfaqJA&usqp=CAU' />

                    </Grid>
            }




            {/* <Popper className={style["profile3"]} open={open} anchorEl={anchorEl} placement={placement} transition>
                {({ TransitionProps }) => (
                    <Fade className={style["profile3"]}  {...TransitionProps} timeout={350}>
                        <Paper className={style["profile3"]} >
                            <Typography sx={{ p: 2 }}>The content of the Popper.</Typography>
                        </Paper>
                    </Fade>
                )}
            </Popper> */}

        </Grid >



    )
}

export default NavbarBot;
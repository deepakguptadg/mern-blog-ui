import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Grid } from '@mui/material';
import Sidebar from '../pages/Sidebar';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <Box sx={{ marginBottom: "90px" }}>
            <AppBar position="fixed">
                <Grid container sx={{ justifyContent: 'center' }}>
                    <Grid xs={10}>
                        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                            >
                                {/* <MenuIcon /> */}
                                <Link to='/'>LOGO</Link>
                            </IconButton>

                            {/* <Box gap={2} sx={{ display: 'flex' }}>
                                <Button><Link to="/" color="primary">Home</Link></Button>
                            </Box> */}

                            <Box>
                                <Button color="inherit"><Sidebar login={true} /></Button>
                                <Button><Sidebar /></Button>
                            </Box>


                        </Toolbar>
                    </Grid>
                </Grid>
            </AppBar>
        </Box>
    );
}

export default Header
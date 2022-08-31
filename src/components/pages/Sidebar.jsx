import * as React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { Box, Button, Grid, Rating, TextField, Typography } from '@mui/material'

export default function Sidebar({ login }) {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box p={2}
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 350 }}
            role="presentation"
        // onClick={toggleDrawer(anchor, false)}
        // onKeyDown={toggleDrawer(anchor, false)}
        >
            {
                login ?
                    <List>
                        <Typography sx={{ cursor: 'pointer' }} onClick={toggleDrawer(anchor, false)}>Login</Typography>
                        <Grid container spacing={2} mt={1}>
                            
                            <Grid item xs={12}>
                                <Box>
                                    <TextField
                                        fullWidth
                                        label="Email"
                                        id="outlined-size-small"
                                        size="small"
                                    />
                                </Box>
                            </Grid>

                            <Grid item xs={12}>
                                <Box>
                                    <TextField
                                        fullWidth
                                        label="Password"
                                        id="outlined-size-small"
                                        size="small"
                                    />
                                </Box>
                            </Grid>

                            <Grid item xs={12}>
                                <Button variant="contained">Login</Button>
                            </Grid>
                        </Grid>
                    </List>
                    :
                    <List>
                        <Typography sx={{ cursor: 'pointer' }} onClick={toggleDrawer(anchor, false)}>Get In Touch</Typography>
                        <Grid container spacing={2} mt={1}>
                            <Grid item xs={12} md={6} >
                                <Box>
                                    <TextField
                                        fullWidth
                                        label="Name"
                                        id="outlined-size-small"
                                        size="small"
                                    />
                                </Box>
                            </Grid>



                            <Grid item xs={12} md={6} >
                                <Box>
                                    <TextField
                                        fullWidth
                                        label="Phone"
                                        id="outlined-size-small"
                                        size="small"
                                    />
                                </Box>
                            </Grid>

                            <Grid item xs={12}>
                                <Box>
                                    <TextField
                                        fullWidth
                                        label="Email"
                                        id="outlined-size-small"
                                        size="small"
                                    />
                                </Box>
                            </Grid>

                            <Grid item xs={12}>
                                <Box sx={{ '& .MuiTextField-root': { width: '100%' } }}>
                                    <TextField
                                        id="outlined-multiline-static"
                                        label="Message"
                                        multiline
                                        rows={4}
                                        placeholder="Write Your Message ..."
                                    />
                                </Box>
                            </Grid>

                            <Grid item xs={12}>
                                <Button variant="contained">Submit</Button>
                            </Grid>
                        </Grid>
                    </List>
            }
        </Box>
    );

    return (
        <div>
            {
                login ?
                    ['right'].map((anchor) => (
                        <React.Fragment key={anchor}>
                            <Button onClick={toggleDrawer(anchor, true)} sx={{ color: '#fff' }}>Login</Button>
                            <SwipeableDrawer
                                anchor={anchor}
                                open={state[anchor]}
                                onClose={toggleDrawer(anchor, false)}
                                onOpen={toggleDrawer(anchor, true)}
                            >
                                {list(anchor)}
                            </SwipeableDrawer>
                        </React.Fragment>
                    ))
                    :
                    ['right'].map((anchor) => (
                        <React.Fragment key={anchor}>
                            <Button onClick={toggleDrawer(anchor, true)} sx={{ color: '#fff' }}><SupportAgentIcon /></Button>
                            <SwipeableDrawer
                                anchor={anchor}
                                open={state[anchor]}
                                onClose={toggleDrawer(anchor, false)}
                                onOpen={toggleDrawer(anchor, true)}
                            >
                                {list(anchor)}
                            </SwipeableDrawer>
                        </React.Fragment>
                    ))
            }

        </div>
    );
}

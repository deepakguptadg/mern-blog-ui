import * as React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { Alert, Box, Button, Grid, Rating, TextField, Typography } from '@mui/material'
import { useState } from 'react';
import axios from 'axios'
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

    const [msg, setMsg] = useState({
        'status': false,
        'type': '',
        'message': '',
    })
    const [message, setMessage] = useState({
        'name': '',
        'email': '',
        'phone': '',
        'message': '',
    })

    const resetForm = () => {
        setMessage({
            'name': '',
            'email': '',
            'phone': '',
            'message': '',
        })
    }

    const handleInput = (e) => {
        setMessage({
            ...message, [e.target.name]: e.target.value
        })
    }
    console.log(message);
    const sendMessage = () => {
        axios.post('http://localhost:4000/contact', message)
            .then(response => {
                if (response.data.Status === "Success") {
                    setMsg({ status: true, msg: "Message Send Successfully", type: 'success' })
                    resetForm()
                } else if (response.data.Status === "Failed") {
                    setMsg({ status: true, msg: "Message Send Failed", type: 'error' })
                }
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }

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
                                        name='name'
                                        value={message.name}
                                        onChange={handleInput}
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
                                        name='phone'
                                        value={message.phone}
                                        onChange={handleInput}
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
                                        name='email'
                                        value={message.email}
                                        onChange={handleInput}
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
                                        onChange={handleInput}
                                        value={message.message}
                                        name='message'
                                        placeholder="Write Your Message ..."
                                    />
                                </Box>
                            </Grid>

                            <Grid item xs={12}>
                                <Button variant="contained" onClick={() => sendMessage()}>Submit</Button>
                            </Grid>
                            <Grid item xs={12}>
                                {
                                    msg.status ? <Alert severity={msg.type}>{msg.msg}</Alert> : ''
                                }
                            </Grid>
                        </Grid>
                    </List>
            }
        </Box >
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

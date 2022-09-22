import * as React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { Alert, Box, Button, Grid, Rating, TextField, Typography } from '@mui/material'
import { useState } from 'react';
import axios from 'axios'
import { useFormik } from 'formik';
import * as yup from 'yup'
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

    const validationSchema = yup.object({
        name: yup.string().min(3, 'Name Must be 3 letters').required('Name is Required'),
        email: yup.string().email().required('Email is Required'),
        phone: yup.number().required('Name is Required'),
        message: yup.string().required('Message is Required'),
    })

    const { values, touched, errors, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            'name': '',
            'email': '',
            'phone': '',
            'message': '',
        },
        validationSchema: validationSchema,
        onSubmit: (values, action) => {
            axios.post('http://localhost:4000/contact', values)
                .then(response => {
                    if (response.data.Status === "Success") {
                        setMsg({ status: true, msg: "Message Send Successfully", type: 'success' })
                    } else if (response.data.Status === "Failed") {
                        setMsg({ status: true, msg: "Message Send Failed", type: 'error' })
                    }
                })
                .catch(error => {
                    console.error('There was an error!', error);
                });

            action.resetForm();
        }
    })

    const [loginPage, setLoginPage] = useState(true)


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
                        <Typography sx={{ cursor: 'pointer' }} onClick={toggleDrawer(anchor, false)}> {loginPage ? 'Login' : 'Register'} </Typography>

                        {
                            loginPage ?
                                <>
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
                                    <Typography sx={{ cursor: 'pointer', mt: 2, textAlign: 'center' }} onClick={() => setLoginPage(false)}>If you don't have an account !! Register</Typography>

                                </>
                                :
                                <>
                                    <Grid container spacing={2} mt={1}>
                                        <Grid item xs={12}>
                                            <Box>
                                                <TextField
                                                    fullWidth
                                                    label="Display Name"
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
                                            <Box>
                                                <TextField
                                                    fullWidth
                                                    label="Confirm Password"
                                                    id="outlined-size-small"
                                                    size="small"
                                                />
                                            </Box>
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Button variant="contained">Register</Button>
                                        </Grid>
                                    </Grid>
                                    <Typography sx={{ cursor: 'pointer', mt: 2, textAlign: 'center' }} onClick={() => setLoginPage(true)}>If you have an account please Login</Typography>
                                </>
                        }



                    </List>
                    :
                    <form onSubmit={handleSubmit}>
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
                                            value={values.name}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={touched.name && Boolean(errors.name)}
                                            helperText={touched.name && errors.name}
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
                                            value={values.phone}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={touched.phone && Boolean(errors.phone)}
                                            helperText={touched.phone && errors.phone}
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
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={touched.email && Boolean(errors.email)}
                                            helperText={touched.email && errors.email}
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
                                            onChange={handleChange}
                                            value={values.message}
                                            name='message'
                                            placeholder="Write Your Message ..."
                                            onBlur={handleBlur}
                                            error={touched.message && Boolean(errors.message)}
                                            helperText={touched.message && errors.message}
                                        />
                                    </Box>
                                </Grid>

                                <Grid item xs={12}>
                                    <Button type='submit' variant="contained" >Submit</Button>
                                    {/* onClick={() => sendMessage()} */}
                                </Grid>
                                <Grid item xs={12}>
                                    {
                                        msg.status ? <Alert severity={msg.type}>{msg.msg}</Alert> : ''
                                    }
                                </Grid>
                            </Grid>
                        </List>
                    </form>
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

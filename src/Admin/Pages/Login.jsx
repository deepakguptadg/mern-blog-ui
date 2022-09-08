import React from 'react'
import { Grid, TextField, Typography, Box, Paper, Button } from '@mui/material'
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        // textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const redirectDashboard = () => {
        navigate('/admin-dashboard')
    }
    return (
        <Box my={4}>
            <Grid container spacing={2} display="flex" justifyContent="center" alignItems="center">
                <Grid item xs={11} sm={6} md={4}>
                    <Item>
                        <Typography variant="h5" component="div" textAlign='center' mt={3}>
                            Blog Title
                        </Typography>
                        <Box p={2}>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Username"
                                    id="outlined-size-small"
                                    size="small"
                                    name='email'
                                />
                            </Grid>

                            <Grid item xs={12} mt={2}>
                                <TextField
                                    fullWidth
                                    label="Password"
                                    type='password'
                                    id="outlined-size-small"
                                    size="small"
                                    name='email'
                                />
                            </Grid>

                            <Grid item xs={12} mt={2}>
                                <Button variant="contained" onClick={()=>redirectDashboard()}>Login</Button>
                            </Grid>
                        </Box>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Login
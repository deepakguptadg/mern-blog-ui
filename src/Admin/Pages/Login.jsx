import React from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup'
import { Grid, TextField, Typography, Box, Paper, Button } from '@mui/material'
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
const Login = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },

        onSubmit: (values) => {
            console.log(values)
        },
    });

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

                            <form onSubmit={formik.onSubmit}>
                                <TextField
                                    fullWidth
                                    label="Username"
                                    id="outlined-size-small"
                                    size="small"
                                    name='email'
                                    value={formik.values.email}
                                    onChange={formik.onChange}
                                />
                                <TextField
                                    fullWidth
                                    label="Password"
                                    type='password'
                                    id="outlined-size-small"
                                    size="small"
                                    name='password'
                                    value={formik.values.password}
                                    onChange={formik.onChange}
                                />
                                 <Button type="submit" variant="contained" >Login</Button>
                                {/* <Grid item xs={12}>
                                </Grid>

                                <Grid item xs={12} mt={2}>
                                </Grid>

                                <Grid item xs={12} mt={2}>
                                </Grid> */}
                                {/* onClick={()=>redirectDashboard()} */}
                            </form>
                        </Box>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Login
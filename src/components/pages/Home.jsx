import { Grid, Rating, Typography } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import moment from 'moment';
import { Stack } from '@mui/system';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        // textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    const date = new Date().toString()
    const navigate = useNavigate()
    const blogDetails = () => {
        navigate('/blog-details')
    }
    return (

        <>
            <Box sx={{ flexGrow: 1 }} my={4}>
                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={10}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6} lg={4}>
                                <Item onClick={()=>blogDetails()}>
                                    <img src="https://cdn.pixabay.com/photo/2018/09/11/16/12/books-3669911_960_720.jpg" />
                                    <Typography variant="h5" component="div">
                                        Blog Title
                                    </Typography>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Typography mt={1} >
                                            Uploaded Date : {moment(date).format("DD-MM-YYYY HH:mm")}
                                        </Typography>
                                        <Stack spacing={1} mt={1}>
                                            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                                        </Stack>
                                    </Box>
                                </Item>
                            </Grid>
                            <Grid item xs={12} md={6} lg={4}>
                                <Item>
                                    <img src="https://cdn.pixabay.com/photo/2016/07/29/08/55/chalk-1551571_960_720.jpg" />
                                    <Typography variant="h5" component="div">
                                        Blog Title
                                    </Typography>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Typography mt={1} >
                                            Uploaded Date : {moment(date).format("DD-MM-YYYY HH:mm")}
                                        </Typography>
                                        <Stack spacing={1} mt={1}>
                                            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                                        </Stack>
                                    </Box>
                                </Item>
                            </Grid>

                            <Grid item xs={12} md={6} lg={4}>
                                <Item>
                                    <img src="https://images.unsplash.com/photo-1661794465928-22538f665d87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=856&q=80" />
                                    <Typography variant="h5" component="div">
                                        Blog Title
                                    </Typography>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Typography mt={1} >
                                            Uploaded Date : {moment(date).format("DD-MM-YYYY HH:mm")}
                                        </Typography>
                                        <Stack spacing={1} mt={1}>
                                            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                                        </Stack>
                                    </Box>
                                </Item>
                            </Grid>

                            <Grid item xs={12} md={6} lg={4}>
                                <Item>
                                    <img src="https://media.istockphoto.com/id/1131005373/photo/kitchen-fresh-colorful-organic-vegetables-on-worktop.webp?s=612x612&w=is&k=20&c=JHMp0RFHlyZfYpaYAs525DseEPB_Sy05dlQhtvmPK2E=" />
                                    <Typography variant="h5" component="div">
                                        Blog Title
                                    </Typography>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Typography mt={1} >
                                            Uploaded Date : {moment(date).format("DD-MM-YYYY HH:mm")}
                                        </Typography>
                                        <Stack spacing={1} mt={1}>
                                            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                                        </Stack>
                                    </Box>
                                </Item>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Home
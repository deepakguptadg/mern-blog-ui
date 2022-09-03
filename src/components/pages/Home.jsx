import { Grid, Rating, Typography } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import moment from 'moment';
import { Stack } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { timeAgo } from '../Utility/Date';
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
    const blogDetails = (id) => {
        navigate(`/blog-details/${id}`)
    }

    const [blogList, setBlogList] = useState([])

    useEffect(() => {
        getBlog()
    }, [])


    const getBlog = () => {
        axios.get('http://localhost:4000/blog/get-blog')
            .then(response => {
                setBlogList(response.data.data)
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }


    console.log('blogList', blogList)

    // const getDate = timeAgo()

    
    return (

        <>
            <Box sx={{ flexGrow: 1 }} my={4}>
                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={10}>
                        <Grid container spacing={2}>

                            {
                                blogList?.map((data, i) => (
                                    <Grid item xs={12} md={6} lg={4}>
                                        <Item onClick={() => blogDetails(data._id)}>
                                            <img src={`http://127.0.0.1:4000/${data.img}`} />
                                            <Typography variant="h5" component="div">
                                                {data.title}
                                            </Typography>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <Typography mt={1} >
                                                    {/* Uploaded Date : {moment(data.uploadDate).format("DD-MM-YYYY HH:mm")} */}
                                                    Uploaded Date :{timeAgo(data.uploadDate)}

                                                </Typography>
                                                <Stack spacing={1} mt={1}>
                                                    <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                                                </Stack>
                                            </Box>
                                        </Item>
                                    </Grid>
                                ))
                            }

                            {/* <Grid item xs={12} md={6} lg={4}>
                                <Item onClick={() => blogDetails()}>
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
                            </Grid> */}



                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Home
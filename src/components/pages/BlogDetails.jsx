import { Avatar, Button, Grid, Rating, TextField, Typography } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import moment from 'moment';
import { Stack } from '@mui/system';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { timeAgo } from '../Utility/Date';
const BlogDetails = ({ Header }) => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        // textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    const date = new Date().toString()

    const [blogDateils, setBlogDetails] = useState({})
    const { id } = useParams()
    useEffect(() => {
        getBlog()
    }, [id])
    const getBlog = () => {
        axios.get(`http://localhost:4000/blog/${id}`)
            .then(response => {
                console.log('response', response.data.data)
                setBlogDetails(response.data.data)
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }
    const [msg, setMessage] = useState()
    console.log(msg)
    return (
        <>

            <Header />
            <Box sx={{ flexGrow: 1 }} mt={4}>
                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={10}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>

                                <Item>
                                    <img src={`http://127.0.0.1:4000/${blogDateils.img}`} />
                                    <Typography variant="h5" component="div">
                                        {blogDateils.title}
                                    </Typography>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Typography mt={1} >
                                            {/* Uploaded Date : {moment(blogDateils.uploadDate).format("DD-MM-YYYY HH:mm")} */}
                                            Uploaded Date : {timeAgo(blogDateils.uploadDate)}
                                        </Typography>
                                        <Stack spacing={1} mt={1}>
                                            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                                        </Stack>
                                    </Box>
                                    <Typography mt={1} >
                                        Uploaded By : {blogDateils.uploadBy}
                                    </Typography>
                                </Item>

                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Item>
                                    <Typography variant="h5" component="div">
                                        {blogDateils.title}
                                    </Typography>
                                    <Typography variant="p" component="div">
                                        {blogDateils.desc}

                                    </Typography>

                                    <Typography variant="p" component="div" mt={3}>
                                        {blogDateils.sort_desc}
                                    </Typography>

                                </Item>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container justifyContent='center' my={3}>
                    <Grid item xs={10}>
                        <Item sx={{ p: 2 }}>
                            <Box sx={{ textAlign: 'center' }} component='h2'>Feedback</Box>
                            <Box>
                                <Stack direction="row" sx={{ mt: 2 }}>
                                    <Avatar alt="Remy Sharp" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ashok_Gehlot.jpg/220px-Ashok_Gehlot.jpg" />
                                    <Box>
                                        <Typography ml={1} variant="p" sx={{ fontWeight: 'bold' }}>Ashok Gahlot</Typography>
                                        <Typography ml={1} variant="p" component="p">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis error quo aspernatur eos corporis quas, ut accusamus qui velit iusto?
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis error quo aspernatur eos corporis quas, ut accusamus qui velit iusto?
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis error quo aspernatur eos corporis quas, ut accusamus qui velit iusto?
                                        </Typography>
                                    </Box>
                                </Stack>
                                <Stack direction="row" sx={{ mt: 2 }}>
                                    <Avatar alt="Remy Sharp" src="" />
                                    <Box>
                                        <Typography ml={1} variant="p" sx={{ fontWeight: 'bold' }}>Rahul Singh</Typography>
                                        <Typography ml={1} variant="p" component="p">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis error quo aspernatur eos corporis quas, ut accusamus qui velit iusto?
                                        </Typography>
                                    </Box>
                                </Stack>


                                <Stack direction="row" sx={{ mt: 2 }}>
                                    <Avatar alt="Remy Sharp" src="https://avatars.githubusercontent.com/u/81194614?v=4" />
                                    <Box>
                                        <Typography ml={1} variant="p" sx={{ fontWeight: 'bold' }}>Praveen</Typography>
                                        <Typography ml={1} variant="p" component="p">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis error quo aspernatur eos corporis quas, ut accusamus qui velit iusto?Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis error quo aspernatur eos corporis quas, ut accusamus qui velit iusto?
                                        </Typography>
                                    </Box>
                                </Stack>
                            </Box>
                            
                        </Item>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { mt: 3, width: '100%' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField
                                id="outlined-multiline-static"
                                label="Write Your Comments"
                                multiline
                                rows={3}
                                // defaultValue="Write Your Comments ..."
                                onChange={(e) => { setMessage(e.target.value) }}
                                value={msg}
                                placeholder="Write Your Comments ..."
                            />
                            <Button variant="contained" sx={{ mt: 1 }}>Give Feedback</Button>

                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default BlogDetails
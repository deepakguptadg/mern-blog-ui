import { Avatar, Button, Grid, Rating, TextField, Typography, Modal } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Stack } from '@mui/system';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { timeAgo } from '../../Utility/Date';
import { apiBaseUrl } from '../../Utility/Constant';
import { useContextDataProvider } from '../../Context/ContextDataProvider';
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

    const {getfeedbackfun, feedbacklist, totalRatting} = useContextDataProvider()

    const { id } = useParams()
    useEffect(() => {
        getBlog()
        getfeedbackfun(id)
    }, [id])
    const getBlog = () => {
        axios.get(apiBaseUrl + `/blog/${id}`)
            .then(response => {
                setBlogDetails(response.data.data)
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 300,
        bgcolor: 'background.paper',
        border: '1px solid #000',
        boxShadow: 24,
        p: 4,
        borderRadius: '6px'
    }

    const [open, setOpen] = useState(false)
    const handleClose = () => setOpen(false)
    const [feedbackVal, setFeedbackVal] = useState({
        'blogId': id,
        'userId': 1,
        'feedback': '',
        'starCount': ''
    })

    const handleOpen = () => {
        if (feedbackVal.feedback.length < 1) {
            setOpen(false)
        } else {
            setOpen(true)
        }
    }
    const FeedbackSubmit = () => {
        axios.post(apiBaseUrl + '/feedback', feedbackVal)
            .then(response => {
                if (response.data.Status === "Success") {
                    setOpen(false)
                    alert('Thank You !! You Give Feedback Succesfully !!')
                    setFeedbackVal({ ...feedbackVal, 'feedback': '' })
                } else if (response.data.Status === "Failed") {
                    alert("Sorry !! You Can't Give Feedback !!")
                }
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }
    


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
                                        <Stack spacing={1} mt={1} sx={{ display: 'flex' }}>
                                            <Rating name="half-rating-read" defaultValue={totalRatting} precision={0.5} readOnly />
                                        </Stack>
                                        <Typography pt={1}>{totalRatting} +</Typography>
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

                                {
                                    feedbacklist ?
                                        feedbacklist.map((data, i) => {
                                            return <>
                                                <Stack direction="row" sx={{ mt: 2 }}>
                                                    <Avatar alt="Remy Sharp" src="" />
                                                    <Box>
                                                        <Typography ml={1} variant="p" sx={{ fontWeight: 'bold' }}>Ashok Gahlot </Typography>
                                                        <Typography ml={1} variant="p" sx={{ fontSize: '11px' }}>{timeAgo(data.feedbackDate)}</Typography>
                                                        <Typography ml={1} variant="p" component="p">
                                                            {data.feedback}
                                                        </Typography>
                                                    </Box>
                                                </Stack>
                                            </>
                                        })
                                        : ''
                                }
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
                                label="Write Your Comments"
                                fullWidth
                                // defaultValue="Write Your Comments ..."
                                onChange={(e) => setFeedbackVal({ ...feedbackVal, 'feedback': e.target.value })}
                                value={feedbackVal.feedback}
                                placeholder="Write Your Comments ..."
                            />
                            <Button variant="contained" sx={{ mt: 1 }} onClick={handleOpen}>Give Feedback</Button>

                        </Box>
                    </Grid>
                </Grid>
            </Box>

            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title">
                <Box sx={style}>
                    <Typography sx={{ mx: 2, textAlign: 'center' }}>
                        <Box sx={{}}>
                            <Rating
                                value={feedbackVal.starCount}
                                onChange={(event, newValue) => {
                                    setFeedbackVal({ ...feedbackVal, 'starCount': newValue })
                                }}
                                size="large"
                            />
                        </Box>
                        <Button size='small' variant="contained" sx={{ mt: 2 }} onClick={() => FeedbackSubmit()}>Submit</Button>
                    </Typography>
                </Box>
            </Modal>
        </>
    )
}

export default BlogDetails
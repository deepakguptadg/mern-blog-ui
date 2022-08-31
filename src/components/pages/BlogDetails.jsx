import { Avatar, Button, Grid, Rating, TextField, Typography } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import moment from 'moment';
import { Stack } from '@mui/system';
const BlogDetails = () => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        // textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    const date = new Date().toString()
    return (
        <>
            <Box sx={{ flexGrow: 1 }} mt={4}>
                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={10}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>

                                <Item>
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
                                    <Typography mt={1} >
                                        Uploaded By : Deepak Gupta
                                    </Typography>
                                </Item>

                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Item>
                                    <Typography variant="h5" component="div">
                                        Blog Title
                                    </Typography>
                                    <Typography variant="p" component="div">
                                        What perspective do you bring that makes you stand out from the crowd? This is key to determining the trajectory of your blog’s future and there’s many avenues to choose in the process.
                                        What perspective do you bring that makes you stand out from the crowd? This is key to determining the trajectory of your blog’s future and there’s many avenues to choose in the process.
                                        What perspective do you bring that makes you stand out from the crowd? This is key to determining the trajectory of your blog’s future and there’s many avenues to choose in the process.
                                        What perspective do you bring that makes you stand out from the crowd? This is key to determining the trajectory of your blog’s future and there’s many avenues to choose in the process.
                                    </Typography>

                                    <Typography variant="p" component="div" mt={3}>
                                        What perspective do you bring that makes you stand out from the crowd? This is key to determining the trajectory of your blog’s future and there’s many avenues to choose in the process.
                                        What perspective do you bring that makes you stand out from the crowd? This is key to determining the trajectory of your blog’s future and there’s many avenues to choose in the process.
                                        What perspective do you bring that makes you stand out from the crowd? This is key to determining the trajectory of your blog’s future and there’s many avenues to choose in the process.
                                        What perspective do you bring that makes you stand out from the crowd? This is key to determining the trajectory of your blog’s future and there’s many avenues to choose in the process.
                                    </Typography>

                                    <Typography variant="p" component="div" mt={3}>
                                        What perspective do you bring that makes you stand out from the crowd? This is key to determining the trajectory of your blog’s future and there’s many avenues to choose in the process.
                                        What perspective do you bring that makes you stand out from the crowd? This is key to determining the trajectory of your blog’s future and there’s many avenues to choose in the process.
                                        What perspective do you bring that makes you stand out from the crowd? This is key to determining the trajectory of your blog’s future and there’s many avenues to choose in the process.
                                        What perspective do you bring that makes you stand out from the crowd? This is key to determining the trajectory of your blog’s future and there’s many avenues to choose in the process.
                                    </Typography>

                                </Item>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container justifyContent='center' my={3}>
                    <Grid item xs={10}>
                        <Item sx={{p: 2}}>
                            <Box sx={{ textAlign: 'center'}}  component='h2'>Feedback</Box>
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
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
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
                                    placeholder="Write Your Comments ..."
                                />
                                <Button variant="contained" sx={{ mt: 1 }}>Give Feedback</Button>

                            </Box>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default BlogDetails
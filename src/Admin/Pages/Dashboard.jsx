import React from 'react'
import { Grid, Rating, Typography, Box, Paper } from '@mui/material'
import { styled } from '@mui/material/styles';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import GroupIcon from '@mui/icons-material/Group';
import FeedbackIcon from '@mui/icons-material/Feedback';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';

const Dashboard = ({ Header }) => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(3),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    return (
        <>
            <Header />
            <Box sx={{ flexGrow: 1 }} my={4}>
                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={10}>
                        <Grid container spacing={2}>
                           
                            <Grid item xs={12} md={6} lg={3}>
                                <Item>
                                    <GroupIcon fontSize='large'/>
                                    <Typography variant="h5" component="div">
                                        Users
                                    </Typography>
                                </Item>
                            </Grid>

                            <Grid item xs={12} md={6} lg={3}>
                                <Item>
                                    <FormatListBulletedIcon fontSize='large'/>
                                    <Typography variant="h5" component="div">
                                        Blog List
                                    </Typography>
                                </Item>
                            </Grid>

                            <Grid item xs={12} md={6} lg={3}>
                                <Item>
                                    <FeedbackIcon fontSize='large'/>
                                    <Typography variant="h5" component="div">
                                        Feedback 
                                    </Typography>
                                </Item>
                            </Grid>

                            <Grid item xs={12} md={6} lg={3}>
                                <Item>
                                    <LibraryAddIcon fontSize='large'/>
                                    <Typography variant="h5" component="div">
                                        Feedback Add 
                                    </Typography>
                                </Item>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Dashboard
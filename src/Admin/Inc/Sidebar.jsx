import * as React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Button,Typography, ListItemIcon, ListItemButton, ListItem } from '@mui/material'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import GroupIcon from '@mui/icons-material/Group';
import FeedbackIcon from '@mui/icons-material/Feedback';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
export default function Sidebar() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        setState({ ...state, [anchor]: open });
    };


    const list = (anchor) => (
        <Box p={2}
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
        // onClick={toggleDrawer(anchor, false)}
        // onKeyDown={toggleDrawer(anchor, false)}
        >
            <Box p={0} m={0}>
                <Typography p={1} sx={{ cursor: 'pointer', backgroundColor: '#1976d2', color: '#fff' }} onClick={toggleDrawer(anchor, false)}>Dashboard</Typography>
            </Box>

            <List>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <FormatListBulletedIcon />
                        </ListItemIcon>
                        Blog List
                    </ListItemButton>
                </ListItem>

                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <LibraryAddIcon />
                        </ListItemIcon>
                        Add Blog
                    </ListItemButton>
                </ListItem>

                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <GroupIcon />
                        </ListItemIcon>
                        Users
                    </ListItemButton>
                </ListItem>

                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <FeedbackIcon />
                        </ListItemIcon>
                        Feedback
                    </ListItemButton>
                </ListItem>
            </List>

        </Box >
    );

    return (
        <div>
            {

                ['left'].map((anchor) => (
                    <React.Fragment key={anchor}>
                        <Button onClick={toggleDrawer(anchor, true)} sx={{ color: '#fff' }}><MenuIcon /></Button>
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

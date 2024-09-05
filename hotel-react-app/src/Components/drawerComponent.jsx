import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Drawer, Button, Box, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { closeDrawer } from '../Redux/DrawerSlice';
import PersonIcon from '@mui/icons-material/Person';  // Profile icon
import BookOnlineIcon from '@mui/icons-material/BookOnline';  // Booking icon
import FavoriteIcon from '@mui/icons-material/Favorite';  // Favourites icon
import CloseIcon from '@mui/icons-material/Close';  // Close icon

const DrawerComponent = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.drawer.isOpen); // Access the drawer state from Redux

  const handleClose = () => {
    dispatch(closeDrawer()); // Dispatch action to close the drawer
  };

  return (
    <Drawer anchor="right" open={isOpen} onClose={handleClose}>
      <Box sx={{ width: 250, padding: 2 }}>
        <Typography variant="h6" component="div" gutterBottom>
          Profile
        </Typography>

        {/* List of buttons with icons */}
        <List>
          <ListItem button onClick={handleClose}>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem button onClick={handleClose}>
            <ListItemIcon>
              <BookOnlineIcon />
            </ListItemIcon>
            <ListItemText primary="Bookings" />
          </ListItem>
          <ListItem button onClick={handleClose}>
            <ListItemIcon>
              <FavoriteIcon />
            </ListItemIcon>
            <ListItemText primary="Favourites" />
          </ListItem>
        </List>

        {/* Close Drawer Button */}
        <Button
          startIcon={<CloseIcon />}
          variant="outlined"
          color="primary"
          onClick={handleClose}
          sx={{ mt: 2 }}
        >
          Close Drawer
        </Button>
      </Box>
    </Drawer>
  );
};

export default DrawerComponent;

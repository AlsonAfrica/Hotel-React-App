import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Drawer, Button, Box, Typography, List, ListItem, ListItemIcon, ListItemText, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import { closeDrawer } from '../Redux/DrawerSlice';
import { updateUserProfile, updateUserEmail, updateUserPassword, signOutUser } from '../Redux/authenticationSlice';
import PersonIcon from '@mui/icons-material/Person';  // Profile icon
import BookOnlineIcon from '@mui/icons-material/BookOnline';  // Booking icon
import FavoriteIcon from '@mui/icons-material/Favorite';  // Favourites icon
import CloseIcon from '@mui/icons-material/Close';  // Close icon

const DrawerComponent = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.drawer.isOpen);
  const user = useSelector((state) => state.auth.user);

  // States for managing dialog visibility
  const [openProfileDialog, setOpenProfileDialog] = useState(false);
  const [openBookingsDialog, setOpenBookingsDialog] = useState(false);
  const [openFavouritesDialog, setOpenFavouritesDialog] = useState(false);

  // States for user details
  const [displayName, setDisplayName] = useState(user ? user.displayName : '');
  const [photoURL, setPhotoURL] = useState(user ? user.photoURL : '');
  
  // States for email update
  const [newEmail, setNewEmail] = useState(user ? user.email : '');
  const [passwordForEmailChange, setPasswordForEmailChange] = useState('');

  // States for password update
  const [newPassword, setNewPassword] = useState('');
  const [oldPassword, setOldPassword] = useState('');

  useEffect(() => {
    if (user) {
      setDisplayName(user.displayName || '');
      setPhotoURL(user.photoURL || '');
      setNewEmail(user.email || '');
    }
  }, [user]);

  const handleClose = () => {
    dispatch(closeDrawer());
  };

  // Handlers for dialogs
  const handleOpenProfileDialog = () => setOpenProfileDialog(true);
  const handleCloseProfileDialog = () => setOpenProfileDialog(false);

  const handleOpenBookingsDialog = () => setOpenBookingsDialog(true);
  const handleCloseBookingsDialog = () => setOpenBookingsDialog(false);

  const handleOpenFavouritesDialog = () => setOpenFavouritesDialog(true);
  const handleCloseFavouritesDialog = () => setOpenFavouritesDialog(false);

  const handleSaveProfile = () => {
    dispatch(updateUserProfile({ displayName, photoURL }));
  };

  const handleSaveEmail = () => {
    dispatch(updateUserEmail({ newEmail, passwordForEmailChange }));
  };

  const handleSavePassword = () => {
    dispatch(updateUserPassword({ newPassword, oldPassword }));
  };

  return (
    <Drawer anchor="right" open={isOpen} onClose={handleClose}>
      <Box sx={{ width: 250, padding: 2 }}>
        <Typography variant="h6" component="div" gutterBottom>
          Menu
        </Typography>

        <List>
          <ListItem button onClick={handleOpenProfileDialog}>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem button onClick={handleOpenBookingsDialog}>
            <ListItemIcon>
              <BookOnlineIcon />
            </ListItemIcon>
            <ListItemText primary="Bookings" />
          </ListItem>
          <ListItem button onClick={handleOpenFavouritesDialog}>
            <ListItemIcon>
              <FavoriteIcon />
            </ListItemIcon>
            <ListItemText primary="Favourites" />
          </ListItem>
          <ListItem button onClick={() => dispatch(signOutUser())}>
            <ListItemIcon>
              <CloseIcon />
            </ListItemIcon>
            <ListItemText primary="Sign Out" />
          </ListItem>
        </List>
      </Box>

      {/* Profile Dialog */}
      <Dialog open={openProfileDialog} onClose={handleCloseProfileDialog}>
        <DialogTitle>Update Profile</DialogTitle>
        <DialogContent>
          <TextField
            margin="normal"
            fullWidth
            label="Display Name"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
          <TextField
            margin="normal"
            fullWidth
            label="Photo URL"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
          />
          <TextField
            margin="normal"
            fullWidth
            label="New Email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            fullWidth
            label="Password for Email Change"
            type="password"
            value={passwordForEmailChange}
            onChange={(e) => setPasswordForEmailChange(e.target.value)}
          />
          <TextField
            margin="normal"
            fullWidth
            label="New Password"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <TextField
            margin="normal"
            fullWidth
            label="Old Password"
            type="password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSaveProfile} color="primary">
            Save Profile
          </Button>
          <Button onClick={handleSaveEmail} color="primary">
            Save Email
          </Button>
          <Button onClick={handleSavePassword} color="primary">
            Save Password
          </Button>
          <Button onClick={handleCloseProfileDialog} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

      {/* Bookings Dialog */}
      <Dialog open={openBookingsDialog} onClose={handleCloseBookingsDialog}>
        <DialogTitle>Bookings</DialogTitle>
        <DialogContent>
          <Typography variant="body1">Here you can manage your bookings.</Typography>
          {/* Add your booking management content here */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseBookingsDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* Favourites Dialog */}
      <Dialog open={openFavouritesDialog} onClose={handleCloseFavouritesDialog}>
        <DialogTitle>Favourites</DialogTitle>
        <DialogContent>
          <Typography variant="body1">Here you can view your favourite items.</Typography>
          {/* Add your favourites management content here */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseFavouritesDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Drawer>
  );
};

export default DrawerComponent;

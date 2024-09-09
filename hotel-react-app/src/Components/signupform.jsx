import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Box, Button, TextField, Typography, Grid, Link, Avatar, IconButton, Checkbox, FormControlLabel } from '@mui/material';
import { Google as GoogleIcon } from '@mui/icons-material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { signUpUser } from '../Redux/authenticationSlice';
import { collection, addDoc } from 'firebase/firestore';
import { auth, db } from '../Config/firebaseconfig';


// Initializing the form fields
export default function SignInForm() {
  const [formValues, setFormValues] = React.useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [profileImage, setProfileImage] = React.useState(null);
  const [isChecked, setIsChecked] = React.useState(false);

  // Initialize dispatch and navigate
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // the function handles changes in input fields. 
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  // handles box tick  function not yet functional 
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Ensure passwords match before dispatching
    if (formValues.password !== formValues.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      // Dispatch signUpUser thunk action
      const userCredential = await dispatch(signUpUser({
        name: formValues.name,
        email: formValues.email,
        password: formValues.password,
      })).unwrap();

      const { user } = userCredential; // Assuming signUpUser returns userCredential

      // Store user details in Firestore with automatic ID
      await addDoc(collection(db, 'users'), {
        name: formValues.name,
        surname: formValues.surname,
        email: formValues.email,
        password: formValues.password, // Optional: Avoid storing plaintext passwords in production
        profileImage: profileImage || '', // Store profile image URL if available
      });

      // Navigate to the login page on successful registration
      navigate('/LoginPage');
    } catch (error) {
      // Handle error (optional)
      console.error('Registration error:', error);
    }
  };

  const handleGoogleSignIn = () => {
    console.log('Sign in with Google clicked');
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 350,
        mx: 'auto',
        p: 1, // Reduced padding
        mt: 1, // Reduced margin top
        borderRadius: 2,
        boxShadow: 3,
        bgcolor: 'background.paper',
        textAlign: 'center',
      }}
    >
      {/* Circular Image Input */}
      <Box sx={{ position: 'relative', mb: 1 }}>
        <Avatar
          src={profileImage}
          sx={{ width: 60, height: 60, mx: 'auto' }} 
        />
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
          sx={{ position: 'absolute', bottom: 0, right: 'calc(50% - 15px)' }}
        >
          <input
            hidden
            accept="image/*"
            type="file"
            onChange={handleImageUpload}
          />
          <PhotoCameraIcon />
        </IconButton>
      </Box>

      <Typography variant="h6" component="h1" gutterBottom>
        Sign Up
      </Typography>
      <Grid container spacing={1}> 
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formValues.name}
            onChange={handleInputChange}
            variant="outlined"
            required
            size="small" 
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Surname"
            name="surname"
            value={formValues.surname}
            onChange={handleInputChange}
            variant="outlined"
            required
            size="small"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formValues.email}
            onChange={handleInputChange}
            variant="outlined"
            required
            size="small"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            value={formValues.password}
            onChange={handleInputChange}
            variant="outlined"
            required
            size="small"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={formValues.confirmPassword}
            onChange={handleInputChange}
            variant="outlined"
            required
            size="small"
          />
        </Grid>
       
        <Grid item xs={12}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ py: 1, mb: 1 }} 
          >
            Register
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            fullWidth
            variant="outlined"
            color="secondary"
            startIcon={<GoogleIcon />}
            onClick={handleGoogleSignIn}
            sx={{ py: 1 }} 
          >
            Sign in with Google
          </Button>
        </Grid>
      </Grid>
      
      <Grid item xs={12}>
        <FormControlLabel
          control={<Checkbox checked={isChecked} onChange={handleCheckboxChange} color="primary" />}
          label="Confirm that you have read the terms and conditions"
        />
      </Grid>
      <Box sx={{ mt: 1, textAlign: 'center' }}>
        <Typography variant="body2">
          Already have an account?{' '}
          <Link href="/LoginPage" underline="hover">
            Sign In
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}

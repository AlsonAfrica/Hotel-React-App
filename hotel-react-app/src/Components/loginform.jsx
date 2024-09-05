import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  TextField,
  Button,
  Typography,
  Link,
  Grid,
  Box,
  Divider,
  IconButton,
  InputAdornment,
} from '@mui/material';
import { Google, Visibility, VisibilityOff } from '@mui/icons-material';
import { signInUser } from '../Redux/authenticationSlice'; // Import the signInUser action

const LoginForm = () => {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isResetPassword, setIsResetPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status); // Get auth status from state
  const authError = useSelector((state) => state.auth.error); // Get auth error from state

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signInUser(formValues))
      .unwrap()
      .then(() => {
        navigate('/HomePage'); // Redirect on successful login
      })
      .catch((error) => {
        console.error('Login error:', error);
      });
  };

  const handleForgotPassword = () => {
    setIsResetPassword(true);
  };

  const handleGoogleLogin = () => {
    console.log('Login with Google clicked');
  };

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: 300,
        margin: 'auto',
        mt: 5,
        padding: 3,
        boxShadow: 3,
        borderRadius: 2,
        transition: 'all 0.3s ease-in-out', // Smooth animation
      }}
    >
      {isResetPassword ? (
        <>
          <Typography variant="h4" component="h1" gutterBottom>
            Reset Password
          </Typography>
          <TextField
            label="Email"
            variant="outlined"
            margin="normal"
            fullWidth
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2, mb: 2 }}
          >
            Send Reset Link
          </Button>
          <Link
            href="#"
            variant="body2"
            onClick={() => setIsResetPassword(false)} // Back to Login
          >
            Back to Login
          </Link>
        </>
      ) : (
        <>
          <Typography variant="h4" component="h1" gutterBottom>
            Login
          </Typography>
          <TextField
            label="Email"
            name="email"
            variant="outlined"
            margin="normal"
            fullWidth
            required
            value={formValues.email}
            onChange={handleInputChange}
          />
          <TextField
            label="Password"
            name="password"
            type={showPassword ? 'text' : 'password'} // Conditional type
            variant="outlined"
            margin="normal"
            fullWidth
            required
            value={formValues.password}
            onChange={handleInputChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2, mb: 2 }}
          >
            Login
          </Button>
          {authError && (
            <Typography color="error" variant="body2" gutterBottom>
              {authError}
            </Typography>
          )}
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" variant="body2" onClick={handleForgotPassword}>
                Forgot Password?
              </Link>
            </Grid>
          </Grid>
          <Divider sx={{ width: '100%', my: 2 }}>OR</Divider>
          <Button
            variant="outlined"
            color="secondary"
            startIcon={<Google />}
            fullWidth
            onClick={handleGoogleLogin}
            sx={{ mt: 1 }}
          >
            Login with Google
          </Button>
        </>
      )}
    </Box>
  );
};

export default LoginForm;

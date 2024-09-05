// src/components/Navbar.jsx
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { MdArrowOutward } from "react-icons/md";
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

function NavbarLanding() {
  return (
    <AppBar position="static"
    sx={{
        backgroundColor: 'transparent', 
        boxShadow: 'none', 
        maxWidth:'100%',
        paddingTop:'10px'
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Logo on the left end */}
        <Typography variant="h6" component="div">
          Logo
        </Typography>

        {/* Buttons in the center */}
     
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexGrow: 1, gap: 10 }}>
        <Link to="/">
          <Button
            sx={{
              backgroundColor: '#578DA4', // Custom background color
              color: '#fff', // Text color
              padding: '8px 16px',
              borderRadius: '8px', // Rounded corners
              textTransform: 'none', // Prevents button text from being uppercase
              '&:hover': {
                backgroundColor: '#466E84', // Slightly darker shade for hover effect
              },
            }}
          >
            Home
          </Button>
          </Link>

          <ScrollLink to="rooms-container" smooth={true} duration={500}>
          <Button
            sx={{
              backgroundColor: '#578DA4', // Custom background color
              color: '#fff',
              padding: '8px 16px',
              borderRadius: '8px',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#466E84', // Slightly darker shade for hover effect
              },
            }}
          >
            Rooms
          </Button>
          </ScrollLink>

          <ScrollLink to="facilities-container" smooth={true} duration={500}>
          <Button
            sx={{
              backgroundColor: '#578DA4', // Custom background color
              color: '#fff',
              padding: '8px 16px',
              borderRadius: '8px',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#466E84', // Slightly darker shade for hover effect
              },
            }}
          >
            Facilities
          </Button>
          </ScrollLink>

          <Link to="/Policies">
          <Button
            sx={{
              backgroundColor: '#578DA4', // Custom background color
              color: '#fff',
              padding: '8px 16px',
              borderRadius: '8px',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#466E84', // Slightly darker shade for hover effect
              },
            }}
          >
            Policies
          </Button>
          </Link>
        </Box>

        {/* Button on the right end */}
        <Link to="/Signup">
        <Button
          sx={{
            backgroundColor: '#578DA4', 
            color: '#fff',
            padding: '8px 16px',
            borderRadius: '8px',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: '#466E84', 
            },
          }}
        >
          Explore Rooms <MdArrowOutward />
        </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default NavbarLanding;


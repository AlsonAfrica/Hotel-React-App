// src/components/Navbar.jsx
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { MdArrowOutward } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import { openDrawer } from "../Redux/DrawerSlice";
import { useDispatch } from 'react-redux';

function NavbarHome() {
        const dispatch = useDispatch();

        const handleButtonClick = () =>{
            dispatch(openDrawer());
        };
    
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
            About
          </Button>
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
            Services
          </Button>
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
            Contact
          </Button>
        </Box>

        {/* Button on the right end */}
        {/* <Link to="/Signup"> */}
        <Button
        // onClick = {handleButtonClick}
        onClick={handleButtonClick}
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
          <FaUserCircle />
        </Button>
        {/* </Link> */}
      </Toolbar>
    </AppBar>
  );
}

export default NavbarHome;


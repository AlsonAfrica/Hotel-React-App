import React from 'react';
import { Container, TextField, Button, Grid, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const BankingForm = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 2, mb: 2 }}>
        <Typography variant="h4" align="center" gutterBottom>
         Banking Details
        </Typography>
        <form>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="cardName"
                label="Name on Card"
                variant="outlined"
                autoComplete="cc-name"
                sx={{ width: '80%' }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="cardNumber"
                label="Card Number"
                variant="outlined"
                autoComplete="cc-number"
                sx={{ width: '80%' }}  
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="expiryDate"
                label="Expiry Date (MM/YY)"
                variant="outlined"
                autoComplete="cc-exp"
                sx={{ width: '80%' }}  
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="cvv"
                label="CVV"
                variant="outlined"
                autoComplete="cc-csc"
                sx={{ width: '80%' }} 
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="billingAddress"
                label="Billing Address"
                variant="outlined"
                autoComplete="billing address-line1"
                sx={{ width: '80%' }}  
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="zipCode"
                label="ZIP / Postal Code"
                variant="outlined"
                autoComplete="billing postal-code"
                sx={{ width: '50%' }} 
              />
            </Grid>
            <Grid item xs={12}>
              <Link to="/Success">
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2, width: '50%' }} 
                >
                  Complete Checkout
                 </Button>
              </Link>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default BankingForm;

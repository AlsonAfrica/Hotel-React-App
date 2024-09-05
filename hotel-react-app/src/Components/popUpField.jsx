import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closePopup } from '../Redux/popupformSlice';
import './styles/popUpform.css';
import BankingForm from './bankingform';
import { Grid, Box, Typography, Button } from '@mui/material';

const Popup = () => {
  const { isVisible, cardData } = useSelector((state) => state.popup);
  const dispatch = useDispatch();

  if (!isVisible || !cardData) return null;

  return (
    <div className="popup-overlay" onClick={() => dispatch(closePopup())}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()} style={{ position: 'relative' }}>
        {/* Close Button */}
        <Box className="close-button-container" sx={{ position: 'absolute', top: 10, right: 10 }}>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => dispatch(closePopup())}
          >
            Close
          </Button>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="h4" gutterBottom>
                {cardData.title}
              </Typography>
              <Box className='dates'>
                <input type="date" />
                <input type="date" />
              </Box>
              <Box className="image-grid-container">
                {cardData.images ? cardData.images.map((image, index) => (
                  <img key={index} src={image} alt={`Popup Image ${index + 1}`} className="grid-image" />
                )) : <p>No images available</p>}
              </Box>
              <Typography variant="body1">Room Type: {cardData.roomType}</Typography>
              <Typography variant="body1">Price: {cardData.price}</Typography>
              <Typography variant="body1">{cardData.notes}</Typography>
              <Box className="card-rating">
                {"★".repeat(cardData.starRating)}{"☆".repeat(5 - cardData.starRating)}
              </Box>

              <Box className="popup-amenities">
                {cardData.amenities ? cardData.amenities.map((amenity, index) => (
                  <Box key={index} className="popup-amenity">
                    {amenity.icon} <span>{amenity.label}</span>
                  </Box>
                )) : <p>No amenities listed</p>}
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <BankingForm />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Popup;



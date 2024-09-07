import React, { useState } from "react";
import { Card, CardContent, CardMedia, Typography, Grid, Button, CardActions, IconButton } from "@mui/material";
import { useDispatch } from 'react-redux';
import { openPopup } from "../Redux/popupformSlice";
import { Favorite, Share } from "@mui/icons-material"; // Using icons for Like and Share

const RoomCard = ({ room }) => {
    const dispatch = useDispatch();
    const [likeCount, setLikeCount] = useState(0); // State for like count

    const handleViewClick = () => {
        dispatch(openPopup(room)); // Dispatch the action with room details
    };

    const handleLikeClick = () => {
        setLikeCount(likeCount + 1); // Increment the like count
    };

    const handleShareClick = () => {
        // Simple share logic (could be extended)
        const shareData = {
            title: room.roomType,
            text: `Check out this ${room.roomType} room with ${room.amenities.join(', ')} amenities!`,
            url: window.location.href, // Current page URL
        };

        if (navigator.share) {
            navigator.share(shareData).catch((error) => console.error('Error sharing:', error));
        } else {
            alert('Your browser does not support Web Share API.'); // Fallback for non-supporting browsers
        }
    };

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={room.image}
                    alt={room.roomType}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {room.roomType}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <strong>Capacity:</strong> {room.capacity}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <strong>Amenities:</strong> {room.amenities.join(', ')}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <strong>Price:</strong> R{room.price.toFixed(2)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <strong>Availability:</strong> {room.availability ? 'Available' : 'Not Available'}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary" onClick={handleViewClick}>
                        View
                    </Button>
                    <IconButton size="small" color="secondary" onClick={handleLikeClick}>
                        <Favorite /> {likeCount}
                    </IconButton>
                    <IconButton size="small" color="primary" onClick={handleShareClick}>
                        <Share />
                    </IconButton>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default RoomCard;


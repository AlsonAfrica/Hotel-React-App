import React, { useState, useEffect } from 'react';
import "../Components/styles/homepage.css";
import NavbarHome from "./navbar-home";
import DrawerComponent from "./drawerComponent";
import SearchBar from "./searchbar";
import heroImage from './Images/Hero.jpg';
import MapComponent from "./map";
import { db } from '../Config/firebaseconfig';
import { collection, getDocs } from 'firebase/firestore';
import RoomCard from './gridcards';
import RoomPopup from './popUpField';
import { Grid, Container, Typography } from "@mui/material";

const HomePage = () => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'rooms'));
                const roomsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setRooms(roomsList);
            } catch (err) {
                console.error('Error fetching rooms:', err);
            }
        };

        fetchRooms();
    }, []);

    return (
        <div className="homepage-wrapper">
            <div className="home-nav"
                style={{
                    backgroundImage: `url(${heroImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: "no-repeat",
                    width: "100%",
                    height: "400px",
                    position: "relative",
                }}
            >
                <NavbarHome />
                <DrawerComponent />
            </div>
            <div className="searchbar">
                <SearchBar />
            </div>

            {/* Room Catalogues */}
            <div className="explore-rooms">
                <Typography variant="h4" component="h1" gutterBottom>
                    Explore Different Rooms
                </Typography>
            </div>
            <Container>
                <Grid container spacing={3}>
                    {rooms.length > 0 ? (
                        rooms.map(room => (
                            <RoomCard key={room.id} room={room} />
                        ))
                    ) : (
                        <Typography variant="body1">No rooms available</Typography>
                    )}
                </Grid>
            </Container>

            {/* Room Popup */}
            <RoomPopup />

            <div className="footer">
                <div className="map">
                    <MapComponent />
                </div>
            </div>
        </div>
    );
};

export default HomePage;

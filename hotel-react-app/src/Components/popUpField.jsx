import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closePopup } from '../Redux/popupformSlice';
import "../Components/styles/homepage.css";

const RoomPopup = () => {
    const dispatch = useDispatch();
    const { isOpen, roomDetails } = useSelector((state) => state.popup);

    // Local state for the check-in, check-out dates, and number of people
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [numOfPeople, setNumOfPeople] = useState(1);

    const handleClose = () => {
        dispatch(closePopup());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle the form submission here (e.g., send data to server)
        console.log({
            checkInDate,
            checkOutDate,
            numOfPeople,
            roomDetails
        });
    };

    return (
        <div className={`popup ${isOpen ? 'open' : ''}`}>
            {roomDetails && (
                <div className="popup-content">
                    <h2>{roomDetails.roomType}</h2>
                    <p><strong>Capacity:</strong> {roomDetails.capacity}</p>
                    <p><strong>Amenities:</strong> {roomDetails.amenities.join(', ')}</p>
                    <p><strong>Price:</strong> R{roomDetails.price.toFixed(2)}</p>
                    <p><strong>Availability:</strong> {roomDetails.availability ? 'Available' : 'Not Available'}</p>

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="checkin">Check-in Date:</label>
                            <input
                                type="date"
                                id="checkin"
                                value={checkInDate}
                                onChange={(e) => setCheckInDate(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="checkout">Check-out Date:</label>
                            <input
                                type="date"
                                id="checkout"
                                value={checkOutDate}
                                onChange={(e) => setCheckOutDate(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="people">Number of People:</label>
                            <select
                                id="people"
                                value={numOfPeople}
                                onChange={(e) => setNumOfPeople(e.target.value)}
                            >
                                {[...Array(roomDetails.capacity).keys()].map((num) => (
                                    <option key={num + 1} value={num + 1}>
                                        {num + 1}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <button type="submit" className="submit-btn">Book Now</button>
                        <button type="button" className="close-btn" onClick={handleClose}>Close</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default RoomPopup;



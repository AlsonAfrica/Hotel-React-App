import React from 'react';
import { FaHeart } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { MdIosShare } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { openPopup } from '../Redux/popupformSlice';
import Popup from './popUpField';
import { CiWifiOn } from "react-icons/ci";
import { MdLocationCity } from "react-icons/md";
import { MdDinnerDining } from "react-icons/md";


// Sample data for the cards
const cardData = [
  {
    id: 1,
    title: "Deluxe Room",
    imageUrl: "https://via.placeholder.com/300x200", // Placeholder image
    roomType: "Deluxe",
    price: "$120 per night",
    notes: "Includes free breakfast and Wi-Fi.",
    starRating: 4,
    images: [
      "https://via.placeholder.com/100x100",
      "https://via.placeholder.com/100x100",
      "https://via.placeholder.com/100x100",
      "https://via.placeholder.com/100x100",
      "https://via.placeholder.com/100x100",
      "https://via.placeholder.com/100x100",
    ],
    amenities: [
      { icon: <MdDinnerDining />, label: "Free Breakfast" },
      { icon: <CiWifiOn />, label: "Free Wi-Fi" },
      { icon:<MdLocationCity />, label: "City View" },
    ]
  },
  {
    id: 2,
    title: "Standard Room",
    imageUrl: "https://via.placeholder.com/300x200", // Placeholder image
    roomType: "Standard",
    price: "$90 per night",
    notes: "Comfortable stay with all basic amenities.",
    starRating: 3,
    images: [
      "https://via.placeholder.com/100x100",
      "https://via.placeholder.com/100x100",
      "https://via.placeholder.com/100x100",
      "https://via.placeholder.com/100x100",
      "https://via.placeholder.com/100x100",
      "https://via.placeholder.com/100x100",
    ],
    amenities: [
      { icon: <MdDinnerDining />, label: "Free Breakfast" },
      { icon: <CiWifiOn />, label: "Free Wi-Fi" },
      { icon:<MdLocationCity />, label: "City View" },
    ]
  },
  {
    id: 3,
    title: "Suite",
    imageUrl: "https://via.placeholder.com/300x200", // Placeholder image
    roomType: "Suite",
    price: "$200 per night",
    notes: "Luxurious suite with a city view.",
    starRating: 5,
    images: [
      "https://via.placeholder.com/100x100",
      "https://via.placeholder.com/100x100",
      "https://via.placeholder.com/100x100",
      "https://via.placeholder.com/100x100",
      "https://via.placeholder.com/100x100",
      "https://via.placeholder.com/100x100",
    ],
    amenities: [
      { icon: <MdDinnerDining />, label: "Free Breakfast" },
      { icon: <CiWifiOn />, label: "Free Wi-Fi" },
      { icon:<MdLocationCity />, label: "City View" },
    ]
  },

  {
    id: 4,
    title: "Superior Room",
    imageUrl: "https://via.placeholder.com/300x200",
    roomType: "Superior",
    price: "$150 per night",
    notes: "Spacious room with a beautiful view.",
    starRating: 4,
    images: [
      "https://via.placeholder.com/100x100",
      "https://via.placeholder.com/100x100",
      "https://via.placeholder.com/100x100",
      "https://via.placeholder.com/100x100",
      "https://via.placeholder.com/100x100",
      "https://via.placeholder.com/100x100",
    ],
    amenities: [
      { icon: <MdDinnerDining />, label: "Free Breakfast" },
      { icon: <CiWifiOn />, label: "Free Wi-Fi" },
      { icon:<MdLocationCity />, label: "City View" },
    ]
  },
  {
    id: 5,
    title: "Family Room",
    imageUrl: "https://via.placeholder.com/300x200",
    roomType: "Family",
    price: "$180 per night",
    notes: "Ideal for families with children.",
    starRating: 4,
    images: [
      "https://via.placeholder.com/100x100",
      "https://via.placeholder.com/100x100",
      "https://via.placeholder.com/100x100",
      "https://via.placeholder.com/100x100",
      "https://via.placeholder.com/100x100",
      "https://via.placeholder.com/100x100",
    ],
    amenities: [
      { icon: <MdDinnerDining />, label: "Free Breakfast" },
      { icon: <CiWifiOn />, label: "Free Wi-Fi" },
      { icon:<MdLocationCity />, label: "City View" },
    ]
  },
  {
    id: 6,
    title: "Single Room",
    imageUrl: "https://via.placeholder.com/300x200",
    roomType: "Single",
    price: "$70 per night",
    notes: "Perfect for solo travelers.",
    starRating: 3,
    images: [
      "https://via.placeholder.com/100x100",
      "https://via.placeholder.com/100x100",
      "https://via.placeholder.com/100x100",
      "https://via.placeholder.com/100x100",
      "https://via.placeholder.com/100x100",
      "https://via.placeholder.com/100x100",
    ],
    amenities: [
      { icon: <MdDinnerDining />, label: "Free Breakfast" },
      { icon: <CiWifiOn />, label: "Free Wi-Fi" },
      { icon:<MdLocationCity />, label: "City View" },
    ]
  },
  {
    id: 7,
    title: "Double Room",
    imageUrl: "https://via.placeholder.com/300x200",
    roomType: "Double",
    price: "$100 per night",
    notes: "Suitable for couples or friends.",
    starRating: 4,
    images: [
      "https://via.placeholder.com/100x100",
      "https://via.placeholder.com/100x100",
      "https://via.placeholder.com/100x100",
      "https://via.placeholder.com/100x100",
      "https://via.placeholder.com/100x100",
      "https://via.placeholder.com/100x100",
    ],
    amenities: [
      { icon: <MdDinnerDining />, label: "Free Breakfast" },
      { icon: <CiWifiOn />, label: "Free Wi-Fi" },
      { icon:<MdLocationCity />, label: "City View" },
    ]
  },
  {
    id: 8,
    title: "Penthouse",
    imageUrl: "https://via.placeholder.com/300x200",
    roomType: "Penthouse",
    price: "$300 per night",
    notes: "Ultimate luxury with panoramic views.",
    starRating: 5,
    images: [
      "https://via.placeholder.com/100x100",
      "https://via.placeholder.com/100x100",
      "https://via.placeholder.com/100x100",
      "https://via.placeholder.com/100x100",
      "https://via.placeholder.com/100x100",
      "https://via.placeholder.com/100x100",
    ],
    amenities: [
      { icon: <MdDinnerDining />, label: "Free Breakfast" },
      { icon: <CiWifiOn />, label: "Free Wi-Fi" },
      { icon:<MdLocationCity />, label: "City View" },
    ]
  },
  {
    id: 9,
    title: "Budget Room",
    imageUrl: "https://via.placeholder.com/300x200",
    roomType: "Budget",
    price: "$50 per night",
    notes: "Affordable option for budget travelers.",
    starRating: 2,
    images: [
      "https://via.placeholder.com/100x100",
      "https://via.placeholder.com/100x100",
      "https://via.placeholder.com/100x100",
      "https://via.placeholder.com/100x100",
      "https://via.placeholder.com/100x100",
      "https://via.placeholder.com/100x100",
    ],
    amenities: [
      { icon: <MdDinnerDining />, label: "Free Breakfast" },
      { icon: <CiWifiOn />, label: "Free Wi-Fi" },
      { icon:<MdLocationCity />, label: "City View" },
    ]
  },
];
const GridCards = () => {
  const dispatch = useDispatch();

  const handleOpenPopup = (card) => {
    dispatch(openPopup(card)); // Pass the card data to the popup
  };

  return (
    <div className="grid-container">
      {cardData.map((card) => (
        <div key={card.id} className="card">
          <img src={card.imageUrl} alt={card.title} className="card-image" />
          <h3>{card.title}</h3>
          <p>Room Type: {card.roomType}</p>
          <p>Price: {card.price}</p>
          <p>{card.notes}</p>
          <div className="card-rating">
            {"★".repeat(card.starRating)}{"☆".repeat(5 - card.starRating)}
          </div>
          <div className="card-actions">
            <button className="view-button" title="view" onClick={() => handleOpenPopup(card)}>
              <MdOutlineRemoveRedEye />
            </button>
            <button className="like-button" title="like"><FaHeart /></button>
            <button className="share-button" title="share"><MdIosShare /></button>
          </div>
        </div>
      ))}
      <Popup />
    </div>
  );
};

export default GridCards;

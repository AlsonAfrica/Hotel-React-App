import NavbarLanding from "./navbar-landing-page";
import './styles/landingpage.css';
import heroImage from './Images/Hero.jpg'
import stuff from './Images/stuff.jpg'
import BasicDateInputs from "./control-panel";
// import PersonsDropdown from "./PersonsDropdown";
import SearchBar from "./searchbar";
import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";
import RoomCard from "./roomcards";
import { Link } from 'react-router-dom';
import CardCollection from "./roomcards";
import FacilityCollection from "./facilities";
import MapComponent from "./map";
//                                                          

const LandingPage = () => {

    return ( 
        <div className="landing-wrapper">
            {/* Hero Section Styling  */}
           <div className="hero-section"
            style={{backgroundImage:`url(${heroImage})`,
            backgroundSize: 'cover', 
            backgroundPosition: 'center',  
            backgroundRepeat: "no-repeat",         // Prevent the image from repeating
            width: "100%",                         // Full width container
            height: "500px",                       // Adjust height as needed
            position: "relative",                  // Position relative for content positioning
           
        }}

            >
            <div className="Navbar">
            <NavbarLanding/>    
            </div>
            {/* Hero Heading Text */}
            <div className="hero-text">
                <h1>
                    WELCOME TO KING ALSON’S FORTUNE HOTEL
                    <br />
                    WHERE YOU JUST DON’T STAY BUT BELONG!
                </h1>
                <p>
                    Find your perfect stay with ease, explore a wide range of rooms, grab
                    great deals, and book your ideal getaway today
                </p>
            </div>
            <div className="control-panel">
                {/* <BasicDateInputs/><PersonsDropdown/> */}
            </div>
            </div>
            <div className="search-bar">
                <SearchBar/>
            </div>
            
            {/* Room Conatiners */}
                <div className="room-container" id="rooms-container">
                    <div className="text-navigation">
                        <h1>View Our Rooms</h1>
                    </div>
                     <div className="room-cards">
                        <CardCollection/>
                     </div>
                </div>
            <div className="facilities-containers" id="facilities-container">
                    <div className="text-navigation">
                        <h1>View Our Facilities</h1>
                    </div>
                <div className="facilities-cards" > 
                     <FacilityCollection/>
                </div>
            </div>
            <div className="About">
                <div className="picture"
                style={{backgroundImage:`url(${stuff})`,
                backgroundSize: 'cover', 
                backgroundPosition: 'center',  
                backgroundRepeat: "no-repeat",    
                borderRadius: '20px'     // Prevent the image from repeatin    
            
            }}      
                >

                </div>
                <div className="About-text">
                    <h1>About Us</h1>
                    <p className="hotel-location"> WELCOME: TO KING ALSON'S FORTUNE HOTEL</p>
                    <p className="hotel-about">
                         Nestled in the heart of [Location], [Hotel Name] offers a unique blend of comfort, luxury, and modern amenities, designed to make every stay unforgettable. Whether you're here for business, leisure, or a romantic getaway, our hotel provides the perfect setting for relaxation and exploration.
                         At [Hotel Name], we pride ourselves on delivering exceptional service with attention to detail. From our elegantly furnished rooms and suites to our on-site dining options, each element is crafted to create a memorable experience for our guests. Enjoy stunning views of [Scenic Attraction], relax by our rooftop pool, or rejuvenate at our state-of-the-art spa.
                         Conveniently located near [Popular Tourist Spots/Business District], our hotel is the perfect base for discovering all that [Location] has to offer. Whether you’re exploring the local culture, indulging in fine dining, or attending meetings, our staff is committed to making your stay comfortable and seamless.
                    </p>

                </div>
            </div>
            <div className="footer" style={{marginTop:'100px'}}>
                  <div className="map">
                     <MapComponent/>
                  </div>
                  <div className="location">
                    {/* <p>Our</p> */}

                  </div>
                </div>
        </div>
     );
}
 
export default LandingPage;





import "../Components/styles/homepage.css"
import { Link } from 'react-router-dom';
import NavbarHome from "./navbar-home";
import DrawerComponent from "./drawerComponent";
import SearchBar from "./searchbar";
import heroImage from './Images/Hero.jpg';
import GridCards from "./gridcards";
import MapComponent from "./map";

const HomePage = () => {
    return (
    <div className="homepage-wrapper">
        <div className="home-nav"
        style={{backgroundImage:`url(${heroImage})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center',  
        backgroundRepeat: "no-repeat",       
        width: "100%",                         
        height: "400px",                       
        position: "relative",                     
    }} 
        >
            <NavbarHome/>
            <DrawerComponent/>
        </div>
        <div className="searchbar">
          <SearchBar/>
        </div>

        {/* Room Catalogues */}
        <div className="explore-rooms">
            <h1>Explore Different Rooms</h1>
        </div>
        <div className="room-catalogue">
            <div>
                <GridCards/>
            </div>
        </div>
        <div className="footer">
            <div className="map">
               <MapComponent />
            </div>

        </div>
        
    
    </div>  );
}
 
export default HomePage;
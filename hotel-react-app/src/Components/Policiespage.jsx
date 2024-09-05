import "../Components/styles/policies.css";
import NavbarLanding from "./navbar-landing-page";
import heroImage from './Images/Hero.jpg';
import MapComponent from "./map";

const Policies = () => {
    return ( 
        <div className="wrapper-policies">
            <div 
                className="policies-banner"
                style={{
                    backgroundImage: `url(${heroImage})`,
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center',  
                    backgroundRepeat: 'no-repeat',   
                    width: '100%',                      
                    height: '300px',                
                    position: 'relative',                 
                    // display: 'flex',                      
                    // justifyContent: 'center'      
                }}
            >
                <NavbarLanding/>
            </div>
            <div className="hotel-policies-header">
                <h1>HOTEL POLICIES</h1>
            </div>
            <div className="hotel-policies">
                <div className="policies-left-container">
                    <h6>Check-In/Check-Out</h6>
                    <ul>
                        <li>* Check-in time: 3:00 PM</li>
                        <li>* Check-out time: 11:00 AM</li>
                    </ul>
                    <div className="cancellation-container"> 
                        <h6>Cancellation Policy</h6>
                        <ul>
                            <li>* Cancellations must be made at least 24 hours before arrival to avoid charges.</li>
                            <li>* Late cancellations or no-shows will incur a one-night stay charge.</li>
                        </ul>   
                    </div> 
                    <div className="smoking-policy-container"> 
                        <h6>Smoking Policy</h6>
                        <ul>
                            <li>* Our hotel is a smoke-free environment. A cleaning fee will be applied for smoking in any non-designated area.</li> 
                        </ul>   
                    </div> 
                </div>
                <div className="policies-right-container">
                   <div className="pet-policy-container"> 
                        <h6>Pet Policy</h6>
                        <ul>
                            <li>* Cancellations must be made at least 24 hours before arrival to avoid charges.</li>
                            <li>* Late cancellations or no-shows will incur a one-night stay charge.</li>
                        </ul>   
                    </div> 
                    <div className="pet-policy-container"> 
                        <h6>Payment Policy</h6>
                        <ul>
                            <li>* We accept all major credit cards, including Visa, MasterCard, and American Express.</li>
                            <li>* A valid ID and credit card are required at check-in.</li>
                        </ul>   
                    </div> 
                    <div className="pet-policy-container"> 
                        <h6>Quiet Hours</h6>
                        <ul>
                            <li>To ensure a comfortable stay for all guests, quiet hours are observed from 10:00 PM to 8:00 AM.</li> 
                        </ul>   
                    </div>   
                </div>

            </div>
            <div className="hotel-policies-header">
                <h1>COSTUMER COMPLAINS</h1>
            </div>
            <div className="custumer-complains-container">
                <p>We strive to provide an exceptional experience for all our guests, and we take customer feedback very seriously. If you have any <br/>concerns or complaints during your stay, please follow these steps:</p>
                <h6>1.Immediate Report</h6>
                <p>If you encounter any issues, please report them to the front desk or hotel management immediately. Our staff is available 24/7 to address your concerns promptly</p>
                <h6>2. Resolution Process</h6>
                <p>We are committed to resolving any complaints quickly and efficiently. Our team will investigate the issue and take appropriate action to ensure your satisfaction.</p>
            </div>
            <footer>
                <div className="Map">
                    {/* <MapComponent/> */}

                </div>
            </footer>
        </div>
    );
}

export default Policies;

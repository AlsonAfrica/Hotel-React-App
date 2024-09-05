import React from "react";
import './styles/successpage.css';
// import tick from './Images/success-tick.png'
import heroImage from './Images/Hero.jpg'
import { Link } from "react-router-dom";
const SuccessPage = () => {
    return ( 
        <div className="wrapper-success">
            <div className="success-tick"
             style={{backgroundImage:`url(${tick})`}}
            >
                <p>Payment Successful</p>
                <Link to="/HomePage">
                      <button>Home</button>
                </Link>
          
            </div>
        </div>
     );
}
 
export default SuccessPage;
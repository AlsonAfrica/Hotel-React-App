import LoginForm from "../loginform";
import "../styles/auth.css";
import { FaFacebook } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { Link } from 'react-router-dom';
const LoginPage = () => {
    return (
    <div className="login-wrapper">
        <div className='login-pic'>
            <div className="back-btn"><button>hello</button></div>
            <div className='Form'>
                <LoginForm/>
                <div className="icons">
                    <FaFacebook  style={{ fontSize: 30 }}  title="Facebook"  /> <BsTwitterX style={{ fontSize: 30 }} title="Twitter"  /> <TfiEmail style={{ fontSize: 30 }} title="Gmail"  />
                    </div>
            </div> 
        </div>
           <div className='login-form'>
            <div className="login-header"><h1>Login</h1></div>
            <div className="login-text"><p>Your gateway to an unforgettable stay awaits. Log in now to explore exclusive offers, manage your bookings, and customize your experience.</p></div>
            
           </div>
          
    </div> 
     );
}
 
export default LoginPage;
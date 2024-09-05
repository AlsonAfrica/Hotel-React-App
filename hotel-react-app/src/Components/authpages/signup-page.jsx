import "../styles/auth.css"
import SignInForm from "../signupform";
import { FaFacebook } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { Link } from 'react-router-dom';

// Registration Form Component
const SignUp = () => {
    return ( 
        <div className="wrapper-signup">
           <div className='signup-pic'>hello</div>
           <div className='signup-form'>
               <div className='Form'>
                  <SignInForm/>
                  <div className="icons">
                    <FaFacebook  style={{ fontSize: 30 }}  title="Facebook"  /> <BsTwitterX style={{ fontSize: 30 }} title="Twitter"  /> <TfiEmail style={{ fontSize: 30 }} title="Gmail"  /></div>
               </div> 
           </div>
           
        </div>
     );
}
 
export default SignUp;
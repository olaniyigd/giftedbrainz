import "./Signup.css";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

const Signup = () =>{
    return(
        <>
<section className="signup-head">
            <div className="signup-heading">
                <Link to={"/"}><img src={logo} alt="logo" /></Link>
                <h3>Sign Up</h3>
            </div>
            <form className="signup-form">
                <label>
                    Username <br/>
                    <input id="username" type="text" name="name" required />
                </label><br/>
                <label>
                    Enter Your Email <br/>
                    <input type="text" name="name" required/>
                </label><br/>
                <label>
                    Password <br/>
                    <input type="text" name="name" required/>
                </label>
                <div className="check-box">
                <input type="checkbox" className="check" />
                <p className="text">i have agree to the <span>terms & conditions</span> and the <span>privacy & policy</span> of this website.</p>
            </div><br/>
            <div className="Btn">
            <button className="but2">Sign Up</button>
            <p className="already">Already Have An Existing Account? <span><Link to={"/signin"}>Click Here...</Link></span></p>
            </div>
            </form>
        </section>

        <section className="footer-form">
            <Link to={"/"}><h6>Back To Home |</h6></Link>
            <Link to={"/"}><h6>Privacy & Policy |</h6></Link>
            <Link to={"/"}><h6>Terms & Condition</h6></Link>
        </section>
        </>
    )
}
export default Signup;
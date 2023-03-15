import "./Signin.css";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

const Signin = () =>{
    return(
        <> 
            <div className="signin-heading">
                <Link to={'/'}><img src={logo} alt="logo" /></Link>
                <h3>Sign In</h3>
            </div>
            <div className="mob-heading">
            <div className="signinmobile-heading">
                <Link to={'/'}><img src={logo} alt="logo" /></Link>
                <h3>Sign In</h3>
            </div>
            </div>
            <form className="signin-form">
                <label className="signin-label">
                    Enter Your Email: <br/>
                    <input type="text" name="name" />
                </label><br/>
                <label className="signin-label">
                    Password: <br/>
                    <input type="text" name="name" />
                </label>
                <div className="signin-checkbox">
                <input type="checkbox" className="checkb" />
                <p className="textrem">Remember Me</p>
                </div>
                <div className="formbtn">
                <button className="but2">Sign In</button>
                <p className="signin-already">Don't Have An Account? <span>Click Here...</span></p>
            </div>
            </form>
            <div className="mobile-form">
            <form className="signinmobile-form">
                <label className="signin-label">
                    Enter Your Email: <br/>
                    <input type="text" name="name" required/>
                </label><br/>
                <label className="signin-label">
                    Password: <br/>
                    <input type="text" name="name" required/>
                </label>
                <div className="signinmobile-checkbox">
                <input type="checkbox" className="mobilecheckb" />
                <p className="mobiletextrem">Remember Me</p>
                </div>
                <div className="mobileformbtn">
                <button className="but2">Sign In</button>
                <p className="signinmobile-already">Don't Have An Account? <span><Link to={"/signup"}>Click Here...</Link></span></p>
            </div>
            </form>
            </div>
        <section className="signin-footer">
            <Link to={"/"}><h6>Back To Home </h6></Link>
            <Link to={"/"}><h6>Privacy & Policy</h6></Link>
            <Link to={"./"}><h6>Terms & Condition</h6></Link>
        </section>
        <div className="mobile-footr">
        <section className="signinmobile-footer">
            <Link to={"/"}><h6>Back To Home |</h6></Link>
            <Link to={"/"}><h6>Privacy & Policy |</h6></Link>
            <Link to={"./"}><h6>Terms & Condition</h6></Link>
        </section>
        </div>
        </>
    )
}
export default Signin;
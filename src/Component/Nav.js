import "./Nav.css"
import logo from "../images/logo.png";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
export default function Nav (){
    function toggleSwitch(){
        let mobileNav = document.querySelector(".mobile-nav");
        mobileNav.classList.toggle("show")
    }
    return(
        <>
            <nav className="desktop-nav" id="arrowicon">
                <Link to={"/"}><img src={logo} atl="logo" className="logo"/></Link>
                <ul>
                    <a href="#academic"><li>Course</li></a>
                    <a href="#career"><li>Career</li></a>
                    <a href="#about"><li>About Us</li></a>
                </ul>
                <Link to={'/signin'}><button className="sign-in">Sign In</button></Link>
                <div>
                <button className="btn-1" onClick={toggleSwitch}> <FiMenu/> </button>
                </div>
            </nav>
            <ul className="mobile-nav">
                    <a href="#academic2"><li>Course</li></a>
                    <a href="#career2"><li>Career</li></a>
                    <a href="#about2"><li>About Us</li></a>
                <Link to={'./signin'}><li>Sign In</li></Link>
            </ul>
        </>
    )
}
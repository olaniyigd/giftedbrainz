import "./Hero.css"
import Dashboard from "../images/Dashboard.png"
import { Link } from "react-router-dom"

export default function Hero(){
    return(
        <>
         <section className="hero-desktop">
            <div className="left-desktop">
                <h5>We Breed And Reward Intellectuals</h5>
                <p className="desktoptext">Earn And Learn Unlimited As A Member...</p>
                <div className="getstarted">
                <Link to={'./signup'}><button className="btn-getstarted">Get Started</button></Link>
                </div>
            </div>
            <div className="right-desktop">
                <img src={Dashboard} Alt="Dashboard" className="dashboard-image" />
            </div>
        </section>
        <div className="mobile">
        <section className="hero-mobile">
            <div className="left-mobile">
                <h2>We Breed And Reward Intellectuals</h2>
                <p className="mobiletext">Earn And Learn Unlimited As A Member...</p>
                <div className="getstarted">
                <Link to={'./signup'}><button className="btn-mobile">Get Started</button></Link>
                </div>
            </div>
            <div className="right-mobile">
                <img src={Dashboard} Alt="Dashboard" className="mobile-dashboard-image" />
            </div>
        </section>
        </div>
        </>
    )
}
import "./Career2.css";
import Cats from "./Careers2"
import Group49 from "../images/Group49.png"
import Group48 from "../images/Group48.png"


const Career2 = () =>{
    return(
        <>
             <div className="career2-desktop">
                <div className="div-career2">
                <Cats
                image={Group48}
                class ="career2-pic-one"
                paragraph = "You Will Participate In Intellectual Contest For A Life Changing Prize. You Have The Chance To Join Our Innovative And Creative Team."
                para = "career2-text-one"
                />
                </div>
                <div className="career2-div-two">
                <Cats
                image={Group49}
                class ="career2-pic-two"
                paragraph = "You Enjoy Steady Affiliate Earnings. Refer Your Friends And Earn 40% Affiliate Commision."
                para = "career2-text-two"
                />
                </div>
            </div>
            <div className="mobilecareer2">
            <div className="career2-mobile">
                <div className="div-career2">
                <Cats
                image={Group48}
                class ="career2-mobilepic-one"
                paragraph = "You Will Participate In Intellectual Contest For A Life Changing Prize. You Have The Chance To Join Our Innovative And Creative Team."
                para = "mobile-txt"
                />
                </div>
                <div className="career2-div-two">
                <Cats
                image={Group49}
                class ="career2-mobilepic-two"
                paragraph = "You Enjoy Steady Affiliate Earnings. Refer Your Friends And Earn 40% Affiliate Commision.."
                para = "mobile-txt"
                />
                </div>
            </div>
            </div>
        </>
    )
}
export default Career2; 
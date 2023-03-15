import "./Career.css";
import Cat from "./Careers"
import Group51 from "../images/Group51.png"
import Group50 from "../images/Group50.png"


const Career = () =>{
    return(
        <>
            <div className="career-heading" id="career">
                <div>
                <h2 className="career-text">How It Works</h2>
                </div>
            </div>
             <div className="career-desktop">
                <div className="div-one">
                <Cat
                image={Group51}
                class ="pic-one"
                paragraph = "Nigerians And Other African Countries Can Come And Challenge One Another. in a daily active quiz competition and stand a chance to win cash prize more than #100,000 weekly/monthly respectively or it’s equivalent in USDT."
                para = "one"
                />
                </div>
                <div className="div-two">
                <Cat
                image={Group50}
                class ="pic-two"
                paragraph = "you will acquire valuable skills and knowledge in blockchain, De-fi, nFTs, UI/UX Design, fashion/cosmetic and so on."
                para = "two"
                />
                </div>
            </div>
            <div className="mobilecareer" id="career2">
            <div className="career-mobile">
                <div className="div-one">
                <Cat
                image={Group51}
                class ="mobilepic-one"
                paragraph = "Nigerians And Other African Countries Can Come And Challenge One Another. in a daily active quiz competition and stand a chance to win cash prize more than #100,000 weekly/monthly respectively or it’s equivalent in USDT."
                para = "mobile-one"
                />
                </div>
                <div className="div-two">
                <Cat
                image={Group50}
                class ="mobilepic-two"
                paragraph = "you will acquire valuable skills and knowledge in blockchain, De-fi, nFTs, UI/UX Design, fashion/cosmetic and so on."
                para = "mobile-two"
                />
                </div>
            </div>
            </div>
        </>
    )
}
export default Career; 
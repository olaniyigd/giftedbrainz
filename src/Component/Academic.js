import "./Academic.css"
import Aca from "./Academics";
import Win from "../images/Win.png";
import Money from "../images/Money.png";
import Student from "../images/Student.png"

const Academic = () => {
    return(
        <>
         <div className="desktop-academic" id ="academic">
                <div className="desktop-academic-one">
                     <Aca
                        image={Student} 
                        class = "desktop-h2"
                        title = "Learn"
                        paragrap = " you’ll be taught by our experience and qualified teachers, and get update through our website, telegram page and newsletters."
                        para = "desk-par"
                        text = "Learn More"
                        btn = "desktop-btn1"
                    />
                </div>
                <div className="desktop-academic-two">
                    <Aca
                        image={Win}
                        class = "desktop-h21"
                        title = "Quiz"
                        paragrap = "Test your intellectual growth and win weekly/monthly prizes respectively."
                        para = "desk-para1"
                        text = "Learn More"
                        btn = "desktop-btn"
                    />
                </div>
                <div className="desktop-academic-two">
                    <Aca
                        image={Money}
                        class = "desktop-h21"
                        title = "Earn"
                        paragrap = "you’ll earn reward by daily incentive, affiliate commission and the quiz you completed."
                        para = "desk-para2"
                        text = "Learn More"
                        btn = "desktop-btn"
                />
                </div>   
            </div>
            <div className="mobileacademic" id="academic2">
            <div className="mobile-academic">
                <div className="mobile-academic-one">
                     <Aca
                        image={Student} 
                        class = "mobile-h2"
                        title = "Learn"
                        paragrap = " you’ll be taught by our experience and qualified teachers, and get update through our website, telegram page and newsletters."
                        para = "mobi-par"
                        text = "Learn More"
                        btn = "mobile-btn1"
                    />
                </div>
                <div className="mobile-academic-two">
                    <Aca
                        image={Win}
                        class = "mobile-h21"
                        title = "Quiz"
                        paragrap = "Test your intellectual growth and win weekly/monthly prizes respectively."
                        para = "mobi-para1"
                        text = "Learn More"
                        btn = "mobile-btn"
                    />
                </div>
                <div className="mobile-academic-two">
                    <Aca
                        image={Money}
                        class = "mobile-image2"
                        title = "Earn"
                        paragrap = "you’ll earn reward by daily incentive, affiliate commission and the quiz you completed."
                        para = "mobi-para2"
                        text = "Learn More"
                        btn = "mobile-btn"
                />
                </div>   
            </div>
            </div>
        </>
    )
}
export default Academic;
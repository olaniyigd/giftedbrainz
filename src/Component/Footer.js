import "./Footer.css"
import Foot from "./Footers"

const Footer = () => {
    return(
            <>
            <div className="footer-head">
            <div className="footer-heading">
                <h4 className="footer-text">Quick Links</h4>
            </div>
            <div className="desktop-footer">
            <div className="desktop-foot1">
                <Foot 
                    un = "desktop-hed"
                    txt = "Products"
                    guni = "desk-txt1"
                    txtgun = "Course"
                    quiz = "Quiz"
                    refer = "Refer Program"
                    reward = "Spin Reward"
                />
            </div>
            <div className="desktop-foot2">
                <Foot 
                    un = "desktop-hed"
                    txt = "About"
                    guni = "desk-txt1"
                    txtgun = "What We Do"
                    quiz = "Our Mission"
                    refer = "Contact Us"
                    reward = "FAQ"
                    private = "Privacy & Policy"
                />
            </div>
            <div className="desktop-foot3">
                <Foot 
                    un = "desktop-hed"
                    txt = "Resources"
                    guni = "desk-txt1"
                    txtgun = "Docs"
                    quiz = "Careers"
                    refer = "Blog"
                />
            </div>
            </div>
            <p className="deskcopyright">&copy; 2023  Copyright By DakieoDev. All Rights Reserved</p>
            </div>
            <div className="mobile-foot">
            <div className="mobile-footer">
            <div className="mobile-foot1">
                <Foot 
                    un = "mobile-hed"
                    txt = "Products"
                    guni = "mobile-txt1"
                    txtgun = "Course"
                    quiz = "Quiz"
                    refer = "Refer Program"
                    reward = "Spin Reward"
                />
            </div>
            <div className="mobile-foot2">
                <Foot 
                    un = "mobile-hed"
                    txt = "About"
                    guni = "mobile-txt1"
                    txtgun = "What We Do"
                    quiz = "Our Mission"
                    refer = "Contact Us"
                    reward = "FAQ"
                    private = "Privacy & Policy"
                />
            </div>
            <div className="mobile-foot3">
                <Foot 
                    un = "mobile-hed"
                    txt = "Resources"
                    guni = "mobile-txt1"
                    txtgun = "Docs"
                    quiz = "Careers"
                    refer = "Blog"
                />
            </div>
            </div>
            <p className="mobilecopyright">&copy; 2023  Copyright By DakieoDev. All Rights Reserved</p>
            </div>
            </>
    )
}
export default Footer;
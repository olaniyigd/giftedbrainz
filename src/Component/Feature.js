import "./Feature.css";
import Feat from "./Features";
import Rectangle145 from "../images/Rectangle145.png"

const Feature = () =>{
    return(
        <>
        <div className="feature-heading">
            <div>
            <h2 className="feature-title">Features & Benefits</h2>
            </div>
        </div>
            <div className="desktop-feature">
            <div className="desktop-featone">
            <Feat
            src={Rectangle145}
            img = "deskimage"
            class ="desktop-h3"
            head = "Fast Withdrawals"
            message ="We Pay Within 10-24hrs To Your Specific Bank Account."
            texting ="desktop-feattext"
            />
            </div>
            <div className="desktop-featone">
            <Feat
            src={Rectangle145}
            img = "deskimage"
            class ="desktop-h3"
            head = "Spin And Win"
            message ="Win Amazing Price By Simply Spinning The Wheel."
            texting ="desktop-feattext"
            />
            </div>
            <div className="desktop-featone">
            <Feat
            src={Rectangle145}
            img = "deskimage"
            class ="desktop-h3"
            head = "Referrals"
            message ="Referrals Is Not Compulsory."
            texting ="desktop-feattext"
            />
            </div>
            </div>

            <div className="mobile-feat">
            <div className="mobile-feature">
            <div className="mobile-featone">
            <Feat
            src={Rectangle145}
            img = "mobimage"
            class ="mobile-h3"
            head = "Fast Withdrawals"
            message ="We Pay Within 10-24hrs To Your Specific Bank Account."
            texting ="mobile-feattext"
            />
            </div>
            <div className="mobile-featone">
            <Feat
            src={Rectangle145}
            img = "mobimage"
            class ="mobile-h3"
            head = "Spin And Win"
            message ="Win Amazing Price By Simply Spinning The Wheel."
            texting ="mobile-feattext"
            />
            </div>
            <div className="mobile-featone">
            <Feat
            src={Rectangle145}
            img = "mobimage"
            class ="mobile-h3"
            head = "Referrals"
            message ="Referrals Is Not Compulsory."
            texting ="mobile-feattext"
            />
            </div>
            </div>
            </div>
            
        </>
    )
}
export default Feature;
import "./Participate.css"
import Parte from "./Participates";

const Participate = () => {
    return(
            <>
            <div className="p-heading">
                <h4 className="p-title">How To Participate</h4>
            </div>
            <div className="desktop-p">
                <div className="desktop-reg">
                <Parte
                    heading="1. Register"
                    head ="deskp-h2"
                    parag = "Sign Up To Become A Member Of Gifted Brainz."
                    text ="pdesktop-text"
                />
                </div>
                <div className="desktop-cha">
                <Parte
                    heading="2. Take A Challenge"
                    head ="deskp-h2"
                    parag = "Particicpate In A Challenge. Answer 15 Question To Earn (SQP)."
                    text ="pdesktop-text"
                />
                </div>
            </div>
            <div className="mobile-participate">
            <div className="mobile-p">
                <div className="mobile-reg">
                <Parte
                    heading="1. Register"
                    head ="mobilep-h2"
                    parag = "Sign Up To Become A Member Of Gifted Brainz."
                    text ="pmobile-text"
                />
                </div>
                <div className="mobile-cha">
                <Parte
                    heading="2. Take A Challenge"
                    head ="mobilep-h2"
                    parag = "Particicpate In A Challenge. Answer 15 Question To Earn (SQP)."
                    text ="pmobile-text"
                />
                </div>
            </div>
            </div>
           
        </>
    )
}
export default Participate;
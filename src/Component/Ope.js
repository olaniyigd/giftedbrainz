import "./Ope.css"
import Parti from "./Inioluwa"

const Ope = () => {
    return(
        <>
        <div className="particip-desktop">
                <div className="desktop-choose">
                <Parti
                    heading="3. Choose Your Plan"
                    head ="deskpart-h2"
                    parag = "Subscribe Directly On The Site With Weekly Plan Or Monthly Plan."
                    text ="partdesktop-text"
                />
                </div>
                <div className="desktop-cha">
                <Parti
                    heading="4. Refer And Earn"
                    head ="deskpart-h2"
                    parag = "Invite Your Friend. Let Them About This Platform And You’ll Earn 40% Affiliate Commision."
                    text ="partdesktop-text"
                />
                </div>
            </div>
            <div className="mobile-particip">
            <div className="mobile-part">
            <div className="mobile-choose">
                <Parti
                    heading="3. Choose Your Plan"
                    head ="mobipart-h2"
                    parag = "Subscribe Directly On The Site With Weekly Plan Or Monthly Plan."
                    text ="partmobi-text"
                />
                </div>
                <div className="mobile-cha">
                <Parti
                    heading="4. Refer And Earn"
                    head ="mobipart-h2"
                    parag = "Invite Your Friend. Let Them About This Platform And You’ll Earn 40% Affiliate Commision."
                    text ="partmobi-text"
                />
                </div>
            </div>
            </div>
        </>
    )
}
export default Ope;
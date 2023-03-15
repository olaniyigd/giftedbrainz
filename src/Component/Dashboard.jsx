import "./Dashboard.css";
import logo from "../src/images/logo.png"
import arrow from "../src/images/arrow.png"
import Dashboar from "../src/images/Dashboar.png"
import Running from "../src/images/Running.png"
import Conference from "../src/images/Conference.png"
import Wheel from "../src/images/Wheel.png"
import Graduation from "../src/images/Graduation.png"
import Bank from "../src/images/Bank.png"
import Collaboration from "../src/images/Collaboration.png"
import History from "../src/images/History.png"
import setting from "../src/images/setting.png"
import help from "../src/images/help.png"
import Community from "../src/images/Community.png"
import notify from "../src/images/notify.png"
const Dashboard = () => {
    return(
        <section className="dash-head">
            <div className="dash-left">
                <div className="ako">
                    <img src={logo} alt="logo" className="dashimage"/>
                    <img src={arrow} alt="arrow" className="arrow" />
                </div>
                <div className="eke">
                    <img src={Dashboar} alt="Dashboar" className="Dashboar" />
                    <h4 className="dashtitle">Dashboard</h4>
                </div>
                <div className="run">
                    <img src={Running} alt="Running" className="running" />
                    <h4 className="runtitle">Quiz Competition</h4>
                </div>
                <div className="conf">
                    <img src={Conference} alt="Conference" className="conferenc" />
                    <h4 className="contitle">Quiz Leaderboard</h4>
                </div>
                <div className="whil">
                    <img src={Wheel} alt="Wheel" className="wheel" />
                    <h4 className="wheeltitle">Spin To Win</h4>
                </div>
                <div className="grad">
                    <img src={Graduation} alt="Graduation" className="graduation" />
                    <h4 className="gradtitle">Courses</h4>
                </div>
                <div className="ban">
                    <img src={Bank} alt="Bank" className="bank" />
                    <h4 className="banktitle">Payment</h4>
                </div>
                <div className="collab">
                    <img src={Collaboration} alt="Collaboration" className="collaboration" />
                    <h4 className="collaborationtitle">Referrals History</h4>
                </div>
                <div className="hist">
                    <img src={History} alt="History" className="history" />
                    <h4 className="historytitle">Earnings History</h4>
                </div>
                <div className="below">
                <div className="set">
                    <img src={setting} alt="setting" className="Setting" />
                    <h4 className="settingtitle">Settings</h4>
                </div>
                <div className="hep">
                    <img src={help} alt="help" className="Help" />
                    <h4 className="helptitle">Get Help</h4>
                </div>
                <div className="comm">
                    <img src={Community} alt="Community" className="community" />
                    <h4 className="communitytitle">Community</h4>
                </div>
                </div>
            </div>
            <div className="dash-right">
                <div className="dashone">
                    <img src={arrow} alt="arrow" className="arrowe" />
                    <h2 className="das">Dashboard</h2>
                    <input type="text"/>
                    <img src ={notify} alt="notify" className="Notify" />
                    <img src ={""} alt="pic" className="Pic" />
                </div>
                <div className="Welcome">
                    <h1 className="nametitle">Welcome, Niyi</h1>
                </div>
                <div className="amount">
                    <div className="blue">
                        <h3 className="money">Total Earnings</h3>
                        <p className="balance">#203,978</p>
                    </div>
                    <div className="green">
                    <h3 className="money">Total Points</h3>
                    <p className="balance">2000</p>
                        
                    </div>
                    <div className="orange">
                    <h3 className="money">Referrals Earning</h3>
                    <p className="balance">#12,000</p>                        
                    </div>
                </div>
                <div className="table-head">
                        <p className="table-title">Earnings History</p>
                       <div className="table">
                       <table>
                            <th>Task</th>
                            <th>Total Answered</th>
                            <th>Points</th>

                            <tr>
                                <td>1. what is UI/UX Design</td>
                                <td>15</td>
                                <td>20pts</td>
                            </tr>

                            <tr>
                                <td>2. Principles Of Design</td>
                                <td>15</td>
                                <td>10pts</td>
                            </tr>
                            <tr>
                                <td>3. Interaction Design</td>
                                <td>15</td>
                                <td>20pts</td>
                            </tr>
                            <tr>
                                <td>4. User Research</td>
                                <td>15</td>
                                <td>50pts</td>
                            </tr>
                            <tr>
                                <td>5. Prototype</td>
                                <td>15</td>
                                <td>40pts</td>
                            </tr>
                            <tr>
                                <td>6. Data Analysis</td>
                                <td>15</td>
                                <td>50pts</td>
                            </tr>
                        </table>
                       </div>

                    </div>

            </div>
        </section>
    )
}
export default Dashboard;
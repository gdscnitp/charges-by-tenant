import Image from "next/image";
import Profile from "../../../public/images/Profile.svg";

const Identity = () => {
    return (
        <div className="S_landing">
            <div className="S_leftbar">
                <div className="S_identity">
                    <img className="S_profile img-fluid" src="/images/Profile.svg" alt="Profile" />
                    <div className="name">Shyam123</div>
                </div>
                <div className="S_menu">
                    <div className="S_option S_option1"><i class="fas fa-tachometer-alt-fastest"></i><span>Your Sites</span></div>
                    <div className="S_option S_option1"><i class="fab fa-buffer"></i><span>Requests</span></div>
                </div>
            </div>
        </div>
    )
}

export default Identity

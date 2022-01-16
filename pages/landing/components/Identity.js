import Image from "next/image";
import Profile from "../../../public/images/Profile.svg";

const Identity = (props) => {

    return (
        <div className="S_landing">
            <div className="S_leftbar">
                <div className="S_identity">
                    <Image className="S_profile img-fluid" src="/images/Profile.svg" alt="Profile" />
                    <div className="name">Shyam123</div>
                </div>
                <div className="S_menu">
                    <div className="S_option S_option1" onClick={() => props.onShow1()}><i className="fas fa-tachometer-alt-fastest"></i><span>Your Sites</span></div>
                    <div className="S_option S_option1" onClick={() => props.onShow2()}><i className="fab fa-buffer"></i><span>Requests</span></div>
                </div>
            </div>
        </div>
    )
}

export default Identity
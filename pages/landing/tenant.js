import Identity from "./components/Identity"
import LandingPageCard from "./components/LandingPageCard"
import Header from "../profile/components/Header"
import HorizontalLine from "./components/HorizontalLine"

const Tenant = () => {
    return (
        <div className='S_tenant'>
            <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />
            <Identity />
            <div className="S_right">
                <div className="S_head">Your sites</div>
                <HorizontalLine />
                <LandingPageCard />
                <LandingPageCard />
                <LandingPageCard />
                <LandingPageCard />
            </div>
        </div>
    )
}

export default Tenant

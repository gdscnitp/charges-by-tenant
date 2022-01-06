import Identity from "./components/Identity"
import { useState } from "react"
import LandLordSite from "./components/LandLordSite"
import LandLordReq from "./components/LandLordReq"

const Landlord = () => {
    const [siteState, setStateSite] = useState(true)
    const [reqState, setStateReq] = useState(false)

    const onHandle1 = () => {
        if (reqState) {
            setStateSite(true)
            setStateReq(false)
        }
    }

    const onHandle2 = () => {
        if (siteState) {
            setStateSite(false)
            setStateReq(true)
        }
    }
    return (
        <div className='S_landlord'>
            <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous" />
            <Identity onShow1={onHandle1} onShow2={onHandle2} />

            <div className="S_right">
                {siteState ? (<LandLordSite />) : <LandLordReq />}
            </div>
        </div>
    )
}

export default Landlord

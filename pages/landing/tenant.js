import Identity from "./components/Identity"
import TenantSite from "./components/TenantSite"
import TenantReq from "./components/TenantReq"
import { useState } from "react"

const Tenant = () => {
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
        <div className='S_tenant'>
            <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous" />
            <Identity onShow1={onHandle1} onShow2={onHandle2} />
            <div className="S_right">
                {siteState ? (<TenantSite />) : <TenantReq />}
            </div>
        </div>
    )
}

export default Tenant

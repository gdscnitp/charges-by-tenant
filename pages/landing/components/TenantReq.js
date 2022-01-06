import LandingPageCard from "./LandingPageCard"
import Heading from "./Heading"
import HorizontalLine from "./HorizontalLine"

const TenantReq = () => {
    return (
        <>
            <Heading head="Your Requests" />
            <HorizontalLine />
            <LandingPageCard
                owner="Vivek Khan"
                rent="15000/-"
                address="Flat no. 108, Lakshmipuram Society"
                cclass="blue"
                class1="btn-warning"
                text1="Details"
                class2="btn-success px-2 S_request"
                text2="Paid"
            />
        </>
    )
}

export default TenantReq

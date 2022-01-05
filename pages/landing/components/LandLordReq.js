import LandingPageCard from "./LandingPageCard"
import Heading from "./Heading"
import HorizontalLine from "./HorizontalLine"

const LandLordReq = () => {
    return (
        <>
            <Heading head="Your Requests" />
            <HorizontalLine />
            <LandingPageCard
                owner="Vivek Khan"
                rent="15000/-"
                address="Flat no. 108, Lakshmipuram Society"
                cclass="orange"
                class1="btn-primary"
                text1="Details"
                class2="btn-primary px-2 S_request"
                text2="Paid"
            />
        </>
    )
}

export default LandLordReq

import Identity from "./components/Identity"
import LandingPageCard from "./components/LandingPageCard"
import Heading from "./components/Heading"
import HorizontalLine from "./components/HorizontalLine"

const landlord = () => {
    return (
        <div className='S_tenant'>
            <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous" />
            <Identity />
            <div className="S_right">
                <Heading head="Alloted Sites" />
                <HorizontalLine />
                <LandingPageCard owner="Vivek Khan" rent="15000/-" address="Flat no. 108, Lakshmipuram Society" cclass="orange" class1="btn-primary" text1="Details" class2="btn-primary a-margin-left" text2="History" class3="btn-success px-2" text3="Generate Charges" />
                <LandingPageCard owner="Vivek Khan" rent="15000/-" address="Flat no. 108, Lakshmipuram Society" cclass="orange" class1="btn-primary" text1="Details" class2="btn-primary a-margin-left" text2="History" class3="btn-success px-2" text3="Generate Charges" />
                <LandingPageCard owner="Vivek Khan" rent="15000/-" address="Flat no. 108, Lakshmipuram Society" cclass="orange" class1="btn-primary" text1="Details" class2="btn-primary a-margin-left" text2="History" class3="btn-success px-2" text3="Generate Charges" />
                <LandingPageCard owner="Vivek Khan" rent="15000/-" address="Flat no. 108, Lakshmipuram Society" cclass="orange" class1="btn-primary" text1="Details" class2="btn-primary a-margin-left" text2="History" class3="btn-success px-2" text3="Generate Charges" />
            </div>
        </div>
    )
}

export default landlord

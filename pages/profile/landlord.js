import Details from "./components/Details"
import TableList from "./components/TableList"

export default function Home() {
    return (
        <div className="Parent">
            <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"></link>
            <div className="S_left">
                <i className="fad fa-user-circle S_icon S_icon0"></i>
                <i className="fal fa-home-lg-alt S_icon S_icon1"></i>
                <i className="fal fa-grip-lines-vertical S_icon S_icon2"></i>
                <i className="fal fa-rupee-sign S_icon S_icon3"></i>
                <i className="fad fa-snowman S_icon S_icon4"></i>
                <i className="fal fa-sign-out S_icon S_icon5"></i>
            </div>
            <div className="S_right">
                <Details email="Email1" detail1="Details" detail2="Details" detail3="Details" detail4="Details" />
                <hr />
                <TableList head="Your Sites" flat="Flat-402" loc="Near Road, XYZ Town, ABC" siteName="Sites Name" available="Alloted/not Alloted" />
            </div>
        </div>
    )
}

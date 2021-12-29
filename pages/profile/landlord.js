import Details from "./Details"
import TableList from "./tableList"

export default function Home() {
    return (
        <div className="Parent">
            <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
            <div className="S_left">
                <i class="fad fa-user-circle icon icon0"></i>
                <i class="fal fa-home-lg-alt icon icon1"></i>
                <i class="fal fa-grip-lines-vertical icon icon2"></i>
                <i class="fal fa-rupee-sign icon icon3"></i>
                <i class="fad fa-snowman icon icon4"></i>
                <i class="fal fa-sign-out icon icon5"></i>
            </div>
            <div className="S_right">
                <Details email="Email1" detail1="Details" detail2="Details" detail3="Details" detail4="Details" />
                <hr />
                <TableList head="Your Sites" flat="Flat-402" loc="Near Road, XYZ Town, ABC" siteName="Sites Name" available="Alloted/not Alloted" />
            </div>
        </div>
    )
}

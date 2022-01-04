import Details from "./components/Details"
import TableList from "./components/TableList"
import Taskbar from "./components/taskbar"

export default function Home() {
    return (
        <div className="Parent">
            <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous" />
            <Taskbar />
            <div className="S_right">
                <Details email="Email1" detail1="Details" detail2="Details" detail3="Details" detail4="Details" />
                <hr />
                <div className="right_bottom">
                    <Header head="Your Sites" />
                    <TableList flat="Flat-402" loc="Near Road, XYZ Town, ABC" siteName="Sites Name" available="Alloted/not Alloted" />
                </div>
            </div>
        </div>
    )
}

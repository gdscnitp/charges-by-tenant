import Details from "./components/Details"
import TableList from "./components/TableList"
import Taskbar from "./components/taskbar"
import Header from "./components/Header"

export default function Home() {
  return (
    <div className="Parent">
      <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />
      <Taskbar />
      <div className="S_right">
        <Details email="Email1" detail1="Details" detail2="Details" detail3="Details" detail4="Details" />
        <hr />
        <div className="right_bottom">
          <Header head="Available Sites" />
          <TableList flat="Flat-402" loc="Near Road, XYZ Town, ABC" siteName="From: 04 Dec 2021" available="Residential" />
        </div>
      </div>
    </div>
  )
}

import Details from "./components/Details";
import TableList from "./components/TableList";
import Taskbar from "./components/Taskbar";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="Parent">
      <Taskbar />
      <div className="S_right">
        <Details
          email="Email1"
          detail1="Details"
          detail2="Details"
          detail3="Details"
          detail4="Details"
        />
        <hr />
        <div className="S_rightBottom">
          <Header head="Available Sites" />
          <TableList
            tableclass="table-striped Stable"
            flat="Flat-402"
            loc="Near Road, XYZ Town, ABC"
            siteName="From: 04 Dec 2021"
            available="Residential"
            view="View"
          />
        </div>
      </div>
    </div>
  );
}

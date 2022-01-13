import Image from "next/image";
import Total_Charges from "../../public/images/Total_Charges.png";
import Header from "./components/Header";
import TotalchargesCard from "./components/totalChargesCard";
import Taskbar from "../profile/components/Taskbar";

const allTransactions = [
  {
    electricity: 1234,
    internet: 4567,
    water: 789,
  },
  {
    electricity: 8767,
    internet: 9245,
    water: 54876,
  },
  {
    electricity: 1234,
    internet: 4567,
    water: 789,
  },
  {
    electricity: 8767,
    internet: 9245,
    water: 54876,
  },
];

export default function total_charges() {
  return (
    <>
      <div className="Parent">
        <Taskbar />
        <div className="S_right">
          <div>
            <link
              rel="stylesheet"
              href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
              integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
              crossOrigin="anonymous"
            ></link>
            <link
              rel="stylesheet"
              href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
              integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
              crossOrigin="anonymous"
            />

            <div className="p_right">
              <Header header="Total Charges" />

              {allTransactions.map((data) => {
                return (
                  <TotalchargesCard
                    electricity={data.electricity}
                    internet={data.internet}
                    water={data.water}
                  />
                );
              })}
            </div>
            <div className="tc">
              <Image src={Total_Charges} alt="TC" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

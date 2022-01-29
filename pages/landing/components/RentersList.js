import React from "react";
import Moment from "react-moment";

const RentersList = (props) => {
  return (
    <div className="right_bottom">
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
        integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
        crossOrigin="anonymous"
      />
      <div className="p_h2">{props.head}</div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            {/* <th scope="col">{props.loc}</th> */}
            <th scope="col">{props.rentedFrom}</th>
            <th scope="col">{props.rentedTill}</th>
            <th scope="col">
              Deposit( <i className="fas fa-rupee-sign"></i> )
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{props.tenantDetails?.firstName}</th>
            {/* <td>Near Road, XYZ Town, AUS</td> */}
            <td>
              {props.historyDetail?.joined_at ? (
                <Moment format="MMMM Do YYYY">
                  {props.historyDetail?.joined_at}
                </Moment>
              ) : (
                "Requested"
              )}{" "}
            </td>
            <td>
              {props.historyDetail?.joined_at
                ? props.historyDetail?.leave_at
                  ? props.historyDetail?.leave_at
                  : "Presently Living"
                : "Requested"}
            </td>
            <td>
              {" "}
              <i className="fas fa-rupee-sign"></i> {props.deposit}
            </td>
          </tr>
          {/* <tr>
            <th scope="row">Flat-404</th>
            <td>Near Road, PQR Town, CAN</td>
            <td></td>
            <td></td>
            <td>1050</td>
          </tr>
          <tr>
            <th scope="row">Flat-405</th>
            <td>Near Road, FGH Town, USA</td>
            <td></td>
            <td></td>
            <td>850</td>
          </tr>
          <tr>
            <th scope="row">Flat-406</th>
            <td>Near Road, DEF Town, FRA</td>
            <td></td>
            <td></td>
            <td>2400</td>
          </tr>
          <tr>
            <th scope="row">Flat-407</th>
            <td>Near Road, PWC Town, IND</td>
            <td></td>
            <td></td>
            <td>1700</td>
          </tr>
          <tr>
            <th scope="row">Flat-408</th>
            <td>Near Road, RST Town, UK</td>
            <td></td>
            <td></td>
            <td>1390</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default RentersList;

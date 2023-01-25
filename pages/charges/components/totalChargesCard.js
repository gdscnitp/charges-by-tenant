import React from "react";
import Moment from "react-moment";

const TotalchargesCard = (props) => {
  var totalCharges = 0;

  return (
    // return <button className={`btn ${props.classNameProp}`}>{props.name}</button>;

    // <div className="p_card1 `${props.color}`">

    <div className={`p_card1 ${props.color}`}>
      <div className="p_cardb">
        <table cellPadding="4" cellSpacing="4" border="0">
          <thead>
            <tr>
              <th colSpan="2">Monthly Charges</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Rent:</td>
              <td>{props.siteDetails?.rent}</td>
            </tr>
            <tr>
              <td>Created on:</td>
              <td><Moment format="MMMM Do YYYY">{props.date}</Moment></td>
            </tr>
            {props.description
              ? Object.keys(props.description).map((data, index) => {
                if (data != 'rent') {
                  totalCharges += parseInt(props.description[data]);
                  return (
                    <tr key={index}>
                      <td>{data}:</td>
                      <td>{props.description[data]}</td>
                    </tr>
                  );
                }
              })
              : ""}
          </tbody>
          <tfoot>
            <tr className="border-top border-dark">
              <td>
                <strong> Total</strong>
              </td>
              <td>{totalCharges + parseInt(props.siteDetails?.rent)}</td>
            </tr>
          </tfoot>
        </table>
        {/* <div className="p_tb">
          <a href="#" className="btn btn-info">
            Pay Now
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default TotalchargesCard;

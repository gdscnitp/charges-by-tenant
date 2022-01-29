import React from "react";

const TotalchargesCard = (props) => {
  var totalCharges = 0;

  return (
    <div className="p_card1">
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
            {props.description
              ? Object.keys(props.description).map((data, index) => {
                  totalCharges += parseInt(props.description[data]);
                  return (
                    <tr key={index}>
                      <td>{data}:</td>
                      <td>{props.description[data]}</td>
                    </tr>
                  );
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

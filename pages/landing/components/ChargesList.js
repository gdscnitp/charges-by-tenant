import React from "react";
import Moment from "react-moment";
import Cookies from "js-cookie";
import { useSnackbar } from "notistack";
import { useRouter } from "next/router";
import axios from "axios";
import { TitleCaseFormatter } from "../../functions/Formatters/TitleCaseFormatter";

const ChargesList = (props) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const router = useRouter();

  const payCharges = async (charge_id) => {
    console.log(charge_id);
    closeSnackbar();
    let config = {
      headers: {
        authorization: "b " + JSON.parse(Cookies.get("userInfo")).data.token,
      },
    };
    try {
      var chargeObject = { chargeId: charge_id };
      console.log(chargeObject);
      console.log(props.allCharges);
      axios.post("/api/charges/pay", chargeObject, config).then((res) => {
        // dispatch({
        //   type: "USER_INFO_FETCHING",
        //   payload: res.data?.data,
        // });
        console.log(res);
        if (res.data?.success) {
          enqueueSnackbar("Paid Successfully", { variant: "success" });
        }
      });
    } catch (err) {
      enqueueSnackbar(err.response?.data?.message, { variant: "error" });
    }
  };

  const totalExtraCharges = (description) => {
    var descriptionKeys = Object.keys(description);
    var totalCharges = 0;
    descriptionKeys?.map((data, index) => {
      totalCharges = totalCharges + parseInt(description[data]);
    });
    return totalCharges;
  };

  const goToParticularCharge = (site_id) => {
    router.push(`/charges/ParticularSiteCharges?site_id=${site_id}`); //small change to trigger github PR
  };

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
            <th scope="col">Alias Name</th>
            <th scope="col">Address</th>
            <th scope="col">Rent</th>
            <th scope="col">Other Charges</th>
            <th scope="col">Total</th>
            <th scope="col">Payment Status</th>
            <th scope="col">Details</th>
          </tr>
        </thead>
        <tbody>
          {props.allCharges?.map((data, index) => {
            var totalCharges = totalExtraCharges(data.description);
            var rent = data.site_id?.rent;
            var address =
              data?.site_id?.address?.first_line +
              ", " +
              data?.site_id?.address?.landmark +
              ", " +
              data?.site_id?.address?.city +
              ", " +
              data?.site_id?.address?.state;
            return (
              <tr key={index}>
                <td>{TitleCaseFormatter(data.site_id?.alias_name)}</td>
                <td>{TitleCaseFormatter(address)}</td>
                <td>{rent}</td>
                <td>{totalCharges - rent}</td>
                <td>{rent + totalCharges - rent}</td>
                <td>
                  {data?.isPaid ? (
                    <button className="btn btn-success" disabled>
                      Paid
                    </button>
                  ) : (
                    <button
                      className="btn btn-warning"
                      onClick={() => payCharges(data._id)}
                    >
                      Pay
                    </button>
                  )}
                </td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => goToParticularCharge(data.site_id?._id)}
                  >
                    Details
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ChargesList;

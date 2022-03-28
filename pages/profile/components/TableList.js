import React from "react";
import { TitleCaseFormatter } from "../../../utility/functions/Formatters/TitleCaseFormatter";
import { useRouter } from "next/router";
import Link from "next/link";

var i = 0;

const TableList = (props) => {
  const router = useRouter();
  const goToDetailsPage = (link) => {
    router.push(link);
  };

  var detailsArray = props.allDetails?.reverse();
  return (
    <table className={`table table-striped ${props.tableclass}`}>
      <thead>
        <tr>
          <th scope="col">{props.flat}</th>
          <th scope="col">{props.loc}</th>
          <th scope="col">{props.available}</th>
          <th scope="col">{props.view}</th>
        </tr>
      </thead>
      <tbody>
        {detailsArray?.map((data) => {
          if (data.status == "1") {
            console.log(data);
            return (
              <tr key={i++}>
                <th scope="row">
                  {TitleCaseFormatter(data.site_id?.alias_name)}
                </th>
                <td>{TitleCaseFormatter(data.site_id?.address?.first_line)}</td>
                <td>{TitleCaseFormatter(data.site_id?.Type)}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-info"
                    onClick={() =>
                      goToDetailsPage(
                        `/charges/ParticularSiteCharges?site_id=${data.site_id._id}`
                      )
                    }
                    // `/charges/ParticularSiteCharges?site_id=${site_id}`
                  >
                    Info
                  </button>
                </td>
              </tr>
            );
          }
        })}
        {/* Awara Code*/}
      </tbody>
    </table>
  );
};

export default TableList;

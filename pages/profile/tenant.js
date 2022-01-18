import Details from "./components/Details";
import TableList from "./components/TableList";
import Taskbar from "./components/Taskbar";
import Header from "./components/Header";
import React, { useContext, useEffect, useState } from "react";
import { Store } from "../../utility/Store";
import Cookies from "js-cookie";
import { useSnackbar } from "notistack";
import axios from "axios";

const tableData = [
  // Comment delete mat karna apshabd
  // {
  //   FlatNo:
  //   Addres:
  //   AliasName:
  //   PataNahi:
  // },
  {
    col1: "Flat-402",
    col2: "Near Road, XYZ Town, ABC",
    col3: "Dummy",
    col4: "Residential",
  },
  {
    col1: "Flat-402",
    col2: "Near Road, XYZ Town, ABC",
    col3: "Dummy",
    col4: "Residential",
  },
  {
    col1: "Flat-402",
    col2: "Near Road, XYZ Town, ABC",
    col3: "Dummy",
    col4: "Residential",
  },
  {
    col1: "Flat-402",
    col2: "Near Road, XYZ Town, ABC",
    col3: "Dummy",
    col4: "Residential",
  },
  {
    col1: "Flat-402",
    col2: "Near Road, XYZ Town, ABC",
    col3: "Dummy",
    col4: "Residential",
  },
  {
    col1: "Flat-402",
    col2: "Near Road, XYZ Town, ABC",
    col3: "Dummy",
    col4: "Residential",
  },
  {
    col1: "Flat-402",
    col2: "Near Road, XYZ Town, ABC",
    col3: "Dummy",
    col4: "Residential",
  },
  {
    col1: "Flat-402",
    col2: "Near Road, XYZ Town, ABC",
    col3: "Dummy",
    col4: "Residential",
  },
];

export default function Home() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { dispatch, state } = useContext(Store);
  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = async () => {
    closeSnackbar();
    // var correct = validateData(details);

    // console.log(Cookies.get("userInfo"));
    let config = {
      headers: {
        authorization: "b " + JSON.parse(Cookies.get("userInfo")).data.token,
      },
    };
    console.log(config);
    try {
      axios.post("/api/auth/users/login", {}, config).then((res) => {
        console.log(res);
        dispatch({
          type: "USER_INFO_FETCHING",
          payload: res.data?.data,
        });
      });

      // enqueueSnackbar("User Signed In Successfully", { variant: "success" });
    } catch (err) {
      console.log(err);
      enqueueSnackbar(err.response?.data?.message, { variant: "error" });
    }
  };

  return (
    <div className="Parent">
      <Taskbar />
      <div className="S_right">
        <Details
          name={state.userInfo?.firstName}
          email={state.userInfo?.email}
          detail1={state.userInfo?.contact}
          detail2="Details"
          detail3="Details"
          detail4="Details"
        />
        <hr />
        <div className="S_rightBottom">
          <Header head="Available Sites" />

          <TableList
            tableclass="table-striped Stable"
            flat="Flat No."
            loc="Address"
            siteName="Site Name"
            available="Type"
            view="View"
            tableData={tableData}
          />

          {/* <TableList
            tableclass="table-striped Stable"
            flat="Flat-402"
            loc="Near Road, XYZ Town, ABC"
            siteName="From: 04 Dec 2021"
            available="Residential"
            view="View"
            tableData={tableData}
          /> */}
        </div>
      </div>
    </div>
  );
}

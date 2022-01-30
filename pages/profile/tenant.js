import Head from 'next/head'
import Details from "./components/Details";
import TableList from "./components/TableList";
import Taskbar from "./components/Taskbar";
import Header from "./components/Header";
import React, { useContext, useEffect, useState } from "react";
import { Store } from "../../utility/Store";
import Cookies from "js-cookie";
import { useSnackbar } from "notistack";
import axios from "axios";
import * as ReactBootStrap from 'react-bootstrap'
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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getDetails();
    ViewReq();
  }, []);
  const ViewReq = async () => {
    console.log("called view req");
    closeSnackbar();
    let config = {
      headers: {
        authorization: "b " + JSON.parse(Cookies.get("userInfo")).data.token,
      },
    };
    try {
      await axios.get("/api/profile/viewsite", config).then((res) => {
        dispatch({
          type: "VIEW_REQUESTS",
          payload: res.data,
        });
        setLoading(true);
        console.log(res);
      });
    } catch (err) {
      // console.log(err);
      enqueueSnackbar(err.message, { variant: "error" });
    }
  };

  const getDetails = async () => {
    closeSnackbar();
    // var correct = validateData(details);

    // console.log(Cookies.get("userInfo"));
    let config = {
      headers: {
        authorization: "b " + JSON.parse(Cookies.get("userInfo")).data.token,
      },
    };
    try {
      axios.post("/api/auth/users/login", {}, config).then((res) => {
        dispatch({
          type: "USER_INFO_FETCHING",
          payload: res.data?.data,
        });
      });

      enqueueSnackbar("Data Retrieved", { variant: "success" });
    } catch (err) {
      console.log(err);
      enqueueSnackbar(err.response?.data?.message, { variant: "error" });
    }
  };

  return (
    <>
    <Head>
        <title>Profile</title>
    </Head>
      {loading ? (
        <div className="Parent">
          {console.log(state.userInfo)}
          <Taskbar />
          <div className="S_right">
            <Details
              name={state.userInfo?.firstName}
              email={state.userInfo?.email}
              detail1={state.userInfo?.contact}
              detail2={state.userInfo?.username}
              detail3={state.userInfo?.email}
              detail4={state.userInfo?.firstName + " " + state.userInfo?.lastName}
            />
            <hr />
            <div className="S_rightBottom">
              <Header head="Your Sites" />

              <TableList
                tableclass="table-striped Stable"
                flat="Flat No."
                loc="Address"
                siteName="Site Name"
                available="Type"
                view="View"
                tableData={tableData}
                allDetails={state.siteDetail}
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
      ) : (
        <div className="p_spinner">
            <ReactBootStrap.Spinner animation="border"/>
        </div>
        )
      }
    </>

  );
}

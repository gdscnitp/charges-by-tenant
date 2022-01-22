import AfterEditContent from "./components/AfterEditContent";
import BeforeEditContent from "./components/BeforeEditContent";
import EditBirthday from "./components/EditBirthday";
import Taskbar from "../profile/components/Taskbar";
import Heading from "../landing/components/Heading";
import React, { useContext, useEffect, useState } from "react";
import { Store } from "../../utility/Store";
import Cookies from "js-cookie";
import { useSnackbar } from "notistack";
import axios from "axios";

function EditTenant() {
  // Integration Code
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { dispatch, state } = useContext(Store);
  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = async () => {
    closeSnackbar();

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
      // console.log(err);
      enqueueSnackbar(err.response?.data?.message, { variant: "error" });
    }
  };

  const [details, setDetails] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address: "",
    DOB: "",
    verification: "",
    occupation: "",
  });

  const onChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  // Normal page code
  const [show, setShow] = useState({
    Username: true,
    FirstName: true,
    LastName: true,
    Email: true,
    Contact: true,
    Address: true,
    Birthday: true,
    UID: true,
    Occupation: true,
  });

  const allTrue = () => {
    setShow((previousState) => {
      return {
        ...previousState,
        Username: true,
        FirstName: true,
        LastName: true,
        Email: true,
        Contact: true,
        Address: true,
        Birthday: true,
        UID: true,
        Occupation: true,
      };
    });
  };

  const editUsername = () => {
    allTrue();
    setShow((previousState) => {
      return { ...previousState, Username: false };
    });
  };
  const editFirstName = () => {
    allTrue();
    setShow((previousState) => {
      return { ...previousState, FirstName: false };
    });
  };
  const editLastName = () => {
    allTrue();
    setShow((previousState) => {
      return { ...previousState, LastName: false };
    });
  };
  const editEmail = () => {
    allTrue();
    setShow((previousState) => {
      return { ...previousState, Email: false };
    });
  };
  const editContact = () => {
    allTrue();
    setShow((previousState) => {
      return { ...previousState, Contact: false };
    });
  };
  const editAddress = () => {
    allTrue();
    setShow((previousState) => {
      return { ...previousState, Address: false };
    });
  };
  const editBirthday = () => {
    allTrue();
    setShow((previousState) => {
      return { ...previousState, Birthday: false };
    });
  };
  const editUID = () => {
    allTrue();
    setShow((previousState) => {
      return { ...previousState, UID: false };
    });
  };
  const editOccupation = () => {
    allTrue();
    setShow((previousState) => {
      return { ...previousState, Occupation: false };
    });
  };

  // Save Buttons
  const saveUsername = () => {
    setShow((previousState) => {
      return { ...previousState, Username: true };
    });
  };
  const saveFirstName = () => {
    setShow((previousState) => {
      return { ...previousState, FirstName: true };
    });
  };
  const saveLastName = () => {
    setShow((previousState) => {
      return { ...previousState, LastName: true };
    });
  };
  const saveEmail = () => {
    setShow((previousState) => {
      return { ...previousState, Email: true };
    });
  };
  const saveContact = () => {
    setShow((previousState) => {
      return { ...previousState, Contact: true };
    });
  };
  const saveAddress = () => {
    setShow((previousState) => {
      return { ...previousState, Address: true };
    });
  };
  const saveBirthday = () => {
    setShow((previousState) => {
      return { ...previousState, Birthday: true };
    });
  };
  const saveUID = () => {
    setShow((previousState) => {
      return { ...previousState, UID: true };
    });
  };
  const saveOccupation = () => {
    setShow((previousState) => {
      return { ...previousState, Occupation: true };
    });
  };

  const cancel = () => {
    allTrue();
  };

  // Input Code
  var detailsArray = {
    username: state.userInfo?.username,
    firstName: state.userInfo?.firstName,
    llastName: state.userInfo?.lastName,
    email: state.userInfo?.email,
    contact: state.userInfo?.contact,
    address: state.userInfo?.address?.first_line,
    birthday: state.userInfo?.birthday,
    uid: state.userInfo?.uid,
    occupation: state.userInfo?.occupation,
  };
  const ISSERVER = typeof window === "undefined";
  var tenantData;
  if (!ISSERVER) {
    tenantData = JSON.parse(localStorage.getItem("TenantData"));
  }

  // const [details, setDetails] = useState({
  //   username: detailsArray.username,
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   contact: "",
  //   address: "",
  //   birthday: "",
  //   uid: "",
  //   occupation: "",
  // });

  // useEffect(() => {
  //   initialDetails();
  // }, []);

  // const initialDetails = () => {
  //   setDetails((details) => {
  //     return {
  //       ...details,
  //       username: detailsArray.username,
  //       firstName: state.userInfo?.firstName,
  //       lastName: state.userInfo?.lastName,
  //       email: state.userInfo?.email,
  //       contact: state.userInfo?.contact,
  //       address: state.userInfo?.address?.first_line,
  //       birthday: state.userInfo?.birthday,
  //       uid: state.userInfo?.uid,
  //       occupation: state.userInfo?.occupation,
  //     };
  //   });
  // };

  const allContent = [
    {
      toShow: show.Username,
      title: "Username",
      content: state.userInfo?.username,
      editButtonClick: editUsername,
      saveCLick: saveUsername,
      name: "username",
    },
    {
      toShow: show.FirstName,
      title: "First Name",
      content: state.userInfo?.firstName,
      editButtonClick: editFirstName,
      saveCLick: saveFirstName,
      name: "firstName",
    },
    {
      toShow: show.LastName,
      title: "Last Name",
      content: state.userInfo?.lastName,
      editButtonClick: editLastName,
      saveCLick: saveLastName,
      name: "lastName",
    },
    {
      toShow: show.Email,
      title: "Email",
      content: state.userInfo?.email,
      editButtonClick: editEmail,
      saveCLick: saveEmail,
      name: "email",
    },
    {
      toShow: show.Contact,
      title: "Contact",
      content: state.userInfo?.contact,
      editButtonClick: editContact,
      saveCLick: saveContact,
      name: "contact",
    },
    {
      toShow: show.Address,
      title: "Address",
      // content:
      //   "Flat-104, Vrundavan Apt., Near Gandhi Statue, Vikas Nagar, Pune",
      content: state.userInfo?.address?.first_line,
      editButtonClick: editAddress,
      saveCLick: saveAddress,
      name: "address",
    },
    {
      toShow: show.Birthday,
      title: "Birthday",
      // content: "January 9. 2000",
      content: state.userInfo?.DOB,
      editButtonClick: editBirthday,
      saveCLick: saveBirthday,
      name: "DOB",
    },
    {
      toShow: show.UID,
      title: "Verification",
      content: state.userInfo?.uid,
      editButtonClick: editUID,
      saveCLick: saveUID,
      name: "verification",
    },
    {
      toShow: show.Occupation,
      title: "Occupation",
      // content: "Doctor",
      content: state.userInfo?.occupation,
      editButtonClick: editOccupation,
      saveCLick: saveOccupation,
      name: "occupation",
    },
  ];

  return (
    <section>
      <div className="Parent">
        <Taskbar />
        <div className="S_right">
          <Heading head="Edit Profile Page" />
          <div className="a-center">
            <div className="a-edit-container shadow-lg rounded p-3 bg-white">
              <strong>
                <div className="a-title">Your Information</div>
              </strong>
              <div className="container">
                {allContent.map((data) => {
                  return (
                    <div key={data.title} className="a-row-content">
                      {data.toShow ? (
                        <BeforeEditContent
                          title={data.title}
                          content={data.content}
                          editButtonClick={data.editButtonClick}
                        />
                      ) : data.title == "Birthday" ? (
                        <EditBirthday
                          title={data.title}
                          saveClick={data.saveCLick}
                          cancelClick={cancel}
                        />
                      ) : (
                        <AfterEditContent
                          title={data.title}
                          content={data.content}
                          saveClick={data.saveCLick}
                          cancelClick={cancel}
                          name={data.name}
                          onChangee={onChange(e)}
                        />
                      )}
                    </div>
                  );
                })}

                {/* History */}

                <div className="row a-edit-content a-row-wrapper">
                  <div className="col-lg-4 col-sm-12">
                    <span className="a-edit-left-title">History</span>
                  </div>
                  <div className="col-lg-7 col-sm-10">
                    <span className="a-edit-right-content a-not-provided">
                      No History
                    </span>
                  </div>
                  {/* <div className="col-lg-1 col-sm-2">
                <button className="a-edit">Edit</button>
              </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EditTenant;

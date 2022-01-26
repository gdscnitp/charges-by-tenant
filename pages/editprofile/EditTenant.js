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
    //  if cancelled, then update the data to original
    initialiseDetails();
    // closing all the input fields
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
  // const saveUsername = () => {
  //   editHandler();
  //   setShow((previousState) => {
  //     return { ...previousState, Username: true };
  //   });
  // };
  // const saveFirstName = () => {
  //   editHandler();
  //   setShow((previousState) => {
  //     return { ...previousState, FirstName: true };
  //   });
  // };
  // const saveLastName = () => {
  //   editHandler();
  //   setShow((previousState) => {
  //     return { ...previousState, LastName: true };
  //   });
  // };
  // const saveEmail = () => {
  //   editHandler();
  //   setShow((previousState) => {
  //     return { ...previousState, Email: true };
  //   });
  // };
  // const saveContact = () => {
  //   editHandler();
  //   setShow((previousState) => {
  //     return { ...previousState, Contact: true };
  //   });
  // };
  // const saveAddress = () => {
  //   setShow((previousState) => {
  //     return { ...previousState, Address: true };
  //   });
  // };
  // const saveBirthday = () => {
  //   setShow((previousState) => {
  //     return { ...previousState, Birthday: true };
  //   });
  // };
  // const saveUID = () => {
  //   setShow((previousState) => {
  //     return { ...previousState, UID: true };
  //   });
  // };
  // const saveOccupation = () => {
  //   setShow((previousState) => {
  //     return { ...previousState, Occupation: true };
  //   });
  // };

  const cancel = () => {
    allTrue();
  };

  const save = () => {
    editHandler().then(allTrue());
  };

  // Initialising details
  const [details, setDetails] = useState({
    username: "",
    firstName: "",
    lastName: "",
    contact: "",
    address: {
      first_line: "first_line",
    },
    DOB: "",
    occupation: "",
    verification: "",
  });
  // console.log(details);

  function initialiseDetails() {
    // console.log(state.userInfo?.DOB?.split("T")[0]);
    setDetails({
      ...details,
      username: state.userInfo?.username ? state.userInfo.username : undefined,
      firstName: state.userInfo?.firstName
        ? state.userInfo.firstName
        : undefined,
      lastName: state.userInfo?.lastName ? state.userInfo.lastName : undefined,
      contact: state.userInfo?.contact ? state.userInfo.contact : undefined,
      address: {
        first_line: state.userInfo?.address?.first_line,
      },
      DOB: state.userInfo?.DOB ? state.userInfo.DOB.split("T")[0] : undefined,
      uid: state.userInfo?.uid ? state.userInfo.uid : undefined,
      occupation: state.userInfo?.occupation
        ? state.userInfo.occupation
        : undefined,
    });
  }

  useEffect(() => {
    initialiseDetails();
  }, [state.userInfo]);

  // Taking input from users
  const handleInput = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
  };

  // Edit details backend route
  const editHandler = async () => {
    closeSnackbar();
    let config = {
      headers: {
        authorization: "b " + JSON.parse(Cookies.get("userInfo")).data.token,
      },
    };
    try {
      axios
        .put("/api/profile/edit", details, config)
        .then((res) => {
          console.log(res);
          dispatch({
            type: "USER_INFO_UPDATING",
            payload: res.data?.data,
          });
          initialiseDetails();
          enqueueSnackbar("Details Editted", { variant: "success" });
          getDetails();
        })
        .catch((err) => {
          console.log("helllo " + JSON.stringify(details));
          enqueueSnackbar(err.response?.data?.message, { variant: "error" });
          console.log(err);
        });
    } catch (err) {
      // console.log(err);
      enqueueSnackbar(err.message, { variant: "error" });
    }
  };

  function printDetails() {
    console.log("state: " + state.userInfo.username);
    console.log("details: " + details.username);
    console.log(details);
  }

  // Mapped data
  const allContent = [
    {
      toShow: show.Username,
      title: "Username",
      content: details.username,
      editButtonClick: editUsername,
      //saveClick: saveUsername,
      name: "username",
    },
    {
      toShow: show.FirstName,
      title: "First Name",
      content: details.firstName,
      editButtonClick: editFirstName,
      //saveClick: saveFirstName,
      name: "firstName",
    },
    {
      toShow: show.LastName,
      title: "Last Name",
      content: details.lastName,
      editButtonClick: editLastName,
      //saveClick: saveLastName,
      name: "lastName",
    },
    {
      toShow: show.Contact,
      title: "Contact",
      content: details.contact,
      editButtonClick: editContact,
      //saveClick: saveContact,
      name: "contact",
    },
    {
      toShow: show.Address,
      title: "Address",
      // content:
      //   "Flat-104, Vrundavan Apt., Near Gandhi Statue, Vikas Nagar, Pune",
      // content: details.address?.first_line,
      content: details.address.first_line,
      editButtonClick: editAddress,
      //saveClick: saveAddress,
      name: "address",
    },
    {
      toShow: show.Birthday,
      title: "Birthday",
      // content: "January 9. 2000",
      content: details.DOB?.split("T")[0],
      editButtonClick: editBirthday,
      //saveClick: saveBirthday,
      name: "DOB",
    },
    {
      toShow: show.UID,
      title: "Verification",
      content: details.verification,
      editButtonClick: editUID,
      //saveClick: saveUID,
      name: "verification",
    },
    {
      toShow: show.Occupation,
      title: "Occupation",
      content: details.occupation,
      editButtonClick: editOccupation,
      //saveClick: saveOccupation,
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
                          saveClick={save}
                          cancelClick={cancel}
                        />
                      ) : (
                        <AfterEditContent
                          title={data.title}
                          content={data.content}
                          saveClick={save}
                          cancelClick={cancel}
                          name={data.name}
                          onChange={handleInput}
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
      <button onClick={printDetails}>Hello</button>
    </section>
  );
}

export default EditTenant;

/* {
	"password":"anuj",
	"DOB": "2022-01-07",
	"occupation": "Professional",
	"verification": "ajbfisdbcs",
	"address": {
		"first_line": "jsdbcb"
	}

} */

/* {
	"address": {
		"first_line": "jsdbcb"
	},
    "username": "anujJadhav",
    "firstName": "Anuj",
    "lastName": "Jadhav",
    "email": "anujanuj@gmail.com",
    "contact": "1234512345",
    "DOB": "2002-11-15",
    "verification": "none",
    "occupation" : "King",
    "uid": "123"
} */

// {
//   "username":"adsdfgdfaffgh121",
//   "firstName":"Ansdfsduj",
//   "lastName":"Jadhav",
//   "email":"anujjadhavsfsdfsd@gmail.com",
//   "contact":8767924554,
//   "address":"dsfg",
//   "DOB":"2002-11-15T00:00:00.000Z",
//   "occupation":"King",
//   "verification":"verified"
// }

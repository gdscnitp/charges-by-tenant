import { useState } from "react";
import AfterEditContent from "./components/AfterEditContent";
import BeforeEditContent from "./components/BeforeEditContent";
import EditBirthday from "./components/EditBirthday";
import Taskbar from "../profile/components/Taskbar";
import Heading from "../landing/components/Heading";

function EditTenant() {
  const [show, setShow] = useState({
    Username: true,
    Name: true,
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
        Name: true,
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
  const editName = () => {
    allTrue();
    setShow((previousState) => {
      return { ...previousState, Name: false };
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
  const saveName = () => {
    setShow((previousState) => {
      return { ...previousState, Name: true };
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

  const allContent = [
    {
      toShow: show.Username,
      title: "Username",
      content: "rakesh123",
      editButtonClick: editUsername,
      saveCLick: saveUsername,
    },
    {
      toShow: show.Name,
      title: "Name",
      content: "Rakesh Kumar",
      editButtonClick: editName,
      saveCLick: saveName,
    },
    {
      toShow: show.Email,
      title: "Email",
      content: "rakesh@gmail.com",
      editButtonClick: editEmail,
      saveCLick: saveEmail,
    },
    {
      toShow: show.Contact,
      title: "Contact",
      content: "Not Provided",
      editButtonClick: editContact,
      saveCLick: saveContact,
    },
    {
      toShow: show.Address,
      title: "Address",
      content:
        "Flat-104, Vrundavan Apt., Near Gandhi Statue, Vikas Nagar, Pune",
      editButtonClick: editAddress,
      saveCLick: saveAddress,
    },
    {
      toShow: show.Birthday,
      title: "Birthday",
      content: "January 9. 2000",
      editButtonClick: editBirthday,
      saveCLick: saveBirthday,
    },
    {
      toShow: show.UID,
      title: "UID",
      content: "12345",
      editButtonClick: editUID,
      saveCLick: saveUID,
    },
    {
      toShow: show.Occupation,
      title: "Occupation",
      content: "Doctor",
      editButtonClick: editOccupation,
      saveCLick: saveOccupation,
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

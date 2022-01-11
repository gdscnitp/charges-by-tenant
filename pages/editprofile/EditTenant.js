import { useState } from "react";
import AfterEditContent from "./components/AfterEditContent";
import BeforeEditContent from "./components/BeforeEditContent";
import EditBirthday from "./components/EditBirthday";

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

  // const editUsername = () => {
  //   setShow((previousState) => {
  //     if (show.Username == false) {
  //       return { ...previousState, Username: true };
  //     } else {
  //       return { ...previousState, Username: false };
  //     }
  //   });
  // };

  // Edit Buttons
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

  return (
    <section>
      <div className="a-center">
        <div className="a-edit-container shadow-lg rounded p-3 bg-white">
          <strong>
            <div className="a-title">Your Information</div>
          </strong>
          <div className="container">
            {/* Username */}

            <div className="a-row-content">
              {show.Username ? (
                <BeforeEditContent
                  title="Username"
                  content="rakesh123"
                  editButtonClick={editUsername}
                />
              ) : (
                <AfterEditContent
                  title="Username"
                  content="rakesh123"
                  saveClick={saveUsername}
                  cancelClick={cancel}
                />
              )}
            </div>

            {/* name */}

            <div className="a-row-content">
              {show.Name ? (
                <BeforeEditContent
                  title="Name"
                  content="Rakesh Kumar"
                  editButtonClick={editName}
                />
              ) : (
                <AfterEditContent
                  title="Name"
                  content="Rakesh Kumar"
                  saveClick={saveName}
                  cancelClick={cancel}
                />
              )}
            </div>

            {/* Email */}

            <div className="a-row-content">
              {show.Email ? (
                <BeforeEditContent
                  title="Email"
                  content="rakesh@gmail.com"
                  editButtonClick={editEmail}
                />
              ) : (
                <AfterEditContent
                  title="Email"
                  content="rakesh@gmail.com"
                  saveClick={saveEmail}
                  cancelClick={cancel}
                />
              )}
            </div>

            {/* Contact */}

            <div className="a-row-content">
              {show.Contact ? (
                <BeforeEditContent
                  title="Contact"
                  content="Not Provided"
                  editButtonClick={editContact}
                />
              ) : (
                <AfterEditContent
                  title="Contact"
                  content="Not Provided"
                  saveClick={saveContact}
                  cancelClick={cancel}
                />
              )}
            </div>

            {/* Address */}

            <div className="a-row-content">
              {show.Address ? (
                <BeforeEditContent
                  title="Address"
                  content="Flat-104, Vrundavan Apt., Near Gandhi Statue, Vikas Nagar, Pune"
                  editButtonClick={editAddress}
                />
              ) : (
                <AfterEditContent
                  title="Address"
                  content="Flat-104, Vrundavan Apt., Near Gandhi Statue, Vikas Nagar, Pune"
                  saveClick={saveAddress}
                  cancelClick={cancel}
                />
              )}
            </div>

            {/* Birthday */}

            <div className="a-row-content">
              {show.Birthday ? (
                <BeforeEditContent
                  title="Birthday"
                  content="january 9. 2000"
                  editButtonClick={editBirthday}
                />
              ) : (
                <EditBirthday
                  title="Birthday"
                  saveClick={saveBirthday}
                  cancelClick={cancel}
                />
              )}
            </div>

            {/* UID */}
            <div className="a-row-content">
              {show.UID ? (
                <BeforeEditContent
                  title="UID"
                  content="12345"
                  editButtonClick={editUID}
                />
              ) : (
                <AfterEditContent
                  title="UID"
                  content="12345"
                  saveClick={saveUID}
                  cancelClick={cancel}
                />
              )}
            </div>

            {/* Occupation */}

            <div className="a-row-content">
              {show.Occupation ? (
                <BeforeEditContent
                  title="Occupation"
                  content="Doctor"
                  editButtonClick={editOccupation}
                />
              ) : (
                <AfterEditContent
                  title="Occupation"
                  content="Doctor"
                  saveClick={saveOccupation}
                  cancelClick={cancel}
                />
              )}
            </div>

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
    </section>
  );
}

export default EditTenant;

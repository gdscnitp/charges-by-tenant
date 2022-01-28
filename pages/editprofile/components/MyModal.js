import React, { useCallback, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useSnackbar } from "notistack";

function MyModal(props) {
  const MIN_LENGTH_OF_PASSWORD = 4;

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [password, setPassword] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  var details = props.details;
  const [detailsWithPassword, setDetailsWithPassword] = useState({
    username: "",
    firstName: "",
    lastName: "",
    contact: "",
    address: {
      first_line: "",
      landmark: "",
      city: "",
      state: "",
      country: "",
      pincode: "",
    },
    DOB: "",
    occupation: "",
    verification: "",
    password: "",
  });

  const validatePassword = (newPassword, confirmPassword) => {
    if (newPassword.length == 0) {
      enqueueSnackbar("Please enter new password", {
        variant: "error",
      });
      return false;
    } else if (confirmPassword.length == 0) {
      enqueueSnackbar("Please enter confirm password", {
        variant: "error",
      });
      return false;
    } else if (newPassword == confirmPassword) {
      if (newPassword.length < MIN_LENGTH_OF_PASSWORD) {
        enqueueSnackbar("Password is too short", {
          variant: "error",
        });
        return false;
      } else {
        enqueueSnackbar("Validated", {
          variant: "success",
        });
        return true;
      }
    } else {
      enqueueSnackbar("New password is different form confirm password", {
        variant: "error",
      });
      return false;
    }
  };

  const setPasswordInState = async (newPassword) => {
    setDetailsWithPassword({
      ...detailsWithPassword,
      username: details.username,
      firstName: details.firstName,
      lastName: details.lastName,
      contact: details.contact,
      address: {
        first_line: details.address.first_line,
        landmark: details.address.landmark,
        city: details.address.city,
        state: details.address.state,
        country: details.address.country,
        pincode: details.address.pincode,
      },
      DOB: details.DOB,
      occupation: details.occupation,
      verification: details.verification,
      password: newPassword,
    });
  };

  useEffect(() => {
    setPasswordInState(password.newPassword);
  }, [password]);

  const handleSubmit = () => {
    if (validatePassword(password.newPassword, password.confirmPassword)) {
      props.updatePassword(detailsWithPassword);
    }
  };

  const onChange = (e) => {
    setPassword({
      ...password,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <span className="a-edit-left-title">{props.buttonName}</span>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Change Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="a-edit-left-title">
                  New Password
                </Form.Label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter your new password"
                  onChange={onChange}
                  required
                  name="newPassword"
                />
                <Form.Label className="a-edit-left-title">
                  Confirm Password
                </Form.Label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Re-enter your new password"
                  onChange={onChange}
                  required
                  name="confirmPassword"
                />
              </Form.Group>
            </Form>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MyModal;

import React from "react";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import RadioButton from "./RadioButton";

function MyModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="warning"
        onClick={handleShow}
        className={props.classNameProp}
      >
        {props.buttonName}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>{props.fieldName}</Form.Label>
              <Form.Control type="email" placeholder={props.placeholderProp} />
            </Form.Group>
            <div className="form-group col-md-6 py-3">
              <label htmlFor="input">Type</label>

              <div className="container py-3">
                <div className="row">
                  <div className="col-6">
                    <RadioButton name="Fixed" />
                  </div>
                  <div className="col-6">
                    <RadioButton name="Variable" />
                  </div>
                </div>
              </div>
            </div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Amount:</Form.Label>
              <Form.Control type="email" placeholder="Enter Amount" />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MyModal;

import React, { useState } from "react";
import Signinform from "./Signinform";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
function Signin() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="Signin" style={{ display: "block", position: "initial" }}>
      <Button variant="dark" onClick={handleShow}>
        Sign In
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Signinform />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Close
          </Button>
          <Button variant="dark">Save changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Signin;

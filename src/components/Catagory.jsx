import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Catagory() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
       <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>add catagory</Modal.Title>
        </Modal.Header>

        <Modal.Body> <FloatingLabel controlId="floatingId" label="Catagory id" className="mb-3">
        <Form.Control type="number" placeholder="" />
      </FloatingLabel>
      
      <FloatingLabel controlId="vtitle" label="catagory title" className="mb-3">
        <Form.Control type="text" placeholder="" />
      </FloatingLabel>
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

    <div className='d-grid'>
        <button className='btn btn-success' onClick={handleShow}>add catagory</button>
    </div>
    </>
  )
}

export default Catagory
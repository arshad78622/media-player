import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Addvideo() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <button className='btn'><i  className="fa-solid fa-square-plus fa-2xl" style={{color: "#FFD43B",}} onClick={handleShow}/></button>

   

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <FloatingLabel controlId="floatingId" label="Video id" className="mb-3">
        <Form.Control type="number" placeholder="" />
      </FloatingLabel>
      
      <FloatingLabel controlId="vtitle" label="Video title" className="mb-3">
        <Form.Control type="text" placeholder="" />
      </FloatingLabel>

      <FloatingLabel controlId="imgurl" label="image url" className="mb-3">
        <Form.Control type="text" placeholder="" />
      </FloatingLabel>

      <FloatingLabel controlId="vurl" label="Video url" className="mb-3">
        <Form.Control type="text" placeholder="" />
      </FloatingLabel>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleClose}>
            upload
          </Button>
        </Modal.Footer>
      </Modal>
    </>
   
  )
}

export default Addvideo
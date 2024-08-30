import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function Videocard() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>heeriye</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/RLzC55ai0eo?si=9x0lA6ymHrhxXYzU&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>


         <Card style={{ width: '18rem' }}>
      <Card.Img onClick={handleShow} style={{cursor:"pointer"}} variant="top" src="https://i.ytimg.com/vi/RLzC55ai0eo/maxresdefault.jpg" />
      <Card.Body>
        <Card.Title>heeriye</Card.Title>

        <Button variant="btn"><i className="fa-solid fa-trash" style={{color: "#ff0000",}} /></Button>
      </Card.Body>
    </Card>
    </>
  )
}

export default Videocard
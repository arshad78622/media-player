import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import { deleteVideos } from '../services/allApis';
import { toast } from 'react-toastify';


function Videocard({video}) {


   
    const handleDelete=async()=>{
      const res =await deleteVideos(video.id) 
      console.log(res)
      if(res.status==200){
        toast.success("deleted successfully")
      }
      else{
        toast.warning("deletion failed")
      }
      
    }

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
          <Modal.Title>{video?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="315" src={video?.videoUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>


         <Card style={{ width: '18rem' }}>
      <Card.Img onClick={handleShow} style={{cursor:"pointer"}} variant="top" src={video?.imageUrl} />
      <Card.Body>
        <Card.Title>{video?.title}</Card.Title>

        <Button variant="btn"><i className="fa-solid fa-trash" style={{color: "#ff0000",}} onClick={handleDelete}/></Button>
      </Card.Body>
    </Card>
    </>
  )
}

export default Videocard